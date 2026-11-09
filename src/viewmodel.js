import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { GUNS, KNIVES } from './data.js';
import { camoTexture } from './textures.js';

// ------------------------------------------------------------------ materials
let camo = null;
const M = {};
function mats() {
  if (M.ready) return M;
  M.gunmetal = new THREE.MeshStandardMaterial({ color: 0x2b2f36, metalness: 0.85, roughness: 0.32 });
  M.steel = new THREE.MeshStandardMaterial({ color: 0x9aa3ad, metalness: 0.95, roughness: 0.22 });
  M.dark = new THREE.MeshStandardMaterial({ color: 0x121417, metalness: 0.6, roughness: 0.45 });
  M.polymer = new THREE.MeshStandardMaterial({ color: 0x1d2024, metalness: 0.1, roughness: 0.75 });
  M.brass = new THREE.MeshStandardMaterial({ color: 0xc9a043, metalness: 1, roughness: 0.3 });
  M.shell = new THREE.MeshStandardMaterial({ color: 0xb02a1a, metalness: 0.2, roughness: 0.5 });
  M.glass = new THREE.MeshStandardMaterial({ color: 0x3a8cff, metalness: 0.2, roughness: 0.05, emissive: 0x0a2a55, emissiveIntensity: 0.6 });
  M.glowCyan = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.2, 2.2, 3.0) });
  M.glowRed = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.0, 0.2, 0.15) });
  M.glowGreen = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 3.0, 0.5) });
  M.glowPink = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.0, 0.4, 2.6) });
  // robot arm
  M.robot = new THREE.MeshStandardMaterial({ color: 0x3a3f47, metalness: 0.9, roughness: 0.28 });
  M.robotPlate = new THREE.MeshStandardMaterial({ color: 0xd9a21b, metalness: 0.55, roughness: 0.35 });
  M.robotJoint = new THREE.MeshStandardMaterial({ color: 0x15171a, metalness: 0.7, roughness: 0.4 });
  M.ready = true;
  return M;
}
function colored(hex, metal = 0.6, rough = 0.4) { return new THREE.MeshStandardMaterial({ color: hex, metalness: metal, roughness: rough }); }

// ------------------------------------------------------------------ primitives
function rbox(parent, w, h, d, m, x = 0, y = 0, z = 0, r = 0.006) {
  const radius = Math.min(r, w / 2.01, h / 2.01, d / 2.01);
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, radius), m);
  mesh.position.set(x, y, z); parent.add(mesh); return mesh;
}
function cyl(parent, r, l, m, x = 0, y = 0, z = 0, seg = 16, r2) {
  const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r2 === undefined ? r : r2, l, seg), m);
  c.rotation.x = Math.PI / 2; c.position.set(x, y, z); parent.add(c); return c;
}
function group(parent, x = 0, y = 0, z = 0) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }

function muzzleFlash() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,235,1)'); grd.addColorStop(0.25, 'rgba(255,200,90,0.95)'); grd.addColorStop(1, 'rgba(255,110,0,0)');
  g.fillStyle = grd;
  g.beginPath();
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2, r = i % 2 ? 22 : 64; g.lineTo(64 + Math.cos(a) * r, 64 + Math.sin(a) * r); }
  g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshBasicMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: new THREE.Color(3, 2.6, 2) });
  const grp = new THREE.Group();
  const front = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.2), mat); grp.add(front);
  const side1 = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.28), mat); side1.rotation.y = Math.PI / 2; side1.position.z = -0.1; side1.rotation.z = Math.PI / 2; grp.add(side1);
  const side2 = side1.clone(); side2.rotation.x = Math.PI / 2; grp.add(side2);
  grp.visible = false;
  return grp;
}

// ------------------------------------------------------------------ robotic hands
// A robotic hand with curled fingers. Palm faces -x for right hand by default.
function robotHand(parent, side = 1, grip = 0.9) {
  const m = mats();
  const h = group(parent);
  rbox(h, 0.05, 0.065, 0.075, m.robot, 0, 0, 0, 0.012);
  rbox(h, 0.052, 0.02, 0.05, m.robotPlate, 0, 0.034, 0.005, 0.006); // back-of-hand plate
  const glow = rbox(h, 0.004, 0.035, 0.03, m.glowCyan, side * 0.026, 0.0, 0.0, 0.001); void glow;
  // fingers
  for (let i = 0; i < 4; i++) {
    const f = group(h, -side * 0.005, 0.022 - i * 0.016, -0.04);
    const s1 = rbox(f, 0.014, 0.013, 0.03, m.robot, 0, 0, -0.012, 0.004);
    const k = group(f, 0, 0, -0.027);
    k.add(new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 6), m.robotJoint));
    const s2 = rbox(k, 0.013, 0.012, 0.024, m.robot, 0, 0, -0.012, 0.004);
    f.rotation.y = -side * grip * 1.2; k.rotation.y = -side * grip * 1.3;
    void s1; void s2;
  }
  const th = group(h, -side * 0.022, 0.02, -0.01);
  rbox(th, 0.014, 0.014, 0.035, m.robot, 0, 0, -0.016, 0.004);
  th.rotation.y = side * 0.5; th.rotation.x = 0.3;
  return h;
}

