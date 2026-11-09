import * as THREE from 'three';
import { GUNS, KNIVES } from './data.js';
import { camoTexture } from './textures.js';

let camo = null;
function mat(color, opts = {}) { return new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0.45, ...opts }); }

function box(g, w, h, d, m, x, y, z) { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); g.add(b); return b; }
function cyl(g, r, l, m, x, y, z, seg = 10) { const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, l, seg), m); c.rotation.x = Math.PI / 2; c.position.set(x, y, z); g.add(c); return c; }

function muzzleFlash() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,220,1)'); grd.addColorStop(0.3, 'rgba(255,190,60,0.9)'); grd.addColorStop(1, 'rgba(255,120,0,0)');
  g.fillStyle = grd;
  g.beginPath();
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2, r = i % 2 ? 12 : 32; g.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r); }
  g.fill();
  const t = new THREE.CanvasTexture(c);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), new THREE.MeshBasicMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  m.visible = false;
  return m;
}

export function buildGun(id, refined) {
  const d = GUNS[id];
  if (!camo) camo = camoTexture();
  const body = refined ? new THREE.MeshStandardMaterial({ map: camo, emissive: 0x3a0a60, emissiveIntensity: 0.6, roughness: 0.3, metalness: 0.6 }) : mat(d.color);
  const acc = mat(d.accent, { metalness: 0.7 });
  const dark = mat(0x151515, { metalness: 0.6 });
  const g = new THREE.Group();
  const L = d.len;
  const cls = d.cls;
  // receiver
  box(g, 0.06, 0.085, L * 0.55, body, 0, 0, -L * 0.28);
  // barrel
  const bl = L * 0.5;
  cyl(g, cls === 'shotgun' ? 0.018 : 0.012, bl, dark, 0, 0.02, -L * 0.55 - bl / 2 + 0.05);
  // grip
  const grip = box(g, 0.045, 0.11, 0.05, acc, 0, -0.08, -0.02); grip.rotation.x = -0.25;
  // magazine
  if (cls === 'lmg') { box(g, 0.1, 0.09, 0.1, acc, 0.04, -0.07, -L * 0.3); }
  else if (cls !== 'shotgun') { const m = box(g, 0.035, cls === 'pistol' ? 0.0 : 0.13, 0.05, acc, 0, -0.1, -L * 0.3); m.rotation.x = cls === 'smg' || cls === 'rifle' ? 0.2 : 0; if (cls === 'pistol') m.visible = false; }
  // stock
  if (cls !== 'pistol') box(g, 0.045, 0.07, 0.22, body, 0, -0.02, 0.12);
  // shotgun pump
  if (cls === 'shotgun') { g.userData.pump = box(g, 0.05, 0.05, 0.16, acc, 0, -0.02, -L * 0.6); }
  // scope / sights
  if (d.scope) {
    cyl(g, 0.026, 0.26, dark, 0, 0.085, -L * 0.3);
    cyl(g, 0.032, 0.03, dark, 0, 0.085, -L * 0.3 - 0.14);
    cyl(g, 0.03, 0.03, dark, 0, 0.085, -L * 0.3 + 0.14);
    box(g, 0.02, 0.04, 0.02, dark, 0, 0.055, -L * 0.3);
  } else {
    box(g, 0.01, 0.025, 0.01, dark, 0, 0.055, -L * 0.52);
    box(g, 0.03, 0.02, 0.012, dark, 0, 0.052, -0.04);
  }
  if (cls === 'sniper') { cyl(g, 0.02, 0.06, dark, 0, 0.02, -L * 1.03); box(g, 0.012, 0.012, 0.05, acc, 0.04, 0.02, -0.06); }
  if (cls === 'lmg' || cls === 'rifle') box(g, 0.065, 0.02, L * 0.3, dark, 0, 0.055, -L * 0.35);
  if (refined) {
    const glow = new THREE.Mesh(new THREE.BoxGeometry(0.062, 0.01, L * 0.5), new THREE.MeshBasicMaterial({ color: 0xff3df0 }));
    glow.position.set(0, -0.035, -L * 0.28); g.add(glow);
  }
  const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.02, -L * 1.05); g.add(muzzle);
  const flash = muzzleFlash(); flash.position.copy(muzzle.position); g.add(flash);
  g.userData.muzzle = muzzle; g.userData.flash = flash;
  g.userData.sightY = d.scope ? 0.085 : 0.06;
  addArms(g, cls === 'pistol' ? 'pistol' : 'rifle', L);
  return g;
}

