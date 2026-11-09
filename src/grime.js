import * as THREE from 'three';
import { mulberry32 } from './rng.js';
import { stainTexture } from './textures.js';
import { CELL, WALL_H, ZONE_KEYS } from './level.js';

// Per zone counts: [debris piles, floor stains, wall stains, spores]
const COUNTS = {
  a: [70, 22, 10, 0],
  b: [30, 55, 45, 0],
  c: [35, 25, 15, 42],
  d: [40, 40, 25, 28],
};
const STAIN_COLORS = {
  a: [[70, 60, 40], [60, 80, 30]],
  b: [[60, 90, 30], [80, 60, 35], [50, 70, 25]],
  c: [[90, 50, 110], [60, 95, 40]],
  d: [[110, 60, 20], [100, 40, 110], [60, 90, 30]],
};
const W_PILE = 1, W_STAIN = 1, W_SPORE = 2;

export class Grime {
  constructor(scene, level) {
    this.scene = scene; this.level = level;
    this.group = new THREE.Group(); scene.add(this.group);
    this.zones = {};
    this.texCache = {};
    this.chunkGeo = new THREE.DodecahedronGeometry(0.16, 0);
    this.sporeGeo = new THREE.IcosahedronGeometry(1, 1);
    this.stainGeo = new THREE.PlaneGeometry(1, 1);
    this.tmpM = new THREE.Matrix4(); this.tmpQ = new THREE.Quaternion(); this.tmpS = new THREE.Vector3(); this.tmpP = new THREE.Vector3();
    for (const k of Object.keys(COUNTS)) this._genZone(k);
  }

  _tex(zone, n) {
    const cols = STAIN_COLORS[zone];
    const key = zone + (n % (cols.length * 2));
    if (!this.texCache[key]) this.texCache[key] = stainTexture(cols[n % cols.length], 1000 + key.charCodeAt(0) * 7 + n);
    return this.texCache[key];
  }