// forearm from wrist (origin) going back towards +z
function robotForearm(parent, side = 1, len = 0.34) {
  const m = mats();
  const a = group(parent);
  a.add(new THREE.Mesh(new THREE.SphereGeometry(0.024, 12, 10), m.robotJoint));
  cyl(a, 0.022, len, m.robot, 0, 0, len / 2 + 0.01, 14, 0.03);
  // armour plates
  const p1 = rbox(a, 0.062, 0.05, len * 0.55, m.robotPlate, 0, 0.012, len * 0.42, 0.012);
  p1.rotation.z = side * 0.25;
  rbox(a, 0.064, 0.036, 0.05, m.robotJoint, 0, 0.0, len * 0.08, 0.008);
  // glowing conduit
  const strip = rbox(a, 0.006, 0.006, len * 0.5, m.glowCyan, side * 0.034, 0.012, len * 0.42, 0.002);
  void strip;
  // pistons
  cyl(a, 0.006, len * 0.5, m.steel, -side * 0.028, -0.02, len * 0.4, 8);
  // elbow joint at the end
  const e = new THREE.Mesh(new THREE.SphereGeometry(0.034, 12, 10), m.robotJoint); e.position.z = len + 0.01; a.add(e);
  return a;
}

function addArms(g, rightPos, leftPos, opts = {}) {
  const r = group(g, ...rightPos);
  robotHand(r, 1, opts.rightGrip ?? 0.9);
  const rf = robotForearm(r, 1, 0.36); rf.position.set(0.01, -0.03, 0.03); rf.rotation.set(0.35, -0.12, 0);
  g.userData.rightHand = r;
  if (leftPos) {
    const l = group(g, ...leftPos);
    robotHand(l, -1, opts.leftGrip ?? 0.8);
    const lf = robotForearm(l, -1, 0.4); lf.position.set(-0.01, -0.03, 0.03); lf.rotation.set(0.3, -0.75, 0);
    g.userData.leftHand = l;
    g.userData.leftRest = l.position.clone();
  }
}

// ------------------------------------------------------------------ guns
function bodyMat(d, refined) {
  if (!refined) return colored(d.color, 0.55, 0.42);
  if (!camo) camo = camoTexture();
  return new THREE.MeshStandardMaterial({ map: camo, emissive: 0x3a0a60, emissiveIntensity: 0.7, roughness: 0.25, metalness: 0.7 });
}

function rail(g, len, y, z) {
  const m = mats();
  rbox(g, 0.026, 0.008, len, m.dark, 0, y, z, 0.002);
  for (let i = 0; i < len / 0.012; i++) rbox(g, 0.03, 0.005, 0.005, m.dark, 0, y + 0.006, z - len / 2 + i * 0.012 + 0.006, 0.001);
}
function holoSight(g, y, z, glow) {
  const m = mats();
  rbox(g, 0.032, 0.012, 0.05, m.dark, 0, y, z, 0.003);
  const frame = group(g, 0, y + 0.024, z - 0.01);
  rbox(frame, 0.004, 0.036, 0.008, m.dark, -0.016, 0, 0, 0.002);
  rbox(frame, 0.004, 0.036, 0.008, m.dark, 0.016, 0, 0, 0.002);
  rbox(frame, 0.036, 0.004, 0.008, m.dark, 0, 0.018, 0, 0.002);
  const lens = new THREE.Mesh(new THREE.PlaneGeometry(0.028, 0.03), new THREE.MeshStandardMaterial({ color: 0x66aaff, transparent: true, opacity: 0.25, metalness: 0.2, roughness: 0.05 }));
  frame.add(lens);
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.0022, 10), glow); dot.position.z = -0.001; frame.add(dot);
  return y + 0.024;
}
function scope(g, y, z, len, glow) {
  const m = mats();
  const s = group(g, 0, y, z);
  cyl(s, 0.02, len, m.gunmetal, 0, 0, 0, 20);
  cyl(s, 0.028, 0.06, m.gunmetal, 0, 0, -len / 2, 20, 0.022);
  cyl(s, 0.025, 0.05, m.gunmetal, 0, 0, len / 2, 20, 0.02);
  cyl(s, 0.024, 0.03, m.dark, 0, 0.022, 0, 12).rotation.x = 0;
  const lensF = new THREE.Mesh(new THREE.CircleGeometry(0.026, 20), m.glass); lensF.position.z = -len / 2 - 0.031; lensF.rotation.y = Math.PI; s.add(lensF);
  const lensB = new THREE.Mesh(new THREE.CircleGeometry(0.02, 20), m.glass); lensB.position.z = len / 2 + 0.026; s.add(lensB);
  rbox(g, 0.014, 0.024, 0.02, m.dark, 0, y - 0.024, z - len * 0.25, 0.003);
  rbox(g, 0.014, 0.024, 0.02, m.dark, 0, y - 0.024, z + len * 0.25, 0.003);
  void glow;
  return s;
}

