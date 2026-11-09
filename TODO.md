# Grime Protocol — build checklist

## Core (done)
- [x] Grid level: HQ + 4 zones, phase doors, crates, wall-buys, machines
- [x] Movement inspired by BO3 zombies: sprint, slide, slide-jump momentum, auto-mantle, crouch, ADS
- [x] Cleaning tools: Vacuum (tank → Disposal Chute), Hydro Lance (stains), Spore Torch (spores), Foam grenades
- [x] 8 guns incl. Longbow sniper + Marksman DMR (scoped), pierce, recoil, ADS
- [x] 5 knives styled after CS:GO with light/heavy attacks
- [x] Enemies: Sludger, Spitter, Brute + flow-field pathing; director scales with grime; Bloom Surges
- [x] 4 phases with 80% goals + Bloom Mother boss (wash shield → shoot)
- [x] Shop, perks, Refinery (weapon upgrade machine), Supply Crate, power-ups, save/load, settings

## Graphics / feel pass (done)
- [x] Post-processing: bloom, ACES tone mapping, vignette, chromatic aberration, film grain, damage tint
- [x] PBR materials, generated normal maps, image-based lighting, baked AO, light shafts
- [x] Robotic arms (segmented, armour plates, glowing conduits, articulated fingers)
- [x] Rounded, detailed gun models with moving parts (slides, bolts, pumps, lids, cylinders, mags)
- [x] Unique per-weapon draw / fire / reload / inspect animations, shell-by-shell shotgun, bolt-cycling sniper, revolver
- [x] Unique swing / draw / inspect per knife
- [x] Ejected casings, muzzle flash lights
- [x] Explosions: fireball, smoke, shockwave ring, light flash, scorch, shake
- [x] Volatile Sludge barrels (chain reactions, blast also cleans)
- [x] Wind: drifting dust, gusts with skittering debris, swaying foliage, flickering lights, wind audio
- [x] Floating damage numbers (headshot / melee / fire / water / shield colours)
- [x] Smaller, cleaner HUD + circular rotating minimap with compass; restyled menus & shop
- [x] Detailed machines (terminal, perk machines with bottles, refinery, chute, service station, crate)
- [x] Creatures with teeth, drips, chitin plates, horns, glowing cracks; detailed spore pods

## Bug hunt (done)
- [x] Viewmodels were ~2x too big
- [x] Credit popups overlapped
- [x] Victory screen used a wall-clock timer
- [x] Spitter sac scale could go negative (giant green blob)
- [x] Gun tricks swung the arms into the camera → tricks now spin the gun inside the hand
- [x] Per-object point lights (34 lights total) → removed for performance
- [x] Draw calls cut ~50% by merging static meshes
- [x] Soak test: random play in every phase with deaths, every shop button, every interactable, save → reload → continue

## Not done / ideas for later
- [ ] Multiplayer co-op (paused at your request) + hosting it on a free server
- [ ] Gamepad support
- [ ] More enemy variety (an exploding bloater?) and a second boss phase
- [ ] Real recorded audio instead of synthesized sound effects
- [ ] Settings for keybinds
