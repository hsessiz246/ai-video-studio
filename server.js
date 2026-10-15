// AI Video Studio — web sunucusu (Render / herhangi bir Node 20+ sunucusu)
// Masaüstü sürümündeki yerel sunucunun internete uyarlanmış hâli:
// sesler (Edge + Google), yapay zekâ metin ve görsel üretimi aynı şekilde çalışır.
import http from 'http';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { edgeTts } from './edge-tts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');
const PORT = parseInt(process.env.PORT, 10) || 10000;
// İsteğe bağlı: Render'da APP_PASSWORD tanımlarsan site şifre sorar (kullanıcı adı önemsiz)
const APP_PASSWORD = process.env.APP_PASSWORD || '';

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// ---------------------------------------------------------------- TTS proxy
const ttsCache = new Map(); // key -> Buffer (keeps repeated previews instant)
const TTS_CACHE_LIMIT = 400;

function cachePut(key, buf) {
  if (ttsCache.size >= TTS_CACHE_LIMIT) ttsCache.delete(ttsCache.keys().next().value);
  ttsCache.set(key, buf);
}

// Google allows ~200 characters per request: split longer text and join the MP3s
function splitText(text, max = 180) {
  const parts = [];
  for (const sentence of text.match(/[^.!?]+[.!?]*/g) || [text]) {
    let cur = '';
    for (const word of sentence.trim().split(/\s+/)) {
      if ((cur + ' ' + word).trim().length > max && cur) {
        parts.push(cur);
        cur = word;
      } else cur = (cur + ' ' + word).trim();
    }
    if (cur) parts.push(cur);
  }
  return parts;
}

async function googleTtsLong(q, tl) {
  if (q.length <= 200) return fetchTts(q, tl);
  const bufs = [];
  for (const part of splitText(q)) bufs.push(await fetchTts(part, tl));
  return Buffer.concat(bufs);
}

// voice: "google" or "edge:<VoiceShortName>"; speed: 1 = normal
async function synthesize(q, tl, voice, speed) {
  if (voice && voice.startsWith('edge:')) {
    const key = `${voice}|${speed}|${q}`;
    if (ttsCache.has(key)) return { audio: ttsCache.get(key), engine: 'edge' };
    try {
      const audio = await edgeTts(q, voice.slice(5), speed);
      cachePut(key, audio);
      return { audio, engine: 'edge' };
    } catch (err) {
      console.warn('Edge TTS başarısız, Google sesine geçiliyor:', err.message);
    }
  }
  return { audio: await googleTtsLong(q, tl), engine: 'google' };
}

async function fetchTts(q, tl) {
  const key = `${tl}|${q}`;
  if (ttsCache.has(key)) return ttsCache.get(key);
  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(q)}&tl=${encodeURIComponent(tl)}&client=tw-ob`;
  let lastErr;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 15000);
      const r = await fetch(ttsUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: ctrl.signal
      });
      clearTimeout(timer);
      if (!r.ok) throw new Error(`TTS HTTP ${r.status}`);
      const buf = Buffer.from(await r.arrayBuffer());
      cachePut(key, buf);
      return buf;
    } catch (err) {
      lastErr = err;
      await new Promise((res) => setTimeout(res, 600 * (attempt + 1)));
    }
  }
  throw lastErr;
}

// ---------------------------------------------------------------- free AI services (no API key)
async function fetchWithTimeout(url, opts = {}, ms = 120000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...opts, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

// Text: Pollinations (OpenAI compatible, free)
async function llm(system, prompt) {
  let lastErr;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetchWithTimeout('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'openai',
          seed: Math.floor(Math.random() * 1e6),
          private: true,
          messages: [
            { role: 'system', content: system || 'You are a helpful assistant.' },
            { role: 'user', content: prompt }
          ]
        })
      }, 150000);
      if (!r.ok) throw new Error(`Metin servisi HTTP ${r.status}`);
      const text = (await r.text()).trim();
      if (!text) throw new Error('Boş yanıt');
      return text;
    } catch (err) {
      lastErr = err;
      await new Promise((res) => setTimeout(res, 1500 * (attempt + 1)));
    }
  }
  throw lastErr;
}

// Images: Pollinations Flux (free), cached on disk so projects reopen instantly
let imgCacheDir = null;
function getImgCacheDir() {
  if (!imgCacheDir) {
    imgCacheDir = path.join(os.tmpdir(), 'aivs-img-cache');
    fs.mkdirSync(imgCacheDir, { recursive: true });
  }
  return imgCacheDir;
}
const imgInflight = new Map();
async function aiImage(prompt, w, h, seed) {
  const key = crypto.createHash('sha1').update(`${prompt}|${w}|${h}|${seed}`).digest('hex');
  const file = path.join(getImgCacheDir(), key + '.jpg');
  if (fs.existsSync(file)) return fs.readFileSync(file);
  if (imgInflight.has(key)) return imgInflight.get(key);
  const job = (async () => {
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${w}&height=${h}&seed=${seed}&nologo=true&model=flux`;
    let lastErr;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const r = await fetchWithTimeout(url, { headers: { 'User-Agent': 'AIVideoStudio/1.4' } }, 150000);
        if (!r.ok) throw new Error(`Görsel servisi HTTP ${r.status}`);
        const type = r.headers.get('content-type') || '';
        if (!type.startsWith('image/')) throw new Error('Görsel yerine farklı yanıt geldi');
        const buf = Buffer.from(await r.arrayBuffer());
        fs.writeFileSync(file, buf);
        pruneImgCache();
        return buf;
      } catch (err) {
        lastErr = err;
        await new Promise((res) => setTimeout(res, 2000 * (attempt + 1)));
      }
    }
    throw lastErr;
  })();
  imgInflight.set(key, job);
  try {
    return await job;
  } finally {
    imgInflight.delete(key);
  }
}