  _genZone(zk) {
    const rng = mulberry32(9000 + zk.charCodeAt(0) * 31);
    const L = this.level;
    const bx = L.bossCell.x * CELL, bz = L.bossCell.y * CELL;
    const cells = L.zoneCells[zk].filter(i => { const [x, z] = L.center(i % L.W, (i / L.W) | 0); return Math.hypot(x - bx, z - bz) > 4.6; });
    const [nPile, nStain, nWall, nSpore] = COUNTS[zk];
    const Z = { key: zk, piles: [], stains: [], spores: [], total: 0, cleaned: 0, extraStains: 0 };
    this.zones[zk] = Z;
    const pick = () => cells[(rng() * cells.length) | 0];

    // ---- debris piles (instanced chunks)
    const chunksPer = 5;
    const inst = new THREE.InstancedMesh(this.chunkGeo, new THREE.MeshLambertMaterial({ color: 0xffffff }), nPile * chunksPer);
    inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    const palette = [0x6b5c45, 0x51493b, 0x7a6a4a, 0x4b5a35, 0x5d4a3a];
    const col = new THREE.Color();
    for (let p = 0; p < nPile; p++) {
      const i = pick(); const cx = i % L.W, cz = (i / L.W) | 0;
      const x = cx * CELL + 0.3 + rng() * (CELL - 0.6), z = cz * CELL + 0.3 + rng() * (CELL - 0.6);
      const units = 6 + ((rng() * 7) | 0);
      const pile = { id: p, x, y: 0.12, z, units, max: units, chunks: [], done: false };
      for (let c = 0; c < chunksPer; c++) {
        const ci = p * chunksPer + c;
        const ox = (rng() - 0.5) * 0.7, oz = (rng() - 0.5) * 0.7, s = 0.6 + rng() * 0.9;
        pile.chunks.push({ ci, ox, oz, s, rx: rng() * 6, ry: rng() * 6 });
        col.setHex(palette[(rng() * palette.length) | 0]);
        inst.setColorAt(ci, col);
      }
      Z.piles.push(pile);
      Z.total += W_PILE;
    }
    Z.inst = inst; this.group.add(inst);
    for (const pile of Z.piles) this._updatePile(Z, pile);
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;

    // ---- floor stains
    let layer = 0;
    for (let s = 0; s < nStain; s++) {
      const i = pick(); const cx = i % L.W, cz = (i / L.W) | 0;
      const x = cx * CELL + 0.5 + rng() * (CELL - 1), z = cz * CELL + 0.5 + rng() * (CELL - 1);
      const size = 1.2 + rng() * 1.6;
      layer = (layer + 1) % 40;
      this._addStain(Z, x, 0.012 + layer * 0.0007, z, 0, 1, 0, size, (rng() * 6) | 0, rng() * 6.28, 70 + size * 30);
    }
    // ---- wall stains: find faces adjacent to zone cells
    const faces = [];
    for (const i of cells) {
      const cx = i % L.W, cz = (i / L.W) | 0;
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = cx + dx, nz = cz + dz;
        if (L.inside(nx, nz) && L.type[L.idx(nx, nz)] === 1) faces.push([cx, cz, dx, dz]);
      }
    }
    for (let s = 0; s < nWall && faces.length; s++) {
      const [cx, cz, dx, dz] = faces[(rng() * faces.length) | 0];
      const size = 1.0 + rng() * 1.4;
      const along = (rng() - 0.5) * (CELL - size * 0.6);
      const x = cx * CELL + CELL / 2 + dx * (CELL / 2 - 0.015 - rng() * 0.004) + (dz !== 0 ? along : 0);
      const z = cz * CELL + CELL / 2 + dz * (CELL / 2 - 0.015 - rng() * 0.004) + (dx !== 0 ? along : 0);
      const y = 0.6 + rng() * (WALL_H - 1.6);
      this._addStain(Z, x, y, z, -dx, 0, -dz, size, (rng() * 6) | 0, rng() * 6.28, 70 + size * 30);
    }
    // ---- spore pods
    this.sporeMats = [0, 1].map(() => new THREE.MeshStandardMaterial({ color: 0x8a2ab0, emissive: 0x7a10a0, emissiveIntensity: 0.5, roughness: 0.3, metalness: 0.05 }));
    const noduleMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 0.6, 2.8) });
    const stalkMat = new THREE.MeshStandardMaterial({ color: 0x3a2a40, roughness: 0.7 });
    if (!this.noduleGeo) { this.noduleGeo = new THREE.SphereGeometry(1, 8, 6); this.stalkGeo = new THREE.CylinderGeometry(0.05, 0.09, 1, 6); }
    for (let s = 0; s < nSpore; s++) {
      const i = pick(); const cx = i % L.W, cz = (i / L.W) | 0;
      const cluster = 1 + ((rng() * 3) | 0);
      const bx = cx * CELL + 0.5 + rng() * (CELL - 1), bz = cz * CELL + 0.5 + rng() * (CELL - 1);
      const grp = new THREE.Group();
      grp.position.set(bx, 0, bz);
      for (let k = 0; k < cluster; k++) {
        const r = 0.2 + rng() * 0.2;
        const px = (rng() - 0.5) * 0.6, pz = (rng() - 0.5) * 0.6, h = r * 0.6 + rng() * 0.25;
        const stalk = new THREE.Mesh(this.stalkGeo, stalkMat); stalk.scale.set(r * 1.2, h, r * 1.2); stalk.position.set(px, h / 2, pz); grp.add(stalk);
        const m = new THREE.Mesh(this.sporeGeo, this.sporeMats[(s + k) % 2]);
        m.scale.set(r, r * 1.25, r);
        m.position.set(px, h + r * 0.9, pz);
        grp.add(m);
        for (let n = 0; n < 5; n++) {
          const a = rng() * 6.28, e = (rng() - 0.3) * 1.4;
          const nd = new THREE.Mesh(this.noduleGeo, noduleMat);
          nd.scale.setScalar(r * (0.1 + rng() * 0.08));
          nd.position.set(px + Math.cos(a) * Math.cos(e) * r, h + r * 0.9 + Math.sin(e) * r * 1.25, pz + Math.sin(a) * Math.cos(e) * r);
          grp.add(nd);
        }
      }
      this.group.add(grp);
      const spore = { id: s, x: bx, y: 0.35, z: bz, hp: 60, max: 60, mesh: grp, done: false, phase: rng() * 6.28 };
      Z.spores.push(spore);
      Z.total += W_SPORE;
    }
  }

  _addStain(Z, x, y, z, nx, ny, nz, size, texN, rot, hp, dynamic = false) {
    const mat = new THREE.MeshLambertMaterial({ map: this._tex(Z.key, texN), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const m = new THREE.Mesh(this.stainGeo, mat);
    m.position.set(x, y, z);
    m.scale.set(size, size, 1);
    if (ny > 0.5) { m.rotation.set(-Math.PI / 2, 0, rot); }
    else { m.rotation.set(0, Math.atan2(nx, nz), rot); }
    m.renderOrder = 1;
    this.group.add(m);
    const st = { id: Z.stains.length, x, y, z, nx, ny, nz, r: size * 0.45, hp, max: hp, mesh: m, done: false, dynamic };
    Z.stains.push(st);
    Z.total += W_STAIN;
    return st;
  }

  _updatePile(Z, pile) {
    const f = pile.done ? 0 : Math.max(0, pile.units / pile.max);
    for (const c of pile.chunks) {
      const s = c.s * (f > 0 ? 0.35 + 0.65 * f : 0);
      this.tmpP.set(pile.x + c.ox * (0.5 + 0.5 * f), 0.08 * s + 0.02, pile.z + c.oz * (0.5 + 0.5 * f));
      this.tmpQ.setFromEuler(new THREE.Euler(c.rx, c.ry, 0));
      this.tmpS.setScalar(s);
      this.tmpM.compose(this.tmpP, this.tmpQ, this.tmpS);
      Z.inst.setMatrixAt(c.ci, this.tmpM);
    }
    Z.inst.instanceMatrix.needsUpdate = true;
  }

  // ---------------------------------------------------------------- queries
  cleanliness(zk) {
    const Z = this.zones[zk];
    if (!Z) return 1;
    let cleaned = 0;
    for (const p of Z.piles) cleaned += p.done ? W_PILE : W_PILE * (1 - p.units / p.max) * 0.5;
    for (const s of Z.stains) cleaned += s.done ? W_STAIN : W_STAIN * (1 - s.hp / s.max) * 0.5;
    for (const s of Z.spores) cleaned += s.done ? W_SPORE : W_SPORE * (1 - s.hp / s.max) * 0.5;
    return Z.total > 0 ? cleaned / Z.total : 1;
  }

  remaining(zk) {
    const Z = this.zones[zk]; if (!Z) return { piles: 0, stains: 0, spores: 0 };
    return {
      piles: Z.piles.filter(p => !p.done).length,
      stains: Z.stains.filter(p => !p.done).length,
      spores: Z.spores.filter(p => !p.done).length,
    };
  }

  // Vacuum: pull units from piles inside a cone. Returns units collected.
  vacuum(zones, ox, oy, oz, dx, dy, dz, range, cosAngle, amount, maxUnits, level, onDone) {
    let collected = 0;
    const hits = [];
    for (const zk of zones) {
      const Z = this.zones[zk]; if (!Z) continue;
      for (const p of Z.piles) {
        if (p.done) continue;
        const vx = p.x - ox, vy = p.y - oy, vz = p.z - oz;
        const d = Math.hypot(vx, vy, vz);
        if (d > range || d < 0.01) continue;
        const c = (vx * dx + vy * dy + vz * dz) / d;
        if (c < cosAngle) continue;
        if (!level.lineOfSight(ox, oy, oz, p.x, p.y + 0.15, p.z)) continue;
        hits.push([Z, p, d]);
      }
    }
    hits.sort((a, b) => a[2] - b[2]);
    for (const [Z, p] of hits) {
      if (collected >= maxUnits) break;
      const take = Math.min(p.units, amount, maxUnits - collected);
      p.units -= take; collected += take;
      if (p.units <= 0.001) { p.units = 0; p.done = true; if (onDone) onDone(p); }
      this._updatePile(Z, p);
    }
    return { collected, hits };
  }

  // Washer: damage stains within radius of hit point. Returns number completed.
  wash(zones, hx, hy, hz, radius, dmg, onDone) {
    let touched = 0;
    for (const zk of zones) {
      const Z = this.zones[zk]; if (!Z) continue;
      for (const s of Z.stains) {
        if (s.done) continue;
        const d = Math.hypot(s.x - hx, s.y - hy, s.z - hz);
        if (d > radius + s.r) continue;
        touched++;
        s.hp -= dmg * (d < s.r ? 1 : 0.6);
        s.mesh.material.opacity = Math.max(0, 0.15 + 0.85 * s.hp / s.max);
        if (s.hp <= 0) { s.done = true; s.mesh.visible = false; if (onDone) onDone(s); }
      }
    }
    return touched;
  }

  // Torch / grenade: damage spores in cone or sphere
  burn(zones, ox, oy, oz, dx, dy, dz, range, cosAngle, dmg, level, onDone) {
    let touched = 0;
    for (const zk of zones) {
      const Z = this.zones[zk]; if (!Z) continue;
      for (const s of Z.spores) {
        if (s.done) continue;
        const vx = s.x - ox, vy = s.y - oy, vz = s.z - oz;
        const d = Math.hypot(vx, vy, vz);
        if (d > range) continue;
        if (cosAngle > -1 && d > 0.3 && (vx * dx + vy * dy + vz * dz) / d < cosAngle) continue;
        if (!level.lineOfSight(ox, oy, oz, s.x, s.y + 0.2, s.z)) continue;
        touched++;
        s.hp -= dmg;
        s.burning = 0.3;
        if (s.hp <= 0) { s.done = true; s.mesh.visible = false; if (onDone) onDone(s); }
      }
    }
    return touched;
  }

  // Foam grenade: clean everything in radius
  foam(zones, x, z, radius, onStain, onSpore) {
    for (const zk of zones) {
      const Z = this.zones[zk]; if (!Z) continue;
      for (const s of Z.stains) if (!s.done && Math.hypot(s.x - x, s.z - z) < radius) { s.hp = 0; s.done = true; s.mesh.visible = false; onStain(s); }
      for (const s of Z.spores) if (!s.done && Math.hypot(s.x - x, s.z - z) < radius) { s.hp = 0; s.done = true; s.mesh.visible = false; onSpore(s); }
    }
  }

  addGooStain(zk, x, z, size) {
    const Z = this.zones[zk];
    if (!Z || Z.extraStains > 25) return null;
    Z.extraStains++;
    return this._addStain(Z, x, 0.03 + Z.extraStains * 0.0009, z, 0, 1, 0, size, (Math.random() * 6) | 0, Math.random() * 6.28, 60, true);
  }

  update(dt, time) {
    if (this.sporeMats) { this.sporeMats[0].emissiveIntensity = 0.45 + Math.sin(time * 2.4) * 0.35; this.sporeMats[1].emissiveIntensity = 0.45 + Math.sin(time * 2.4 + 2) * 0.35; }
    for (const zk in this.zones) {
      for (const s of this.zones[zk].spores) {
        if (s.done) continue;
        const k = 1 + Math.sin(time * 2.5 + s.phase) * 0.06;
        s.mesh.scale.set(k, 1 / k, k);
        if (s.burning > 0) { s.burning -= dt; s.mesh.rotation.y += dt * 8; }
      }
    }
  }

  // Nearest uncleaned items for minimap
  forEachRemaining(zk, cb) {
    const Z = this.zones[zk]; if (!Z) return;
    for (const p of Z.piles) if (!p.done) cb(p.x, p.z, 0);
    for (const s of Z.stains) if (!s.done) cb(s.x, s.z, 1);
    for (const s of Z.spores) if (!s.done) cb(s.x, s.z, 2);
  }

  // ---- save/load (only generated items persist)
  serialize() {
    const out = {};
    for (const zk in this.zones) {
      const Z = this.zones[zk];
      out[zk] = {
        p: Z.piles.map(p => p.done ? -1 : Math.round(p.units * 10) / 10),
        s: Z.stains.filter(s => !s.dynamic).map(s => s.done ? -1 : Math.round(s.hp)),
        o: Z.spores.map(s => s.done ? -1 : Math.round(s.hp)),
      };
    }
    return out;
  }
  deserialize(data) {
    if (!data) return;
    for (const zk in data) {
      const Z = this.zones[zk]; const d = data[zk]; if (!Z || !d) continue;
      (d.p || []).forEach((v, i) => { const p = Z.piles[i]; if (!p) return; if (v < 0) { p.done = true; p.units = 0; } else p.units = Math.min(p.max, v); this._updatePile(Z, p); });
      (d.s || []).forEach((v, i) => { const s = Z.stains[i]; if (!s) return; if (v < 0) { s.done = true; s.hp = 0; s.mesh.visible = false; } else { s.hp = Math.min(s.max, v); s.mesh.material.opacity = 0.15 + 0.85 * s.hp / s.max; } });
      (d.o || []).forEach((v, i) => { const s = Z.spores[i]; if (!s) return; if (v < 0) { s.done = true; s.hp = 0; s.mesh.visible = false; } else s.hp = Math.min(s.max, v); });
    }
  }
}

export { ZONE_KEYS };
