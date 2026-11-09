import * as THREE from 'three';
import { floorTexture, wallTexture, labelTexture, wallbuyTexture } from './textures.js';
import { GUNS, PERKS } from './data.js';

export const CELL = 2;
export const WALL_H = 4.5;
export const H_CRATE = 1.1;
export const H_TALL = 2.4;
export const H_OBJ = 2.2;

export const ZONE_KEYS = ['h', 'a', 'b', 'c', 'd'];
export const ZONE_INFO = {
  h: { name: 'Sanitation HQ', tex: 'hub', fog: 0x1b2128 },
  a: { name: 'Loading Bay', tex: 'bay', fog: 0x221f1a },
  b: { name: 'Admin Offices', tex: 'office', fog: 0x1a1d24 },
  c: { name: 'Hydroponics', tex: 'green', fog: 0x162119 },
  d: { name: 'Reactor Core', tex: 'reactor', fog: 0x24160f },
};

// ---------------------------------------------------------------- map layout
function buildLayout() {
  const W = 48, H = 40;
  const g = [];
  for (let y = 0; y < H; y++) g.push(new Array(W).fill('#'));
  const rect = (x0, y0, x1, y1, c) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) g[y][x] = c; };
  const set = (x, y, c) => { g[y][x] = c; };

  rect(1, 27, 20, 38, 'h');
  rect(22, 24, 46, 38, 'a');
  rect(17, 12, 46, 22, 'b');
  rect(1, 12, 15, 25, 'c');
  rect(12, 1, 35, 10, 'd');

  // doors (digit = phase that opens it)
  set(21, 31, '1'); set(21, 32, '1');
  set(33, 23, '2'); set(34, 23, '2');
  set(16, 17, '3'); set(16, 18, '3'); set(6, 26, '3'); set(7, 26, '3');
  set(23, 11, '4'); set(24, 11, '4');

  // --- HQ
  set(11, 27, 'S'); set(16, 27, 'R'); set(1, 29, 'M'); set(1, 35, 'I'); set(20, 28, 'W');
  set(4, 38, 'P'); set(8, 38, 'P'); set(12, 38, 'P'); set(16, 38, 'P'); set(19, 38, 'P');
  set(14, 32, 'x'); set(15, 32, 'x'); set(15, 33, 'x'); set(15, 34, 'X');

  // --- Loading bay
  for (const [x, y] of [[25, 26], [26, 26], [25, 27], [30, 29], [31, 29], [30, 30], [38, 26], [39, 26], [40, 26], [36, 33], [37, 33], [36, 34], [43, 30], [43, 31], [44, 31], [28, 35], [29, 35], [41, 36], [42, 36]]) set(x, y, 'x');
  for (const [x, y] of [[26, 27], [31, 30], [31, 31], [39, 27], [37, 34], [29, 36], [42, 37]]) set(x, y, 'X');
  set(34, 30, '#'); set(34, 31, '#');
  set(46, 24, 'I'); set(46, 38, 'W');

  // --- Offices
  rect(20, 15, 23, 15, '#'); rect(26, 15, 29, 15, '#');
  rect(20, 19, 23, 19, '#'); rect(26, 19, 29, 19, '#');
  rect(32, 13, 32, 16, '#'); rect(32, 19, 32, 20, '#');
  rect(37, 15, 40, 15, '#'); rect(43, 15, 44, 15, '#');
  for (const [x, y] of [[21, 13], [22, 13], [27, 13], [28, 13], [21, 17], [22, 17], [27, 17], [28, 17], [21, 21], [22, 21], [27, 21], [28, 21], [36, 18], [37, 18], [40, 18], [41, 18], [44, 20], [45, 20], [38, 21]]) set(x, y, 'x');
  set(39, 18, 'X');
  set(46, 12, 'I'); set(17, 22, 'W');

  // --- Hydroponics
  rect(3, 14, 5, 14, 'x'); rect(9, 14, 12, 14, 'x');
  rect(3, 18, 6, 18, 'x'); rect(10, 18, 13, 18, 'x');
  rect(3, 22, 5, 22, 'x'); rect(10, 22, 13, 22, 'x');
  set(8, 16, '#'); set(8, 20, '#');
  set(1, 12, 'I'); set(15, 25, 'W');

  // --- Reactor
  for (const [x, y] of [[18, 3], [29, 3], [18, 8], [29, 8]]) set(x, y, '#');
  for (const [x, y] of [[14, 2], [15, 2], [14, 9], [33, 2], [32, 9], [33, 9], [13, 5], [34, 6]]) set(x, y, 'x');
  set(13, 6, 'X'); set(34, 5, 'X');
  set(12, 1, 'I'); set(35, 10, 'W');

  const wallbuys = [
    { x: 0, y: 32, gun: 'hornet' },
    { x: 0, y: 36, gun: 'cannon' },
    { x: 47, y: 31, gun: 'scatter' },
    { x: 40, y: 39, gun: 'vanguard' },
    { x: 47, y: 17, gun: 'marksman' },
    { x: 30, y: 11, gun: 'longbow' },
    { x: 0, y: 20, gun: 'mauler' },
  ];
  const perkOrder = ['ironhide', 'quickhands', 'rush', 'doubletap', 'janitor'];
  return { W, H, g, wallbuys, perkOrder, start: { x: 10, y: 33 }, boss: { x: 24, y: 6 } };
}