function readBody(req, limit = 200000) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => {
      data += c;
      if (data.length > limit) reject(new Error('İstek çok büyük'));
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}


// ---------------------------------------------------------------- web-only helpers
const IMG_CACHE_MAX = 400; // ~ 60-100 MB, ücretsiz sunucunun diskini doldurmasın
function pruneImgCache() {
  try {
    const dir = getImgCacheDir();
    const files = fs.readdirSync(dir).map((f) => ({ f, t: fs.statSync(path.join(dir, f)).mtimeMs }));
    if (files.length <= IMG_CACHE_MAX) return;
    files.sort((a, b) => a.t - b.t);
    for (const { f } of files.slice(0, files.length - IMG_CACHE_MAX)) fs.unlinkSync(path.join(dir, f));
  } catch {}
}

// Basit kötüye kullanım koruması: IP başına dakikada en fazla N API isteği
const hits = new Map();
function rateLimited(ip, kind, max) {
  const key = ip + '|' + kind, now = Date.now();
  let h = hits.get(key);
  if (!h || now - h.t > 60000) h = { t: now, n: 0 };
  h.n++;
  hits.set(key, h);
  return h.n > max;
}
setInterval(() => { const now = Date.now(); for (const [k, h] of hits) if (now - h.t > 120000) hits.delete(k); }, 60000).unref();

function clientIp(req) {
  return String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
}

function checkAuth(req, res) {
  if (!APP_PASSWORD) return true;
  const m = /^Basic (.+)$/.exec(req.headers.authorization || '');
  if (m) {
    const pass = Buffer.from(m[1], 'base64').toString('utf8').split(':').slice(1).join(':');
    const a = Buffer.from(pass), b = Buffer.from(APP_PASSWORD);
    if (a.length === b.length && crypto.timingSafeEqual(a, b)) return true;
  }
  res.statusCode = 401;
  res.setHeader('WWW-Authenticate', 'Basic realm="AI Video Studio", charset="UTF-8"');
  res.end('Şifre gerekli');
  return false;
}

const EXT_HOSTS = ['replicate.com', 'replicate.delivery', 'fal.run', 'fal.media', 'fal.ai'];
const allowedExt = (h) => EXT_HOSTS.some((d) => h === d || h.endsWith('.' + d));

