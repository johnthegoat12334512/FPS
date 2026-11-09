import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Final-look shader: vignette, chromatic aberration, film grain, damage tint
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, time: { value: 0 }, damage: { value: 0 }, aberration: { value: 0.0012 },
    grain: { value: 0.035 }, vignette: { value: 0.9 }, flash: { value: 0 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float time, damage, aberration, grain, vignette, flash;
    varying vec2 vUv;
    float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 d = vUv - 0.5;
      float r2 = dot(d,d);
      float ab = aberration * (1.0 + damage * 4.0) * r2 * 4.0;
      vec3 c;
      c.r = texture2D(tDiffuse, vUv + d * ab).r;
      c.g = texture2D(tDiffuse, vUv).g;
      c.b = texture2D(tDiffuse, vUv - d * ab).b;
      float v = smoothstep(0.85, 0.2, r2 * vignette * 1.6);
      c *= mix(0.55, 1.0, v);
      c = mix(c, c * vec3(1.4, 0.35, 0.3), damage * (1.0 - v) * 0.9);
      c += (rand(vUv * 1000.0 + time) - 0.5) * grain;
      c += vec3(1.0, 0.85, 0.6) * flash;
      gl_FragColor = vec4(c, 1.0);
    }`,
};

export class Renderer {
  constructor(game) {
    this.game = game;
    const r = game.renderer;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 0.95;
    // image-based lighting for metals / wet slime
    const pmrem = new THREE.PMREMGenerator(r);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    game.scene.environment = env;
    game.scene.environmentIntensity = 0.45;
    game.weapons.vmScene.environment = env;
    game.weapons.vmScene.environmentIntensity = 0.6;
    this.high = game.settings.quality !== 'low';
    this.build();
  }

  build() {
    const g = this.game, r = g.renderer;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(r, rt);
    this.mainPass = new RenderPass(g.scene, g.camera);
    this.vmPass = new RenderPass(g.weapons.vmScene, g.weapons.vmCam);
    this.vmPass.clear = false; this.vmPass.clearDepth = true;
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.55, 0.5, 0.82);
    this.grade = new ShaderPass(GradeShader);
    this.output = new OutputPass();
    this.composer.addPass(this.mainPass);
    this.composer.addPass(this.vmPass);
    this.composer.addPass(this.bloom);
    this.composer.addPass(this.output);
    this.composer.addPass(this.grade);
  }

  setSize(w, h) {
    if (!this.composer) return;
    const pr = this.game.renderer.getPixelRatio();
    this.composer.setPixelRatio(pr);
    this.composer.setSize(w, h);
  }

  setQuality(q) { this.high = q !== 'low'; }

  render(dt, showVM) {
    const g = this.game, r = g.renderer;
    if (!this.high) {
      r.clear();
      r.render(g.scene, g.camera);
      if (showVM) { r.clearDepth(); r.render(g.weapons.vmScene, g.weapons.vmCam); }
      return;
    }
    this.vmPass.enabled = showVM;
    const u = this.grade.uniforms;
    u.time.value = g.time % 100;
    const P = g.player;
    const target = Math.max(0, 1 - P.hp / P.maxHp - 0.35) * 1.4 + (g.time - P.lastHurt < 0.25 ? 0.4 : 0);
    u.damage.value += (Math.min(1, target) - u.damage.value) * Math.min(1, dt * 8);
    u.flash.value = Math.max(0, u.flash.value - dt * 3);
    this.composer.render(dt);
  }

  flash(amount) { if (this.grade) this.grade.uniforms.flash.value = Math.max(this.grade.uniforms.flash.value, amount); }
}