// ---------------------------------------------------------------- Level class
export class Level {
  constructor(scene) {
    this.scene = scene;
    const L = buildLayout();
    this.W = L.W; this.H = L.H; this.chars = L.g;
    this.wallbuyDefs = L.wallbuys; this.perkOrder = L.perkOrder;
    this.startCell = L.start; this.bossCell = L.boss;
    const N = this.W * this.H;
    this.height = new Float32Array(N); // block height of the cell
    this.type = new Uint8Array(N);     // 0 floor 1 wall 2 crate 3 tall 4 door 5 object
    this.zone = new Int8Array(N).fill(-1);
    this.doorPhase = new Int8Array(N);
    this.doors = {}; // phase -> {cells, open, mesh, t}
    this.objects = []; // {kind, x, y, cx, cz, data}
    this.flow = new Float32Array(N);
    this.flowFrom = -1;
    this._parse();
    this._floodZones();
    this.zoneCells = {}; // floor cells per zone (for spawning / grime)
    for (const k of ZONE_KEYS) this.zoneCells[k] = [];
    for (let y = 0; y < this.H; y++) for (let x = 0; x < this.W; x++) {
      const i = this.idx(x, y);
      if (this.type[i] === 0 && this.zone[i] >= 0) this.zoneCells[ZONE_KEYS[this.zone[i]]].push(i);
    }
    this.group = new THREE.Group();
    scene.add(this.group);
    this._buildMeshes();
  }

  idx(x, y) { return y * this.W + x; }
  inside(x, y) { return x >= 0 && y >= 0 && x < this.W && y < this.H; }
  cellOf(wx, wz) { return [Math.floor(wx / CELL), Math.floor(wz / CELL)]; }
  center(x, y) { return [x * CELL + CELL / 2, y * CELL + CELL / 2]; }
  hAt(x, y) { return this.inside(x, y) ? this.height[this.idx(x, y)] : 99; }
  zoneAtWorld(wx, wz) {
    const [x, y] = this.cellOf(wx, wz);
    if (!this.inside(x, y)) return null;
    const z = this.zone[this.idx(x, y)];
    return z >= 0 ? ZONE_KEYS[z] : null;
  }

  _parse() {
    for (let y = 0; y < this.H; y++) for (let x = 0; x < this.W; x++) {
      const c = this.chars[y][x]; const i = this.idx(x, y);
      const zi = ZONE_KEYS.indexOf(c);
      if (c === '#') { this.type[i] = 1; this.height[i] = 99; }
      else if (zi >= 0) { this.type[i] = 0; this.zone[i] = zi; }
      else if (c === 'x') { this.type[i] = 2; this.height[i] = H_CRATE; }
      else if (c === 'X') { this.type[i] = 3; this.height[i] = H_TALL; }
      else if (c >= '1' && c <= '4') {
        const p = +c; this.type[i] = 4; this.height[i] = 99; this.doorPhase[i] = p;
        (this.doors[p] ||= { cells: [], open: false, t: 0, meshes: [] }).cells.push(i);
      } else {
        this.type[i] = 5; this.height[i] = H_OBJ;
        this.objects.push({ kind: c, x, y, i });
      }
    }
  }