// ---------------------------------------------------------------- server
const server = http.createServer(async (req, res) => {
  try {
    const reqUrl = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(reqUrl.pathname);

    if (pathname === '/healthz') return res.end('ok');
    if (!checkAuth(req, res)) return;

    const ip = clientIp(req);
    const limits = { '/api/llm': 20, '/api/img': 60, '/api/tts': 150, '/api/ext': 120 };
    if (limits[pathname] && rateLimited(ip, pathname, limits[pathname])) {
      res.statusCode = 429;
      res.setHeader('Retry-After', '30');
      return res.end('Çok fazla istek, biraz bekleyip tekrar deneyin.');
    }

    if (pathname === '/api/llm' && req.method === 'POST') {
      try {
        const body = JSON.parse((await readBody(req)) || '{}');
        if (!body.prompt) { res.statusCode = 400; return res.end('prompt gerekli'); }
        const text = await llm(body.system, String(body.prompt).slice(0, 8000));
        res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
        return res.end(text);
      } catch (err) {
        res.statusCode = 502;
        res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
        return res.end(err.message);
      }
    }

    // Replicate / Fal video API'leri tarayıcıdan doğrudan çağrılamıyor (CORS) -> aracı
    if (pathname === '/api/ext') {
      let target;
      try { target = new URL(reqUrl.searchParams.get('u') || ''); } catch { res.statusCode = 400; return res.end('Geçersiz adres'); }
      if (target.protocol !== 'https:' || !allowedExt(target.hostname)) { res.statusCode = 403; return res.end('İzin verilmeyen adres'); }
      try {
        const headers = {};
        for (const h of ['authorization', 'content-type', 'prefer']) if (req.headers[h]) headers[h] = req.headers[h];
        const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : await readBody(req, 2000000);
        const r = await fetchWithTimeout(target.href, { method: req.method, headers, body }, 600000);
        res.statusCode = r.status;
        res.setHeader('Content-Type', r.headers.get('content-type') || 'application/octet-stream');
        return res.end(Buffer.from(await r.arrayBuffer()));
      } catch (err) {
        res.statusCode = 502;
        return res.end(JSON.stringify({ detail: 'Bağlantı hatası: ' + err.message }));
      }
    }

    // Web sürümünde video sunucuya değil, doğrudan tarayıcıdan indirilir
    if (pathname.startsWith('/api/rec/') || pathname === '/api/reveal') {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      return res.end('{"web":true}');
    }

    if (pathname === '/api/img') {
      const prompt = (reqUrl.searchParams.get('prompt') || '').slice(0, 1500);
      const w = Math.min(2048, Math.max(256, parseInt(reqUrl.searchParams.get('w'), 10) || 1280));
      const h = Math.min(2048, Math.max(256, parseInt(reqUrl.searchParams.get('h'), 10) || 720));
      const seed = parseInt(reqUrl.searchParams.get('seed'), 10) || 1;
      if (!prompt) { res.statusCode = 400; return res.end('prompt gerekli'); }
      try {
        const img = await aiImage(prompt, w, h, seed);
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        return res.end(img);
      } catch (err) {
        res.statusCode = 502;
        return res.end('Görsel üretilemedi: ' + err.message);
      }
    }

    if (pathname === '/api/tts') {
      const q = (reqUrl.searchParams.get('q') || '').trim().slice(0, 3000);
      const tl = reqUrl.searchParams.get('tl') || 'tr';
      const voice = reqUrl.searchParams.get('voice') || 'google';
      const speed = Math.min(2, Math.max(0.5, parseFloat(reqUrl.searchParams.get('rate')) || 1));
      if (!q) { res.statusCode = 400; return res.end('Missing text query'); }
      try {
        const { audio, engine } = await synthesize(q, tl, voice, speed);
        res.setHeader('X-TTS-Engine', engine);
        res.setHeader('Content-Type', 'audio/mpeg');
        res.setHeader('Content-Length', audio.length);
        return res.end(audio);
      } catch (err) {
        res.statusCode = 502;
        return res.end('TTS error: ' + err.message);
      }
    }

    // Statik dosyalar (public klasörünün dışına çıkılamaz)
    let filePath = path.normalize(path.join(PUBLIC_DIR, pathname === '/' ? 'index.html' : pathname));
    if (!filePath.startsWith(PUBLIC_DIR) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    const stat = fs.statSync(filePath);
    res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Cache-Control', ext === '.html' || ext === '.json' || ext === '.js' || ext === '.css' ? 'no-cache' : 'public, max-age=604800');
    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    res.statusCode = 500;
    res.end(err.message);
  }
});

server.requestTimeout = 0; // uzun yapay zekâ istekleri kesilmesin
server.listen(PORT, '0.0.0.0', () => console.log(`AI Video Studio web sürümü çalışıyor: http://localhost:${PORT}`));