function addArms(g, pose, L = 0.5) {
  const skin = mat(0x2f3a2a, { metalness: 0.05, roughness: 0.9 }); // hazmat gloves
  const sleeve = mat(0xd8b02a, { metalness: 0.05, roughness: 0.85 }); // yellow hazmat suit
  // right hand on grip
  const rh = new THREE.Group(); rh.position.set(0.01, -0.1, 0.02);
  box(rh, 0.06, 0.07, 0.09, skin, 0, 0, 0);
  const ra = box(rh, 0.075, 0.075, 0.4, sleeve, 0.02, -0.03, 0.22); ra.rotation.x = 0.25;
  g.add(rh);
  if (pose === 'rifle') {
    const lh = new THREE.Group(); lh.position.set(-0.01, -0.05, -L * 0.62);
    box(lh, 0.06, 0.05, 0.1, skin, 0, 0, 0);
    const la = box(lh, 0.075, 0.075, 0.45, sleeve, -0.12, -0.06, 0.18); la.rotation.y = -0.55; la.rotation.x = 0.2;
    g.add(lh);
  } else if (pose === 'pistol') {
    const lh = new THREE.Group(); lh.position.set(-0.03, -0.1, 0.0);
    box(lh, 0.05, 0.07, 0.08, skin, 0, 0, 0);
    const la = box(lh, 0.075, 0.075, 0.4, sleeve, -0.06, -0.04, 0.2); la.rotation.y = -0.3; la.rotation.x = 0.25;
    g.add(lh);
  }
}

// --- knives
function bladeMesh(shape, m, depth = 0.006) {
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: 0.002, bevelSize: 0.002, bevelSegments: 1 });
  geo.translate(0, 0, -depth / 2);
  const mesh = new THREE.Mesh(geo, m);
  return mesh;
}

export function buildKnife(id) {
  const d = KNIVES[id];
  const steel = mat(d.color, { metalness: 0.9, roughness: 0.25 });
  const handleM = mat(d.handle, { metalness: 0.3, roughness: 0.6 });
  const g = new THREE.Group();
  const knife = new THREE.Group(); // blade along +x in local, rotated so it points forward
  const s = new THREE.Shape();
  if (d.kind === 'karambit') {
    s.moveTo(0, 0); s.quadraticCurveTo(0.09, 0.0, 0.15, -0.07); s.quadraticCurveTo(0.12, -0.02, 0.02, 0.03); s.lineTo(0, 0.025);
    knife.add(bladeMesh(s, steel));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.006, 6, 16), handleM); ring.position.set(-0.13, 0.0, 0); knife.add(ring);
    box(knife, 0.11, 0.028, 0.018, handleM, -0.06, 0.012, 0);
  } else if (d.kind === 'butterfly') {
    s.moveTo(0, 0); s.lineTo(0.13, 0.004); s.lineTo(0.16, 0.02); s.lineTo(0.12, 0.028); s.lineTo(0, 0.026);
    knife.add(bladeMesh(s, steel));
    const h1 = new THREE.Group(), h2 = new THREE.Group();
    box(h1, 0.12, 0.012, 0.016, handleM, -0.06, 0.006, 0.0); box(h2, 0.12, 0.012, 0.016, handleM, -0.06, 0.006, 0.0);
    h1.position.set(0, 0.022, 0.01); h2.position.set(0, 0.004, -0.01);
    knife.add(h1); knife.add(h2);
    g.userData.h1 = h1; g.userData.h2 = h2;
  } else if (d.kind === 'bayonet') {
    s.moveTo(0, 0); s.lineTo(0.2, 0.006); s.lineTo(0.23, 0.02); s.lineTo(0.19, 0.032); s.lineTo(0, 0.032);
    knife.add(bladeMesh(s, steel, 0.007));
    box(knife, 0.012, 0.06, 0.03, handleM, -0.005, 0.016, 0);
    box(knife, 0.12, 0.03, 0.024, handleM, -0.07, 0.016, 0);
  } else if (d.kind === 'huntsman') {
    s.moveTo(0, 0); s.lineTo(0.17, 0.0); s.quadraticCurveTo(0.21, 0.01, 0.22, 0.03); s.lineTo(0.15, 0.036);
    for (let x = 0.15; x > 0.02; x -= 0.02) { s.lineTo(x - 0.01, 0.046); s.lineTo(x - 0.02, 0.038); }
    s.lineTo(0, 0.038);
    knife.add(bladeMesh(s, steel, 0.008));
    box(knife, 0.015, 0.07, 0.03, mat(0x777777, { metalness: 0.9 }), -0.005, 0.018, 0);
    box(knife, 0.12, 0.034, 0.026, handleM, -0.07, 0.018, 0);
  } else {
    s.moveTo(0, 0); s.lineTo(0.15, 0.004); s.lineTo(0.18, 0.02); s.lineTo(0.14, 0.03); s.lineTo(0, 0.03);
    knife.add(bladeMesh(s, steel));
    box(knife, 0.012, 0.05, 0.026, handleM, -0.005, 0.015, 0);
    box(knife, 0.11, 0.028, 0.022, handleM, -0.065, 0.015, 0);
  }
  // orient: blade +x -> forward (-z), edge down
  knife.rotation.y = Math.PI / 2;
  knife.rotation.z = 0;
  const holder = new THREE.Group();
  holder.add(knife);
  holder.rotation.x = 0.5; // tilt blade upward
  g.add(holder);
  g.userData.knife = knife; g.userData.holder = holder;
  // arm
  const skin = mat(0x2f3a2a, { metalness: 0.05, roughness: 0.9 });
  const sleeve = mat(0xd8b02a, { metalness: 0.05, roughness: 0.85 });
  const hand = box(g, 0.06, 0.07, 0.09, skin, 0, -0.01, 0.07);
  void hand;
  const arm = box(g, 0.075, 0.075, 0.4, sleeve, 0.02, -0.05, 0.28); arm.rotation.x = 0.25;
  g.userData.sightY = 0.05;
  return g;
}

