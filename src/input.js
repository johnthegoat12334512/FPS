export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.down = new Set();
    this.pressed = new Set();
    this.mouse = [false, false, false];
    this.mousePressed = [false, false, false];
    this.dx = 0; this.dy = 0; this.wheel = 0;
    this.locked = false;
    this.forceLocked = false; // test harness
    this.enabled = true;
    window.addEventListener('keydown', e => {
      if (e.code === 'Tab' || e.code === 'Space' || (e.ctrlKey && e.code !== 'KeyR')) e.preventDefault();
      if (!e.repeat) this.pressed.add(e.code);
      this.down.add(e.code);
    });
    window.addEventListener('keyup', e => { this.down.delete(e.code); });
    window.addEventListener('blur', () => { this.down.clear(); this.mouse = [false, false, false]; });
    canvas.addEventListener('mousedown', e => { this.mouse[e.button] = true; this.mousePressed[e.button] = true; });
    window.addEventListener('mouseup', e => { this.mouse[e.button] = false; });
    window.addEventListener('mousemove', e => {
      if (this.isLocked()) { this.dx += e.movementX || 0; this.dy += e.movementY || 0; }
    });
    window.addEventListener('wheel', e => { if (this.isLocked()) this.wheel += Math.sign(e.deltaY); }, { passive: true });
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
      if (!this.locked) { this.mouse = [false, false, false]; }
      if (this.onLockChange) this.onLockChange(this.locked);
    });
  }
  isLocked() { return this.locked || this.forceLocked || this.padActive; }

  // Gamepad: maps a standard controller onto the same virtual keys/mouse the game already reads
  pollGamepad(dt) {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let pad = null;
    for (const p of pads) if (p && p.connected && p.mapping === 'standard') { pad = p; break; }
    if (!pad) { if (this.padActive) { this.padActive = false; for (const k of this.padKeys || []) this.down.delete(k); } return; }
    const b = (i) => !!(pad.buttons[i] && pad.buttons[i].pressed);
    const ax = (i) => { const v = pad.axes[i] || 0; return Math.abs(v) < 0.15 ? 0 : v; };
    const any = pad.buttons.some(x => x.pressed) || pad.axes.some(a => Math.abs(a) > 0.3);
    if (any) this.padActive = true;
    if (!this.padActive) return;
    const prev = this.padPrev || [];
    const edge = (i) => b(i) && !prev[i];
    const keys = new Set();
    const lx = ax(0), ly = ax(1);
    if (ly < -0.3) keys.add('KeyW'); if (ly > 0.3) keys.add('KeyS');
    if (lx < -0.3) keys.add('KeyA'); if (lx > 0.3) keys.add('KeyD');
    if (b(10)) this.padSprint = true;
    if (ly > -0.3) this.padSprint = false;
    if (this.padSprint) keys.add('ShiftLeft');
    if (b(0)) keys.add('Space');
    for (const k of this.padKeys || []) if (!keys.has(k)) this.down.delete(k);
    for (const k of keys) { if (!this.down.has(k)) this.pressed.add(k); this.down.add(k); }
    this.padKeys = keys;
    const map = { 1: 'KeyC', 2: 'KeyR', 3: 'KeyQ', 4: 'KeyG', 5: 'KeyV', 12: 'KeyF', 13: 'KeyE', 14: 'Digit3', 15: 'Digit4', 11: 'KeyV' };
    for (const [i, code] of Object.entries(map)) if (edge(+i)) this.pressed.add(code);
    if (edge(9) && this.onPadPause) this.onPadPause();
    const rt = pad.buttons[7] ? pad.buttons[7].value : 0, lt = pad.buttons[6] ? pad.buttons[6].value : 0;
    const fire = rt > 0.4, ads = lt > 0.4;
    if (fire && !this.padFire) this.mousePressed[0] = true;
    this.padFire = fire; this.mouse[0] = fire || this.mouse[0] && this.locked;
    this.mouse[2] = ads || (this.mouse[2] && this.locked);
    const rx = ax(2), ry = ax(3);
    const curve = (v) => Math.sign(v) * v * v;
    this.dx += curve(rx) * 900 * dt; this.dy += curve(ry) * 650 * dt;
    this.padPrev = pad.buttons.map(x => x.pressed);
  }
  lock() {
    try {
      const p = this.canvas.requestPointerLock();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* ignore */ }
  }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }
  key(c) { return this.down.has(c); }
  hit(c) { return this.pressed.has(c); }
  endFrame() {
    this.pressed.clear();
    this.mousePressed = [false, false, false];
    this.dx = 0; this.dy = 0; this.wheel = 0;
  }
}
