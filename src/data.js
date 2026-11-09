// All tunable game data lives here.

export const GUNS = {
  sidearm: { name: 'M-9 Sidearm', cls: 'pistol', dmg: 34, head: 2.0, rate: 6.5, auto: false, mag: 12, reserve: 84, reload: 1.35, spread: 0.022, ads: 0.006, pellets: 1, zoom: 1.15, recoil: 0.018, cost: 0, ammoCost: 150, color: 0x2a2d33, accent: 0x8a8f99, sound: 'pistol', len: 0.28 },
  cannon: { name: 'Hand Cannon', cls: 'pistol', dmg: 115, head: 2.2, rate: 2.6, auto: false, mag: 7, reserve: 49, reload: 1.8, spread: 0.03, ads: 0.004, pellets: 1, zoom: 1.2, recoil: 0.06, cost: 900, ammoCost: 450, color: 0xb8b8b8, accent: 0x222222, sound: 'cannon', len: 0.34, pierce: 1 },
  hornet: { name: 'Hornet SMG', cls: 'smg', dmg: 27, head: 1.8, rate: 13, auto: true, mag: 32, reserve: 224, reload: 1.9, spread: 0.035, ads: 0.012, pellets: 1, zoom: 1.2, recoil: 0.011, cost: 1200, ammoCost: 600, color: 0x30353b, accent: 0xe0b020, sound: 'smg', len: 0.46 },
  scatter: { name: 'Scattergun', cls: 'shotgun', dmg: 24, head: 1.5, rate: 1.5, auto: false, mag: 6, reserve: 42, reload: 2.4, spread: 0.075, ads: 0.055, pellets: 9, zoom: 1.1, recoil: 0.07, cost: 1500, ammoCost: 750, color: 0x4a3524, accent: 0x1c1c1c, sound: 'shotgun', len: 0.7 },
  vanguard: { name: 'AR-7 Vanguard', cls: 'rifle', dmg: 42, head: 2.0, rate: 9.5, auto: true, mag: 30, reserve: 210, reload: 2.2, spread: 0.03, ads: 0.004, pellets: 1, zoom: 1.35, recoil: 0.014, cost: 1800, ammoCost: 900, color: 0x3b4033, accent: 0x111111, sound: 'rifle', len: 0.72, pierce: 1 },
  mauler: { name: 'Mauler LMG', cls: 'lmg', dmg: 48, head: 1.8, rate: 11, auto: true, mag: 100, reserve: 300, reload: 4.0, spread: 0.045, ads: 0.012, pellets: 1, zoom: 1.25, recoil: 0.012, cost: 3000, ammoCost: 1500, color: 0x262a2e, accent: 0x6b5a2a, sound: 'lmg', len: 0.85, pierce: 1 },
  marksman: { name: 'Marksman DMR', cls: 'dmr', dmg: 95, head: 2.5, rate: 4.2, auto: false, mag: 15, reserve: 105, reload: 2.3, spread: 0.03, ads: 0.0, pellets: 1, zoom: 3.0, scope: true, recoil: 0.03, cost: 2000, ammoCost: 1000, color: 0x5a5f50, accent: 0x111111, sound: 'dmr', len: 0.9, pierce: 2 },
  longbow: { name: 'Longbow .338', cls: 'sniper', dmg: 450, head: 3.0, rate: 0.8, auto: false, mag: 5, reserve: 35, reload: 3.0, spread: 0.12, ads: 0.0, pellets: 1, zoom: 6.0, scope: true, recoil: 0.11, cost: 2500, ammoCost: 1250, color: 0x3a5a3a, accent: 0x151515, sound: 'sniper', len: 1.05, pierce: 4 },
};

// Refinery ("pack-a-punch") variant names
export const REFINED_NAMES = {
  sidearm: 'M-9 "Mopper"', cannon: 'Grime Reaper', hornet: 'Swarm Queen', scatter: 'Power Washer XL', vanguard: 'AR-7 "Sterilizer"', mauler: 'The Decontaminator', marksman: 'Clean Cut DMR', longbow: 'Spotless .338',
};

export const KNIVES = {
  combat: { name: 'Combat Knife', dmg: 100, speed: 2.2, range: 2.1, cost: 0, kind: 'combat', color: 0x8c9196, handle: 0x222222, desc: 'Standard issue.' },
  bayonet: { name: 'Bayonet', dmg: 150, speed: 2.0, range: 2.4, cost: 1000, kind: 'bayonet', color: 0xc9d0d8, handle: 0x3b2a1a, desc: 'Long reach, heavy stab.' },
  huntsman: { name: 'Huntsman', dmg: 180, speed: 1.7, range: 2.4, cost: 1300, kind: 'huntsman', color: 0x9aa3ad, handle: 0x1e3324, desc: 'Serrated. Slow but brutal.' },
  karambit: { name: 'Karambit', dmg: 125, speed: 2.9, range: 2.0, cost: 1600, kind: 'karambit', color: 0x2d7dff, handle: 0x111418, desc: 'Lightning fast curved blade.' },
  butterfly: { name: 'Butterfly Knife', dmg: 150, speed: 2.6, range: 2.1, cost: 2200, kind: 'butterfly', color: 0xff5ab4, handle: 0x30343a, desc: 'Fast, deadly, and it flips.' },
};

