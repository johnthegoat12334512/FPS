import * as THREE from 'three';

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.tracers = [];
    this.holes = [];
    this.holeGeo = new THREE.CircleGeometry(0.05, 8);
    this.holeMat = new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  }
  tracer(a, b, color) {
    const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.tracers.push({ line, t: 0.07 });
  }
  bulletHole(hit) {
    let h;
    if (this.holes.length >= 80) { h = this.holes.shift(); }
    else { h = new THREE.Mesh(this.holeGeo, this.holeMat); this.scene.add(h); }
    h.position.set(hit.x + hit.nx * 0.01, hit.y + hit.ny * 0.01, hit.z + hit.nz * 0.01);
    h.lookAt(hit.x + hit.nx, hit.y + hit.ny, hit.z + hit.nz);
    this.holes.push(h);
  }
  update(dt) {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.t -= dt;
      t.line.material.opacity = Math.max(0, t.t / 0.07) * 0.8;
      if (t.t <= 0) { this.scene.remove(t.line); t.line.geometry.dispose(); t.line.material.dispose(); this.tracers.splice(i, 1); }
    }
  }
}
