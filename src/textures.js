import * as THREE from 'three';
import { mulberry32 } from './rng.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function toTex(c, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function noise(ctx, w, h, amount, rng, alpha = 0.08) {
  for (let i = 0; i < amount; i++) {
    const v = Math.floor(rng() * 255);
    ctx.fillStyle = `rgba(${v},${v},${v},${alpha})`;
    const s = 1 + rng() * 3;
    ctx.fillRect(rng() * w, rng() * h, s, s);
  }
}

// Floor tile textures. One texture covers one grid cell (2m).
export function floorTexture(kind, seed = 1) {
  const rng = mulberry32(seed);
  const c = canvas(256, 256); const g = c.getContext('2d');
  if (kind === 'hub') {
    g.fillStyle = '#4a525c'; g.fillRect(0, 0, 256, 256);
    g.strokeStyle = '#363d45'; g.lineWidth = 4;
    for (let i = 0; i <= 256; i += 128) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke(); }
    g.fillStyle = '#56606a'; g.fillRect(6, 6, 116, 116); g.fillRect(134, 134, 116, 116);
    noise(g, 256, 256, 3000, rng, 0.06);
  } else if (kind === 'bay') {
    g.fillStyle = '#6b6457'; g.fillRect(0, 0, 256, 256);
    noise(g, 256, 256, 6000, rng, 0.08);
    g.fillStyle = 'rgba(40,36,30,0.09)';
    for (let i = 0; i < 4; i++) { g.beginPath(); g.arc(rng() * 256, rng() * 256, 10 + rng() * 30, 0, 7); g.fill(); }
    g.strokeStyle = '#4b463d'; g.lineWidth = 3; g.strokeRect(0, 0, 256, 256);
  } else if (kind === 'office') {
    g.fillStyle = '#3e4a5c'; g.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y += 4) for (let x = 0; x < 256; x += 4) {
      const v = (rng() * 20) | 0; g.fillStyle = `rgba(${v},${v + 10},${v + 25},0.25)`; g.fillRect(x, y, 4, 4);
    }
    g.strokeStyle = 'rgba(20,25,35,0.6)'; g.lineWidth = 2; g.strokeRect(0, 0, 128, 128); g.strokeRect(128, 128, 128, 128);
  } else if (kind === 'green') {
    g.fillStyle = '#41584a'; g.fillRect(0, 0, 256, 256);
    g.strokeStyle = '#2c3d33'; g.lineWidth = 3;
    for (let i = 0; i <= 256; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke(); }
    noise(g, 256, 256, 4000, rng, 0.07);
  } else { // reactor grating
    g.fillStyle = '#2a2b30'; g.fillRect(0, 0, 256, 256);
    g.fillStyle = '#3a3c43';
    for (let y = 0; y < 256; y += 16) for (let x = 0; x < 256; x += 16) g.fillRect(x + 2, y + 2, 12, 12);
    g.fillStyle = '#16171a';
    for (let y = 0; y < 256; y += 16) for (let x = 0; x < 256; x += 16) g.fillRect(x + 5, y + 5, 6, 6);
    g.strokeStyle = '#c26a1c'; g.lineWidth = 6; g.strokeRect(3, 3, 250, 250);
    noise(g, 256, 256, 2000, rng, 0.08);
  }
  return toTex(c);
}

export function wallTexture(kind, seed = 2) {
  const rng = mulberry32(seed);
  const c = canvas(256, 256); const g = c.getContext('2d');
  const base = { hub: '#7a8590', bay: '#857a63', office: '#a3a093', green: '#6c8a74', reactor: '#4a4c55' }[kind] || '#777';
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  noise(g, 256, 256, 3000, rng, 0.07);
  g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 3;
  g.strokeRect(2, 2, 252, 252);
  g.beginPath(); g.moveTo(0, 128); g.lineTo(256, 128); g.stroke();
  // bottom kick strip
  g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(0, 220, 256, 36);
  if (kind === 'bay' || kind === 'reactor') {
    for (let x = -40; x < 256; x += 40) {
      g.fillStyle = '#d6a21c'; g.beginPath(); g.moveTo(x, 256); g.lineTo(x + 20, 256); g.lineTo(x + 40, 222); g.lineTo(x + 20, 222); g.fill();
    }
  }
  g.fillStyle = 'rgba(255,255,255,0.15)';
  for (const [x, y] of [[12, 12], [244, 12], [12, 116], [244, 116], [12, 140], [244, 140]]) { g.beginPath(); g.arc(x, y, 3, 0, 7); g.fill(); }
  return toTex(c);
}

// Organic blotch used for grime stains. Alpha channel matters.
export function stainTexture(color, seed) {
  const rng = mulberry32(seed);
  const c = canvas(128, 128); const g = c.getContext('2d');
  const [r, gg, b] = color;
  for (let i = 0; i < 26; i++) {
    const a = rng() * Math.PI * 2, d = rng() * 34;
    const x = 64 + Math.cos(a) * d, y = 64 + Math.sin(a) * d;
    const rad = 8 + rng() * 22;
    const grd = g.createRadialGradient(x, y, 0, x, y, rad);
    grd.addColorStop(0, `rgba(${r},${gg},${b},0.9)`);
    grd.addColorStop(1, `rgba(${r},${gg},${b},0)`);
    g.fillStyle = grd; g.beginPath(); g.arc(x, y, rad, 0, 7); g.fill();
  }
  for (let i = 0; i < 12; i++) { // drips / specks
    g.fillStyle = `rgba(${r * 0.6 | 0},${gg * 0.6 | 0},${b * 0.6 | 0},0.8)`;
    g.beginPath(); g.arc(64 + (rng() - 0.5) * 100, 64 + (rng() - 0.5) * 100, 1 + rng() * 4, 0, 7); g.fill();
  }
  const t = toTex(c, false);
  return t;
}

