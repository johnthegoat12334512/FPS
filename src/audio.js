// Procedural WebAudio sound effects. Everything fails silently if audio is unavailable.
export class Audio {
  constructor() {
    this.ctx = null; this.master = null; this.volume = 0.6;
    this.loops = {};
    this.lastPlay = {};
  }
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {}); return; }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain(); this.master.gain.value = this.volume;
      this.master.connect(this.ctx.destination);
      const len = this.ctx.sampleRate * 1.5;
      this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = this.noise.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { this.ctx = null; }
  }
  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }

  _noise(dur, type, freq, q, vol, attack = 0.002, when = 0) {
    const c = this.ctx; const t = c.currentTime + when;
    const src = c.createBufferSource(); src.buffer = this.noise;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t, Math.random() * 0.5); src.stop(t + dur + 0.05);
    return f;
  }
  _tone(type, f0, f1, dur, vol, when = 0) {
    const c = this.ctx; const t = c.currentTime + when;
    const o = c.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.05);
  }
  _ok(name, minGap = 0.02) {
    if (!this.ctx) return false;
    const now = this.ctx.currentTime;
    if (this.lastPlay[name] && now - this.lastPlay[name] < minGap) return false;
    this.lastPlay[name] = now; return true;
  }

  shot(kind) {
    if (!this._ok('shot_' + kind, 0.03)) return;
    const P = {
      pistol: [0.12, 2400, 0.5, 160, 0.14], cannon: [0.3, 1200, 0.9, 90, 0.3], smg: [0.08, 3000, 0.35, 180, 0.12],
      shotgun: [0.35, 900, 1.0, 70, 0.35], rifle: [0.14, 2000, 0.55, 120, 0.16], lmg: [0.15, 1600, 0.6, 100, 0.18],
      dmr: [0.22, 1500, 0.75, 100, 0.22], sniper: [0.55, 800, 1.0, 60, 0.4],
    }[kind] || [0.12, 2000, 0.5, 120, 0.15];
    this._noise(P[0], 'lowpass', P[1], 0.7, P[2]);
    this._tone('triangle', P[3] * 2, P[3] * 0.5, P[4], 0.5);
    if (kind === 'sniper') this._noise(0.9, 'lowpass', 400, 0.5, 0.25, 0.01, 0.05);
  }
  click() { if (this._ok('click', 0.15)) this._tone('square', 1800, 1200, 0.03, 0.08); }
  reload() { if (!this._ok('reload', 0.2)) return; this._noise(0.05, 'bandpass', 2500, 4, 0.2); this._noise(0.06, 'bandpass', 1800, 4, 0.25, 0.002, 0.25); }
  swing() { if (this._ok('swing', 0.08)) this._noise(0.18, 'bandpass', 1200, 1.5, 0.25, 0.04); }
  slash() { if (this._ok('slash', 0.05)) { this._noise(0.12, 'highpass', 3000, 1, 0.3); this._tone('sine', 300, 120, 0.12, 0.3); } }
  hit() { if (this._ok('hit', 0.04)) this._noise(0.07, 'bandpass', 600, 2, 0.35); }
  headshot() { if (this._ok('head', 0.05)) this._tone('sine', 1600, 1500, 0.12, 0.2); }
  kill() { if (this._ok('kill', 0.05)) { this._noise(0.3, 'lowpass', 500, 1, 0.45, 0.01); this._tone('sine', 140, 50, 0.3, 0.4); } }
  hurt() { if (this._ok('hurt', 0.2)) { this._tone('sawtooth', 220, 90, 0.25, 0.2); this._noise(0.2, 'lowpass', 400, 1, 0.3); } }
  growl() { if (this._ok('growl', 0.6)) { this._tone('sawtooth', 90 + Math.random() * 40, 50, 0.6, 0.08); this._noise(0.5, 'bandpass', 300, 3, 0.1, 0.1); } }
  spit() { if (this._ok('spit', 0.1)) this._noise(0.2, 'bandpass', 900, 3, 0.25, 0.02); }
  splat() { if (this._ok('splat', 0.05)) this._noise(0.15, 'lowpass', 700, 1, 0.3); }
  step() { if (this._ok('step', 0.12)) this._noise(0.06, 'lowpass', 300 + Math.random() * 200, 1, 0.12); }
  land() { if (this._ok('land', 0.15)) this._noise(0.12, 'lowpass', 220, 1, 0.3); }
  slide() { if (this._ok('slide', 0.3)) this._noise(0.5, 'bandpass', 700, 0.8, 0.18, 0.03); }
  cash() { if (!this._ok('cash', 0.08)) return; this._tone('square', 1320, 1320, 0.06, 0.06); this._tone('square', 1760, 1760, 0.12, 0.06, 0.07); }
  deny() { if (this._ok('deny', 0.2)) { this._tone('square', 200, 160, 0.15, 0.1); this._tone('square', 150, 120, 0.2, 0.1, 0.15); } }
  buy() { if (!this._ok('buy', 0.1)) return; [660, 880, 1320].forEach((f, i) => this._tone('triangle', f, f, 0.12, 0.15, i * 0.07)); }
  door() { if (this._ok('door', 0.5)) { this._noise(1.6, 'lowpass', 300, 1, 0.4, 0.2); this._tone('sawtooth', 60, 90, 1.5, 0.12); } }
  phase() { if (!this._ok('phase', 1)) return; [523, 659, 784, 1046].forEach((f, i) => this._tone('triangle', f, f, 0.35, 0.18, i * 0.16)); }
  surge() { if (!this._ok('surge', 2)) return; this._tone('sawtooth', 80, 40, 2.0, 0.2); this._tone('sawtooth', 83, 41, 2.0, 0.2); }
  boom() { if (this._ok('boom', 0.1)) { this._noise(0.9, 'lowpass', 500, 0.7, 0.6, 0.005); this._tone('sine', 90, 30, 0.8, 0.6); } }
  pop() { if (this._ok('pop', 0.04)) { this._tone('sine', 500, 1200, 0.08, 0.15); this._noise(0.2, 'highpass', 2000, 1, 0.15); } }
  pickup() { if (this._ok('pickup', 0.05)) this._tone('sine', 700, 1100, 0.05, 0.05); }
  boss() { if (this._ok('boss', 3)) { this._tone('sawtooth', 50, 30, 3, 0.3); this._noise(3, 'lowpass', 200, 2, 0.4, 0.5); } }

  // looping tool sounds: name -> {src, gain}
  loop(name, on) {
    if (!this.ctx) return;
    let L = this.loops[name];
    if (on && !L) {
      const c = this.ctx;
      const src = c.createBufferSource(); src.buffer = this.noise; src.loop = true;
      const f = c.createBiquadFilter();
      const g = c.createGain(); g.gain.value = 0.0001;
      if (name === 'vacuum') { f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 0.8; }
      else if (name === 'washer') { f.type = 'highpass'; f.frequency.value = 2500; f.Q.value = 0.5; }
      else { f.type = 'lowpass'; f.frequency.value = 600; f.Q.value = 0.7; }
      src.connect(f); f.connect(g); g.connect(this.master); src.start();
      let osc = null;
      if (name === 'vacuum') { osc = c.createOscillator(); osc.type = 'sawtooth'; osc.frequency.value = 110; const og = c.createGain(); og.gain.value = 0.03; osc.connect(og); og.connect(g); osc.start(); }
      L = this.loops[name] = { src, g, osc };
      g.gain.setTargetAtTime(name === 'washer' ? 0.18 : 0.3, c.currentTime, 0.05);
    } else if (!on && L) {
      const c = this.ctx;
      L.g.gain.setTargetAtTime(0.0001, c.currentTime, 0.05);
      const s = L.src, o = L.osc;
      setTimeout(() => { try { s.stop(); if (o) o.stop(); } catch (e) { /* ignore */ } }, 300);
      delete this.loops[name];
    }
  }
  stopLoops() { for (const k of Object.keys(this.loops)) this.loop(k, false); }
}