export function buildGun(id, refined) {
  const d = GUNS[id];
  const m = mats();
  const B = bodyMat(d, refined);
  const A = colored(d.accent, 0.5, 0.5);
  const glow = refined ? m.glowPink : id === 'sidearm' || id === 'cannon' ? m.glowGreen : m.glowRed;
  const g = new THREE.Group();
  const P = {}; // animated parts
  let muzzleZ = -0.3, sightY = 0.06, ejectPos = new THREE.Vector3(0.03, 0.03, -0.08);

  if (id === 'sidearm') {
    rbox(g, 0.036, 0.032, 0.2, m.polymer, 0, -0.005, -0.08, 0.008); // frame
    P.slide = group(g); rbox(P.slide, 0.04, 0.034, 0.21, B, 0, 0.028, -0.085, 0.008);
    for (let i = 0; i < 6; i++) rbox(P.slide, 0.042, 0.024, 0.004, m.dark, 0, 0.028, -0.005 - i * 0.008, 0.001);
    rbox(P.slide, 0.006, 0.008, 0.006, glow, 0, 0.05, -0.18, 0.002);
    rbox(P.slide, 0.022, 0.008, 0.006, m.dark, 0, 0.05, 0.01, 0.002);
    cyl(g, 0.007, 0.03, m.dark, 0, 0.026, -0.2);
    const grip = rbox(g, 0.034, 0.11, 0.05, m.polymer, 0, -0.07, 0.0, 0.01); grip.rotation.x = -0.22;
    P.mag = group(g, 0, -0.07, 0.003); rbox(P.mag, 0.026, 0.1, 0.038, m.dark, 0, -0.012, 0, 0.004); P.mag.rotation.x = -0.22; P.magRest = P.mag.position.clone();
    rbox(g, 0.008, 0.03, 0.03, m.dark, 0, -0.03, -0.035, 0.004); // trigger guard
    muzzleZ = -0.215; sightY = 0.058; ejectPos.set(0.025, 0.035, -0.06);
    addArms(g, [0.0, -0.085, 0.01], [-0.02, -0.095, 0.0], { leftGrip: 1.1 });
  } else if (id === 'cannon') { // revolver
    rbox(g, 0.036, 0.05, 0.12, B, 0, 0.012, -0.03, 0.008);
    cyl(g, 0.014, 0.2, B, 0, 0.028, -0.18, 18);
    rbox(g, 0.02, 0.026, 0.2, B, 0, 0.012, -0.18, 0.006); // underlug
    rbox(g, 0.008, 0.012, 0.18, m.dark, 0, 0.046, -0.17, 0.003);
    rbox(g, 0.006, 0.01, 0.006, glow, 0, 0.056, -0.27, 0.002);
    P.cylPivot = group(g, -0.0, -0.002, -0.06);
    P.cylinder = group(P.cylPivot, 0, 0.02, 0);
    const c = cyl(P.cylinder, 0.03, 0.06, m.steel, 0, 0, 0, 6); c.rotation.z = Math.PI / 6;
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; cyl(P.cylinder, 0.007, 0.062, m.dark, Math.cos(a) * 0.018, Math.sin(a) * 0.018, 0, 8); }
    P.hammer = group(g, 0, 0.035, 0.03); rbox(P.hammer, 0.01, 0.03, 0.012, m.steel, 0, 0.01, 0, 0.003); P.hammer.rotation.x = 0;
    const grip = rbox(g, 0.034, 0.1, 0.05, colored(0x4a2c1a, 0.1, 0.7), 0, -0.06, 0.035, 0.012); grip.rotation.x = -0.35;
    muzzleZ = -0.285; sightY = 0.058; ejectPos = null;
    addArms(g, [0.0, -0.075, 0.04], [-0.02, -0.085, 0.03], { leftGrip: 1.1 });
  } else if (id === 'hornet') { // SMG
    rbox(g, 0.044, 0.06, 0.24, B, 0, 0.0, -0.1, 0.01);
    rbox(g, 0.04, 0.04, 0.1, m.polymer, 0, -0.005, -0.27, 0.01);
    cyl(g, 0.012, 0.06, m.dark, 0, 0.005, -0.34);
    rail(g, 0.18, 0.034, -0.1);
    sightY = holoSight(g, 0.042, -0.06, glow);
    P.bolt = group(g, 0.024, 0.016, -0.05); rbox(P.bolt, 0.012, 0.012, 0.025, m.steel, 0, 0, 0, 0.003);
    const grip = rbox(g, 0.034, 0.1, 0.045, m.polymer, 0, -0.07, 0.0, 0.01); grip.rotation.x = -0.25;
    P.mag = group(g, 0, -0.04, -0.13); rbox(P.mag, 0.028, 0.16, 0.035, m.dark, 0, -0.07, 0, 0.005); P.mag.rotation.x = 0.12; P.magRest = P.mag.position.clone();
    rbox(g, 0.03, 0.03, 0.14, m.polymer, 0, -0.005, 0.08, 0.008); // folded stock
    rbox(g, 0.004, 0.012, 0.08, glow, 0.023, 0.01, -0.13, 0.002);
    muzzleZ = -0.37; ejectPos.set(0.03, 0.02, -0.06);
    addArms(g, [0.0, -0.08, 0.01], [-0.005, -0.06, -0.25]);
  } else if (id === 'scatter') { // pump shotgun
    rbox(g, 0.042, 0.06, 0.2, B, 0, 0, -0.05, 0.01);
    cyl(g, 0.016, 0.5, m.gunmetal, 0, 0.018, -0.38, 16);
    cyl(g, 0.014, 0.42, m.dark, 0, -0.016, -0.33, 14); // mag tube
    P.pump = group(g, 0, -0.016, -0.32); rbox(P.pump, 0.044, 0.04, 0.14, colored(0x3a2a1a, 0.1, 0.7), 0, 0, 0, 0.012);
    for (let i = 0; i < 6; i++) rbox(P.pump, 0.046, 0.004, 0.006, m.dark, 0, 0, -0.05 + i * 0.02, 0.001);
    P.pumpRest = P.pump.position.z;
    rbox(g, 0.008, 0.008, 0.008, glow, 0, 0.04, -0.6, 0.002);
    const stock = rbox(g, 0.038, 0.07, 0.24, colored(0x4a3524, 0.1, 0.65), 0, -0.02, 0.15, 0.015); stock.rotation.x = 0.12;
    const grip = rbox(g, 0.034, 0.09, 0.045, colored(0x4a3524, 0.1, 0.65), 0, -0.06, 0.03, 0.01); grip.rotation.x = -0.3;
    P.shell = group(g, 0.0, -0.05, -0.1); cyl(P.shell, 0.009, 0.05, m.shell, 0, 0, 0, 10); cyl(P.shell, 0.0095, 0.012, m.brass, 0, 0, 0.022, 10); P.shell.visible = false;
    rbox(g, 0.02, 0.016, 0.06, m.dark, 0.022, 0.012, -0.06, 0.003); // ejection port
    muzzleZ = -0.64; ejectPos.set(0.03, 0.015, -0.06);
    addArms(g, [0.0, -0.075, 0.03], null);
    const lh = group(P.pump, -0.005, -0.03, 0.0); robotHand(lh, -1, 0.8); const lf = robotForearm(lh, -1, 0.4); lf.position.set(-0.01, -0.03, 0.03); lf.rotation.set(0.3, -0.75, 0);
    g.userData.leftHand = lh;
  } else if (id === 'vanguard') { // AR
    rbox(g, 0.044, 0.06, 0.3, B, 0, 0.0, -0.12, 0.009);
    rbox(g, 0.048, 0.048, 0.22, m.polymer, 0, 0.006, -0.36, 0.012); // handguard
    for (let i = 0; i < 5; i++) rbox(g, 0.05, 0.02, 0.012, m.dark, 0, 0.0, -0.28 - i * 0.035, 0.003);
    cyl(g, 0.011, 0.14, m.dark, 0, 0.008, -0.53);
    cyl(g, 0.017, 0.05, m.dark, 0, 0.008, -0.6, 8); // brake
    rail(g, 0.42, 0.034, -0.2);
    sightY = holoSight(g, 0.042, -0.08, glow);
    P.charge = group(g, 0, 0.03, 0.04); rbox(P.charge, 0.05, 0.008, 0.012, m.dark, 0, 0, 0, 0.002); P.chargeRest = P.charge.position.z;
    P.bolt = group(g, 0.023, 0.012, -0.08); rbox(P.bolt, 0.004, 0.018, 0.05, m.steel, 0, 0, 0, 0.002);
    const grip = rbox(g, 0.034, 0.1, 0.045, m.polymer, 0, -0.07, 0.0, 0.01); grip.rotation.x = -0.25;
    P.mag = group(g, 0, -0.035, -0.13); const mg = rbox(P.mag, 0.03, 0.15, 0.06, m.dark, 0, -0.07, 0, 0.006); mg.rotation.x = 0.22; P.magRest = P.mag.position.clone();
    rbox(g, 0.04, 0.07, 0.2, m.polymer, 0, -0.02, 0.14, 0.014);
    rbox(g, 0.004, 0.01, 0.1, glow, 0.025, -0.008, -0.36, 0.002);
    muzzleZ = -0.63; ejectPos.set(0.03, 0.02, -0.06);
    addArms(g, [0.0, -0.08, 0.01], [-0.005, -0.04, -0.36]);
  } else if (id === 'mauler') { // LMG
    rbox(g, 0.06, 0.075, 0.34, B, 0, 0, -0.12, 0.01);
    P.lid = group(g, 0, 0.038, 0.02); rbox(P.lid, 0.058, 0.014, 0.18, A, 0, 0.004, -0.09, 0.005);
    cyl(g, 0.02, 0.4, m.gunmetal, 0, 0.0, -0.46, 16);
    for (let i = 0; i < 8; i++) cyl(g, 0.023, 0.012, m.dark, 0, 0.0, -0.32 - i * 0.03, 16); // cooling fins
    cyl(g, 0.026, 0.05, m.dark, 0, 0.0, -0.68, 10);
    P.box = group(g, 0.0, -0.065, -0.1); rbox(P.box, 0.08, 0.09, 0.1, colored(0x4a4630, 0.3, 0.6), 0.02, -0.02, 0, 0.01); P.boxRest = P.box.position.clone();
    P.belt = group(g, 0.03, 0.0, -0.1);
    for (let i = 0; i < 5; i++) { const b = cyl(P.belt, 0.006, 0.03, m.brass, 0.0, -0.01 - i * 0.012, 0.0, 8); b.rotation.set(0, 0, Math.PI / 2); }
    const grip = rbox(g, 0.036, 0.1, 0.05, m.polymer, 0, -0.08, 0.02, 0.01); grip.rotation.x = -0.25;
    rbox(g, 0.05, 0.08, 0.22, m.polymer, 0, -0.02, 0.17, 0.016);
    rbox(g, 0.044, 0.03, 0.1, m.polymer, 0, -0.04, -0.3, 0.008); // bipod folded
    sightY = holoSight(g, 0.05, -0.02, glow);
    rbox(g, 0.004, 0.012, 0.16, glow, 0.032, 0.0, -0.12, 0.002);
    muzzleZ = -0.72; ejectPos.set(-0.035, 0.0, -0.08);
    addArms(g, [0.0, -0.09, 0.03], [-0.005, -0.05, -0.32]);
  } else if (id === 'marksman') { // DMR
    rbox(g, 0.044, 0.065, 0.32, B, 0, 0, -0.12, 0.01);
    rbox(g, 0.05, 0.05, 0.26, m.polymer, 0, 0.0, -0.4, 0.014);
    cyl(g, 0.012, 0.2, m.dark, 0, 0.005, -0.62);
    cyl(g, 0.02, 0.07, m.dark, 0, 0.005, -0.74, 8);
    P.scope = scope(g, 0.075, -0.13, 0.26, glow);
    P.bolt = group(g, 0.024, 0.012, -0.06); rbox(P.bolt, 0.006, 0.02, 0.05, m.steel, 0, 0, 0, 0.002);
    const grip = rbox(g, 0.034, 0.1, 0.045, m.polymer, 0, -0.07, 0.0, 0.01); grip.rotation.x = -0.25;
    P.mag = group(g, 0, -0.035, -0.14); rbox(P.mag, 0.03, 0.1, 0.06, m.dark, 0, -0.05, 0, 0.006); P.magRest = P.mag.position.clone();
    const stock = rbox(g, 0.042, 0.09, 0.24, colored(0x5a5f50, 0.2, 0.6), 0, -0.02, 0.15, 0.016); void stock;
    rbox(g, 0.004, 0.01, 0.12, glow, 0.026, -0.005, -0.4, 0.002);
    muzzleZ = -0.78; sightY = 0.075; ejectPos.set(0.03, 0.02, -0.06);
    addArms(g, [0.0, -0.08, 0.01], [-0.005, -0.045, -0.4]);
  } else if (id === 'longbow') { // bolt sniper
    const stockM = colored(0x3a5a3a, 0.2, 0.55);
    rbox(g, 0.05, 0.06, 0.7, stockM, 0, -0.01, -0.12, 0.016); // chassis
    rbox(g, 0.04, 0.05, 0.22, m.gunmetal, 0, 0.022, -0.06, 0.01); // receiver
    cyl(g, 0.014, 0.55, m.gunmetal, 0, 0.022, -0.6, 18, 0.012);
    rbox(g, 0.034, 0.034, 0.08, m.dark, 0, 0.022, -0.9, 0.008); // brake
    for (let i = 0; i < 3; i++) rbox(g, 0.036, 0.008, 0.012, m.steel, 0, 0.022, -0.88 - i * 0.022, 0.002);
    P.scope = scope(g, 0.09, -0.08, 0.36, glow);
    P.bolt = group(g, 0.026, 0.028, 0.03); // pivot of bolt handle
    cyl(P.bolt, 0.008, 0.05, m.steel, 0, 0, -0.025, 10);
    const handle = group(P.bolt, 0, 0, 0); P.boltHandle = handle;
    const arm = rbox(handle, 0.05, 0.007, 0.007, m.steel, 0.025, 0, 0, 0.003); void arm;
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.011, 12, 10), m.dark); knob.position.x = 0.05; handle.add(knob);
    P.boltRest = P.bolt.position.z;
    const grip = rbox(g, 0.036, 0.1, 0.05, stockM, 0, -0.08, 0.02, 0.012); grip.rotation.x = -0.3;
    P.mag = group(g, 0, -0.045, -0.08); rbox(P.mag, 0.032, 0.05, 0.08, m.dark, 0, -0.02, 0, 0.006); P.magRest = P.mag.position.clone();
    rbox(g, 0.05, 0.03, 0.08, stockM, 0, 0.03, 0.16, 0.01); // cheek rest
    rbox(g, 0.004, 0.012, 0.3, glow, 0.026, -0.01, -0.3, 0.002);
    muzzleZ = -0.95; sightY = 0.09; ejectPos.set(0.03, 0.03, -0.04);
    addArms(g, [0.0, -0.09, 0.03], [-0.005, -0.06, -0.42]);
  }

  const muzzle = new THREE.Object3D(); muzzle.position.set(0, id === 'cannon' ? 0.028 : id === 'sidearm' ? 0.026 : 0.012, muzzleZ); g.add(muzzle);
  const flash = muzzleFlash(); flash.position.copy(muzzle.position); g.add(flash);
  if (id === 'scatter') flash.scale.setScalar(1.8);
  if (id === 'longbow' || id === 'cannon') flash.scale.setScalar(1.5);
  g.userData.muzzle = muzzle; g.userData.flash = flash; g.userData.parts = P; g.userData.eject = ejectPos;
  g.userData.sightY = sightY; g.userData.id = id;
  return g;
}

