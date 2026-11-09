# Grime Protocol — build checklist

## Core
- [x] Grid level with 5 zones, locked phase doors, crates, wall-buys and machines
- [x] Movement inspired by BO3 zombies: sprint, slide, slide-jump momentum, auto-mantle, crouch, ADS
- [x] Cleaning tools: Vacuum (tank → Disposal Chute for credits), Hydro Lance (stains), Spore Torch (spores)
- [x] Foam grenades that clean and do damage
- [x] 8 guns incl. Longbow sniper + Marksman DMR (scoped), piercing, recoil, reload
- [x] 5 knives styled after CS:GO (Combat, Bayonet, Huntsman, Karambit, Butterfly), with light slash, heavy stab and F-inspect
- [x] Enemies: Sludger, Spitter (ranged), Brute (charge), flow-field pathing
- [x] Spawn director scales with grime level + Bloom Surges
- [x] 4 phases with 80% cleanliness goals + boss (Bloom Mother: wash shield, then shoot)
- [x] Shop (weapons/knives/tools/upgrades/supplies), perks, Refinery (weapon upgrade machine), Supply Crate (random weapon)
- [x] Power-up drops (Max Ammo, Double Credits, Insta-Clean, Purge)
- [x] HUD, minimap with remaining grime, menus, settings, save/load
- [x] Headless playtest covering every phase + boss

## Polish / bug-hunt list
- [x] Shrink viewmodels (were ~2x too big)
- [x] Stack credit popups so they don't overlap
- [x] Victory screen uses game time (was a wall-clock timer)
- [ ] Long random-input soak test (catch NaN / exceptions / stuck enemies)
- [ ] Test death → respawn flow
- [ ] Test every shop button, perk machine, refinery, crate, wall-buy ammo
- [ ] Save → reload page → continue roundtrip test
- [ ] Performance check (draw calls / FPS)
- [ ] README with how to play
- [ ] Final screenshots of every phase
