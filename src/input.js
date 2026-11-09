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
  isLocked() { return this.locked || this.forceLocked; }
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