// ------------------------------------------------------------------ knives
function bladeMesh(shape, m, depth = 0.006) {
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: 0.0025, bevelSize: 0.0035, bevelSegments: 2 });
  geo.translate(0, 0, -depth / 2);
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, m);
}

export function buildKnife(id) {
  const d = KNIVES[id];
  const m = mats();
  const steel = new THREE.MeshStandardMaterial({ color: d.color, metalness: 0.95, roughness: 0.15 });
  const handleM = new THREE.MeshStandardMaterial({ color: d.handle, metalness: 0.35, roughness: 0.55 });
  const g = new THREE.Group();
  const knife = new THREE.Group();
  const s = new THREE.Shape();
  if (d.kind === 'karambit') {
    s.moveTo(0, 0); s.quadraticCurveTo(0.09, -0.005, 0.15, -0.075); s.quadraticCurveTo(0.12, -0.02, 0.02, 0.03); s.lineTo(0, 0.025);
    knife.add(bladeMesh(s, steel));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.022, 0.006, 10, 24), handleM); ring.position.set(-0.13, 0.0, 0); knife.add(ring);
    rbox(knife, 0.11, 0.028, 0.018, handleM, -0.06, 0.012, 0, 0.007);
    rbox(knife, 0.09, 0.004, 0.019, m.glowCyan, -0.06, 0.012, 0, 0.001);
  } else if (d.kind === 'butterfly') {
    s.moveTo(0, 0); s.lineTo(0.13, 0.004); s.lineTo(0.16, 0.02); s.lineTo(0.12, 0.028); s.lineTo(0, 0.026);
    knife.add(bladeMesh(s, steel));
    const h1 = new THREE.Group(), h2 = new THREE.Group();
    for (const h of [h1, h2]) { rbox(h, 0.12, 0.012, 0.016, handleM, -0.06, 0.006, 0.0, 0.005); for (let i = 0; i < 4; i++) rbox(h, 0.014, 0.004, 0.017, m.robotJoint, -0.02 - i * 0.025, 0.006, 0, 0.001); }
    h1.position.set(0, 0.022, 0.01); h2.position.set(0, 0.004, -0.01);
    knife.add(h1); knife.add(h2);
    g.userData.h1 = h1; g.userData.h2 = h2;
  } else if (d.kind === 'bayonet') {
    s.moveTo(0, 0); s.lineTo(0.2, 0.006); s.lineTo(0.23, 0.02); s.lineTo(0.19, 0.032); s.lineTo(0, 0.032);
    knife.add(bladeMesh(s, steel, 0.007));
    rbox(knife, 0.012, 0.06, 0.03, m.steel, -0.005, 0.016, 0, 0.004);
    rbox(knife, 0.12, 0.03, 0.024, handleM, -0.07, 0.016, 0, 0.01);
  } else if (d.kind === 'huntsman') {
    s.moveTo(0, 0); s.lineTo(0.17, 0.0); s.quadraticCurveTo(0.21, 0.01, 0.22, 0.03); s.lineTo(0.15, 0.036);
    for (let x = 0.15; x > 0.02; x -= 0.02) { s.lineTo(x - 0.01, 0.046); s.lineTo(x - 0.02, 0.038); }
    s.lineTo(0, 0.038);
    knife.add(bladeMesh(s, steel, 0.008));
    rbox(knife, 0.015, 0.07, 0.03, m.steel, -0.005, 0.018, 0, 0.004);
    rbox(knife, 0.12, 0.034, 0.026, handleM, -0.07, 0.018, 0, 0.012);
  } else {
    s.moveTo(0, 0); s.lineTo(0.15, 0.004); s.lineTo(0.18, 0.02); s.lineTo(0.14, 0.03); s.lineTo(0, 0.03);
    knife.add(bladeMesh(s, steel));
    rbox(knife, 0.012, 0.05, 0.026, m.steel, -0.005, 0.015, 0, 0.004);
    rbox(knife, 0.11, 0.028, 0.022, handleM, -0.065, 0.015, 0, 0.01);
  }
  knife.rotation.y = Math.PI / 2;
  const holder = new THREE.Group();
  holder.add(knife);
  holder.rotation.x = 0.5;
  g.add(holder);
  g.userData.knife = knife; g.userData.holder = holder; g.userData.kind = d.kind;
  const hand = group(g, 0.0, -0.005, 0.07);
  robotHand(hand, 1, 1.15);
  const fa = robotForearm(hand, 1, 0.36); fa.position.set(0.01, -0.03, 0.03); fa.rotation.set(0.35, -0.12, 0);
  g.userData.sightY = 0.05;
  return g;
}