// --- tools
export function buildTool(kind) {
  const g = new THREE.Group();
  const yellow = mat(0xe0b020, { metalness: 0.2 });
  const dark = mat(0x222428, { metalness: 0.6 });
  const chrome = mat(0xcccccc, { metalness: 0.95, roughness: 0.2 });
  if (kind === 'vacuum') {
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.3, 14), yellow); can.position.set(0.05, -0.08, 0.05); can.rotation.x = Math.PI / 2; g.add(can);
    const fill = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.005, 0.26), new THREE.MeshBasicMaterial({ color: 0x6aff5a }));
    fill.position.set(0.05, -0.0, 0.05); g.add(fill); g.userData.fill = fill;
    cyl(g, 0.025, 0.55, dark, 0, -0.02, -0.3);
    const head = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.07, 0.12, 14, 1, true), chrome); head.rotation.x = Math.PI / 2; head.position.set(0, -0.02, -0.62); g.add(head);
    const hose = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.015, 6, 12, Math.PI), dark); hose.position.set(0.05, -0.06, -0.12); hose.rotation.y = Math.PI / 2; g.add(hose);
    const muzzle = new THREE.Object3D(); muzzle.position.set(0, -0.02, -0.7); g.add(muzzle); g.userData.muzzle = muzzle;
  } else if (kind === 'washer') {
    const blue = mat(0x2a6fbf, { metalness: 0.3 });
    box(g, 0.06, 0.1, 0.22, blue, 0, -0.02, 0);
    cyl(g, 0.012, 0.7, chrome, 0, 0.02, -0.45);
    cyl(g, 0.02, 0.06, dark, 0, 0.02, -0.8);
    const grip = box(g, 0.04, 0.11, 0.05, dark, 0, -0.1, 0.0); grip.rotation.x = -0.2;
    box(g, 0.04, 0.03, 0.18, dark, 0, -0.0, -0.3);
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.18, 12), mat(0x7fc8ff, { transparent: true, opacity: 0.7 })); tank.position.set(-0.07, 0.0, 0.0); tank.rotation.x = Math.PI / 2; g.add(tank);
    g.userData.fill = tank;
    const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.02, -0.84); g.add(muzzle); g.userData.muzzle = muzzle;
  } else {
    const red = mat(0xb02a1a, { metalness: 0.3 });
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.28, 12), red); tank.position.set(0.0, -0.1, -0.05); tank.rotation.x = Math.PI / 2; g.add(tank);
    g.userData.fill = tank;
    box(g, 0.06, 0.07, 0.25, dark, 0, 0.0, -0.05);
    cyl(g, 0.022, 0.4, chrome, 0, 0.01, -0.35);
    const shroud = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.03, 0.1, 12, 1, true), dark); shroud.rotation.x = Math.PI / 2; shroud.position.set(0, 0.01, -0.58); g.add(shroud);
    const pilot = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 8), new THREE.MeshBasicMaterial({ color: 0x55aaff })); pilot.position.set(0, -0.025, -0.6); g.add(pilot);
    g.userData.pilot = pilot;
    const grip = box(g, 0.04, 0.11, 0.05, dark, 0, -0.08, 0.04); grip.rotation.x = -0.2;
    const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.01, -0.64); g.add(muzzle); g.userData.muzzle = muzzle;
  }
  addArms(g, 'rifle', 0.6);
  g.userData.sightY = 0.05;
  return g;
}

export function buildGrenadeHand() {
  const g = new THREE.Group();
  const can = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.1, 12), mat(0x3fbfff, { metalness: 0.3 }));
  g.add(can);
  return g;
}
