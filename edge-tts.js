// Microsoft Edge "Read aloud" neural voices (free, no API key).
// Minimal WebSocket client written with Node's built-in https module,
// because the endpoint needs custom headers (Origin / User-Agent).
import https from 'https';
import http from 'http';
import crypto from 'crypto';

const TRUSTED_CLIENT_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const CHROMIUM_FULL_VERSION = '143.0.3650.75';
const SEC_MS_GEC_VERSION = `1-${CHROMIUM_FULL_VERSION}`;
const HOST = 'speech.platform.bing.com';
const PATH = '/consumer/speech/synthesize/readaloud/edge/v1';
const WIN_EPOCH = 11644473600;

let clockSkew = 0; // seconds, corrected from the server's Date header after a 403

function secMsGec() {
  let ticks = Date.now() / 1000 + clockSkew + WIN_EPOCH;
  ticks -= ticks % 300;
  ticks *= 1e7;
  return crypto.createHash('sha256').update(`${ticks.toFixed(0)}${TRUSTED_CLIENT_TOKEN}`, 'ascii').digest('hex').toUpperCase();
}

function uuid() {
  return crypto.randomUUID().replace(/-/g, '');
}

function dateString() {
  const d = new Date(Date.now() + clockSkew * 1000);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const p = (n) => String(n).padStart(2, '0');
  return `${days[d.getUTCDay()]} ${months[d.getUTCMonth()]} ${p(d.getUTCDate())} ${d.getUTCFullYear()} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())} GMT+0000 (Coordinated Universal Time)`;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

// "tr-TR-AhmetNeural" -> "Microsoft Server Speech Text to Speech Voice (tr-TR, AhmetNeural)"
function fullVoiceName(short) {
  const m = /^([a-z]{2,3}-[A-Z]{2})-(.+)$/.exec(short);
  return m ? `Microsoft Server Speech Text to Speech Voice (${m[1]}, ${m[2]})` : short;
}

function wsFrame(opcode, payload) {
  const len = payload.length;
  let hdr;
  if (len < 126) {
    hdr = Buffer.alloc(2);
    hdr[1] = 0x80 | len;
  } else if (len < 65536) {
    hdr = Buffer.alloc(4);
    hdr[1] = 0x80 | 126;
    hdr.writeUInt16BE(len, 2);
  } else {
    hdr = Buffer.alloc(10);
    hdr[1] = 0x80 | 127;
    hdr.writeBigUInt64BE(BigInt(len), 2);
  }
  hdr[0] = 0x80 | opcode;
  const mask = crypto.randomBytes(4);
  const body = Buffer.alloc(len);
  for (let i = 0; i < len; i++) body[i] = payload[i] ^ mask[i & 3];
  return Buffer.concat([hdr, mask, body]);
}

function connect(opts) {
  return new Promise((resolve, reject) => {
    const key = crypto.randomBytes(16).toString('base64');
    const mod = opts.secure === false ? http : https;
    const path = `${opts.path}?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}&Sec-MS-GEC=${secMsGec()}&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}&ConnectionId=${uuid()}`;
    const req = mod.request({
      host: opts.host,
      port: opts.port,
      path,
      headers: {
        Connection: 'Upgrade',
        Upgrade: 'websocket',
        'Sec-WebSocket-Key': key,
        'Sec-WebSocket-Version': '13',
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
        Origin: 'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold',
        'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0`,
        'Accept-Language': 'en-US,en;q=0.9',
        Cookie: `muid=${crypto.randomBytes(16).toString('hex').toUpperCase()};`
      }
    });
    req.setTimeout(15000, () => req.destroy(new Error('Edge TTS bağlantı zaman aşımı')));
    req.on('upgrade', (_res, socket, head) => resolve({ socket, head }));
    req.on('response', (res) => {
      const err = new Error(`Edge TTS HTTP ${res.statusCode}`);
      err.status = res.statusCode;
      err.serverDate = res.headers.date;
      res.resume();
      reject(err);
    });
    req.on('error', reject);
    req.end();
  });
}

async function synthesizeOnce(text, voice, rate, opts) {
  const { socket, head } = await connect(opts);
  return new Promise((resolve, reject) => {
    let buf = head && head.length ? Buffer.from(head) : Buffer.alloc(0);
    let fragOp = 0;
    let frags = [];
    const audio = [];
    let done = false;
    const finish = (err) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      try {
        socket.write(wsFrame(0x8, Buffer.alloc(0)));
      } catch {}
      socket.destroy();
      if (err) reject(err);
      else if (audio.length === 0) reject(new Error('Edge TTS boş ses döndürdü'));
      else resolve(Buffer.concat(audio));
    };
    const timer = setTimeout(() => finish(new Error('Edge TTS yanıt zaman aşımı')), 30000);

    const onMessage = (op, data) => {
      if (op === 1) {
        if (data.toString('utf8').includes('Path:turn.end')) finish();
      } else if (op === 2 && data.length >= 2) {
        const hlen = data.readUInt16BE(0);
        const headers = data.subarray(2, 2 + hlen).toString('utf8');
        if (headers.includes('Path:audio')) {
          const chunk = data.subarray(2 + hlen);
          if (chunk.length) audio.push(Buffer.from(chunk));
        }
      }
    };

    const parse = () => {
      for (;;) {
        if (buf.length < 2) return;
        const b0 = buf[0];
        const b1 = buf[1];
        let len = b1 & 0x7f;
        let off = 2;
        if (len === 126) {
          if (buf.length < 4) return;
          len = buf.readUInt16BE(2);
          off = 4;
        } else if (len === 127) {
          if (buf.length < 10) return;
          len = Number(buf.readBigUInt64BE(2));
          off = 10;
        }
        let maskKey = null;
        if (b1 & 0x80) {
          if (buf.length < off + 4) return;
          maskKey = buf.subarray(off, off + 4);
          off += 4;
        }
        if (buf.length < off + len) return;
        let payload = Buffer.from(buf.subarray(off, off + len));
        if (maskKey) for (let i = 0; i < payload.length; i++) payload[i] ^= maskKey[i & 3];
        buf = buf.subarray(off + len);
        const fin = (b0 & 0x80) !== 0;
        const op = b0 & 0x0f;
        if (op === 0x8) return finish(audio.length ? null : new Error('Edge TTS bağlantıyı kapattı'));
        if (op === 0x9) {
          socket.write(wsFrame(0xa, payload));
          continue;
        }
        if (op === 0xa) continue;
        if (op === 0) {
          frags.push(payload);
          if (fin) {
            onMessage(fragOp, Buffer.concat(frags));
            frags = [];
          }
          continue;
        }
        if (fin) onMessage(op, payload);
        else {
          fragOp = op;
          frags = [payload];
        }
      }
    };

    socket.on('data', (d) => {
      buf = buf.length ? Buffer.concat([buf, d]) : d;
      try {
        parse();
      } catch (e) {
        finish(e);
      }
    });
    socket.on('error', (e) => finish(e));
    socket.on('close', () => finish(audio.length ? null : new Error('Edge TTS bağlantısı kapandı')));

    const ts = dateString();
    const config =
      `X-Timestamp:${ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
      '{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n';
    const ssml =
      `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>` +
      `<voice name='${fullVoiceName(voice)}'><prosody pitch='+0Hz' rate='${rate}' volume='+0%'>${escapeXml(text)}</prosody></voice></speak>`;
    const ssmlMsg = `X-RequestId:${uuid()}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${ts}Z\r\nPath:ssml\r\n\r\n${ssml}`;
    socket.write(wsFrame(0x1, Buffer.from(config, 'utf8')));
    socket.write(wsFrame(0x1, Buffer.from(ssmlMsg, 'utf8')));
    if (buf.length) parse();
  });
}

/**
 * @param {string} text
 * @param {string} voice  e.g. "tr-TR-AhmetNeural"
 * @param {number} speed  1 = normal, 1.2 = 20% faster
 * @returns {Promise<Buffer>} MP3 audio
 */
export async function edgeTts(text, voice, speed = 1, opts = {}) {
  const pct = Math.round((Number(speed) - 1) * 100) || 0;
  const rate = `${pct >= 0 ? '+' : ''}${pct}%`;
  const o = { host: HOST, path: PATH, ...opts };
  try {
    return await synthesizeOnce(text, voice, rate, o);
  } catch (err) {
    // Wrong clock on the PC makes the token invalid -> fix skew from server time and retry once
    if (err.status === 403 && err.serverDate) {
      const server = Date.parse(err.serverDate);
      if (!Number.isNaN(server)) clockSkew = (server - Date.now()) / 1000;
      return synthesizeOnce(text, voice, rate, o);
    }
    throw err;
  }
}