// ------------------------------------------------------------------ tools
export function buildTool(kind) {
  const m = mats();
  const g = new THREE.Group();
  const P = {};
  const yellow = colored(0xe0b020, 0.35, 0.4);
  if (kind === 'vacuum') {
    const can = cyl(g, 0.08, 0.3, yellow, 0.06, -0.08, 0.05, 24); void can;
    cyl(g, 0.082, 0.02, m.dark, 0.06, -0.08, -0.09, 24); cyl(g, 0.082, 0.02, m.dark, 0.06, -0.08, 0.19, 24);
    // glass window showing fill
    P.window = group(g, 0.06, -0.08, 0.05);
    const win = cyl(P.window, 0.084, 0.16, new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.25, roughness: 0.05 }), 0, 0, 0, 24); void win;
    P.fill = cyl(P.window, 0.07, 0.16, colored(0x7a6040, 0.1, 0.9), 0, 0, 0, 20);
    g.userData.fill = P.fill;
    cyl(g, 0.024, 0.55, m.gunmetal, 0, -0.02, -0.3, 16);
    for (let i = 0; i < 6; i++) cyl(g, 0.028, 0.01, m.dark, 0, -0.02, -0.12 - i * 0.07, 16);
    P.head = group(g, 0, -0.02, -0.62);
    cyl(P.head, 0.035, 0.12, m.steel, 0, 0, 0, 20, 0.075);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.006, 8, 28), m.glowCyan); ring.position.z = -0.06; P.head.add(ring);
    P.ring = ring;
    const hose = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.016, 10, 20, Math.PI), m.dark); hose.position.set(0.05, -0.06, -0.12); hose.rotation.y = Math.PI / 2; g.add(hose);
    const grip = rbox(g, 0.034, 0.1, 0.045, m.polymer, 0, -0.07, -0.05, 0.01); grip.rotation.x = -0.2;
    const muzzle = new THREE.Object3D(); muzzle.position.set(0, -0.02, -0.7); g.add(muzzle); g.userData.muzzle = muzzle;
    addArms(g, [0.0, -0.1, -0.04], [-0.005, -0.05, -0.34]);
  } else if (kind === 'washer') {
    const blue = colored(0x2a6fbf, 0.4, 0.35);
    rbox(g, 0.06, 0.09, 0.2, blue, 0, -0.01, 0, 0.014);
    P.lance = group(g);
    cyl(P.lance, 0.011, 0.7, m.steel, 0, 0.02, -0.45, 14);
    cyl(P.lance, 0.02, 0.06, m.dark, 0, 0.02, -0.82, 14, 0.014);
    const tip = cyl(P.lance, 0.008, 0.02, m.glowCyan, 0, 0.02, -0.855, 10); void tip;
    const grip = rbox(g, 0.036, 0.1, 0.05, m.polymer, 0, -0.08, 0.0, 0.01); grip.rotation.x = -0.2;
    rbox(g, 0.04, 0.03, 0.16, m.polymer, 0, -0.0, -0.28, 0.008);
    const tank = cyl(g, 0.05, 0.18, new THREE.MeshStandardMaterial({ color: 0x7fc8ff, transparent: true, opacity: 0.6, roughness: 0.05, metalness: 0.1 }), -0.075, 0.0, 0.0, 20);
    g.userData.fill = tank;
    const gauge = new THREE.Mesh(new THREE.CircleGeometry(0.018, 16), m.glowCyan); gauge.position.set(0.031, 0.01, -0.02); gauge.rotation.y = Math.PI / 2; g.add(gauge);
    const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.02, -0.87); g.add(muzzle); g.userData.muzzle = muzzle;
    addArms(g, [0.0, -0.09, 0.01], [-0.005, -0.04, -0.28]);
  } else {
    const red = colored(0xb02a1a, 0.4, 0.4);
    const tank = cyl(g, 0.065, 0.28, red, 0.0, -0.1, -0.03, 20); g.userData.fill = tank;
    cyl(g, 0.067, 0.02, m.dark, 0.0, -0.1, -0.14, 20);
    rbox(g, 0.06, 0.07, 0.25, m.gunmetal, 0, 0.0, -0.05, 0.012);
    cyl(g, 0.022, 0.4, m.steel, 0, 0.01, -0.35, 14);
    for (let i = 0; i < 5; i++) cyl(g, 0.03, 0.008, m.dark, 0, 0.01, -0.3 - i * 0.04, 14);
    cyl(g, 0.04, 0.1, m.dark, 0, 0.01, -0.58, 16, 0.03);
    P.pilot = new THREE.Mesh(new THREE.SphereGeometry(0.012, 10, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.6, 1.4, 4) }));
    P.pilot.position.set(0, -0.025, -0.6); g.add(P.pilot);
    g.userData.pilot = P.pilot;
    const grip = rbox(g, 0.036, 0.1, 0.05, m.polymer, 0, -0.08, 0.04, 0.01); grip.rotation.x = -0.2;
    const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0.01, -0.64); g.add(muzzle); g.userData.muzzle = muzzle;
    addArms(g, [0.0, -0.09, 0.05], [-0.005, -0.04, -0.33]);
  }
  g.userData.parts = P;
  g.userData.sightY = 0.05;
  return g;
}

