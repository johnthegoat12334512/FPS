import * as THREE from 'three';

const VS = `
attribute float size;
attribute vec4 pcolor;
varying vec4 vColor;
uniform float scale;
void main(){
  vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const FS = `
varying vec4 vColor;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if(d > 0.5) discard;
  float a = smoothstep(0.5, 0.1, d);
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
}`;

class Pool {
  constructor(scene, max, additive) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 4);
    this.size = new Float32Array(max);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.baseSize = new Float32Array(max);
    this.grow = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.alive = 0;
    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.colAttr = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('pcolor', this.colAttr);
    geo.setAttribute('size', this.sizeAttr);
    geo.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { scale: { value: 400 } },
    });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.geo = geo;
    scene.add(this.points);
  }
  spawn(x, y, z, vx, vy, vz, life, size, r, g, b, a = 1, grav = 0, drag = 0, grow = 0) {
    if (this.alive >= this.max) return;
    const i = this.alive++;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.col[i * 4] = r; this.col[i * 4 + 1] = g; this.col[i * 4 + 2] = b; this.col[i * 4 + 3] = a;
    this.alpha[i] = a;
    this.life[i] = life; this.maxLife[i] = life; this.baseSize[i] = size; this.size[i] = size;
    this.grav[i] = grav; this.drag[i] = drag; this.grow[i] = grow;
  }
  update(dt) {
    let i = 0;
    while (i < this.alive) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) { this._kill(i); continue; }
      const i3 = i * 3;
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i3] *= dr; this.vel[i3 + 1] = this.vel[i3 + 1] * dr - this.grav[i] * dt; this.vel[i3 + 2] *= dr;
      this.pos[i3] += this.vel[i3] * dt; this.pos[i3 + 1] += this.vel[i3 + 1] * dt; this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      if (this.pos[i3 + 1] < 0.02) { this.pos[i3 + 1] = 0.02; this.vel[i3 + 1] *= -0.3; this.vel[i3] *= 0.6; this.vel[i3 + 2] *= 0.6; }
      const f = this.life[i] / this.maxLife[i];
      this.col[i * 4 + 3] = this.alpha[i] * Math.min(1, f * 2.5);
      this.size[i] = this.baseSize[i] * (1 + this.grow[i] * (1 - f));
      i++;
    }
    this.geo.setDrawRange(0, this.alive);
    this.posAttr.needsUpdate = true; this.colAttr.needsUpdate = true; this.sizeAttr.needsUpdate = true;
  }
  _kill(i) {
    const j = --this.alive;
    if (i === j) return;
    for (let k = 0; k < 3; k++) { this.pos[i * 3 + k] = this.pos[j * 3 + k]; this.vel[i * 3 + k] = this.vel[j * 3 + k]; }
    for (let k = 0; k < 4; k++) this.col[i * 4 + k] = this.col[j * 4 + k];
    this.life[i] = this.life[j]; this.maxLife[i] = this.maxLife[j]; this.size[i] = this.size[j];
    this.baseSize[i] = this.baseSize[j]; this.grav[i] = this.grav[j]; this.drag[i] = this.drag[j];
    this.grow[i] = this.grow[j]; this.alpha[i] = this.alpha[j];
  }
  setScale(h) { this.mat.uniforms.scale.value = h * 0.5; }
}

export class Particles {
  constructor(scene) {
    this.add = new Pool(scene, 2500, true);
    this.norm = new Pool(scene, 2500, false);
  }
  update(dt) { this.add.update(dt); this.norm.update(dt); }
  setScale(h) { this.add.setScale(h); this.norm.setScale(h); }

  sparks(x, y, z, nx, ny, nz, n = 6) {
    for (let i = 0; i < n; i++) {
      const s = 3 + Math.random() * 4;
      this.add.spawn(x, y, z, (nx + (Math.random() - 0.5)) * s, (ny + Math.random() * 0.8) * s, (nz + (Math.random() - 0.5)) * s, 0.15 + Math.random() * 0.2, 0.06, 1, 0.8, 0.4, 1, 9, 2);
    }
    this.norm.spawn(x + nx * 0.05, y + ny * 0.05, z + nz * 0.05, 0, 0.4, 0, 0.6, 0.25, 0.4, 0.4, 0.4, 0.5, -0.2, 1, 2);
  }
  goo(x, y, z, color, n = 10, speed = 3) {
    const r = ((color >> 16) & 255) / 255, g = ((color >> 8) & 255) / 255, b = (color & 255) / 255;
    for (let i = 0; i < n; i++) {
      this.norm.spawn(x, y, z, (Math.random() - 0.5) * speed, Math.random() * speed, (Math.random() - 0.5) * speed, 0.4 + Math.random() * 0.4, 0.09 + Math.random() * 0.08, r, g, b, 0.95, 12, 1);
    }
  }
  water(x, y, z, dx, dy, dz, spread) {
    const s = 16 + Math.random() * 6;
    this.norm.spawn(x, y, z, (dx + (Math.random() - 0.5) * spread) * s, (dy + (Math.random() - 0.5) * spread) * s, (dz + (Math.random() - 0.5) * spread) * s, 0.3 + Math.random() * 0.15, 0.05, 0.7, 0.85, 1, 0.55, 6, 1, 3);
  }
  mist(x, y, z) {
    this.norm.spawn(x, y, z, (Math.random() - 0.5) * 1.5, Math.random() * 1.2, (Math.random() - 0.5) * 1.5, 0.5, 0.2, 0.85, 0.92, 1, 0.35, 0, 1, 3);
  }
  flame(x, y, z, dx, dy, dz) {
    const s = 7 + Math.random() * 3;
    const t = Math.random();
    this.add.spawn(x, y, z, (dx + (Math.random() - 0.5) * 0.25) * s, (dy + (Math.random() - 0.3) * 0.25) * s, (dz + (Math.random() - 0.5) * 0.25) * s, 0.4 + Math.random() * 0.2, 0.1, 1, 0.35 + t * 0.35, 0.08, 0.38, -2, 1.5, 4);
  }
  suck(x, y, z, tx, ty, tz, color = 0x8a7a5a) {
    const r = ((color >> 16) & 255) / 255, g = ((color >> 8) & 255) / 255, b = (color & 255) / 255;
    const life = 0.25;
    this.norm.spawn(x, y, z, (tx - x) / life, (ty - y) / life, (tz - z) / life, life, 0.07, r, g, b, 1, 0, 0, -0.5);
  }
  smoke(x, y, z, n = 1, color = [0.3, 0.3, 0.3]) {
    for (let i = 0; i < n; i++) this.norm.spawn(x, y, z, (Math.random() - 0.5) * 0.8, 0.6 + Math.random(), (Math.random() - 0.5) * 0.8, 1.2, 0.35, color[0], color[1], color[2], 0.4, -0.3, 0.5, 3);
  }
  burst(x, y, z, color, n = 30, speed = 6, size = 0.12) {
    const r = ((color >> 16) & 255) / 255, g = ((color >> 8) & 255) / 255, b = (color & 255) / 255;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, e = (Math.random() - 0.3) * Math.PI;
      const s = speed * (0.4 + Math.random() * 0.6);
      this.add.spawn(x, y, z, Math.cos(a) * Math.cos(e) * s, Math.sin(e) * s, Math.sin(a) * Math.cos(e) * s, 0.4 + Math.random() * 0.5, size, r, g, b, 1, 4, 2, 1);
    }
  }
}