  _floodZones() {
    let changed = true;
    while (changed) {
      changed = false;
      for (let y = 0; y < this.H; y++) for (let x = 0; x < this.W; x++) {
        const i = this.idx(x, y);
        if (this.type[i] === 1 || this.zone[i] >= 0) continue;
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = x + dx, ny = y + dy;
          if (!this.inside(nx, ny)) continue;
          const nz = this.zone[this.idx(nx, ny)];
          if (nz >= 0 && this.type[this.idx(nx, ny)] !== 4) { this.zone[i] = nz; changed = true; break; }
        }
      }
    }
  }

  // ---------------------------------------------------------- meshes
  _buildMeshes() {
    const floorMats = {}, wallMats = {};
    for (const k of ZONE_KEYS) {
      const kind = ZONE_INFO[k].tex;
      floorMats[k] = new THREE.MeshLambertMaterial({ map: floorTexture(kind, 11 + k.charCodeAt(0)) });
      wallMats[k] = new THREE.MeshLambertMaterial({ map: wallTexture(kind, 23 + k.charCodeAt(0)) });
    }
    const floorQuads = {}, wallQuads = {};
    for (const k of ZONE_KEYS) { floorQuads[k] = []; wallQuads[k] = []; }
    for (let y = 0; y < this.H; y++) for (let x = 0; x < this.W; x++) {
      const i = this.idx(x, y);
      if (this.type[i] === 1) {
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = x + dx, ny = y + dy;
          if (!this.inside(nx, ny)) continue;
          const ni = this.idx(nx, ny);
          if (this.type[ni] === 1) continue;
          let zk = this.zone[ni] >= 0 ? ZONE_KEYS[this.zone[ni]] : 'h';
          wallQuads[zk].push([x, y, dx, dy]);
        }
      } else {
        const zk = this.zone[i] >= 0 ? ZONE_KEYS[this.zone[i]] : 'h';
        floorQuads[zk].push([x, y]);
      }
    }
    for (const k of ZONE_KEYS) {
      if (floorQuads[k].length) this.group.add(new THREE.Mesh(this._floorGeo(floorQuads[k], 0, true), floorMats[k]));
      if (wallQuads[k].length) this.group.add(new THREE.Mesh(this._wallGeo(wallQuads[k]), wallMats[k]));
    }
    // ceiling
    const allCells = [];
    for (let y = 0; y < this.H; y++) for (let x = 0; x < this.W; x++) if (this.type[this.idx(x, y)] !== 1) allCells.push([x, y]);
    const ceilMat = new THREE.MeshLambertMaterial({ color: 0x23262b });
    this.group.add(new THREE.Mesh(this._floorGeo(allCells, WALL_H, false), ceilMat));

    // ceiling light panels
    const lights = [];
    for (let y = 0; y < this.H; y++) for (let x = 0; x < this.W; x++) {
      const i = this.idx(x, y);
      if (this.type[i] !== 1 && (x % 3 === 1) && (y % 3 === 1)) lights.push([x, y]);
    }
    const panelGeo = new THREE.BoxGeometry(1.2, 0.06, 0.5);
    const panelMat = new THREE.MeshBasicMaterial({ color: 0xfff6dd });
    const panels = new THREE.InstancedMesh(panelGeo, panelMat, lights.length);
    const m = new THREE.Matrix4();
    lights.forEach(([x, y], n) => { const [cx, cz] = this.center(x, y); m.makeTranslation(cx, WALL_H - 0.03, cz); panels.setMatrixAt(n, m); });
    this.group.add(panels);

    // crates
    const crateTex = this._crateTexture();
    const crateMat = new THREE.MeshLambertMaterial({ map: crateTex });
    const crates = [], talls = [];
    for (let i = 0; i < this.type.length; i++) { if (this.type[i] === 2) crates.push(i); if (this.type[i] === 3) talls.push(i); }
    const cg = new THREE.BoxGeometry(CELL * 0.98, H_CRATE, CELL * 0.98);
    const ci = new THREE.InstancedMesh(cg, crateMat, crates.length);
    crates.forEach((i, n) => { const x = i % this.W, y = (i / this.W) | 0; const [cx, cz] = this.center(x, y); m.makeTranslation(cx, H_CRATE / 2, cz); ci.setMatrixAt(n, m); });
    this.group.add(ci);
    const tg = new THREE.BoxGeometry(CELL * 0.98, H_TALL, CELL * 0.98);
    const tallMat = new THREE.MeshLambertMaterial({ map: crateTex, color: 0x9fb0c0 });
    const ti = new THREE.InstancedMesh(tg, tallMat, talls.length);
    talls.forEach((i, n) => { const x = i % this.W, y = (i / this.W) | 0; const [cx, cz] = this.center(x, y); m.makeTranslation(cx, H_TALL / 2, cz); ti.setMatrixAt(n, m); });
    this.group.add(ti);

    // doors
    for (const p in this.doors) {
      const d = this.doors[p];
      const doorMat = new THREE.MeshLambertMaterial({ map: labelTexture([{ text: 'LOCKED', color: '#ff5050' }, { text: `PHASE ${p}`, color: '#ffd25a' }], { bg: '#2c3038', border: '#c0392b' }) });
      const plain = new THREE.MeshLambertMaterial({ color: 0x3a3f48 });
      for (const i of d.cells) {
        const x = i % this.W, y = (i / this.W) | 0;
        const vertical = this.type[this.idx(x - 1, y)] !== 1 || this.type[this.idx(x + 1, y)] !== 1; // passage along x
        const [cx, cz] = this.center(x, y);
        const geo = vertical ? new THREE.BoxGeometry(0.4, WALL_H, CELL) : new THREE.BoxGeometry(CELL, WALL_H, 0.4);
        const mats = vertical ? [doorMat, doorMat, plain, plain, plain, plain] : [plain, plain, plain, plain, doorMat, doorMat];
        const mesh = new THREE.Mesh(geo, mats);
        mesh.position.set(cx, WALL_H / 2, cz);
        this.group.add(mesh);
        d.meshes.push(mesh);
      }
    }

    // wall buys
    this.wallbuys = [];
    for (const wb of this.wallbuyDefs) {
      let fx = 0, fy = 0;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = wb.x + dx, ny = wb.y + dy;
        if (this.inside(nx, ny) && this.type[this.idx(nx, ny)] === 0) { fx = dx; fy = dy; break; }
      }
      const gun = GUNS[wb.gun];
      const tex = wallbuyTexture(gun.name, gun.cost, gun.cls);
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.0), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
      const [cx, cz] = this.center(wb.x, wb.y);
      mesh.position.set(cx + fx * (CELL / 2 + 0.02), 1.7, cz + fy * (CELL / 2 + 0.02));
      mesh.rotation.y = Math.atan2(fx, fy);
      this.group.add(mesh);
      const [px, pz] = this.center(wb.x + fx, wb.y + fy);
      this.wallbuys.push({ gun: wb.gun, x: px, z: pz, mesh });
    }

    // objects
    let perkN = 0;
    for (const o of this.objects) {
      const [cx, cz] = this.center(o.x, o.y);
      o.cx = cx; o.cz = cz;
      let face = [0, 1];
      for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
        const nx = o.x + dx, ny = o.y + dy;
        if (this.inside(nx, ny) && this.type[this.idx(nx, ny)] === 0) { face = [dx, dy]; break; }
      }
      o.face = face;
      const grp = new THREE.Group();
      grp.position.set(cx, 0, cz);
      grp.rotation.y = Math.atan2(face[0], face[1]);
      if (o.kind === 'P') { o.perk = this.perkOrder[perkN++]; }
      this._buildObject(o, grp);
      this.group.add(grp);
      o.group = grp;
    }
  }

  _buildObject(o, grp) {
    const box = (w, h, d, color, y = h / 2, z = 0, extra = {}) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color, ...extra }));
      mesh.position.set(0, y, z); grp.add(mesh); return mesh;
    };
    const screen = (tex, w, h, y, z) => {
      const s = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex }));
      s.position.set(0, y, z); grp.add(s); return s;
    };
    if (o.kind === 'S') {
      box(1.6, 1.1, 1.0, 0x30363f);
      box(1.6, 1.2, 0.3, 0x262b33, 1.7, -0.35);
      screen(labelTexture([{ text: 'SUPPLY TERMINAL', color: '#6fe3ff' }, { text: 'Press E', color: '#fff', size: 44 }], { bg: '#06222c', border: '#1fb6e0' }), 1.4, 0.8, 1.7, -0.19);
    } else if (o.kind === 'R') {
      box(1.7, 1.0, 1.4, 0x2b1f3a);
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), new THREE.MeshBasicMaterial({ color: 0xc04dff }));
      core.position.y = 1.5; grp.add(core); o.anim = core;
      box(0.2, 1.6, 0.2, 0x403055, 1.6, -0.55);
      screen(labelTexture([{ text: 'REFINERY', color: '#e09bff' }, { text: '5000 ¢', color: '#ffd25a' }], { bg: '#1a0b26', border: '#c04dff', h: 200 }), 1.2, 0.47, 0.6, 0.71);
    } else if (o.kind === 'M') {
      box(1.8, 0.9, 1.1, 0x6b4a2a);
      box(1.85, 0.12, 1.15, 0x3c2a18, 0.9);
      const q = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.55), new THREE.MeshBasicMaterial({ map: labelTexture([{ text: '? SUPPLY CRATE ?', color: '#7fd8ff' }, { text: '950 ¢', color: '#ffd25a' }], { bg: '#0b1a2a', border: '#7fd8ff', h: 256 }) }));
      q.position.set(0, 0.5, 0.56); grp.add(q);
      const glow = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 3.5, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0x5ac8ff, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false }));
      glow.position.y = 2.6; grp.add(glow);
    } else if (o.kind === 'I') {
      box(1.8, 1.4, 1.6, 0x3b3f2a);
      box(1.2, 0.6, 0.1, 0x050505, 1.0, 0.8);
      const g2 = box(1.4, 0.15, 0.12, 0x66ff55, 1.4, 0.8, { emissive: 0x33aa22 });
      screen(labelTexture([{ text: 'DISPOSAL CHUTE', color: '#8dff6f' }, { text: 'Empty tank: E', color: '#fff', size: 40 }], { bg: '#0d1f0a', border: '#55dd33' }), 1.4, 0.7, 1.95, 0.0).position.z = 0.0;
      grp.children[grp.children.length - 1].position.set(0, 1.95, 0.81);
      g2.name = 'glow';
    } else if (o.kind === 'W') {
      const mat = new THREE.MeshLambertMaterial({ color: 0x2a6fbf });
      for (const dx of [-0.45, 0.45]) { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 1.7, 14), mat); c.position.set(dx, 0.85, 0); grp.add(c); }
      const f = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.3, 10), new THREE.MeshLambertMaterial({ color: 0xc0392b })); f.position.set(0, 0.65, 0.35); grp.add(f);
      screen(labelTexture([{ text: 'SERVICE STATION', color: '#7fc8ff' }, { text: 'Water + Fuel: E', color: '#fff', size: 40 }], { bg: '#08182a', border: '#2a8cf0' }), 1.4, 0.7, 2.0, 0.42);
    } else if (o.kind === 'P') {
      const perk = PERKS[o.perk];
      box(1.3, 2.1, 1.0, perk.color);
      box(1.1, 1.0, 0.05, 0x111111, 1.1, 0.5);
      screen(labelTexture([{ text: perk.name.toUpperCase(), color: '#fff' }, { text: perk.cost + ' ¢', color: '#ffd25a' }], { bg: '#101010', border: '#' + perk.color.toString(16).padStart(6, '0'), h: 256 }), 1.0, 0.5, 1.6, 0.53);
      const glow = box(1.32, 0.1, 1.02, 0xffffff, 2.12, 0, { emissive: perk.color });
      glow.material.emissiveIntensity = 1.0;
    }
  }

  _crateTexture() {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d');
    g.fillStyle = '#6e5636'; g.fillRect(0, 0, 128, 128);
    g.strokeStyle = '#3e2f1b'; g.lineWidth = 10; g.strokeRect(5, 5, 118, 118);
    g.lineWidth = 8; g.beginPath(); g.moveTo(8, 8); g.lineTo(120, 120); g.stroke();
    g.fillStyle = 'rgba(0,0,0,0.15)'; for (let i = 0; i < 8; i++) g.fillRect(0, i * 16, 128, 2);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }

  _floorGeo(cells, y, up) {
    const pos = [], uv = [], nor = [], index = [];
    let v = 0;
    for (const [x, z] of cells) {
      const x0 = x * CELL, z0 = z * CELL, x1 = x0 + CELL, z1 = z0 + CELL;
      pos.push(x0, y, z0, x1, y, z0, x1, y, z1, x0, y, z1);
      uv.push(0, 0, 1, 0, 1, 1, 0, 1);
      const ny = up ? 1 : -1;
      for (let k = 0; k < 4; k++) nor.push(0, ny, 0);
      if (up) index.push(v, v + 2, v + 1, v, v + 3, v + 2); else index.push(v, v + 1, v + 2, v, v + 2, v + 3);
      v += 4;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    geo.setIndex(index);
    return geo;
  }

  _wallGeo(quads) {
    const pos = [], uv = [], nor = [], index = [];
    let v = 0;
    const segs = Math.round(WALL_H / CELL * 2) / 2; // texture vertical repeats
    for (const [x, z, dx, dz] of quads) {
      // face lies on the boundary between wall cell and neighbour, facing the neighbour
      const cx = x * CELL + CELL / 2 + dx * CELL / 2;
      const cz = z * CELL + CELL / 2 + dz * CELL / 2;
      // tangent vector along face
      const tx = -dz, tz = dx;
      const ax = cx - tx * CELL / 2, az = cz - tz * CELL / 2;
      const bx = cx + tx * CELL / 2, bz = cz + tz * CELL / 2;
      pos.push(ax, 0, az, bx, 0, bz, bx, WALL_H, bz, ax, WALL_H, az);
      uv.push(0, 0, 1, 0, 1, WALL_H / CELL, 0, WALL_H / CELL);
      for (let k = 0; k < 4; k++) nor.push(dx, 0, dz);
      // winding so the face points along (dx,dz)
      index.push(v, v + 2, v + 1, v, v + 3, v + 2);
      v += 4;
    }
    void segs;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    geo.setIndex(index);
    geo.computeBoundingSphere();
    return geo;
  }

  // ---------------------------------------------------------- doors
  openDoor(phase, instant = false) {
    const d = this.doors[phase];
    if (!d || d.open) return false;
    d.open = true;
    d.t = instant ? 1 : 0;
    for (const i of d.cells) { this.height[i] = 0; this.type[i] = 0; }
    if (instant) for (const m of d.meshes) m.visible = false;
    this.flowFrom = -1;
    return true;
  }

  update(dt, time) {
    for (const p in this.doors) {
      const d = this.doors[p];
      if (d.open && d.t < 1) {
        d.t = Math.min(1, d.t + dt / 1.6);
        for (const m of d.meshes) { m.position.y = WALL_H / 2 + d.t * (WALL_H - 0.2); if (d.t >= 1) m.visible = false; }
      }
    }
    for (const o of this.objects) if (o.anim) { o.anim.rotation.y = time * 1.5; o.anim.rotation.x = time * 0.7; o.anim.position.y = 1.5 + Math.sin(time * 2) * 0.08; }
  }

  // ---------------------------------------------------------- collision
  // Is a circle at (x,z) with radius r blocked for an entity whose feet are at y (stepping allowance)?
  blockedCircle(x, z, r, feetY, step = 0.45) {
    const x0 = Math.floor((x - r) / CELL), x1 = Math.floor((x + r) / CELL);
    const z0 = Math.floor((z - r) / CELL), z1 = Math.floor((z + r) / CELL);
    for (let cz = z0; cz <= z1; cz++) for (let cx = x0; cx <= x1; cx++) {
      const h = this.hAt(cx, cz);
      if (h > feetY + step) {
        // precise circle vs AABB
        const nx = Math.max(cx * CELL, Math.min(x, cx * CELL + CELL));
        const nz = Math.max(cz * CELL, Math.min(z, cz * CELL + CELL));
        const ddx = x - nx, ddz = z - nz;
        if (ddx * ddx + ddz * ddz < r * r) return true;
      }
    }
    return false;
  }

  // Highest surface under circle footprint
  groundAt(x, z, r, feetY = 99) {
    const x0 = Math.floor((x - r) / CELL), x1 = Math.floor((x + r) / CELL);
    const z0 = Math.floor((z - r) / CELL), z1 = Math.floor((z + r) / CELL);
    let g = 0;
    for (let cz = z0; cz <= z1; cz++) for (let cx = x0; cx <= x1; cx++) {
      const h = this.hAt(cx, cz);
      if (h < 50 && h <= feetY + 0.46) {
        const nx = Math.max(cx * CELL, Math.min(x, cx * CELL + CELL));
        const nz = Math.max(cz * CELL, Math.min(z, cz * CELL + CELL));
        const ddx = x - nx, ddz = z - nz;
        if (ddx * ddx + ddz * ddz < r * r * 0.9 && h > g) g = h;
      }
    }
    return g;
  }

  // Slide a circle against walls: returns new [x,z]
  moveCircle(x, z, dx, dz, r, feetY, step) {
    let nx = x + dx;
    if (this.blockedCircle(nx, z, r, feetY, step)) nx = x;
    let nz = z + dz;
    if (this.blockedCircle(nx, nz, r, feetY, step)) nz = z;
    return [nx, nz];
  }

  // ---------------------------------------------------------- raycast (DDA)
  // Returns {dist, x,y,z, nx,ny,nz}
  raycast(ox, oy, oz, dx, dy, dz, maxDist = 200) {
    let best = maxDist, n = [0, 0, 0];
    if (dy < -1e-6) { const t = -oy / dy; if (t < best) { best = t; n = [0, 1, 0]; } }
    if (dy > 1e-6) { const t = (WALL_H - oy) / dy; if (t < best) { best = t; n = [0, -1, 0]; } }
    let cx = Math.floor(ox / CELL), cz = Math.floor(oz / CELL);
    const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
    const tDeltaX = Math.abs(dx) > 1e-9 ? CELL / Math.abs(dx) : 1e9;
    const tDeltaZ = Math.abs(dz) > 1e-9 ? CELL / Math.abs(dz) : 1e9;
    let tMaxX = Math.abs(dx) > 1e-9 ? ((dx > 0 ? (cx + 1) * CELL - ox : ox - cx * CELL) / Math.abs(dx)) : 1e9;
    let tMaxZ = Math.abs(dz) > 1e-9 ? ((dz > 0 ? (cz + 1) * CELL - oz : oz - cz * CELL) / Math.abs(dz)) : 1e9;
    let t0 = 0, lastAxis = -1;
    for (let iter = 0; iter < 400; iter++) {
      if (t0 > best) break;
      const t1 = Math.min(tMaxX, tMaxZ);
      if (!this.inside(cx, cz)) { if (t0 < best) { best = t0; n = lastAxis === 0 ? [-stepX, 0, 0] : [0, 0, -stepZ]; } break; }
      const h = this.height[this.idx(cx, cz)];
      if (h > 0) {
        const y0 = oy + dy * t0, y1 = oy + dy * Math.min(t1, best);
        if (y0 < h && iter > 0) { if (t0 < best) { best = t0; n = lastAxis === 0 ? [-stepX, 0, 0] : [0, 0, -stepZ]; } break; }
        if (y0 >= h && y1 < h) {
          const tt = t0 + (y0 - h) / (y0 - y1) * (Math.min(t1, best) - t0);
          if (tt < best) { best = tt; n = [0, 1, 0]; }
          break;
        }
      }
      if (tMaxX < tMaxZ) { t0 = tMaxX; tMaxX += tDeltaX; cx += stepX; lastAxis = 0; }
      else { t0 = tMaxZ; tMaxZ += tDeltaZ; cz += stepZ; lastAxis = 1; }
    }
    return { dist: best, x: ox + dx * best, y: oy + dy * best, z: oz + dz * best, nx: n[0], ny: n[1], nz: n[2] };
  }

  lineOfSight(ax, ay, az, bx, by, bz) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const d = Math.hypot(dx, dy, dz);
    if (d < 1e-4) return true;
    const hit = this.raycast(ax, ay, az, dx / d, dy / d, dz / d, d);
    return hit.dist >= d - 0.05;
  }

  // ---------------------------------------------------------- flow field toward player
  passableForEnemy(i) {
    const t = this.type[i];
    return t === 0 || t === 2 || t === 3;
  }

  computeFlow(px, pz) {
    const [cx, cz] = this.cellOf(px, pz);
    if (!this.inside(cx, cz)) return;
    const src = this.idx(cx, cz);
    if (src === this.flowFrom) return;
    this.flowFrom = src;
    const f = this.flow; f.fill(1e9);
    const q = new Int32Array(this.W * this.H);
    let qh = 0, qt = 0;
    f[src] = 0; q[qt++] = src;
    while (qh < qt) {
      const i = q[qh++];
      const x = i % this.W, y = (i / this.W) | 0;
      const d = f[i] + 1;
      if (x > 0) { const j = i - 1; if (f[j] > d && this.passableForEnemy(j)) { f[j] = d; q[qt++] = j; } }
      if (x < this.W - 1) { const j = i + 1; if (f[j] > d && this.passableForEnemy(j)) { f[j] = d; q[qt++] = j; } }
      if (y > 0) { const j = i - this.W; if (f[j] > d && this.passableForEnemy(j)) { f[j] = d; q[qt++] = j; } }
      if (y < this.H - 1) { const j = i + this.W; if (f[j] > d && this.passableForEnemy(j)) { f[j] = d; q[qt++] = j; } }
    }
  }

  // direction (unit xz) for an enemy at world pos to follow the flow field
  flowDir(wx, wz) {
    const [cx, cz] = this.cellOf(wx, wz);
    if (!this.inside(cx, cz)) return null;
    const i = this.idx(cx, cz);
    let best = this.flow[i], bx = -1, bz = -1;
    for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
      if (!dx && !dz) continue;
      const nx = cx + dx, nz = cz + dz;
      if (!this.inside(nx, nz)) continue;
      const j = this.idx(nx, nz);
      if (!this.passableForEnemy(j)) continue;
      if (dx && dz) { // no corner cutting
        if (!this.passableForEnemy(this.idx(cx + dx, cz)) || !this.passableForEnemy(this.idx(cx, cz + dz))) continue;
      }
      const v = this.flow[j] + (dx && dz ? 0.41 : 0);
      if (v < best) { best = v; bx = nx; bz = nz; }
    }
    if (bx < 0) return null;
    const [tx, tz] = this.center(bx, bz);
    const ddx = tx - wx, ddz = tz - wz; const l = Math.hypot(ddx, ddz) || 1;
    return [ddx / l, ddz / l];
  }

  flowDist(wx, wz) {
    const [cx, cz] = this.cellOf(wx, wz);
    if (!this.inside(cx, cz)) return 1e9;
    return this.flow[this.idx(cx, cz)];
  }
}