// ------------------------------------------------------------------ casings
export class Casings {
  constructor(scene) {
    const m = mats();
    this.list = [];
    this.geo = new THREE.CylinderGeometry(0.0026, 0.0026, 0.012, 8);
    this.shellGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.022, 8);
    for (let i = 0; i < 24; i++) {
      const mesh = new THREE.Mesh(this.geo, m.brass); mesh.visible = false; scene.add(mesh);
      this.list.push({ mesh, vel: new THREE.Vector3(), spin: new THREE.Vector3(), t: 0 });
    }
    this.i = 0;
    this.m = m;
  }
  eject(model, shell = false) {
    if (!model || !model.userData.eject) return;
    const c = this.list[this.i++ % this.list.length];
    c.mesh.geometry = shell ? this.shellGeo : this.geo;
    c.mesh.material = shell ? this.m.shell : this.m.brass;
    const p = model.userData.eject.clone();
    model.localToWorld(p);
    c.mesh.position.copy(p);
    c.mesh.visible = true;
    c.vel.set(0.45 + Math.random() * 0.3, 0.55 + Math.random() * 0.3, 0.1 + Math.random() * 0.15);
    c.spin.set(Math.random() * 20, Math.random() * 20, Math.random() * 20);
    c.t = 0.6;
  }
  update(dt) {
    for (const c of this.list) {
      if (c.t <= 0) continue;
      c.t -= dt;
      c.vel.y -= 4.5 * dt;
      c.mesh.position.addScaledVector(c.vel, dt);
      c.mesh.rotation.x += c.spin.x * dt; c.mesh.rotation.y += c.spin.y * dt; c.mesh.rotation.z += c.spin.z * dt;
      if (c.t <= 0) c.mesh.visible = false;
    }
  }
}
