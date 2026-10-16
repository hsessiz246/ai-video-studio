// AI Video Studio — 3D Video Fabrikası
// Videonun üretim hattı tek bir makine olarak: Senaryo → Sahneler (bant) → Ses / Müzik → Montaj.
// Sahne plakalarına ve istasyonlara tıklanınca uygulama düzenleme panellerini açar.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const FONT = '"Inter", "Segoe UI", system-ui, sans-serif';
const AMBER = 0xff7a1a;

export function createFactory(host, opts = {}) {
  const cleanups = [];
  const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); cleanups.push(() => t.removeEventListener(ev, fn, o)); };
  const W = () => Math.max(1, host.clientWidth), H = () => Math.max(1, host.clientHeight);
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ------------------------------------------------------------ renderer / scene
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setSize(W(), H());
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.appendChild(renderer.domElement);
  renderer.domElement.style.display = 'block';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, W() / H(), 0.1, 400);
  const controls = new OrbitControls(camera, renderer.domElement);
  Object.assign(controls, { enableDamping: true, dampingFactor: 0.07, enablePan: true, minDistance: 4, maxDistance: 120, minPolarAngle: 0.1, maxPolarAngle: Math.PI * 0.48, rotateSpeed: 0.5, zoomSpeed: 0.8, screenSpacePanning: false });

  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const env = pmrem.fromScene(room, 0.04);
  scene.environment = env.texture;
  scene.environmentIntensity = 0.6;
  room.dispose(); pmrem.dispose();

  scene.add(new THREE.HemisphereLight(0xdbe5f4, 0x29211a, 1.8));
  const key = new THREE.DirectionalLight(0xfff1d8, 3.8);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.normalBias = 0.03;
  key.shadow.radius = 4;
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0xc4d4ed, 2.6); rim.position.set(4, 8, -10); scene.add(rim);
  const warm = new THREE.PointLight(0xffbd42, 30, 24, 2); scene.add(warm);

  // ------------------------------------------------------------ materials & helpers
  const mat = (color, metalness = 0.1, roughness = 0.4, extra = {}) => new THREE.MeshStandardMaterial({ color, metalness, roughness, ...extra });
  const M = {
    body: mat(0x30363f, 0.75, 0.3), base: mat(0x22272e, 0.8, 0.36), edge: mat(0x707986, 0.85, 0.25),
    chrome: mat(0xc3cad0, 0.92, 0.18), dark: mat(0x12171d, 0.45, 0.4), rubber: mat(0x0b1015, 0.1, 0.65),
    amber: mat(AMBER, 0.5, 0.3), ivory: mat(0xe0ded4, 0.45, 0.28), copper: mat(0xc57e45, 0.85, 0.3),
    light: mat(AMBER, 0.2, 0.25, { emissive: AMBER, emissiveIntensity: 1.6 }),
    whiteLight: mat(0xfff3d7, 0.1, 0.3, { emissive: 0xfff0d0, emissiveIntensity: 1.6 }),
    green: mat(0xc6d9a1, 0.1, 0.3, { emissive: 0x91b364, emissiveIntensity: 0.8 }),
    vinyl: mat(0x0a0a0c, 0.3, 0.25), paper: mat(0xf4f1ea, 0, 0.85)
  };
  const geoCache = new Map();
  const rbox = (w, h, d, r = 0.04) => { const k = `${w}|${h}|${d}|${r}`; if (!geoCache.has(k)) geoCache.set(k, r ? new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 3, h / 3, d / 3)) : new THREE.BoxGeometry(w, h, d)); return geoCache.get(k); };
  const box = (p, w, h, d, x, y, z, m = M.body, r = 0.04) => { const o = new THREE.Mesh(rbox(w, h, d, r), m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; p.add(o); return o; };
  const cyl = (p, r, h, x, y, z, m = M.chrome, r2 = r, seg = 28) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r2, h, seg), m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; p.add(o); return o; };
  const ball = (p, r, x, y, z, m = M.chrome) => { const o = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), m); o.position.set(x, y, z); o.castShadow = true; p.add(o); return o; };
  const canvasTex = (w, h, draw) => {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const ctx = c.getContext('2d'); draw(ctx, w, h);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    return { t, c, ctx, redraw(fn) { fn(ctx, w, h); t.needsUpdate = true; } };
  };
  const screenMat = (t) => new THREE.MeshBasicMaterial({ map: t, toneMapped: false });
  const wrap = (ctx, text, maxW) => { const words = String(text || '').split(/\s+/), lines = []; let cur = ''; for (const w of words) { const t = cur ? cur + ' ' + w : w; if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; } if (cur) lines.push(cur); return lines; };

  // pickables: mesh -> { kind, index }
  const pickables = [];
  const tagPick = (obj, info) => { obj.traverse(o => { if (o.isMesh) { o.userData.pick = info; pickables.push(o); } }); };

  // ------------------------------------------------------------ world
  const world = new THREE.Group(); scene.add(world);
  let floor = null, conveyor = null, plates = [], stations = {}, layout = { L: 10 };
  const texCache = new Map();
  const loader = new THREE.TextureLoader();
  loader.setCrossOrigin('anonymous');
  const getTex = (url) => {
    if (!url) return null;
    if (texCache.has(url)) return texCache.get(url);
    const t = loader.load(url, () => { t.needsUpdate = true; needsFrame = true; }, undefined, () => { texCache.delete(url); });
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    texCache.set(url, t);
    return t;
  };

  // labels (HTML, projected each frame)
  const labelLayer = document.createElement('div');
  labelLayer.className = 'fx-labels';
  host.appendChild(labelLayer);
  const labels = [];
  const addLabel = (obj, title, sub, kind) => {
    const el = document.createElement('button');
    el.type = 'button'; el.className = 'fx-label';
    el.innerHTML = `<i></i><b>${title}</b><small>${sub}</small>`;
    el.onclick = () => opts.onPick && opts.onPick(kind, 0);
    el.onmouseenter = () => setHover({ kind, index: 0 });
    el.onmouseleave = () => setHover(null);
    labelLayer.appendChild(el);
    labels.push({ obj, el, kind });
  };

  function disposeGroup(g) {
    g.traverse(o => { if (o.isMesh) { if (!geoCacheHas(o.geometry)) o.geometry.dispose(); const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => { if (!Object.values(M).includes(m)) { if (m.map && ![...texCache.values()].includes(m.map)) m.map.dispose(); m.dispose(); } }); } });
  }
  const geoCacheHas = (g) => { for (const v of geoCache.values()) if (v === g) return true; return false; };

  // ---------- floor plate
  function buildFloor(L) {
    if (floor) { world.remove(floor); disposeGroup(floor); }
    floor = new THREE.Group(); world.add(floor);
    const fw = L + 15, fd = 12;
    const grid = canvasTex(1024, 512, (c, w, h) => {
      c.fillStyle = '#1b1f25'; c.fillRect(0, 0, w, h);
      c.strokeStyle = 'rgba(244,241,234,0.05)'; c.lineWidth = 1;
      for (let x = 0; x <= w; x += 32) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, h); c.stroke(); }
      for (let y = 0; y <= h; y += 32) { c.beginPath(); c.moveTo(0, y); c.lineTo(w, y); c.stroke(); }
      c.fillStyle = 'rgba(255,122,26,0.55)'; c.font = `600 13px ${FONT}`;
      c.fillText('AI VIDEO STUDIO  ·  ÜRETİM HATTI 01', 18, h - 18);
    });
    grid.t.wrapS = grid.t.wrapT = THREE.RepeatWrapping; grid.t.repeat.set(fw / 16, fd / 8);
    const top = new THREE.Mesh(rbox(fw, 0.3, fd, 0.12), [M.base, M.base, mat(0xffffff, 0.75, 0.42, { map: grid.t }), M.base, M.base, M.base]);
    top.position.y = -0.15; top.receiveShadow = true; floor.add(top);
    box(floor, fw + 0.3, 0.12, fd + 0.3, 0, -0.36, 0, M.edge, 0.06);
    // amber guide line in front of the belt
    box(floor, L + 2, 0.012, 0.035, 0, 0.006, 1.55, M.light, 0);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(floor, 0.09, 0.03, sx * (fw / 2 - 0.4), 0.015, sz * (fd / 2 - 0.4), M.chrome, 0.09, 16);
  }

  // ---------- conveyor
  let belt = null, rollers = [];
  function buildConveyor(L) {
    if (conveyor) { world.remove(conveyor); disposeGroup(conveyor); }
    conveyor = new THREE.Group(); world.add(conveyor); rollers = [];
    const len = L + 1.6;
    box(conveyor, len, 0.34, 1.7, 0, 0.32, 0, M.body, 0.06);
    const beltTex = canvasTex(512, 64, (c, w, h) => { c.fillStyle = '#0d1116'; c.fillRect(0, 0, w, h); c.fillStyle = '#1a2028'; for (let x = 0; x < w; x += 16) c.fillRect(x, 0, 6, h); });
    beltTex.t.wrapS = THREE.RepeatWrapping; beltTex.t.repeat.set(len / 2, 1);
    belt = new THREE.Mesh(new THREE.BoxGeometry(len - 0.2, 0.04, 1.42), mat(0xffffff, 0.2, 0.7, { map: beltTex.t }));
    belt.position.set(0, 0.51, 0); belt.receiveShadow = true; conveyor.add(belt);
    for (const z of [-0.8, 0.8]) box(conveyor, len, 0.09, 0.07, 0, 0.56, z, M.chrome, 0.02);
    for (const x of [-len / 2 + 0.05, len / 2 - 0.05]) { const r = cyl(conveyor, 0.2, 1.5, x, 0.34, 0, M.chrome); r.rotation.x = Math.PI / 2; rollers.push(r); }
    for (let x = -len / 2 + 1; x < len / 2 - 0.5; x += 1.6) { box(conveyor, 0.12, 0.3, 0.12, x, 0.08, 0.72, M.dark, 0.03); box(conveyor, 0.12, 0.3, 0.12, x, 0.08, -0.72, M.dark, 0.03); }
  }

  // ---------- scene plates
  const plateFace = (s, i, sel) => canvasTex(512, 96, (c, w, h) => {
    c.fillStyle = sel ? '#2a1a0c' : '#15191f'; c.fillRect(0, 0, w, h);
    c.fillStyle = sel ? '#ff7a1a' : '#f4f1ea'; c.font = `700 40px ${FONT}`; c.fillText(String(i + 1).padStart(2, '0'), 22, 62);
    c.fillStyle = '#9aa0a8'; c.font = `500 26px ${FONT}`;
    const dur = `${(+s.duration || 10).toFixed(s.duration % 1 ? 1 : 0)} sn`;
    c.fillText(dur, w - 22 - c.measureText(dur).width, 60);
    c.fillStyle = sel ? '#ff7a1a' : '#3a4049'; c.fillRect(0, h - 6, w, 6);
  });
  function placeholder(s, i, aspect) {
    const pw = aspect === 'portrait' ? 360 : 640, ph = aspect === 'portrait' ? 640 : 360;
    return canvasTex(pw, ph, (c, w, h) => {
      const g = c.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#2b3038'); g.addColorStop(1, '#14171c'); c.fillStyle = g; c.fillRect(0, 0, w, h);
      c.fillStyle = '#ff7a1a'; c.font = `700 ${Math.round(w * 0.12)}px ${FONT}`; c.textAlign = 'center';
      c.fillText(s.videoUrl ? '▶ VİDEO' : 'GÖRSEL YOK', w / 2, h / 2 - 10);
      c.fillStyle = '#9aa0a8'; c.font = `500 ${Math.round(w * 0.055)}px ${FONT}`;
      wrap(c, s.title || s.visualPrompt || '', w * 0.8).slice(0, 4).forEach((l, k) => c.fillText(l, w / 2, h / 2 + 34 + k * w * 0.07));
    });
  }
  function buildPlates(scenes, current, aspect) {
    for (const p of plates) { conveyor.remove(p.group); disposeGroup(p.group); }
    for (let k = pickables.length - 1; k >= 0; k--) if (pickables[k].userData.pick.kind === 'scene') pickables.splice(k, 1);
    plates = [];
    const n = scenes.length, gap = layout.gap, start = -((n - 1) * gap) / 2;
    const portrait = aspect === 'portrait';
    const fw = portrait ? 0.92 : 1.36, fh = portrait ? 1.64 : 0.77;
    scenes.forEach((s, i) => {
      const g = new THREE.Group();
      const x = start + i * gap;
      g.position.set(x, 0.53, 0);
      // cart
      box(g, fw + 0.24, 0.12, 0.62, 0, 0.06, 0, M.dark, 0.04);
      box(g, 0.14, 0.32, 0.14, 0, 0.28, -0.12, M.edge, 0.03);
      const face = plateFace(s, i, i === current);
      const label = new THREE.Mesh(new THREE.PlaneGeometry(fw + 0.2, (fw + 0.2) * 96 / 512), screenMat(face.t));
      label.position.set(0, 0.07, 0.315); label.rotation.x = -0.25; g.add(label);
      // frame + picture
      const frame = new THREE.Group(); frame.position.set(0, 0.42 + fh / 2, -0.08); frame.rotation.x = -0.08; g.add(frame);
      const sel = i === current;
      box(frame, fw + 0.1, fh + 0.1, 0.07, 0, 0, -0.02, sel ? M.amber : M.body, 0.03);
      const tex = getTex(s.imageUrl) || placeholder(s, i, aspect).t;
      const pic = new THREE.Mesh(new THREE.PlaneGeometry(fw, fh), screenMat(tex));
      pic.position.z = 0.017; frame.add(pic);
      if (s.videoUrl) { const play = new THREE.Mesh(new THREE.CircleGeometry(0.13, 3), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 })); play.rotation.z = -Math.PI / 2; play.position.z = 0.02; frame.add(play); }
      const lamp = box(g, 0.06, 0.03, 0.06, fw / 2, 0.135, 0.22, sel ? M.light : (s.imageUrl || s.videoUrl ? M.green : M.dark), 0.01);
      conveyor.add(g);
      tagPick(g, { kind: 'scene', index: i });
      plates.push({ group: g, frame, lamp, x, baseY: 0.53 });
    });
  }

  // ---------- stations
  function stationBase(g, w, d, title) {
    box(g, w, 0.16, d, 0, 0.08, 0, M.body, 0.06);
    box(g, w + 0.08, 0.04, d + 0.08, 0, 0.18, 0, M.edge, 0.02);
    return g;
  }
  function buildStations(L) {
    for (const k in stations) { world.remove(stations[k].group); disposeGroup(stations[k].group); }
    for (let k = pickables.length - 1; k >= 0; k--) if (pickables[k].userData.pick.kind !== 'scene') pickables.splice(k, 1);
    labels.splice(0).forEach(l => l.el.remove());
    stations = {};
    const half = L / 2 + 1.2;

    // SENARYO — terminal with a paper sheet showing the prompt
    {
      const g = new THREE.Group(); g.position.set(-half - 2.2, 0, 0.2); g.rotation.y = 0.35; world.add(g);
      stationBase(g, 2.8, 2.2);
      box(g, 2.2, 0.5, 1.2, 0, 0.45, 0.25, M.body, 0.08);
      for (let r = 0; r < 4; r++) for (let k = 0; k < 10; k++) box(g, 0.15, 0.06, 0.15, -0.8 + k * 0.178 + (r % 2) * 0.05, 0.73, 0.0 + r * 0.19, r === 3 && k > 2 && k < 7 ? M.ivory : M.dark, 0.03);
      const paper = canvasTex(512, 640, () => {});
      const sheet = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 1.56), screenMat(paper.t));
      sheet.position.set(0, 1.62, -0.25); sheet.rotation.x = -0.12; g.add(sheet);
      box(g, 1.55, 0.18, 0.28, 0, 0.82, -0.3, M.chrome, 0.06);
      const led = box(g, 0.12, 0.05, 0.12, 0.95, 0.73, 0.6, M.light, 0.02);
      tagPick(g, { kind: 'script', index: 0 });
      stations.script = { group: g, paper, led };
      addLabel(g, 'SENARYO', 'Prompt yaz · sahne üret', 'script');
    }
    // SES — microphone + speaker
    {
      const g = new THREE.Group(); g.position.set(-L / 4 - 0.6, 0, -3.3); world.add(g);
      stationBase(g, 2.6, 1.8);
      cyl(g, 0.06, 1.5, -0.6, 0.95, 0, M.chrome, 0.06, 12);
      cyl(g, 0.3, 0.05, -0.6, 0.22, 0, M.dark, 0.32);
      const mic = new THREE.Group(); mic.position.set(-0.6, 1.85, 0); g.add(mic);
      cyl(mic, 0.19, 0.5, 0, 0, 0, M.dark, 0.17); ball(mic, 0.21, 0, 0.3, 0, mat(0x8a9099, 0.9, 0.35, { wireframe: false }));
      const ring = cyl(mic, 0.215, 0.05, 0, 0.18, 0, M.amber); ring.material = M.amber;
      box(g, 1.1, 1.3, 0.9, 0.55, 0.85, 0, M.body, 0.08);
      for (const [y, r] of [[1.12, 0.3], [0.58, 0.18]]) { const c1 = cyl(g, r, 0.06, 0.55, y, 0.46, M.dark, r); c1.rotation.x = Math.PI / 2; const c2 = cyl(g, r * 0.4, 0.07, 0.55, y, 0.48, M.chrome, r * 0.4); c2.rotation.x = Math.PI / 2; }
      const bars = []; for (let k = 0; k < 6; k++) bars.push(box(g, 0.08, 0.3, 0.08, -0.3 + k * 0.11 - 0.6 + 0.55, 0.32, 0.72, M.light, 0.02));
      tagPick(g, { kind: 'voice', index: 0 });
      stations.voice = { group: g, bars, mic };
      addLabel(g, 'SES', 'Seslendirici · hız · altyazı', 'voice');
    }
    // MÜZİK — turntable
    {
      const g = new THREE.Group(); g.position.set(L / 4 + 0.6, 0, -3.3); world.add(g);
      stationBase(g, 2.6, 1.8);
      box(g, 2.0, 0.32, 1.4, 0, 0.36, 0, M.ivory, 0.08);
      const platter = cyl(g, 0.6, 0.06, -0.3, 0.55, 0, M.chrome, 0.6, 48);
      const disc = new THREE.Group(); disc.position.set(-0.3, 0.6, 0); g.add(disc);
      cyl(disc, 0.56, 0.02, 0, 0, 0, M.vinyl, 0.56, 48); cyl(disc, 0.18, 0.025, 0, 0.002, 0, M.amber, 0.18, 32);
      cyl(g, 0.07, 0.2, 0.62, 0.62, -0.45, M.chrome, 0.07, 12);
      const arm = box(g, 0.05, 0.04, 0.9, 0.5, 0.74, -0.08, M.chrome, 0.015); arm.rotation.y = 0.35;
      for (let k = 0; k < 3; k++) cyl(g, 0.06, 0.06, 0.55 + k * 0.17, 0.55, 0.52, k === 0 ? M.amber : M.dark, 0.06, 16);
      tagPick(g, { kind: 'music', index: 0 });
      stations.music = { group: g, disc, platter };
      addLabel(g, 'MÜZİK', 'Fon müziği · ses seviyesi', 'music');
    }
    // MONTAJ — big monitor + reel
    {
      const g = new THREE.Group(); g.position.set(half + 2.4, 0, 0.2); g.rotation.y = -0.35; world.add(g);
      stationBase(g, 3.0, 2.2);
      box(g, 0.3, 1.0, 0.3, 0, 0.7, -0.3, M.edge, 0.06);
      box(g, 2.5, 1.6, 0.16, 0, 1.95, -0.3, M.dark, 0.08);
      const scr = canvasTex(640, 400, () => {});
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.4), screenMat(scr.t));
      screen.position.set(0, 1.95, -0.21); g.add(screen);
      const rec = ball(g, 0.07, 1.08, 2.62, -0.2, M.light);
      const reel = new THREE.Group(); reel.position.set(-0.9, 0.62, 0.55); reel.rotation.x = Math.PI / 2; g.add(reel);
      cyl(reel, 0.42, 0.06, 0, 0, 0, M.chrome, 0.42, 36); for (let k = 0; k < 5; k++) { const h = cyl(reel, 0.09, 0.08, Math.cos(k * 1.2566) * 0.24, 0, Math.sin(k * 1.2566) * 0.24, M.dark, 0.09, 16); h.position.y = 0.01; }
      cyl(reel, 0.06, 0.12, 0, 0, 0, M.amber, 0.06, 16);
      box(g, 1.1, 0.16, 0.5, 0.65, 0.3, 0.55, M.amber, 0.05);
      tagPick(g, { kind: 'export', index: 0 });
      stations.export = { group: g, scr, rec, reel, screenMesh: screen };
      addLabel(g, 'MONTAJ', 'Önizle · videoyu oluştur', 'export');
    }
  }

  // ------------------------------------------------------------ state from the app
  let state = { scenes: [], current: 0, aspect: 'portrait', prompt: '', playing: false, busy: false, progress: 0, status: '', total: 0 };
  let sig = '';
  function update(next) {
    state = { ...state, ...next };
    const n = state.scenes.length;
    const gap = state.aspect === 'portrait' ? 1.3 : 1.72;
    const L = Math.max(7, n * gap);
    const s2 = JSON.stringify([n, state.aspect, L]);
    const plateSig = JSON.stringify(state.scenes.map(s => [s.imageUrl ? String(s.imageUrl).slice(-80) + String(s.imageUrl).length : '', s.videoUrl ? 1 : 0, s.duration, s.title && s.title.slice(0, 20)])) + state.current + state.aspect;
    if (s2 !== sig) {
      sig = s2; layout = { L, gap };
      buildFloor(L); buildConveyor(L); buildStations(L); buildPlates(state.scenes, state.current, state.aspect); lastPlateSig = plateSig;
      fitCamera(true);
    } else if (plateSig !== lastPlateSig) { buildPlates(state.scenes, state.current, state.aspect); lastPlateSig = plateSig; }
    paintPaper(); paintMonitor();
    needsFrame = true;
  }
  let lastPlateSig = '';
  function paintPaper() {
    const st = stations.script; if (!st) return;
    st.paper.redraw((c, w, h) => {
      c.fillStyle = '#f4f1ea'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#ff7a1a'; c.fillRect(0, 0, w, 10);
      c.fillStyle = '#7b7f86'; c.font = `600 22px ${FONT}`; c.fillText('SENARYO / PROMPT', 34, 56);
      c.fillStyle = '#1b1f25'; c.font = `500 26px ${FONT}`;
      const txt = state.prompt || (state.scenes.length ? state.scenes.map(s => s.voiceText || '').join(' ') : 'Buraya tıkla, videonun konusunu yaz…');
      wrap(c, txt, w - 68).slice(0, 15).forEach((l, k) => c.fillText(l, 34, 104 + k * 34));
      c.fillStyle = '#9aa0a8'; c.font = `500 20px ${FONT}`; c.fillText(`${state.scenes.length} sahne · ${Math.round(state.total)} sn`, 34, h - 28);
    });
  }
  function paintMonitor() {
    const st = stations.export; if (!st) return;
    const s = state.scenes[state.current];
    const img = s && s.imageUrl ? getTex(s.imageUrl) : null;
    st.scr.redraw((c, w, h) => {
      c.fillStyle = '#07090c'; c.fillRect(0, 0, w, h);
      const im = img && img.image && img.image.complete && img.image.naturalWidth ? img.image : null;
      if (im) { const r = Math.min(w / im.naturalWidth, (h - 50) / im.naturalHeight); const dw = im.naturalWidth * r, dh = im.naturalHeight * r; try { c.drawImage(im, (w - dw) / 2, (h - 50 - dh) / 2, dw, dh); } catch { } }
      else { c.fillStyle = '#ff7a1a'; c.font = `700 40px ${FONT}`; c.textAlign = 'center'; c.fillText(state.scenes.length ? 'ÖNİZLEME' : 'SAHNE YOK', w / 2, h / 2 - 20); c.textAlign = 'left'; }
      c.fillStyle = '#12161b'; c.fillRect(0, h - 50, w, 50);
      c.fillStyle = state.busy ? '#ff7a1a' : '#c6d9a1'; c.font = `600 22px ${FONT}`;
      c.fillText(state.busy ? (state.status || 'Çalışıyor…').slice(0, 44) : `SAHNE ${state.current + 1}/${state.scenes.length} · TOPLAM ${Math.round(state.total)} SN`, 16, h - 17);
      if (state.busy) { c.fillStyle = '#ff7a1a'; c.fillRect(0, h - 4, w * Math.min(1, (state.progress || 0) / 100), 4); }
    });
    if (img && !(img.image && img.image.complete)) setTimeout(paintMonitor, 600);
  }

  // ------------------------------------------------------------ camera presets
  const camGoal = { pos: new THREE.Vector3(), target: new THREE.Vector3(), active: false };
  let insets = { l: 0, r: 0, t: 0, b: 0 }, lastCam = 'overview';
  function applyView() {
    camera.aspect = W() / H();
    camera.setViewOffset(W(), H(), (insets.r - insets.l) / 2, (insets.b - insets.t) / 2, W(), H());
    camera.updateProjectionMatrix();
  }
  function fitCamera(instant) { setCamera('overview', instant); }
  function setCamera(name, instant = false) {
    lastCam = name;
    const effW = Math.max(200, W() - insets.l - insets.r), effH = Math.max(200, H() - insets.t - insets.b);
    const L = layout.L + 14.5, aspect = effW / effH;
    const halfV = Math.atan(Math.tan(THREE.MathUtils.degToRad(16)) * effH / H());
    const dist = Math.max(12, (L / 2) / Math.tan(halfV) / Math.max(0.5, aspect) * 1.0);
    const tgt = new THREE.Vector3(0, 0.4, -1.2);
    let pos;
    if (name === 'top') pos = new THREE.Vector3(0, dist * 1.05, 2);
    else if (name === 'side') pos = new THREE.Vector3(-dist * 0.75, dist * 0.32, dist * 0.55);
    else if (name === 'scene') {
      const p = plates[state.current];
      const x = p ? p.x : 0;
      tgt.set(x, 1.3, 0); pos = new THREE.Vector3(x + 0.6, 2.4, 5.6);
    } else if (stations[name]) {
      const g = stations[name].group; const wp = new THREE.Vector3(); g.getWorldPosition(wp);
      tgt.set(wp.x, 1.1, wp.z); pos = new THREE.Vector3(wp.x + (wp.x < 0 ? 2.6 : wp.x > 0 ? -2.6 : 0) * 0.3, 3.2, wp.z + 6.2);
    } else pos = new THREE.Vector3(0, dist * 0.4, dist * 0.92);
    camGoal.pos.copy(pos); camGoal.target.copy(tgt);
    if (instant || reduceMotion) { camera.position.copy(pos); controls.target.copy(tgt); camGoal.active = false; }
    else camGoal.active = true;
    needsFrame = true;
  }
  on(renderer.domElement, 'pointerdown', () => { camGoal.active = false; });
  on(renderer.domElement, 'wheel', () => { camGoal.active = false; }, { passive: true });

  // ------------------------------------------------------------ hover / click
  const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
  let hover = null, downAt = null;
  const tip = document.createElement('div'); tip.className = 'fx-tip'; host.appendChild(tip);
  function pick(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(mouse, camera);
    const hit = ray.intersectObjects(pickables, false)[0];
    return hit ? hit.object.userData.pick : null;
  }
  const tipText = (h) => {
    if (!h) return '';
    if (h.kind === 'scene') { const s = state.scenes[h.index] || {}; return `<b>Sahne ${h.index + 1}</b> · ${(+s.duration || 10)} sn<p>${(s.voiceText || s.title || '').slice(0, 110)}</p><small>Tıkla: prompt, süre ve resmi düzenle</small>`; }
    return { script: '<b>Senaryo</b><p>Videonun konusunu ya da senaryosunu yaz, sahneleri üret.</p>', voice: '<b>Ses</b><p>Seslendirici, konuşma hızı ve altyazı ayarları.</p>', music: '<b>Müzik</b><p>Fon müziği ve ses seviyesi.</p>', export: '<b>Montaj</b><p>Önizlemeyi oynat, videoyu oluştur ve indir.</p>' }[h.kind] || '';
  };
  function setHover(h, ev) {
    const same = h && hover && h.kind === hover.kind && h.index === hover.index;
    hover = h;
    renderer.domElement.style.cursor = h ? 'pointer' : 'grab';
    if (!h) { tip.classList.remove('on'); }
    else {
      if (!same) tip.innerHTML = tipText(h);
      if (ev) { const r = host.getBoundingClientRect(); tip.style.left = Math.min(r.width - 250, ev.clientX - r.left + 16) + 'px'; tip.style.top = (ev.clientY - r.top + 14) + 'px'; tip.classList.add('on'); }
    }
    labels.forEach(l => l.el.classList.toggle('hot', !!h && h.kind === l.kind));
    needsFrame = true;
  }
  on(renderer.domElement, 'pointermove', (ev) => { if (ev.buttons) { tip.classList.remove('on'); return; } setHover(pick(ev), ev); });
  on(renderer.domElement, 'pointerleave', () => setHover(null));
  on(renderer.domElement, 'pointerdown', (ev) => { downAt = [ev.clientX, ev.clientY]; });
  on(renderer.domElement, 'pointerup', (ev) => {
    if (!downAt || Math.hypot(ev.clientX - downAt[0], ev.clientY - downAt[1]) > 6) return;
    const h = pick(ev);
    if (h && opts.onPick) opts.onPick(h.kind, h.index);
  });

  // ------------------------------------------------------------ loop
  let needsFrame = true, raf = 0, last = performance.now(), visible = true;
  const tmp = new THREE.Vector3();
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (!visible) return;
    const anim = !reduceMotion;
    if (camGoal.active) {
      camera.position.lerp(camGoal.pos, 1 - Math.pow(0.0015, dt));
      controls.target.lerp(camGoal.target, 1 - Math.pow(0.0015, dt));
      if (camera.position.distanceTo(camGoal.pos) < 0.02) camGoal.active = false;
    }
    controls.update();
    const t = now / 1000;
    if (anim) {
      if (belt && belt.material.map) belt.material.map.offset.x -= dt * (state.playing || state.busy ? 0.35 : 0.06);
      rollers.forEach(r => (r.rotation.y += dt * (state.playing || state.busy ? 2.4 : 0.4)));
      if (stations.music) stations.music.disc.rotation.y -= dt * (state.playing ? 3.5 : 0.25);
      if (stations.export) { stations.export.reel.rotation.y += dt * (state.busy || state.playing ? 2.6 : 0.2); stations.export.rec.material = (state.busy && Math.sin(t * 6) > 0) ? M.light : (state.busy ? M.dark : M.light); }
      if (stations.voice) stations.voice.bars.forEach((b, k) => { const v = state.playing ? 0.3 + Math.abs(Math.sin(t * (3 + k) + k)) * 1.3 : 0.25 + Math.sin(t * 1.4 + k) * 0.05; b.scale.y = v; b.position.y = 0.2 + 0.15 * v; });
      if (stations.script) stations.script.led.material = (Math.sin(t * 2.2) > 0 || state.busy) ? M.light : M.dark;
      plates.forEach((p, k) => {
        const sel = k === state.current, hov = hover && hover.kind === 'scene' && hover.index === k;
        const goal = sel ? 0.1 : hov ? 0.06 : 0;
        p.group.position.y += (p.baseY + goal - p.group.position.y) * Math.min(1, dt * 10);
        p.frame.rotation.y = sel ? Math.sin(t * 0.8) * 0.06 : 0;
      });
    }
    for (const k in stations) { const g = stations[k].group; const s = hover && hover.kind === k ? 1.03 : 1; g.scale.lerp(tmp.set(s, s, s), Math.min(1, dt * 10)); }
    // light rig follows the line length
    key.position.set(-layout.L * 0.3, 14, 9); key.target.position.set(0, 0, 0);
    const sc = key.shadow.camera; const ext = layout.L / 2 + 7; Object.assign(sc, { left: -ext, right: ext, top: 9, bottom: -9, near: 0.5, far: 40 }); sc.updateProjectionMatrix();
    warm.position.set(-layout.L / 2 - 2, 5, 3);
    renderer.render(scene, camera);
    // labels
    const w = W(), h = H();
    for (const l of labels) {
      l.obj.getWorldPosition(tmp); tmp.y += 3.1; tmp.project(camera);
      const vis = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1;
      l.el.style.display = vis ? '' : 'none';
      if (vis) l.el.style.transform = `translate(-50%,-100%) translate(${((tmp.x + 1) / 2) * w}px, ${((1 - tmp.y) / 2) * h}px)`;
    }
  }
  applyView();
  raf = requestAnimationFrame(frame);
  const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; }); io.observe(host);
  const ro = new ResizeObserver(() => { renderer.setSize(W(), H()); applyView(); if (lastCam === 'overview') setCamera('overview', true); needsFrame = true; });
  ro.observe(host);

  return {
    update,
    setCamera: (n) => setCamera(n),
    setInsets(i) { const ch = JSON.stringify(i) !== JSON.stringify(insets); insets = i; applyView(); if (ch && ['overview', 'side', 'top'].includes(lastCam)) setCamera(lastCam); },
    focusScene: (i) => { state.current = i; setCamera('scene'); },
    dispose() {
      cancelAnimationFrame(raf); io.disconnect(); ro.disconnect();
      cleanups.forEach(f => f());
      controls.dispose();
      world.traverse(o => { if (o.isMesh) { o.geometry.dispose(); (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { m.map && m.map.dispose(); m.dispose(); }); } });
      texCache.forEach(t => t.dispose());
      env.texture.dispose();
      renderer.dispose();
      renderer.domElement.remove(); labelLayer.remove(); tip.remove();
    }
  };
}