export const TOOLS = {
  vacuum: { name: 'Hoover-9 Vacuum', cost: 0, desc: 'Sucks up debris into your tank. Empty the tank at a Disposal Chute for credits.' },
  washer: { name: 'Hydro Lance', cost: 750, desc: 'High-pressure washer. Blasts sludge stains off floors and walls. Refill water at Service Stations.', minPhase: 1 },
  torch: { name: 'Spore Torch', cost: 2000, desc: 'Flamethrower. Burns spore pods and roasts anything nearby. Refill fuel at Service Stations.', minPhase: 3 },
};

// Upgrade tracks: level index 0..max
export const UPGRADES = {
  tank: { name: 'Tank Capacity', desc: 'Debris tank size', costs: [600, 1200, 2400], values: [120, 200, 300, 450], unit: 'units' },
  suction: { name: 'Suction Power', desc: 'Vacuum speed & range', costs: [700, 1500, 3000], values: [1, 1.5, 2.1, 2.8], unit: 'x' },
  pressure: { name: 'Lance Pressure', desc: 'Washer cleaning speed & spray width', costs: [800, 1600, 3200], values: [1, 1.5, 2.1, 2.8], unit: 'x', needs: 'washer' },
  reservoir: { name: 'Reservoirs', desc: 'Water & fuel capacity', costs: [500, 1000, 2000], values: [100, 160, 240, 350], unit: 'L' },
  armor: { name: 'Hazmat Plating', desc: 'Reduces damage taken', costs: [1000, 2200, 4000], values: [0, 0.15, 0.28, 0.4], unit: '%' },
};

export const PERKS = {
  ironhide: { name: 'Ironhide Ale', cost: 2500, color: 0xd02828, desc: 'Max health 100 → 200' },
  quickhands: { name: 'Quickhands Cola', cost: 3000, color: 0x2fbf4a, desc: 'Reload & swap 50% faster' },
  rush: { name: 'Rush Tonic', cost: 2000, color: 0xf2c218, desc: 'Sprint +15%, longer slides' },
  doubletap: { name: 'Double Pump', cost: 2000, color: 0xf27a18, desc: 'Fire rate +30%' },
  janitor: { name: 'Janitor\'s Brew', cost: 1500, color: 0x2a8cf0, desc: 'All tools clean 40% faster' },
};

export const ENEMIES = {
  sludger: { name: 'Sludger', hp: 110, speed: 4.3, dmg: 22, rate: 1.0, radius: 0.45, height: 1.7, reward: 60, color: 0x4f7a2a, eye: 0xffd21f },
  spitter: { name: 'Spitter', hp: 90, speed: 3.6, dmg: 14, rate: 2.2, radius: 0.42, height: 1.9, reward: 80, color: 0x7a3a8c, eye: 0x6effa0, ranged: true },
  brute: { name: 'Brute', hp: 650, speed: 3.0, dmg: 45, rate: 1.5, radius: 0.8, height: 2.5, reward: 200, color: 0x5c3a22, eye: 0xff3a1f },
};

export const PHASES = [
  null,
  { zone: 'a', title: 'Phase 1 — Loading Bay', brief: 'Vacuum the debris and clear the Loading Bay. Empty your tank at a Disposal Chute.', threshold: 0.8, mix: { sludger: 1 }, maxAlive: 8, interval: 4.2, hpMul: 1.0, bonus: 1000 },
  { zone: 'b', title: 'Phase 2 — Admin Offices', brief: 'The offices are caked in sludge. Get a Hydro Lance from the terminal and wash it all away.', threshold: 0.8, mix: { sludger: 0.75, spitter: 0.25 }, maxAlive: 11, interval: 3.5, hpMul: 1.45, bonus: 2000 },
  { zone: 'c', title: 'Phase 3 — Hydroponics', brief: 'Spore pods are everywhere. Buy the Spore Torch and burn them out.', threshold: 0.8, mix: { sludger: 0.6, spitter: 0.25, brute: 0.15 }, maxAlive: 14, interval: 2.9, hpMul: 2.0, bonus: 3000 },
  { zone: 'd', title: 'Phase 4 — Reactor Core', brief: 'Purge the Reactor Core. Something is growing in the middle of it...', threshold: 0.8, mix: { sludger: 0.5, spitter: 0.3, brute: 0.2 }, maxAlive: 16, interval: 2.4, hpMul: 2.7, bonus: 5000 },
];

export const ECON = {
  hit: 10, kill: 60, headKill: 100, meleeKill: 130,
  perUnit: 4, stain: 12, spore: 40,
  refineCost: 5000, crateCost: 950, grenadeCost: 300,
};

export const CRATE_POOL = ['cannon', 'hornet', 'scatter', 'vanguard', 'mauler', 'marksman', 'longbow', 'vanguard', 'hornet', 'mauler'];