export function labelTexture(lines, opts = {}) {
  const w = opts.w || 512, h = opts.h || 256;
  const c = canvas(w, h); const g = c.getContext('2d');
  g.fillStyle = opts.bg || 'rgba(10,14,20,0.92)'; g.fillRect(0, 0, w, h);
  if (opts.border) { g.strokeStyle = opts.border; g.lineWidth = 10; g.strokeRect(5, 5, w - 10, h - 10); }
  g.textAlign = 'center'; g.textBaseline = 'middle';
  const n = lines.length;
  lines.forEach((ln, i) => {
    let size = ln.size || Math.floor(h / (n + 1.2));
    g.font = `${ln.bold === false ? '' : 'bold '}${size}px "Segoe UI", Arial, sans-serif`;
    const tw = g.measureText(ln.text).width;
    if (tw > w * 0.9) { size = Math.floor(size * w * 0.9 / tw); g.font = `${ln.bold === false ? '' : 'bold '}${size}px "Segoe UI", Arial, sans-serif`; }
    g.fillStyle = ln.color || '#fff';
    g.fillText(ln.text, w / 2, h * (i + 1) / (n + 1));
  });
  return toTex(c, false);
}

export function wallbuyTexture(name, price, cls) {
  const c = canvas(512, 256); const g = c.getContext('2d');
  g.clearRect(0, 0, 512, 256);
  g.strokeStyle = 'rgba(230,240,255,0.9)'; g.lineWidth = 6; g.lineJoin = 'round';
  g.shadowColor = '#7fd8ff'; g.shadowBlur = 14;
  // chalk-style silhouette
  g.beginPath();
  const L = cls === 'sniper' || cls === 'dmr' ? 420 : cls === 'pistol' ? 200 : 340;
  const x0 = 256 - L / 2, y0 = 100;
  g.moveTo(x0, y0); g.lineTo(x0 + L * 0.75, y0); g.lineTo(x0 + L, y0 + 6); g.lineTo(x0 + L * 0.75, y0 + 18);
  g.lineTo(x0 + L * 0.42, y0 + 18); g.lineTo(x0 + L * 0.36, y0 + 60); g.lineTo(x0 + L * 0.28, y0 + 60); g.lineTo(x0 + L * 0.3, y0 + 18);
  g.lineTo(x0 + L * 0.12, y0 + 18); g.lineTo(x0, y0 + 45); g.lineTo(x0 - 10, y0 + 30); g.closePath(); g.stroke();
  if (cls === 'sniper' || cls === 'dmr') { g.strokeRect(x0 + L * 0.35, y0 - 26, L * 0.25, 18); }
  g.shadowBlur = 0;
  g.fillStyle = '#e8f6ff'; g.font = 'bold 34px "Segoe UI", Arial'; g.textAlign = 'center';
  g.fillText(name.toUpperCase(), 256, 210);
  g.fillStyle = '#ffd25a'; g.font = 'bold 30px "Segoe UI", Arial';
  g.fillText(price + ' ¢', 256, 246);
  return toTex(c, false);
}

export function camoTexture() {
  const rng = mulberry32(77);
  const c = canvas(128, 128); const g = c.getContext('2d');
  g.fillStyle = '#2b0b45'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 40; i++) {
    g.fillStyle = ['#7b2cff', '#ff2fd0', '#22e6ff', '#3d0f66'][i % 4];
    g.globalAlpha = 0.7;
    g.beginPath(); g.arc(rng() * 128, rng() * 128, 4 + rng() * 14, 0, 7); g.fill();
  }
  g.globalAlpha = 1;
  return toTex(c);
}

// Derive a tangent-space normal map from a colour canvas texture (luminance as height)
export function normalFromTexture(tex, strength = 2.0) {
  const src = tex.image;
  const w = src.width, h = src.height;
  const sctx = src.getContext('2d');
  const data = sctx.getImageData(0, 0, w, h).data;
  const hgt = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) hgt[i] = (data[i * 4] * 0.3 + data[i * 4 + 1] * 0.59 + data[i * 4 + 2] * 0.11) / 255;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const out = ctx.createImageData(w, h);
  const H = (x, y) => hgt[((y + h) % h) * w + ((x + w) % w)];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * strength;
    const dy = (H(x, y + 1) - H(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1);
    const i = (y * w + x) * 4;
    out.data[i] = (-dx / l * 0.5 + 0.5) * 255;
    out.data[i + 1] = (dy / l * 0.5 + 0.5) * 255;
    out.data[i + 2] = (1 / l * 0.5 + 0.5) * 255;
    out.data[i + 3] = 255;
  }
  ctx.putImageData(out, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}
