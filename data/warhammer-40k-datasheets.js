// RuleRunner40k unit datasheets — separate from rules content (data/warhammer-40k.js)
// since datasheets are a genuinely different kind of content: stat blocks and
// weapon profiles, not procedural rules.
//
// SOURCING: as of this update, most entries are built from Wahapedia's own
// structured CSV data export (see references/wahapedia-csv-pipeline.md in
// this skill for the full process), not individual page research. Stats and
// weapon profiles come directly from the CSVs (factual/numeric data, not
// copyrightable). Ability and flavor text is still hand-paraphrased in our
// own words from the CSV's source text — never copied verbatim, since that
// IS the official rulebook wording. The CSV pipeline needs the person to
// download and upload the files themselves (Wahapedia's robots.txt blocks
// automated fetching of the content-bearing files), but once provided it's
// dramatically faster and more reliable than the original page-by-page
// research this project started with.
//
// SCOPE NOTE: Space Marines (281 of 292 datasheets — 11 lost to a known
// limitation, see below), Orks (63 of 63 current — 4 removed as confirmed
// Legends, see below), T'au Empire (62 of 62), and Tyranids (57 of 57) are
// fully covered — 463 datasheets total. That's 4 of ~25 factions in the
// game — still real work ahead for everything else (Necrons, Aeldari, the
// Chaos factions, etc.), but four major factions are done.
//
// ORKS LEGENDS CLEANUP (Sept 2026): Codex Orks moved Burna Boyz, Lootas,
// Mekboy Workshop, and Warboss on Warbike to full Legends status — removed
// from this file since they're no longer current, tournament-legal
// choices. Confirmed against GW's own published Legendary Proxy/Legends
// list, not just secondary-source speculation. 15 other old Ork units
// (Boomdakka Snazzwagon, Kannonwagon, Wurrboy, etc.) were checked against
// the same list and confirmed already correctly absent from this file —
// no action needed there.
//
// KNOWN LIMITATION: 11 Space Marines datasheets aren't included because
// they share an exact display name with another datasheet (e.g. a named
// character with two variant statlines under the same name) — the build
// pipeline dedupes by name, so the second one silently overwrote the
// first. Not a research gap, just a pipeline quirk worth fixing if those
// specific units matter to you — ask and they can be added with
// disambiguated names.

GAMES["warhammer-40k"].datasheets = [
  {
    id: "intercessor-squad",
    name: "Intercessor Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Astartes grenade launcher – frag", tags: "blast", range: "24\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Astartes grenade launcher – krak", tags: "", range: "24\"", a: "1", skill: "3+", s: "9", ap: "-2", d: "D3" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt rifle", tags: "assault, heavy", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "5", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Objective Secured", text: "If you control an objective marker at the end of your Command phase and this unit is within range of it, you keep control of that marker even without models nearby, until your opponent controls it." },
      { name: "Hail of Bolts", text: "When this unit is selected to shoot, pick one visible enemy unit — this unit's Bolt Rifle attacks against that unit get +2 Attacks." },
    ],
    keywords: ["INFANTRY", "BATTLELINE", "GRENADES", "IMPERIUM", "TACTICUS", "INTERCESSOR SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Intercessor Sergeant + 4-9 Intercessors. Every model is equipped with a bolt pistol, bolt rifle, and close combat weapon.",
    points: [{ models: 5, pts: 80 }, { models: 10, pts: 150 }],
  },
  {
    id: "tactical-squad",
    name: "Tactical Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Grav-cannon", tags: "anti-vehicle 2+, heavy", range: "24\"", a: "3", skill: "4+", s: "6", ap: "-1", d: "3" },
      { name: "Grav-gun", tags: "anti-vehicle 2+", range: "18\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Heavy bolter", tags: "heavy, sustained hits 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Lascannon", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Missile launcher – frag", tags: "blast, heavy", range: "48\"", a: "D6", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – krak", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "9", ap: "-2", d: "D6" },
      { name: "Multi-melta", tags: "heavy, melta 2", range: "18\"", a: "2", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma cannon – standard", tags: "blast, heavy", range: "36\"", a: "D3", skill: "4+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma cannon – supercharge", tags: "blast, heavy, hazardous", range: "36\"", a: "D3", skill: "4+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma gun – standard", tags: "rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "hazardous, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "4", skill: "3+", s: "4", ap: "-2", d: "1" },
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Combat Squads", text: "At the start of the Declare Battle Formations step, before any units have been set up, this unit can be split into two units of 5 models each." },
    ],
    keywords: ["INFANTRY", "BATTLELINE", "GRENADES", "IMPERIUM", "TACTICAL SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Tactical Sergeant + 9 Tactical Marines. Every model is equipped with a bolt pistol, boltgun, and close combat weapon by default — one Marine's boltgun can be swapped for a heavy or special weapon, a second for a special weapon only, and the Sergeant has his own separate weapon options.",
    points: [{ models: 10, pts: 140 }],
  },
  {
    id: "captain",
    name: "Captain",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Master-crafted bolter", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Neo-volkite pistol", tags: "devastating wounds, pistol", range: "12\"", a: "1", skill: "2+", s: "5", ap: "0", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" },
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "6", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted power weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a range of Battleline and elite Space Marines squads (Intercessor Squad, Tactical Squad, Bladeguard Veteran Squad, and several others), forming a single Attached unit with them." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Finest Hour", text: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of this model's melee weapons, and those weapons gain the Devastating Wounds ability." },
    ],
    keywords: ["INFANTRY", "CHARACTER", "GRENADES", "IMPERIUM", "TACTICUS", "CAPTAIN"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Captain, equipped with a bolt pistol, master-crafted bolter, and close combat weapon by default — a range of pistol/melee weapon combos can be swapped in, including an option that grants a relic shield (raising Wounds to 6).",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "terminator-squad",
    name: "Terminator Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – frag", tags: "blast", range: "36\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – krak", tags: "", range: "36\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Teleport Homer", text: "You can set up a Teleport Homer token anywhere outside the enemy deployment zone at the start of the battle. Once per battle, you can use it to bring this unit in with a free (0CP) Rapid Ingress, arriving within 3\" of the token instead of the normal deployment-zone restriction, as long as it's still more than 9\" from any enemy models." },
      { name: "Judgement of the Weak", text: "Enemy units (other than Monsters/Vehicles) that Fall Back while within Engagement Range of this unit must take a Desperate Escape test, with a -1 penalty if that enemy unit is already Battle-shocked." }
    ],
    keywords: ["TERMINATOR SQUAD", "TERMINATOR", "INFANTRY", "IMPERIUM"],
    factionKeywords: ["BLACK TEMPLARS", "ADEPTUS ASTARTES"],
    composition: "1 Terminator Squad Leader; 4-9 Terminators.",
    points: [{ models: 5, pts: 160 }, { models: 10, pts: 320 }],
  },
  {
    id: "rhino",
    name: "Rhino",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "9", Sv: "3+", W: "10", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Self Repair", text: "At the end of your Command phase, this model regains 1 lost wound." },
      { name: "One Shot", text: "A weapon with this ability can only be fired once per battle." }
    ],
    keywords: ["TRANSPORT", "DEDICATED TRANSPORT", "IMPERIUM", "FRAME", "RHINO", "VEHICLE", "SMOKE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Rhino.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "aggressor-squad",
    name: "Aggressor Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Auto boltstorm gauntlets", tags: "twin-linked", range: "18\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Flamestorm gauntlets", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6+1", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Fragstorm grenade launcher", tags: "blast", range: "18\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Twin power fists", tags: "twin-linked", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Close-quarters Firepower", text: "When a model in this unit shoots its closest eligible target, that attack's Armour Penetration improves by 1." }
    ],
    keywords: ["GRAVIS", "AGGRESSOR SQUAD", "INFANTRY", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Aggressor Sergeant; 2-5 Aggressors.",
    points: [{ models: 3, pts: 90 }, { models: 6, pts: 175 }],
  },
  {
    id: "assault-intercessor-squad",
    name: "Assault Intercessor Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Shock Assault", text: "When a model in this unit makes a melee attack, re-roll a Wound roll of 1 — or re-roll any Wound roll instead if the target is within range of an objective marker." }
    ],
    keywords: ["IMPERIUM", "TACTICUS", "ASSAULT INTERCESSOR SQUAD", "GRENADES", "INFANTRY", "BATTLELINE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Assault Intercessor Sergeant; 4-9 Assault Intercessors.",
    points: [{ models: 5, pts: 75 }, { models: 10, pts: 150 }],
  },
  {
    id: "heavy-intercessor-squad",
    name: "Heavy Intercessor Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "3", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolt rifle", tags: "assault, heavy", range: "30\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy bolter", tags: "assault, heavy, sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Unyielding in the Face of the Foe", text: "While this unit is within range of an objective marker you control, add 1 to armour saves it makes against attacks with a Damage characteristic of 1." }
    ],
    keywords: ["GRAVIS", "IMPERIUM", "GRENADES", "BATTLELINE", "INFANTRY", "HEAVY INTERCESSOR SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Heavy Intercessor Sergeant; 4-9 Heavy Intercessors.",
    points: [{ models: 5, pts: 100 }, { models: 10, pts: 200 }],
  },
  {
    id: "eliminator-squad",
    name: "Eliminator Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt sniper rifle", tags: "heavy, precision", range: "36\"", a: "1", skill: "3+", s: "5", ap: "-2", d: "3" },
      { name: "Instigator bolt carbine", tags: "precision", range: "24\"", a: "1", skill: "3+", s: "4", ap: "-2", d: "2" },
      { name: "Las fusil", tags: "heavy", range: "36\"", a: "1", skill: "3+", s: "9", ap: "-3", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Reposition Under Covering Fire", text: "If this unit includes an Eliminator Sergeant equipped with an instigator bolt carbine, it can make a Normal Move after shooting — but can't declare a charge for the rest of the turn if it does." },
      { name: "Mark the Target", text: "Whenever this unit Remains Stationary, its ranged weapons gain the Devastating Wounds ability until your next Movement phase." }
    ],
    keywords: ["ELIMINATOR SQUAD", "PHOBOS", "IMPERIUM", "GRENADES", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Eliminator Sergeant; 2 Eliminators.",
    points: [{ models: 3, pts: 75 }],
  },
  {
    id: "bladeguard-veteran-squad",
    name: "Bladeguard Veteran Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Neo-volkite pistol", tags: "devastating wounds, pistol", range: "12\"", a: "1", skill: "3+", s: "5", ap: "0", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Bladeguard", text: "Once per turn, when this unit fights or is targeted by an enemy unit, choose one: this unit's melee attacks get +1 to hit, or attacks targeting this unit get -1 to hit." }
    ],
    keywords: ["INFANTRY", "DEATHWING", "BLADEGUARD VETERAN SQUAD", "TACTICUS", "IMPERIUM", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Bladeguard Veteran Sergeant; 2-5 Bladeguard Veterans.",
    points: [{ models: 3, pts: 90 }, { models: 6, pts: 170 }],
  },
  {
    id: "infiltrator-squad",
    name: "Infiltrator Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Marksman bolt carbine", tags: "heavy", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Omni-scramblers", text: "Enemy units arriving from Reserves can't be set up within 12\" of this unit." },
      { name: "Helix Gauntlet", text: "Models in the bearer's unit have the Feel No Pain 6+ ability." },
      { name: "Infiltrator Comms Array", text: "Each time the bearer's unit is targeted by a Stratagem, roll a D6 — on a 5+, you gain 1 Command Point." }
    ],
    keywords: ["GRENADES", "SMOKE", "IMPERIUM", "INFILTRATOR SQUAD", "PHOBOS", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Infiltrator Sergeant; 4-9 Infiltrators.",
    points: [{ models: 5, pts: 120 }, { models: 10, pts: 190 }],
  },
  {
    id: "chaplain",
    name: "Chaplain",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "Pistol", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Crozius arcanum", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Litany of Hate", text: "While this model is leading a unit, add 1 to the Wound roll for that unit's melee attacks." },
      { name: "Spiritual Leader", text: "Once per battle, at the start of any phase, remove Battle-shocked status from one friendly Adeptus Astartes unit within 12\" of this model." }
    ],
    keywords: ["IMPERIUM", "TACTICUS", "CHAPLAIN", "CHARACTER", "INFANTRY", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Chaplain.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "librarian",
    name: "Librarian",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Smite – witchfire", tags: "psychic", range: "24\"", a: "D6", skill: "3+", s: "5", ap: "-1", d: "D3" },
      { name: "Smite – focused witchfire", tags: "devastating wounds, hazardous, psychic", range: "24\"", a: "D6", skill: "3+", s: "6", ap: "-2", d: "D3" }
    ],
    meleeWeapons: [
      { name: "Force weapon", tags: "psychic", a: "4", skill: "3+", s: "6", ap: "-1", d: "D3" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Psychic Hood", text: "While this model is leading a unit, that unit has the Feel No Pain 4+ ability specifically against Psychic Attacks." },
      { name: "Mental Fortress (Psychic)", text: "While this model is leading a unit, that unit has a 4+ invulnerable save." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "GRENADES", "PSYKER", "LIBRARIAN", "TACTICUS", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Librarian.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "suppressor-squad",
    name: "Suppressor Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Accelerator autocannon", tags: "heavy", range: "48\"", a: "3", skill: "4+", s: "8", ap: "-1", d: "2" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Suppression Fire", text: "After this unit shoots, pick an enemy unit hit by its accelerator autocannon — until your next turn, while this unit remains on the battlefield, that enemy unit's attacks take a -1 Hit roll penalty." }
    ],
    keywords: ["FLY", "GRENADES", "SMOKE", "JUMP PACK", "IMPERIUM", "INFANTRY", "SUPPRESSOR SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Suppressor Sergeant; 2 Suppressors.",
    points: [{ models: 3, pts: 85 }],
  },
  {
    id: "caestus-assault-ram",
    name: "Caestus Assault Ram",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "14\"", T: "10", Sv: "3+", W: "18", Ld: "6+", OC: "0" },
    rangedWeapons: [
      { name: "Firefury missile batteries", tags: "blast, ignores cover", range: "36\"", a: "2D6", skill: "3+", s: "6", ap: "-1", d: "1" },
      { name: "Twin magna-melta", tags: "melta 4, twin-linked", range: "18\"", a: "2", skill: "3+", s: "12", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "lance", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Into the Foe", text: "If a unit disembarks from this Transport before it moves, that unit can charge this turn even if it also Advanced." }
    ],
    keywords: ["RAVENWING", "IMPERIUM", "VEHICLE", "AIRCRAFT", "TRANSPORT", "CAESTUS ASSAULT RAM", "FLY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Caestus Assault Ram.",
    points: [{ models: 1, pts: 215 }],
  },
  {
    id: "stormhawk-interceptor",
    name: "Stormhawk Interceptor",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "10", Ld: "6+", OC: "-" },
    rangedWeapons: [
      { name: "Icarus stormcannon", tags: "anti-fly 2+", range: "48\"", a: "6", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Las-talon", tags: "", range: "36\"", a: "2", skill: "3+", s: "10", ap: "-3", d: "D6+1" },
      { name: "Skyhammer missile launcher", tags: "anti-fly 2+", range: "48\"", a: "3", skill: "3+", s: "8", ap: "-1", d: "D3" },
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Typhoon missile launcher – frag", tags: "blast", range: "48\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Typhoon missile launcher – krak", tags: "", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Interceptor", text: "When this model makes a ranged attack against a unit that can Fly, add 1 to the Hit roll." }
    ],
    keywords: ["SMOKE", "STORMHAWK INTERCEPTOR", "RAVENWING", "VEHICLE", "AIRCRAFT", "FLY", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Stormhawk Interceptor.",
    points: [{ models: 1, pts: 155 }],
  },
  {
    id: "firestrike-servo-turrets",
    name: "Firestrike Servo-turrets",
    faction: "Space Marines",
    base: "80mm",
    stats: { M: "3\"", T: "6", Sv: "2+", W: "6", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Twin Firestrike autocannon", tags: "twin-linked", range: "48\"", a: "3", skill: "2+", s: "9", ap: "-1", d: "3" },
      { name: "Twin Firestrike las-talon", tags: "twin-linked", range: "36\"", a: "2", skill: "2+", s: "10", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Sentinel Protocols", text: "When this unit uses the Fire Overwatch Stratagem, it hits on unmodified rolls of 4+ instead of the usual 6." }
    ],
    keywords: ["VEHICLE", "ARTILLERY", "IMPERIUM", "FIRESTRIKE SERVO-TURRETS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1-2 Firestrike Servo-turrets.",
    points: [{ models: 1, pts: 75 }, { models: 2, pts: 150 }],
  },
  {
    id: "ballistus-dreadnought",
    name: "Ballistus Dreadnought",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "12", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Ballistus missile launcher – frag", tags: "blast", range: "48\"", a: "2D6", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Ballistus missile launcher – krak", tags: "", range: "48\"", a: "2", skill: "3+", s: "10", ap: "-2", d: "D6" },
      { name: "Ballistus lascannon", tags: "", range: "48\"", a: "2", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Twin storm bolter", tags: "rapid fire 2, twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured feet", tags: "", a: "5", skill: "3+", s: "7", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Ballistus Strike", text: "When this model makes a ranged attack against a unit that isn't Below Half-strength, you can re-roll the Hit roll." }
    ],
    keywords: ["DEATHWING", "BALLISTUS DREADNOUGHT", "DREADNOUGHT", "IMPERIUM", "WALKER", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Ballistus Dreadnought.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "typhon",
    name: "Typhon",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "18", Ld: "6+", OC: "6" },
    rangedWeapons: [
      { name: "Dreadhammer siege cannon", tags: "blast", range: "24\"", a: "D6+6", skill: "3+", s: "14", ap: "-3", d: "D6" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "torrent, ignores cover", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Sunderer of Fortresses", text: "Attacks from this model against a Vehicle improve Strength and Damage by 1 (by 2 instead against a Fortification)." }
    ],
    keywords: ["TYPHON", "SMOKE", "IMPERIUM", "FRAME", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Typhon.",
    points: [{ models: 1, pts: 320 }],
  },
  {
    id: "tarantula-sentry-battery",
    name: "Tarantula Sentry Battery",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "-", T: "6", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Twin heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "4+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "1", skill: "6+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Sentinel Protocols", text: "When this unit uses the Fire Overwatch Stratagem, it hits on unmodified rolls of 4+ instead of the usual 6." }
    ],
    keywords: ["VEHICLE", "TARANTULA SENTRY BATTERY", "ARTILLERY", "FRAME", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Tarantula Sentry Battery.",
    points: [{ models: 1, pts: 30 }, { models: 2, pts: 60 }, { models: 3, pts: 90 }],
  },
  {
    id: "tarantula-air-defence-battery",
    name: "Tarantula Air Defence Battery",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "-", T: "5", Sv: "3+", W: "4", Ld: "7+", OC: "0" },
    rangedWeapons: [
      { name: "Tarantula air defence missiles", tags: "anti-fly 2+, blast", range: "48\"", a: "D6", skill: "4+", s: "7", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "1", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Sentry Programming", text: "This model can use the Fire Overwatch Stratagem for 0CP, even if you've already used it on a different unit this turn — but only once per turn for this model." }
    ],
    keywords: ["FRAME", "VEHICLE", "IMPERIUM", "TARANTULA AIR DEFENCE BATTERY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Tarantula Air Defence Battery.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "eradicator-squad",
    name: "Eradicator Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Melta rifle", tags: "heavy, melta 2", range: "18\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Multi-melta", tags: "heavy, melta 2", range: "18\"", a: "2", skill: "4+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Total Obliteration", text: "Ranged attacks from this unit against a Monster or Vehicle can re-roll the Hit roll, the Wound roll, and the Damage roll." }
    ],
    keywords: ["GRAVIS", "INFANTRY", "GRENADES", "IMPERIUM", "ERADICATOR SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Eradicator Sergeant; 2-5 Eradicators.",
    points: [{ models: 3, pts: 90 }, { models: 6, pts: 180 }],
  },
  {
    id: "rapier-carrier",
    name: "Rapier Carrier",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "3\"", T: "6", Sv: "2+", W: "6", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Graviton cannon", tags: "anti-vehicle 2+, blast, heavy", range: "36\"", a: "D6", skill: "3+", s: "6", ap: "-2", d: "2" },
      { name: "Laser destroyer", tags: "heavy", range: "36\"", a: "3", skill: "3+", s: "14", ap: "-4", d: "D6+1" },
      { name: "Quad heavy bolter", tags: "heavy, twin-linked, sustained hits 1", range: "36\"", a: "6", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Quad launcher – shatter shells", tags: "heavy", range: "24\"", a: "4", skill: "3+", s: "9", ap: "-2", d: "3" },
      { name: "Quad launcher – thunderfire shells", tags: "blast, heavy, indirect fire", range: "60\"", a: "D6+4", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Powerful Volley", text: "If this model Remained Stationary this turn, its unit's Heavy weapons gain Lethal Hits when it shoots." }
    ],
    keywords: ["RAPIER CARRIER", "ARTILLERY", "FRAME", "IMPERIUM", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Rapier Carrier.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "mortis-dreadnought",
    name: "Mortis Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "6\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Dreadnought inferno cannon", tags: "ignores cover, torrent", range: "12\"", a: "2D6", skill: "N/A", s: "6", ap: "-1", d: "1" },
      { name: "Heavy plasma cannon – standard", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Heavy plasma cannon – supercharge", tags: "blast, hazardous", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "Missile launcher – frag", tags: "blast", range: "48\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – krak", tags: "", range: "48\"", a: "1", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin autocannon", tags: "twin-linked", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured feet", tags: "", a: "5", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Mortis Strike", text: "When this model makes a ranged attack against a unit that isn't Below Half-strength, you can re-roll the Hit roll." }
    ],
    keywords: ["MORTIS DREADNOUGHT", "VEHICLE", "WALKER", "IMPERIUM", "DEATHWING", "DREADNOUGHT"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Mortis Dreadnought.",
    points: [{ models: 1, pts: 130 }],
  },
  {
    id: "storm-eagle-gunship",
    name: "Storm Eagle Gunship",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "10", Sv: "3+", W: "18", Ld: "6+", OC: "-" },
    rangedWeapons: [
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin hellstrike launcher", tags: "anti-fly 2+, twin-linked", range: "72\"", a: "2", skill: "3+", s: "10", ap: "-3", d: "D6" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Twin multi-melta", tags: "melta 2, twin-linked", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Typhoon missile launcher – frag", tags: "blast", range: "48\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Typhoon missile launcher – krak", tags: "", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Vengeance launcher", tags: "blast", range: "48\"", a: "2D6", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Armoured Resilience", text: "Attacks allocated to this model have their Damage reduced by 1." }
    ],
    keywords: ["AIRCRAFT", "TRANSPORT", "IMPERIUM", "RAVENWING", "VEHICLE", "FLY", "STORM EAGLE GUNSHIP"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Storm Eagle Gunship.",
    points: [{ models: 1, pts: 250 }],
  },
  {
    id: "storm-speeder-hammerstrike",
    name: "Storm Speeder Hammerstrike",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "14\"", T: "9", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Hammerstrike missile launcher", tags: "", range: "36\"", a: "2", skill: "3+", s: "9", ap: "-3", d: "D6" },
      { name: "Krakstorm grenade launcher", tags: "", range: "18\"", a: "1", skill: "3+", s: "9", ap: "-1", d: "D3" },
      { name: "Melta destroyer", tags: "melta 2", range: "18\"", a: "3", skill: "3+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Hammerstrike", text: "After this model shoots, pick an enemy unit it hit — that unit loses Benefit of Cover until the end of the phase." }
    ],
    keywords: ["IMPERIUM", "FRAME", "STORM SPEEDER HAMMERSTRIKE", "RAVENWING", "VEHICLE", "FLY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Storm Speeder Hammerstrike.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "dreadnought",
    name: "Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "6\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Heavy plasma cannon – standard", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Heavy plasma cannon – supercharge", tags: "blast, hazardous", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "Missile launcher – frag", tags: "blast", range: "48\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – krak", tags: "", range: "48\"", a: "1", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "5", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Dreadnought combat weapon", tags: "", a: "5", skill: "3+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Wisdom of the Ancients (Aura)", text: "Friendly Adeptus Astartes Infantry units within 6\" can re-roll a Hit roll of 1." }
    ],
    keywords: ["SMOKE", "WALKER", "VEHICLE", "DEATHWING", "DREADNOUGHT", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Dreadnought.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "dreadnought-drop-pod",
    name: "Dreadnought Drop Pod",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "-", T: "7", Sv: "3+", W: "8", Ld: "6+", OC: "2" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Drop Pod Assault", text: "This model starts in Reserves without counting against normal Reserves limits, and can arrive in the first, second, or third Movement phase regardless of mission rules." }
    ],
    keywords: ["FRAME", "VEHICLE", "DREADNOUGHT DROP POD", "TRANSPORT", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Dreadnought Drop Pod.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "storm-speeder-hailstrike",
    name: "Storm Speeder Hailstrike",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "14\"", T: "9", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Fragstorm grenade launcher", tags: "blast", range: "18\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Twin ironhail heavy stubber", tags: "rapid fire 3, twin-linked", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Hailstrike", text: "After this model shoots, pick an enemy unit (not a Monster/Vehicle) it hit — until the end of the phase, friendly Adeptus Astartes ranged attacks against that unit get +1 Armour Penetration (once per unit)." }
    ],
    keywords: ["VEHICLE", "FLY", "RAVENWING", "STORM SPEEDER HAILSTRIKE", "FRAME", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Storm Speeder Hailstrike.",
    points: [{ models: 1, pts: 105 }],
  },
  {
    id: "inceptor-squad",
    name: "Inceptor Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "10\"", T: "6", Sv: "3+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Assault bolters", tags: "assault, pistol, sustained hits 2, twin-linked", range: "18\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Plasma exterminators – standard", tags: "assault, pistol, twin-linked", range: "18\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Plasma exterminators – supercharge", tags: "assault, pistol, hazardous, twin-linked", range: "18\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Meteoric Descent", text: "When arriving via Deep Strike, this unit can instead set up more than 6\" from all enemy units (rather than the usual 9\"), but can't charge this turn if it does." }
    ],
    keywords: ["INCEPTOR SQUAD", "FLY", "INFANTRY", "JUMP PACK", "IMPERIUM", "GRAVIS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Inceptor Sergeant; 2-5 Inceptors.",
    points: [{ models: 3, pts: 125 }, { models: 6, pts: 250 }],
  },
  {
    id: "infernus-squad",
    name: "Infernus Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Pyreblaster", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Incendiary Terror", text: "After this unit shoots, an Infantry unit hit by its pyreblaster must take a Battle-shock test at -1." }
    ],
    keywords: ["GRENADES", "IMPERIUM", "TACTICUS", "INFERNUS SQUAD", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Infernus Sergeant; 4-9 Infernus Marines.",
    points: [{ models: 5, pts: 85 }, { models: 10, pts: 180 }],
  },
  {
    id: "land-speeder-storm",
    name: "Land Speeder Storm",
    faction: "Space Marines",
    base: "60mm flying base",
    stats: { M: "14\"", T: "7", Sv: "4+", W: "7", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Cerberus launcher", tags: "blast", range: "18\"", a: "D6+3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm Assault", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." }
    ],
    keywords: ["LAND SPEEDER STORM", "IMPERIUM", "DEDICATED TRANSPORT", "TRANSPORT", "VEHICLE", "FLY", "RAVENWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Speeder Storm.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "brutalis-dreadnought",
    name: "Brutalis Dreadnought",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "12", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Brutalis bolt rifles", tags: "twin-linked", range: "24\"", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin Icarus ironhail heavy stubber", tags: "anti-fly 4+, rapid fire 3, twin-linked", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin multi-melta", tags: "melta 2, twin-linked", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Brutalis fists", tags: "twin-linked", a: "6", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Brutalis talons – strike", tags: "twin-linked", a: "6", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Brutalis talons – sweep", tags: "twin-linked", a: "10", skill: "3+", s: "7", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Brutalis Charge", text: "When this model ends a Charge move, roll a D6 for one engaged enemy unit: 2-3 deals D3 mortal wounds, 4-5 deals 3, and a 6 deals D3+3." }
    ],
    keywords: ["DREADNOUGHT", "VEHICLE", "WALKER", "BRUTALIS DREADNOUGHT", "IMPERIUM", "DEATHWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Brutalis Dreadnought.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "scout-bike-squad",
    name: "Scout Bike Squad",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "4+", W: "3", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Astartes grenade launcher – frag", tags: "blast", range: "24\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Astartes grenade launcher – krak", tags: "", range: "24\"", a: "1", skill: "3+", s: "9", ap: "-2", d: "D3" },
      { name: "Astartes shotgun", tags: "assault", range: "18\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "ANTI-VEHICLE 2+, PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "RAPID FIRE 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Combat knife", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Outflank", text: "When this unit arrives from Strategic Reserves, it can be set up inside the opponent's deployment zone (all other Reserves restrictions still apply)." }
    ],
    keywords: ["SCOUT BIKE SQUAD", "GRENADES", "SMOKE", "IMPERIUM", "RAVENWING", "MOUNTED"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Scout Biker Sergeant; 2-5 Scout Bikers.",
    points: [{ models: 3, pts: 75 }, { models: 6, pts: 150 }],
  },
  {
    id: "ravenwing-darkshroud",
    name: "Ravenwing Darkshroud",
    faction: "Space Marines",
    base: "60mm flying base",
    stats: { M: "14\"", T: "8", Sv: "3+", W: "10", Ld: "6+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Icon of Old Caliban (Aura)", text: "Friendly Adeptus Astartes units within 6\" gain the Stealth ability." }
    ],
    keywords: ["IMPERIUM", "FRAME", "RAVENWING", "VEHICLE", "FLY", "RAVENWING DARKSHROUD"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Ravenwing Darkshroud.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "nephilim-jetfighter",
    name: "Nephilim Jetfighter",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "8", Sv: "3+", W: "11", Ld: "6+", OC: "-", InvSv: "5+" },
    rangedWeapons: [
      { name: "Avenger mega bolter", tags: "sustained hits 1", range: "36\"", a: "10", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Blacksword missiles", tags: "anti-fly 2+", range: "36\"", a: "2", skill: "3+", s: "8", ap: "-2", d: "D6" },
      { name: "Nephilim lascannons", tags: "", range: "48\"", a: "2", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Lightning-fast Manoeuvres", text: "Ranged attacks targeting this unit take a -1 penalty to their Wound roll." }
    ],
    keywords: ["VEHICLE", "AIRCRAFT", "FLY", "IMPERIUM", "RAVENWING", "NEPHILIM JETFIGHTER"],
    factionKeywords: ["DARK ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Nephilim Jetfighter.",
    points: [{ models: 1, pts: 180 }],
  },
  {
    id: "ravenwing-dark-talon",
    name: "Ravenwing Dark Talon",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "8", Sv: "3+", W: "11", Ld: "6+", OC: "-", InvSv: "5+" },
    rangedWeapons: [
      { name: "Hurricane bolter", tags: "rapid fire 6, twin-linked", range: "24\"", a: "6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Rift cannon", tags: "blast, devastating wounds", range: "18\"", a: "D3+1", skill: "3+", s: "16", ap: "-4", d: "3" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Stasis Bomb", text: "At the end of your opponent's Fight phase, pick a visible enemy unit within 24\" and slow it until their next Movement phase, restricting how it can move that phase." }
    ],
    keywords: ["AIRCRAFT", "FLY", "IMPERIUM", "RAVENWING", "DARK TALON", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Ravenwing Dark Talon.",
    points: [{ models: 1, pts: 200 }],
  },
  {
    id: "land-speeder-vengeance",
    name: "Land Speeder Vengeance",
    faction: "Space Marines",
    base: "60mm flying base",
    stats: { M: "14\"", T: "8", Sv: "3+", W: "10", Ld: "6+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Plasma storm battery – standard", tags: "blast, twin-linked", range: "36\"", a: "D6+1", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Plasma storm battery – supercharge", tags: "blast, hazardous, twin-linked", range: "36\"", a: "D6+1", skill: "3+", s: "9", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm of Vengeance", text: "Once per turn, when a friendly Adeptus Astartes unit within 6\" is destroyed in your opponent's Shooting phase, this model can shoot back immediately as if it were your Shooting phase." }
    ],
    keywords: ["LAND SPEEDER VENGEANCE", "RAVENWING", "FRAME", "IMPERIUM", "VEHICLE", "FLY"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Land Speeder Vengeance.",
    points: [{ models: 1, pts: 130 }],
  },
  {
    id: "blood-claws",
    name: "Blood Claws",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Berserk Charge", text: "This unit can charge this turn even if it Advanced." }
    ],
    keywords: ["BATTLELINE", "INFANTRY", "TACTICUS", "IMPERIUM", "GRENADES", "BLOOD CLAWS"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Blood Claw Pack Leader; 9-19 Blood Claws.",
    points: [{ models: 10, pts: 135 }, { models: 20, pts: 270 }],
  },
  {
    id: "grey-hunters",
    name: "Grey Hunters",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Bolt carbine", tags: "rapid fire 1", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Cunning Hunters", text: "When a model in this unit attacks, re-roll a Wound roll of 1 — or re-roll any Wound roll if the target is within range of an objective marker." }
    ],
    keywords: ["BATTLELINE", "GRENADES", "TACTICUS", "GREY HUNTERS", "IMPERIUM", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Grey Hunter Pack Leader; 9 Grey Hunters.",
    points: [{ models: 10, pts: 165 }],
  },
  {
    id: "stormwolf",
    name: "Stormwolf",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "14\"", T: "10", Sv: "3+", W: "14", Ld: "6+", OC: "-" },
    rangedWeapons: [
      { name: "Skyhammer missile launcher", tags: "anti-fly 2+", range: "48\"", a: "3", skill: "3+", s: "8", ap: "-1", d: "D3" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin helfrost cannon – dispersed", tags: "torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "6", ap: "-1", d: "2" },
      { name: "Twin helfrost cannon – focused", tags: "twin-linked", range: "36\"", a: "1", skill: "3+", s: "9", ap: "-3", d: "5" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Twin multi-melta", tags: "melta 2, twin-linked", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Into the Foe", text: "If a unit disembarks from this Transport before it moves, that unit can charge this turn even if it also Advanced." }
    ],
    keywords: ["VEHICLE", "AIRCRAFT", "FLY", "TRANSPORT", "IMPERIUM", "STORMWOLF"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Stormwolf.",
    points: [{ models: 1, pts: 250 }],
  },
  {
    id: "stormfang-gunship",
    name: "Stormfang Gunship",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "14\"", T: "10", Sv: "3+", W: "14", Ld: "6+", OC: "-" },
    rangedWeapons: [
      { name: "Helfrost destructor – dispersed", tags: "sustained hits d3", range: "36\"", a: "D3", skill: "3+", s: "11", ap: "-3", d: "7" },
      { name: "Helfrost destructor – focused", tags: "torrent", range: "12\"", a: "D6+6", skill: "N/A", s: "8", ap: "-1", d: "2" },
      { name: "Skyhammer missile launcher", tags: "anti-fly 2+", range: "48\"", a: "3", skill: "3+", s: "8", ap: "-1", d: "D3" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Twin multi-melta", tags: "melta 2, twin-linked", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin stormstrike missile launcher", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "10", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Frozen Prey", text: "After this model shoots, an enemy Monster/Vehicle hit by its helfrost destructor is Frozen until your opponent's next turn, cutting its Move, Advance, and Charge distances by 2." }
    ],
    keywords: ["VEHICLE", "TRANSPORT", "IMPERIUM", "AIRCRAFT", "FLY", "STORMFANG GUNSHIP"],
    factionKeywords: ["SPACE WOLVES", "ADEPTUS ASTARTES"],
    composition: "1 Stormfang Gunship.",
    points: [{ models: 1, pts: 300 }],
  },
  {
    id: "cerberus",
    name: "Cerberus",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "18", Ld: "6+", OC: "6" },
    rangedWeapons: [
      { name: "Cerberus neutron pulse array", tags: "twin-linked", range: "48\"", a: "3", skill: "3+", s: "16", ap: "-4", d: "D6+3" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "torrent, ignores cover", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Atomantic Arc-reactor", text: "If this unit Remained Stationary this turn, its Cerberus neutron pulse array gains Lethal Hits." }
    ],
    keywords: ["IMPERIUM", "CERBERUS", "VEHICLE", "SMOKE", "FRAME"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Cerberus.",
    points: [{ models: 1, pts: 270 }],
  },
  {
    id: "invictor-tactical-warsuit",
    name: "Invictor Tactical Warsuit",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "8\"", T: "8", Sv: "3+", W: "12", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Fragstorm grenade launcher", tags: "blast", range: "18\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Incendium cannon", tags: "ignores cover, torrent", range: "12\"", a: "D6+3", skill: "N/A", s: "6", ap: "-1", d: "1" },
      { name: "Twin ironhail autocannon", tags: "twin-linked", range: "48\"", a: "3", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Twin ironhail heavy stubber", tags: "rapid fire 3, twin-linked", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Invictor fist", tags: "", a: "5", skill: "3+", s: "14", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Combat Support", text: "Once per turn, when a friendly Adeptus Astartes Phobos Infantry unit within 6\" is targeted in your opponent's Shooting phase, this model can shoot back immediately as if it were your Shooting phase." }
    ],
    keywords: ["INVICTOR TACTICAL WARSUIT", "PHOBOS", "IMPERIUM", "WALKER", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Invictor Tactical Warsuit.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "invader-atv",
    name: "Invader ATV",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "8", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Twin bolt rifle", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "5", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Outrider Escort", text: "Once per turn, when another friendly Adeptus Astartes Mounted unit within 6\" is targeted in your opponent's Shooting phase, this model can shoot back immediately as if it were your Shooting phase." }
    ],
    keywords: ["RAVENWING", "MOUNTED", "GRENADES", "IMPERIUM", "FRAME", "INVADER ATV"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Invader ATV.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "scout-squad",
    name: "Scout Squad",
    faction: "Space Marines",
    base: "28.5mm",
    stats: { M: "6\"", T: "4", Sv: "4+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Astartes shotgun", tags: "assault", range: "18\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "heavy, sustained hits 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Missile launcher – frag", tags: "blast, heavy", range: "48\"", a: "D6", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – krak", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "9", ap: "-2", d: "D6" },
      { name: "Scout sniper rifle", tags: "HEAVY, PRECISION", range: "36\"", a: "1", skill: "3+", s: "4", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combat knife", tags: "", a: "3", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Guerrilla Tactics", text: "At the end of your opponent's turn, if this unit is more than 6\" from all enemy models, you can remove it and return it to Strategic Reserves." }
    ],
    keywords: ["GRENADES", "SMOKE", "IMPERIUM", "SCOUT SQUAD", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Scout Sergeant; 4-9 Scouts.",
    points: [{ models: 5, pts: 65 }, { models: 10, pts: 120 }],
  },
  {
    id: "land-speeder-tempest",
    name: "Land Speeder Tempest",
    faction: "Space Marines",
    base: "60mm flying base",
    stats: { M: "14\"", T: "8", Sv: "3+", W: "7", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Tempest salvo launcher – frag", tags: "blast", range: "36\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Tempest salvo launcher – krak", tags: "", range: "36\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Isolate and Destroy", text: "When this model attacks a target with no other enemy units within 6\" of it, add 1 to the Wound roll." }
    ],
    keywords: ["VEHICLE", "IMPERIUM", "LAND SPEEDER TEMPEST", "RAVENWING", "FLY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Speeder Tempest.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "land-speeder-tornado",
    name: "Land Speeder Tornado",
    faction: "Space Marines",
    base: "60mm flying base",
    stats: { M: "14\"", T: "7", Sv: "3+", W: "6", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Strafing Enfilade", text: "After this model makes a Normal move, pick an enemy unit (not Monster/Vehicle) it moved over and roll six D6 — each 4+ deals 1 mortal wound to that unit." }
    ],
    keywords: ["VEHICLE", "FLY", "IMPERIUM", "LAND SPEEDER TORNADO", "RAVENWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Speeder Tornado.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "sokar-pattern-stormbird",
    name: "Sokar-pattern Stormbird",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "20\"", T: "13", Sv: "2+", W: "40", Ld: "6+", OC: "0", InvSv: "4+" },
    rangedWeapons: [
      { name: "Hellstrike missile battery", tags: "anti-fly 3+", range: "48\"", a: "4", skill: "3+", s: "10", ap: "-3", d: "D6" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "9", skill: "4+", s: "9", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Aerial Assault", text: "A Deep Strike unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." }
    ],
    keywords: ["VEHICLE", "TITANIC", "AIRCRAFT", "TRANSPORT", "IMPERIUM", "RAVENWING", "FLY", "SOKAR-PATTERN STORMBIRD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Sokar-pattern Stormbird.",
    points: [{ models: 1, pts: 900 }],
  },
  {
    id: "mastodon",
    name: "Mastodon",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "9\"", T: "14", Sv: "2+", W: "30", Ld: "6+", OC: "12" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Siege melta array", tags: "melta 2", range: "24\"", a: "6", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Skyreaper battery", tags: "anti-fly 4+", range: "48\"", a: "8", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Volkite culverin", tags: "devastating wounds", range: "36\"", a: "4", skill: "3+", s: "6", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Inviolable Transport", text: "Once per battle round, an attack allocated to this model can have its Damage changed to 0." }
    ],
    keywords: ["IMPERIUM", "TITANIC", "FRAME", "VEHICLE", "MASTODON", "SMOKE", "TRANSPORT"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Mastodon.",
    points: [{ models: 1, pts: 540 }],
  },
  {
    id: "stormtalon-gunship",
    name: "Stormtalon Gunship",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "8", Sv: "3+", W: "10", Ld: "6+", OC: "-" },
    rangedWeapons: [
      { name: "Skyhammer missile launcher", tags: "anti-fly 2+, twin-linked", range: "48\"", a: "3", skill: "3+", s: "8", ap: "-1", d: "D3" },
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Typhoon missile launcher – frag", tags: "blast", range: "48\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Typhoon missile launcher – krak", tags: "", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Strafing Run", text: "When this model makes a ranged attack against a unit that can't Fly, add 1 to the Hit roll." }
    ],
    keywords: ["VEHICLE", "FLY", "IMPERIUM", "AIRCRAFT", "STORMTALON GUNSHIP", "RAVENWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Stormtalon Gunship.",
    points: [{ models: 1, pts: 165 }],
  },
  {
    id: "stormraven-gunship",
    name: "Stormraven Gunship",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "14\"", T: "10", Sv: "3+", W: "14", Ld: "6+", OC: "0" },
    rangedWeapons: [
      { name: "Hurricane bolter", tags: "rapid fire 6, twin-linked", range: "24\"", a: "6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Stormstrike missile launcher", tags: "", range: "48\"", a: "1", skill: "3+", s: "10", ap: "-2", d: "3" },
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin heavy plasma cannon – standard", tags: "blast, twin-linked", range: "36\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Twin heavy plasma cannon – supercharge", tags: "blast, hazardous, twin-linked", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Twin multi-melta", tags: "melta 2, twin-linked", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Typhoon missile launcher – frag", tags: "blast", range: "48\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Typhoon missile launcher – krak", tags: "", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Armoured Resilience", text: "Attacks allocated to this model have their Damage reduced by 1." }
    ],
    keywords: ["RAVENWING", "STORMRAVEN GUNSHIP", "IMPERIUM", "VEHICLE", "FLY", "TRANSPORT"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Stormraven Gunship.",
    points: [{ models: 1, pts: 280 }],
  },
  {
    id: "chaplain-venerable-dreadnought",
    name: "Chaplain Venerable Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "6\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Dreadnought inferno cannon", tags: "ignores cover, torrent", range: "12\"", a: "2D6", skill: "N/A", s: "6", ap: "-1", d: "1" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Heavy plasma cannon – standard", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Heavy plasma cannon – supercharge", tags: "blast, hazardous", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured feet", tags: "", a: "5", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Dreadnought combat weapon", tags: "", a: "5", skill: "3+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Spiritual Leader", text: "Once per battle, at the start of any phase, remove Battle-shocked status from one friendly Adeptus Astartes unit within 12\" of this model." }
    ],
    keywords: ["VEHICLE", "DEATHWING", "CHAPLAIN VENERABLE DREADNOUGHT", "DREADNOUGHT", "IMPERIUM", "WALKER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Chaplain Venerable Dreadnought.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "centurion-devastator-squad",
    name: "Centurion Devastator Squad",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "4\"", T: "7", Sv: "2+", W: "4", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Centurion bolters", tags: "rapid fire 3, twin-linked", range: "24\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Centurion missile launcher", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "9", ap: "-2", d: "D3" },
      { name: "Grav-cannon", tags: "anti-vehicle 2+", range: "24\"", a: "3", skill: "3+", s: "6", ap: "-1", d: "3" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Centurion fists", tags: "", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Decimator Protocols", text: "When a model in this unit makes a ranged attack, re-roll a Hit roll of 1 — or re-roll any Hit roll if the target is within range of an objective marker." }
    ],
    keywords: ["INFANTRY", "IMPERIUM", "CENTURION", "CENTURION DEVASTATOR SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Devastator Centurion Sergeant; 2-5 Devastator Centurions.",
    points: [{ models: 3, pts: 175 }, { models: 6, pts: 365 }],
  },
  {
    id: "scout-sniper-squad",
    name: "Scout Sniper Squad",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "4+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – frag", tags: "blast, heavy", range: "48\"", a: "D6", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – krak", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "9", ap: "-2", d: "D6" },
      { name: "Scout sniper rifle", tags: "heavy, precision", range: "36\"", a: "1", skill: "3+", s: "4", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Concealed Positions", text: "This unit can only be targeted by ranged attacks from within 12\"." }
    ],
    keywords: ["GRENADES", "INFANTRY", "SMOKE", "IMPERIUM", "SCOUT SNIPER SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Scout Sniper Sergeant; 4-9 Scout Snipers.",
    points: [{ models: 5, pts: 75 }, { models: 10, pts: 150 }],
  },
  {
    id: "fire-raptor-gunship",
    name: "Fire Raptor Gunship",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "10", Sv: "3+", W: "18", Ld: "6+", OC: "-" },
    rangedWeapons: [
      { name: "Quad heavy bolter", tags: "twin-linked, sustained hits 1", range: "36\"", a: "6", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin autocannon", tags: "twin-linked", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Twin avenger bolt cannon", tags: "twin-linked", range: "36\"", a: "10", skill: "3+", s: "6", ap: "-1", d: "2" },
      { name: "Twin hellstrike launcher", tags: "anti-fly 2+, twin-linked", range: "72\"", a: "2", skill: "3+", s: "10", ap: "-3", d: "D6" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Strafing Run", text: "When this model makes a ranged attack against a unit that can't Fly, add 1 to the Hit roll." }
    ],
    keywords: ["VEHICLE", "FLY", "AIRCRAFT", "IMPERIUM", "RAVENWING", "FIRE RAPTOR GUNSHIP"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Fire Raptor Gunship.",
    points: [{ models: 1, pts: 290 }],
  },
  {
    id: "storm-speeder-thunderstrike",
    name: "Storm Speeder Thunderstrike",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "14\"", T: "9", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Stormfury missiles", tags: "", range: "48\"", a: "1", skill: "2+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Thunderstrike las-talon", tags: "", range: "36\"", a: "2", skill: "2+", s: "9", ap: "-3", d: "D6+1" },
      { name: "Twin Icarus rocket pod", tags: "anti-fly 2+, twin-linked", range: "24\"", a: "D3", skill: "3+", s: "8", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Thunderstrike", text: "After this model shoots, pick an enemy Monster/Vehicle it hit — friendly Adeptus Astartes ranged attacks against it get +1 to the Wound roll until the end of the phase." }
    ],
    keywords: ["FLY", "RAVENWING", "STORM SPEEDER THUNDERSTRIKE", "FRAME", "IMPERIUM", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Storm Speeder Thunderstrike.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "falchion",
    name: "Falchion",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "9\"", T: "13", Sv: "2+", W: "24", Ld: "6+", OC: "8" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Laser destroyer", tags: "heavy", range: "36\"", a: "3", skill: "3+", s: "14", ap: "-4", d: "D6+1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Quad lascannon", tags: "", range: "48\"", a: "4", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin Falchion volcano cannon", tags: "blast, twin-linked", range: "120\"", a: "D3+1", skill: "3+", s: "24", ap: "-5", d: "12" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin heavy flamer", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Titan-killer", text: "Ranged attacks from this model's twin Falchion volcano cannon against a Monster/Vehicle gain Devastating Wounds." }
    ],
    keywords: ["VEHICLE", "FRAME", "TITANIC", "IMPERIUM", "SMOKE", "FALCHION"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Falchion.",
    points: [{ models: 1, pts: 420 }],
  },
  {
    id: "gladiator-reaper",
    name: "Gladiator Reaper",
    faction: "Space Marines",
    base: "100mm",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "12", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Icarus rocket pod", tags: "anti-fly 2+", range: "24\"", a: "D3", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Ironhail heavy stubber", tags: "rapid fire 3", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Tempest bolter", tags: "rapid fire 4", range: "24\"", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Twin heavy onslaught gatling cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "12", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Reaping Tally", text: "This model's twin heavy onslaught gatling cannon gains Sustained Hits 2 against Infantry units." }
    ],
    keywords: ["VEHICLE", "IMPERIUM", "FRAME", "GLADIATOR REAPER", "SMOKE"],
    factionKeywords: ["BLACK TEMPLARS", "ADEPTUS ASTARTES"],
    composition: "1 Gladiator Reaper.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "gladiator-valiant",
    name: "Gladiator Valiant",
    faction: "Space Marines",
    base: "100mm",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "12", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Icarus rocket pod", tags: "anti-fly 2+", range: "24\"", a: "D3", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Ironhail heavy stubber", tags: "rapid fire 3", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin las-talon", tags: "twin-linked", range: "36\"", a: "2", skill: "3+", s: "10", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Priority Target Acquisition", text: "When this model attacks the closest eligible Monster/Vehicle with its twin las-talon, add 1 to the Hit roll." }
    ],
    keywords: ["GLADIATOR VALIANT", "IMPERIUM", "SMOKE", "VEHICLE", "FRAME"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Gladiator Valiant.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "terrax-pattern-termite",
    name: "Terrax-pattern Termite",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "8\"", T: "10", Sv: "3+", W: "14", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Combi-bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy flamer", tags: "torrent, ignores cover", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Terrax melta cutter", tags: "melta 2", range: "12\"", a: "5", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin volkite charger", tags: "devastating wounds, twin-linked", range: "18\"", a: "2", skill: "3+", s: "5", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Termite drill", tags: "anti-vehicle 3+", a: "6", skill: "4+", s: "14", ap: "-2", d: "D3+3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Termite Assault", text: "This model starts in Reserves without counting against normal Reserves limits, and can arrive in the first, second, or third Movement phase regardless of mission rules, along with any units embarked within it." }
    ],
    keywords: ["TERRAX-PATTERN TERMITE", "DEDICATED TRANSPORT", "TRANSPORT", "VEHICLE", "FRAME", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Terrax-pattern Termite.",
    points: [{ models: 1, pts: 200 }],
  },
  {
    id: "attack-bike-squad",
    name: "Attack Bike Squad",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "5", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Outrider Escort", text: "Once per turn, when another friendly Adeptus Astartes Mounted unit within 6\" is targeted in your opponent's Shooting phase, this model can shoot back immediately as if it were your Shooting phase." }
    ],
    keywords: ["RAVENWING", "ATTACK BIKE SQUAD", "IMPERIUM", "GRENADES", "MOUNTED"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1-3 Attack Bikes.",
    points: [{ models: 1, pts: 55 }, { models: 2, pts: 110 }, { models: 3, pts: 165 }],
  },
  {
    id: "land-speeder-typhoon",
    name: "Land Speeder Typhoon",
    faction: "Space Marines",
    base: "60mm flying base",
    stats: { M: "14\"", T: "7", Sv: "3+", W: "6", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Typhoon missile launcher – frag", tags: "blast", range: "48\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Typhoon missile launcher – krak", tags: "", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fire and Redeploy", text: "After this model shoots, if it's not within Engagement Range of any enemy, it can make a Normal move of up to D6\" — but can't charge this turn if it does." }
    ],
    keywords: ["RAVENWING", "IMPERIUM", "FLY", "VEHICLE", "LAND SPEEDER TYPHOON"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Speeder Typhoon.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "spartan",
    name: "Spartan",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "18", Ld: "6+", OC: "6" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "torrent, ignores cover", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Laser destroyer", tags: "heavy", range: "36\"", a: "3", skill: "3+", s: "14", ap: "-4", d: "D6+1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Quad lascannon", tags: "", range: "48\"", a: "4", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin heavy flamer", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." }
    ],
    keywords: ["SMOKE", "IMPERIUM", "TRANSPORT", "FRAME", "VEHICLE", "SPARTAN"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Spartan.",
    points: [{ models: 1, pts: 300 }],
  },
  {
    id: "sternguard-veteran-squad",
    name: "Sternguard Veteran Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Pyrecannon", tags: "ignores cover,torrent", range: "12\"", a: "D6+1", skill: "N/A", s: "6", ap: "-1", d: "1" },
      { name: "Sternguard bolt pistol", tags: "devastating wounds, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Sternguard bolt rifle", tags: "assault, devastating wounds, heavy, rapid fire 1", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Sternguard heavy bolter", tags: "devastating wounds, heavy, sustained hits 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Virtuous Onslaught", text: "When a model in this unit attacks the closest eligible target, re-roll a Wound roll of 1." }
    ],
    keywords: ["INFANTRY", "GRENADES", "TACTICUS", "STERNGUARD VETERAN SQUAD", "IMPERIUM"],
    factionKeywords: ["BLACK TEMPLARS", "ADEPTUS ASTARTES"],
    composition: "1 Sternguard Veteran Squad Leader; 4-9 Sternguard Veterans.",
    points: [{ models: 5, pts: 85 }, { models: 10, pts: 160 }],
  },
  {
    id: "deathstorm-drop-pod",
    name: "Deathstorm Drop Pod",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "-", T: "7", Sv: "3+", W: "8", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Deathstorm cannon array", tags: "sustained hits 2", range: "18\"", a: "12", skill: "4+", s: "6", ap: "0", d: "1" },
      { name: "Deathstorm missile array", tags: "blast", range: "18\"", a: "2D6", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Deathstorm Assault", text: "This model starts in Reserves without counting against normal Reserves limits, and can arrive in the first, second, or third Movement phase regardless of mission rules." }
    ],
    keywords: ["DEATHSTORM DROP POD", "IMPERIUM", "FRAME", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Deathstorm Drop Pod.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "deredeo-dreadnought",
    name: "Deredeo Dreadnought",
    faction: "Space Marines",
    base: "80mm",
    stats: { M: "6\"", T: "9", Sv: "2+", W: "12", Ld: "6+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Aiolos missile launcher", tags: "blast", range: "48\"", a: "D6+3", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Anvilus autocannon battery", tags: "twin-linked", range: "48\"", a: "4", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Arachnus heavy lascannon battery", tags: "", range: "48\"", a: "2", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Boreas air defence missiles", tags: "anti-fly 2+", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Hellfire plasma cannonade – standard", tags: "", range: "36\"", a: "6", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Hellfire plasma cannonade – supercharge", tags: "hazardous", range: "36\"", a: "6", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin heavy flamer", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Volkite falconet battery", tags: "devastating wounds", range: "30\"", a: "6", skill: "3+", s: "9", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured feet", tags: "", a: "5", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Deredeo Strike", text: "When this model makes a ranged attack against a unit that isn't Below Half-strength, you can re-roll the Hit roll." }
    ],
    keywords: ["WALKER", "SMOKE", "DREADNOUGHT", "DEREDEO DREADNOUGHT", "DEATHWING", "IMPERIUM", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Deredeo Dreadnought.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "desolation-squad",
    name: "Desolation Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Castellan launcher", tags: "blast, indirect fire", range: "36\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Superfrag rocket launcher", tags: "blast, heavy", range: "48\"", a: "D6+1", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Superkrak rocket launcher", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "10", ap: "-2", d: "D6+1" },
      { name: "Vengor launcher", tags: "blast, indirect fire", range: "48\"", a: "D6", skill: "2+", s: "7", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Targeter Optics", text: "Whenever this unit Remains Stationary, its ranged weapons gain Ignores Cover until your next Movement phase." }
    ],
    keywords: ["INFANTRY", "DESOLATION SQUAD", "TACTICUS", "IMPERIUM", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Desolation Sergeant; 4 Desolation Marines.",
    points: [{ models: 5, pts: 180 }],
  },
  {
    id: "astraeus",
    name: "Astraeus",
    faction: "Space Marines",
    base: "160mm",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "24", Ld: "6+", OC: "8", InvSv: "5+" },
    rangedWeapons: [
      { name: "Astraeus las-ripper", tags: "", range: "36\"", a: "2", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Ironhail heavy stubber", tags: "rapid fire 3", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma eradicator – standard", tags: "blast", range: "36\"", a: "D6", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Plasma eradicator – supercharge", tags: "blast, hazardous", range: "36\"", a: "D6", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Twin macro-accelerator cannon", tags: "sustained hits 1, twin-linked", range: "72\"", a: "12", skill: "3+", s: "9", ap: "-1", d: "3" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Suppression Fire", text: "After this unit shoots, pick an enemy unit hit by its accelerator autocannon — until your next turn, while this unit remains on the battlefield, that enemy unit's attacks take a -1 Hit roll penalty." }
    ],
    keywords: ["ASTRAEUS", "TITANIC", "VEHICLE", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Astraeus.",
    points: [{ models: 1, pts: 525 }],
  },
  {
    id: "fellblade",
    name: "Fellblade",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "9\"", T: "13", Sv: "2+", W: "24", Ld: "6+", OC: "8" },
    rangedWeapons: [
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Demolisher cannon", tags: "blast", range: "24\"", a: "D6+3", skill: "3+", s: "14", ap: "-3", d: "D6" },
      { name: "Fellblade accelerator cannon – AP shells", tags: "", range: "72\"", a: "2", skill: "3+", s: "14", ap: "-3", d: "6" },
      { name: "Fellblade accelerator cannon – HE shells", tags: "blast", range: "72\"", a: "2D6", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Havoc launcher", tags: "blast", range: "48\"", a: "D6", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Laser destroyer", tags: "heavy", range: "36\"", a: "3", skill: "3+", s: "14", ap: "-4", d: "D6+1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Quad heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "6", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Quad lascannon", tags: "", range: "48\"", a: "4", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin heavy flamer", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rolling Fortress", text: "A ranged attack against a friendly model is treated as Benefit of Cover if this model blocks that model from being fully visible to the attacker." }
    ],
    keywords: ["VEHICLE", "TITANIC", "FRAME", "IMPERIUM", "FELLBLADE", "SMOKE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Fellblade.",
    points: [{ models: 1, pts: 480 }],
  },
  {
    id: "gladiator-lancer",
    name: "Gladiator Lancer",
    faction: "Space Marines",
    base: "100mm",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "12", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Fragstorm grenade launcher", tags: "blast", range: "18\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Icarus rocket pod", tags: "anti-fly 2+", range: "24\"", a: "D3", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Ironhail heavy stubber", tags: "rapid fire 3", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Lancer laser destroyer", tags: "heavy", range: "72\"", a: "2", skill: "3+", s: "14", ap: "-4", d: "D6+3" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Aquilon Optics", text: "When this model shoots, you can re-roll one Hit roll, one Wound roll, and one Damage roll among its attacks." }
    ],
    keywords: ["GLADIATOR LANCER", "FRAME", "IMPERIUM", "SMOKE", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Gladiator Lancer.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "land-speeder",
    name: "Land Speeder",
    faction: "Space Marines",
    base: "105 x 70mm",
    stats: { M: "14\"", T: "8", Sv: "3+", W: "9", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Heavy flamer", tags: "torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Stormfury missile launcher", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Close-combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Purgation Run", text: "After this unit shoots, it can make a Normal move of up to D6\" — but can't charge this turn if it does." }
    ],
    keywords: ["VEHICLE", "LAND SPEEDER", "IMPERIUM", "RAVENWING", "FLY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Speeder.",
    points: [{ models: 1, pts: 105 }],
  },
  {
    id: "outrider-squad",
    name: "Outrider Squad",
    faction: "Space Marines",
    base: "90 x 52mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "4", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Twin bolt rifle", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "5", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Thunderous Impact", text: "If this unit made a Charge move this turn, its melee attacks get +1 Strength and +1 Damage." }
    ],
    keywords: ["RAVENWING", "OUTRIDER SQUAD", "MOUNTED", "GRENADES", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Outrider Sergeant; 2-5 Outriders; 0-1 Invader ATV.",
    points: [{ models: 3, pts: 70 }, { models: 6, pts: 140 }],
  },
  {
    id: "redemptor-dreadnought",
    name: "Redemptor Dreadnought",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "12", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Heavy onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "12", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Icarus rocket pod", tags: "anti-fly 2+", range: "24\"", a: "D3", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Macro plasma incinerator – standard", tags: "blast", range: "36\"", a: "D6+1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Macro plasma incinerator – supercharge", tags: "blast, hazardous", range: "36\"", a: "D6+1", skill: "3+", s: "9", ap: "-4", d: "3" },
      { name: "Onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Twin fragstorm grenade launcher", tags: "blast, twin-linked", range: "18\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin storm bolter", tags: "rapid fire 2, twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Redemptor fist", tags: "", a: "5", skill: "3+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Duty Eternal", text: "Attacks allocated to this model have their Damage reduced by 1." }
    ],
    keywords: ["VEHICLE", "IMPERIUM", "DREADNOUGHT", "REDEMPTOR DREADNOUGHT", "DEATHWING", "WALKER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Redemptor Dreadnought.",
    points: [{ models: 1, pts: 195 }],
  },
  {
    id: "repulsor-executioner",
    name: "Repulsor Executioner",
    faction: "Space Marines",
    base: "100mm",
    stats: { M: "10\"", T: "12", Sv: "3+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Heavy laser destroyer", tags: "heavy", range: "72\"", a: "2", skill: "3+", s: "16", ap: "-4", d: "D6+4" },
      { name: "Heavy onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "12", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Icarus rocket pod", tags: "anti-fly 2+", range: "24\"", a: "D3", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Ironhail heavy stubber", tags: "rapid fire 3", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Macro plasma incinerator – standard", tags: "blast", range: "36\"", a: "D6+1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Macro plasma incinerator – supercharge", tags: "blast, hazardous", range: "36\"", a: "D6+1", skill: "3+", s: "9", ap: "-4", d: "3" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Repulsor Executioner defensive array", tags: "", range: "24\"", a: "10", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin Icarus ironhail heavy stubber", tags: "anti-fly 4+, rapid fire 3, twin-linked", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Interception Strike", text: "When this model attacks an enemy unit within 12\" of a friendly Adeptus Astartes unit, you can re-roll the Hit roll." }
    ],
    keywords: ["VEHICLE", "SMOKE", "TRANSPORT", "IMPERIUM", "FRAME", "REPULSOR EXECUTIONER"],
    factionKeywords: ["BLACK TEMPLARS", "ADEPTUS ASTARTES"],
    composition: "1 Repulsor Executioner.",
    points: [{ models: 1, pts: 255 }],
  },
  {
    id: "thunderhawk-transporter",
    name: "Thunderhawk Transporter",
    faction: "Space Marines",
    base: "120 x 92mm",
    stats: { M: "20\"", T: "12", Sv: "2+", W: "30", Ld: "6+", OC: "0" },
    rangedWeapons: [
      { name: "Hellstrike missile battery", tags: "anti-fly 4+", range: "72\"", a: "4", skill: "3+", s: "8", ap: "-2", d: "3" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "8", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Aerial Deployment", text: "If this model starts the game in Hover mode and in Strategic Reserves, it can arrive in the first, second, or third Movement phase regardless of mission rules." }
    ],
    keywords: ["VEHICLE", "TITANIC", "AIRCRAFT", "TRANSPORT", "IMPERIUM", "THUNDERHAWK TRANSPORTER", "FLY", "RAVENWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Thunderhawk Transporter.",
    points: [{ models: 1, pts: 495 }],
  },
  {
    id: "tyrannic-war-veterans",
    name: "Tyrannic War Veterans",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "anti-tyranids 4+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "anti-tyranids 4+", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "anti-tyranids 4+", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tyrannic War Veterans", text: "This unit's weapons gain Devastating Wounds when targeting Tyranids units." }
    ],
    keywords: ["INFANTRY", "GRENADES", "IMPERIUM", "TYRANNIC WAR VETERANS"],
    factionKeywords: ["ULTRAMARINES", "ADEPTUS ASTARTES"],
    composition: "1 Veteran Sergeant; 4 Tyrannic War Veterans.",
    points: [{ models: 5, pts: 85 }],
  },
  {
    id: "xiphon-interceptor",
    name: "Xiphon Interceptor",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "12", Ld: "6+", OC: "-" },
    rangedWeapons: [
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Xiphon missile battery", tags: "anti-fly 2+", range: "60\"", a: "3", skill: "3+", s: "7", ap: "-1", d: "3" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Interceptor", text: "When this model makes a ranged attack against a unit that can Fly, add 1 to the Hit roll." }
    ],
    keywords: ["VEHICLE", "FLY", "AIRCRAFT", "IMPERIUM", "XIPHON INTERCEPTOR", "RAVENWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Xiphon Interceptor.",
    points: [{ models: 1, pts: 115 }],
  },
  {
    id: "assault-intercessors-with-jump-packs",
    name: "Assault Intercessors With Jump Packs",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Hand flamer", tags: "IGNORES COVER, PISTOL, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Plasma pistol - standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol - supercharge", tags: "HAZARDOUS, PISTOL", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Hammer of Wrath", text: "When this unit ends a Charge move, roll a D6 for each of its models within Engagement Range of one enemy unit — each 4+ deals 1 mortal wound to that enemy." }
    ],
    keywords: ["TACTICUS", "ASSAULT INTERCESSORS WITH JUMP PACKS", "JUMP PACK", "FLY", "IMPERIUM", "GRENADES", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Assault Intercessor Sergeant with Jump Pack; 4-9 Assault Intercessors with Jump Packs.",
    points: [{ models: 5, pts: 85 }, { models: 10, pts: 160 }],
  },
  {
    id: "eradicator-squad-with-heavy-bolters",
    name: "Eradicator Squad with Heavy Bolters",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "close-quarters", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "heavy, sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close-combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Overlapping Detonations", text: "When this unit shoots, pick a visible non-Monster/Vehicle enemy unit — its heavy bolters gain Blast 1 against that target this phase." }
    ],
    keywords: ["IMPERIUM", "INFANTRY", "ERADICATOR SQUAD", "GRAVIS", "ERADICATOR SQUAD WITH HEAVY BOLTERS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Eradicator Sergeant; 2 Eradicators.",
    points: [{ models: 3, pts: 80 }],
  },
  {
    id: "trukk",
    name: "Trukk",
    faction: "Orks",
    base: "Use model",
    stats: { M: "12\"", T: "8", Sv: "4+", W: "10", Ld: "7+", OC: "2", InvSv: "6+" },
    rangedWeapons: [
      { name: "Dual Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4", range: "36\"", a: "6", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Blasta", tags: "BLAST 2", range: "24\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Busta", tags: "", range: "24\"", a: "2", skill: "5+", s: "10", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Buzzsaw", tags: "CLEAVE 1, Extra Attacks", a: "2", skill: "3+", s: "6", ap: "-1", d: "2" },
      { name: "Grabbin’ Klaw", tags: "Extra Attacks", a: "2", skill: "3+", s: "10", ap: "-2", d: "2" },
      { name: "Spiked Ram", tags: "CLEAVE 1", a: "3", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Pilin’ Out", text: "In your opponent's Movement phase, if an enemy unit ends a move within 8\" of this model, units embarked within it can rapid disembark." }
    ],
    keywords: ["TRANSPORT", "SPEED FREEKS", "FRAME", "DEDICATED TRANSPORT", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Trukk model.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "stormboyz",
    name: "Stormboyz",
    faction: "Orks",
    base: "32mm",
    stats: { M: "12\"", T: "5", Sv: "5+", W: "1", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Choppa", tags: "", a: "3", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Kustom Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Power Klaw", tags: "", a: "3", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Rokkit Charge", text: "If this unit charged this turn, when it fights you can give its melee attacks +1 Attacks, +1 Strength, and the Hazardous ability." }
    ],
    keywords: ["FLY", "EXPLOSIVES", "INFANTRY", "JUMP PACK"],
    factionKeywords: ["ORKS"],
    composition: "1 Nob model; 4-9 Stormboy models.",
    points: [{ models: 5, pts: 70 }, { models: 10, pts: 140 }],
  },
  {
    id: "dakkajet",
    name: "Dakkajet",
    faction: "Orks",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "12", Ld: "7+", OC: "-", InvSv: "6+" },
    rangedWeapons: [
      { name: "Dual Supa-shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4", range: "36\"", a: "8", skill: "5+", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured Impact", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Strafing Run", text: "When this model makes a ranged attack against a unit that can't Fly, add 1 to the Hit roll." }
    ],
    keywords: ["SPEED FREEKS", "FLY", "AIRCRAFT", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Dakkajet model.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "burna-bommer",
    name: "Burna-bommer",
    faction: "Orks",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "12", Ld: "7+", OC: "-", InvSv: "6+" },
    rangedWeapons: [
      { name: "Dual Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4", range: "36\"", a: "6", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Dual Supa Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4, Sustained Hits 1", range: "36\"", a: "8", skill: "5+", s: "6", ap: "-1", d: "1" },
      { name: "Skorcha Missile Rack", tags: "BLAST 2, Ignores Cover", range: "36\"", a: "6", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured Impact", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Burna Bomb", text: "At the end of your opponent's Fight phase, target a visible enemy unit within 36\" and roll a D6 — on a 2+, it takes D3 mortal wounds, can't be hidden until your next turn, and attacks against it improve." }
    ],
    keywords: ["VEHICLE", "FLY", "SPEED FREEKS", "AIRCRAFT"],
    factionKeywords: ["ORKS"],
    composition: "1 Burna-bommer model.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "blitza-bommer",
    name: "Blitza-bommer",
    faction: "Orks",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "12", Ld: "7+", OC: "-", InvSv: "6+" },
    rangedWeapons: [
      { name: "Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Dual Supa-shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4", range: "36\"", a: "8", skill: "5+", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured Impact", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Boom Bomb", text: "At the end of your opponent's Fight phase, target a visible enemy unit within 24\" and roll a D6 — 1-3 deals D3 mortal wounds, 4-5 deals 3, and a 6 deals D3+3." }
    ],
    keywords: ["VEHICLE", "AIRCRAFT", "SPEED FREEKS", "FLY"],
    factionKeywords: ["ORKS"],
    composition: "1 Blitza-bommer model.",
    points: [{ models: 1, pts: 115 }],
  },
  {
    id: "warbikers",
    name: "Warbikers",
    faction: "Orks",
    base: "75 x 42mm",
    stats: { M: "12\"", T: "6", Sv: "4+", W: "3", Ld: "7+", OC: "2", InvSv: "6+" },
    rangedWeapons: [
      { name: "Dual Kombi-rokkit - Dakkagun", tags: "ASSAULT, LETHAL HITS: non-MONSTER/VEHICLE", range: "18\"", a: "6", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Dual Kombi-rokkit - Busta Rokkit", tags: "ASSAULT", range: "24\"", a: "2", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Dual Dakkagun", tags: "ASSAULT, LETHAL HITS: non-MONSTER/VEHICLE", range: "18\"", a: "6", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Choppa", tags: "", a: "3", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Kustom Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "High-speed Carnage", text: "If this unit made a Charge move this turn, its melee attacks get +1 Strength and +1 Damage." }
    ],
    keywords: ["MOUNTED", "EXPLOSIVES", "SPEED FREEKS"],
    factionKeywords: ["ORKS"],
    composition: "1 Biker Nob model; 2-5 Warbiker models.",
    points: [{ models: 3, pts: 75 }, { models: 6, pts: 140 }],
  },
  {
    id: "warbuggies",
    name: "Warbuggies",
    faction: "Orks",
    base: "150 x 95mm",
    stats: { M: "12\"", T: "7", Sv: "4+", W: "9", Ld: "7+", OC: "3", InvSv: "6+" },
    rangedWeapons: [
      { name: "Extra Dakka", tags: "ASSAULT, LETHAL HITS: non-MONSTER/VEHICLE, Sustained Hits 1", range: "12\"", a: "4", skill: "5+", s: "5", ap: "-1", d: "1" },
      { name: "Rivet Kannon - Aimed", tags: "anti-infantry 4+, ASSAULT, DEVASTATING WOUNDS: INFANTRY", range: "24\"", a: "6", skill: "4+", s: "7", ap: "-2", d: "2" },
      { name: "Rivet Kannon - Point Blank", tags: "anti-infantry 4+, ASSAULT, DEVASTATING WOUNDS: INFANTRY, Torrent", range: "6\"", a: "D3+1", skill: "-+", s: "7", ap: "-2", d: "2" },
      { name: "Mek Speshul - Aimed", tags: "ASSAULT, LETHAL HITS: non-MONSTER/VEHICLE, Sustained Hits 1", range: "24\"", a: "14", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Mek Speshul - Point Blank", tags: "ASSAULT, Torrent", range: "6\"", a: "2D6+2", skill: "-+", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Spiked Ram", tags: "CLEAVE 1", a: "4", skill: "3+", s: "7", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Drive-by Skorchin’", text: "In your Movement phase, pick a visible non-Monster/Vehicle enemy unit within 6\" — it can't use Fire Overwatch against you until the end of the turn." }
    ],
    keywords: ["VEHICLE", "EXPLOSIVES", "SPEED FREEKS"],
    factionKeywords: ["ORKS"],
    composition: "1-2 Warbuggy models.",
    points: [{ models: 1, pts: 70 }, { models: 2, pts: 130 }],
  },
  {
    id: "mek-gunz",
    name: "Mek Gunz",
    faction: "Orks",
    base: "Use model",
    stats: { M: "5\"", T: "6", Sv: "4+", W: "6", Ld: "8+", OC: "2", InvSv: "6+" },
    rangedWeapons: [
      { name: "Smasha Gun", tags: "BLAST 1", range: "48\"", a: "4", skill: "4+", s: "7", ap: "-3", d: "3" },
      { name: "Bubblechukka", tags: "BLAST 3, Lethal Hits", range: "48\"", a: "8", skill: "4+", s: "3", ap: "-3", d: "1" },
      { name: "Kustom Mega-kannon", tags: "BLAST 1, Hazardous", range: "36\"", a: "D3+1", skill: "4+", s: "12", ap: "-2", d: "4" },
      { name: "Traktor Kannon", tags: "Anti-Fly 2+", range: "48\"", a: "2", skill: "4+", s: "6", ap: "-2", d: "D3+3" }
    ],
    meleeWeapons: [
      { name: "Scavenged Shivs", tags: "", a: "5", skill: "5+", s: "2", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Madcap Artillery", text: "After this unit shoots with matching Mek Gunz weapons, an enemy unit hit gains a negative effect matching that weapon's type until your next turn." }
    ],
    keywords: ["VEHICLE", "FRAME", "GROTS"],
    factionKeywords: ["ORKS"],
    composition: "1-3 Mek Gunz models.",
    points: [{ models: 1, pts: 55 }, { models: 2, pts: 110 }, { models: 3, pts: 165 }],
  },
  {
    id: "battlewagon",
    name: "Battlewagon",
    faction: "Orks",
    base: "Use model",
    stats: { M: "10\"", T: "11", Sv: "3+", W: "16", Ld: "7+", OC: "5", InvSv: "6+" },
    rangedWeapons: [
      { name: "Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crushin’ Bulk", tags: "CLEAVE 1", a: "6", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Grabbin’ Klaw", tags: "Extra Attacks", a: "2", skill: "3+", s: "10", ap: "-2", d: "2" },
      { name: "Wreckin’ Ball", tags: "CLEAVE 2, Extra Attacks", a: "1", skill: "3+", s: "10", ap: "0", d: "D6" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Mobile Fortress", text: "Ranged attacks targeting this unit have their Damage reduced by 1." }
    ],
    keywords: ["WAGON", "TRANSPORT", "FRAME", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Battlewagon model.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "deff-dread",
    name: "Deff Dread",
    faction: "Orks",
    base: "60mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "8", Ld: "7+", OC: "3", InvSv: "6+" },
    rangedWeapons: [
      { name: "Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Kustom Mega-blasta", tags: "Hazardous", range: "24\"", a: "3", skill: "5+", s: "9", ap: "-2", d: "3" },
      { name: "Rokkit Launcha - Blasta", tags: "BLAST 2", range: "24\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Busta", tags: "", range: "24\"", a: "2", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Skorcha", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Extra Klaw", tags: "Extra Attacks", a: "1", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Dread Klaws", tags: "CLEAVE 1", a: "5", skill: "3+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Dread ’Ard", text: "Attacks targeting this unit have their Damage reduced by 1." }
    ],
    keywords: ["VEHICLE", "WALKER"],
    factionKeywords: ["ORKS"],
    composition: "1 Deff Dread model.",
    points: [{ models: 1, pts: 130 }],
  },
  {
    id: "killa-kans",
    name: "Killa Kans",
    faction: "Orks",
    base: "60mm",
    stats: { M: "8\"", T: "7", Sv: "3+", W: "5", Ld: "8+", OC: "2", InvSv: "6+" },
    rangedWeapons: [
      { name: "Kan Blasta - Dakka", tags: "BLAST 1, Ignores Cover, Sustained Hits 1", range: "24\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Kan Blasta - Kill Shot", tags: "", range: "24\"", a: "2", skill: "4+", s: "10", ap: "-2", d: "3" },
      { name: "Kan Blasta - Point Blank", tags: "BLAST 2, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Kan Klaw", tags: "", a: "3", skill: "4+", s: "8", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Spiteful Power Trip", text: "This unit's attacks against a unit with no Toughness 7+ models get +1 to hit." }
    ],
    keywords: ["VEHICLE", "GROTS", "WALKER"],
    factionKeywords: ["ORKS"],
    composition: "3-6 Killa Kan models.",
    points: [{ models: 3, pts: 130 }, { models: 6, pts: 260 }],
  },
  {
    id: "flash-gitz",
    name: "Flash Gitz",
    faction: "Orks",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Snazzgun - Cutta", tags: "Hazardous, Melta 2", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-3", d: "D3+2" },
      { name: "Snazzgun - Dakka", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Sustained Hits 1", range: "24\"", a: "3", skill: "4+", s: "6", ap: "-1", d: "2" },
      { name: "Snazzgun - Kill Shot", tags: "Hazardous", range: "36\"", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Finderz Keeperz", text: "This unit's ranged attacks get +1 Armour Penetration if either it or its target is within range of an objective." }
    ],
    keywords: ["EXPLOSIVES", "INFANTRY"],
    factionKeywords: ["ORKS"],
    composition: "1 Kaptin model; 4-9 Flash Git models.",
    points: [{ models: 5, pts: 105 }, { models: 10, pts: 210 }],
  },
  {
    id: "grot-tanks",
    name: "Grot Tanks",
    faction: "Orks",
    base: "Use model",
    stats: { M: "10\"", T: "6", Sv: "3+", W: "5", Ld: "8+", OC: "2" },
    rangedWeapons: [
      { name: "Grot tank shoota", tags: "devastating wounds, rapid fire 2", range: "36\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Grotzooka", tags: "blast, ignores cover", range: "18\"", a: "D3+3", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Kustom mega-blasta", tags: "hazardous", range: "24\"", a: "2", skill: "4+", s: "9", ap: "-2", d: "D6" },
      { name: "Rokkit launcha", tags: "blast", range: "24\"", a: "D3", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Skorcha", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Ramshackle hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Scatter!", text: "In your opponent's Movement phase, if an enemy unit ends a move within 8\" of this unit and it's not in Engagement Range, this unit can make a Normal move of up to 6\"." }
    ],
    keywords: ["GROT TANKS", "GROTS", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "4-8 Grot Tanks.",
    points: [{ models: 4, pts: 155 }, { models: 8, pts: 310 }],
  },
  {
    id: "grot-mega-tank",
    name: "Grot Mega-tank",
    faction: "Orks",
    base: "Use model",
    stats: { M: "8\"", T: "9", Sv: "3+", W: "12", Ld: "8+", OC: "4" },
    rangedWeapons: [
      { name: "Mega-tank weapons", tags: "rapid fire 10", range: "18\"", a: "10", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Twin big shoota", tags: "rapid fire 2, twin-linked", range: "18\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Twin grotzooka", tags: "blast, twin-linked", range: "18\"", a: "D3+3", skill: "4+", s: "6", ap: "0", d: "1" },
      { name: "Twin kustom mega-blasta", tags: "hazardous, twin-linked", range: "24\"", a: "2", skill: "4+", s: "9", ap: "-2", d: "D6" },
      { name: "Twin rokkit launcha", tags: "blast, twin-linked", range: "24\"", a: "D3", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Twin skorcha", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Bizarrely Resilient", text: "Attacks targeting this model have their Armour Penetration worsened by 1." }
    ],
    keywords: ["VEHICLE", "GROTS", "GROT MEGA-TANK"],
    factionKeywords: ["ORKS"],
    composition: "1 Grot Mega-Tank.",
    points: [{ models: 1, pts: 110 }],
  },
  {
    id: "lifta-wagon",
    name: "Lifta Wagon",
    faction: "Orks",
    base: "Use model",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "16", Ld: "7+", OC: "5", InvSv: "6+" },
    rangedWeapons: [
      { name: "Big shoota", tags: "rapid fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Lifta-droppa", tags: "anti-vehicle 3+", range: "36\"", a: "4", skill: "5+", s: "6", ap: "-3", d: "D6+1" },
      { name: "Rokkit launcha", tags: "blast", range: "24\"", a: "D3", skill: "5+", s: "9", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Deff rolla", tags: "", a: "6", skill: "3+", s: "9", ap: "-1", d: "2" },
      { name: "Grabbin’ klaw", tags: "extra attacks", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Tracks and wheels", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" },
      { name: "Wreckin’ ball", tags: "extra attacks", a: "1", skill: "4+", s: "10", ap: "0", d: "D6" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Da Bigger Dey Are, da Better Dey Drop", text: "When this model's lifta-droppa destroys an enemy model with Deadly Demise, that ability triggers on a 3+ instead of only a 6." }
    ],
    keywords: ["LIFTA WAGON", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Lifta Wagon.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "big-trakk",
    name: "Big Trakk",
    faction: "Orks",
    base: "Use model",
    stats: { M: "12\"", T: "9", Sv: "4+", W: "12", Ld: "7+", OC: "3", InvSv: "6+" },
    rangedWeapons: [
      { name: "Big shoota", tags: "rapid fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Kannon – frag", tags: "blast", range: "36\"", a: "D6", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Kannon – shell", tags: "", range: "36\"", a: "1", skill: "5+", s: "9", ap: "-2", d: "D6" },
      { name: "Supa-kannon – frag", tags: "blast", range: "36\"", a: "D6+3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Supa-kannon – shell", tags: "", range: "36\"", a: "1", skill: "5+", s: "9", ap: "-2", d: "D3+3" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Spiked Ram", text: "When this model ends a Charge move, roll a D6 for one engaged enemy unit: 2-5 deals D3 mortal wounds, and a 6 deals 3." }
    ],
    keywords: ["BIG TRAKK", "TRANSPORT", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Big Trakk.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "kill-tank",
    name: "Kill Tank",
    faction: "Orks",
    base: "Use model",
    stats: { M: "12\"", T: "12", Sv: "3+", W: "24", Ld: "6+", OC: "10" },
    rangedWeapons: [
      { name: "Bursta kannon", tags: "blast", range: "36\"", a: "3D6", skill: "5+", s: "14", ap: "-2", d: "3" },
      { name: "Giga shoota", tags: "sustained hits 1", range: "48\"", a: "30", skill: "5+", s: "6", ap: "-1", d: "1" },
      { name: "Skorcha", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Twin big shoota", tags: "rapid fire 2, twin-linked", range: "18\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Reinforced ram", tags: "", a: "8", skill: "4+", s: "9", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Wall of Dakka", text: "When this model makes a ranged attack against a target within half range, add 1 to the Hit roll." }
    ],
    keywords: ["KILL TANK", "TRANSPORT", "TITANIC", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Kill Tank.",
    points: [{ models: 1, pts: 300 }],
  },
  {
    id: "zodgrod-wortsnagga",
    name: "Zodgrod Wortsnagga",
    faction: "Orks",
    base: "50mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "5", Ld: "7+", OC: "1", InvSv: "6+" },
    rangedWeapons: [
      { name: "Squigstoppa", tags: "ANTI-MONSTER/VEHICLE 4+, CLOSE-QUARTERS, DEVASTATING WOUNDS: MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Da Grabzappa", tags: "", a: "5", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Super Runts", text: "This unit becomes riled up, and its Scavenged Shivs weapons get +1 Attacks, +1 to hit, and +1 Strength." }
    ],
    keywords: ["INFANTRY", "EPIC HERO", "RUNTHERD", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Zodgrod Wortsnagga model.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "beast-snagga-boyz",
    name: "Beast Snagga Boyz",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "1", Ld: "7+", OC: "2", InvSv: "6+" },
    rangedWeapons: [
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Thump Gun", tags: "ANTI-MONSTER/VEHICLE 4+", range: "18\"", a: "3", skill: "5+", s: "6", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Choppa - Standard", tags: "", a: "3", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Choppa - Hunter", tags: "", a: "3", skill: "3+", s: "6", ap: "-2", d: "1" },
      { name: "Power Snappa", tags: "ANTI-MONSTER/VEHICLE 4+", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Mobbed", text: "When this unit ends a charge move, each engaged enemy Monster/Vehicle unit takes a Battle-shock test at -1 (or -2 if this unit has 13 or more models)." }
    ],
    keywords: ["INFANTRY", "BATTLELINE", "MOB", "BEAST SNAGGA"],
    factionKeywords: ["ORKS"],
    composition: "1-2 Nob models; 9-18 Beast Snagga Boy models.",
    points: [{ models: 10, pts: 85 }, { models: 20, pts: 170 }],
  },
  {
    id: "bannernob",
    name: "Bannernob",
    faction: "Orks",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "4", Ld: "7+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Kustom Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Waaagh! Banner", text: "This unit gets +1 to Charge rolls." }
    ],
    keywords: ["INFANTRY", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Bannernob model.",
    points: [{ models: 1, pts: 35 }],
  },
  {
    id: "bigboss",
    name: "Bigboss",
    faction: "Orks",
    base: "Use model",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "5", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Big Choppa", tags: "Precision", a: "5", skill: "3+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Sumfin’ to Prove", text: "This unit's melee attacks get +1 to hit." }
    ],
    keywords: ["CHARACTER", "INFANTRY"],
    factionKeywords: ["ORKS"],
    composition: "1 Bigboss model.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "runtherd",
    name: "Runtherd",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Runtherd’s Toolz", tags: "", a: "3", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "That’ll Learn Ya (Once per battle round, per unit)", text: "When this unit (with 4+ Gretchin) becomes Battle-shocked, you can roll a D3 and destroy that many Gretchin to remove the Battle-shocked status instead." }
    ],
    keywords: ["INFANTRY", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Runtherd model.",
    points: [{ models: 1, pts: 10 }],
  },
  {
    id: "gunwagon",
    name: "Gunwagon",
    faction: "Orks",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "3+", W: "16", Ld: "7+", OC: "5", InvSv: "6+" },
    rangedWeapons: [
      { name: "Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Kannon - Frag", tags: "BLAST 3, Rapid Fire 4", range: "36\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Kannon - Shell", tags: "Rapid Fire 2", range: "36\"", a: "2", skill: "4+", s: "10", ap: "-2", d: "D6+1" },
      { name: "Killkannon", tags: "Anti-Infantry 3+, BLAST 1, Rapid Fire 4", range: "24\"", a: "4", skill: "4+", s: "6", ap: "-3", d: "2" },
      { name: "Lobba", tags: "BLAST 3, Indirect Fire", range: "48\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Zzap Gun", tags: "ANTI-MONSTER/VEHICLE 4+, DEVASTATING WOUNDS: MONSTER/VEHICLE, Rapid Fire 2, Sustained Hits 2", range: "36\"", a: "2", skill: "4+", s: "8", ap: "-2", d: "4" }
    ],
    meleeWeapons: [
      { name: "Crushin’ Bulk", tags: "CLEAVE 2", a: "6", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Grabbin’ Klaw", tags: "Extra Attacks", a: "2", skill: "3+", s: "10", ap: "-2", d: "2" },
      { name: "Wreckin’ Ball", tags: "CLEAVE 2, Extra Attacks", a: "1", skill: "3+", s: "10", ap: "0", d: "D6" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Mobile Arsenal", text: "This unit's ranged attacks can re-roll a Hit roll of 1." }
    ],
    keywords: ["VEHICLE", "FRAME", "TRANSPORT", "WAGON"],
    factionKeywords: ["ORKS"],
    composition: "1 Gunwagon model.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "rukkatrukk-squigbuggies",
    name: "Rukkatrukk Squigbuggies",
    faction: "Orks",
    base: "150 x 95mm",
    stats: { M: "12\"", T: "7", Sv: "4+", W: "9", Ld: "7+", OC: "3", InvSv: "6+" },
    rangedWeapons: [
      { name: "Sawn-off Shotgun", tags: "ASSAULT, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Squig Launchas", tags: "Ignores Cover", range: "24\"", a: "D6+6", skill: "4+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Saw Blades", tags: "CLEAVE 1", a: "4", skill: "3+", s: "7", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Squig Barrage", text: "After this unit shoots, an enemy unit (not Monster/Vehicle) hit by its Squig Launchas takes a -1 to hit penalty on its own attacks until your next turn." }
    ],
    keywords: ["VEHICLE", "EXPLOSIVES", "SPEED FREEKS"],
    factionKeywords: ["ORKS"],
    composition: "1-2 Rukkatrukk Squigbuggy models.",
    points: [{ models: 1, pts: 85 }, { models: 2, pts: 160 }],
  },
  {
    id: "apothecary-biologis",
    name: "Apothecary Biologis",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "5", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Surgical Precision", text: "While this model is leading a unit, that unit's weapons gain Lethal Hits." },
      { name: "Vivispectrum", text: "If this model's unit destroys an enemy unit in melee, this model's Objective Control becomes 9 for the rest of the battle." }
    ],
    keywords: ["CHARACTER", "IMPERIUM", "INFANTRY", "BIOLOGIS", "APOTHECARY", "GRAVIS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Apothecary Biologis.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "apothecary-on-bike",
    name: "Apothecary on Bike",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "5", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "5", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Narthecium", text: "While this model is leading a unit, in your Command phase you can return 1 destroyed model (not Characters) to that unit." },
      { name: "Gene-seed Recovery", text: "When this model's Bodyguard unit is destroyed, roll a D6 — on a 2+, you gain 1 Command Point." }
    ],
    keywords: ["GRENADES", "APOTHECARY", "IMPERIUM", "CHARACTER", "MOUNTED", "RAVENWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Apothecary on Bike.",
    points: [{ models: 1, pts: 65 }],
  },
  {
    id: "land-raider",
    name: "Land Raider",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Godhammer lascannon", tags: "", range: "48\"", a: "2", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["LAND RAIDER", "FRAME", "IMPERIUM", "TRANSPORT", "DEATHWING", "VEHICLE", "SMOKE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Raider.",
    points: [{ models: 1, pts: 220 }],
  },
  {
    id: "librarian-in-terminator-armour",
    name: "Librarian In Terminator Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Smite – witchfire", tags: "psychic", range: "24\"", a: "D6", skill: "3+", s: "5", ap: "-1", d: "D3" },
      { name: "Smite – focused witchfire", tags: "devastating wounds, hazardous, psychic", range: "24\"", a: "D6", skill: "3+", s: "6", ap: "-2", d: "D3" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Force weapon", tags: "psychic", a: "4", skill: "3+", s: "6", ap: "-1", d: "D3" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Psychic Hood", text: "While this model is leading a unit, that unit has the Feel No Pain 4+ ability specifically against Psychic Attacks." },
      { name: "Veil of Time (Psychic)", text: "While this model is leading a unit, that unit's weapons gain Sustained Hits 1." }
    ],
    keywords: ["INFANTRY", "DEATHWING", "LIBRARIAN", "TERMINATOR", "IMPERIUM", "PSYKER", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Librarian in Terminator Armour.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "sicaran-venator",
    name: "Sicaran Venator",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "11", Sv: "2+", W: "14", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Venator neutron laser", tags: "heavy", range: "48\"", a: "3", skill: "3+", s: "16", ap: "-4", d: "D3+3" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Ferocious Assault", text: "When this model attacks the closest eligible Monster/Vehicle, add 1 to the Hit roll." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["IMPERIUM", "SICARAN VENATOR", "SMOKE", "FRAME", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Sicaran Venator.",
    points: [{ models: 1, pts: 180 }],
  },
  {
    id: "chaplain-on-bike",
    name: "Chaplain On Bike",
    faction: "Space Marines",
    base: "90 x 52mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "5", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin bolt rifle", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crozius arcanum", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Litany of Hate", text: "While this model is leading a unit, add 1 to the Wound roll for that unit's melee attacks." },
      { name: "Catechism of Fire", text: "When this model's unit shoots, pick an enemy unit within 12\" and visible — that unit's ranged weapons gain Devastating Wounds against that target this phase." }
    ],
    keywords: ["CHAPLAIN", "IMPERIUM", "RAVENWING", "GRENADES", "CHARACTER", "MOUNTED"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Chaplain on Bike.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "javelin-attack-speeder",
    name: "Javelin Attack Speeder",
    faction: "Space Marines",
    base: "60mm flying base",
    stats: { M: "14\"", T: "8", Sv: "3+", W: "9", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Javelin missile launcher – frag", tags: "blast", range: "36\"", a: "3D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Javelin missile launcher – krak", tags: "", range: "36\"", a: "3", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fire and Redeploy", text: "After this model shoots, if it's not within Engagement Range of any enemy, it can make a Normal move of up to D6\" — but can't charge this turn if it does." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["IMPERIUM", "FLY", "VEHICLE", "RAVENWING", "JAVELIN ATTACK SPEEDER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Javelin Attack Speeder.",
    points: [{ models: 1, pts: 110 }],
  },
  {
    id: "chaplain-with-jump-pack",
    name: "Chaplain With Jump Pack",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "close-quarters", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crozius arcanum", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "2" },
      { name: "Power fist", tags: "", a: "4", skill: "2+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Litany of Hate", text: "While this model is leading a unit, add 1 to the Wound roll for that unit's melee attacks." },
      { name: "Exhortation of Rage", text: "When this model's unit fights, pick an engaged enemy unit and roll a D6: 4-5 deals D3 mortal wounds, and a 6 deals 3." }
    ],
    keywords: ["JUMP PACK", "INFANTRY", "CHARACTER", "CHAPLAIN", "IMPERIUM", "FLY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Chaplain with Jump Pack.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "bike-squad",
    name: "Bike Squad",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "3", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "-0", d: "1" },
      { name: "Grav-gun", tags: "ANTI-VEHICLE 2+", range: "18\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Meltagun", tags: "MELTA 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma gun – standard", tags: "RAPID FIRE 1", range: "24\"", a: "1", skill: "3+", s: "7 ", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "HAZARDOUS, RAPID FIRE 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "RAPID FIRE 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "3", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Turbo-boost", text: "When this unit Advances, skip the Advance roll and instead add 6\" to its Move for the phase." },
      { name: "ATTACHED UNITS", text: "A Character with the Leader ability that can attach to an Outrider Squad can attach to this unit too." }
    ],
    keywords: ["BIKE SQUAD", "IMPERIUM", "GRENADES", "MOUNTED", "RAVENWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Biker Sergeant; 2-5 Space Marine Bikers; 0-1 Attack Bike.",
    points: [{ models: 1, pts: 55 }, { models: 3, pts: 80 }, { models: 6, pts: 160 }],
  },
  {
    id: "librarian-in-phobos-armour",
    name: "Librarian In Phobos Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Smite – witchfire", tags: "psychic", range: "24\"", a: "D6", skill: "3+", s: "5", ap: "-1", d: "D3" },
      { name: "Smite – focused witchfire", tags: "devastating wounds, hazardous, psychic", range: "24\"", a: "D6", skill: "3+", s: "6", ap: "-2", d: "D3" }
    ],
    meleeWeapons: [
      { name: "Force weapon", tags: "psychic", a: "4", skill: "3+", s: "6", ap: "-1", d: "D3" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Psychic Hood", text: "While this model is leading a unit, that unit has the Feel No Pain 4+ ability specifically against Psychic Attacks." },
      { name: "Shrouding (Psychic)", text: "While this model is leading a unit, that unit gains Stealth and can only be targeted by ranged attacks from within 12\"." }
    ],
    keywords: ["PSYKER", "LIBRARIAN", "PHOBOS", "IMPERIUM", "INFANTRY", "CHARACTER", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Librarian in Phobos Armour.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "venerable-dreadnought",
    name: "Venerable Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Helfrost cannon – dispersed", tags: "torrent", range: "12\"", a: "D6", skill: "N/A", s: "6", ap: "-1", d: "2" },
      { name: "Helfrost cannon – focused", tags: "", range: "36\"", a: "1", skill: "3+", s: "10", ap: "-3", d: "5" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Dreadnought combat weapon", tags: "", a: "5", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Fenrisian greataxe – strike", tags: "", a: "6", skill: "3+", s: "10", ap: "-2", d: "D6+1" },
      { name: "Fenrisian greataxe – sweep", tags: "", a: "12", skill: "3+", s: "6", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fervour of the Ancients (Aura)", text: "Friendly Space Wolves units within 6\" get +1 to Advance and Charge rolls." },
      { name: "Blizzard Shield", text: "The bearer has a 4+ invulnerable save." }
    ],
    keywords: ["SMOKE", "IMPERIUM", "DREADNOUGHT", "VEHICLE", "WALKER", "VENERABLE DREADNOUGHT"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Venerable Dreadnought.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "uriel-ventris",
    name: "Uriel Ventris",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Invictus", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Sword of Idaeus", tags: "sustained hits 1", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Unorthodox Strategist (Aura)", text: "Once per turn, when your opponent targets a unit within 12\" of this model with a Stratagem, you can increase that Stratagem's CP cost by 1." },
      { name: "Master of the Fleet", text: "During Battle Formations, pick one Phobos/Gravis/Tacticus Adeptus Astartes Infantry unit — it gains Deep Strike for the battle." }
    ],
    keywords: ["CHARACTER", "URIEL VENTRIS", "CAPTAIN", "INFANTRY", "EPIC HERO", "IMPERIUM", "TACTICUS"],
    factionKeywords: ["ADEPTUS ASTARTES", "ULTRAMARINES"],
    composition: "1 Uriel Ventris – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 105 }],
  },
  {
    id: "sicaran-punisher",
    name: "Sicaran Punisher",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "11", Sv: "2+", W: "14", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Punisher rotary cannon", tags: "devastating wounds", range: "36\"", a: "18", skill: "4+", s: "6", ap: "0", d: "1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rotating Death", text: "This model's Punisher rotary cannon gains Sustained Hits 1 against Infantry." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["IMPERIUM", "FRAME", "VEHICLE", "SMOKE", "SICARAN PUNISHER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Sicaran Punisher.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "razorback",
    name: "Razorback",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "9", Sv: "3+", W: "10", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fire Support", text: "After this model shoots, pick an enemy unit it hit — friendly models that disembarked from this Transport this turn can re-roll Wound rolls against that unit for the rest of the phase." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "SMOKE", "TRANSPORT", "DEDICATED TRANSPORT", "IMPERIUM", "FRAME", "RAZORBACK"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Razorback.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "leviathan-dreadnought",
    name: "Leviathan Dreadnought",
    faction: "Space Marines",
    base: "80mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "12", Ld: "6+", OC: "4", InvSv: "5+" },
    rangedWeapons: [
      { name: "Cyclonic melta lance", tags: "melta 2", range: "18\"", a: "D6", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Grav-flux bombard", tags: "anti-vehicle 2+, blast", range: "24\"", a: "2D3", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm cannon", tags: "twin-linked", range: "36\"", a: "4", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Twin volkite caliver", tags: "devastating wounds, twin-linked", range: "24\"", a: "2", skill: "3+", s: "5", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured feet", tags: "", a: "5", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Leviathan siege claw", tags: "", a: "5", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Leviathan siege drill", tags: "anti-vehicle 3+", a: "4", skill: "3+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Duty Eternal", text: "Attacks allocated to this model have their Damage reduced by 1." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["WALKER", "IMPERIUM", "SMOKE", "DREADNOUGHT", "DEATHWING", "LEVIATHAN DREADNOUGHT", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Leviathan Dreadnought.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "astartes-servitors",
    name: "Astartes Servitors",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "4+", W: "1", Ld: "8+", OC: "0", InvSv: "6+" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "heavy, sustained hits 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Multi-melta", tags: "heavy, melta 2", range: "18\"", a: "2", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma cannon – standard", tags: "blast, heavy", range: "36\"", a: "D3", skill: "4+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma cannon – supercharge", tags: "blast, hazardous, heavy", range: "36\"", a: "D3", skill: "4+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "1", skill: "5+", s: "3", ap: "0", d: "1" },
      { name: "Servitor servo-arm", tags: "", a: "1", skill: "5+", s: "6", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Mindlock", text: "While a Techmarine is leading this unit, Astartes Servitor models' weapons get +1 Ballistic Skill and Weapon Skill." },
      { name: "SERVITOR RETINUE", text: "At the start of Battle Formations, this unit can join another unit led by a Techmarine, effectively becoming part of that Bodyguard unit for the rest of the battle." }
    ],
    keywords: ["IMPERIUM", "INFANTRY", "ASTARTES SERVITORS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "4 Astartes Servitors.",
    points: [{ models: 4, pts: 55 }],
  },
  {
    id: "captain-in-terminator-armour",
    name: "Captain In Terminator Armour",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Relic fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "The Imperium’s Sword", text: "You can re-roll Charge rolls made for this model's unit." }
    ],
    keywords: ["TERMINATOR", "CAPTAIN", "CHARACTER", "INFANTRY", "DEATHWING", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Captain in Terminator Armour.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "thunderhawk-gunship",
    name: "Thunderhawk Gunship",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "20\"", T: "12", Sv: "2+", W: "30", Ld: "6+", OC: "0" },
    rangedWeapons: [
      { name: "Hellstrike missile battery", tags: "anti-fly 4+", range: "72\"", a: "4", skill: "3+", s: "8", ap: "-2", d: "3" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Thunderhawk heavy cannon", tags: "blast", range: "48\"", a: "D6+6", skill: "3+", s: "10", ap: "-2", d: "3" },
      { name: "Turbo-laser destructor", tags: "blast", range: "96\"", a: "D3+1", skill: "3+", s: "20", ap: "-4", d: "D6+6" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Thunderhawk Cluster Bombs", text: "After the bearer makes a Normal move, pick an enemy unit it moved over and roll six D6 — each 3+ deals 1 mortal wound." },
      { name: "Aerial Assault", text: "A Deep Strike unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." }
    ],
    keywords: ["FLY", "TITANIC", "VEHICLE", "TRANSPORT", "RAVENWING", "THUNDERHAWK GUNSHIP", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Thunderhawk Gunship.",
    points: [{ models: 1, pts: 840 }],
  },
  {
    id: "hunter",
    name: "Hunter",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "9\"", T: "11", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Skyspear missile launcher", tags: "anti-fly 3+, devastating wounds, heavy", range: "36\"", a: "1", skill: "2+", s: "10", ap: "-3", d: "D6+2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Hunter Missile Targeting", text: "This model's skyspear missile launcher scores hits against Monster/Vehicle targets on an unmodified 2+." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "IMPERIUM", "SMOKE", "FRAME", "HUNTER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Hunter.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "vanguard-veteran-squad-with-jump-packs",
    name: "Vanguard Veteran Squad With Jump Packs",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Heavy bolt pistol", tags: "close-quarters", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Vanguard Veteran weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Vanguard Assault", text: "When this unit ends a Charge move, its melee weapons gain Lethal Hits until the end of the turn." },
      { name: "Storm Shield", text: "The bearer has a 4+ invulnerable save." }
    ],
    keywords: ["DEATHWING", "VANGUARD VETERAN SQUAD", "IMPERIUM", "FLY", "JUMP PACK", "GRENADES", "VANGUARD VETERAN SQUAD WITH JUMP PACKS", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Vanguard Veteran Sergeant with Jump Pack; 4-9 Vanguard Veterans with Jump Packs.",
    points: [{ models: 5, pts: 105 }, { models: 10, pts: 210 }],
  },
  {
    id: "imperial-space-marine",
    name: "Imperial Space Marine",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Disintegration combi-gun", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Disintegration pistol", tags: "anti-infantry 4+, devastating wounds, pistol", range: "12\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Swift Assault", text: "While this model is leading a unit, that unit's ranged weapons gain the Assault ability." },
      { name: "Unbreakable Duty", text: "While within range of an objective or within 6\" of the battlefield centre, this model has Feel No Pain 4+." }
    ],
    keywords: ["INFANTRY", "IMPERIUM", "CHARACTER", "GRENADES", "IMPERIAL SPACE MARINE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Imperial Space Marine.",
    points: [{ models: 1, pts: 40 }],
  },
  {
    id: "commander-dante",
    name: "Commander Dante",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "12\"", T: "4", Sv: "2+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Perdition Pistol", tags: "melta 2, pistol, sustained hits d3", range: "6\"", a: "1", skill: "2+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "The Axe Mortalis", tags: "lethal hits", a: "8", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Warden of the Imperium Nihilus", text: "While this model is leading a unit, that unit gets +1 to Advance and Charge rolls and +1 to hit with its attacks." },
      { name: "Death Mask of Sanguinius", text: "At the start of the Fight phase, enemy units within 6\" must take a Battle-shock test at -1." }
    ],
    keywords: ["CHAPTER MASTER", "COMMANDER DANTE", "TACTICUS", "IMPERIUM", "GRENADES", "JUMP PACK", "FLY", "EPIC HERO", "CHARACTER", "INFANTRY"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Commander Dante – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "librarian-dreadnought",
    name: "Librarian Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Blood Lance – witchfire", tags: "psychic, sustained hits d3", range: "18\"", a: "1", skill: "3+", s: "10", ap: "-3", d: "D6" },
      { name: "Blood Lance – focused witchfire", tags: "hazardous, psychic, sustained hits d3", range: "18\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+3" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Furioso fist", tags: "", a: "5", skill: "3+", s: "12", ap: "-3", d: "3" },
      { name: "Furioso force halberd", tags: "extra attacks, psychic", a: "1", skill: "2+", s: "9", ap: "-3", d: "D6+3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Shield of Sanguinius (Aura, Psychic)", text: "Friendly Adeptus Astartes units within 6\" gain Feel No Pain 5+ against mortal wounds and Psychic Attacks." },
      { name: "Wings of Sanguinius (Psychic)", text: "Once per turn, at the end of your Movement phase, roll a D6 for this Psyker: on a 1, it takes D3 mortal wounds; on a 2+, teleport a friendly Adeptus Astartes Infantry unit within 12\" to a new location." }
    ],
    keywords: ["VEHICLE", "WALKER", "SMOKE", "IMPERIUM", "DREADNOUGHT", "LIBRARIAN DREADNOUGHT", "PSYKER"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Librarian Dreadnought.",
    points: [{ models: 1, pts: 170 }],
  },
  {
    id: "chief-librarian-mephiston",
    name: "Chief Librarian Mephiston",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "7\"", T: "5", Sv: "2+", W: "6", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Fury of the Ancients – witchfire", tags: "pistol, psychic, sustained hits 1", range: "18\"", a: "3", skill: "2+", s: "4", ap: "-1", d: "D3" },
      { name: "Fury of the Ancients – focused witchfire", tags: "hazardous, pistol, psychic, sustained hits 3", range: "18\"", a: "3", skill: "2+", s: "5", ap: "-2", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Vitarus", tags: "lethal hits, psychic", a: "6", skill: "2+", s: "9", ap: "-3", d: "D3" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Fights First", text: "A unit where every model has Fights First fights before non-Fights-First units in the Fight phase." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "The Quickening (Psychic)", text: "This model can charge this turn even if it Advanced." },
      { name: "Transfixing Gaze (Aura, Psychic)", text: "While an enemy unit is within 6\", it must pass a Leadership test to Fall Back or must Remain Stationary instead." }
    ],
    keywords: ["CHARACTER", "EPIC HERO", "PSYKER", "GRENADES", "IMPERIUM", "TACTICUS", "CHIEF LIBRARIAN MEPHISTON", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Chief Librarian Mephiston – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 110 }],
  },
  {
    id: "the-sanguinor",
    name: "The Sanguinor",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "12\"", T: "4", Sv: "2+", W: "7", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Encarmine broadsword", tags: "devastating wounds", a: "8", skill: "2+", s: "6", ap: "-3", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Fights First", text: "A unit where every model has Fights First fights before non-Fights-First units in the Fight phase." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Aura of Fervour (Aura)", text: "Friendly Adeptus Astartes units within 6\" can re-roll Battle-shock and Leadership tests." },
      { name: "Miraculous Saviour", text: "Once per battle, at the end of your opponent's Charge phase (not round 1), you can bring in a unit via Ingress Move already engaged with an enemy that just charged." }
    ],
    keywords: ["THE SANGUINOR", "TACTICUS", "IMPERIUM", "JUMP PACK", "EPIC HERO", "CHARACTER", "INFANTRY", "FLY"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 The Sanguinor – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 120 }],
  },
  {
    id: "astorath",
    name: "Astorath",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "12\"", T: "4", Sv: "2+", W: "5", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "The Executioner’s Axe", tags: "devastating wounds, Precision", a: "6", skill: "2+", s: "7", ap: "-3", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Redeemer of the Lost", text: "While this model is leading a unit, a model in that unit destroyed by melee before fighting can, on a 4+, fight anyway before being removed." },
      { name: "Mass of Doom", text: "When this model's unit makes a Charge move, its melee weapons gain Devastating Wounds until the end of the turn." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "FLY", "IMPERIUM", "JUMP PACK", "TACTICUS", "CHAPLAIN", "ASTORATH"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Astorath – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "sanguinary-priest",
    name: "Sanguinary Priest",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "5", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Sanguinary Priest", text: "While this model is leading a unit, that unit has Feel No Pain 5+." },
      { name: "Blood Chalice", text: "While this model is leading a unit, that unit's melee weapons get +1 Armour Penetration." }
    ],
    keywords: ["CHARACTER", "GRENADES", "IMPERIUM", "TACTICUS", "SANGUINARY PRIEST", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Sanguinary Priest.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "brother-corbulo",
    name: "Brother Corbulo",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Heaven’s Teeth", tags: "sustained hits 1", a: "6", skill: "2+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Sanguinary Priest", text: "While this model is leading a unit, that unit has Feel No Pain 5+." },
      { name: "The Red Grail", text: "While this model is leading a unit, that unit's melee weapons get +1 Attacks." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "GRENADES", "EPIC HERO", "IMPERIUM", "BROTHER CORBULO", "SANGUINARY PRIEST"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Brother Corbulo – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "lemartes",
    name: "Lemartes",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "2+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "The Blood Crozius", tags: "lethal hits", a: "5", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Guardian of the Lost", text: "While this model is leading a unit, attacks allocated to models in that unit have their Damage reduced by 1." },
      { name: "Fury Unbound", text: "While this model is leading a unit, that unit's melee weapons gain Lethal Hits." }
    ],
    keywords: ["IMPERIUM", "FLY", "EPIC HERO", "CHARACTER", "GRENADES", "JUMP PACK", "TACTICUS", "CHAPLAIN", "LEMARTES", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Lemartes – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "death-company-dreadnought",
    name: "Death Company Dreadnought",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "12", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Blood fist bolt rifles", tags: "twin-linked", range: "24\"", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin Icarus ironhail heavy stubber", tags: "ANTI-FLY 4+, RAPID FIRE 3, TWIN-LINKED", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin multi-melta", tags: "melta 2, twin-linked", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Blood fists", tags: "twin-linked", a: "6", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Blood talons - strike", tags: "twin-linked", a: "6", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Blood talons - sweep", tags: "twin-linked", a: "10", skill: "3+", s: "7", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "Driven by Fury", text: "If this model loses a wound to enemy shooting, this unit can make a surge move of up to D6+2\"." }
    ],
    keywords: ["VEHICLE", "IMPERIUM", "DREADNOUGHT", "DEATH COMPANY", "DEATH COMPANY DREADNOUGHT", "WALKER"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Death Company Dreadnought.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "furioso-dreadnought",
    name: "Furioso Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Heavy frag cannon", tags: "blast, rapid fire d6", range: "18\"", a: "D6", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Blood talons", tags: "twin-linked", a: "7", skill: "3+", s: "8", ap: "-2", d: "3" },
      { name: "Furioso fist", tags: "", a: "5", skill: "3+", s: "12", ap: "-3", d: "3" },
      { name: "Twin Furioso fists", tags: "twin-linked", a: "5", skill: "3+", s: "12", ap: "-3", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Wrathful Rampage", text: "When this model fights, pick an engaged enemy and roll a D6 (+2 if it charged this turn): 4-5 deals D3 mortal wounds, 6+ deals 3." },
      { name: "Magna-grapple", text: "The bearer loses the Smoke keyword, but gets +2 to Charge rolls when charging a Monster or Vehicle." }
    ],
    keywords: ["VEHICLE", "WALKER", "FURIOSO DREADNOUGHT", "IMPERIUM", "DREADNOUGHT"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Furioso Dreadnought.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "baal-predator",
    name: "Baal Predator",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "10", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Baal flamestorm cannon", tags: "ASSAULT, IGNORES COVER, TORRENT", range: "18\"", a: "D6+3", skill: "N/A", s: "6", ap: "-2", d: "2" },
      { name: "Heavy bolter", tags: "assault, sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "assault, ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin assault cannon", tags: "ASSAULT, DEVASTATING WOUNDS, TWIN-LINKED", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Overcharged Engines", text: "You can re-roll Advance rolls made for this model." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "SMOKE", "IMPERIUM", "FRAME", "BAAL PREDATOR"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Baal Predator.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "belial",
    name: "Belial",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Master-crafted storm bolter", tags: "precision, rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "The Sword of Silence", tags: "precision", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Grand Master of the Deathwing", text: "While this model is leading a unit, a Critical Hit from that unit's attacks gains the Precision ability." },
      { name: "Strikes of Retribution", text: "After an attacking unit finishes melee attacks against this model, roll up to six D6 — each 4+ deals 1 mortal wound back to the attacker." }
    ],
    keywords: ["INFANTRY", "DEATHWING", "IMPERIUM", "EPIC HERO", "CHARACTER", "CAPTAIN", "BELIAL", "TERMINATOR"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Belial – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "asmodai",
    name: "Asmodai",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crozius arcanum and power weapon - strike", tags: "", a: "5", skill: "2+", s: "6", ap: "-2", d: "2" },
      { name: "Crozius arcanum and power weapon - sweep", tags: "", a: "8", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Exemplar of Hate", text: "While this model is leading a unit, that unit's melee attacks can re-roll the Hit roll." },
      { name: "Feared Interrogator", text: "At the start of the Fight phase, enemy Characters within 6\" take a Battle-shock test at -1; destroying an enemy Character in melee earns 1 Command Point." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "ASMODAI", "TACTICUS", "CHAPLAIN", "DEATHWING", "IMPERIUM", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Asmodai – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "ravenwing-black-knights",
    name: "Ravenwing Black Knights",
    faction: "Space Marines",
    base: "75 x 42mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "3", Ld: "6+", OC: "2", InvSv: "5+" },
    rangedWeapons: [
      { name: "Astartes grenade launcher – frag", tags: "blast", range: "24\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Astartes grenade launcher – krak", tags: "", range: "24\"", a: "1", skill: "3+", s: "9", ap: "-2", d: "D3" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma talon – standard", tags: "rapid fire 1", range: "18\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma talon – supercharge", tags: "hazardous, rapid fire 1", range: "18\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Black Knight combat weapon", tags: "devastating wounds", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Knights of Caliban", text: "If this unit charged this turn, its melee weapons gain Anti-Monster 4+ and Anti-Vehicle 4+ until the end of the phase." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["GRENADES", "IMPERIUM", "RAVENWING", "RAVENWING BLACK KNIGHTS", "MOUNTED"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Ravenwing Huntmaster; 2-5 Ravenwing Black Knights.",
    points: [{ models: 3, pts: 75 }, { models: 6, pts: 150 }],
  },
  {
    id: "ragnar-blackmane",
    name: "Ragnar Blackmane",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Frostfang", tags: "sustained hits 1", a: "8", skill: "2+", s: "6", ap: "-3", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "War Howl", text: "While leading Blood Claws, that unit re-rolls melee Wound rolls; while leading Wolf Guard Headtakers, that unit can charge after Advancing." },
      { name: "Battle-lust", text: "When this model ends a Charge move, its Frostfang weapon gets +2 Attacks until the end of the turn." }
    ],
    keywords: ["INFANTRY", "IMPERIUM", "TACTICUS", "CAPTAIN", "RAGNAR BLACKMANE", "CHARACTER", "GRENADES", "EPIC HERO"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Ragnar Blackmane – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "krom-dragongaze",
    name: "Krom Dragongaze",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Wyrmclaw", tags: "lethal hits", a: "6", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Refuse to Accept Defeat", text: "While this model is leading a unit, that unit's attacks get +1 to hit if below Starting Strength, and +1 to wound too if Below Half-strength." },
      { name: "The Fierce Eye", text: "In your Shooting phase, force one visible enemy Infantry unit within 12\" to take a Battle-shock test." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "GRENADES", "IMPERIUM", "CAPTAIN", "KROM DRAGONGAZE"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Krom Dragongaze.",
    points: [{ models: 1, pts: 65 }],
  },
  {
    id: "harald-deathwolf",
    name: "Harald Deathwolf",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "10\"", T: "6", Sv: "3+", W: "7", Ld: "6+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crushing teeth and claws", tags: "extra attacks", a: "3", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Glacius", tags: "", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Lord of the Wolfkin", text: "While this model is leading a unit, its crushing teeth and claws weapons gain Devastating Wounds when it charges, until end of turn." },
      { name: "Mantle of the Troll King", text: "Once per phase, after a saving throw against this model, you can reduce that attack's Damage to 0." }
    ],
    keywords: ["MOUNTED", "CHARACTER", "EPIC HERO", "IMPERIUM", "GRENADES", "HARALD DEATHWOLF", "CAPTAIN"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Harald Deathwolf – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "canis-wolfborn",
    name: "Canis Wolfborn",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "10\"", T: "6", Sv: "3+", W: "6", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crushing teeth and claws", tags: "extra attacks", a: "3", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Wolf claws", tags: "twin-linked", a: "8", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Born of Wolves", text: "While this model is leading a unit, that unit's melee weapons gain Sustained Hits 1." },
      { name: "Alpha Predator", text: "When this model ends a Charge move, roll a D6 for one engaged enemy: 2-3 deals D3 mortal wounds, 4-5 deals 3, 6 deals D3+3." }
    ],
    keywords: ["MOUNTED", "CHARACTER", "IMPERIUM", "CANIS WOLFBORN", "EPIC HERO"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Canis Wolfborn – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "njal-stormcaller",
    name: "Njal Stormcaller",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Living Lightning – witchfire", tags: "psychic, sustained hits 2", range: "24\"", a: "D6", skill: "3+", s: "7", ap: "-1", d: "1" },
      { name: "Living Lightning – focused witchfire", tags: "hazardous, psychic, sustained hits 2", range: "24\"", a: "2D6", skill: "3+", s: "7", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Staff of the Stormcaller", tags: "psychic, sustained hits 2", a: "4", skill: "3+", s: "7", ap: "-1", d: "D3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Wind Walker (Psychic)", text: "While this model is leading a unit, its ranged weapons gain Assault, and Advancing adds a flat 6\" instead of rolling." },
      { name: "Tempest’s Wrath (Psychic)", text: "After this model's unit shoots, an enemy hit by its Living Lightning weapon is Stormwracked until your next turn, suffering movement penalties." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "PSYKER", "IMPERIUM", "TACTICUS", "NJAL STORMCALLER"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Njal Stormcaller – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "ulrik-the-slayer",
    name: "Ulrik The Slayer",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Artificer crozius arcanum", tags: "ANTI-MONSTER 4+, ANTI-VEHICLE 4+", a: "5", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Slayer’s Oath", text: "At the start of the battle, pick Character, Monster, or Vehicle as this model's Slayer's Oath — the first time its unit destroys a matching unit, it gains a bonus for the rest of the battle if your Detachment has a Saga." },
      { name: "Oathbound", text: "While this model is leading a unit, its melee attacks get +1 to hit, and +1 to wound too against units matching this model's Slayer's Oath." }
    ],
    keywords: ["CHARACTER", "ULRIK THE SLAYER", "INFANTRY", "EPIC HERO", "GRENADES", "IMPERIUM", "WOLF PRIEST"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Ulrik the Slayer – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "bjorn-the-fell-handed",
    name: "Bjorn The Fell-handed",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "9\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "2+", s: "6", ap: "0", d: "1" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Helfrost cannon – dispersed", tags: "torrent", range: "12\"", a: "D6", skill: "N/A", s: "6", ap: "-1", d: "2" },
      { name: "Helfrost cannon – focused", tags: "", range: "36\"", a: "1", skill: "2+", s: "10", ap: "-3", d: "5" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "2+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Trueclaw", tags: "lethal hits", a: "6", skill: "2+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Legendary Tenacity", text: "When attacked by something with higher Strength than this model's Toughness, subtract 1 from the Wound roll." },
      { name: "Ancient Tactician", text: "At the start of your Command phase, if this model is on the battlefield, gain 1 Command Point." }
    ],
    keywords: ["CHARACTER", "WALKER", "VEHICLE", "DREADNOUGHT", "SMOKE", "BJORN THE FELL-HANDED", "EPIC HERO", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Bjorn the Fell-Handed– <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "wulfen",
    name: "Wulfen",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "9\"", T: "6", Sv: "4+", W: "2", Ld: "7+", OC: "0" },
    rangedWeapons: [
      { name: "Stormfrag auto-launcher", tags: "assault, blast", range: "12\"", a: "D3", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Wulfen weapons", tags: "sustained hits 1", a: "3", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Curse of the Wulfen", text: "While within range of certain Space Wolves Characters and not Battle-shocked, this unit's Objective Control increases (+1 for Infantry, +3 for Vehicles)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Savage Frenzy", text: "Enemy units (not Monster/Vehicle) Falling Back within Engagement Range must take a Desperate Escape test, at -1 if already Battle-shocked." },
      { name: "Death Totem", text: "The bearer can re-roll a Hit roll of 1 on melee attacks." }
    ],
    keywords: ["IMPERIUM", "INFANTRY", "WULFEN"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "5-10 Wulfen.",
    points: [{ models: 5, pts: 85 }, { models: 10, pts: 170 }],
  },
  {
    id: "arjac-rockfist",
    name: "Arjac Rockfist",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "6\"", T: "5", Sv: "2+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Foehammer", tags: "anti-monster 3+, anti-vehicle 3+, assault", range: "6\"", a: "1", skill: "2+", s: "8", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Foehammer", tags: "anti-monster 3+, anti-vehicle 3+, precision", a: "5", skill: "2+", s: "8", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Anvil of Endurance", text: "While this model is leading a unit, a model in that unit destroyed by melee before fighting can, on a 4+, fight anyway before being removed." },
      { name: "Champion of the Kingsguard", text: "When this model makes a melee attack against a Character, you can re-roll both the Hit roll and the Wound roll." }
    ],
    keywords: ["INFANTRY", "EPIC HERO", "CHARACTER", "ARJAC ROCKFIST", "TERMINATOR", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Arjac Rockfist – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "wolf-guard-terminators",
    name: "Wolf Guard Terminators",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "2+", s: "6", ap: "0", d: "1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Relic greataxe", tags: "devastating wounds", a: "3", skill: "3+", s: "7", ap: "-2", d: "3" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "6", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rugged Resilience", text: "When attacked by something with higher Strength than this unit's Toughness, subtract 1 from the Wound roll." },
      { name: "Storm Shield", text: "The bearer has a 4+ invulnerable save." }
    ],
    keywords: ["IMPERIUM", "INFANTRY", "WOLF GUARD TERMINATORS", "WOLF GUARD", "TERMINATOR"],
    factionKeywords: ["SPACE WOLVES", "ADEPTUS ASTARTES"],
    composition: "1 Wolf Guard Terminator Pack Leader; 4-9 Wolf Guard Terminators.",
    points: [{ models: 5, pts: 155 }, { models: 10, pts: 310 }],
  },
  {
    id: "thunderwolf-cavalry",
    name: "Thunderwolf Cavalry",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "12\"", T: "6", Sv: "3+", W: "4", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Teeth and claws", tags: "extra attacks", a: "3", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Wolf Guard weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Thunderous Charge", text: "If this unit charged this turn, its Wolf Guard weapon attacks get +1 Damage." },
      { name: "Storm Shield", text: "The bearer has a 4+ invulnerable save." }
    ],
    keywords: ["THUNDERWOLF CAVALRY", "MOUNTED", "GRENADES", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Thunderwolf Cavalry Pack Leader; 2-5 Thunderwolf Cavalry.",
    points: [{ models: 3, pts: 100 }, { models: 6, pts: 200 }],
  },
  {
    id: "fenrisian-wolves",
    name: "Fenrisian Wolves",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "10\"", T: "4", Sv: "6+", W: "1", Ld: "8+", OC: "0" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Teeth and claws", tags: "", a: "3", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Predatory Instinct", text: "In your opponent's Movement phase, if an enemy ends a move within 8\" and this unit isn't engaged, it can make a Normal move of up to D6\"." },
      { name: "Hunting Hounds", text: "While within 6\" of a friendly Space Wolves Character (not Wulfen) and not Battle-shocked, this unit's models have Objective Control 1." }
    ],
    keywords: ["BEASTS", "IMPERIUM", "FENRISIAN WOLVES"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "5-10 Fenrisian Wolves.",
    points: [{ models: 5, pts: 45 }, { models: 10, pts: 75 }],
  },
  {
    id: "skyclaws",
    name: "Skyclaws",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Grav-gun", tags: "anti-vehicle 2+", range: "18\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma gun – standard", tags: "rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "hazardous, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "3", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Headstrong", text: "You can re-roll Charge rolls for this unit, and its melee attacks get +1 to hit for the rest of the turn after it charges." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["FLY", "IMPERIUM", "SKYCLAWS", "INFANTRY", "JUMP PACK", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Skyclaw Pack Leader; 4-14 Skyclaws.",
    points: [{ models: 5, pts: 90 }, { models: 10, pts: 165 }, { models: 15, pts: 240 }],
  },
  {
    id: "incursor-squad",
    name: "Incursor Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Occulus bolt carbine", tags: "assault, ignores cover", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Paired combat blades", tags: "sustained hits 1", a: "3", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Multi-spectrum Array", text: "After this unit shoots, pick a hit enemy — friendly Adeptus Astartes attacks against it get +1 to hit for the rest of the phase." },
      { name: "Haywire Mine", text: "Once per battle, target an enemy within 3\" of the bearer and roll a D6 — on a 2+, it takes D3 mortal wounds (2D3 if a Vehicle)." }
    ],
    keywords: ["IMPERIUM", "SMOKE", "GRENADES", "INCURSOR SQUAD", "INFANTRY", "PHOBOS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Incursor Sergeant; 4-9 Incursors.",
    points: [{ models: 5, pts: 85 }, { models: 10, pts: 150 }],
  },
  {
    id: "sicaran-arcus",
    name: "Sicaran Arcus",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "11", Sv: "2+", W: "14", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Arcus multi-launcher", tags: "indirect fire", range: "48\"", a: "2D6", skill: "3+", s: "6", ap: "0", d: "2" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Specialised Weapon System", text: "This model's attacks against its Oath of Moment target gain Ignores Cover and ignore the Indirect Fire penalty against unseen targets." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["SMOKE", "IMPERIUM", "VEHICLE", "FRAME", "SICARAN ARCUS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Sicaran Arcus.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "sergeant-telion",
    name: "Sergeant Telion",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "4+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Quietus", tags: "precision", range: "36\"", a: "2", skill: "2+", s: "4", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Combat knife", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Voice of Experience", text: "While this model is leading a unit, that unit gets +1 Objective Control and +1 to hit with its attacks." },
      { name: "Guiding Hand", text: "While this model is leading a unit, pick Lethal Hits, Precision, or Sustained Hits 1 to apply to that unit's weapons each time it shoots or fights." }
    ],
    keywords: ["EPIC HERO", "IMPERIUM", "CHARACTER", "INFANTRY", "SERGEANT TELION"],
    factionKeywords: ["ULTRAMARINES", "ADEPTUS ASTARTES"],
    composition: "1 Sergeant Telion – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "sicaran-omega",
    name: "Sicaran Omega",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "11", Sv: "2+", W: "14", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Omega plasma array – standard", tags: "", range: "36\"", a: "6", skill: "3+", s: "9", ap: "-3", d: "2" },
      { name: "Omega plasma array – supercharge", tags: "hazardous", range: "36\"", a: "6", skill: "3+", s: "10", ap: "-3", d: "3" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Overwhelming Short-range Firepower", text: "When this model attacks the closest eligible enemy, re-roll a Hit roll of 1 and a Wound roll of 1." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["SICARAN OMEGA", "SMOKE", "VEHICLE", "FRAME", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Sicaran Omega.",
    points: [{ models: 1, pts: 180 }],
  },
  {
    id: "thunderfire-cannon",
    name: "Thunderfire Cannon",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "3\"", T: "6", Sv: "2+", W: "6", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Thunderfire cannon", tags: "blast, indirect fire", range: "48\"", a: "D6+4", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Gunner’s servo-arms", tags: "extra attacks", a: "2", skill: "3+", s: "8", ap: "-2", d: "3" },
      { name: "Plasma cutter", tags: "extra attacks", a: "2", skill: "3+", s: "8", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tremor Shells", text: "After this unit shoots, an Infantry unit hit by its thunderfire cannon is Shaken until your opponent's next turn, reducing its Move by 2." },
      { name: "Crewed Artillery", text: "If one model in this unit is destroyed, the remaining model is destroyed too." }
    ],
    keywords: ["THUNDERFIRE CANNON", "VEHICLE", "FRAME", "IMPERIUM", "ARTILLERY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Techmarine Gunner; 1 Thunderfire Cannon.",
    points: [{ models: 2, pts: 90 }],
  },
  {
    id: "bladeguard-ancient",
    name: "Bladeguard Ancient",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "5", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Astartes Banner", text: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
      { name: "Deeds of Heroism", text: "Once per battle, when this model is selected to fight, its unit's melee weapons get +1 Attacks until the end of the phase." }
    ],
    keywords: ["DEATHWING", "TACTICUS", "CHARACTER", "GRENADES", "IMPERIUM", "ANCIENT", "BLADEGUARD ANCIENT", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Bladeguard Ancient.",
    points: [{ models: 1, pts: 40 }],
  },
  {
    id: "captain-in-gravis-armour",
    name: "Captain In Gravis Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Boltstorm gauntlet", tags: "pistol", range: "12\"", a: "3", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Master-crafted heavy bolt rifle", tags: "assault, heavy", range: "30\"", a: "2", skill: "2+", s: "5", ap: "-1", d: "3" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic blade", tags: "extra attacks", a: "2", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Relic chainsword", tags: "extra attacks", a: "3", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Relic fist", tags: "extra attacks", a: "1", skill: "2+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Refuse to Yield", text: "Attacks allocated to this model have their Damage halved." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "GRENADES", "IMPERIUM", "GRAVIS", "CAPTAIN"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Captain in Gravis Armour.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "kratos",
    name: "Kratos",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "18", Ld: "6+", OC: "6" },
    rangedWeapons: [
      { name: "Autocannon", tags: "", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Combi-weapon", tags: "ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Havoc launcher", tags: "blast", range: "48\"", a: "D6", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "SUSTAINED HITS 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6 ", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Kratos battle cannon – AP", tags: "heavy", range: "36\"", a: "1", skill: "3+", s: "18", ap: "-4", d: "D6+3" },
      { name: "Kratos battle cannon – HE", tags: "blast", range: "36\"", a: "D6+3", skill: "3+", s: "10", ap: "-1", d: "3" },
      { name: "Lascannons", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Melta blast-gun", tags: "melta 2", range: "24\"", a: "4", skill: "3+", s: "12", ap: "-4", d: "D6" },
      { name: "Multi-melta", tags: "MELTA 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Volkite caliver", tags: "devastating wounds", range: "24\"", a: "2", skill: "3+", s: "5", ap: "0", d: "2" },
      { name: "Volkite cardanelle", tags: "devastating wounds", range: "36\"", a: "9", skill: "3+", s: "9", ap: "0", d: "3" },
      { name: "Volkite culverin", tags: "devastating wounds", range: "36\"", a: "4", skill: "3+", s: "6", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Line-breaker", text: "This model can target enemies within Engagement Range with Blast weapons (if no other friendly unit is also engaged with them), and doesn't suffer the usual penalty for shooting while engaged." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["FRAME", "VEHICLE", "SMOKE", "IMPERIUM", "KRATOS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Kratos.",
    points: [{ models: 1, pts: 240 }],
  },
  {
    id: "vindicator-laser-destroyer",
    name: "Vindicator Laser Destroyer",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "9\"", T: "11", Sv: "2+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Laser volley cannon – overcharge fire", tags: "hazardous", range: "36\"", a: "3", skill: "3+", s: "14", ap: "-4", d: "D6+3" },
      { name: "Laser volley cannon – volley fire", tags: "", range: "36\"", a: "3", skill: "3+", s: "12", ap: "-3", d: "D3+3" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Annihilator", text: "When this model attacks a Monster/Vehicle, re-roll a Damage roll of 1." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["FRAME", "IMPERIUM", "VEHICLE", "VINDICATOR LASER DESTROYER", "SMOKE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Vindicator Laser Destroyer.",
    points: [{ models: 1, pts: 175 }],
  },
  {
    id: "ancient-on-bike",
    name: "Ancient on Bike",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "5", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "5", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Astartes Banner", text: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
      { name: "Unbreakable Duty", text: "While within range of an objective or within 6\" of the battlefield centre, this model has Feel No Pain 4+." }
    ],
    keywords: ["RAVENWING", "GRENADES", "ANCIENT", "CHARACTER", "MOUNTED", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Ancient on Bike.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "terminus-ultra",
    name: "Terminus Ultra",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Terminus lascannon – standard", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Terminus lascannon – overload", tags: "hazardous, twin-linked", range: "48\"", a: "1", skill: "3+", s: "14", ap: "-3", d: "D6+3" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["FRAME", "TERMINUS ULTRA", "IMPERIUM", "TRANSPORT", "SMOKE", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Terminus Ultra.",
    points: [{ models: 1, pts: 285 }],
  },
  {
    id: "sicaran-battle-tank",
    name: "Sicaran Battle Tank",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "11", Sv: "2+", W: "14", Ld: "6+", OC: "4" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Herakles-pattern autocannon", tags: "rapid fire 2", range: "48\"", a: "6", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Armoured Spearhead", text: "This model's attacks re-roll a Hit roll of 1, or any Hit roll if the target is on an objective you don't control." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "FRAME", "IMPERIUM", "SMOKE", "SICARAN BATTLE TANK"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Sicaran Battle Tank.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "vindicator",
    name: "Vindicator",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "9\"", T: "11", Sv: "2+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Demolisher cannon", tags: "blast", range: "24\"", a: "D6+3", skill: "3+", s: "14", ap: "-3", d: "D6" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Siege Shield", text: "This model's demolisher cannon can target enemies within Engagement Range (if no other friendly unit is also engaged), without the usual shooting-while-engaged penalty." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["SMOKE", "IMPERIUM", "FRAME", "VINDICATOR", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Vindicator.",
    points: [{ models: 1, pts: 185 }],
  },
  {
    id: "librarian-with-jump-pack",
    name: "Librarian with Jump Pack",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Smite – witchfire", tags: "psychic", range: "24\"", a: "D6", skill: "3+", s: "5", ap: "-1", d: "D3" },
      { name: "Smite – focused witchfire", tags: "devastating wounds, hazardous, psychic", range: "24\"", a: "D6", skill: "3+", s: "6", ap: "-2", d: "D3" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Force weapon", tags: "psychic", a: "4", skill: "3+", s: "6", ap: "-1", d: "D3" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Psychic Hood", text: "While this model is leading a unit, that unit has the Feel No Pain 4+ ability specifically against Psychic Attacks." },
      { name: "Might of Heroes (Psychic)", text: "While this model is leading a unit, that unit's melee weapons get +1 Armour Penetration." }
    ],
    keywords: ["INFANTRY", "JUMP PACK", "FLY", "PSYKER", "GRENADES", "IMPERIUM", "LIBRARIAN", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Librarian with Jump Pack.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "lieutenant-in-reiver-armour",
    name: "Lieutenant In Reiver Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Master-crafted special issue bolt pistol", tags: "pistol, precision", range: "12\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Combat knife", tags: "precision", a: "6", skill: "2+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tactical Precision", text: "While this model is leading a unit, that unit's weapons gain Lethal Hits." },
      { name: "Deadly Terror", text: "While this model is leading a unit, that unit's Terror Troops ability range increases by 3\"." }
    ],
    keywords: ["GRENADES", "SMOKE", "CHARACTER", "INFANTRY", "LIEUTENANT IN REIVER ARMOUR", "LIEUTENANT", "PHOBOS", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Lieutenant in Reiver Armour.",
    points: [{ models: 1, pts: 45 }],
  },
  {
    id: "land-raider-prometheus",
    name: "Land Raider Prometheus",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Quad heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "6", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["IMPERIUM", "SMOKE", "FRAME", "TRANSPORT", "VEHICLE", "LAND RAIDER PROMETHEUS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Raider Prometheus.",
    points: [{ models: 1, pts: 250 }],
  },
  {
    id: "librarian-on-bike",
    name: "Librarian on Bike",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "5", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Smite – focused witchfire", tags: "devastating wounds, hazardous, psychic", range: "24\"", a: "D6", skill: "3+", s: "6", ap: "-2", d: "D3" },
      { name: "Smite – witchfire", tags: "psychic", range: "24\"", a: "D6", skill: "3+", s: "5", ap: "-1", d: "D3" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Force weapon", tags: "psychic", a: "4", skill: "3+", s: "6", ap: "-1", d: "D3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Psychic Hood", text: "While this model is leading a unit, that unit has the Feel No Pain 4+ ability specifically against Psychic Attacks." },
      { name: "Mental Fortress (Psychic)", text: "While this model is leading a unit, that unit has a 4+ invulnerable save." }
    ],
    keywords: ["RAVENWING", "LIBRARIAN", "IMPERIUM", "PSYKER", "CHARACTER", "MOUNTED", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Librarian on Bike.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "land-raider-achilles",
    name: "Land Raider Achilles",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5", InvSv: "4+" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Quad launcher – shatter shells", tags: "", range: "24\"", a: "4", skill: "3+", s: "9", ap: "-2", d: "3" },
      { name: "Quad launcher – thunderfire shells", tags: "blast, indirect fire", range: "60\"", a: "D6+4", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin multi-melta", tags: "melta 2, twin-linked", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin volkite culverin", tags: "devastating wounds, twin-linked", range: "36\"", a: "4", skill: "3+", s: "6", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["LAND RAIDER ACHILLES", "IMPERIUM", "SMOKE", "FRAME", "VEHICLE", "TRANSPORT"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Raider Achilles.",
    points: [{ models: 1, pts: 230 }],
  },
  {
    id: "chief-librarian-tigurius",
    name: "Chief Librarian Tigurius",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Storm of the Emperor’s Wrath – witchfire", tags: "blast, psychic", range: "18\"", a: "D6", skill: "2+", s: "6", ap: "-2", d: "2" },
      { name: "Storm of the Emperor’s Wrath – focused witchfire", tags: "blast, hazardous, psychic", range: "18\"", a: "2D6", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Rod of Tigurius", tags: "psychic", a: "5", skill: "3+", s: "7", ap: "-2", d: "D3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Hood of Hellfire", text: "While this model is leading a unit, that unit has Feel No Pain 4+ against Psychic Attacks and mortal wounds." },
      { name: "Master of Prescience (Psychic)", text: "This unit has Stealth, melee attacks against it get -1 to hit, and once per battle round it can reduce the CP cost of a Counter-offensive/Fire Overwatch/Heroic Intervention Stratagem used on it by 1." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "PSYKER", "IMPERIUM", "TACTICUS", "CHIEF LIBRARIAN TIGURIUS"],
    factionKeywords: ["ULTRAMARINES", "ADEPTUS ASTARTES"],
    composition: "1 Chief Librarian Tigurius – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "hellblaster-squad",
    name: "Hellblaster Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma incinerator – standard", tags: "assault, heavy", range: "24\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma incinerator – supercharge", tags: "assault, hazardous, heavy", range: "24\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "For the Chapter!", text: "When a model in this unit is destroyed, on a 3+ it can shoot back before being removed, even if the destruction was from a failed Hazardous test." },
      { name: "Designer’s Note", text: "This ability still triggers even if the model was destroyed by failing a Hazardous test, potentially letting it shoot twice in a phase." }
    ],
    keywords: ["TACTICUS", "GRENADES", "INFANTRY", "IMPERIUM", "HELLBLASTER SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Hellblaster Sergeant; 4-9 Hellblasters.",
    points: [{ models: 5, pts: 110 }, { models: 10, pts: 220 }],
  },
  {
    id: "adrax-agatone",
    name: "Adrax Agatone",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Drakkis", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6+3", skill: "N/A", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Malleus Noctum", tags: "", a: "5", skill: "2+", s: "10", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Unto the Anvil", text: "While this model is leading a unit, that unit's melee attacks can re-roll the Wound roll." },
      { name: "Lord of the Pyroclasts", text: "While an enemy unit is within Engagement Range of this model, its Objective Control is halved." }
    ],
    keywords: ["ADRAX AGATONE", "TACTICUS", "INFANTRY", "CAPTAIN", "EPIC HERO", "IMPERIUM", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES", "SALAMANDERS"],
    composition: "1 Adrax Agatone – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "land-raider-redeemer",
    name: "Land Raider Redeemer",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Flamestorm cannon", tags: "ignores cover, torrent", range: "12\"", a: "D6+3", skill: "N/A", s: "6", ap: "-2", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["TRANSPORT", "DEATHWING", "GRENADES", "LAND RAIDER REDEEMER", "LAND RAIDER", "FRAME", "IMPERIUM", "SMOKE", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Raider Redeemer.",
    points: [{ models: 1, pts: 260 }],
  },
  {
    id: "primaris-company-champion",
    name: "Primaris Company Champion",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "precision", a: "5", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Honour or Death", text: "While this model is leading a unit, that unit gets +1 to Advance and Charge rolls; using Heroic Intervention on this unit costs 1 less CP." },
      { name: "Martial Superiority", text: "When this model makes a melee attack against a Character, you can re-roll both the Hit roll and the Wound roll." }
    ],
    keywords: ["PRIMARIS COMPANY CHAMPION", "INFANTRY", "GRENADES", "CHARACTER", "IMPERIUM", "TACTICUS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Primaris Company Champion.",
    points: [{ models: 1, pts: 55 }],
  },
  {
    id: "stalker",
    name: "Stalker",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "9\"", T: "11", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Icarus stormcannon", tags: "anti-fly 2+", range: "48\"", a: "6", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Skyfire Protocols", text: "When this model uses Fire Overwatch against a Flying unit that just moved, you can also target up to three more enemy Fliers within 24\"." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "SMOKE", "FRAME", "STALKER", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Stalker.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "sammael",
    name: "Sammael",
    faction: "Space Marines",
    base: "60mm flying base",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "7", Ld: "6+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted plasma cannon", tags: "blast", range: "36\"", a: "D3", skill: "2+", s: "8", ap: "-3", d: "2" },
      { name: "Twin storm bolter", tags: "rapid fire 2, twin-linked", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "The Raven Sword", tags: "sustained hits 2", a: "6", skill: "2+", s: "6", ap: "-3", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Grand Master of the Ravenwing", text: "This unit's ranged attacks gain Assault, it can still charge after Advancing, and it has the Mobile ability." },
      { name: "Cut Off Their Escape", text: "Enemy units (not Monster/Vehicle) Falling Back from Engagement Range with this model's unit take Desperate Escape tests as if Battle-shocked (worse if actually Battle-shocked too)." }
    ],
    keywords: ["FLY", "MOUNTED", "CHARACTER", "GRENADES", "IMPERIUM", "FRAME", "EPIC HERO", "CAPTAIN", "SAMMAEL", "RAVENWING"],
    factionKeywords: ["DARK ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Sammael – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 105 }],
  },
  {
    id: "lazarus",
    name: "Lazarus",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Enmity’s Edge", tags: "anti-psyker 2+", a: "6", skill: "2+", s: "6", ap: "-3", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Intractable Will", text: "While this model is leading a unit, a model in that unit destroyed by melee before fighting can, on a 4+, fight anyway before being removed." },
      { name: "The Spiritshield Helm", text: "This model has Feel No Pain 3+ against Psychic Attacks and mortal wounds." }
    ],
    keywords: ["DEATHWING", "CHARACTER", "EPIC HERO", "CAPTAIN", "TACTICUS", "GRENADES", "INFANTRY", "LAZARUS", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Lazarus – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "tor-garadon",
    name: "Tor Garadon",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Artificer grav-gun", tags: "anti-vehicle 2+", range: "18\"", a: "2", skill: "2+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Hand of Defiance", tags: "", a: "5", skill: "2+", s: "12", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Signum Array", text: "While this model is leading a unit, that unit's ranged weapons gain Ignores Cover." },
      { name: "Siege Captain", text: "This model's attacks against Monster/Vehicle/Fortification targets get +2 Strength, +2 Armour Penetration, and +2 Damage." }
    ],
    keywords: ["TOR GARADON", "GRAVIS", "CAPTAIN", "INFANTRY", "CHARACTER", "EPIC HERO", "IMPERIUM"],
    factionKeywords: ["IMPERIAL FISTS", "ADEPTUS ASTARTES"],
    composition: "1 Tor Garadon – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "lieutenant-in-phobos-armour",
    name: "Lieutenant In Phobos Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted scoped bolt carbine", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Paired combat blades", tags: "sustained hits 1", a: "5", skill: "2+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tactical Precision", text: "While this model is leading a unit, that unit's weapons gain Lethal Hits." },
      { name: "Strategic Dispersal", text: "After this model's unit shoots, if unengaged, it can make a Normal move of up to 6\" — but can't charge this turn if it does." }
    ],
    keywords: ["LIEUTENANT", "PHOBOS", "IMPERIUM", "GRENADES", "CHARACTER", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Lieutenant in Phobos Armour.",
    points: [{ models: 1, pts: 45 }],
  },
  {
    id: "chaplain-cassius",
    name: "Chaplain Cassius",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Infernus", tags: "anti-infantry 4+, devastating wounds, ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Artificer crozius", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Catechism of Death", text: "While this model is leading a unit, that unit's melee weapons gain Devastating Wounds." },
      { name: "Inspired Retribution", text: "While this model is leading a unit, a model in that unit destroyed by melee before fighting can, on a 4+, fight anyway before being removed." }
    ],
    keywords: ["CHAPLAIN CASSIUS", "IMPERIUM", "EPIC HERO", "CHARACTER", "INFANTRY"],
    factionKeywords: ["ULTRAMARINES", "ADEPTUS ASTARTES"],
    composition: "1 Chaplain Cassius – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "captain-in-phobos-armour",
    name: "Captain In Phobos Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Instigator bolt carbine", tags: "precision", range: "24\"", a: "1", skill: "2+", s: "4", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Combat knife", tags: "", a: "6", skill: "2+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Master of Deceit", text: "After deployment, you can redeploy up to three friendly Adeptus Astartes Infantry units, including into Strategic Reserves." }
    ],
    keywords: ["CAPTAIN", "PHOBOS", "IMPERIUM", "GRENADES", "CHARACTER", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Captain in Phobos Armour.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "centurion-assault-squad",
    name: "Centurion Assault Squad",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "4\"", T: "7", Sv: "2+", W: "4", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Centurion bolters", tags: "rapid fire 3, twin-linked", range: "24\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin flamer", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Twin meltagun", tags: "melta 2, twin-linked", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Siege drills", tags: "twin-linked", a: "3", skill: "3+", s: "10", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Annihilator Protocols", text: "This unit's melee weapons gain Sustained Hits 2 against Monster/Vehicle/Fortification targets." },
      { name: "Centurion Assault Launcher", text: "The bearer has the Grenades keyword." }
    ],
    keywords: ["IMPERIUM", "INFANTRY", "CENTURION ASSAULT SQUAD", "CENTURION"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Assault Centurion Sergeant; 2-5 Assault Centurions.",
    points: [{ models: 3, pts: 150 }, { models: 6, pts: 300 }],
  },
  {
    id: "judiciar",
    name: "Judiciar",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Executioner relic blade", tags: "devastating wounds, precision", a: "5", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tempormortis", text: "While this model is leading a unit, that unit has Fights First." },
      { name: "Silent Fury", text: "When this model destroys an enemy Character, its executioner relic blade gets +1 Attacks for the rest of the battle." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "IMPERIUM", "TACTICUS", "JUDICIAR"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Judiciar.",
    points: [{ models: 1, pts: 55 }],
  },
  {
    id: "land-raider-helios",
    name: "Land Raider Helios",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Godhammer lascannons", tags: "", range: "48\"", a: "2", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Helios launcher", tags: "anti-fly 3+", range: "48\"", a: "3", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "SMOKE", "TRANSPORT", "FRAME", "IMPERIUM", "LAND RAIDER HELIOS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Raider Helios.",
    points: [{ models: 1, pts: 220 }],
  },
  {
    id: "predator-annihilator",
    name: "Predator Annihilator",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Predator twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Annihilator", text: "When this model attacks a Monster/Vehicle, re-roll a Damage roll of 1." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["FRAME", "SMOKE", "VEHICLE", "PREDATOR ANNIHILATOR", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Predator Annihilator.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "predator-destructor",
    name: "Predator Destructor",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Predator autocannon", tags: "rapid fire 2", range: "48\"", a: "4", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Destructor", text: "When this model attacks an Infantry unit, add 1 to that attack's Armour Penetration." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["SMOKE", "IMPERIUM", "FRAME", "PREDATOR DESTRUCTOR", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Predator Destructor.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "relic-contemptor-dreadnought",
    name: "Relic Contemptor Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "6\"", T: "9", Sv: "2+", W: "10", Ld: "6+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Combi-bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Conversion beam cannon", tags: "conversion, sustained hits d3", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-1", d: "3" },
      { name: "Cyclone missile launcher – frag", tags: "BLAST", range: "36\"", a: "2D6 ", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – krak", tags: "", range: "36\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Graviton blaster", tags: "anti-vehicle 2+", range: "18\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Twin autocannon", tags: "TWIN-LINKED", range: "48\"", a: "2", skill: "3+", s: "9", ap: "-1", d: "3" },
      { name: "Twin heavy bolter", tags: "TWIN-LINKED, SUSTAINED HITS 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "TWIN-LINKED", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Heavy flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6 ", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Heavy plasma cannon – standard", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Heavy plasma cannon – supercharge", tags: "blast, hazardous", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "Kheres-pattern assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "7", ap: "-1", d: "1" },
      { name: "Multi-melta", tags: "MELTA 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma blaster – standard", tags: "", range: "18\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma blaster – supercharge", tags: "HAZARDOUS", range: "18\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Twin volkite culverin", tags: "devastating wounds, twin-linked", range: "36\"", a: "4", skill: "3+", s: "6", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured feet", tags: "", a: "5", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Dreadnought chainfist", tags: "anti-vehicle 3+", a: "4", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Dreadnought combat weapon", tags: "", a: "5", skill: "3+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Even In Death I Serve", text: "The first time this model is destroyed, it skips Deadly Demise — then at the end of the phase, on a 2+, it's set back up nearby with reduced wounds." },
      { name: "Conversion", text: "Attacks with this weapon against targets more than 12\" away score a Critical Hit on an unmodified 4+." }
    ],
    keywords: ["IMPERIUM", "DREADNOUGHT", "RELIC CONTEMPTOR DREADNOUGHT", "DEATHWING", "WALKER", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Relic Contemptor Dreadnought.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "relic-razorback",
    name: "Relic Razorback",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "9", Sv: "3+", W: "10", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fire Support", text: "After this model shoots, pick an enemy unit it hit — friendly models that disembarked from this Transport this turn can re-roll Wound rolls against that unit for the rest of the phase." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "SMOKE", "TRANSPORT", "DEDICATED TRANSPORT", "FRAME", "IMPERIUM", "RELIC RAZORBACK"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Relic Razorback.",
    points: [{ models: 1, pts: 105 }],
  },
  {
    id: "repulsor",
    name: "Repulsor",
    faction: "Space Marines",
    base: "100mm",
    stats: { M: "10\"", T: "12", Sv: "3+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Heavy onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "12", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Hunter-slayer missile", tags: "indirect fire, one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Las-talon", tags: "", range: "36\"", a: "2", skill: "3+", s: "10", ap: "-3", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Repulsor defensive array", tags: "", range: "24\"", a: "18", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Stabilised Disembarkation", text: "If this Transport is shot at, after the attack resolves it can let embarked units disembark and be set up anywhere legal, not just adjacent." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["TRANSPORT", "VEHICLE", "REPULSOR", "SMOKE", "IMPERIUM", "FRAME"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Repulsor.",
    points: [{ models: 1, pts: 170 }],
  },
  {
    id: "whirlwind",
    name: "Whirlwind",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Whirlwind vengeance launcher", tags: "blast, indirect fire", range: "72\"", a: "D6+3", skill: "3+", s: "8", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Pinning Bombardment", text: "After this model shoots, an Infantry unit hit by its Whirlwind vengeance launcher must take a Battle-shock test." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "SMOKE", "IMPERIUM", "FRAME", "WHIRLWIND"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Whirlwind.",
    points: [{ models: 1, pts: 175 }],
  },
  {
    id: "whirlwind-scorpius",
    name: "Whirlwind Scorpius",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Scorpius multi-launcher", tags: "blast, indirect fire", range: "48\"", a: "2D3+3", skill: "3+", s: "6", ap: "-1", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Pinning Bombardment", text: "After this model shoots, an Infantry unit hit by its Whirlwind vengeance launcher must take a Battle-shock test." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["SMOKE", "FRAME", "IMPERIUM", "WHIRLWIND SCORPIUS", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Whirlwind Scorpius.",
    points: [{ models: 1, pts: 115 }],
  },
  {
    id: "sanguinary-priest-with-jump-pack",
    name: "Sanguinary Priest With Jump Pack",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "5", skill: "2+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Sanguinary Priest", text: "While this model is leading a unit, that unit has Feel No Pain 5+." },
      { name: "Blood Chalice", text: "While this model is leading a unit, that unit's melee weapons get +1 Armour Penetration." }
    ],
    keywords: ["FLY", "SANGUINARY PRIEST", "JUMP PACK", "INFANTRY", "CHARACTER", "GRENADES", "IMPERIUM"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Sanguinary Priest.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "company-heroes",
    name: "Company Heroes",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt Pistol", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt rifle", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Master-crafted bolt rifle", tags: "DEVASTATING WOUNDS, RAPID FIRE 1", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Master-crafted heavy bolter", tags: "HEAVY, SUSTAINED HITS 2", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "3" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "5", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted power weapon", tags: "PRECISION", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Astartes Banner", text: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
      { name: "Command Squad", text: "While a Character is leading this unit, attacks against it take -1 to the Wound roll." }
    ],
    keywords: ["COMPANY HEROES", "ANCIENT", "TACTICUS", "IMPERIUM", "GRENADES", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Ancient; 1 Company Champion; 2 Company Veterans.",
    points: [{ models: 4, pts: 105 }],
  },
  {
    id: "apothecary",
    name: "Apothecary",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "PISTOL", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Reductor pistol", tags: "PISTOL", range: "3\"", a: "1", skill: "3+", s: "4", ap: "-4", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Narthecium", text: "While this model is leading a unit, in your Command phase you can return 1 destroyed model (not Characters) to that unit." },
      { name: "Gene-seed Recovery", text: "When this model's Bodyguard unit is destroyed, roll a D6 — on a 2+, you gain 1 Command Point." }
    ],
    keywords: ["CHARACTER", "GRENADES", "IMPERIUM", "TACTICUS", "APOTHECARY", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Apothecary.",
    points: [{ models: 1, pts: 40 }],
  },
  {
    id: "ancient",
    name: "Ancient",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt Pistol", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt rifle", tags: "ASSAULT, HEAVY", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "5", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Astartes Banner", text: "While this model is leading a unit, add 1 to the Objective Control characteristic of models in that unit." },
      { name: "Unbreakable Duty", text: "While within range of an objective or within 6\" of the battlefield centre, this model has Feel No Pain 4+." }
    ],
    keywords: ["ANCIENT", "TACTICUS", "IMPERIUM", "GRENADES", "CHARACTER", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Ancient.",
    points: [{ models: 1, pts: 40 }],
  },
  {
    id: "fortis-kill-team",
    name: "Fortis Kill Team",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Astartes grenade launcher – frag", tags: "blast", range: "24\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Astartes grenade launcher – krak", tags: "", range: "24\"", a: "1", skill: "3+", s: "9", ap: "-2", d: "D3" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Castellan launcher", tags: "blast, indirect fire", range: "36\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Deathwatch bolt rifle", tags: "assault, heavy, lethal hits", range: "24\"", a: "2", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Plasma incinerator – standard", tags: "assault, heavy", range: "24\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma incinerator – supercharge", tags: "assault, hazardous, heavy", range: "24\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol - standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol - supercharge", tags: "HAZARDOUS, PISTOL", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Pyreblaster", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "0", d: "1" },
      { name: "Superfrag rocket launcher", tags: "blast, heavy", range: "48\"", a: "D6+1", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Superkrak rocket launcher", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "10", ap: "-2", d: "D6+1" },
      { name: "Vengor launcher", tags: "blast, indirect fire", range: "48\"", a: "D6", skill: "2+", s: "7", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fortis Doctrines", text: "This unit's attacks get +1 to hit against a below-strength target, or +1 to hit and +1 to wound against a Below-Half-strength one." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["TACTICUS", "KILL TEAM", "FORTIS KILL TEAM", "INFANTRY", "GRENADES", "IMPERIUM"],
    factionKeywords: ["DEATHWATCH", "ADEPTUS ASTARTES"],
    composition: "10 MODELS MAXIMUM; 1 Kill Team Sergeant; 2-9 Kill Team Intercessors; 0-4 Kill Team Intercessors with plasma incinerators; 0-4 Kill Team Intercessors with heavy bolt pistols; 0‑4 Kill Team Intercessors with pyreblasters; 0‑2 Kill Team Intercessors with superfrag rocket launchers.",
    points: [{ models: 10, pts: 195 }],
  },
  {
    id: "indomitor-kill-team",
    name: "Indomitor Kill Team",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Auto boltstorm gauntlets", tags: "twin-linked", range: "18\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt pistol", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Deathwatch heavy bolt rifle", tags: "assault, heavy, lethal hits", range: "30\"", a: "2", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Deathwatch heavy bolter", tags: "assault, heavy, lethal hits, sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-2", d: "3" },
      { name: "Fragstorm grenade launcher", tags: "blast", range: "18\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Flamestorm gauntlets", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6+1", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Melta rifle", tags: "heavy, melta 2", range: "18\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Multi-melta", tags: "heavy, melta 2", range: "18\"", a: "2", skill: "4+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin power fists", tags: "twin-linked", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Indomitor Doctrines", text: "This unit's ranged attacks against the closest target, or melee attacks after charging, get +2 Strength." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["INDOMITOR KILL TEAM", "GRAVIS", "KILL TEAM", "INFANTRY", "GRENADES", "IMPERIUM"],
    factionKeywords: ["DEATHWATCH", "ADEPTUS ASTARTES"],
    composition: "10 MODELS MAXIMUM; 3‑10 Kill Team Heavy Intercessors; 0‑3 Kill Team Heavy Intercessors with power fists; 0‑3 Kill Team Heavy Intercessors with melta rifles.",
    points: [{ models: 10, pts: 275 }],
  },
  {
    id: "castellan",
    name: "Castellan",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "sustained hits 1", a: "7", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Master-crafted power weapon", tags: "lethal hits", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Vehement Aggression", text: "While this model is leading a unit, a Leadership test when it fights grants a Hit-roll re-roll on success, or a Hit-roll penalty on failure, for the rest of the phase." },
      { name: "Prioritised Eradication", text: "When this model's unit destroys an enemy unit in melee, roll a D6 — on a 4+, gain 1 Command Point." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "GRENADES", "IMPERIUM", "LIEUTENANT", "CASTELLAN", "TACTICUS"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Castellan.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "high-marshal-helbrecht",
    name: "High Marshal Helbrecht",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "6", Ld: "6+", OC: "3", InvSv: "4+" },
    rangedWeapons: [
      { name: "Ferocity", tags: "anti-infantry 4+, devastating wounds", range: "24\"", a: "2", skill: "2+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Sword of the High Marshals – strike", tags: "", a: "6", skill: "2+", s: "8", ap: "-3", d: "3" },
      { name: "Sword of the High Marshals – sweep", tags: "", a: "12", skill: "2+", s: "6", ap: "-3", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Crusade of Wrath", text: "While this model is leading a unit, that unit's melee weapons get +1 Attacks and +1 Strength." },
      { name: "High Marshal", text: "At the start of the Fight phase, pick an engaged enemy and roll a D6 (+1 per 5 models in this unit): 2-3 deals D3 mortal wounds, 4-5 deals 3, 6+ deals more." }
    ],
    keywords: ["IMPERIUM", "CHAPTER MASTER", "HIGH MARSHAL HELBRECHT", "TACTICUS", "GRENADES", "EPIC HERO", "INFANTRY", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 High Marshal Helbrecht – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 110 }],
  },
  {
    id: "marshal",
    name: "Marshal",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "lethal hits", a: "7", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Inspirational Exemplar", text: "While this model is leading a unit, that unit's melee attacks score a Critical Hit on an unmodified 5+ instead of 6." },
      { name: "Pious Fervour", text: "While this model's unit fights, its master-crafted power weapon gets +1 Attacks per nearby enemy unit within 6\" (up to +3)." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "GRENADES", "IMPERIUM", "TACTICUS", "CAPTAIN", "MARSHAL"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Marshal.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "sword-brethren-squad",
    name: "Sword Brethren Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Pyre pistol", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "sustained hits 1", a: "6", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Master-crafted power weapon", tags: "lethal hits", a: "3", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "5", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Exploit Their Cowardice", text: "After an enemy Falls Back from this unit's Engagement Range, if this unit isn't engaged with anyone else, it can make a Normal move." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["SWORD BRETHREN SQUAD", "TACTICUS", "IMPERIUM", "GRENADES", "INFANTRY"],
    factionKeywords: ["BLACK TEMPLARS", "ADEPTUS ASTARTES"],
    composition: "4-10 Sword Brothers.",
    points: [{ models: 4, pts: 100 }, { models: 5, pts: 125 }, { models: 9, pts: 225 }, { models: 10, pts: 250 }],
  },
  {
    id: "crusader-squad",
    name: "Crusader Squad",
    faction: "Space Marines",
    base: "28.5mm",
    stats: { M: "6\"", T: "4", Sv: "4+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt rifle", tags: "assault, heavy", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Neophyte firearm", tags: "assault", range: "18\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Pyre pistol", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Pyreblaster", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "sustained hits 1", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted power weapon", tags: "lethal hits", a: "3", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Righteous Zeal", text: "If this unit loses models to enemy shooting, it can make a surge move of up to D6+2\"." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["CRUSADER SQUAD", "TACTICUS", "IMPERIUM", "GRENADES", "BATTLELINE", "INFANTRY"],
    factionKeywords: ["BLACK TEMPLARS", "ADEPTUS ASTARTES"],
    composition: "1 Sword Brother; 5-11 Initiates; 4-8 Neophytes.",
    points: [{ models: 10, pts: 150 }, { models: 20, pts: 290 }],
  },
  {
    id: "hounds-of-morkai",
    name: "Hounds Of Morkai",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1", InvSv: "6+" },
    rangedWeapons: [
      { name: "Morkai bolt pistol", tags: "anti-psyker 4+, devastating wounds, pistol, precision", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Morkai combat knife", tags: "anti-psyker 4+, devastating wounds, precision", a: "4", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Morkai’s Howl", text: "In your Shooting phase, force an enemy unit within 12\" (18\" if led by a Lieutenant in Reiver Armour) to take a Battle-shock test, at -1 if it's a Psyker." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["INFANTRY", "GRENADES", "SMOKE", "IMPERIUM", "PHOBOS", "HOUNDS OF MORKAI"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Hound of Morkai Pack Leader; 4-9 Hound of Morkai.",
    points: [{ models: 5, pts: 95 }, { models: 10, pts: 190 }],
  },
  {
    id: "blood-angels-captain",
    name: "Blood Angels Captain",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "Pistol", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "2+", s: "8", ap: "-4", d: "D3" }
    ],
    meleeWeapons: [
      { name: "Master-crafted chainsword", tags: "", a: "7", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Power fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Finest Hour", text: "Once per battle, at the start of the Fight phase, this model can use this ability. If it does, until the end of the phase, add 3 to the Attacks characteristic of this model's melee weapons, and those weapons gain the Devastating Wounds ability." }
    ],
    keywords: ["CHARACTER", "GRENADES", "IMPERIUM", "TACTICUS", "CAPTAIN", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Blood Angels Captain.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "watch-master",
    name: "Watch Master",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Vigil spear", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Vigil spear", tags: "lance", a: "6", skill: "2+", s: "6", ap: "-2", d: "D3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Strategic Knowledge", text: "While this model is leading a unit, that unit can shoot and charge even after Advancing or Falling Back." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." }
    ],
    keywords: ["IMPERIUM", "CAPTAIN", "WATCH MASTER", "INFANTRY", "GRENADES", "CHARACTER"],
    factionKeywords: ["DEATHWATCH", "ADEPTUS ASTARTES"],
    composition: "1 Watch Master.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "watch-captain-artemis",
    name: "Watch Captain Artemis",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Hellfire Extremis", tags: "anti-infantry 4+, devastating wounds, ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Tactical Instinct", text: "While this model is leading a unit, that unit's weapons gain Lethal Hits." },
      { name: "Unstoppable Champion", text: "The first time this model is destroyed, on a 2+ it's set back up nearby with 1 wound remaining." }
    ],
    keywords: ["WATCH CAPTAIN ARTEMIS", "INFANTRY", "GRENADES", "IMPERIUM", "CHARACTER", "EPIC HERO", "CAPTAIN"],
    factionKeywords: ["DEATHWATCH", "ADEPTUS ASTARTES"],
    composition: "1 Watch Captain Artemis.",
    points: [{ models: 1, pts: 65 }],
  },
  {
    id: "talonstrike-kill-team",
    name: "Talonstrike Kill Team",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Assault bolters", tags: "assault, pistol, sustained hits 2, twin-linked", range: "18\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Plasma exterminators – standard", tags: "assault, pistol, twin-linked", range: "18\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Plasma exterminators – supercharge", tags: "assault, hazardous, pistol, twin-linked", range: "18\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "Plasma pistol - standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol - supercharge", tags: "HAZARDOUS, PISTOL", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Talonstrike Doctrines", text: "When this unit is set up, its weapons get +1 Armour Penetration and its melee weapons gain Lance until the end of the turn." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["TALONSTRIKE KILL TEAM", "KILL TEAM", "IMPERIUM", "GRENADES", "JUMP PACK", "FLY", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "DEATHWATCH"],
    composition: "10 MODELS MAXIMUM; 1 Kill Team Sergeant with Jump Pack; 2‑9 Kill Team Intercessors with Jump Packs; 0‑5 Kill Team Heavy Intercessors with Jump Packs.",
    points: [{ models: 10, pts: 265 }],
  },
  {
    id: "wolf-priest",
    name: "Wolf Priest",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Crozius arcanum", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Healing Balms", text: "While this model is leading a unit, in your Command phase you can return 1 destroyed model (not Characters) to that unit." },
      { name: "Litany of Hate", text: "While this model is leading a unit, add 1 to the Wound roll for that unit's melee attacks." }
    ],
    keywords: ["WOLF PRIEST", "INFANTRY", "CHARACTER", "IMPERIUM", "TACTICUS"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Wolf Priest.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "wulfen-with-storm-shields",
    name: "Wulfen with Storm Shields",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "9\"", T: "6", Sv: "4+", W: "2", Ld: "7+", OC: "0", InvSv: "4+" },
    rangedWeapons: [
      { name: "Stormfrag auto-launcher", tags: "assault, blast", range: "12\"", a: "D3", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Thunder hammer", tags: "anti-monster 3+,anti-vehicle 3+", a: "2", skill: "3+", s: "5", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Curse of the Wulfen", text: "While within range of certain Space Wolves Characters and not Battle-shocked, this unit's Objective Control increases (+1 for Infantry, +3 for Vehicles)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Hammer Blow", text: "After this unit fights, an enemy Monster/Vehicle it hit is suppressed until the next turn, taking -1 to hit on its attacks." },
      { name: "Death Totem", text: "The bearer can re-roll a Hit roll of 1 on melee attacks." }
    ],
    keywords: ["IMPERIUM", "WULFEN", "WULFEN WITH STORM SHIELDS", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "5-10 Wulfen.",
    points: [{ models: 5, pts: 100 }, { models: 10, pts: 200 }],
  },
  {
    id: "execrator",
    name: "Execrator",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Absolvor bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Pyre pistol", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crozius arcanum", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "2" },
      { name: "Master-crafted power weapon", tags: "extra attacks, lethal hits", a: "3", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Remorseless Persecution", text: "While this model is leading a unit, that unit can charge even after Advancing." },
      { name: "Condemnatory Annihilation", text: "If this model's unit destroys an enemy in the Fight phase, enemy units within 6\" must take a Battle-shock test." }
    ],
    keywords: ["TACTICUS", "INFANTRY", "CHARACTER", "EXECRATOR", "CHAPLAIN", "IMPERIUM", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Execrator.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "crusade-ancient",
    name: "Crusade Ancient",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "lethal hits", a: "5", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Vengeful Exhortation", text: "While this model is leading a unit, a model in that unit destroyed by melee before fighting can, on a 4+, fight anyway before being removed." },
      { name: "Martial Honour", text: "The first time this model's unit destroys an enemy in melee, its Objective Control becomes +5 for the rest of the battle while not Battle-shocked." }
    ],
    keywords: ["TACTICUS", "ANCIENT", "CRUSADE ANCIENT", "INFANTRY", "CHARACTER", "GRENADES", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Crusade Ancient.",
    points: [{ models: 1, pts: 40 }],
  },
  {
    id: "caanok-var",
    name: "Caanok Var",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Axiom – strike", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Axiom – sweep", tags: "", a: "10", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Cold and Calculating", text: "This model's unit's attacks against Monster/Vehicle gain Lethal Hits; against anything else, they gain Sustained Hits 1." },
      { name: "Cerebrex Logic Engine", text: "Grants an Adeptus Astartes Infantry unit Scouts 6\" during Battle Formations, and allows redeploying an Adeptus Astartes unit after deployment." }
    ],
    keywords: ["INFANTRY", "CAANOK VAR", "CAPTAIN", "TERMINATOR", "IMPERIUM", "EPIC HERO", "CHARACTER"],
    factionKeywords: ["IRON HANDS", "ADEPTUS ASTARTES"],
    composition: "1 Caanok Var – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "suboden-khan",
    name: "Suboden Khan",
    faction: "Space Marines",
    base: "90 x 52mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "8", Ld: "6+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Onslaught gatling cannon", tags: "devastating wounds", range: "24\"", a: "8", skill: "2+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Stormtooth", tags: "lance, anti-monster 4+, anti-vehicle 4+", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" },
      { name: "Power sword", tags: "", a: "8", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Spear of Chogoris", text: "This unit can shoot and charge after Advancing or Falling Back; if already able to, it instead gets +1 to Advance and Charge rolls." },
      { name: "Skilled Riders", text: "This unit's models can move through terrain features freely on any type of move." }
    ],
    keywords: ["EPIC HERO", "CHARACTER", "MOUNTED", "SUBODEN KHAN", "GRENADES", "CAPTAIN", "IMPERIUM"],
    factionKeywords: ["WHITE SCARS", "ADEPTUS ASTARTES"],
    composition: "1 Suboden Khan – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "marneus-calgar-in-armour-of-antilochus",
    name: "Marneus Calgar in Armour of Antilochus",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "6\"", T: "6", Sv: "2+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Gauntlets of Ultramar", tags: "pistol, twin-linked", range: "18\"", a: "4", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Gauntlets of Ultramar", tags: "twin-linked", a: "6", skill: "2+", s: "8", ap: "-3", d: "3" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Inspiring Leader", text: "This unit can shoot and charge even after Advancing or Falling Back." },
      { name: "Master Tactician", text: "At the start of your Command phase, if this model is your Warlord and on the battlefield, gain 1 Command Point." }
    ],
    keywords: ["TERMINATOR", "IMPERIUM", "EPIC HERO", "CHARACTER", "INFANTRY", "MARNEUS CALGAR", "CHAPTER MASTER"],
    factionKeywords: ["ULTRAMARINES", "ADEPTUS ASTARTES"],
    composition: "1 Marneus Calgar in Armour of Antilochus – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 155 }],
  },
  {
    id: "cato-sicarius",
    name: "Cato Sicarius",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Artisan plasma pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Talassarian tempest blade – strike", tags: "devastating wounds", a: "4", skill: "2+", s: "6", ap: "-3", d: "3" },
      { name: "Talassarian tempest blade – sweep", tags: "sustained hits 1", a: "9", skill: "2+", s: "5", ap: "-2", d: "1" },
      { name: "Talassarian tempest blade – coup de grace", tags: "precision", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Knight Champion of Macragge", text: "In your opponent's Movement phase, if an enemy ends a move within 8\" and this unit isn't engaged, it can make a Normal move of up to 6\"." },
      { name: "Honour or Death", text: "While this model is leading a unit, that unit gets +1 to Advance and Charge rolls; using Heroic Intervention on this unit costs 1 less CP." }
    ],
    keywords: ["EPIC HERO", "TACTICUS", "INFANTRY", "CHARACTER", "IMPERIUM", "CAPTAIN", "CATO", "SICARIUS"],
    factionKeywords: ["ADEPTUS ASTARTES", "ULTRAMARINES"],
    composition: "1 Cato Sicarius – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 105 }],
  },
  {
    id: "ferren-areios",
    name: "Ferren Areios",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "Pistol", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Relic thunder hammer", tags: "devastating wounds", a: "5", skill: "2+", s: "8", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Master of Rites", text: "In your Command phase, pick one bonus (shoot/charge/etc. after Advancing) to apply to this model's unit until the end of the turn." },
      { name: "Unrelenting and Uncompromising", text: "While this model is leading a unit, that unit's attacks can ignore penalties to Ballistic Skill, Weapon Skill, or the Hit roll." }
    ],
    keywords: ["TACTICUS", "INFANTRY", "IMPERIUM", "CHARACTER", "GRENADES", "EPIC HERO", "CAPTAIN", "FERREN AREIOS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Ferren Areios – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "company-champion-on-bike",
    name: "Company Champion on Bike",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "5", Ld: "6+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "precision", a: "4", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Honour or Death", text: "While this model is leading a unit, that unit gets +1 to Advance and Charge rolls; using Heroic Intervention on this unit costs 1 less CP." },
      { name: "Martial Superiority", text: "When this model makes a melee attack against a Character, you can re-roll both the Hit roll and the Wound roll." }
    ],
    keywords: ["RAVENWING", "MOUNTED", "CHARACTER", "GRENADES", "IMPERIUM", "COMPANY CHAMPION"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Company Champion on Bike.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "warboss-in-mega-armour",
    name: "Warboss In Mega Armour",
    faction: "Orks",
    base: "50mm",
    stats: { M: "5\"", T: "7", Sv: "2+", W: "7", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "36\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "’Uge Choppa", tags: "CLEAVE 2", a: "5", skill: "2+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Da Boss", text: "At the start of the battle round, if this model is your Warlord, gain 1 Command Point." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Krushin’ Impetus", text: "When this unit ends a charge move, roll a D6 per engaged model against one enemy — each 3+ deals 1 mortal wound." },
      { name: "Intimidating Motivation (Once per battle round, per army)", text: "During this unit's move, pick a friendly Orks unit within 6\" — it's no longer Battle-shocked and becomes Riled Up until your next turn." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "MEGA ARMOUR", "WARBOSS"],
    factionKeywords: ["ORKS"],
    composition: "1 Warboss in Mega Armour model.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "kaptin-badrukk",
    name: "Kaptin Badrukk",
    faction: "Orks",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "3+", W: "6", Ld: "7+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Da Rippa – standard", tags: "heavy, sustained hits 1", range: "24\"", a: "3", skill: "5+", s: "7", ap: "-2", d: "2" },
      { name: "Da Rippa – supercharge", tags: "hazardous, heavy, sustained hits 1", range: "24\"", a: "3", skill: "5+", s: "8", ap: "-3", d: "3" },
      { name: "Slugga", tags: "pistol", range: "12\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Choppa", tags: "", a: "6", skill: "2+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Flashiest Gitz", text: "While this model is leading a unit, that unit's ranged attacks can re-roll the Hit roll." },
      { name: "Ded Glowy Ammo (Aura)", text: "Enemy Infantry within 6\" have their Toughness reduced by 1." }
    ],
    keywords: ["INFANTRY", "KAPTIN BADRUKK", "EPIC HERO", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Kaptin Badrukk – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "boss-zagstruk",
    name: "Boss Zagstruk",
    faction: "Orks",
    base: "40mm",
    stats: { M: "12\"", T: "5", Sv: "4+", W: "6", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Slugga", tags: "pistol", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Da Vulcha’s Klaws and choppa", tags: "", a: "6", skill: "2+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Drill Boss", text: "While this model is leading a unit, that unit's melee attacks get +1 to hit." },
      { name: "Plummeting Descent", text: "You can re-roll Charge rolls for this model's unit on the turn it arrives from Reserves." }
    ],
    keywords: ["JUMP PACK", "BOSS ZAGSTRUK", "EPIC HERO", "INFANTRY", "FLY", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Boss Zagstruk – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "boss-snikrot",
    name: "Boss Snikrot",
    faction: "Orks",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "6", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE, Precision", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Mork’s Teef", tags: "Anti-Infantry 2+, Precision", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Kunnin’ Infiltrator", text: "At the end of your opponent's Fight phase, if this unit is hidden and unengaged, you can place it back into Strategic Reserves." },
      { name: "Deff from the Shadows (First battle round onwards)", text: "At the end of your opponent's Movement phase, this unit can make an Ingress Move from Strategic Reserves." }
    ],
    keywords: ["INFANTRY", "EXPLOSIVES", "EPIC HERO", "SMOKE", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Boss Snikrot model.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "mek",
    name: "Mek",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "4", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Kustom Mega-slugga", tags: "CLOSE-QUARTERS, Hazardous", range: "12\"", a: "3", skill: "4+", s: "8", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Mek’s Toolz", tags: "", a: "3", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Kustom Dakka", text: "This unit's ranged attacks gain Ignores Cover." },
      { name: "Clever Know-wotz", text: "During this unit's move, pick a nearby friendly Orks Vehicle — it heals D3 wounds and gets +1 to hit until your next Movement phase." }
    ],
    keywords: ["EXPLOSIVES", "INFANTRY", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Mek model.",
    points: [{ models: 1, pts: 45 }],
  },
  {
    id: "painboy",
    name: "Painboy",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "’Urty Syringe", tags: "anti-infantry 4+, DEVASTATING WOUNDS: INFANTRY, Extra Attacks", a: "1", skill: "3+", s: "2", ap: "0", d: "D6" },
      { name: "Dok’s Toolz", tags: "", a: "3", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Crude Surgery", text: "In your Command phase, this unit heals 3 wounds." },
      { name: "Catch Dat Red Bit (Once per battle, per unit)", text: "Once per battle, when this unit uses Crude Surgery, it can heal D3 extra wounds." }
    ],
    keywords: ["CHARACTER", "INFANTRY"],
    factionKeywords: ["ORKS"],
    composition: "1 Painboy model.",
    points: [{ models: 1, pts: 45 }],
  },
  {
    id: "mad-dok-grotsnik",
    name: "Mad Dok Grotsnik",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "4", Ld: "7+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Slugga", tags: "pistol", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Power klaw", tags: "sustained hits 1", a: "4", skill: "3+", s: "9", ap: "-2", d: "2" },
      { name: "’Urty syringe", tags: "anti-infantry 4+, extra attacks, precision", a: "1", skill: "3+", s: "2", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Mad Dok", text: "While this model is leading a unit, that unit has Feel No Pain 5+." },
      { name: "One Scalpel Short of a Medpack", text: "While this model is leading a unit, that unit can charge even after Falling Back." }
    ],
    keywords: ["EPIC HERO", "CHARACTER", "INFANTRY", "MAD DOK GROTSNIK", "PAINBOY"],
    factionKeywords: ["ORKS"],
    composition: "1 Mad Dok Grotsnik – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 65 }],
  },
  {
    id: "gretchin",
    name: "Gretchin",
    faction: "Orks",
    base: "25mm",
    stats: { M: "6\"", T: "2", Sv: "6+", W: "1", Ld: "8+", OC: "1" },
    rangedWeapons: [
      { name: "Grot Blasta", tags: "CLOSE-QUARTERS", range: "12\"", a: "1", skill: "4+", s: "3", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Scavenged Shivs", tags: "", a: "1", skill: "5+", s: "2", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Downtrodden", text: "For Transport capacity purposes, every 2 Gretchin (rounded up) count as 1 model." },
      { name: "Thievin’ Scavengers", text: "At the end of your Movement phase, an objective this unit controls becomes secured." }
    ],
    keywords: ["GROTS", "INFANTRY"],
    factionKeywords: ["ORKS"],
    composition: "10-20 Gretchin models.",
    points: [{ models: 10, pts: 45 }, { models: 20, pts: 80 }],
  },
  {
    id: "meganobz",
    name: "Meganobz",
    faction: "Orks",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "2+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Kombi-weapon - Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Kombi-weapon - Kill Shot", tags: "", range: "24\"", a: "1", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Kombi-weapon - Point Blank", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "0", d: "1" },
      { name: "Kustom Shoota - Aimed", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "18\"", a: "4", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Kustom Shoota - Point Blank", tags: "CLOSE-QUARTERS, Torrent", range: "6\"", a: "D3+3", skill: "-+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Killsaw", tags: "", a: "3", skill: "4+", s: "10", ap: "-2", d: "3" },
      { name: "Power Klaw", tags: "", a: "3", skill: "3+", s: "10", ap: "-2", d: "2" },
      { name: "Twin Killsaws", tags: "Twin-linked", a: "3", skill: "4+", s: "10", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Arrogant Invulnerability", text: "Attacks targeting this unit take a -1 Armour Penetration penalty." },
      { name: "Krumpin’ Time", text: "In the Fight phase, if this unit is Riled Up, its attacks get +1 to hit." }
    ],
    keywords: ["MEGA ARMOUR", "INFANTRY", "EXPLOSIVES"],
    factionKeywords: ["ORKS"],
    composition: "2-6 Meganob models.",
    points: [{ models: 2, pts: 75 }, { models: 3, pts: 110 }, { models: 5, pts: 185 }, { models: 6, pts: 225 }],
  },
  {
    id: "deffkoptas",
    name: "Deffkoptas",
    faction: "Orks",
    base: "75 x 42mm",
    stats: { M: "12\"", T: "6", Sv: "4+", W: "4", Ld: "7+", OC: "2", InvSv: "6+" },
    rangedWeapons: [
      { name: "Rokkit Launcha - Blasta", tags: "BLAST 2", range: "24\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Busta", tags: "Lethal Hits", range: "24\"", a: "2", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Kustom Mega-blasta", tags: "Hazardous, Lethal Hits", range: "24\"", a: "3", skill: "5+", s: "9", ap: "-2", d: "3" },
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Choppa", tags: "", a: "3", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Spinnin’ Blades", tags: "CLEAVE 1, Hazardous", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Deff from Above", text: "If this unit made an Ingress Move this turn, its ranged attacks get +1 to hit this Shooting phase." },
      { name: "Aerial Manoover", text: "At the end of your opponent's Fight phase, if unengaged, this unit can be placed back into Strategic Reserves." }
    ],
    keywords: ["SPEED FREEKS", "EXPLOSIVES", "MOUNTED", "FLY"],
    factionKeywords: ["ORKS"],
    composition: "3-6 Deffkopta models.",
    points: [{ models: 3, pts: 80 }, { models: 6, pts: 160 }],
  },
  {
    id: "wazbom-blastajet",
    name: "Wazbom Blastajet",
    faction: "Orks",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "12", Ld: "7+", OC: "-", InvSv: "6+" },
    rangedWeapons: [
      { name: "Dual Supa-shoota", tags: "Ignores Cover, LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4", range: "36\"", a: "8", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Dual Tellyport Mega-blasta", tags: "BLAST 1, Ignores Cover, Rapid Fire 6", range: "24\"", a: "6", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Dual Wazbom Mega-kannon", tags: "Hazardous, Ignores Cover", range: "36\"", a: "4", skill: "4+", s: "12", ap: "-2", d: "4" },
      { name: "Smasha Gun", tags: "Ignores Cover", range: "48\"", a: "4", skill: "4+", s: "6", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Armoured Impact", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Go fer da Weak Spot", text: "This unit's ranged attacks against Monster/Vehicle targets get +1 to wound." },
      { name: "Blastajet Force Field", text: "Models in this unit have a 5+ invulnerable save and lose the Smoke ability." }
    ],
    keywords: ["SMOKE", "SPEED FREEKS", "FLY", "AIRCRAFT", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Wazbom Blastajet model.",
    points: [{ models: 1, pts: 215 }],
  },
  {
    id: "morkanaut",
    name: "Morkanaut",
    faction: "Orks",
    base: "170 x 109mm",
    stats: { M: "9\"", T: "12", Sv: "2+", W: "20", Ld: "7+", OC: "8", InvSv: "5+" },
    rangedWeapons: [
      { name: "Dual Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4", range: "36\"", a: "6", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Kustom Mega-blasta", tags: "Hazardous", range: "24\"", a: "3", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Kustom Mega-zappa", tags: "BLAST 1, Hazardous", range: "36\"", a: "3", skill: "4+", s: "12", ap: "-2", d: "4" },
      { name: "Rokkit Launcha - Blasta", tags: "BLAST 2", range: "24\"", a: "2", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Busta", tags: "", range: "24\"", a: "2", skill: "4+", s: "10", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Klaw of Mork", tags: "CLEAVE 2", a: "5", skill: "3+", s: "18", ap: "-3", d: "6" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Super-heavy Walker", text: "This model can move through other models and terrain features 4\" or less in height as if they weren't there, though it can't end a move within Engagement Range that way." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Gut Hatch", text: "After this unit makes a Normal move, embarked units can make an assault disembark move." },
      { name: "Big an’ Shooty", text: "This unit's ranged attacks can re-roll a Hit roll of 1." }
    ],
    keywords: ["TRANSPORT", "TOWERING", "TITANIC", "VEHICLE", "WALKER"],
    factionKeywords: ["ORKS"],
    composition: "1 Morkanaut model.",
    points: [{ models: 1, pts: 345 }],
  },
  {
    id: "gorkanaut",
    name: "Gorkanaut",
    faction: "Orks",
    base: "170 x 109mm",
    stats: { M: "9\"", T: "12", Sv: "2+", W: "20", Ld: "7+", OC: "8", InvSv: "6+" },
    rangedWeapons: [
      { name: "Deffstorm Mega-shoota - Aimed", tags: "LETHAL HITS: non-MONSTER/VEHICLE", range: "36\"", a: "20", skill: "5+", s: "6", ap: "-1", d: "1" },
      { name: "Deffstorm Mega-shoota - Point Blank", tags: "Torrent", range: "12\"", a: "3D6", skill: "-+", s: "6", ap: "-1", d: "1" },
      { name: "Dual Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4", range: "36\"", a: "6", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Blasta", tags: "BLAST 2", range: "24\"", a: "2", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Busta", tags: "", range: "24\"", a: "2", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Skorcha", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Klaw of Gork", tags: "CLEAVE 3", a: "6", skill: "3+", s: "18", ap: "-3", d: "6" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Super-heavy Walker", text: "This model can move through other models and terrain features 4\" or less in height as if they weren't there, though it can't end a move within Engagement Range that way." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Gut Hatch", text: "After this unit makes a Normal move, embarked units can make an assault disembark move." },
      { name: "Big an’ Stompy", text: "This unit's melee attacks can re-roll a Hit roll of 1." }
    ],
    keywords: ["WALKER", "TRANSPORT", "TOWERING", "TITANIC", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Gorkanaut model.",
    points: [{ models: 1, pts: 325 }],
  },
  {
    id: "stompa",
    name: "Stompa",
    faction: "Orks",
    base: "Use model",
    stats: { M: "10\"", T: "14", Sv: "2+", W: "30", Ld: "6+", OC: "12", InvSv: "5+" },
    rangedWeapons: [
      { name: "Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Deffkannon and Supa-rokkits", tags: "BLAST 2", range: "72\"", a: "12", skill: "5+", s: "14", ap: "-3", d: "D6+2" },
      { name: "Skorcha", tags: "BLAST 2, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "-1", d: "1" },
      { name: "Supa-gatler - Aimed", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Sustained Hits 1", range: "24\"", a: "30", skill: "5+", s: "7", ap: "-2", d: "2" },
      { name: "Supa-gatler - Point Blank", tags: "Torrent", range: "12\"", a: "3D6+3", skill: "-+", s: "7", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Mega-choppa", tags: "CLEAVE 4", a: "6", skill: "3+", s: "24", ap: "-4", d: "10" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Super-heavy Walker", text: "This model can move through other models and terrain features 4\" or less in height as if they weren't there, though it can't end a move within Engagement Range that way." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Idol of Belligerence", text: "When a unit disembarks from this model, it becomes Riled Up until your next turn." },
      { name: "Waaagh! Effigy", text: "This unit is always Riled Up." }
    ],
    keywords: ["WALKER", "TRANSPORT", "TOWERING", "TITANIC", "FRAME", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Stompa model.",
    points: [{ models: 1, pts: 700 }],
  },
  {
    id: "gargantuan-squiggoth",
    name: "Gargantuan Squiggoth",
    faction: "Orks",
    base: "Use model",
    stats: { M: "10\"", T: "13", Sv: "3+", W: "30", Ld: "7+", OC: "12" },
    rangedWeapons: [
      { name: "Kannon – frag", tags: "blast", range: "36\"", a: "D6", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Kannon – shell", tags: "", range: "36\"", a: "1", skill: "5+", s: "9", ap: "-2", d: "D6" },
      { name: "Supa-kannon", tags: "blast", range: "60\"", a: "2D6", skill: "5+", s: "12", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Huge tusks – strike", tags: "lance", a: "6", skill: "3+", s: "14", ap: "-3", d: "12" },
      { name: "Huge tusks – sweep", tags: "", a: "18", skill: "3+", s: "9", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Gargantuan", text: "This model can move through other models and terrain 4\" or less in height as if they weren't there." },
      { name: "Walking Bastion", text: "This model doesn't suffer the usual penalty for shooting while enemies are within Engagement Range." }
    ],
    keywords: ["MONSTER", "TITANIC", "TOWERING", "TRANSPORT", "FRAME", "GARGANTUAN SQUIGGOTH"],
    factionKeywords: ["ORKS"],
    composition: "1 Gargantuan Squiggoth.",
    points: [{ models: 1, pts: 500 }],
  },
  {
    id: "big-mek-with-shokk-attack-gun",
    name: "Big Mek With Shokk Attack Gun",
    faction: "Orks",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "5", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Shokk Attack Gun", tags: "BLAST 1, Heavy", range: "60\"", a: "D3+3", skill: "5+", s: "12", ap: "-4", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Big Mek’s Toolz", tags: "", a: "4", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "More Dakka", text: "This unit's ranged attacks gain Ignores Cover, plus Sustained Hits 1 while Riled Up." },
      { name: "Support Shokka", text: "While within 3\" of a friendly Orks Infantry unit (excluding Big Mek with Shokk Attack Gun), this model has Lone Operative." }
    ],
    keywords: ["INFANTRY", "BIG MEK", "CHARACTER", "EXPLOSIVES"],
    factionKeywords: ["ORKS"],
    composition: "1 Big Mek with Shokk Attack Gun model.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "deffkilla-wartrike",
    name: "Deffkilla Wartrike",
    faction: "Orks",
    base: "150 x 95mm",
    stats: { M: "12\"", T: "6", Sv: "4+", W: "9", Ld: "6+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Boomstikks", tags: "ASSAULT, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "6", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Snagga Klaw", tags: "ASSAULT, Precision", range: "12\"", a: "1", skill: "5+", s: "7", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Killa Jet - Burna", tags: "CLEAVE 1, Extra Attacks", a: "3", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Killa Jet - Cutta", tags: "Extra Attacks", a: "1", skill: "3+", s: "10", ap: "-3", d: "D6+2" },
      { name: "Snagga Klaw", tags: "CLEAVE 2", a: "5", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Da Boss", text: "At the start of the battle round, if this model is your Warlord, gain 1 Command Point." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Get Back in da Race! (Once per battle round, per army)", text: "During this unit's move, pick a friendly Speed Freeks unit within 6\" (and its passengers) — no longer Battle-shocked, and Riled Up until your next turn." },
      { name: "Fuel-mixa Grot", text: "This unit gets +1 to Advance rolls." }
    ],
    keywords: ["MOUNTED", "WARBOSS", "SPEED FREEKS", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Deffkilla Wartrike model.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "beastboss",
    name: "Beastboss",
    faction: "Orks",
    base: "50mm",
    stats: { M: "6\"", T: "6", Sv: "4+", W: "6", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Beast Snagga Klaw and Beastchoppa", tags: "SUSTAINED HITS 2: MONSTER/VEHICLE", a: "6", skill: "2+", s: "12", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Da Boss", text: "At the start of the battle round, if this model is your Warlord, gain 1 Command Point." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Keep Huntin’! (Once per battle round, per army)", text: "During this unit's move, pick a friendly Beast Snagga unit within 6\" — no longer Battle-shocked, and Riled Up until your next turn." },
      { name: "Dodge Dis!", text: "This unit's attacks get +1 to hit." }
    ],
    keywords: ["WARBOSS", "INFANTRY", "BEAST SNAGGA", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Beastboss model.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "squighog-boyz",
    name: "Squighog Boyz",
    faction: "Orks",
    base: "75 x 42mm",
    stats: { M: "10\"", T: "6", Sv: "4+", W: "3", Ld: "7+", OC: "2", InvSv: "6+" },
    rangedWeapons: [
      { name: "Saddlegit’s Shiv", tags: "ASSAULT", range: "9\"", a: "1", skill: "4+", s: "3", ap: "0", d: "1" },
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Stikka", tags: "ANTI-MONSTER/VEHICLE 4+, ASSAULT", range: "9\"", a: "1", skill: "5+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Big Choppa", tags: "ANTI-MONSTER/VEHICLE 4+, CLEAVE 2", a: "4", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Squig’s Jaws", tags: "Extra Attacks", a: "3", skill: "4+", s: "6", ap: "-1", d: "2" },
      { name: "Stikka", tags: "ANTI-MONSTER/VEHICLE 4+", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Bomb Squig (Once per battle, per unit)", text: "Once per battle, after a Normal move, target a visible enemy within 12\" and roll a D6 — on a 3+, it takes D3 mortal wounds." },
      { name: "Brutal Impact", text: "If this unit charged this turn, its attacks get +1 Damage." }
    ],
    keywords: ["MOBILE", "EXPLOSIVES", "MOUNTED", "BEAST SNAGGA"],
    factionKeywords: ["ORKS"],
    composition: "1-2 Nob on Smasha Squig models; 3-6 Squighog Boy models.",
    points: [{ models: 4, pts: 140 }, { models: 8, pts: 280 }],
  },
  {
    id: "hunta-rig",
    name: "Hunta Rig",
    faction: "Orks",
    base: "170 x 109mm",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "16", Ld: "7+", OC: "5", InvSv: "6+" },
    rangedWeapons: [
      { name: "’Eavy Lobba", tags: "BLAST 2, Indirect Fire", range: "48\"", a: "3", skill: "5+", s: "6", ap: "0", d: "2" },
      { name: "Stikka Kannon", tags: "ANTI-MONSTER/VEHICLE 2+", range: "12\"", a: "1", skill: "5+", s: "12", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Butcha Boyz", tags: "ANTI-MONSTER/VEHICLE 4+", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Savage Horns and Hooves", tags: "Extra Attacks, Lance", a: "4", skill: "4+", s: "8", ap: "-1", d: "3" },
      { name: "Saw Blades", tags: "CLEAVE 1, Extra Attacks", a: "6", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Fully Loaded Butchery", text: "This unit's Butcha Boyz weapon gets +2 Attacks per embarked model, up to +22." },
      { name: "Tramplasquig Charge", text: "Using the Crushing Impact Stratagem on this unit costs 1 less CP." }
    ],
    keywords: ["WAGON", "TRANSPORT", "BEAST SNAGGA", "MONSTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Hunta Rig model.",
    points: [{ models: 1, pts: 165 }],
  },
  {
    id: "big-mek",
    name: "Big Mek",
    faction: "Orks",
    base: "50mm",
    stats: { M: "6\"", T: "5", Sv: "3+", W: "6", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Kustom Mega-blasta", tags: "Hazardous", range: "24\"", a: "3", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Traktor Blasta", tags: "Anti-Fly 2+", range: "24\"", a: "3", skill: "4+", s: "6", ap: "-2", d: "D3+3" }
    ],
    meleeWeapons: [
      { name: "Drilla", tags: "", a: "3", skill: "3+", s: "12", ap: "-3", d: "3" },
      { name: "Power Klaw", tags: "", a: "5", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "More Dakka", text: "This unit's ranged attacks gain Ignores Cover, plus Sustained Hits 1 while Riled Up." },
      { name: "Shokk-boosta", text: "When this unit Advances, you can treat the roll as a 6, move through any model type, then roll a Hazard test per model afterward." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EXPLOSIVES"],
    factionKeywords: ["ORKS"],
    composition: "1 Big Mek model.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "breaka-boyz",
    name: "Breaka Boyz",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "2", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Rokkit Pistol", tags: "CLOSE-QUARTERS", range: "12\"", a: "1", skill: "5+", s: "10", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Smash Hammer - Standard", tags: "", a: "3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Smash Hammer - Hunter", tags: "", a: "3", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Knucklebustas", tags: "ANTI-MONSTER/VEHICLE 4+", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Tankhammer", tags: "Devastating Wounds, Hazardous", a: "3", skill: "4+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Bomb Squigs (Once per turn, twice per battle, per unit)", text: "Up to twice per battle, after a Normal move, target a visible enemy within 12\" and roll a D6 — on a 3+, it takes D3 mortal wounds." },
      { name: "Trophy Hunters", text: "This unit gets +1 to Charge rolls." }
    ],
    keywords: ["EXPLOSIVES", "INFANTRY"],
    factionKeywords: ["ORKS"],
    composition: "1 Nob model; 5 Breaka Boy models.",
    points: [{ models: 6, pts: 135 }],
  },
  {
    id: "big-mek-dakkarig",
    name: "Big Mek Dakkarig",
    faction: "Orks",
    base: "Use model",
    stats: { M: "8\"", T: "8", Sv: "3+", W: "11", Ld: "7+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Blitzkannon", tags: "Ignores Cover, LETHAL HITS: non-MONSTER/VEHICLE", range: "24\"", a: "8", skill: "4+", s: "7", ap: "-2", d: "2" },
      { name: "Multi-busta Launcha", tags: "Ignores Cover, Lethal Hits", range: "24\"", a: "6", skill: "5+", s: "10", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Stompy Feet", tags: "", a: "4", skill: "3+", s: "6", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Even More Dakka", text: "While Riled Up, this unit's ranged attacks gain Sustained Hits 1." },
      { name: "Blitz Dem Gitz!", text: "In your Shooting phase, this unit's Blitzkannon gets +6 Attacks against non-Monster/Vehicle targets." }
    ],
    keywords: ["WALKER", "VEHICLE", "BIG MEK", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Big Mek Dakkarig model.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "wartrakks",
    name: "Wartrakks",
    faction: "Orks",
    base: "Use model",
    stats: { M: "12\"", T: "6", Sv: "4+", W: "7", Ld: "7+", OC: "3", InvSv: "6+" },
    rangedWeapons: [
      { name: "Kustom Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "18\"", a: "4", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Multi-busta Launcha", tags: "", range: "24\"", a: "D3+3", skill: "5+", s: "10", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Kustom Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Speednob Support", text: "While within 3\" of a friendly Speed Freeks unit (not Wartrakk), this unit has Lone Operative." },
      { name: "Bust ’Em", text: "After this unit shoots, an enemy it hit is Busted until the end of the turn — friendly Speed Freeks attacks against a Busted unit gain Lethal Hits." }
    ],
    keywords: ["MOUNTED", "SPEED FREEKS"],
    factionKeywords: ["ORKS"],
    composition: "1-2 Wartrakk models.",
    points: [{ models: 1, pts: 70 }, { models: 2, pts: 130 }],
  },
  {
    id: "assault-squad",
    name: "Assault Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "ANTI-VEHICLE 2+, PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "IGNORES COVER, PISTOL, TORRENT", range: "12\"", a: "D6 ", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "MELTA 2, PISTOL", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma gun – standard", tags: "rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "hazardous, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Eviscerator", tags: "sustained hits 1", a: "3", skill: "4+", s: "7", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "5", skill: "3+", s: "4", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Astartes Shield", text: "The bearer has a 4+ invulnerable save." },
      { name: "Chainsword Doctrines", text: "When this unit fights, pick Sustained Hits 1, Lethal Hits, or Lance to apply to its Astartes chainswords until the end of the phase." },
      { name: "ATTACHED UNITS", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit too." }
    ],
    keywords: ["GRENADES", "IMPERIUM", "INFANTRY", "ASSAULT SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Assault Sergeant; 4-9 Assault Marines.",
    points: [{ models: 5, pts: 95 }, { models: 10, pts: 190 }],
  },
  {
    id: "assault-squad-with-jump-packs",
    name: "Assault Squad with Jump Packs",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "ANTI-VEHICLE 2+, PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "IGNORES COVER, PISTOL, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "MELTA 2, PISTOL", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma gun – standard", tags: "rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "hazardous, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Eviscerator", tags: "sustained hits 1", a: "3", skill: "4+", s: "7", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "5", skill: "3+", s: "4", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Astartes Shield", text: "The bearer has a 4+ invulnerable save." },
      { name: "Hammer of Wrath", text: "When this unit ends a Charge move, roll a D6 per model against one engaged enemy — each 4+ deals 1 mortal wound." },
      { name: "ATTACHED UNITS", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit too." }
    ],
    keywords: ["IMPERIUM", "INFANTRY", "FLY", "JUMP PACK", "GRENADES", "ASSAULT SQUAD WITH JUMP PACKS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Assault Sergeant with Jump Pack; 4-9 Assault Marines with Jump Packs.",
    points: [{ models: 5, pts: 115 }, { models: 10, pts: 230 }],
  },
  {
    id: "land-raider-crusader",
    name: "Land Raider Crusader",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Hurricane bolter", tags: "rapid fire 6, twin-linked", range: "24\"", a: "6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "Legacy of Jerulas", text: "After this model shoots, pick an enemy it hit — friendly models disembarking from this Transport this turn can re-roll a Hit roll of 1 and a Wound roll of 1 against that unit for the rest of the turn." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["IMPERIUM", "TRANSPORT", "GRENADES", "VEHICLE", "FRAME", "LAND RAIDER", "LAND RAIDER CRUSADER", "SMOKE"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Land Raider Crusader.",
    points: [{ models: 1, pts: 220 }],
  },
  {
    id: "land-raider-excelsior",
    name: "Land Raider Excelsior",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5", InvSv: "5+" },
    rangedWeapons: [
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Godhammer lascannons", tags: "", range: "48\"", a: "2", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Grav-cannon", tags: "anti-vehicle 2+", range: "24\"", a: "3", skill: "3+", s: "6", ap: "-1", d: "3" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "SMOKE", "TRANSPORT", "FRAME", "IMPERIUM", "LAND RAIDER EXCELSIOR"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Raider Excelsior.",
    points: [{ models: 1, pts: 250 }],
  },
  {
    id: "lieutenant-with-combi-weapon",
    name: "Lieutenant with Combi-weapon",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Paired combat blades", tags: "anti-infantry 4+, sustained hits 1", a: "5", skill: "2+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Priority Objective Identified", text: "At the start of the battle, pick one objective — while this model is alive, friendly Adeptus Astartes attacks against enemies near that objective get a bonus." },
      { name: "Evade and Survive", text: "In your opponent's Movement phase, if an enemy ends a move within 8\" and this unit isn't engaged, it can make a Normal move of up to 6\"." },
      { name: "LAST SURVIVOR", text: "This model cannot be selected as your Warlord." }
    ],
    keywords: ["LIEUTENANT WITH COMBI-WEAPON", "LIEUTENANT", "PHOBOS", "IMPERIUM", "GRENADES", "INFANTRY", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Lieutenant with Combi-weapon.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "captain-with-jump-pack",
    name: "Captain With Jump Pack",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "PISTOL", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "7", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "5", skill: "3+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Angel’s Wrath", text: "While this model is leading a unit, that unit's melee weapons get +1 Strength for the rest of the turn after it charges." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Relic Shield", text: "The bearer has a Wounds characteristic of 6." }
    ],
    keywords: ["TACTICUS", "CAPTAIN", "FLY", "INFANTRY", "CHARACTER", "JUMP PACK", "GRENADES", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Captain with Jump Pack.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "rhino-primaris",
    name: "Rhino Primaris",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "9", Sv: "3+", W: "10", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Twin plasma gun – standard", tags: "rapid fire 1, twin-linked", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Twin plasma gun – supercharge", tags: "hazardous, rapid fire 1, twin-linked", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Self Repair", text: "At the end of your Command phase, this model regains 1 lost wound." },
      { name: "Orbital Comms Array (Aura)", text: "Friendly Adeptus Astartes units within 6\" have a chance (5+ on a D6) to gain 1 Command Point whenever targeted by a Stratagem." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "TRANSPORT", "FRAME", "IMPERIUM", "RHINO PRIMARIS", "SMOKE"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Rhino Primaris.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "drop-pod",
    name: "Drop Pod",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "-", T: "7", Sv: "3+", W: "8", Ld: "6+", OC: "0" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Drop Pod Assault", text: "This model starts in Reserves and can arrive in the first, second, or third Movement phase regardless of mission rules; embarked units must disembark immediately, more than 8\" from all enemies." },
      { name: "Combat Disembarkation", text: "A unit disembarking from this model after it was set up can still charge this turn." },
      { name: "Deployment Complete", text: "Once this unit and all its passengers have disembarked, no units can embark in it again for the rest of the battle." },
      { name: "Designer’s Note", text: "Only the highlighted parts of this model count as its hull for movement and destruction purposes." }
    ],
    keywords: ["FRAME", "IMPERIUM", "DEDICATED TRANSPORT", "VEHICLE", "TRANSPORT", "DROP POD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Drop Pod.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "carab-culln-the-risen",
    name: "Carab Culln The Risen",
    faction: "Space Marines",
    base: "80mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "12", Ld: "6+", OC: "4", InvSv: "5+" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Tarsus Scorpii", tags: "", a: "5", skill: "3+", s: "12", ap: "-3", d: "4" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Death-hold", text: "This model doesn't suffer the usual penalty for shooting while enemies are within Engagement Range." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["DREADNOUGHT", "VEHICLE", "WALKER", "IMPERIUM", "SMOKE", "CHARACTER", "EPIC HERO", "CARAB CULLN THE RISEN", "DEATHWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Carab Culln the Risen – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 250 }],
  },
  {
    id: "hammerfall-bunker",
    name: "Hammerfall Bunker",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "-", T: "12", Sv: "2+", W: "14", Ld: "6+", OC: "0" },
    rangedWeapons: [
      { name: "Hammerfall heavy bolter array", tags: "sustained hits 1, twin-linked", range: "36\"", a: "6", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Hammerfall heavy flamer array", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "2D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Hammerfall missile launcher – superfrag", tags: "blast", range: "48\"", a: "2D6+2", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Hammerfall missile launcher – superkrak", tags: "", range: "48\"", a: "2", skill: "4+", s: "10", ap: "-2", d: "D6+1" }
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fortification", text: "Enemies only engaged with this Fortification can still be shot (except by Pistols, at -1 to hit) and don't need Desperate Escape tests to Fall Back from it." },
      { name: "Ceramite Cover", text: "A ranged attack against a friendly model is treated as Benefit of Cover if this Fortification blocks it from being fully visible to the attacker." },
      { name: "Defensive Array", text: "This Fortification can use Fire Overwatch for 0CP, even after another unit already used it this turn — but only once per turn for this Fortification." }
    ],
    keywords: ["FRAME", "IMPERIUM", "VEHICLE", "FORTIFICATION", "HAMMERFALL BUNKER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Hammerfall Bunker.",
    points: [{ models: 1, pts: 175 }],
  },
  {
    id: "relic-terminator-squad",
    name: "Relic Terminator Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Combi-bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Plasma blaster – standard", tags: "", range: "18\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma blaster – supercharge", tags: "hazardous", range: "18\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Reaper autocannon", tags: "devastating wounds, sustained hits 1", range: "36\"", a: "4", skill: "3+", s: "7", ap: "-1", d: "1" },
      { name: "Volkite charger", tags: "devastating wounds", range: "18\"", a: "2", skill: "3+", s: "5", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "5", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fury of the First", text: "This unit's attacks can ignore Ballistic Skill/Weapon Skill/Hit roll penalties, and get +1 to hit against this turn's Oath of Moment target." },
      { name: "Grenade Harness", text: "The bearer has the Grenades keyword." },
      { name: "ATTACHED UNITS", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit too." }
    ],
    keywords: ["DEATHWING", "RELIC TERMINATOR SQUAD", "INFANTRY", "IMPERIUM", "TERMINATOR"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Relic Terminator Sergeant; 4-9 Relic Terminators.",
    points: [{ models: 5, pts: 200 }, { models: 10, pts: 400 }],
  },
  {
    id: "chaplain-in-terminator-armour",
    name: "Chaplain In Terminator Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "5", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crozius arcanum", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Litany of Hate", text: "While this model is leading a unit, add 1 to the Wound roll for that unit's melee attacks." },
      { name: "Recitation of Faith", text: "While this model is leading a unit, that unit has Feel No Pain 4+ against mortal wounds." },
      { name: "Relic Shield", text: "The bearer has a Wounds characteristic of 6." }
    ],
    keywords: ["INFANTRY", "DEATHWING", "TERMINATOR", "IMPERIUM", "CHAPLAIN", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Chaplain in Terminator Armour.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "terminator-assault-squad",
    name: "Terminator Assault Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "6", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Teleport Homer", text: "You can set up a Teleport Homer token anywhere outside the enemy deployment zone at the start of the battle. Once per battle, you can use it to bring this unit in with a free (0CP) Rapid Ingress, arriving within 3\" of the token." },
      { name: "Terminatus Assault", text: "At the start of the Fight phase, engaged enemy units must take a Battle-shock test." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." }
    ],
    keywords: ["INFANTRY", "IMPERIUM", "TERMINATORS", "TERMINATOR ASSAULT SQUAD", "DEATHWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Assault Terminator Sergeant; 4-9 Assault Terminators.",
    points: [{ models: 5, pts: 155 }, { models: 10, pts: 310 }],
  },
  {
    id: "iron-father-feirros",
    name: "Iron Father Feirros",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "2+", W: "6", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Gorgon’s Wrath", tags: "sustained hits 2", range: "36\"", a: "3", skill: "2+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Harrowhand", tags: "", a: "6", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Medusan Manipuli", tags: "extra attacks", a: "2", skill: "3+", s: "8", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Tempering", text: "While this model is leading a unit, that unit has Feel No Pain 5+." },
      { name: "Iron Father", text: "While within 3\" of a friendly Adeptus Astartes Vehicle, this model has Lone Operative." },
      { name: "Master of the Forge", text: "In your Command phase, pick a nearby friendly Vehicle — it heals up to 3 wounds and gets +1 to hit until your next Command phase." },
      { name: "INSPIRING COMMANDER", text: "While this model is in your army, non-Character Heavy Intercessor Squad models get Objective Control 3 while not Battle-shocked." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "IRON FATHER FEIRROS", "GRAVIS", "IMPERIUM", "EPIC HERO"],
    factionKeywords: ["IRON HANDS", "ADEPTUS ASTARTES"],
    composition: "1 Iron Father Feirros – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "roboute-guilliman",
    name: "Roboute Guilliman",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "10", Ld: "5+", OC: "4", InvSv: "4+" },
    rangedWeapons: [
      { name: "Hand of Dominion", tags: "rapid fire 2", range: "30\"", a: "2", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Emperor’s Sword", tags: "devastating wounds", a: "14", skill: "2+", s: "8", ap: "-3", d: "2" },
      { name: "Hand of Dominion", tags: "lethal hits", a: "7", skill: "2+", s: "14", ap: "-4", d: "4" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Author of the Codex", text: "At the start of your Command phase, pick two special abilities from a list this model has access to, active until your next Command phase." },
      { name: "Ultramarines Bodyguard", text: "While within 3\" of a friendly Adeptus Astartes Infantry unit, this model has Lone Operative." },
      { name: "Armour of Fate", text: "The first time this model is destroyed, on a 3+ it's set back up nearby with 6 wounds remaining." },
      { name: "SUPREME COMMANDER", text: "This model must be your Warlord if included in your army." },
      { name: "Primarch of the XIII (Aura)", text: "Friendly Adeptus Astartes units within 6\" get +1 Objective Control and can re-roll Battle-shock and Leadership tests." },
      { name: "Master of Battle", text: "After picking your Oath of Moment target, pick a backup target that takes over automatically if the first is destroyed." },
      { name: "Supreme Strategist", text: "Once per battle round, when a friendly Adeptus Astartes unit within 12\" is targeted by a Stratagem, you can reduce its CP cost by 1." }
    ],
    keywords: ["EPIC HERO", "IMPERIUM", "MONSTER", "MOBILE", "PRIMARCH", "ROBOUTE GUILLIMAN", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES", "ULTRAMARINES"],
    composition: "1 Roboute Guilliman – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 355 }],
  },
  {
    id: "techmarine",
    name: "Techmarine",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Forge bolter", tags: "", range: "24\"", a: "3", skill: "2+", s: "5", ap: "-1", d: "2" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Omnissian power axe", tags: "", a: "4", skill: "3+", s: "6", ap: "-2", d: "2" },
      { name: "Servo-arm", tags: "extra attacks", a: "1", skill: "3+", s: "8", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Techmarine", text: "While within 3\" of a friendly Adeptus Astartes Vehicle, this model has Lone Operative." },
      { name: "Blessing of the Omnissiah", text: "In your Command phase, pick a nearby friendly Vehicle — it heals up to D3 wounds and gets +1 to hit until your next Command phase (once per model per turn)." },
      { name: "Vengeance of the Omnissiah", text: "If a friendly Vehicle is destroyed within 12\", this model's Omnissian power axe gets Attacks 7 for the rest of the battle." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "GRENADES", "TACTICUS", "TECHMARINE", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Techmarine.",
    points: [{ models: 1, pts: 55 }],
  },
  {
    id: "captain-tycho",
    name: "Captain Tycho",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Blood Song", tags: "anti-infantry 4+, devastating wounds, melta 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Dead Man’s Hand", tags: "", a: "6", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Gifted Commander", text: "While this model is leading a unit, pick Assault, Heavy, or Rapid Fire 1 to apply to that unit's ranged weapons each time it shoots." },
      { name: "Embittered", text: "The first time this model is attacked, its Dead Man's Hand weapon gets Attacks 12 for the rest of the battle." },
      { name: "TYCHO", text: "Your army can't include both Captain Tycho and Tycho the Lost." }
    ],
    keywords: ["CHARACTER", "INFANTRY", "TYCHO", "CAPTAIN", "IMPERIUM", "GRENADES", "EPIC HERO"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Captain Tycho – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "tycho-the-lost",
    name: "Tycho The Lost",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Blood Song", tags: "anti-infantry 4+, devastating wounds, melta 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Dead Man’s Hand", tags: "", a: "6", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Forlorn Hero", text: "While this model is leading a unit, that unit can charge even after Advancing." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "Death Vision of Sanguinius", text: "If this model is destroyed in melee, roll a D6 (+2 if the attacker's unit contains the enemy Warlord) for a mortal-wound counterattack against that unit." },
      { name: "TYCHO", text: "Your army can't include both Captain Tycho and Tycho the Lost." }
    ],
    keywords: ["TYCHO THE LOST", "CAPTAIN", "IMPERIUM", "GRENADES", "EPIC HERO", "CHARACTER", "INFANTRY"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Tycho the Lost – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "sanguinary-guard",
    name: "Sanguinary Guard",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "12\"", T: "4", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Angelus boltgun", tags: "pistol", range: "12\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" }
    ],
    meleeWeapons: [
      { name: "Encarmine blade", tags: "", a: "4", skill: "2+", s: "6", ap: "-3", d: "2" },
      { name: "Encarmine spear", tags: "Lance", a: "4", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Angelic Visage", text: "Melee attacks against this unit take -1 to hit." },
      { name: "Heirs of Azkaellon", text: "While a Character is leading this unit, melee attacks against it take -1 to wound." },
      { name: "Sanguinary Banner", text: "The bearer's unit gets +1 Objective Control." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["SANGUINARY GUARD", "IMPERIUM", "GRENADES", "INFANTRY", "FLY", "JUMP PACK", "TACTICUS"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "3-6 Sanguinary Guard.",
    points: [{ models: 3, pts: 120 }, { models: 6, pts: 260 }],
  },
  {
    id: "gabriel-seth",
    name: "Gabriel Seth",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Blood Reaver", tags: "sustained hits 1", a: "6", skill: "2+", s: "8", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Lord of Slaughter", text: "While this model is leading a unit, that unit can charge even after Advancing." },
      { name: "Whirlwind of Gore", text: "When this model fights, its Blood Reaver weapon gets +1 Attacks for every 5 enemy models within 6\"." },
      { name: "FLESH TEARERS", text: "This model counts as a Blood Angels model, but can't be in an army with any other Blood Angels Epic Hero." }
    ],
    keywords: ["GABRIEL SETH", "CHAPTER MASTER", "IMPERIUM", "GRENADES", "EPIC HERO", "CHARACTER", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Gabriel Seth – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "azrael",
    name: "Azrael",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Lion’s Wrath", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "2", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "The Sword of Secrets", tags: "devastating wounds", a: "6", skill: "2+", s: "6", ap: "-4", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "The Lion Helm", text: "This model's unit has a 4+ invulnerable save. Once per battle, in any phase, it can grant that unit Feel No Pain 4+ against mortal wounds until the end of the phase." },
      { name: "Supreme Grand Master", text: "While this model is leading a unit, that unit's weapons gain Sustained Hits 1." },
      { name: "Masterful Tactician", text: "At the start of your Command phase, if this model is on the battlefield, gain 1 Command Point." }
    ],
    keywords: ["EPIC HERO", "INFANTRY", "GRENADES", "IMPERIUM", "DEATHWING", "TACTICUS", "CHAPTER MASTER", "AZRAEL", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Azrael – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "ezekiel",
    name: "Ezekiel",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "The Deliverer", tags: "pistol, precision", range: "12\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Mind Wipe – witchfire", tags: "devastating wounds, precision, psychic", range: "12\"", a: "1", skill: "2+", s: "6", ap: "-2", d: "D6" },
      { name: "Mind Wipe – focused witchfire", tags: "anti-character 4+, devastating wounds, hazardous, precision, psychic", range: "12\"", a: "1", skill: "2+", s: "6", ap: "-2", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Traitor’s Bane", tags: "anti-chaos 2+, psychic", a: "4", skill: "2+", s: "6", ap: "-2", d: "D3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Psychic Hood", text: "While this model is leading a unit, that unit has Feel No Pain 4+ specifically against Psychic Attacks." },
      { name: "Engulfing Fear (Psychic)", text: "In your Shooting phase, force an enemy unit within 18\" to take a Battle-shock test." },
      { name: "Book of Salvation", text: "While this model is leading a unit, that unit's melee weapons get +1 Attacks. If this model dies, nearby friendly Adeptus Astartes units must take a Battle-shock test." }
    ],
    keywords: ["EZEKIEL", "LIBRARIAN", "DEATHWING", "IMPERIUM", "GRENADES", "PSYKER", "EPIC HERO", "CHARACTER", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Ezekiel – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "deathwing-terminator-squad",
    name: "Deathwing Terminator Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – frag", tags: "blast", range: "36\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – krak", tags: "", range: "36\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Plasma cannon – standard", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma cannon – supercharge", tags: "blast, hazardous", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Teleport Homer", text: "You can set up a Teleport Homer token anywhere outside the enemy deployment zone at the start of the battle. Once per battle, you can use it to bring this unit in with a free (0CP) Rapid Ingress, arriving within 3\" of the token." },
      { name: "Deathwing", text: "This unit's attacks can ignore Ballistic Skill/Weapon Skill/Hit roll penalties, and get +1 to hit against this turn's Oath of Moment target." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." },
      { name: "Watcher in the Dark", text: "Once per battle, when a mortal wound hits an Adeptus Astartes model in this unit, the unit can gain Feel No Pain 4+ against mortal wounds for the rest of the phase." }
    ],
    keywords: ["IMPERIUM", "INFANTRY", "TERMINATOR", "DEATHWING TERMINATOR SQUAD", "DEATHWING"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Deathwing Sergeant; 4-9 Deathwing Terminators.",
    points: [{ models: 5, pts: 165 }, { models: 10, pts: 330 }],
  },
  {
    id: "deathwing-knights",
    name: "Deathwing Knights",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "4", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Great weapon of the Unforgiven", tags: "devastating wounds, sustained hits 1", a: "5", skill: "2+", s: "6", ap: "-2", d: "2" },
      { name: "Mace of absolution", tags: "ANTI-MONSTER 4+, ANTI-VEHICLE 4+", a: "4", skill: "2+", s: "6", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "5", skill: "2+", s: "6", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "lethal hits", a: "6", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Teleport Homer", text: "You can set up a Teleport Homer token anywhere outside the enemy deployment zone at the start of the battle. Once per battle, you can use it to bring this unit in with a free (0CP) Rapid Ingress, arriving within 3\" of the token." },
      { name: "Inner Circle", text: "Attacks allocated to models in this unit have their Damage reduced by 1." },
      { name: "Watcher in the Dark", text: "Once per battle, when a mortal wound hits an Adeptus Astartes model in this unit, the unit can gain Feel No Pain 4+ against mortal wounds for the rest of the phase." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["TERMINATOR", "DEATHWING", "IMPERIUM", "INFANTRY", "DEATHWING KNIGHTS"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Knight Master; 4 Deathwing Knights.",
    points: [{ models: 5, pts: 240 }],
  },
  {
    id: "logan-grimnar",
    name: "Logan Grimnar",
    faction: "Space Marines",
    base: "80mm",
    stats: { M: "6\"", T: "5", Sv: "2+", W: "8", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Axe Morkai – strike", tags: "", a: "6", skill: "2+", s: "8", ap: "-2", d: "3" },
      { name: "Axe Morkai – sweep", tags: "", a: "10", skill: "2+", s: "6", ap: "-2", d: "1" },
      { name: "Tyrnak and Fenrir", tags: "extra attacks", a: "6", skill: "2+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "High King of Fenris", text: "Once per battle round, in your Movement phase, treat a Reserves unit's arrival timing as one battle round later than actual for setup purposes." },
      { name: "Guile of the Wolf (Aura)", text: "Once per turn, when your opponent targets a unit within 12\" with a Stratagem, you can increase that Stratagem's CP cost by 1." },
      { name: "EMBARKING WITHIN TRANSPORTS", text: "This model takes up the space of 4 Infantry models when embarking in a Transport built for Terminators." }
    ],
    keywords: ["LOGAN GRIMNAR", "INFANTRY", "CHARACTER", "EPIC HERO", "IMPERIUM", "CHAPTER MASTER", "TERMINATOR"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Logan Grimnar – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "logan-grimnar-on-stormrider",
    name: "Logan Grimnar On Stormrider",
    faction: "Space Marines",
    base: "120 x 92mm",
    stats: { M: "10\"", T: "6", Sv: "2+", W: "12", Ld: "6+", OC: "4", InvSv: "4+" },
    rangedWeapons: [
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "The Axe Morkai – one-handed", tags: "", a: "10", skill: "2+", s: "6", ap: "-2", d: "1" },
      { name: "The Axe Morkai – two-handed", tags: "", a: "6", skill: "2+", s: "8", ap: "-2", d: "3" },
      { name: "Flurry of teeth and claws", tags: "extra attacks", a: "6", skill: "4+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "High King of Fenris", text: "Once per battle round, in your Movement phase, treat a Reserves unit's arrival timing as one battle round later than actual for setup purposes." },
      { name: "The Great Wolf", text: "Each time this model destroys an enemy unit, gain 1 Command Point." },
      { name: "LOGAN GRIMNAR", text: "Your army can't include both Logan Grimnar and Logan Grimnar on Stormrider." }
    ],
    keywords: ["LOGAN GRIMNAR ON STORMRIDER", "CHAPTER MASTER", "IMPERIUM", "EPIC HERO", "MOUNTED", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Logan Grimnar on Stormrider – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 180 }],
  },
  {
    id: "wolf-lord-on-thunderwolf",
    name: "Wolf Lord on Thunderwolf",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "10\"", T: "6", Sv: "3+", W: "6", Ld: "6+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted boltgun", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crushing teeth and claws", tags: "extra attacks", a: "3", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "5", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "7", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Speed of the Hunter", text: "This model's unit gets +1 to Advance and Charge rolls." },
      { name: "Relic Shield", text: "The bearer has a Wounds characteristic of 6." }
    ],
    keywords: ["IMPERIUM", "CAPTAIN", "WOLF LORD ON THUNDERWOLF", "MOUNTED", "CHARACTER", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Wolf Lord on Thunderwolf.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "lukas-the-trickster",
    name: "Lukas The Trickster",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Claw of the Jackalwolf", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Pelt of the Doppegangrel", text: "While this model is leading a unit, attacks against that unit take -1 to hit." },
      { name: "Last Laugh", text: "If this model is destroyed in melee, on a 4+ the attacking unit suffers D6 mortal wounds and becomes Battle-shocked." },
      { name: "MASTER OF MISCHIEF", text: "This model cannot be your Warlord." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "GRENADES", "IMPERIUM", "LUKAS THE TRICKSTER"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Lukas the Trickster – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "iron-priest",
    name: "Iron Priest",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "7\"", T: "4", Sv: "2+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Helfrost pistol – dispersed", tags: "pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "-1", d: "1" },
      { name: "Helfrost pistol – focused", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "6", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Tempest hammer and servo-arm", tags: "", a: "4", skill: "4+", s: "8", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Iron Priest", text: "While within 3\" of a friendly Adeptus Astartes Vehicle, this model has Lone Operative." },
      { name: "Gift of the Iron Wolf", text: "In your Command phase, pick a nearby friendly Vehicle — it heals up to D3 wounds and one of its weapons gains Rapid Fire 1 until your next Command phase." },
      { name: "Judgement of the Omnissiah", text: "When this model attacks an enemy engaged with a friendly Vehicle, you can re-roll the Wound roll." }
    ],
    keywords: ["CHARACTER", "TECHMARINE", "IMPERIUM", "INFANTRY", "IRON PRIEST"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Iron Priest.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "murderfang",
    name: "Murderfang",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "9\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "0" },
    rangedWeapons: [
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Murderclaws", tags: "sustained hits 1, twin-linked", a: "8", skill: "3+", s: "14", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Curse of the Wulfen", text: "While within range of certain Space Wolves Characters and not Battle-shocked, this unit's Objective Control increases (+1 for Infantry, +3 for Vehicles)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Murder-maker (Aura)", text: "In the Fight phase, a Wulfen model within 6\" destroyed before fighting can, on a 4+, fight anyway before being removed." },
      { name: "Bestial Fury", text: "You can re-roll Advance and Charge rolls made for this model." },
      { name: "FORCE OF UNTAMED DESTRUCTION", text: "This model cannot be your Warlord." }
    ],
    keywords: ["VEHICLE", "WALKER", "CHARACTER", "EPIC HERO", "IMPERIUM", "DREADNOUGHT", "WULFEN", "MURDERFANG"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Murderfang – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "wolf-guard",
    name: "Wolf Guard",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "5+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Heirloom weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Chosen Companions", text: "While a Character is leading this unit, its attacks get +1 to hit." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["INFANTRY", "GRENADES", "WOLF GUARD", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Wolf Guard Pack Leader; 4-9 Wolf Guard.",
    points: [{ models: 5, pts: 85 }, { models: 10, pts: 170 }],
  },
  {
    id: "long-fangs",
    name: "Long Fangs",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Grav-cannon", tags: "anti-vehicle 2+, heavy", range: "24\"", a: "3", skill: "4+", s: "6", ap: "-1", d: "3" },
      { name: "Grav-gun", tags: "ANTI-VEHICLE 2+", range: "18\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy bolter", tags: "heavy, sustained hits 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Lascannon", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – frag", tags: "blast, heavy", range: "48\"", a: "D6", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – krak", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "9", ap: "-2", d: "D6" },
      { name: "Meltagun", tags: "MELTA 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Multi-melta", tags: "heavy, melta 2", range: "18\"", a: "2", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma cannon – standard", tags: "blast, heavy", range: "36\"", a: "D3", skill: "4+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma cannon – supercharge", tags: "blast, hazardous, heavy", range: "36\"", a: "D3", skill: "4+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma gun – standard", tags: "RAPID FIRE 1", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "HAZARDOUS, RAPID FIRE 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "HAZARDOUS, PISTOL", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "3", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "2", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fire Discipline", text: "If this unit (with a Long Fang Pack Leader) Remains Stationary, its ranged attacks against a chosen visible enemy can re-roll a Hit roll of 1." },
      { name: "Armorium Cherub", text: "Once per battle, you can change a Hit roll for this unit to an unmodified 6." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["INFANTRY", "GRENADES", "IMPERIUM", "LONG FANGS"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Long Fang Pack Leader; 4-5 Long Fangs.",
    points: [{ models: 5, pts: 120 }, { models: 6, pts: 145 }],
  },
  {
    id: "corvus-blackstar",
    name: "Corvus Blackstar",
    faction: "Space Marines",
    base: "120 x 92mm flying base",
    stats: { M: "14\"", T: "10", Sv: "3+", W: "14", Ld: "6+", OC: "0" },
    rangedWeapons: [
      { name: "Blackstar rocket launcher", tags: "blast", range: "30\"", a: "D6+1", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Hurricane bolter", tags: "rapid fire 6, twin-linked", range: "24\"", a: "6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Stormstrike missile launcher", tags: "", range: "48\"", a: "1", skill: "3+", s: "10", ap: "-2", d: "3" },
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Blackstar Cluster Launcher", text: "After this model makes a Normal move, pick an enemy it moved over and roll six D6 — each 5+ deals 1 mortal wound." },
      { name: "Auspex Array", text: "This model's ranged weapons gain Ignores Cover." },
      { name: "Infernum Halo-launcher", text: "The bearer has the Smoke keyword." }
    ],
    keywords: ["FLY", "TRANSPORT", "CORVUS BLACKSTAR", "IMPERIUM", "FRAME", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES", "DEATHWATCH"],
    composition: "1 Corvus Blackstar.",
    points: [{ models: 1, pts: 180 }],
  },
  {
    id: "vanguard-veteran-squad",
    name: "Vanguard Veteran Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Heirloom weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "Vanguard Assault", text: "When this unit ends a Charge move, its melee weapons gain Lethal Hits until the end of the turn." },
      { name: "ATTACHED UNITS", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit too." }
    ],
    keywords: ["GRENADES", "IMPERIUM", "INFANTRY", "VANGUARD VETERAN SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Vanguard Veteran Sergeant; 4-9 Vanguard Veterans.",
    points: [{ models: 5, pts: 120 }, { models: 10, pts: 240 }],
  },
  {
    id: "company-veterans-on-bikes",
    name: "Company Veterans On Bikes",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Grav-gun", tags: "anti-vehicle 2+", range: "18\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma gun – standard", tags: "RAPID FIRE 1", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "HAZARDOUS, RAPID FIRE 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "HAZARDOUS, PISTOL", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "Vanguard Assault", text: "When this unit ends a Charge move, its melee weapons gain Lethal Hits until the end of the turn." },
      { name: "COMMAND SQUAD BODYGUARD", text: "A Character with the Leader ability that can attach to an Outrider Squad can attach to this unit instead." }
    ],
    keywords: ["MOUNTED", "IMPERIUM", "GRENADES", "COMPANY VETERANS", "RAVENWING"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Veteran Biker Sergeant; 1-4 Veteran Bikers.",
    points: [{ models: 2, pts: 110 }, { models: 5, pts: 275 }],
  },
  {
    id: "lieutenant",
    name: "Lieutenant",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Master-crafted bolter", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Neo-volkite pistol", tags: "DEVASTATING WOUNDS, PISTOL", range: "12\"", a: "1", skill: "2+", s: "5", ap: "0", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "5", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "4", skill: "2+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tactical Precision", text: "While this model is leading a unit, that unit's weapons gain Lethal Hits." },
      { name: "Target Priority", text: "This unit can shoot and charge even after Falling Back." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." }
    ],
    keywords: ["CHARACTER", "TACTICUS", "IMPERIUM", "GRENADES", "LIEUTENANT", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Lieutenant.",
    points: [{ models: 1, pts: 45 }],
  },
  {
    id: "ravenwing-talonmaster",
    name: "Ravenwing Talonmaster",
    faction: "Space Marines",
    base: "65mm",
    stats: { M: "16\"", T: "7", Sv: "3+", W: "6", Ld: "6+", OC: "2", InvSv: "5+" },
    rangedWeapons: [
      { name: "Twin assault cannon", tags: "devastating wounds, twin-linked", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "sustained hits 1, twin-linked", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Power weapon", tags: "", a: "5", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Talonmaster", text: "While within 3\" of another friendly Mounted or Flying Adeptus Astartes Vehicle, this model has Lone Operative." },
      { name: "Nowhere to Hide", text: "Friendly Mounted or Flying Vehicles within 6\" get Ignores Cover on their ranged weapons." },
      { name: "Master of Manoeuvre", text: "In your opponent's Movement phase, if an enemy ends a move within 8\" and this model isn't engaged, it can make a Normal move of up to 6\"." }
    ],
    keywords: ["FLY", "CHARACTER", "IMPERIUM", "RAVENWING TALONMASTER", "RAVENWING", "VEHICLE"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "1 Ravenwing Talonmaster.",
    points: [{ models: 1, pts: 105 }],
  },
  {
    id: "sergeant-chronus",
    name: "Sergeant Chronus",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chronus’ servo-arm", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tank Commander", text: "While commanding a Vehicle, that Vehicle's weapons get Ballistic Skill 2+ and can re-roll a Wound roll each time it shoots." },
      { name: "Chronus", text: "When this model disembarks from a Vehicle it was commanding, it gains Lone Operative for the rest of the battle." },
      { name: "TANK COMMANDER", text: "This model must start the battle embarked within a specific listed Vehicle as if it were a Transport, only disembarking if that Vehicle is destroyed." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "IMPERIUM", "SERGEANT CHRONUS"],
    factionKeywords: ["ULTRAMARINES", "ADEPTUS ASTARTES"],
    composition: "1 Sergeant Chronus – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "techmarine-on-bike",
    name: "Techmarine on Bike",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "5", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Conversion beamer", tags: "conversion, sustained hits d3", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Plasma pistol – standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "HAZARDOUS, PISTOL", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "5", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Omnissian power axe", tags: "", a: "4", skill: "3+", s: "6", ap: "-2", d: "2" },
      { name: "Plasma cutter", tags: "extra attacks", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Servo arm", tags: "extra attacks", a: "1", skill: "3+", s: "8", ap: "-2", d: "3" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Techmarine", text: "While within 3\" of a friendly Adeptus Astartes Vehicle, this model has Lone Operative." },
      { name: "Blessing of the Omnissiah", text: "In your Command phase, pick a nearby friendly Vehicle — it heals up to D3 wounds and gets +1 to hit until your next Command phase (once per model per turn)." },
      { name: "Vengeance of the Omnissiah", text: "If a friendly Vehicle is destroyed within 12\", this model's Omnissian power axe gets Attacks 7 for the rest of the battle." },
      { name: "Conversion", text: "Attacks with this weapon against targets more than 12\" away score a Critical Hit on an unmodified 4+." }
    ],
    keywords: ["TECHMARINE", "IMPERIUM", "GRENADES", "RAVENWING", "CHARACTER", "MOUNTED"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Techmarine on Bike.",
    points: [{ models: 1, pts: 110 }],
  },
  {
    id: "land-raider-proteus",
    name: "Land Raider Proteus",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "12\"", T: "12", Sv: "2+", W: "16", Ld: "6+", OC: "5" },
    rangedWeapons: [
      { name: "Heavy bolter", tags: "sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Twin heavy bolter", tags: "twin-linked, sustained hits 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Twin heavy flamer", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Twin lascannon", tags: "twin-linked", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "6", skill: "4+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Explorator Augury Web", text: "Enemy Reserves can't set up within 12\" of this model, but its Transport Capacity is halved." },
      { name: "Assault Ramp", text: "A unit disembarking from this model after it made a Normal move makes an assault disembark move instead of a normal one." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["SMOKE", "FRAME", "IMPERIUM", "TRANSPORT", "VEHICLE", "LAND RAIDER PROTEUS"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Land Raider Proteus.",
    points: [{ models: 1, pts: 220 }],
  },
  {
    id: "death-company-marines",
    name: "Death Company Marines",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Inferno pistol", tags: "pistol, melta 2", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Eviscerator", tags: "sustained hits 1", a: "3", skill: "4+", s: "7", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "An Honourable Death in Combat", text: "This unit's attacks gain Sustained Hits 1 if below Starting Strength, or Sustained Hits 2 if Below Half-strength." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["DEATH COMPANY", "DEATH COMPANY MARINES", "GRENADES", "INFANTRY", "TACTICUS", "IMPERIUM"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "5-10 Death Company Marines.",
    points: [{ models: 5, pts: 85 }, { models: 10, pts: 160 }],
  },
  {
    id: "command-squad",
    name: "Command Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Grav-cannon", tags: "ANTI-VEHICLE 2+, HEAVY", range: "24\"", a: "3", skill: "4+", s: "6", ap: "-1", d: "3" },
      { name: "Grav-gun", tags: "anti-vehicle 2+", range: "18\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Grav-pistol", tags: "ANTI-VEHICLE 2+", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "IGNORES COVER, PISTOL, TORRENT", range: "12\"", a: "D6 ", skill: "N/A", s: "3 ", ap: "0", d: "1" },
      { name: "Heavy bolter", tags: "HEAVY, SUSTAINED HITS 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6 ", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Inferno pistol", tags: "MELTA 2, PISTOL", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Lascannon", tags: "HEAVY", range: "48\"", a: "1", skill: "4+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Missile launcher – frag", tags: "BLAST, HEAVY", range: "48\"", a: "D6 ", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – krak", tags: "HEAVY", range: "48\"", a: "1", skill: "4+", s: "9", ap: "-2", d: "D6" },
      { name: "Multi-melta", tags: "HEAVY, MELTA 2", range: "18\"", a: "2", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma cannon – standard", tags: "BLAST, HEAVY", range: "36\"", a: "D3 ", skill: "4+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma cannon – supercharge", tags: "BLAST, HAZARDOUS, HEAVY", range: "36\"", a: "D3 ", skill: "4+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma gun – standard", tags: "rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "hazardous, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7 ", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "HAZARDOUS, RAPID FIRE 1", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "RAPID FIRE 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Champion’s blade", tags: "precision", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "4", skill: "3+", s: "4", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Astartes Shield", text: "The bearer has a 4+ invulnerable save." },
      { name: "Narthecium", text: "While this unit contains an Apothecary, in your Command phase you can return 1 destroyed model (not Characters) to it." },
      { name: "Astartes Banner", text: "While this unit contains a Company Ancient, it gets +1 Objective Control." },
      { name: "Honour or Death", text: "While this unit contains a Company Champion, it gets +1 to Advance and Charge rolls; using Heroic Intervention on it costs 1 less CP." },
      { name: "ATTACHED UNITS", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit too." }
    ],
    keywords: ["IMPERIUM", "COMMAND SQUAD", "INFANTRY", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Apothecary; 1 Company Ancient; 1 Company Champion; 2 Company Veterans.",
    points: [{ models: 5, pts: 165 }],
  },
  {
    id: "darnath-lysander",
    name: "Darnath Lysander",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "7", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Fist of Dorn", tags: "devastating wounds", a: "5", skill: "2+", s: "10", ap: "-3", d: "3" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Icon of Obstinacy", text: "Attacks against this unit with Strength equal to or greater than its Toughness take -1 to wound." },
      { name: "Rampart", text: "Once per battle, at the start of any phase, this model can gain a 2+ invulnerable save for the rest of the phase." },
      { name: "INSPIRING COMMANDER", text: "While this model is in your army, non-Character Heavy Intercessor Squad models get Objective Control 3 while not Battle-shocked." }
    ],
    keywords: ["CHARACTER", "INFANTRY", "EPIC HERO", "CAPTAIN", "IMPERIUM", "DARNATH LYSANDER", "TERMINATOR"],
    factionKeywords: ["ADEPTUS ASTARTES", "IMPERIAL FISTS"],
    composition: "1 Darnath Lysander – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "devastator-squad",
    name: "Devastator Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Grav-cannon", tags: "anti-vehicle 2+, heavy", range: "24\"", a: "3", skill: "4+", s: "6", ap: "-1", d: "3" },
      { name: "Grav-pistol", tags: "ANTI-VEHICLE 2+, PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Heavy bolter", tags: "heavy, sustained hits 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Lascannon", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Missile launcher – frag", tags: "blast, heavy", range: "48\"", a: "D6", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Missile launcher – krak", tags: "heavy", range: "48\"", a: "1", skill: "4+", s: "9", ap: "-2", d: "D6" },
      { name: "Multi-melta", tags: "heavy, melta 2", range: "18\"", a: "2", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Plasma cannon – standard", tags: "BLAST, HEAVY", range: "36\"", a: "D3 ", skill: "4+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma cannon – supercharge", tags: "BLAST, HAZARDOUS, HEAVY", range: "36\"", a: "D3 ", skill: "4+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "HAZARDOUS, PISTOL", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "RAPID FIRE 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Signum", text: "Whenever this unit Remains Stationary, its ranged weapons gain Ignores Cover until your next Movement phase." },
      { name: "Armorium Cherub", text: "Once per battle, you can change a Hit roll for this unit to an unmodified 6." },
      { name: "Designer’s Note", text: "Only the highlighted parts of this model count as its hull for movement and destruction purposes." }
    ],
    keywords: ["IMPERIUM", "GRENADES", "INFANTRY", "DEVASTATOR SQUAD"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Devastator Sergeant; 4-9 Devastator Marines.",
    points: [{ models: 5, pts: 120 }, { models: 10, pts: 200 }],
  },
  {
    id: "deimos-predator",
    name: "Deimos Predator",
    faction: "Space Marines",
    base: "Use model",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "11", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Conversion beam cannon", tags: "conversion, sustained hits d3", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-1", d: "3" },
      { name: "Heavy bolter", tags: "SUSTAINED HITS 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Heavy flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Infernus cannon", tags: "ignores cover, torrent", range: "12\"", a: "2D6", skill: "N/A", s: "6", ap: "-1", d: "1" },
      { name: "Lascannon", tags: "", range: "48\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Magna-melta cannon", tags: "melta 4", range: "18\"", a: "2", skill: "3+", s: "12", ap: "-4", d: "D6" },
      { name: "Plasma destroyer – standard", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Plasma destroyer – supercharge", tags: "blast, hazardous", range: "36\"", a: "D3", skill: "3+", s: "9", ap: "-3", d: "3" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured tracks", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Armoured Spearhead", text: "This model's attacks re-roll a Hit roll of 1, or any Hit roll if the target is on an objective you don't control." },
      { name: "Conversion", text: "Attacks with this weapon against targets more than 12\" away score a Critical Hit on an unmodified 4+." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["IMPERIUM", "FRAME", "SMOKE", "VEHICLE", "DEIMOS PREDATOR"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Deimos Predator.",
    points: [{ models: 1, pts: 115 }],
  },
  {
    id: "death-company-marines-with-bolt-rifles",
    name: "Death Company Marines with Bolt Rifles",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Astartes grenade launcher - frag", tags: "blast", range: "24\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Astartes grenade launcher - krak", tags: "", range: "24\"", a: "1", skill: "3+", s: "9", ap: "-1", d: "D3" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt rifle", tags: "assault, heavy", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "pistol, melta 2", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Eviscerator", tags: "sustained hits 1", a: "3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "Visions of Heresy", text: "This unit can re-roll Charge rolls; using Fire Overwatch or Heroic Intervention on it costs 1 less CP." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["DEATH COMPANY MARINES WITH BOLT RIFLES", "INFANTRY", "GRENADES", "IMPERIUM", "TACTICUS", "DEATH COMPANY"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "5-10 Death Company Marines with Bolt Rifles.",
    points: [{ models: 5, pts: 80 }, { models: 10, pts: 155 }],
  },
  {
    id: "deathwing-command-squad",
    name: "Deathwing Command Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – frag", tags: "blast", range: "36\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – krak", tags: "", range: "36\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Plasma cannon – standard", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma cannon – supercharge", tags: "blast, hazardous", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Halberd of Caliban", tags: "precision", a: "5", skill: "3+", s: "6", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "5", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "Narthecium", text: "While this unit contains an Apothecary, in your Command phase you can return 1 destroyed model (not Characters) to it." },
      { name: "Astartes Banner", text: "While this unit contains a Company Ancient, it gets +1 Objective Control." },
      { name: "Honour or Death", text: "While this unit contains a Company Champion, it gets +1 to Advance and Charge rolls; using Heroic Intervention on it costs 1 less CP." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["INFANTRY", "IMPERIUM", "DEATHWING", "TERMINATOR", "DEATHWING COMMAND SQUAD"],
    factionKeywords: ["DARK ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Deathwing Ancient; 1 Deathwing Apothecary; 1 Deathwing Champion; 2-7 Deathwing Command Terminators.",
    points: [{ models: 5, pts: 200 }, { models: 10, pts: 400 }],
  },
  {
    id: "deathwing-strikemaster",
    name: "Deathwing Strikemaster",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Mace of absolution", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "3" },
      { name: "Master-crafted power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "4", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "6", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "Tactical Precision", text: "While this model is leading a unit, that unit's weapons gain Lethal Hits." },
      { name: "Vanquish the Foe", text: "This model's attacks against a Below-Half-strength enemy get +1 to hit and +1 to wound." }
    ],
    keywords: ["TERMINATOR", "IMPERIUM", "CHARACTER", "INFANTRY", "LIEUTENANT", "DEATHWING STRIKEMASTER", "DEATHWING"],
    factionKeywords: ["DARK ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Deathwing Strikemaster.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "impulsor",
    name: "Impulsor",
    faction: "Space Marines",
    base: "100mm",
    stats: { M: "12\"", T: "9", Sv: "3+", W: "11", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bellicatus missile array – frag", tags: "blast", range: "48\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bellicatus missile array – Icarus", tags: "anti-fly 2+", range: "48\"", a: "D3", skill: "3+", s: "8", ap: "-1", d: "2" },
      { name: "Bellicatus missile array – krak", tags: "", range: "48\"", a: "1", skill: "3+", s: "8", ap: "-2", d: "D6" },
      { name: "Fragstorm grenade launcher", tags: "blast", range: "18\"", a: "D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Ironhail heavy stubber", tags: "rapid fire 3", range: "36\"", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Ironhail skytalon array", tags: "anti-fly 4+, sustained hits 1", range: "36\"", a: "8", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Multi-melta", tags: "melta 2", range: "18\"", a: "2", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Assault Vehicle", text: "Units can disembark from this Transport after it Advances, making a shock disembark move." },
      { name: "Orbital Comms Array (Aura)", text: "Friendly Adeptus Astartes units within 6\" have a chance (5+ on a D6) to gain 1 Command Point whenever targeted by a Stratagem." },
      { name: "Shield Dome", text: "The bearer has a 5+ invulnerable save." }
    ],
    keywords: ["VEHICLE", "TRANSPORT", "DEDICATED TRANSPORT", "IMPERIUM", "FRAME", "IMPULSOR"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLACK TEMPLARS"],
    composition: "1 Impulsor.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "ancient-in-terminator-armour",
    name: "Ancient In Terminator Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Close combat weapon", tags: "", a: "5", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "4", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "6", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Astartes Banner", text: "While this unit contains a Company Ancient, it gets +1 Objective Control." },
      { name: "Keep the Banner High", text: "While this model is leading a unit, that unit's attacks get +1 to hit if below Starting Strength, and +1 to wound too if Below Half-strength." },
      { name: "Terminator Storm Shield", text: "The bearer has a Wounds characteristic of 6." }
    ],
    keywords: ["TERMINATOR", "ANCIENT", "DEATHWING", "CHARACTER", "INFANTRY", "IMPERIUM"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Ancient in Terminator Armour.",
    points: [{ models: 1, pts: 65 }],
  },
  {
    id: "lion-eljonson",
    name: "Lion El’jonson",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "10", Ld: "5+", OC: "4", InvSv: "3+" },
    rangedWeapons: [
      { name: "Arma Luminis – bolt", tags: "pistol", range: "12\"", a: "4", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Arma Luminis – plasma", tags: "pistol", range: "12\"", a: "2", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Fealty – strike", tags: "lethal hits", a: "8", skill: "2+", s: "12", ap: "-4", d: "4" },
      { name: "Fealty – sweep", tags: "sustained hits 1", a: "16", skill: "2+", s: "6", ap: "-3", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Fights First", text: "A unit where every model has Fights First fights before non-Fights-First units in the Fight phase." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Primarch of the First Legion", text: "At the start of your Command phase, pick two special abilities from a list this model has access to, active until your next Command phase." },
      { name: "The Emperor’s Shield", text: "Attacks against this model with Strength greater than its Toughness take -1 to wound." },
      { name: "Dark Angels Bodyguard", text: "While within 3\" of a friendly Adeptus Astartes Infantry unit, this model has Lone Operative." },
      { name: "SUPREME COMMANDER", text: "This model must be your Warlord if included in your army." },
      { name: "Mist-wreathed Shadow Realms", text: "In your Command phase, if unengaged, this unit can return to Strategic Reserves and Ingress again next Movement phase (even turn 1)." },
      { name: "Martial Exemplar (Aura)", text: "Friendly Adeptus Astartes units within 6\" can re-roll a Hit roll of 1 and a Wound roll of 1 on melee attacks." },
      { name: "No Hiding From the Watchers (Aura)", text: "Friendly Adeptus Astartes units within 6\" get Feel No Pain 4+ against mortal wounds." }
    ],
    keywords: ["MONSTER", "CHARACTER", "EPIC HERO", "PRIMARCH", "LION EL’JONSON", "IMPERIUM", "MOBILE"],
    factionKeywords: ["DARK ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Lion El’Jonson – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 265 }],
  },
  {
    id: "captain-on-bike",
    name: "Captain on Bike",
    faction: "Space Marines",
    base: "75 x 25mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "6", Ld: "6+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "ANTI-INFANTRY 4+, DEVASTATING WOUNDS, RAPID FIRE 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Grav-pistol", tags: "anti-vehicle 2+, pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "2+", s: "8", ap: "-4", d: "D3" },
      { name: "Master-crafted boltgun", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" },
      { name: "Twin boltgun", tags: "twin-linked", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Storm bolter", tags: "RAPID FIRE 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "7", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "6", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "5", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "7", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Relic Shield", text: "The bearer has a Wounds characteristic of 6." },
      { name: "Swift Assault", text: "While this model is leading a unit, that unit's ranged weapons gain the Assault ability." },
      { name: "Rites of Battle", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." }
    ],
    keywords: ["IMPERIUM", "RAVENWING", "CAPTAIN", "GRENADES", "CHARACTER", "MOUNTED"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Captain on Bike.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "ironclad-dreadnought",
    name: "Ironclad Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "6\"", T: "10", Sv: "2+", W: "8", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Hunter-killer missile", tags: "one shot", range: "48\"", a: "1", skill: "2+", s: "14", ap: "-3", d: "D6" },
      { name: "Hurricane bolter", tags: "rapid fire 6, twin-linked", range: "24\"", a: "6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Dreadnought chainfist", tags: "anti-vehicle 3+", a: "4", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Dreadnought combat weapon", tags: "", a: "5", skill: "3+", s: "12", ap: "-2", d: "3" },
      { name: "Seismic hammer", tags: "", a: "3", skill: "3+", s: "14", ap: "-3", d: "D6+2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Ironclad Assault Launchers", text: "The bearer has the Grenades keyword." },
      { name: "Siege-breaker Protocols", text: "This model's melee attacks against Vehicle/Fortification targets get +1 to hit and +1 to wound." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["IRONCLAD DREADNOUGHT", "DEATHWING", "VEHICLE", "WALKER", "SMOKE", "IMPERIUM", "DREADNOUGHT"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Ironclad Dreadnought.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "kayvaan-shrike",
    name: "Kayvaan Shrike",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Blackout", tags: "pistol, precision", range: "18\"", a: "2", skill: "2+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "The Raven’s Talons", tags: "precision, twin-linked", a: "7", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Shadowmaster", text: "While this model is leading a unit, that unit can only be targeted by ranged attacks from within 12\"." },
      { name: "Echo of the Ravenspire", text: "At the end of your opponent's turn, if unengaged, this model's unit can return to Strategic Reserves." },
      { name: "INSPIRING COMMANDER", text: "While this model is in your army, non-Character Heavy Intercessor Squad models get Objective Control 3 while not Battle-shocked." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "KAYVAAN SHRIKE", "FLY", "JUMP PACK", "IMPERIUM", "PHOBOS", "CHAPTER MASTER", "EPIC HERO"],
    factionKeywords: ["RAVEN GUARD", "ADEPTUS ASTARTES"],
    composition: "1 Kayvaan Shrike – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "korsarro-khan",
    name: "Kor’sarro Khan",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Moonfang", tags: "devastating wounds, precision", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "For the Khan!", text: "While this model is leading a unit, its ranged weapons gain Assault and its melee weapons gain Lance." },
      { name: "Trophy Taker", text: "Each time this model destroys an enemy Character, gain 1 Command Point." },
      { name: "INSPIRING COMMANDER", text: "While this model is in your army, non-Character Heavy Intercessor Squad models get Objective Control 3 while not Battle-shocked." }
    ],
    keywords: ["IMPERIUM", "INFANTRY", "KOR’SARRO KHAN", "CAPTAIN", "TACTICUS", "EPIC HERO", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES", "WHITE SCARS"],
    composition: "1 Kor’sarro Khan – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 55 }],
  },
  {
    id: "pedro-kantor",
    name: "Pedro Kantor",
    faction: "Space Marines",
    base: "25mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Dorn’s Arrow", tags: "rapid fire 2, sustained hits 1", range: "24\"", a: "2", skill: "2+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Fist of Retribution", tags: "", a: "5", skill: "2+", s: "8", ap: "-3", d: "3" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Oath of Rynn", text: "Once per battle, at the start of either Command phase, this model's unit gets +1 Attacks until the end of the turn." },
      { name: "To the Last", text: "While this model is leading a unit, that unit's attacks get +1 to hit if below Starting Strength, and +1 to wound too if Below Half-strength." },
      { name: "CRIMSON FISTS", text: "This model counts as an Imperial Fists model, but can't be in an army with any other Imperial Fists Epic Hero." },
      { name: "INSPIRING COMMANDER", text: "While this model is in your army, non-Character Heavy Intercessor Squad models get Objective Control 3 while not Battle-shocked." }
    ],
    keywords: ["IMPERIUM", "GRENADES", "EPIC HERO", "CHARACTER", "INFANTRY", "CHAPTER MASTER", "PEDRO KANTOR", "TACTICUS"],
    factionKeywords: ["IMPERIAL FISTS", "ADEPTUS ASTARTES"],
    composition: "1 Pedro Kantor – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "reiver-squad",
    name: "Reiver Squad",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt carbine", tags: "precision", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Special issue bolt pistol", tags: "pistol, precision", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combat knife", tags: "precision", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Fearsome Assault", text: "At the start of the Fight phase, engaged enemy units must take a Battle-shock test at -1." },
      { name: "Terror Troops (Aura)", text: "Enemy units (not Monster/Vehicle) within 3\" have their Objective Control reduced by 1." },
      { name: "Grapnel Launcher", text: "This model's unit ignores vertical distance when calculating movement." },
      { name: "Reiver Grav-chute", text: "The bearer has the Deep Strike ability." }
    ],
    keywords: ["SMOKE", "IMPERIUM", "PHOBOS", "REIVER SQUAD", "INFANTRY", "GRENADES"],
    factionKeywords: ["ADEPTUS ASTARTES"],
    composition: "1 Reiver Sergeant; 4-9 Reivers.",
    points: [{ models: 5, pts: 75 }, { models: 10, pts: 150 }],
  },
  {
    id: "vulkan-hestan",
    name: "Vulkan He’stan",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Gauntlet of the Forge", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6+3", skill: "N/A", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Spear of Vulkan", tags: "devastating wounds", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Forgefather", text: "Pick an enemy within 24\" — friendly Torrent/Melta attacks against it can re-roll the Wound roll for the rest of the phase." },
      { name: "Seeker of the Unfound", text: "The first time this model is set up, pick an objective — while near it, this model gets Objective Control 10, Leadership 5+, and Feel No Pain 4+." },
      { name: "INSPIRING COMMANDER", text: "While this model is in your army, non-Character Heavy Intercessor Squad models get Objective Control 3 while not Battle-shocked." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "GRENADES", "IMPERIUM", "TACTICUS", "CAPTAIN", "VULKAN HE’STAN"],
    factionKeywords: ["SALAMANDERS", "ADEPTUS ASTARTES"],
    composition: "1 Vulkan He’stan – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "death-company-marines-with-jump-packs",
    name: "Death Company Marines With Jump Packs",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Inferno pistol", tags: "pistol, melta 2", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Eviscerator", tags: "sustained hits 1", a: "3", skill: "4+", s: "7", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "Savage Fury", text: "You can re-roll Charge rolls made for this unit." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["TACTICUS", "DEATH COMPANY", "DEATH COMPANY MARINES WITH JUMP PACKS", "INFANTRY", "FLY", "JUMP PACK", "GRENADES", "IMPERIUM"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "5-10 Death Company Marines with Jump Packs.",
    points: [{ models: 5, pts: 115 }, { models: 10, pts: 230 }],
  },
  {
    id: "ravenwing-command-squad",
    name: "Ravenwing Command Squad",
    faction: "Space Marines",
    base: "75 x 42mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "4", Ld: "6+", OC: "2", InvSv: "5+" },
    rangedWeapons: [
      { name: "Astartes grenade launcher – frag", tags: "blast", range: "24\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Astartes grenade launcher – krak", tags: "", range: "24\"", a: "1", skill: "3+", s: "9", ap: "-2", d: "D3" },
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma talon – standard", tags: "rapid fire 1", range: "18\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma talon – supercharge", tags: "hazardous, rapid fire 1", range: "18\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Black Knight combat weapon", tags: "devastating wounds", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Master-crafted power weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Narthecium", text: "While this unit contains an Apothecary, in your Command phase you can return 1 destroyed model (not Characters) to it." },
      { name: "Astartes Banner", text: "While this unit contains a Company Ancient, it gets +1 Objective Control." },
      { name: "Honour or Death", text: "While this unit contains a Company Champion, it gets +1 to Advance and Charge rolls; using Heroic Intervention on it costs 1 less CP." }
    ],
    keywords: ["CHARACTER", "RAVENWING", "IMPERIUM", "MOUNTED", "RAVENWING COMMAND SQUAD", "GRENADES"],
    factionKeywords: ["DARK ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Ravenwing Champion; 1 Ravenwing Apothecary; 1 Ravenwing Ancient.",
    points: [{ models: 3, pts: 105 }],
  },
  {
    id: "spectrus-kill-team",
    name: "Spectrus Kill Team",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Bolt sniper rifle", tags: "heavy, precision", range: "36\"", a: "1", skill: "3+", s: "5", ap: "-2", d: "3" },
      { name: "Deathwatch bolt carbine", tags: "lethal hits, precision", range: "24\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Deathwatch marksman bolt carbine", tags: "heavy, lethal hits", range: "24\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Deathwatch occulus bolt carbine", tags: "assault, ignores cover, lethal hits", range: "24\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Instigator bolt carbine", tags: "heavy", range: "24\"", a: "1", skill: "3+", s: "4", ap: "-2", d: "2" },
      { name: "Las fusil", tags: "heavy", range: "36\"", a: "1", skill: "3+", s: "9", ap: "-3", d: "D6" },
      { name: "Special-issue bolt pistol", tags: "pistol, precision", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combat knife", tags: "precision", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Paired combat blades", tags: "sustained hits 1", a: "3", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Spectrus Doctrines", text: "At the end of your opponent's turn, if more than 6\" from all enemies, this unit can return to Strategic Reserves." },
      { name: "Helix Gauntlet", text: "Models in the bearer's unit have the Feel No Pain 6+ ability." },
      { name: "Infiltrator Comms Array", text: "Each time the bearer's unit is targeted by a Stratagem, roll a D6 — on a 5+, you gain 1 Command Point." },
      { name: "Instigator Bolt Carbine", text: "After the bearer's unit shoots, it can make a Normal move — but can't charge this turn if it does." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["INFANTRY", "SMOKE", "GRENADES", "IMPERIUM", "PHOBOS", "KILL TEAM", "SPECTRUS KILL TEAM"],
    factionKeywords: ["DEATHWATCH", "ADEPTUS ASTARTES"],
    composition: "10 MODELS MAXIMUM; 3‑10 Kill Team Infiltrators; 0‑3 Kill Team Infiltrators with bolt sniper rifles; 0‑4 Kill Team Infiltrators with Deathwatch occulus bolt carbines; 0‑4 Kill Team Infiltrators with combat knives.",
    points: [{ models: 10, pts: 170 }],
  },
  {
    id: "deathwatch-veterans",
    name: "Deathwatch Veterans",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "-1", d: "1" },
      { name: "Deathwatch shotgun", tags: "assault", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "2" },
      { name: "Frag cannon", tags: "blast, heavy, rapid fire d3", range: "18\"", a: "D3", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Infernus heavy bolter – heavy bolter", tags: "heavy, sustained hits 1", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Infernus heavy bolter – heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Stalker-pattern boltgun", tags: "heavy, precision", range: "24\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Black Shield blades", tags: "twin-linked", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Deathwatch thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "10", ap: "-2", d: "3" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Xenophase blade", tags: "devastating wounds", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Death to the Alien", text: "This unit's attacks re-roll a Hit roll of 1, or any Hit roll against a non-Imperium, non-Chaos target." },
      { name: "Astartes Shield", text: "The bearer has a 4+ invulnerable save." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["INFANTRY", "BATTLELINE", "GRENADES", "IMPERIUM", "DEATHWATCH VETERANS", "KILL TEAM"],
    factionKeywords: ["DEATHWATCH", "ADEPTUS ASTARTES"],
    composition: "1 Watch Sergeant; 4-9 Deathwatch Veterans.",
    points: [{ models: 5, pts: 100 }, { models: 10, pts: 190 }],
  },
  {
    id: "chaplain-grimaldus",
    name: "Chaplain Grimaldus",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "5+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Artificer crozius", tags: "", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" },
      { name: "Close combat weapon", tags: "", a: "1", skill: "4+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Litanies of the Devout", text: "While this unit is led by Chaplain Grimaldus, its melee attacks can re-roll the Hit roll." },
      { name: "Temple Relics", text: "If this unit contains a Cenobyte Servitor, pick a special ability for Chaplain Grimaldus each Command phase." },
      { name: "Banner of the Emperor Victorious", text: "This unit gets +1 to Advance and Charge rolls." },
      { name: "Column from the Major Altar", text: "This unit's models get +1 Toughness." },
      { name: "Water from the Stoup of Elucidation", text: "This unit's melee weapons get +1 Armour Penetration." }
    ],
    keywords: ["CHAPLAIN GRIMALDUS", "TACTICUS", "CHARACTER", "IMPERIUM", "INFANTRY", "GRENADES", "EPIC HERO"],
    factionKeywords: ["BLACK TEMPLARS", "ADEPTUS ASTARTES"],
    composition: "1 Chaplain Grimaldus – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 3 Cenobyte Servitors*.",
    points: [{ models: 4, pts: 100 }],
  },
  {
    id: "emperors-champion",
    name: "Emperor’s Champion",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "8\"", T: "4", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Black Sword – strike", tags: "anti-character 5+, precision", a: "6", skill: "2+", s: "8", ap: "-3", d: "3" },
      { name: "Black Sword – sweep", tags: "", a: "10", skill: "2+", s: "6", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Templar Vows", text: "At the start of the first battle round, pick one Vow to be active for your Adeptus Astartes units for the rest of the battle, granting a bonus tied to that Vow." },
      { name: "Armour of Faith", text: "Once per phase, after a failed save against this model, you can reduce that attack's Damage to 0." },
      { name: "Sigismund’s Heir", text: "When charging a nearby enemy Character, this unit can re-roll the charge roll and must end engaged with it; once per battle, it can also fight twice." },
      { name: "CHOSEN OF THE EMPEROR", text: "You can't include more than one Emperor's Champion in your army." }
    ],
    keywords: ["IMPERIUM", "GRENADES", "CHARACTER", "INFANTRY", "TACTICUS", "EMPEROR’S CHAMPION"],
    factionKeywords: ["BLACK TEMPLARS", "ADEPTUS ASTARTES"],
    composition: "1 Emperor’s Champion.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "wolf-guard-pack-leader-with-jump-pack",
    name: "Wolf Guard Pack Leader With Jump Pack",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "Inspiring Leader", text: "While this model is leading a unit, once per battle you can re-roll a Battle-shock test for it." },
      { name: "Pack Leader", text: "This model cannot be your Warlord and cannot be given Enhancements." }
    ],
    keywords: ["GRENADES", "INFANTRY", "JUMP PACK", "FLY", "CHARACTER", "IMPERIUM", "PACK LEADER", "WOLF GUARD PACK LEADER WITH JUMP PACK"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Wolf Guard Pack Leader with Jump Pack.",
    points: [{ models: 1, pts: 35 }],
  },
  {
    id: "wolf-guard-pack-leader-in-terminator-armour",
    name: "Wolf Guard Pack Leader In Terminator Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, ignores cover", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – frag", tags: "blast", range: "36\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – krak", tags: "", range: "36\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "5", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "Inspiring Leader", text: "While this model is leading a unit, once per battle you can re-roll a Battle-shock test for it." },
      { name: "Pack Leader", text: "This model cannot be your Warlord and cannot be given Enhancements." }
    ],
    keywords: ["PACK LEADER", "IMPERIUM", "TERMINATOR", "INFANTRY", "CHARACTER", "GRENADES", "WOLF GUARD PACK LEADER IN TERMINATOR ARMOUR"],
    factionKeywords: ["SPACE WOLVES", "ADEPTUS ASTARTES"],
    composition: "1 Wolf Guard Pack Leader in Terminator Armour.",
    points: [{ models: 1, pts: 40 }],
  },
  {
    id: "wolf-guard-pack-leader",
    name: "Wolf Guard Pack Leader",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "2", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "Inspiring Leader", text: "While this model is leading a unit, once per battle you can re-roll a Battle-shock test for it." },
      { name: "Pack Leader", text: "This model cannot be your Warlord and cannot be given Enhancements." }
    ],
    keywords: ["WOLF GUARD PACK LEADER", "IMPERIUM", "CHARACTER", "GRENADES", "PACK LEADER", "INFANTRY"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Wolf Guard Pack Leader.",
    points: [{ models: 1, pts: 30 }],
  },
  {
    id: "cyberwolf",
    name: "Cyberwolf",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "10\"", T: "4", Sv: "6+", W: "2", Ld: "7+", OC: "0", InvSv: "6+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Teeth and claws", tags: "", a: "4", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Close In for the Kill", text: "This model's attacks against a Below-Half-strength enemy get +1 to hit and +1 to wound." },
      { name: "Alpha Hunter", text: "While this model is leading a unit, that unit gains the Scouts 6\" ability." },
      { name: "WOLFKIN", text: "This model cannot be your Warlord and cannot be given Enhancements." }
    ],
    keywords: ["BEAST", "CHARACTER", "IMPERIUM", "CYBERWOLF"],
    factionKeywords: ["SPACE WOLVES", "ADEPTUS ASTARTES"],
    composition: "1 Cyberwolf.",
    points: [{ models: 1, pts: 20 }],
  },
  {
    id: "inner-circle-companions",
    name: "Inner Circle Companions",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "3", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "Pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Calibanite greatsword - strike", tags: "lethal hits", a: "4", skill: "3+", s: "6", ap: "-2", d: "2" },
      { name: "Calibanite greatsword - sweep", tags: "sustained hits 2", a: "5", skill: "3+", s: "6", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Braziers of Judgement", text: "This unit has Stealth, and melee attacks against it take -1 to hit." },
      { name: "Enmity for the Unworthy", text: "This unit's attacks against Character targets get +1 to hit." },
      { name: "Attached Unit", text: "A Character with the Leader ability that can attach to a Sternguard Veteran Squad can attach to this unit instead." }
    ],
    keywords: ["DEATHWING", "IMPERIUM", "INFANTRY", "INNER CIRCLE COMPANIONS", "TACTICUS"],
    factionKeywords: ["ADEPTUS ASTARTES", "DARK ANGELS"],
    composition: "3-6 Inner Circle Companions.",
    points: [{ models: 3, pts: 80 }, { models: 6, pts: 160 }],
  },
  {
    id: "death-company-captain",
    name: "Death Company Captain",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "Pistol", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Inferno pistol", tags: "melta 2, pistol", range: "6\"", a: "1", skill: "2+", s: "8", ap: "-4", d: "D3" }
    ],
    meleeWeapons: [
      { name: "Master-crafted chainsword", tags: "", a: "7", skill: "2+", s: "4", ap: "-1", d: "2" },
      { name: "Power fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Forlorn Hero", text: "While this model is leading a unit, that unit can charge even after Advancing." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "Death Vision of Sanguinius", text: "If this model is destroyed in melee, roll a D6 (+2 if the attacker's unit contains the enemy Warlord) for a mortal-wound counterattack against that unit." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "IMPERIUM", "TACTICUS", "GRENADES", "CAPTAIN", "DEATH COMPANY"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Death Company Captain.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "death-company-captain-with-jump-pack",
    name: "Death Company Captain with Jump Pack",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Heavy bolt pistol", tags: "Pistol", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Plasma pistol - standard", tags: "Pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol - supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "7", skill: "2+", s: "4", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "5", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Lost to Fury", text: "While this model is leading a unit, that unit's melee weapons gain Sustained Hits 1." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "Death Vision of Sanguinius", text: "If this model is destroyed in melee, roll a D6 (+2 if the attacker's unit contains the enemy Warlord) for a mortal-wound counterattack against that unit." }
    ],
    keywords: ["FLY", "GRENADES", "IMPERIUM", "TACTICUS", "DEATH COMPANY", "CAPTAIN", "INFANTRY", "CHARACTER", "JUMP PACK"],
    factionKeywords: ["ADEPTUS ASTARTES", "BLOOD ANGELS"],
    composition: "1 Death Company Captain with Jump Pack.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "death-company-dreadnought-with-magna-grapple",
    name: "Death Company Dreadnought with Magna-grapple",
    faction: "Space Marines",
    base: "90mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "3" },
    rangedWeapons: [
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Meltagun", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Blood talons", tags: "twin-linked", a: "7", skill: "3+", s: "8", ap: "-2", d: "3" },
      { name: "Twin Furioso fists", tags: "twin-linked", a: "5", skill: "3+", s: "12", ap: "-3", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "Frenzied Reprisal", text: "Once per turn, when an enemy targets this unit in the Fight phase, it can fight again next regardless of whether it already fought." },
      { name: "Magna-grapple", text: "This model gets +2 to Charge rolls when charging a Monster or Vehicle." },
      { name: "Smoke Launchers", text: "The bearer loses Magna-grapple and gains the Smoke keyword." }
    ],
    keywords: ["VEHICLE", "WALKER", "IMPERIUM", "DREADNOUGHT", "DEATH COMPANY DREADNOUGHT"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "1 Death Company Dreadnought.",
    points: [{ models: 1, pts: 145 }],
  },
  {
    id: "death-company-marines-with-boltguns",
    name: "Death Company Marines with Boltguns",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "pistol, melta 2", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "An Honourable Death in Combat", text: "This unit's attacks gain Sustained Hits 1 if below Starting Strength, or Sustained Hits 2 if Below Half-strength." },
      { name: "DEATH COMPANY", text: "A Chaplain (or other Character) with Leader that can attach to a Tactical Squad or Death Company Marines can attach to this unit instead." }
    ],
    keywords: ["INFANTRY", "GRENADES", "IMPERIUM", "DEATH COMPANY", "DEATH COMPANY MARINES WITH BOLTGUNS"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "5-10 Death Company Marines.",
    points: [{ models: 5, pts: 125 }, { models: 10, pts: 250 }],
  },
  {
    id: "death-company-marines-with-boltguns-and-jump-packs",
    name: "Death Company Marines with Boltguns and Jump Packs",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "12\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Hand flamer", tags: "ignores cover, pistol, torrent", range: "12\"", a: "D6", skill: "N/A", s: "3", ap: "0", d: "1" },
      { name: "Inferno pistol", tags: "pistol, melta 2", range: "6\"", a: "1", skill: "3+", s: "8", ap: "-4", d: "D3" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Astartes chainsword", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Black Rage", text: "This model's melee attacks can re-roll the Hit roll. Unless within 6\" of a friendly Blood Angels Character (or 12\" of a Chaplain), it can't Fall Back and its Objective Control is 0." },
      { name: "Berserk Fury", text: "You can re-roll Charge rolls made for this unit." },
      { name: "DEATH COMPANY", text: "A Chaplain (or other Character) with Leader that can attach to a Tactical Squad or Death Company Marines can attach to this unit instead." }
    ],
    keywords: ["JUMP PACK", "INFANTRY", "FLY", "GRENADES", "IMPERIUM", "DEATH COMPANY", "DEATH COMPANY MARINES WITH BOLTGUNS AND JUMP PACKS"],
    factionKeywords: ["BLOOD ANGELS", "ADEPTUS ASTARTES"],
    composition: "5-10  Death Company Marines with Jump Packs.",
    points: [{ models: 5, pts: 140 }, { models: 10, pts: 280 }],
  },
  {
    id: "deathwatch-terminator-squad",
    name: "Deathwatch Terminator Squad",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "3", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Assault cannon", tags: "devastating wounds", range: "24\"", a: "6", skill: "3+", s: "6", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – frag", tags: "blast", range: "36\"", a: "2D6", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Cyclone missile launcher – krak", tags: "", range: "36\"", a: "2", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Plasma cannon – standard", tags: "blast", range: "36\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma cannon – supercharge", tags: "blast, hazardous", range: "36\"", a: "D3", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "5", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Terminatus Assault", text: "At the start of the Fight phase, engaged enemy units must take a Battle-shock test." },
      { name: "Teleport Homer", text: "You can set up a Teleport Homer token anywhere outside the enemy deployment zone at the start of the battle. Once per battle, you can use it to bring this unit in with a free (0CP) Rapid Ingress, arriving within 3\" of the token." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["TERMINATOR", "IMPERIUM", "INFANTRY", "KILL TEAM", "DEATHWATCH TERMINATOR SQUAD"],
    factionKeywords: ["DEATHWATCH", "ADEPTUS ASTARTES"],
    composition: "1 Deathwatch Terminator Sergeant; 4-9 Deathwatch Terminators.",
    points: [{ models: 5, pts: 180 }, { models: 10, pts: 330 }],
  },
  {
    id: "kill-team-cassius",
    name: "Kill Team Cassius",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Boltgun", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Deathwatch twin boltgun", tags: "TWIN-LINKED", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Frag cannon", tags: "blast, heavy, rapid fire d3", range: "18\"", a: "D3", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Long Vigil ranged weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Psychic Cleanse", tags: "psychic", range: "24\"", a: "D6", skill: "3+", s: "5", ap: "-1", d: "D3" }
    ],
    meleeWeapons: [
      { name: "Twin lightning claws", tags: "twin-linked", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Power fist", tags: "", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Long Vigil melee weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Artificer crozius", tags: "", a: "5", skill: "2+", s: "6", ap: "-1", d: "2" },
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Force weapon", tags: "psychic", a: "5", skill: "2+", s: "5", ap: "-3", d: "D3" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Assigned Agents", text: "Lets an Imperium army include Agents of the Imperium units even without selecting that Army Faction, within a limited points allowance." },
      { name: "Kill Team", text: "If this unit's models have different Toughness values, attacks against it use whichever Toughness the majority of the unit has (the higher value, if tied)." },
      { name: "Catechism of Death", text: "While this unit contains Chaplain Cassius, its melee weapons gain Devastating Wounds." },
      { name: "Unflinching", text: "You can re-roll Battle-shock tests for this unit." },
      { name: "Jump Pack", text: "The bearer has a 12\" Move and can move over models and terrain as if they weren't there." },
      { name: "Psychic Hood", text: "While this model is leading a unit, that unit has Feel No Pain 4+ specifically against Psychic Attacks." },
      { name: "CASSIUS", text: "Your army can't contain both Chaplain Cassius and Kill Team Cassius." }
    ],
    keywords: ["KILL TEAM CASSIUS", "CHARACTER", "EPIC HERO", "INFANTRY", "KILL TEAM", "GRENADES", "IMPERIUM", "ORDO XENOS", "KILL TEAM CASSIUS", "CHARACTER", "EPIC HERO", "INFANTRY", "KILL TEAM", "IMPERIUM", "ORDO XENOS", "KILL TEAM CASSIUS", "CHARACTER", "EPIC HERO", "INFANTRY", "KILL TEAM", "GRENADES", "IMPERIUM", "INFANTRY", "ORDO XENOS", "KILL TEAM CASSIUS", "CHARACTER", "EPIC HERO", "INFANTRY", "KILL TEAM", "GRENADES", "IMPERIUM", "ORDO XENOS", "KILL TEAM CASSIUS", "CHARACTER", "EPIC HERO", "INFANTRY", "KILL TEAM", "GRENADES", "IMPERIUM", "ORDO XENOS", "KILL TEAM CASSIUS", "CHARACTER", "EPIC HERO", "INFANTRY", "EPIC HERO", "CHARACTER", "KILL TEAM CASSIUS", "ORDO XENOS", "KILL TEAM", "IMPERIUM", "GRENADES", "KILL TEAM", "INFANTRY", "EPIC HERO", "CHARACTER", "KILL TEAM CASSIUS", "ORDO XENOS", "GRENADES", "IMPERIUM", "GRENADES", "INFANTRY", "KILL TEAM", "GRENADES", "IMPERIUM", "ORDO XENOS", "KILL TEAM CASSIUS", "CHARACTER", "EPIC HERO", "KILL TEAM", "GRENADES", "IMPERIUM", "ORDO XENOS"],
    factionKeywords: ["DEATHWATCH", "AGENTS OF THE IMPERIUM", "ADEPTUS ASTARTES"],
    composition: "1 Chaplain Cassius – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 8 Kill Team Veterans:<br><ul style=\"list-style-type:circle;\"><li>Vael Donatus</li><li>Zameon Gydrael</li><li>Rodricus Grytt</li><li>Antor Delassio</li><li>Edryc Setorax</li><li>Jensus Natorian</li><li>Drenn Redblade</li><li>Ennox Sorrlock</li></ul>; 1 Kill Team Terminator (Garran Branatar); 1 Kill Team Biker (Jetek Suberei).",
    points: [{ models: 11, pts: 220 }],
  },
  {
    id: "wolf-guard-battle-leader",
    name: "Wolf Guard Battle Leader",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Master-crafted bolt carbine", tags: "", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "2" },
      { name: "Master-crafted heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "", a: "7", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "5", skill: "3+", s: "8", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tempered Ferocity", text: "While this model is leading a unit, that unit's weapons gain Sustained Hits 1, and attacks within 6\" re-roll a Hit roll of 1." },
      { name: "Heroic Last Stand", text: "If this model is destroyed in melee before fighting, on a 2+ it fights anyway before being removed." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." }
    ],
    keywords: ["BATTLE LEADER", "WOLF GUARD", "TACTICUS", "IMPERIUM", "INFANTRY", "CHARACTER"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "1 Wolf Guard Battle Leader.",
    points: [{ models: 1, pts: 65 }],
  },
  {
    id: "wolf-guard-headtakers",
    name: "Wolf Guard Headtakers",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "3", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Master-crafted power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Paired master-crafted power weapons", tags: "", a: "6", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Teeth and claws", tags: "", a: "3", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Let Loose the Wolves", text: "At the start of Battle Formations, split this unit into its Headtakers and Hunting Wolves components as two separate units." },
      { name: "Headhunters", text: "At the start of the battle, pick an enemy unit as this unit's quarry — its Headtakers models gain Devastating Wounds and Precision against that quarry, switching to a new one if it's destroyed." },
      { name: "Hunting Hounds", text: "While within 6\" of a friendly Space Wolves Character (not Wulfen) and not Battle-shocked, this unit's Hunting Wolves models have Objective Control 1." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." }
    ],
    keywords: ["INFANTRY", "IMPERIUM", "WOLF GUARD", "HEADTAKERS", "BEASTS", "IMPERIUM", "HUNTING WOLVES", "TACTICUS"],
    factionKeywords: ["ADEPTUS ASTARTES", "SPACE WOLVES"],
    composition: "3-6 Wolf Guard Headtakers; 0-6 Hunting Wolves.",
    points: [{ models: 3, pts: 85 }, { models: 6, pts: 115 }, { models: 12, pts: 230 }],
  },
  {
    id: "wulfen-dreadnought",
    name: "Wulfen Dreadnought",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "9\"", T: "9", Sv: "2+", W: "8", Ld: "6+", OC: "0" },
    rangedWeapons: [
      { name: "Heavy flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Fenrisian greataxe – strike", tags: "", a: "6", skill: "3+", s: "10", ap: "-2", d: "D6+1" },
      { name: "Fenrisian greataxe – sweep", tags: "", a: "12", skill: "3+", s: "6", ap: "-2", d: "1" },
      { name: "Great wolf claw", tags: "", a: "6", skill: "3+", s: "10", ap: "-3", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Curse of the Wulfen", text: "While within range of certain Space Wolves Characters and not Battle-shocked, this unit's Objective Control increases (+1 for Infantry, +3 for Vehicles)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Bestial Rage", text: "If this model loses a wound to enemy shooting, this unit can make a surge move of up to D6+2\"." },
      { name: "Violent Fury", text: "If this model has two melee weapons, both get the Twin-linked ability." },
      { name: "Blizzard Shield", text: "The bearer has a 4+ invulnerable save." }
    ],
    keywords: ["DREADNOUGHT", "VEHICLE", "WALKER", "IMPERIUM", "WULFEN"],
    factionKeywords: ["SPACE WOLVES", "ADEPTUS ASTARTES"],
    composition: "1 Wulfen Dreadnought.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "aethon-shaan",
    name: "Aethon Shaan",
    faction: "Space Marines",
    base: "50mm",
    stats: { M: "14\"", T: "4", Sv: "3+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "2+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Claws of Severax", tags: "sustained hits 2, twin-linked", a: "7", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Master of Shadows", text: "In your Command phase, pick an enemy unit — friendly Adeptus Astartes charging it within 12\" can re-roll the Charge roll, but must target it." },
      { name: "Blackwing Mantle", text: "This unit can be targeted by Rapid Ingress or Heroic Intervention even if already used elsewhere this phase, for 1 extra CP, without blocking other uses." },
      { name: "CHAPTER MASTER OF THE RAVEN GUARD", text: "If your army has both this model and Kayvaan Shrike, Shrike loses Lone Operative and becomes a Captain instead of Chapter Master for the battle." }
    ],
    keywords: ["INFANTRY", "FLY", "AETHON SHAAN", "CHAPTER MASTER", "TACTICUS", "IMPERIUM", "JUMP PACK", "EPIC HERO", "CHARACTER"],
    factionKeywords: ["RAVEN GUARD", "ADEPTUS ASTARTES"],
    composition: "1 Aethon Shaan – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "decimus-kill-team",
    name: "Decimus Kill Team",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Astartes grenade launcher – frag", tags: "blast", range: "24\"", a: "D3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Astartes grenade launcher – krak", tags: "", range: "24\"", a: "1", skill: "3+", s: "9", ap: "-2", d: "D3" },
      { name: "Bolt pistol", tags: "pistol, lethal hits", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Deathwatch marksman bolt carbine", tags: "heavy, lethal hits", range: "24\"", a: "2", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Frag cannon", tags: "blast, heavy, lethal hits, rapid fire d3", range: "18\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Hellstorm bolt rifle", tags: "assault, heavy, lethal hits", range: "30\"", a: "2", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Infernus heavy bolter – heavy bolter", tags: "SUSTAINED HITS 1", range: "36\"", a: "3", skill: "3+", s: "5", ap: "-2", d: "3" },
      { name: "Infernus heavy bolter – heavy flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "5", ap: "-1", d: "1" },
      { name: "Plasma incinerator – standard", tags: "assault, heavy", range: "24\"", a: "2", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma incinerator – supercharge", tags: "assault, hazardous, heavy", range: "24\"", a: "2", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol - standard", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol - supercharge", tags: "HAZARDOUS, PISTOL", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Special-issue bolt pistol", tags: "pistol, precision, lethal hits", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Stalker bolt rifle", tags: "heavy, lethal hits, precision", range: "30\"", a: "2", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Combat knife", tags: "precision", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Heavy thunder hammer", tags: "devastating wounds", a: "3", skill: "4+", s: "10", ap: "-2", d: "3" },
      { name: "Power weapon", tags: "sustained hits 1", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Xenophase blade", tags: "devastating wounds", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Mission Tactics", text: "At the start of your Command phase, pick one Mission Tactic to be active until your next Command phase — each can only be chosen once per battle." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Death to the Alien", text: "This unit's attacks re-roll a Hit roll of 1, or any Hit roll against a non-Imperium, non-Chaos target." },
      { name: "Astartes Shield", text: "The bearer has a 4+ invulnerable save." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["INFANTRY", "DECIMUS KILL TEAM", "KILL TEAM", "GRENADES", "IMPERIUM", "BATTLELINE", "TACTICUS", "GRAVIS"],
    factionKeywords: ["ADEPTUS ASTARTES", "DEATHWATCH"],
    composition: "1 Kill Team Sergeant; 1 Gravis Veteran; 3 Deathwatch Veterans; OR; 1 Kill Team Sergeant; 2 Gravis Veterans; 7 Deathwatch Veterans.",
    points: [{ models: 5, pts: 100 }, { models: 10, pts: 190 }],
  },
  {
    id: "wolf-scouts",
    name: "Wolf Scouts",
    faction: "Space Marines",
    base: "32mm",
    stats: { M: "7\"", T: "4", Sv: "3+", W: "2", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Instigator bolt carbine", tags: "precision", range: "24\"", a: "1", skill: "3+", s: "4", ap: "-2", d: "2" },
      { name: "Plasma gun – standard", tags: "rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma gun – supercharge", tags: "hazardous, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "2" },
      { name: "Thunderclap", tags: "blast, psychic", range: "12\"", a: "D3", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Combat blade", tags: "", a: "4", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Power weapon", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "1" },
      { name: "Runic stave", tags: "psychic", a: "3", skill: "3+", s: "6", ap: "-1", d: "D3" },
      { name: "Teeth and claws", tags: "", a: "2", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Deadly Stalkers", text: "When this unit attacks a target with no other enemy units within 6\", add 1 to the Wound roll." },
      { name: "Hunting Hounds", text: "While within 6\" of a friendly Space Wolves Character (not Wulfen) and not Battle-shocked, this unit's Hunting Wolves models have Objective Control 1." },
      { name: "Haywire Mine", text: "Once per battle, target an enemy within 3\" of the bearer and roll a D6 — on a 2+, it takes D3 mortal wounds (2D3 if a Vehicle)." }
    ],
    keywords: ["PHOBOS", "WOLF SCOUTS", "INFANTRY", "SMOKE", "IMPERIUM", "GRENADES"],
    factionKeywords: ["SPACE WOLVES", "ADEPTUS ASTARTES"],
    composition: "1 Wolf Scout Pack Leader; 4 Wolf Scouts; 1 Hunting Wolf; OR; 1 Wolf Scout Pack Leader; 9 Wolf Scouts; 2 Hunting Wolves.",
    points: [{ models: 6, pts: 90 }, { models: 12, pts: 180 }],
  },
  {
    id: "victrix-honour-guard",
    name: "Victrix Honour Guard",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "2+", W: "3", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Master-crafted bolt carbine", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Blades of honour", tags: "precision, twin-linked", a: "6", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Master-crafted power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Ultramarines Honour Guard", text: "While led by a Captain or Chapter Master, attacks against this unit take -1 to wound." },
      { name: "Glory of Ultramar", text: "If this unit loses a model to enemy shooting, it can make a surge move of up to D6\"." },
      { name: "Banner of Macragge", text: "Once per battle, at the start of the Fight phase, the bearer's unit gets +1 Strength and +1 Attacks on melee weapons for the rest of the phase." },
      { name: "ATTACHED UNIT", text: "A Character with the Leader ability that can attach to a stated unit can attach to this unit instead." }
    ],
    keywords: ["ANCIENT", "EPIC HERO", "CHAMPION", "INFANTRY", "IMPERIUM", "TACTICUS", "VICTRIX HONOUR GUARD", "EPIC HERO"],
    factionKeywords: ["ADEPTUS ASTARTES", "ULTRAMARINES"],
    composition: "0-1 Chapter Ancient – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 0-1 Chapter Champion – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 1-6 Victrix Honour Guard.",
    points: [{ models: 3, pts: 110 }, { models: 6, pts: 230 }],
  },
  {
    id: "captain-titus",
    name: "Captain Titus",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "6", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "PISTOL", range: "12\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted bolter", tags: "assault, heavy", range: "24\"", a: "2", skill: "2+", s: "4", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Master-crafted chainsword", tags: "ANTI-INFANTRY 2+", a: "8", skill: "2+", s: "5", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Press the Attack", text: "This model's unit's weapons gain Sustained Hits 1." },
      { name: "Honour of Ultramar", text: "If this model is destroyed in melee before fighting, on a 2+ it fights anyway — if it destroys an enemy, it heals D3 wounds and survives instead." },
      { name: "DEMETRIAN TITUS", text: "Your army can't include more than one Titus unit." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "IMPERIUM", "TACTICUS", "GRENADES", "CAPTAIN", "TITUS"],
    factionKeywords: ["ADEPTUS ASTARTES", "ULTRAMARINES"],
    composition: "1 Captain Titus – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "wardens-of-ultramar",
    name: "Wardens of Ultramar",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "3+", W: "4", Ld: "6+", OC: "1" },
    rangedWeapons: [
      { name: "Archeotech laspistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Astropathic Blast", tags: "blast, psychic", range: "12\"", a: "D6", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Bolt rifle", tags: "assault, heavy", range: "24\"", a: "2", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Heavy bolt pistol", tags: "pistol", range: "18\"", a: "1", skill: "3+", s: "4", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "4", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Force stave", tags: "psychic", a: "1", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Power weapon", tags: "", a: "4", skill: "2+", s: "4", ap: "-2", d: "1" },
      { name: "Master-crafted power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Second Company Banner", text: "While this unit contains Ancient Gadriel, it gets +1 Objective Control; with Captain Titus too, also +1 Leadership." },
      { name: "Strategium Command", text: "After deployment, if this unit (or its Transport) is on the battlefield, redeploy up to three Adeptus Astartes units, including into Strategic Reserves beyond normal limits." },
      { name: "Refractor Field", text: "The bearer has a 5+ invulnerable save." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." }
    ],
    keywords: ["INFANTRY", "GRENADES", "IMPERIUM", "TACTICUS", "WARDENS OF ULTRAMAR", "PSYKER", "EPIC HERO"],
    factionKeywords: ["ADEPTUS ASTARTES", "ULTRAMARINES"],
    composition: "1 Ancient Gadriel – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 1 Veteran Sergeant Metaurus – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>;  1 Gaius Silva – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>;  1 Aemelia Minervas – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 1 Dainal Kornelius – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 1 Lucia Vestha – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 6, pts: 120 }],
  },
  {
    id: "wolf-guard-battle-leader-in-terminator-armour",
    name: "Wolf Guard Battle Leader In Terminator Armour",
    faction: "Space Marines",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "2+", W: "5", Ld: "6+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chainfist", tags: "anti-vehicle 3+", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Close combat weapon", tags: "", a: "5", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Power weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "1" },
      { name: "Power fist", tags: "", a: "4", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "6", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tactical Precision", text: "While this model is leading a unit, that unit's weapons gain Lethal Hits." },
      { name: "Huskarl to the Jarl", text: "While attached to a unit containing another Character, all Characters in that unit get Feel No Pain 4+." },
      { name: "Relic Shield", text: "The bearer has a Wounds characteristic of 6." }
    ],
    keywords: ["WOLF GUARD BATTLE LEADER IN TERMINATOR ARMOUR", "TERMINATOR", "CHARACTER", "IMPERIUM", "INFANTRY"],
    factionKeywords: ["SPACE WOLVES", "ADEPTUS ASTARTES"],
    composition: "1 Wolf Guard Battle Leader in Terminator Armour.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "wolf-guard-battle-leader-on-thunderwolf",
    name: "Wolf Guard Battle Leader On Thunderwolf",
    faction: "Space Marines",
    base: "60mm",
    stats: { M: "10\"", T: "6", Sv: "3+", W: "5", Ld: "6+", OC: "2" },
    rangedWeapons: [
      { name: "Bolt pistol", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "4", ap: "0", d: "1" },
      { name: "Combi-weapon", tags: "anti-infantry 4+, devastating wounds, rapid fire 1", range: "24\"", a: "1", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Master-crafted boltgun", tags: "", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "2" },
      { name: "Plasma pistol – standard", tags: "pistol", range: "12\"", a: "1", skill: "2+", s: "7", ap: "-2", d: "1" },
      { name: "Plasma pistol – supercharge", tags: "hazardous, pistol", range: "12\"", a: "1", skill: "2+", s: "8", ap: "-3", d: "2" },
      { name: "Storm bolter", tags: "rapid fire 2", range: "24\"", a: "2", skill: "2+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "5", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Crushing teeth and claws", tags: "extra attacks", a: "3", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Power fist", tags: "", a: "4", skill: "2+", s: "8", ap: "-2", d: "2" },
      { name: "Relic weapon", tags: "", a: "5", skill: "2+", s: "5", ap: "-2", d: "2" },
      { name: "Thunder hammer", tags: "devastating wounds", a: "4", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Twin lightning claws", tags: "twin-linked", a: "6", skill: "2+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Oath of Moment", text: "Army rule: at the start of your Command phase, pick an enemy unit as your Oath of Moment target — attacks against it from models with this rule can re-roll the Hit roll." },
      { name: "Tactical Precision", text: "While this model is leading a unit, that unit's weapons gain Lethal Hits." },
      { name: "Aggressive Hunter", text: "If this unit loses a model to enemy shooting, it can make a surge move of up to D6\"." },
      { name: "Storm Shield", text: "The bearer has a Wounds characteristic of 4." }
    ],
    keywords: ["MOUNTED", "WOLF GUARD BATTLE LEADER ON THUNDERWOLF", "CHARACTER", "GRENADES", "IMPERIUM"],
    factionKeywords: ["SPACE WOLVES", "ADEPTUS ASTARTES"],
    composition: "1 Wolf Guard Battle Leader on Thunderworlf.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "warboss",
    name: "Warboss",
    faction: "Orks",
    base: "40mm",
    stats: { M: "6\"", T: "6", Sv: "4+", W: "6", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Kombi-rokkit - Busta Rokkit", tags: "", range: "24\"", a: "1", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Kombi-rokkit - Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Kombi-skorcha - Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Kombi-skorcha - Skorcha", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "0", d: "1" },
      { name: "Kustom Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "18\"", a: "4", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Kustom Choppa", tags: "CLEAVE 2", a: "6", skill: "2+", s: "7", ap: "-2", d: "2" },
      { name: "Power Klaw", tags: "", a: "6", skill: "2+", s: "12", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Da Boss", text: "At the start of the battle round, if this model is your Warlord, gain 1 Command Point." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Boss’ Ammo Runt (Once per battle, per unit)", text: "Once per battle, when this unit shoots, its ranged attacks get +1 to hit." },
      { name: "Might Is Right", text: "If this unit charged this turn, this model's melee attacks get +3 Attacks and +2 Strength." },
      { name: "Intimidating Motivation (Once per battle round, per army)", text: "During this unit's move, pick a friendly Orks unit within 6\" — it's no longer Battle-shocked and becomes Riled Up until your next turn." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EXPLOSIVES", "WARBOSS"],
    factionKeywords: ["ORKS"],
    composition: "1 Warboss model.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "weirdboy",
    name: "Weirdboy",
    faction: "Orks",
    base: "50mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "4", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Power Vomit", tags: "BLAST 1, Hazardous, PSYCHIC, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "-3", d: "2" }
    ],
    meleeWeapons: [
      { name: "Copper Staff", tags: "PSYCHIC", a: "3", skill: "3+", s: "8", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Unstable Energies", text: "This Ork Psyker can use psychic abilities in a battle round up to its total psyker level — e.g. a level-3 Psyker could use three level-1 abilities, or other combinations that add up to 3." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Waaagh! Energy (psyker level 1)", text: "This model has psyker level 1, granting access to its listed psychic abilities." },
      { name: "Da Jump (psychic level 1, once per army, per battle round)", text: "In your Movement phase, roll a D6 for this unit — on a 1 it's Battle-shocked, but otherwise it goes to Strategic Reserves with Deep Strike to redeploy." },
      { name: "Warpath (psychic level 1)", text: "When this unit fights, roll a D6 — on a 1 it's Battle-shocked, otherwise its melee attacks re-roll a Wound roll of 1 and gain the Psychic keyword." }
    ],
    keywords: ["CHARACTER", "INFANTRY", "PSYKER"],
    factionKeywords: ["ORKS"],
    composition: "1 Weirdboy model.",
    points: [{ models: 1, pts: 65 }],
  },
  {
    id: "big-mek-in-mega-armour",
    name: "Big Mek In Mega Armour",
    faction: "Orks",
    base: "40mm",
    stats: { M: "5\"", T: "6", Sv: "2+", W: "5", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Kombi-weapon - Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Kombi-weapon - Kill Shot", tags: "", range: "24\"", a: "1", skill: "4+", s: "10", ap: "-2", d: "3" },
      { name: "Kombi-weapon - Point Blank", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "0", d: "1" },
      { name: "Kustom Mega-blasta", tags: "Hazardous", range: "24\"", a: "3", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Kustom Shoota - Aimed", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "18\"", a: "4", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Kustom Shoota - Point Blank", tags: "CLOSE-QUARTERS, Torrent", range: "6\"", a: "D3+3", skill: "-+", s: "4", ap: "0", d: "1" },
      { name: "Tellyport Blasta", tags: "BLAST 1", range: "12\"", a: "6", skill: "4+", s: "9", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Killsaw", tags: "", a: "3", skill: "4+", s: "10", ap: "-2", d: "3" },
      { name: "Power Klaw", tags: "", a: "3", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Fix Dat Armour Up (Once per battle, per unit)", text: "In your Command phase, this unit heals 3 wounds." },
      { name: "More Dakka", text: "This unit's ranged attacks gain Ignores Cover, plus Sustained Hits 1 while Riled Up." },
      { name: "Kustom Force Field", text: "This unit has a 4+ invulnerable save specifically against ranged attacks." }
    ],
    keywords: ["EXPLOSIVES", "BIG MEK", "CHARACTER", "MEGA ARMOUR", "INFANTRY"],
    factionKeywords: ["ORKS"],
    composition: "1 Big Mek in Mega Armour model.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "ghazghkull-thraka",
    name: "Ghazghkull Thraka",
    faction: "Orks",
    base: "80mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "16", Ld: "6+", OC: "4", InvSv: "4+" },
    rangedWeapons: [
      { name: "Mork’s Roar - Aimed", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 4", range: "36\"", a: "12", skill: "5+", s: "6", ap: "-1", d: "1" },
      { name: "Mork’s Roar - Point Blank", tags: "CLOSE-QUARTERS, Torrent", range: "9\"", a: "2D6+2", skill: "-+", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Adamantine ’Eadbutt", tags: "Devastating Wounds, Extra Attacks, Precision", a: "1", skill: "2+", s: "14", ap: "-2", d: "D3+3" },
      { name: "Gork’s Klaw", tags: "CLEAVE 2, Devastating Wounds", a: "7", skill: "2+", s: "14", ap: "-3", d: "4" }
    ],
    abilities: [
      { name: "Da Boss", text: "At the start of the battle round, if this model is your Warlord, gain 1 Command Point." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Da Grand Warlord's Ladz", text: "While within 3\" of another friendly Orks Infantry unit, this unit has Lone Operative." },
      { name: "Makari, Hoist Dat Banner! (Once per battle, per army)", text: "Once per battle, in your Movement phase, make a number of friendly Orks units (up to the battle round number) Riled Up until your next turn." },
      { name: "Prophet of da Great Waaagh! (Aura)", text: "Friendly Orks units within 6\" get +1 to hit and +1 to wound on melee attacks." },
      { name: "SUPREME COMMANDER", text: "This model must be your Warlord if included in your army." }
    ],
    keywords: ["EXPLOSIVES", "INFANTRY", "CHARACTER", "EPIC HERO", "WARBOSS"],
    factionKeywords: ["ORKS"],
    composition: "1 Ghazghkull Thraka model.",
    points: [{ models: 1, pts: 300 }],
  },
  {
    id: "boyz",
    name: "Boyz",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "1", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "36\"", a: "3", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Burna", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "4", ap: "0", d: "1" },
      { name: "Kombi-rokkit - Busta Rokkit", tags: "", range: "24\"", a: "1", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Kombi-rokkit - Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Kombi-skorcha - Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Kombi-skorcha - Skorcha", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "0", d: "1" },
      { name: "Kustom Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "18\"", a: "4", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Blasta", tags: "BLAST 2", range: "24\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Busta", tags: "", range: "24\"", a: "2", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Big Choppa", tags: "CLEAVE 2", a: "4", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Choppa", tags: "", a: "3", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Kustom Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Power Klaw", tags: "", a: "3", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Ammo Runts (Once per battle, per unit)", text: "Once per battle, when this unit shoots, its ranged attacks get +1 to hit." },
      { name: "Tide of Muscle", text: "If this unit charged this turn, its melee attacks gain Lethal Hits." },
      { name: "Never Too Busy to Fight", text: "Being engaged doesn't stop this unit from starting an action." }
    ],
    keywords: ["EXPLOSIVES", "BATTLELINE", "INFANTRY", "MOB"],
    factionKeywords: ["ORKS"],
    composition: "1-2 Nob models; 9-18 Boy models.",
    points: [{ models: 10, pts: 90 }, { models: 20, pts: 180 }],
  },
  {
    id: "tankbustas",
    name: "Tankbustas",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "2", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Busta Rokkit Launcha - Standard", tags: "", range: "24\"", a: "2", skill: "4+", s: "10", ap: "-2", d: "3" },
      { name: "Busta Rokkit Launcha - Hunter", tags: "", range: "24\"", a: "3", skill: "4+", s: "12", ap: "-2", d: "3" },
      { name: "Rokkit Pistol", tags: "CLOSE-QUARTERS", range: "12\"", a: "1", skill: "4+", s: "10", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Gitstikka", tags: "", a: "3", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Smash Hammer - Standard", tags: "", a: "3", skill: "3+", s: "7", ap: "-2", d: "2" },
      { name: "Smash Hammer - Hunter", tags: "", a: "3", skill: "3+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Rokkit Barrage", text: "After this unit shoots, an enemy it hit takes a Battle-shock test at -1." },
      { name: "Bomb Squigs (Once per turn, twice per battle, per unit)", text: "Up to twice per battle, after a Normal move, target a visible enemy within 12\" and roll a D6 — on a 3+, it takes D3 mortal wounds." },
      { name: "Pulsa Rokkit", text: "When this unit shoots, pick a Monster/Vehicle within 24\" — attacks against it get +1 Armour Penetration and Lethal Hits." }
    ],
    keywords: ["INFANTRY", "EXPLOSIVES"],
    factionKeywords: ["ORKS"],
    composition: "1 Nob model; 5 Tankbusta models.",
    points: [{ models: 6, pts: 145 }],
  },
  {
    id: "nobz",
    name: "Nobz",
    faction: "Orks",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Big Skorcha", tags: "BLAST 2, Torrent", range: "18\"", a: "3", skill: "-+", s: "5", ap: "-1", d: "1" },
      { name: "Kustom Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE", range: "18\"", a: "8", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Kombi-rokkit - Busta Rokkit", tags: "", range: "24\"", a: "1", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Kombi-rokkit - Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 1", range: "18\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Kustom Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "18\"", a: "4", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Big Choppa", tags: "CLEAVE 2", a: "4", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Kustom Choppa", tags: "", a: "4", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Kustom Krumpa", tags: "", a: "3", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Get Out da Way!", text: "While charging, this unit can move through non-Monster/Vehicle models." },
      { name: "Ammo Runts (Once per battle, per unit)", text: "Once per battle, when this unit shoots, its ranged attacks get +1 to hit." },
      { name: "Paired Krumpas", text: "Attacks with this model's Kustom Krumpa weapon can re-roll both Hit and Wound rolls." }
    ],
    keywords: ["INFANTRY", "EXPLOSIVES"],
    factionKeywords: ["ORKS"],
    composition: "5-10 Nob models.",
    points: [{ models: 5, pts: 125 }, { models: 10, pts: 250 }],
  },
  {
    id: "kommandos",
    name: "Kommandos",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "1", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Burna", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "4", ap: "0", d: "1" },
      { name: "Kustom Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "18\"", a: "4", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Blasta", tags: "BLAST 2", range: "24\"", a: "2", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Rokkit Launcha - Busta", tags: "", range: "24\"", a: "2", skill: "5+", s: "10", ap: "-2", d: "3" },
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Big Choppa", tags: "CLEAVE 2", a: "4", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Breacha Ram", tags: "", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Choppa", tags: "", a: "3", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Power Klaw", tags: "", a: "3", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Found ’Em!", text: "In your Movement phase, target an enemy within 12\" to increase its detection range by 3\" for the turn." },
      { name: "Taktikal Know-wotz", text: "During Battle Formations, split this unit into two 5-model units, assigning Bomb Squig to one and Found 'Em! to the other." },
      { name: "Nowhere to Hide", text: "Friendly Mounted or Flying Vehicles within 6\" get Ignores Cover on their ranged weapons." },
      { name: "Bomb Squig (Once per battle, per unit)", text: "Once per battle, after a Normal move, target a visible enemy within 12\" and roll a D6 — on a 3+, it takes D3 mortal wounds." }
    ],
    keywords: ["EXPLOSIVES", "INFANTRY", "SMOKE"],
    factionKeywords: ["ORKS"],
    composition: "1 Nob model; 9 Kommando models.",
    points: [{ models: 10, pts: 125 }],
  },
  {
    id: "beastboss-on-squigosaur",
    name: "Beastboss on Squigosaur",
    faction: "Orks",
    base: "80mm",
    stats: { M: "10\"", T: "9", Sv: "3+", W: "10", Ld: "6+", OC: "3", InvSv: "5+" },
    rangedWeapons: [
      { name: "Slugga", tags: "CLOSE-QUARTERS, LETHAL HITS: non-MONSTER/VEHICLE", range: "12\"", a: "1", skill: "5+", s: "4", ap: "0", d: "1" },
      { name: "Thump Gun", tags: "ANTI-MONSTER/VEHICLE 4+", range: "18\"", a: "3", skill: "5+", s: "6", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Beastchoppa - Standard", tags: "CLEAVE 1", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" },
      { name: "Beastchoppa - Hunter", tags: "", a: "6", skill: "2+", s: "12", ap: "-2", d: "D6" },
      { name: "Squigosaur’s Jaws", tags: "ANTI-MONSTER/VEHICLE 3+, Extra Attacks", a: "3", skill: "3+", s: "7", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Da Boss", text: "At the start of the battle round, if this model is your Warlord, gain 1 Command Point." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Thundering Stampede (Aura)", text: "Friendly Beast Snagga units within 6\" get +1 to Charge rolls." },
      { name: "Keep Huntin’! (Once per battle round, per army)", text: "During this unit's move, pick a friendly Beast Snagga unit within 6\" — no longer Battle-shocked, and Riled Up until your next turn." },
      { name: "Boss of da Hunt", text: "While within 3\" of a friendly Beast Snagga unit (not Monster Characters), this unit has Lone Operative." }
    ],
    keywords: ["WARBOSS", "BEAST SNAGGA", "CHARACTER", "MONSTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Beastboss on Squigosaur model.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "painboss",
    name: "Painboss",
    faction: "Orks",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "4", Ld: "7+", OC: "1", InvSv: "6+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Beast Snagga Klaw", tags: "ANTI-MONSTER/VEHICLE 4+", a: "3", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Support", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it — the Support-slot counterpart to Leader." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Push Dat Bit Back In (Once per battle, per unit)", text: "Once per battle, in your Command phase, a nearby friendly Beast Snagga unit within 6\" heals 3 wounds." },
      { name: "Hardy Bioniks", text: "Attacks against this unit with higher Strength than its Toughness take -1 to wound." },
      { name: "Runnin’ wiv da Herd", text: "While attached to a Mounted unit, this model loses Infantry, gains Mobile and Mounted, and gets +4\" Move." }
    ],
    keywords: ["BEAST SNAGGA", "INFANTRY", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Painboss model.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "mozrog-skragbad",
    name: "Mozrog Skragbad",
    faction: "Orks",
    base: "80mm",
    stats: { M: "10\"", T: "9", Sv: "3+", W: "10", Ld: "6+", OC: "3", InvSv: "4+" },
    rangedWeapons: [
      { name: "Thump Gun", tags: "ANTI-MONSTER/VEHICLE 4+", range: "18\"", a: "3", skill: "5+", s: "6", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Big Chompa’s Jaws", tags: "ANTI-MONSTER/VEHICLE 3+, Extra Attacks", a: "3", skill: "3+", s: "7", ap: "-2", d: "4" },
      { name: "Gutrippa - Standard", tags: "CLEAVE 1", a: "6", skill: "2+", s: "9", ap: "-2", d: "2" },
      { name: "Gutrippa - Hunter", tags: "Lethal Hits", a: "6", skill: "2+", s: "12", ap: "-2", d: "D6+1" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "One Last Kill", text: "If this model is destroyed before its unit fights, on a 2+ it stays until the unit fights (or the phase ends), then is removed." },
      { name: "Da Bigger Dey Iz…", text: "This unit's melee attacks against Monster/Vehicle targets can re-roll the Wound roll." },
      { name: "Beast Snagga Following", text: "While within 3\" of a friendly Beast Snagga unit (not Monster Characters), this unit has Lone Operative." }
    ],
    keywords: ["BEAST SNAGGA", "MONSTER", "EPIC HERO", "CHARACTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Mozrog Skragbad model.",
    points: [{ models: 1, pts: 170 }],
  },
  {
    id: "kill-rig",
    name: "Kill Rig",
    faction: "Orks",
    base: "170 x 109mm",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "16", Ld: "7+", OC: "5", InvSv: "6+" },
    rangedWeapons: [
      { name: "’Eavy Lobba", tags: "BLAST 2, Indirect Fire", range: "48\"", a: "3", skill: "5+", s: "6", ap: "0", d: "2" },
      { name: "Stikka Kannon", tags: "ANTI-MONSTER/VEHICLE 2+", range: "12\"", a: "1", skill: "5+", s: "12", ap: "-2", d: "3" },
      { name: "Wurrtower", tags: "Hazardous, PSYCHIC, Torrent", range: "24\"", a: "1", skill: "-+", s: "12", ap: "-3", d: "6" }
    ],
    meleeWeapons: [
      { name: "Butcha Boyz", tags: "ANTI-MONSTER/VEHICLE 4+, Extra Attacks", a: "4", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Savage Horns and Hooves", tags: "Extra Attacks, Lance", a: "4", skill: "4+", s: "8", ap: "-1", d: "3" },
      { name: "Saw Blades", tags: "CLEAVE 1, Extra Attacks", a: "6", skill: "3+", s: "10", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Damaged", text: "Damaged X: while a model's remaining wounds are X or fewer, its attacks take a -1 penalty to hit rolls." },
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Unstable Energies", text: "This Ork Psyker can use psychic abilities in a battle round up to its total psyker level — e.g. a level-3 Psyker could use three level-1 abilities, or other combinations that add up to 3." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Wurrboy (psyker level 1)", text: "This model has psyker level 1, granting access to its listed psychic abilities." },
      { name: "Beastscent (psychic level 1)", text: "When a unit disembarks from this unit, roll a D6 — on a 1 this unit is Battle-shocked, otherwise the disembarking unit gets +1 to wound against Monster/Vehicle targets this turn." },
      { name: "Warpath (psychic level 1)", text: "When this unit fights, roll a D6 — on a 1 it's Battle-shocked, otherwise its melee attacks re-roll a Wound roll of 1 and gain the Psychic keyword." }
    ],
    keywords: ["WAGON", "PSYKER", "TRANSPORT", "BEAST SNAGGA", "MONSTER"],
    factionKeywords: ["ORKS"],
    composition: "1 Kill Rig model.",
    points: [{ models: 1, pts: 175 }],
  },
  {
    id: "biged-bossbunka",
    name: "Big’ed Bossbunka",
    faction: "Orks",
    base: "Use model",
    stats: { M: "-", T: "10", Sv: "3+", W: "12", Ld: "7+", OC: "0" },
    rangedWeapons: [
      { name: "Big Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Gaze of Gork - Glare", tags: "BLAST 1", range: "24\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Gaze of Gork - Squint", tags: "", range: "18\"", a: "1", skill: "5+", s: "12", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Raucous Occupants", text: "While near your home objective, this model's Objective Control includes the OC of its embarked passengers." },
      { name: "Fortification", text: "Enemies only engaged with this Fortification can still be shot (except by Pistols, at -1 to hit) and don't need Desperate Escape tests to Fall Back from it." },
      { name: "Ramshackle Cover", text: "A ranged attack against a friendly model is treated as Benefit of Cover if this Fortification blocks it from being fully visible." }
    ],
    keywords: ["TRANSPORT", "FRAME", "FORTIFICATION", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Big’ed Bossbunka model.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "wazdakka-gutsmek",
    name: "Wazdakka Gutsmek",
    faction: "Orks",
    base: "120 x 92mm",
    stats: { M: "14\"", T: "8", Sv: "3+", W: "10", Ld: "6+", OC: "3", InvSv: "4+" },
    rangedWeapons: [
      { name: "Grabba Dragga", tags: "ASSAULT, Precision", range: "12\"", a: "1", skill: "2+", s: "10", ap: "-2", d: "3" },
      { name: "Psyko-gatler", tags: "ASSAULT, LETHAL HITS: non-MONSTER/VEHICLE, Sustained Hits 1", range: "24\"", a: "12", skill: "4+", s: "6", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Speeding Bulk and Flaming Exhaust", tags: "CLEAVE 1, Extra Attacks", a: "3", skill: "2+", s: "5", ap: "-1", d: "1" },
      { name: "Fixit’s Wrench", tags: "Extra Attacks", a: "1", skill: "4+", s: "3", ap: "0", d: "1" },
      { name: "Grabba Dragga", tags: "CLEAVE 2, Lance", a: "6", skill: "2+", s: "10", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Full Throttle", text: "In your Command phase, pick one special ability for this unit, active until your next Command phase." },
      { name: "Turbo Engine", text: "This unit can still charge after making an Advance or Fall Back move." },
      { name: "Shokk Attack Engine", text: "In your Command phase, if unengaged, this unit can return to Strategic Reserves." },
      { name: "Pulse Jet", text: "If unengaged, this unit can make a special pulse jet move when it's selected to move." }
    ],
    keywords: ["MOUNTED", "CHARACTER", "EPIC HERO", "SMOKE", "SPEED FREEKS", "VEHICLE"],
    factionKeywords: ["ORKS"],
    composition: "1 Wazdakka Gutsmek model.",
    points: [{ models: 1, pts: 200 }],
  },
  {
    id: "nazdreg",
    name: "Nazdreg",
    faction: "Orks",
    base: "60mm",
    stats: { M: "5\"", T: "7", Sv: "2+", W: "8", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Kustom Blasta X - Gatler", tags: "Hazardous", range: "24\"", a: "6", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Kustom Blasta X - Shoota", tags: "LETHAL HITS: non-MONSTER/VEHICLE, Rapid Fire 2", range: "18\"", a: "4", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Kustom Blasta X - Skorcha", tags: "BLAST 1, Torrent", range: "12\"", a: "3", skill: "-+", s: "5", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Kustom Blasta X", tags: "CLEAVE 1, Extra Attacks", a: "6", skill: "2+", s: "5", ap: "-1", d: "1" },
      { name: "Moonchewa", tags: "CLEAVE 1, Twin-linked", a: "5", skill: "2+", s: "12", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Da Boss", text: "At the start of the battle round, if this model is your Warlord, gain 1 Command Point." },
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Intimidating Motivation (Once per battle round, per army)", text: "During this unit's move, pick a friendly Orks unit within 6\" — it's no longer Battle-shocked and becomes Riled Up until your next turn." },
      { name: "Nazdreg’s Know-wotz", text: "This unit has Deep Strike and its ranged attacks gain Ignores Cover." },
      { name: "Supreme Kunnin’ (Once per phase, per army)", text: "In your opponent's Movement phase, if an enemy ends a move within 8\" and this unit is unengaged, it can make a Normal move (up to 5\" if Riled Up)." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "MEGA ARMOUR", "WARBOSS"],
    factionKeywords: ["ORKS"],
    composition: "1 Nazdreg model.",
    points: [{ models: 1, pts: 175 }],
  },
  {
    id: "commander-in-coldstar-battlesuit",
    name: "Commander In Coldstar Battlesuit",
    faction: "T'au Empire",
    base: "60mm",
    stats: { M: "12\"", T: "5", Sv: "3+", W: "6", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Airbursting fragmentation projector", tags: "blast, indirect fire", range: "24\"", a: "D6", skill: "3+", s: "3", ap: "0", d: "1" },
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Cyclic ion blaster – standard", tags: "", range: "18\"", a: "3", skill: "3+", s: "7", ap: "-1", d: "1" },
      { name: "Cyclic ion blaster – overcharge", tags: "hazardous", range: "18\"", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Fusion blaster", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "High-output burst cannon", tags: "", range: "18\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Plasma rifle", tags: "", range: "18\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "T’au flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Coldstar Commander", text: "While this model is leading a unit, that unit gets a 12\" Move and its ranged weapons gain the Assault ability." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Shield Generator", text: "The bearer has a 4+ invulnerable save." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." }
    ],
    keywords: ["FLY", "CHARACTER", "COMMANDER IN COLDSTAR BATTLESUIT", "BATTLESUIT", "VEHICLE", "WALKER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Commander in Coldstar Battlesuit.",
    points: [{ models: 1, pts: 95 }],
  },
  {
    id: "ethereal",
    name: "Ethereal",
    faction: "T'au Empire",
    base: "40mm",
    stats: { M: "6\"", T: "3", Sv: "5+", W: "3", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Honour stave", tags: "", a: "2", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Hover Drone", text: "The bearer gains Fly and a 10\" Move." },
      { name: "Failure Is Not an Option", text: "While this model is leading a unit, that unit has Feel No Pain 5+." },
      { name: "Coordinated Leadership", text: "At the end of your Command phase, roll a D6 — on a 4+, gain 1 Command Point." }
    ],
    keywords: ["INFANTRY", "ETHEREAL", "CHARACTER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Ethereal.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "cadre-fireblade",
    name: "Cadre Fireblade",
    faction: "T'au Empire",
    base: "25mm",
    stats: { M: "6\"", T: "3", Sv: "4+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Fireblade pulse rifle", tags: "rapid fire 1", range: "30\"", a: "1", skill: "3+", s: "5", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "4+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Volley Fire", text: "While this model is leading a unit, that unit's ranged weapons get +1 Attacks." },
      { name: "Crack Shot", text: "When this model scores a Critical Wound with a ranged attack, that attack gets -3 Armour Penetration." }
    ],
    keywords: ["CADRE FIREBLADE", "INFANTRY", "CHARACTER", "GRENADES"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Cadre Fireblade.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "commander-farsight",
    name: "Commander Farsight",
    faction: "T'au Empire",
    base: "60mm",
    stats: { M: "10\"", T: "5", Sv: "2+", W: "8", Ld: "6+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "High-intensity plasma rifle", tags: "", range: "24\"", a: "2", skill: "2+", s: "8", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Dawn Blade – strike", tags: "", a: "4", skill: "2+", s: "10", ap: "-2", d: "3" },
      { name: "Dawn Blade – sweep", tags: "", a: "8", skill: "2+", s: "6", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Way of the Short Blade", text: "While this model is leading a unit, its attacks against targets within 9\" get +1 to wound." },
      { name: "Puretide's Teachings", text: "Once per battle round, reduce the CP cost of a Stratagem used on this model's unit by 1." },
      { name: "INDEPENDENT POWER", text: "Commander Farsight and any Ethereal units can't be in the same army." }
    ],
    keywords: ["VEHICLE", "COMMANDER FARSIGHT", "FLY", "WALKER", "CHARACTER", "EPIC HERO", "BATTLESUIT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Commander Farsight – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "commander-shadowsun",
    name: "Commander Shadowsun",
    faction: "T'au Empire",
    base: "50mm",
    stats: { M: "10\"", T: "4", Sv: "3+", W: "6", Ld: "6+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      { name: "Flechette launcher", tags: "", range: "18\"", a: "5", skill: "2+", s: "3", ap: "0", d: "1" },
      { name: "High-energy fusion blaster", tags: "melta 2", range: "18\"", a: "1", skill: "2+", s: "10", ap: "-4", d: "D6" },
      { name: "Light missile pod", tags: "", range: "24\"", a: "2", skill: "2+", s: "7", ap: "0", d: "2" },
      { name: "Pulse pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Advanced Guardian Drone", text: "Ranged attacks against the bearer take -1 to wound." },
      { name: "Agile Combatant", text: "This model can shoot even after Falling Back." },
      { name: "Command-link Drone (Aura)", text: "Friendly T'au Empire units within 6\" have a chance (5+ on a D6) to gain 1 Command Point whenever targeted by a Stratagem." },
      { name: "Hero of the Empire (Aura)", text: "Friendly T'au Empire units within 6\" can re-roll a Hit roll of 1 on ranged attacks." },
      { name: "SUPREME COMMANDER", text: "This model must be your Warlord if included in your army." }
    ],
    keywords: ["CHARACTER", "FLY", "INFANTRY", "EPIC HERO", "COMMANDER SHADOWSUN", "BATTLESUIT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Commander Shadowsun – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "aunshi",
    name: "Aun’shi",
    faction: "T'au Empire",
    base: "25mm",
    stats: { M: "6\"", T: "3", Sv: "6+", W: "3", Ld: "7+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Fidelity", tags: "sustained hits 1", a: "6", skill: "3+", s: "5", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Inspirational Defiance", text: "While this model is leading a unit, that unit gets +1 Objective Control." },
      { name: "Martial Warrior", text: "When this model fights, pick Precision, Devastating Wounds, or upgraded Sustained Hits 2 for its Fidelity weapon that phase." }
    ],
    keywords: ["EPIC HERO", "AUN’SHI", "INFANTRY", "ETHEREAL", "CHARACTER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Aun’Shi – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "aunva",
    name: "Aun’va",
    faction: "T'au Empire",
    base: "40mm",
    stats: { M: "6\"", T: "3", Sv: "5+", W: "5", Ld: "7+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "1", skill: "6+", s: "2", ap: "0", d: "1" },
      { name: "Supreme honour blade", tags: "", a: "3", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Duality Shield", text: "Once per battle, when attacked, this unit can gain a 2+ invulnerable save for the rest of the phase." },
      { name: "Paradox of Duality", text: "Attacks against this unit take -1 to hit and -1 to wound." },
      { name: "Supreme Loyalty (Aura)", text: "Friendly T'au Empire units within 6\" get +1 on Battle-shock and Leadership tests." }
    ],
    keywords: ["AUN’VA", "ETHEREAL", "EPIC HERO", "CHARACTER", "INFANTRY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Aun’Va – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 2 Ethereal Guards.",
    points: [{ models: 3, pts: 65 }],
  },
  {
    id: "darkstrider",
    name: "Darkstrider",
    faction: "T'au Empire",
    base: "32mm",
    stats: { M: "7\"", T: "3", Sv: "4+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Shade", tags: "assault", range: "18\"", a: "2", skill: "2+", s: "5", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "4+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Structural Analyser", text: "While this model is leading a unit, that unit's ranged attacks get +1 to wound." },
      { name: "Jammer Array", text: "Enemy Reserves can't set up within 12\" of this model." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "EPIC HERO", "MARKERLIGHT", "DARKSTRIDER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Darkstrider – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "strike-team",
    name: "Strike Team",
    faction: "T'au Empire",
    base: "25mm",
    stats: { M: "6\"", T: "3", Sv: "4+", W: "1", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Pulse carbine", tags: "", range: "20\"", a: "2", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Pulse pistol", tags: "pistol", range: "12\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Pulse rifle", tags: "rapid fire 1", range: "30\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Support turret", tags: "indirect fire, twin-linked", range: "30\"", a: "2", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "1", skill: "5+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Suppression Volley", text: "After this unit shoots, an Infantry unit it hit is suppressed until your next turn, taking -1 to hit on its attacks while this unit remains on the battlefield." },
      { name: "DS8 Support Turret", text: "If this unit Remains Stationary, its Fire Warrior Shas'ui gains a support turret missile system weapon until your next Movement phase." }
    ],
    keywords: ["BATTLELINE", "GRENADES", "STRIKE TEAM", "FIRE WARRIOR", "MARKERLIGHT", "INFANTRY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Fire Warrior Shas’ui; 9 Fire Warriors.",
    points: [{ models: 10, pts: 70 }],
  },
  {
    id: "breacher-team",
    name: "Breacher Team",
    faction: "T'au Empire",
    base: "25mm",
    stats: { M: "6\"", T: "3", Sv: "4+", W: "1", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Pulse blaster", tags: "assault", range: "10\"", a: "2", skill: "3+", s: "6", ap: "-1", d: "1" },
      { name: "Pulse pistol", tags: "pistol", range: "12\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Support turret", tags: "indirect fire, twin-linked", range: "30\"", a: "2", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "1", skill: "5+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Breach and Clear", text: "This unit's ranged attacks against enemies near an objective can re-roll the Wound roll." },
      { name: "DS8 Support Turret", text: "If this unit Remains Stationary, its Fire Warrior Shas'ui gains a support turret missile system weapon until your next Movement phase." }
    ],
    keywords: ["MARKERLIGHT", "BREACHER TEAM", "FIRE WARRIOR", "GRENADES", "BATTLELINE", "INFANTRY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Breacher Fire Warrior Shas’ui; 9 Breacher Fire Warriors.",
    points: [{ models: 10, pts: 90 }],
  },
  {
    id: "kroot-carnivores",
    name: "Kroot Carnivores",
    faction: "T'au Empire",
    base: "28.5mm",
    stats: { M: "7\"", T: "3", Sv: "6+", W: "1", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Tanglebomb launcher", tags: "Blast", range: "24\"", a: "D3", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Kroot pistol", tags: "Pistol", range: "12\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Kroot rifle", tags: "rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Kroot carbine", tags: "", range: "18\"", a: "1", skill: "4+", s: "4", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Fieldcraft", text: "At the end of your Command phase, an objective this unit controls stays under your control even without nearby models, until your opponent takes it." },
      { name: "BODYGUARD", text: "A 20-model-strong unit can have two non-duplicate Leaders attached instead of one; if destroyed, those Leaders split back into separate units." }
    ],
    keywords: ["INFANTRY", "GRENADES", "KROOT", "CARNIVORES"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Long-quill; 9-19 Kroot Carnivores.",
    points: [{ models: 10, pts: 65 }, { models: 20, pts: 130 }],
  },
  {
    id: "krootox-riders",
    name: "Krootox Riders",
    faction: "T'au Empire",
    base: "50mm",
    stats: { M: "7\"", T: "6", Sv: "5+", W: "5", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Repeater cannon", tags: "rapid fire 2", range: "36\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Tanglecannon", tags: "blast, heavy", range: "36\"", a: "D6+1", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Krootox fists", tags: "EXTRA ATTACKS", a: "4", skill: "3+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Kroot Packmates", text: "Once per turn, when a friendly Kroot Infantry unit within 6\" is targeted in your opponent's Shooting phase, this unit can shoot back immediately as if it were your Shooting phase." }
    ],
    keywords: ["KROOTOX RIDERS", "KROOT", "GRENADES", "MOUNTED"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1-3 Krootox Riders.",
    points: [{ models: 1, pts: 45 }, { models: 2, pts: 60 }, { models: 3, pts: 90 }],
  },
  {
    id: "kroot-hounds",
    name: "Kroot Hounds",
    faction: "T'au Empire",
    base: "28.5mm",
    stats: { M: "12\"", T: "3", Sv: "6+", W: "1", Ld: "8+", OC: "0" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Ripping fangs", tags: "", a: "3", skill: "3+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Loping Pounce", text: "At the start of your Command phase, if within 6\" of a friendly Kroot Infantry unit, this unit can charge after Advancing for the rest of the turn." },
      { name: "Hunting Hounds", text: "While within 12\" of a friendly Kroot Character, this unit's Objective Control is 1." }
    ],
    keywords: ["BEASTS", "HOUNDS", "KROOT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "5-10 Kroot Hounds.",
    points: [{ models: 5, pts: 45 }, { models: 10, pts: 65 }],
  },
  {
    id: "stealth-battlesuits",
    name: "Stealth Battlesuits",
    faction: "T'au Empire",
    base: "32mm",
    stats: { M: "8\"", T: "4", Sv: "3+", W: "2", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Fusion blaster", tags: "melta 2", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Pulse pistol", tags: "pistol", range: "12\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "2", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Forward Observers", text: "While this unit is an Observer, its Guided unit's attacks against the Spotted target re-roll a Hit roll of 1 and a Wound roll of 1." },
      { name: "Homing Beacon", text: "Once per battle, use Rapid Ingress for free (0CP), with the arriving unit set up within 3\" of this unit's bearer instead of the normal restriction." }
    ],
    keywords: ["FLY", "STEALTH", "MARKERLIGHT", "GRENADES", "BATTLESUIT", "INFANTRY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Stealth Shas’vre; 4 Stealth Shas’ui.",
    points: [{ models: 5, pts: 100 }],
  },
  {
    id: "crisis-battlesuits",
    name: "Crisis Battlesuits",
    faction: "T'au Empire",
    base: "50mm",
    stats: { M: "10\"", T: "5", Sv: "3+", W: "4", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Airbursting fragmentation projector", tags: "blast, indirect fire", range: "24\"", a: "D6", skill: "4+", s: "3", ap: "0", d: "1" },
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Cyclic ion blaster – standard", tags: "", range: "18\"", a: "3", skill: "4+", s: "7", ap: "-1", d: "1" },
      { name: "Cyclic ion blaster – overcharge", tags: "hazardous", range: "18\"", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Fusion blaster", tags: "melta 2", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Plasma rifle", tags: "", range: "24\"", a: "1", skill: "4+", s: "8", ap: "-3", d: "3" },
      { name: "T’au flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Shield Generator", text: "The bearer has a 4+ invulnerable save." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." },
      { name: "Turbo-jets", text: "When this unit Advances, skip the roll and add a flat 6\" to its Move for the phase instead." }
    ],
    keywords: ["WALKER", "VEHICLE", "FLY", "BATTLESUIT", "CRISIS"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Crisis Shas’vre; 2-5 Crisis Shas’ui.",
    points: [{ models: 3, pts: 200 }, { models: 6, pts: 400 }],
  },
  {
    id: "ghostkeel-battlesuit",
    name: "Ghostkeel Battlesuit",
    faction: "T'au Empire",
    base: "105 x 70mm",
    stats: { M: "10\"", T: "8", Sv: "2+", W: "12", Ld: "7+", OC: "3" },
    rangedWeapons: [
      { name: "Cyclic ion raker – standard", tags: "", range: "36\"", a: "6", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Cyclic ion raker – overcharge", tags: "hazardous", range: "36\"", a: "6", skill: "4+", s: "8", ap: "-2", d: "3" },
      { name: "Fusion collider", tags: "melta 2", range: "18\"", a: "2", skill: "4+", s: "12", ap: "-4", d: "D6" },
      { name: "Twin burst cannon", tags: "twin-linked", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Twin fusion blaster", tags: "melta 2, twin-linked", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin T’au flamer", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Ghostkeel fists", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Stealth Drones", text: "Twice per battle, change an attack's Damage against this model to 0 after it's allocated." }
    ],
    keywords: ["SMOKE", "FLY", "GHOSTKEEL", "BATTLESUIT", "VEHICLE", "WALKER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Ghostkeel Battlesuit.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "riptide-battlesuit",
    name: "Riptide Battlesuit",
    faction: "T'au Empire",
    base: "120 x 92mm",
    stats: { M: "10\"", T: "9", Sv: "2+", W: "14", Ld: "7+", OC: "4", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy burst cannon", tags: "", range: "36\"", a: "12", skill: "4+", s: "6", ap: "-1", d: "2" },
      { name: "Ion accelerator – standard", tags: "", range: "72\"", a: "6", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Ion accelerator – supercharge", tags: "hazardous", range: "72\"", a: "6", skill: "4+", s: "10", ap: "-3", d: "4" },
      { name: "Twin fusion blaster", tags: "melta 2, twin-linked", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin plasma rifle", tags: "twin-linked", range: "18\"", a: "1", skill: "4+", s: "8", ap: "-3", d: "3" },
      { name: "Twin smart missile system", tags: "indirect fire, twin-linked", range: "30\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Riptide fists", tags: "", a: "6", skill: "5+", s: "6", ap: "0", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Nova Charge", text: "Once per battle, when this unit shoots, one of its ranged weapons gains Devastating Wounds for the phase." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." }
    ],
    keywords: ["RIPTIDE", "VEHICLE", "WALKER", "FLY", "BATTLESUIT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Riptide Battlesuit.",
    points: [{ models: 1, pts: 190 }],
  },
  {
    id: "pathfinder-team",
    name: "Pathfinder Team",
    faction: "T'au Empire",
    base: "25mm",
    stats: { M: "7\"", T: "3", Sv: "4+", W: "1", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Drone burst cannon", tags: "", range: "18\"", a: "4", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Ion rifle – standard", tags: "heavy", range: "30\"", a: "3", skill: "5+", s: "7", ap: "-1", d: "1" },
      { name: "Ion rifle – overcharge", tags: "hazardous, heavy", range: "30\"", a: "3", skill: "5+", s: "8", ap: "-2", d: "2" },
      { name: "Pulse carbine", tags: "", range: "20\"", a: "2", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Pulse pistol", tags: "pistol", range: "12\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Rail rifle", tags: "devastating wounds, heavy", range: "30\"", a: "1", skill: "5+", s: "10", ap: "-4", d: "3" },
      { name: "Semi-automatic grenade launcher – EMP", tags: "anti-vehicle 4+, devastating wounds", range: "18\"", a: "1", skill: "4+", s: "3", ap: "0", d: "1" },
      { name: "Semi-automatic grenade launcher – fusion", tags: "", range: "18\"", a: "1", skill: "4+", s: "6", ap: "-1", d: "3" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "1", skill: "5+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Target Uploaded", text: "This unit's attacks against their Spotted target get +1 Ballistic Skill and Ignores Cover." },
      { name: "Grav-inhibitor Drone", text: "Enemy Charge rolls against this unit's bearer take a -2 penalty (not cumulative with other Charge penalties)." },
      { name: "Pulse Accelerator Drone", text: "Pulse carbines in the bearer's unit get +6\" range." },
      { name: "Recon Drone", text: "The bearer comes with a drone burst cannon and grants its unit the Infiltrators ability." }
    ],
    keywords: ["INFANTRY", "PATHFINDER TEAM", "GRENADES", "MARKERLIGHT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Pathfinder Shas’ui; 9 Pathfinders.",
    points: [{ models: 10, pts: 85 }],
  },
  {
    id: "piranhas",
    name: "Piranhas",
    faction: "T'au Empire",
    base: "60mm flying base",
    stats: { M: "14\"", T: "7", Sv: "4+", W: "7", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Piranha burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Piranha fusion blaster", tags: "melta 4", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin pulse carbine", tags: "twin-linked, assault", range: "20\"", a: "2", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "2", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Drone Harassment Tactics", text: "At the end of your Movement phase, force an enemy unit within 12\" to take a Battle-shock test." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["PIRANHAS", "FRAME", "FLY", "VEHICLE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1-3 Piranhas.",
    points: [{ models: 1, pts: 65 }, { models: 2, pts: 110 }, { models: 3, pts: 165 }],
  },
  {
    id: "devilfish",
    name: "Devilfish",
    faction: "T'au Empire",
    base: "60mm flying base",
    stats: { M: "12\"", T: "9", Sv: "3+", W: "13", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Accelerator burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin pulse carbine", tags: "assault, twin-linked", range: "20\"", a: "2", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Smart missile system", tags: "indirect fire", range: "30\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Rapid Deployment", text: "Units can disembark from this Transport after it Advances, making a shock disembark move." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["FRAME", "TRANSPORT", "DEDICATED TRANSPORT", "DEVILFISH", "VEHICLE", "FLY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Devilfish.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "razorshark-strike-fighter",
    name: "Razorshark Strike Fighter",
    faction: "T'au Empire",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "10", Sv: "3+", W: "12", Ld: "7+", OC: "-" },
    rangedWeapons: [
      { name: "Accelerator burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Quad ion turret – standard", tags: "twin-linked", range: "30\"", a: "8", skill: "4+", s: "7", ap: "-1", d: "1" },
      { name: "Quad ion turret – overcharge", tags: "hazardous, twin-linked", range: "30\"", a: "8", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Ground Strike Fighter", text: "When this model attacks a non-Flying unit, add 1 to the Hit roll." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["RAZORSHARK STRIKE FIGHTER", "FRAME", "FLY", "AIRCRAFT", "VEHICLE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Razorshark Strike Fighter.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "sun-shark-bomber",
    name: "Sun Shark Bomber",
    faction: "T'au Empire",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "12", Ld: "7+", OC: "-" },
    rangedWeapons: [
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Twin missile pod", tags: "twin-linked", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin ion rifle – standard", tags: "twin-linked", range: "30\"", a: "3", skill: "4+", s: "7", ap: "-1", d: "1" },
      { name: "Twin ion rifle – overcharge", tags: "hazardous, twin-linked", range: "30\"", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Pulse Bombs", text: "At the end of your opponent's Fight phase, target a visible enemy within 24\" and roll six D6 — each 4+ deals 1 mortal wound." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["FRAME", "VEHICLE", "SUN SHARK BOMBER", "AIRCRAFT", "FLY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Sun Shark Bomber.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "vespid-stingwings",
    name: "Vespid Stingwings",
    faction: "T'au Empire",
    base: "28.5mm",
    stats: { M: "12\"", T: "4", Sv: "4+", W: "1", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Neutron blaster", tags: "assault", range: "18\"", a: "2", skill: "4+", s: "5", ap: "-2", d: "2" },
      { name: "Neutron grenade launcher", tags: "ANTI-INFANTRY 3+, BLAST", range: "18\"", a: "D6", skill: "4+", s: "4", ap: "-1", d: "2" },
      { name: "Neutron rail rifle", tags: "DEVASTATING WOUNDS", range: "30\"", a: "1", skill: "4+", s: "10", ap: "-4", d: "3" },
      { name: "T’au flamer", tags: "IGNORES COVER, TORRENT", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Stingwing claws", tags: "", a: "1", skill: "4+", s: "4", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Airborne Agility", text: "At the end of your opponent's turn, if unengaged, this unit can return to Strategic Reserves." },
      { name: "Oversight Drone", text: "Once per battle, when this unit shoots, its ranged weapons gain Ignores Cover for the phase." }
    ],
    keywords: ["VESPID STINGWINGS", "INFANTRY", "FLY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Vespid Strain Leader; 4-9 Vespid Stingwings.",
    points: [{ models: 5, pts: 70 }, { models: 10, pts: 115 }],
  },
  {
    id: "firesight-team",
    name: "Firesight Team",
    faction: "T'au Empire",
    base: "40mm",
    stats: { M: "6\"", T: "3", Sv: "4+", W: "4", Ld: "7+", OC: "3" },
    rangedWeapons: [
      { name: "Longshot pulse rifles", tags: "heavy, precision", range: "36\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "2" },
      { name: "Pulse pistol", tags: "pistol", range: "12\"", a: "1", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapons", tags: "", a: "4", skill: "5+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Precise Targeting", text: "This unit's attacks against a Spotted target can re-roll the Hit roll." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "MARKERLIGHT", "FIRESIGHT TEAM"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Firesight Marksman.",
    points: [{ models: 1, pts: 55 }],
  },
  {
    id: "sky-ray-gunship",
    name: "Sky Ray Gunship",
    faction: "T'au Empire",
    base: "60mm flying base",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "14", Ld: "7+", OC: "3" },
    rangedWeapons: [
      { name: "Accelerator burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Seeker missile rack", tags: "twin-linked", range: "48\"", a: "3", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin pulse carbine", tags: "assault, twin-linked", range: "20\"", a: "2", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Smart missile system", tags: "indirect fire", range: "30\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Velocity Tracker", text: "When this model attacks a Flying unit, you can re-roll the Hit roll." },
      { name: "Targeting Array", text: "When this unit shoots, you can re-roll one Hit roll or one Wound roll." }
    ],
    keywords: ["FLY", "VEHICLE", "SKY RAY GUNSHIP", "MARKERLIGHT", "FRAME"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Sky Ray Gunship.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "longstrike",
    name: "Longstrike",
    faction: "T'au Empire",
    base: "60mm flying base",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "14", Ld: "7+", OC: "3" },
    rangedWeapons: [
      { name: "Accelerator burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Ion cannon – standard", tags: "blast", range: "60\"", a: "D6+3", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Ion cannon – overcharge", tags: "blast, hazardous", range: "60\"", a: "D6+3", skill: "3+", s: "8", ap: "-2", d: "3" },
      { name: "Railgun", tags: "devastating wounds, heavy", range: "72\"", a: "1", skill: "3+", s: "20", ap: "-5", d: "D6+6" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin pulse carbine", tags: "assault, twin-linked", range: "20\"", a: "2", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Smart missile system", tags: "indirect fire", range: "30\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Armour Hunter", text: "When this model attacks a Monster/Vehicle, add 1 to the Hit roll." },
      { name: "Targeting Array", text: "When this unit shoots, you can re-roll one Hit roll or one Wound roll." },
      { name: "XV02 Pilot Battlesuit", text: "In your Command phase, a nearby friendly Hammerhead Gunship gains Lethal Hits on its ranged weapons until your next Command phase." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["CHARACTER", "FLY", "VEHICLE", "LONGSTRIKE", "EPIC HERO"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Longstrike – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "hammerhead-gunship",
    name: "Hammerhead Gunship",
    faction: "T'au Empire",
    base: "60mm flying base",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "14", Ld: "7+", OC: "3" },
    rangedWeapons: [
      { name: "Accelerator burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Ion cannon – standard", tags: "blast", range: "60\"", a: "D6+3", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Ion cannon – overcharge", tags: "blast, hazardous", range: "60\"", a: "D6+3", skill: "4+", s: "8", ap: "-2", d: "3" },
      { name: "Railgun", tags: "heavy, devastating wounds", range: "72\"", a: "1", skill: "4+", s: "20", ap: "-5", d: "D6+6" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin pulse carbine", tags: "twin-linked", range: "20\"", a: "2", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Smart missile system", tags: "indirect fire", range: "30\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Armour Hunter", text: "When this model attacks a Monster/Vehicle, add 1 to the Hit roll." },
      { name: "Targeting Array", text: "When this unit shoots, you can re-roll one Hit roll or one Wound roll." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["FLY", "FRAME", "HAMMERHEAD GUNSHIP", "VEHICLE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Hammerhead Gunship.",
    points: [{ models: 1, pts: 150 }],
  },
  {
    id: "broadside-battlesuits",
    name: "Broadside Battlesuits",
    faction: "T'au Empire",
    base: "60mm",
    stats: { M: "5\"", T: "6", Sv: "2+", W: "8", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Heavy rail rifle", tags: "heavy, devastating wounds", range: "60\"", a: "2", skill: "4+", s: "12", ap: "-4", d: "D6+1" },
      { name: "High-yield missile pods", tags: "twin-linked", range: "30\"", a: "6", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin plasma rifle", tags: "twin-linked", range: "18\"", a: "1", skill: "4+", s: "8", ap: "-3", d: "3" },
      { name: "Twin smart missile system", tags: "indirect fire, twin-linked", range: "30\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Crushing bulk", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Advanced Armour", text: "This unit has Feel No Pain 4+ against mortal wounds." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["BATTLESUIT", "VEHICLE", "WALKER", "BROADSIDE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Broadside Shas’vre; 0-2 Broadside Shas’ui.",
    points: [{ models: 1, pts: 75 }, { models: 2, pts: 150 }, { models: 3, pts: 255 }],
  },
  {
    id: "stormsurge",
    name: "Stormsurge",
    faction: "T'au Empire",
    base: "170 x 109mm",
    stats: { M: "8\"", T: "11", Sv: "2+", W: "20", Ld: "7+", OC: "6", InvSv: "4+" },
    rangedWeapons: [
      { name: "Cluster rocket system", tags: "blast, heavy", range: "48\"", a: "4D6", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Destroyer missiles", tags: "heavy", range: "72\"", a: "1", skill: "4+", s: "16", ap: "-4", d: "D6+2" },
      { name: "Pulse blast cannon – focused", tags: "heavy", range: "24\"", a: "2", skill: "4+", s: "24", ap: "-6", d: "12" },
      { name: "Pulse blast cannon – dispersed", tags: "heavy", range: "48\"", a: "6", skill: "4+", s: "10", ap: "-2", d: "4" },
      { name: "Pulse driver cannon", tags: "blast, heavy", range: "72\"", a: "D6+3", skill: "4+", s: "12", ap: "-3", d: "3" },
      { name: "Twin airbursting fragmentation projector", tags: "blast, heavy, indirect fire, twin-linked", range: "24\"", a: "D6", skill: "4+", s: "3", ap: "0", d: "1" },
      { name: "Twin burst cannon", tags: "heavy, twin-linked", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Twin smart missile system", tags: "heavy, indirect fire, twin-linked", range: "30\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Twin T’au flamer", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Thunderous footfalls", tags: "", a: "3", skill: "5+", s: "8", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Heavy Walker", text: "This model can move through other models and terrain 4\" or less in height as if they weren't there." },
      { name: "Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." },
      { name: "Titan-killer", text: "When this model attacks a Titanic or Towering unit, you can re-roll the Hit roll." }
    ],
    keywords: ["STORMSURGE", "TOWERING", "VEHICLE", "TITANIC", "WALKER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Stormsurge.",
    points: [{ models: 1, pts: 375 }],
  },
  {
    id: "tidewall-droneport",
    name: "Tidewall Droneport",
    faction: "T'au Empire",
    base: "Use model",
    stats: { M: "4\"", T: "8", Sv: "3+", W: "10", Ld: "7+", OC: "0" },
    rangedWeapons: [
      { name: "Drone defenders", tags: "assault, twin-linked", range: "20\"", a: "8", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Droneport", text: "When this Fortification shoots, its drone defender attacks every eligible enemy unit simultaneously." },
      { name: "Fortification", text: "Enemies only engaged with this Fortification can still be shot (except by Pistols, at -1 to hit) and don't need Desperate Escape tests to Fall Back from it." },
      { name: "Tidewall Cover", text: "A ranged attack against a friendly model is treated as Benefit of Cover if this Fortification blocks it from being fully visible." }
    ],
    keywords: ["TIDEWALL DRONEPORT", "FRAME", "FLY", "TRANSPORT", "VEHICLE", "FORTIFICATION"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Tidewall Droneport.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "tidewall-shieldline",
    name: "Tidewall Shieldline",
    faction: "T'au Empire",
    base: "Use model",
    stats: { M: "4\"", T: "8", Sv: "3+", W: "10", Ld: "7+", OC: "0", InvSv: "5+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Fortification", text: "Enemies only engaged with this Fortification can still be shot (except by Pistols, at -1 to hit) and don't need Desperate Escape tests to Fall Back from it." },
      { name: "Tidewall Cover", text: "A ranged attack against a friendly model is treated as Benefit of Cover if this Fortification blocks it from being fully visible." },
      { name: "Tidewall Defence Platform", text: "With a Tidewall defence platform equipped, this Fortification has 15 Wounds." }
    ],
    keywords: ["FRAME", "TRANSPORT", "VEHICLE", "FORTIFICATION", "TIDEWALL SHIELDLINE", "FLY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Tidewall Shieldline.",
    points: [{ models: 1, pts: 85 }],
  },
  {
    id: "tidewall-gunrig",
    name: "Tidewall Gunrig",
    faction: "T'au Empire",
    base: "Use model",
    stats: { M: "4\"", T: "8", Sv: "3+", W: "14", Ld: "7+", OC: "0" },
    rangedWeapons: [
      { name: "Supremacy railgun", tags: "devastating wounds, twin-linked", range: "72\"", a: "1", skill: "5+", s: "20", ap: "-5", d: "D6+6" }
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Firing Deck", text: "Firing Deck X lets embarked passengers shoot from inside this Transport when it's selected to shoot — pick up to X embarked models to each fire one ranged weapon without disembarking." },
      { name: "Fortification", text: "Enemies only engaged with this Fortification can still be shot (except by Pistols, at -1 to hit) and don't need Desperate Escape tests to Fall Back from it." },
      { name: "Tidewall Cover", text: "A ranged attack against a friendly model is treated as Benefit of Cover if this Fortification blocks it from being fully visible." }
    ],
    keywords: ["VEHICLE", "FLY", "TRANSPORT", "FORTIFICATION", "FRAME", "TIDEWALL GUNRIG"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Tidewall Gunrig.",
    points: [{ models: 1, pts: 90 }],
  },
  {
    id: "shaso-ralai",
    name: "Shas’o R’alai",
    faction: "T'au Empire",
    base: "65mm",
    stats: { M: "8\"", T: "6", Sv: "3+", W: "6", Ld: "7+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Experimental pulse submunitions rifle – EMP", tags: "anti-vehicle 3+, devastating wounds", range: "24\"", a: "1", skill: "3+", s: "1", ap: "0", d: "3" },
      { name: "Experimental pulse submunitions rifle – ionic", tags: "blast", range: "24\"", a: "D6", skill: "3+", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Blacklight Marker Drones", text: "Twice per battle, while this unit is an Observer, its Guided unit's attacks against the Spotted target can re-roll a Wound roll of 1." },
      { name: "Eclipse Field Generator", text: "While this model is leading a unit, that unit has a 5+ invulnerable save." },
      { name: "Assassin", text: "When this model attacks a Character, you can re-roll the Hit roll." }
    ],
    keywords: ["WALKER", "CHARACTER", "FLY", "MARKERLIGHT", "VEHICLE", "BATTLESUIT", "SHAS'O R'ALAI", "EPIC HERO"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Shas'o R'alai – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "xv9-hazard-battlesuits",
    name: "Xv9 Hazard Battlesuits",
    faction: "T'au Empire",
    base: "60mm",
    stats: { M: "8\"", T: "6", Sv: "3+", W: "4", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Fusion cascade", tags: "melta 4", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Phased ion gun", tags: "", range: "30\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Twin hazard burst cannon", tags: "twin-linked", range: "24\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Shield Generator", text: "The bearer has a 4+ invulnerable save." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." },
      { name: "Photon Casters", text: "After this unit shoots, an Infantry unit it hit is stunned until your opponent's next turn, cutting its Move by 2 and its Advance/Charge rolls by 2." }
    ],
    keywords: ["XV9 HAZARD", "WALKER", "VEHICLE", "FLY", "BATTLESUIT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1-2 XV9 Hazard Battlesuits.",
    points: [{ models: 1, pts: 55 }, { models: 2, pts: 110 }],
  },
  {
    id: "yvahra-battlesuit",
    name: "Y’vahra Battlesuit",
    faction: "T'au Empire",
    base: "120 x 92mm",
    stats: { M: "10\"", T: "9", Sv: "2+", W: "15", Ld: "7+", OC: "4", InvSv: "5+" },
    rangedWeapons: [
      { name: "Flechette pod", tags: "", range: "12\"", a: "5", skill: "4+", s: "3", ap: "0", d: "1" },
      { name: "Ionic discharge cannon – standard", tags: "blast", range: "18\"", a: "D6+1", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Ionic discharge cannon – overcharge", tags: "blast, hazardous", range: "18\"", a: "D6+1", skill: "4+", s: "8", ap: "-2", d: "3" },
      { name: "Phased plasma-flamer", tags: "ignores cover, torrent", range: "12\"", a: "10", skill: "N/A", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "6", skill: "5+", s: "6", ap: "0", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Nova Burst", text: "Once per battle, before moving, this model can boost its Move to 18\" for the phase." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." }
    ],
    keywords: ["FLY", "WALKER", "BATTLESUIT", "VEHICLE", "Y’VAHRA"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Y’vahra Battlesuit.",
    points: [{ models: 1, pts: 210 }],
  },
  {
    id: "rvarna-battlesuit",
    name: "R’varna Battlesuit",
    faction: "T'au Empire",
    base: "120 x 92mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "15", Ld: "7+", OC: "4", InvSv: "5+" },
    rangedWeapons: [
      { name: "Pulse submunitions cannon", tags: "blast", range: "60\"", a: "D6+2", skill: "4+", s: "8", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "6", skill: "5+", s: "6", ap: "0", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Nova Shielding", text: "Once per battle, when targeted by a ranged attack, this model reduces the Wound roll by 1 against attacks with higher Strength than its Toughness, for the rest of the phase." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." }
    ],
    keywords: ["BATTLESUIT", "FLY", "WALKER", "VEHICLE", "R’VARNA"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 R’varna Battlesuit.",
    points: [{ models: 1, pts: 200 }],
  },
  {
    id: "taunar-supremacy-armour",
    name: "Ta’unar Supremacy Armour",
    faction: "T'au Empire",
    base: "160mm",
    stats: { M: "8\"", T: "13", Sv: "2+", W: "30", Ld: "7+", OC: "10", InvSv: "5+" },
    rangedWeapons: [
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Fragmentation cluster shell launcher", tags: "blast", range: "24\"", a: "2D6+6", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Fusion eradicator", tags: "melta 3", range: "24\"", a: "5", skill: "4+", s: "10", ap: "-4", d: "D6" },
      { name: "Heavy rail cannon array", tags: "devastating wounds, heavy", range: "120\"", a: "2", skill: "4+", s: "26", ap: "-5", d: "16" },
      { name: "Nexus missile launcher", tags: "", range: "36\"", a: "8", skill: "4+", s: "8", ap: "-3", d: "2" },
      { name: "Pulse ordnance driver", tags: "anti-infantry 2+", range: "60\"", a: "8", skill: "4+", s: "5", ap: "-1", d: "3" },
      { name: "Smart missile system", tags: "indirect fire", range: "30\"", a: "3", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Tri-axis ion cannon – standard", tags: "blast", range: "36\"", a: "D6+3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Tri-axis ion cannon – supercharge", tags: "blast, hazardous", range: "36\"", a: "D6+3", skill: "4+", s: "9", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Crushing feet", tags: "", a: "6", skill: "5+", s: "8", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Super-heavy Walker", text: "This model can move through other models and terrain features 4\" or less in height as if they weren't there, though it can't end a move within Engagement Range that way." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Coordinated Strike", text: "While this model is a Guided unit, its attacks against the Spotted target re-roll a Hit roll of 1." }
    ],
    keywords: ["WALKER", "TITANIC", "TOWERING", "FRAME", "TA’UNAR SUPREMACY ARMOUR", "VEHICLE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Ta’unar Supremacy Armour.",
    points: [{ models: 1, pts: 790 }],
  },
  {
    id: "tetras",
    name: "Tetras",
    faction: "T'au Empire",
    base: "60mm flying base",
    stats: { M: "14\"", T: "7", Sv: "4+", W: "7", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Pulse rifle", tags: "rapid fire 1", range: "30\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapons", tags: "", a: "2", skill: "5+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "High-intensity Markerlights", text: "While this unit is an Observer, its Guided unit's attacks against the Spotted target can re-roll the Hit roll." }
    ],
    keywords: ["TETRAS", "MARKERLIGHT", "FLY", "VEHICLE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "2-4 Tetras.",
    points: [{ models: 2, pts: 80 }, { models: 4, pts: 160 }],
  },
  {
    id: "tx42-piranha",
    name: "Tx42 Piranha",
    faction: "T'au Empire",
    base: "60mm flying base",
    stats: { M: "14\"", T: "7", Sv: "4+", W: "7", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Fusion blaster", tags: "melta 2", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-4", d: "D6" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Plasma rifle", tags: "", range: "24\"", a: "1", skill: "4+", s: "8", ap: "-3", d: "3" },
      { name: "Rail rifle", tags: "devastating wounds", range: "30\"", a: "1", skill: "4+", s: "10", ap: "-4", d: "3" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "2", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Outflank", text: "When this unit arrives from Strategic Reserves, it can be set up inside the opponent's deployment zone (other Reserves restrictions still apply)." }
    ],
    keywords: ["VEHICLE", "FLY", "TX42 PIRANHA"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 TX42 Piranha.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "heavy-gun-drones",
    name: "Heavy Gun Drones",
    faction: "T'au Empire",
    base: "32mm flying base",
    stats: { M: "8\"", T: "5", Sv: "4+", W: "2", Ld: "8+", OC: "0" },
    rangedWeapons: [
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Twin burst cannon", tags: "twin-linked", range: "18\"", a: "4", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "1", skill: "6+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Drone Escort", text: "Once per turn, when a friendly T'au Empire unit within 6\" is targeted in your opponent's Shooting phase, this unit can shoot back immediately as if it were your Shooting phase." },
      { name: "Markerlight", text: "The bearer has the Markerlight keyword." }
    ],
    keywords: ["HEAVY GUN DRONES", "FLY", "VEHICLE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "2 Heavy Gun Drones.",
    points: [{ models: 2, pts: 45 }],
  },
  {
    id: "remora-stealth-drones",
    name: "Remora Stealth Drones",
    faction: "T'au Empire",
    base: "60mm flying base",
    stats: { M: "16\"", T: "6", Sv: "3+", W: "5", Ld: "7+", OC: "0" },
    rangedWeapons: [
      { name: "Remora seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin long-barrelled burst cannon", tags: "twin-linked", range: "24\"", a: "4", skill: "4+", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "1", skill: "5+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Aerial Disengagement", text: "In your opponent's Movement phase, if an enemy ends a move within 8\" and this unit isn't engaged, it can make a Normal move of up to 6\"." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["REMORA STEALTH DRONES", "FLY", "VEHICLE", "MARKERLIGHT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "2 Remora Stealth Drones.",
    points: [{ models: 2, pts: 160 }],
  },
  {
    id: "barracuda",
    name: "Barracuda",
    faction: "T'au Empire",
    base: "120 x 92mm flying base",
    stats: { M: "20\"", T: "10", Sv: "3+", W: "14", Ld: "7+", OC: "-", InvSv: "5+" },
    rangedWeapons: [
      { name: "Cyclic ion blaster – standard", tags: "", range: "18\"", a: "3", skill: "4+", s: "7", ap: "-1", d: "1" },
      { name: "Cyclic ion blaster – overcharge", tags: "hazardous", range: "18\"", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Ion cannon – standard", tags: "blast", range: "60\"", a: "D6+3", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Ion cannon – overcharge", tags: "blast, hazardous", range: "60\"", a: "D6+3", skill: "4+", s: "8", ap: "-2", d: "3" },
      { name: "Long-barrelled burst cannon", tags: "", range: "24\"", a: "8", skill: "4+", s: "6", ap: "0", d: "1" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Swiftstrike burst cannon", tags: "", range: "36\"", a: "16", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Swiftstrike railgun", tags: "devastating wounds", range: "72\"", a: "1", skill: "4+", s: "20", ap: "-5", d: "D6+6" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Agile Dogfighter", text: "Attacks against this model take -1 to hit." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "AIRCRAFT", "FLY", "BARRACUDA"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Barracuda.",
    points: [{ models: 1, pts: 220 }],
  },
  {
    id: "tiger-shark",
    name: "Tiger Shark",
    faction: "T'au Empire",
    base: "160mm",
    stats: { M: "-", T: "11", Sv: "3+", W: "18", Ld: "7+", OC: "-", InvSv: "5+" },
    rangedWeapons: [
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Cyclic ion blaster – standard", tags: "", range: "18\"", a: "3", skill: "4+", s: "7", ap: "-1", d: "1" },
      { name: "Cyclic ion blaster – overcharge", tags: "hazardous", range: "18\"", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Ion cannon – standard", tags: "blast", range: "60\"", a: "D6+3", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Ion cannon – overcharge", tags: "blast, hazardous", range: "60\"", a: "D6+3", skill: "4+", s: "8", ap: "-2", d: "3" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Skyspear missile rack", tags: "anti-fly 3+, blast", range: "72\"", a: "D6+1", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Swiftstrike burst cannon", tags: "", range: "36\"", a: "16", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Swiftstrike railgun", tags: "devastating wounds", range: "72\"", a: "1", skill: "4+", s: "20", ap: "-5", d: "D6+6" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Transport Bay", text: "The bearer can transport up to 12 Tactical Drones." },
      { name: "Strafing Run", text: "After this model shoots, a non-Flying enemy it hit must take a Battle-shock test." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "AIRCRAFT", "FLY", "TIGER SHARK"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Tiger Shark.",
    points: [{ models: 1, pts: 395 }],
  },
  {
    id: "ax-1-0-tiger-shark",
    name: "AX-1-0 Tiger Shark",
    faction: "T'au Empire",
    base: "160mm",
    stats: { M: "-", T: "11", Sv: "3+", W: "18", Ld: "7+", OC: "-", InvSv: "5+" },
    rangedWeapons: [
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Cyclic ion blaster – standard", tags: "", range: "18\"", a: "3", skill: "4+", s: "7", ap: "-1", d: "1" },
      { name: "Cyclic ion blaster – overcharge", tags: "hazardous", range: "18\"", a: "3", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Twin heavy rail cannon", tags: "devastating wounds, twin-linked", range: "120\"", a: "1", skill: "4+", s: "26", ap: "-5", d: "12" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Titan Hunter", text: "This model's twin heavy rail cannon and seeker missiles gain Anti-Titanic 3+ against targets within half range." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["FLY", "VEHICLE", "AIRCRAFT", "AX-1-0 TIGER SHARK"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 AX-1-0 Tiger Shark.",
    points: [{ models: 1, pts: 315 }],
  },
  {
    id: "orca-dropship",
    name: "Orca Dropship",
    faction: "T'au Empire",
    base: "Use model",
    stats: { M: "20\"", T: "12", Sv: "3+", W: "28", Ld: "7+", OC: "-" },
    rangedWeapons: [
      { name: "Long-barrelled burst cannon", tags: "", range: "36\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "3", skill: "5+", s: "8", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Jet Pack Insertion", text: "At the end of your opponent's Movement phase, units embarked in this Transport can disembark if every model in them has Deep Strike." }
    ],
    keywords: ["ORCA DROPSHIP", "TITANIC", "AIRCRAFT", "VEHICLE", "TRANSPORT", "FLY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Orca Dropship.",
    points: [{ models: 1, pts: 275 }],
  },
  {
    id: "manta",
    name: "Manta",
    faction: "T'au Empire",
    base: "Use model",
    stats: { M: "40\"", T: "14", Sv: "2+", W: "60", Ld: "7+", OC: "-", InvSv: "5+" },
    rangedWeapons: [
      { name: "Heavy rail cannon", tags: "devastating wounds", range: "120\"", a: "1", skill: "4+", s: "26", ap: "-5", d: "12" },
      { name: "Ion cannon – standard", tags: "blast", range: "60\"", a: "D6+3", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Ion cannon – overcharge", tags: "blast, hazardous", range: "60\"", a: "D6+3", skill: "4+", s: "8", ap: "-2", d: "3" },
      { name: "Long-barrelled burst cannon array", tags: "", range: "24\"", a: "32", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Seeker missile", tags: "one shot", range: "48\"", a: "1", skill: "4+", s: "14", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Armoured hull", tags: "", a: "8", skill: "5+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Aggressive Deployment", text: "After this model shoots, pick an enemy it hit — friendly models disembarking from this Transport this turn can re-roll Wound rolls against that unit for the rest of the turn." },
      { name: "Air Caste Colossus", text: "Any Stratagem used on this model costs three times its normal CP cost." },
      { name: "One Shot", text: "The bearer can only shoot with this weapon once per battle." }
    ],
    keywords: ["VEHICLE", "TRANSPORT", "MANTA", "MARKERLIGHT", "TITANIC", "FRAME", "FLY", "AIRCRAFT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Manta.",
    points: [{ models: 1, pts: 2100 }],
  },
  {
    id: "remote-sensor-tower",
    name: "Remote Sensor Tower",
    faction: "T'au Empire",
    base: "Use model",
    stats: { M: "-", T: "8", Sv: "4+", W: "4", Ld: "8+", OC: "0" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Orbital Comms Array (Aura)", text: "Friendly T'au Empire units within 6\" have a chance (5+ on a D6) to gain 1 Command Point whenever targeted by a Stratagem." },
      { name: "Reinforced Cover", text: "A ranged attack against a friendly model is treated as Benefit of Cover if this Fortification blocks it from being fully visible." },
      { name: "Fortification", text: "Enemies only engaged with this Fortification can still be shot (except by Pistols, at -1 to hit) and don't need Desperate Escape tests to Fall Back from it." }
    ],
    keywords: ["REMOTE SENSOR TOWER", "FRAME", "FORTIFICATION"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Remote Sensor Tower.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "drone-sentry-turret",
    name: "Drone Sentry Turret",
    faction: "T'au Empire",
    base: "Use model",
    stats: { M: "-", T: "8", Sv: "4+", W: "4", Ld: "8+", OC: "0" },
    rangedWeapons: [
      { name: "Twin burst cannon", tags: "twin-linked", range: "18\"", a: "4", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Twin fusion blaster", tags: "melta 2, twin-linked", range: "12\"", a: "1", skill: "5+", s: "9", ap: "-4", d: "D6" },
      { name: "Twin missile pod", tags: "twin-linked", range: "30\"", a: "2", skill: "5+", s: "7", ap: "-1", d: "2" },
      { name: "Twin plasma rifle", tags: "twin-linked", range: "24\"", a: "1", skill: "5+", s: "8", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Sentinel Protocols", text: "When this Fortification uses Fire Overwatch, it hits on unmodified rolls of 5+ instead of the usual 6." },
      { name: "Reinforced Cover", text: "A ranged attack against a friendly model is treated as Benefit of Cover if this Fortification blocks it from being fully visible." },
      { name: "Fortification", text: "Enemies only engaged with this Fortification can still be shot (except by Pistols, at -1 to hit) and don't need Desperate Escape tests to Fall Back from it." }
    ],
    keywords: ["DRONE SENTRY TURRET", "FRAME", "VEHICLE", "FORTIFICATION"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Drone Sentry Turret.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "knarloc-riders",
    name: "Knarloc Riders",
    faction: "T'au Empire",
    base: "65mm",
    stats: { M: "7\"", T: "5", Sv: "5+", W: "4", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Kroot rifle", tags: "rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Knarloc beak and talons", tags: "extra attacks", a: "4", skill: "3+", s: "6", ap: "-1", d: "1" },
      { name: "Kroot rifle", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Thunderous Pounce", text: "When this unit ends a Charge move, its Knarloc beak and talons gain the Lance ability until the end of the turn." }
    ],
    keywords: ["MOUNTED", "KNARLOC RIDERS", "KROOT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "3 Knarloc Riders.",
    points: [{ models: 3, pts: 110 }],
  },
  {
    id: "great-knarloc",
    name: "Great Knarloc",
    faction: "T'au Empire",
    base: "65mm",
    stats: { M: "9\"", T: "8", Sv: "4+", W: "10", Ld: "7+", OC: "3" },
    rangedWeapons: [
      { name: "Kroot bolt thrower", tags: "hooked", range: "12\"", a: "1", skill: "4+", s: "12", ap: "-2", d: "3" },
      { name: "Kroot rifle", tags: "rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Twin Kroot gun", tags: "twin-linked", range: "36\"", a: "2", skill: "4+", s: "7", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Great Knarloc beak and talons", tags: "extra attacks", a: "4", skill: "3+", s: "7", ap: "-1", d: "3" },
      { name: "Kroot rifle", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Loping Stride", text: "When this model Advances, skip the roll and add a flat 6\" to its Move for the phase instead." },
      { name: "Baggage Harness (Aura)", text: "Friendly Kroot units within 3\" get Sustained Hits 1 on their ranged weapons." },
      { name: "Hooked", text: "If this weapon hits a Monster/Vehicle, the bearer gets +2 to Charge rolls against it for the rest of the turn, and it can't use Fire Overwatch against the bearer." }
    ],
    keywords: ["MONSTER", "FRAME", "KROOT", "GREAT KNARLOC"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Great Knarloc.",
    points: [{ models: 1, pts: 100 }],
  },
  {
    id: "commander-in-crisis-battlesuit",
    name: "Commander In Crisis Battlesuit",
    faction: "T'au Empire",
    base: "50mm",
    stats: { M: "10\"", T: "5", Sv: "3+", W: "5", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Airbursting fragmentation projector", tags: "blast, indirect fire", range: "24\"", a: "D6", skill: "3+", s: "3", ap: "0", d: "1" },
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Cyclic ion blaster – standard", tags: "", range: "18\"", a: "3", skill: "3+", s: "7", ap: "-1", d: "1" },
      { name: "Cyclic ion blaster – overcharge", tags: "hazardous", range: "18\"", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Fusion blaster", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Plasma rifle", tags: "", range: "24\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "T’au flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Crisis Commander", text: "While this model is leading a unit, that unit's ranged attacks can re-roll a Hit roll of 1." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Shield Generator", text: "The bearer has a 4+ invulnerable save." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." }
    ],
    keywords: ["VEHICLE", "COMMANDER IN CRISIS BATTLESUIT", "WALKER", "BATTLESUIT", "CHARACTER", "FLY"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Commander in Crisis Battlesuit.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "commander-in-enforcer-battlesuit",
    name: "Commander In Enforcer Battlesuit",
    faction: "T'au Empire",
    base: "60mm",
    stats: { M: "8\"", T: "5", Sv: "2+", W: "6", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Airbursting fragmentation projector", tags: "blast, indirect fire", range: "24\"", a: "D6", skill: "3+", s: "3", ap: "0", d: "1" },
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Cyclic ion blaster – standard", tags: "", range: "18\"", a: "3", skill: "3+", s: "7", ap: "-1", d: "1" },
      { name: "Cyclic ion blaster – overcharge", tags: "hazardous", range: "18\"", a: "3", skill: "3+", s: "8", ap: "-2", d: "2" },
      { name: "Fusion blaster", tags: "melta 2", range: "12\"", a: "1", skill: "3+", s: "9", ap: "-4", d: "D6" },
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Plasma rifle", tags: "", range: "18\"", a: "1", skill: "3+", s: "8", ap: "-3", d: "3" },
      { name: "T’au flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Enforcer Commander", text: "While this model is leading a unit, ranged attacks against that unit have their Armour Penetration worsened by 1." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." },
      { name: "Shield Generator", text: "The bearer has a 4+ invulnerable save." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." }
    ],
    keywords: ["CHARACTER", "COMMANDER IN ENFORCER BATTLESUIT", "BATTLESUIT", "FLY", "WALKER", "VEHICLE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Commander in Enforcer Battlesuit.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "kroot-farstalkers",
    name: "Kroot Farstalkers",
    faction: "T'au Empire",
    base: "28.5mm",
    stats: { M: "7\"", T: "3", Sv: "6+", W: "1", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Dvorgite skinner", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "-1", d: "1" },
      { name: "Farstalker firearm", tags: "rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Kroot pistol", tags: "pistol", range: "12\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Londaxi tribalest", tags: "anti-vehicle 4+, devastating wounds, heavy", range: "18\"", a: "3", skill: "5+", s: "7", ap: "-1", d: "1" },
      { name: "T’au-tech rifle", tags: "rapid fire 1", range: "30\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Ripping fangs", tags: "", a: "3", skill: "3+", s: "3", ap: "0", d: "1" },
      { name: "Ritual blade", tags: "", a: "3", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Pech’ra", text: "This unit's ranged weapons gain Ignores Cover." },
      { name: "Bounty Hunters", text: "At the start of the battle, pick an enemy unit — this unit's attacks against it gain Lethal Hits and Precision." }
    ],
    keywords: ["INFANTRY", "GRENADES", "FARSTALKERS", "KROOT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Kroot Kill-broker; 9 Kroot Farstalkers; 2 Kroot Hounds.",
    points: [{ models: 12, pts: 75 }],
  },
  {
    id: "crisis-sunforge-battlesuits",
    name: "Crisis Sunforge Battlesuits",
    faction: "T'au Empire",
    base: "50mm",
    stats: { M: "10\"", T: "5", Sv: "3+", W: "4", Ld: "7+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Fusion blaster", tags: "melta 2", range: "12\"", a: "1", skill: "4+", s: "9", ap: "-4", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Sunforge", text: "This unit's ranged attacks against Monster/Vehicle targets can re-roll the Wound roll and the Damage roll." }
    ],
    keywords: ["VEHICLE", "WALKER", "FLY", "BATTLESUIT", "CRISIS", "SUNFORGE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Crisis Sunforge Shas’vre; 2 Crisis Sunforge Shas’ui.",
    points: [{ models: 3, pts: 125 }],
  },
  {
    id: "crisis-fireknife-battlesuits",
    name: "Crisis Fireknife Battlesuits",
    faction: "T'au Empire",
    base: "50mm",
    stats: { M: "10\"", T: "5", Sv: "3+", W: "4", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Missile pod", tags: "", range: "30\"", a: "2", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Plasma rifle", tags: "", range: "18\"", a: "1", skill: "4+", s: "8", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Fireknife", text: "This unit's ranged attacks re-roll a Hit roll of 1, or any Hit roll against a full-strength target." },
      { name: "Weapon Support System", text: "This model's ranged attacks can ignore any Hit roll modifiers." }
    ],
    keywords: ["FLY", "BATTLESUIT", "CRISIS", "FIREKNIFE", "VEHICLE", "WALKER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Crisis Fireknife Shas’vre; 2 Crisis Fireknife Shas’ui.",
    points: [{ models: 3, pts: 100 }],
  },
  {
    id: "crisis-starscythe-battlesuits",
    name: "Crisis Starscythe Battlesuits",
    faction: "T'au Empire",
    base: "50mm",
    stats: { M: "10\"", T: "5", Sv: "3+", W: "4", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Burst cannon", tags: "", range: "18\"", a: "4", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "T’au flamer", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Battlesuit fists", tags: "", a: "3", skill: "5+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Starscythe", text: "This unit's ranged attacks (except against Monster/Vehicle) get +1 Armour Penetration." },
      { name: "Battlesuit Support System", text: "This model's unit can shoot after Falling Back, but only models with this wargear can actually shoot that phase." }
    ],
    keywords: ["WALKER", "FLY", "BATTLESUIT", "CRISIS", "STARSCYTHE", "VEHICLE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Crisis Starscythe Shas’vre; 2 Crisis Starscythe Shas’ui.",
    points: [{ models: 3, pts: 100 }],
  },
  {
    id: "kroot-trail-shaper",
    name: "Kroot Trail Shaper",
    faction: "T'au Empire",
    base: "32mm",
    stats: { M: "7\"", T: "3", Sv: "6+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Kroot rifle", tags: "rapid fire 1", range: "24\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Shaper’s blade", tags: "", a: "4", skill: "2+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Trail Finding", text: "In your opponent's Movement phase, if an enemy ends a move within 8\" and this unit isn't engaged, it can make a Normal move of up to D6\"." },
      { name: "Kroot Ambush", text: "After deployment, redeploy this unit and one other friendly Kroot unit, including into Strategic Reserves beyond normal limits." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "KROOT", "SHAPER", "TRAIL SHAPER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Kroot Trail Shaper.",
    points: [{ models: 1, pts: 50 }],
  },
  {
    id: "kroot-war-shaper",
    name: "Kroot War Shaper",
    faction: "T'au Empire",
    base: "32mm",
    stats: { M: "7\"", T: "3", Sv: "6+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Dart-bow and tri-blade", tags: "ANTI-INFANTRY 3+, ASSAULT, HEAVY", range: "24\"", a: "D3+1", skill: "4+", s: "4", ap: "0", d: "2" },
      { name: "Kroot pistol", tags: "pistol", range: "12\"", a: "1", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Bladestave and prey-hook", tags: "lethal hits", a: "4", skill: "2+", s: "5", ap: "-1", d: "2" },
      { name: "Shaper’s blade", tags: "", a: "4", skill: "2+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "War Leader", text: "Once per battle round, one unit from your army with this ability can use it when its unit is targeted with a Stratagem. If it does, reduce the CP cost of that use of the Stratagem by 1." },
      { name: "Root of Honour", text: "Once per battle, remove Battle-shocked status from a friendly Kroot unit within 12\"." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "WAR SHAPER", "SHAPER", "KROOT"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Kroot War Shaper.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "kroot-flesh-shaper",
    name: "Kroot Flesh Shaper",
    faction: "T'au Empire",
    base: "32mm",
    stats: { M: "7\"", T: "3", Sv: "6+", W: "3", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Kroot scattergun", tags: "assault", range: "12\"", a: "2", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Twin ritualistic blades", tags: "twin-linked", a: "4", skill: "2+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Ritual Butchery", text: "While this model is leading a unit, that unit's melee weapons gain Sustained Hits 1." },
      { name: "Rites of Feasting", text: "While this model is leading a unit, that unit has Feel No Pain 6+ (improving to 5+ for the rest of the battle once it destroys an enemy in melee)." }
    ],
    keywords: ["FLESH SHAPER", "KROOT", "CHARACTER", "INFANTRY", "SHAPER"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Kroot Flesh Shaper.",
    points: [{ models: 1, pts: 45 }],
  },
  {
    id: "kroot-lone-spear",
    name: "Kroot Lone-Spear",
    faction: "T'au Empire",
    base: "90 x 52mm",
    stats: { M: "12\"", T: "5", Sv: "5+", W: "6", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Blast javelin", tags: "assault, blast", range: "18\"", a: "D6", skill: "4+", s: "10", ap: "-2", d: "2" },
      { name: "Kroot long gun", tags: "heavy, precision", range: "36\"", a: "1", skill: "3+", s: "6", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Hunting javelin", tags: "lance", a: "3", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Kalamandra’s bite", tags: "extra attacks", a: "4", skill: "4+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Advanced Scouting", text: "When this model's ranged attack hits, other Kroot attacks against that same target can re-roll the Hit roll for the rest of the turn." },
      { name: "Fire and Fade", text: "After this model shoots, if unengaged, it can make a Normal move of up to 6\" — but can't charge this turn if it does." }
    ],
    keywords: ["CHARACTER", "KROOT", "LONE-SPEAR", "MOUNTED"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Kroot Lone-Spear.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "krootox-rampagers",
    name: "Krootox Rampagers",
    faction: "T'au Empire",
    base: "50mm",
    stats: { M: "7\"", T: "6", Sv: "5+", W: "5", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Kroot pistol and hunting javelins", tags: "assault, pistol", range: "12\"", a: "2", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "Lance", a: "3", skill: "3+", s: "4", ap: "-1", d: "1" },
      { name: "Krootox fists", tags: "EXTRA ATTACKS, sustained hits 1", a: "4", skill: "3+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Kroot Linebreakers", text: "When this unit ends a Charge move, roll a D6 per engaged model against one enemy — each 4+ deals D3 mortal wounds, forcing a Battle-shock test if any models die." }
    ],
    keywords: ["MOUNTED", "GRENADES", "KROOT", "KROOTOX RAMPAGERS"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "3-6 Krootox Rampagers.",
    points: [{ models: 3, pts: 85 }, { models: 6, pts: 170 }],
  },
  {
    id: "the-twin-lance",
    name: "The Twin Lance",
    faction: "T'au Empire",
    base: "60mm",
    stats: { M: "10\"", T: "6", Sv: "2+", W: "8", Ld: "6+", OC: "2", InvSv: "4+" },
    rangedWeapons: [
      { name: "Fusion eliminator", tags: "melta 2", range: "18\"", a: "2", skill: "2+", s: "10", ap: "-4", d: "D6" },
      { name: "Ion scattercannon – standard", tags: "rapid fire 2", range: "18\"", a: "4", skill: "2+", s: "7", ap: "-2", d: "2" },
      { name: "Ion scattercannon – overcharge", tags: "hazardous, rapid fire 2", range: "18\"", a: "4", skill: "2+", s: "8", ap: "-3", d: "3" },
      { name: "Shardstorm burst system", tags: "pistol", range: "18\"", a: "D6", skill: "2+", s: "5", ap: "0", d: "1" },
      { name: "Twin pulse blaster", tags: "assault, twin-linked", range: "10\"", a: "2", skill: "5+", s: "6", ap: "-1", d: "1" },
      { name: "XV pulse pistol", tags: "rapid fire 2", range: "12\"", a: "2", skill: "2+", s: "6", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Fusion eliminator", tags: "extra attacks", a: "1", skill: "4+", s: "10", ap: "-4", d: "D6+2" },
      { name: "Ion scattercannon", tags: "extra attacks", a: "3", skill: "4+", s: "7", ap: "-2", d: "2" },
      { name: "XV pulse pistol", tags: "", a: "4", skill: "3+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "For the Greater Good", text: "Army rule: at the start of your Shooting phase, pick eligible units to become Observers — each Observer that doesn't shoot this phase can mark one visible enemy as a Spotted unit, letting other T'au units get bonuses attacking it." },
      { name: "Exemplars of Mont’ka", text: "This unit's attacks against the closest target gain Sustained Hits 1 and Ignores Cover." },
      { name: "Neocapacitor Shields", text: "At the start of your opponent's Charge phase, force a visible non-Monster/Vehicle enemy within 12\" to take a Battle-shock test and take -1 to Charge rolls this turn." },
      { name: "Retro-thrusters", text: "After fighting, this unit can make a Normal move of up to 6\" or a Fall Back move." },
      { name: "MV15 Gun Drone", text: "The bearer is equipped with a twin pulse blaster." }
    ],
    keywords: ["EPIC HERO", "CHARACTER", "FLY", "WALKER", "VEHICLE", "BATTLESUIT", "THE TWIN LANCE"],
    factionKeywords: ["T’AU EMPIRE"],
    composition: "1 Ri’Lantar – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>; 1 Ri’Locai – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 2, pts: 230 }],
  },
  {
    id: "hive-tyrant",
    name: "Hive Tyrant",
    faction: "Tyranids",
    base: "60mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "10", Ld: "7+", OC: "3", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy venom cannon", tags: "blast", range: "36\"", a: "D3", skill: "2+", s: "9", ap: "-2", d: "3" },
      { name: "Stranglethorn cannon", tags: "blast", range: "36\"", a: "D6+1", skill: "2+", s: "7", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Monstrous bonesword and lash whip", tags: "twin-linked", a: "6", skill: "2+", s: "9", ap: "-2", d: "3" },
      { name: "Monstrous scything talons", tags: "extra attacks", a: "4", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Will of the Hive Mind", text: "Once per battle round, when a friendly Tyranids unit within 12\" is targeted by a Stratagem, reduce its CP cost by 1." },
      { name: "Onslaught (Aura, Psychic)", text: "Friendly Tyranids units within 6\" get Assault and Lethal Hits on their ranged weapons." }
    ],
    keywords: ["PSYKER", "MONSTER", "SYNAPSE", "GREAT DEVOURER", "CHARACTER", "HIVE TYRANT"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Hive Tyrant.",
    points: [{ models: 1, pts: 195 }],
  },
  {
    id: "the-swarmlord",
    name: "The Swarmlord",
    faction: "Tyranids",
    base: "60mm",
    stats: { M: "8\"", T: "10", Sv: "2+", W: "10", Ld: "7+", OC: "3", InvSv: "4+" },
    rangedWeapons: [
      { name: "Synaptic pulse", tags: "psychic, torrent", range: "18\"", a: "D6+3", skill: "N/A", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Bone sabres", tags: "twin-linked", a: "8", skill: "2+", s: "9", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Hive Commander", text: "At the start of your Command phase, if this model is on the battlefield, gain 1 Command Point." },
      { name: "Malign Presence (Aura)", text: "If this model is your Warlord, Stratagems your opponent uses on units within 12\" of it cost 1 extra CP." },
      { name: "Domination of the Hive Mind (Aura)", text: "Friendly Tyranids units within 9\" of this model are always within Synapse Range." }
    ],
    keywords: ["EPIC HERO", "CHARACTER", "SYNAPSE", "MONSTER", "GREAT DEVOURER", "HIVE TYRANT", "THE SWARMLORD", "PSYKER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Swarmlord – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 210 }],
  },
  {
    id: "old-one-eye",
    name: "Old One Eye",
    faction: "Tyranids",
    base: "105 x 70mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "9", Ld: "8+", OC: "3" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Old One Eye’s claws and talons – strike", tags: "", a: "6", skill: "3+", s: "14", ap: "-3", d: "D6+1" },
      { name: "Old One Eye’s claws and talons – sweep", tags: "", a: "12", skill: "3+", s: "6", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Alpha Leader", text: "While this model is leading a unit, that unit's attacks can re-roll the Hit roll." },
      { name: "Unstoppable Monster", text: "At the start of each Command phase, this model heals up to D3 wounds." }
    ],
    keywords: ["EPIC HERO", "CHARACTER", "MONSTER", "OLD ONE EYE", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Old One Eye – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "broodlord",
    name: "Broodlord",
    faction: "Tyranids",
    base: "75 x 42mm",
    stats: { M: "8\"", T: "5", Sv: "4+", W: "6", Ld: "7+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Broodlord claws and talons", tags: "devastating wounds, twin-linked", a: "5", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Vicious Insight", text: "While this model is leading a unit, that unit's weapons gain Devastating Wounds." },
      { name: "Hypnotic Gaze (Psychic)", text: "At the start of the Fight phase, pick an engaged enemy unit — its attacks take -1 to hit for the rest of the phase." }
    ],
    keywords: ["INFANTRY", "PSYKER", "GREAT DEVOURER", "VANGUARD INVADER", "BROODLORD", "SYNAPSE", "CHARACTER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Broodlord.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "tervigon",
    name: "Tervigon",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "8\"", T: "11", Sv: "2+", W: "16", Ld: "7+", OC: "5" },
    rangedWeapons: [
      { name: "Stinger salvoes", tags: "", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Massive crushing claws", tags: "", a: "4", skill: "4+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Massive scything talons – strike", tags: "", a: "4", skill: "3+", s: "9", ap: "-2", d: "D6" },
      { name: "Massive scything talons – sweep", tags: "", a: "8", skill: "3+", s: "7", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Spawn Termagants", text: "In your Command phase, a nearby friendly Termagants unit within 6\" can regain up to D3+3 destroyed models (once per phase per unit)." },
      { name: "Brood Progenitor (Aura, Psychic)", text: "Friendly Termagants units within 6\" get Lethal Hits on their ranged weapons." }
    ],
    keywords: ["CHARACTER", "TERVIGON", "MONSTER", "PSYKER", "GREAT DEVOURER", "SYNAPSE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Tervigon.",
    points: [{ models: 1, pts: 160 }],
  },
  {
    id: "genestealers",
    name: "Genestealers",
    faction: "Tyranids",
    base: "32mm",
    stats: { M: "8\"", T: "4", Sv: "5+", W: "2", Ld: "7+", OC: "1", InvSv: "5+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Genestealer claws and talons", tags: "", a: "4", skill: "2+", s: "4", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Scouts", text: "Scouts X\": before the battle, a unit where every model has this ability can make a free move of up to X\" (or redeploy within your own deployment zone)." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Vanguard Predator", text: "This unit's attacks re-roll a Hit roll of 1, and a Wound roll of 1 too if the target is near an objective." }
    ],
    keywords: ["GENESTEALERS", "INFANTRY", "GREAT DEVOURER", "VANGUARD INVADER"],
    factionKeywords: ["TYRANIDS"],
    composition: "5-10 Genestealers.",
    points: [{ models: 5, pts: 75 }, { models: 10, pts: 140 }],
  },
  {
    id: "termagants",
    name: "Termagants",
    faction: "Tyranids",
    base: "28.5mm",
    stats: { M: "6\"", T: "3", Sv: "5+", W: "1", Ld: "8+", OC: "2" },
    rangedWeapons: [
      { name: "Fleshborer", tags: "assault", range: "18\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Shardlauncher", tags: "blast, heavy", range: "18\"", a: "D3", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Spike rifle", tags: "heavy", range: "24\"", a: "1", skill: "4+", s: "4", ap: "-1", d: "1" },
      { name: "Strangleweb", tags: "assault, devastating wounds, torrent", range: "18\"", a: "D6", skill: "N/A", s: "2", ap: "0", d: "1" },
      { name: "Termagant devourer", tags: "", range: "18\"", a: "2", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Termagant spinefists", tags: "assault, pistol, twin-linked", range: "12\"", a: "2", skill: "4+", s: "3", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chitinous claws and teeth", tags: "", a: "1", skill: "4+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Skulking Horrors", text: "In your opponent's Movement phase, if an enemy ends a move within 8\" and this unit isn't engaged, it can make a Normal move of up to D6\"." }
    ],
    keywords: ["BATTLELINE", "GREAT DEVOURER", "INFANTRY", "TERMAGANTS", "ENDLESS MULTITUDE"],
    factionKeywords: ["TYRANIDS"],
    composition: "10-20 Termagants.",
    points: [{ models: 10, pts: 60 }, { models: 20, pts: 110 }],
  },
  {
    id: "hormagaunts",
    name: "Hormagaunts",
    faction: "Tyranids",
    base: "28.5mm",
    stats: { M: "10\"", T: "3", Sv: "5+", W: "1", Ld: "8+", OC: "2" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Hormagaunt talons", tags: "", a: "3", skill: "4+", s: "3", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Bounding Leap", text: "This unit can charge even after Advancing." }
    ],
    keywords: ["INFANTRY", "BATTLELINE", "ENDLESS MULTITUDE", "HORMAGAUNTS", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "10-20 Hormagaunts.",
    points: [{ models: 10, pts: 70 }, { models: 20, pts: 120 }],
  },
  {
    id: "ripper-swarms",
    name: "Ripper Swarms",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "6\"", T: "2", Sv: "6+", W: "4", Ld: "8+", OC: "0" },
    rangedWeapons: [
      { name: "Spinemaws", tags: "pistol", range: "6\"", a: "4", skill: "5+", s: "3", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chitinous claws and teeth", tags: "sustained hits 1", a: "6", skill: "5+", s: "2", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Chitinous Horrors (Aura)", text: "Enemy units engaged with this unit have their Objective Control halved." }
    ],
    keywords: ["HARVESTER", "SWARM", "GREAT DEVOURER", "RIPPER SWARMS"],
    factionKeywords: ["TYRANIDS"],
    composition: "1-3 Ripper Swarms.",
    points: [{ models: 1, pts: 30 }, { models: 2, pts: 40 }, { models: 3, pts: 50 }],
  },
  {
    id: "tyrant-guard",
    name: "Tyrant Guard",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "6\"", T: "8", Sv: "3+", W: "4", Ld: "8+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Bone cleaver, lash whip and rending claws", tags: "", a: "3", skill: "3+", s: "5", ap: "-1", d: "2" },
      { name: "Crushing claws and rending claws", tags: "twin-linked", a: "2", skill: "4+", s: "8", ap: "-2", d: "2" },
      { name: "Scything talons and rending claws", tags: "", a: "5", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Guardian Organism", text: "While a Character is leading this unit, that Character has Feel No Pain 5+." }
    ],
    keywords: ["INFANTRY", "GREAT DEVOURER", "TYRANT GUARD"],
    factionKeywords: ["TYRANIDS"],
    composition: "3-6 Tyrant Guard.",
    points: [{ models: 3, pts: 80 }, { models: 6, pts: 170 }],
  },
  {
    id: "hive-guard",
    name: "Hive Guard",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "6\"", T: "7", Sv: "3+", W: "4", Ld: "8+", OC: "1" },
    rangedWeapons: [
      { name: "Impaler cannon", tags: "heavy, indirect fire", range: "36\"", a: "4", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Shockcannon", tags: "anti-vehicle 2+", range: "24\"", a: "2", skill: "3+", s: "7", ap: "-1", d: "3" }
    ],
    meleeWeapons: [
      { name: "Chitinous claws and teeth", tags: "", a: "3", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Defensive Stance", text: "When this unit uses Fire Overwatch, it hits on unmodified 5+ (or 4+ if near an objective) instead of the usual 6." }
    ],
    keywords: ["INFANTRY", "HIVE GUARD", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "3-6 Hive Guard.",
    points: [{ models: 3, pts: 80 }, { models: 6, pts: 160 }],
  },
  {
    id: "lictor",
    name: "Lictor",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "8\"", T: "6", Sv: "4+", W: "6", Ld: "7+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Lictor claws and talons", tags: "precision", a: "6", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Fights First", text: "A unit where every model has Fights First fights before non-Fights-First units in the Fight phase." },
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Feeder Tendrils", text: "Each time this model destroys an enemy Character, gain 1 Command Point." },
      { name: "Pheromone Trail", text: "Once per battle round, use Rapid Ingress on this model for free (0CP)." }
    ],
    keywords: ["LICTOR", "VANGUARD INVADER", "GREAT DEVOURER", "INFANTRY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Lictor.",
    points: [{ models: 1, pts: 60 }],
  },
  {
    id: "maleceptor",
    name: "Maleceptor",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "8\"", T: "11", Sv: "3+", W: "14", Ld: "7+", OC: "4", InvSv: "4+" },
    rangedWeapons: [
      { name: "Psychic overload", tags: "blast, psychic", range: "18\"", a: "D6+3", skill: "3+", s: "10", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Massive scything talons – strike", tags: "", a: "3", skill: "3+", s: "9", ap: "-2", d: "D6+1" },
      { name: "Massive scything talons – sweep", tags: "", a: "6", skill: "3+", s: "7", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Encephalic Diffusion (Aura, Psychic)", text: "Enemy units within 6\" take -1 to hit, and -1 to wound too if they're Below Half-strength." }
    ],
    keywords: ["MALECEPTOR", "SYNAPSE", "GREAT DEVOURER", "MONSTER", "PSYKER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Maleceptor.",
    points: [{ models: 1, pts: 180 }],
  },
  {
    id: "zoanthropes",
    name: "Zoanthropes",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "5\"", T: "5", Sv: "5+", W: "3", Ld: "7+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      { name: "Warp Blast – witchfire", tags: "blast, psychic", range: "24\"", a: "D3", skill: "3+", s: "7", ap: "-2", d: "D3" },
      { name: "Warp Blast – focused witchfire", tags: "lethal hits, psychic", range: "24\"", a: "1", skill: "3+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Chitinous claws and teeth", tags: "", a: "2", skill: "5+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Spirit Leech (Aura, Psychic)", text: "While this unit contains a Neurothrope, an enemy within 6\" that fails a Battle-shock test suffers D3 mortal wounds, and a model in this unit heals up to D3 wounds." },
      { name: "Warp Field (Aura, Psychic)", text: "Friendly Tyranids units within 6\" get a 6+ invulnerable save." }
    ],
    keywords: ["ZOANTHROPES", "SYNAPSE", "GREAT DEVOURER", "FLY", "PSYKER", "INFANTRY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Neurothrope; 2-5 Zoanthropes.",
    points: [{ models: 3, pts: 90 }, { models: 6, pts: 190 }],
  },
  {
    id: "venomthropes",
    name: "Venomthropes",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "3", Ld: "8+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Toxic lashes", tags: "anti-infantry 2+", a: "5", skill: "3+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Foul Spores (Aura)", text: "Friendly Tyranids units within 6\" gain Stealth." }
    ],
    keywords: ["FLY", "INFANTRY", "GREAT DEVOURER", "VENOMTHROPES"],
    factionKeywords: ["TYRANIDS"],
    composition: "3-6 Venomthropes.",
    points: [{ models: 3, pts: 55 }, { models: 6, pts: 110 }],
  },
  {
    id: "pyrovores",
    name: "Pyrovores",
    faction: "Tyranids",
    base: "80mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "5", Ld: "8+", OC: "1" },
    rangedWeapons: [
      { name: "Flamespurt", tags: "ignores cover, torrent, twin-linked", range: "12\"", a: "D6+1", skill: "N/A", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chitin-barbed limbs", tags: "", a: "2", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Burning Spray", text: "After this unit shoots, an enemy it hit loses Benefit of Cover until the end of the phase." }
    ],
    keywords: ["PYROVORES", "HARVESTER", "GREAT DEVOURER", "INFANTRY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1-3 Pyrovores.",
    points: [{ models: 1, pts: 40 }, { models: 2, pts: 70 }, { models: 3, pts: 100 }],
  },
  {
    id: "haruspex",
    name: "Haruspex",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "8\"", T: "11", Sv: "3+", W: "14", Ld: "8+", OC: "4" },
    rangedWeapons: [
      { name: "Grasping tongue", tags: "precision", range: "12\"", a: "1", skill: "3+", s: "6", ap: "-2", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Ravenous maw", tags: "", a: "14", skill: "3+", s: "7", ap: "-1", d: "2" },
      { name: "Shovelling claws", tags: "extra attacks", a: "4", skill: "3+", s: "14", ap: "-2", d: "D6+1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Grisly Spectacle", text: "If this model's attacks destroy an enemy unit, other enemies within 6\" must take a Battle-shock test." }
    ],
    keywords: ["HARVESTER", "MONSTER", "HARUSPEX", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Haruspex.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "deathleaper",
    name: "Deathleaper",
    faction: "Tyranids",
    base: "60mm",
    stats: { M: "8\"", T: "6", Sv: "3+", W: "7", Ld: "7+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Lictor claws and talons", tags: "precision", a: "6", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Fights First", text: "A unit where every model has Fights First fights before non-Fights-First units in the Fight phase." },
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Feeder Tendrils", text: "Each time this model destroys an enemy Character, gain 1 Command Point." },
      { name: "Fear of the Unseen (Aura)", text: "Enemy units within 6\" have their Leadership worsened by 1, and must test for Battle-shock if below Starting Strength during your opponent's Command phase." },
      { name: "HUNTER ORGANISM", text: "This model cannot be your Warlord." }
    ],
    keywords: ["CHARACTER", "EPIC HERO", "GREAT DEVOURER", "VANGUARD INVADER", "DEATHLEAPER", "INFANTRY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Deathleaper – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "raveners",
    name: "Raveners",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "10\"", T: "5", Sv: "4+", W: "3", Ld: "8+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Ravener claws and talons", tags: "twin-linked", a: "3", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Death From Below", text: "At the end of your opponent's turn, if unengaged, this unit can return to Strategic Reserves." }
    ],
    keywords: ["VANGUARD INVADER", "BURROWERS", "RAVENERS", "INFANTRY", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "5 Raveners.",
    points: [{ models: 5, pts: 125 }],
  },
  {
    id: "sky-slasher-swarms",
    name: "Sky-slasher Swarms",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "12\"", T: "2", Sv: "6+", W: "4", Ld: "8+", OC: "0" },
    rangedWeapons: [
      { name: "Spinemaws", tags: "pistol", range: "6\"", a: "4", skill: "5+", s: "3", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Claws and teeth", tags: "sustained hits 1", a: "6", skill: "5+", s: "2", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Chitinous Horrors", text: "Enemy units engaged with a unit that has this ability have their Objective Control halved." }
    ],
    keywords: ["SKY-SLASHER SWARMS", "FLY", "GREAT DEVOURER", "SWARM"],
    factionKeywords: ["TYRANIDS"],
    composition: "3 Sky-slasher Swarms.",
    points: [{ models: 3, pts: 60 }],
  },
  {
    id: "gargoyles",
    name: "Gargoyles",
    faction: "Tyranids",
    base: "32mm flying base",
    stats: { M: "12\"", T: "3", Sv: "6+", W: "1", Ld: "8+", OC: "2" },
    rangedWeapons: [
      { name: "Fleshborer", tags: "assault", range: "18\"", a: "1", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Blinding venom", tags: "", a: "1", skill: "4+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Winged Swarm", text: "After this unit shoots, if unengaged, it can make a Normal move of up to 6\" — but can't charge this turn if it does." }
    ],
    keywords: ["GARGOYLES", "INFANTRY", "BATTLELINE", "FLY", "GREAT DEVOURER", "ENDLESS MULTITUDE", "VANGUARD INVADER"],
    factionKeywords: ["TYRANIDS"],
    composition: "10-20 Gargoyles.",
    points: [{ models: 10, pts: 80 }, { models: 20, pts: 155 }],
  },
  {
    id: "harpy",
    name: "Harpy",
    faction: "Tyranids",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "12", Ld: "8+", OC: "-" },
    rangedWeapons: [
      { name: "Stinger salvoes", tags: "", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Twin heavy venom cannon", tags: "blast, twin-linked", range: "36\"", a: "D3", skill: "3+", s: "9", ap: "-2", d: "3" },
      { name: "Twin stranglethorn cannon", tags: "blast, twin-linked", range: "36\"", a: "D6+1", skill: "2+", s: "7", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Scything wings", tags: "", a: "4", skill: "4+", s: "7", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Spore Mine Cysts", text: "At the end of your opponent's Fight phase, either deal mortal wounds to a nearby visible enemy (six D6, each 3+ scores) or spawn a new D3-model Spore Mines unit nearby." }
    ],
    keywords: ["HARPY", "FLY", "VANGUARD INVADER", "MONSTER", "AIRCRAFT", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Harpy.",
    points: [{ models: 1, pts: 185 }],
  },
  {
    id: "hive-crone",
    name: "Hive Crone",
    faction: "Tyranids",
    base: "120 x 92mm flying base",
    stats: { M: "-", T: "9", Sv: "3+", W: "12", Ld: "8+", OC: "-" },
    rangedWeapons: [
      { name: "Drool cannon", tags: "torrent", range: "12\"", a: "2D6", skill: "N/A", s: "6", ap: "-1", d: "1" },
      { name: "Stinger salvoes", tags: "", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Tentaclids", tags: "anti-vehicle 4+, devastating wounds", range: "36\"", a: "4", skill: "3+", s: "7", ap: "0", d: "2" }
    ],
    meleeWeapons: [
      { name: "Scything wings", tags: "", a: "4", skill: "4+", s: "7", ap: "-1", d: "2" },
      { name: "Thorax spur", tags: "anti-fly 2+, extra attacks", a: "1", skill: "3+", s: "10", ap: "-3", d: "D6" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Airborne Predator", text: "When this model attacks a Flying unit, add 1 to the Hit roll." }
    ],
    keywords: ["MONSTER", "AIRCRAFT", "GREAT DEVOURER", "VANGUARD INVADER", "HIVE CRONE", "FLY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Hive Crone.",
    points: [{ models: 1, pts: 170 }],
  },
  {
    id: "mucolid-spores",
    name: "Mucolid Spores",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "4\"", T: "4", Sv: "7+", W: "3", Ld: "8+", OC: "0" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Bio-minefield", text: "Enemy units can't start or end an Advance move within 6\" of this unit." },
      { name: "Floating Death", text: "When models end a move within 3\" of each other, this model can self-destruct against a nearby enemy for D3 or D6 mortal wounds." }
    ],
    keywords: ["BEAST", "FLY", "GREAT DEVOURER", "MUCOLID SPORES"],
    factionKeywords: ["TYRANIDS"],
    composition: "1-2 Mucolid Spores.",
    points: [{ models: 1, pts: 30 }, { models: 2, pts: 60 }],
  },
  {
    id: "spore-mines",
    name: "Spore Mines",
    faction: "Tyranids",
    base: "25mm",
    stats: { M: "4\"", T: "1", Sv: "7+", W: "1", Ld: "8+", OC: "0" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Bio-minefield", text: "Enemy units can't start or end an Advance move within 6\" of this unit." },
      { name: "Floating Death", text: "When models end a move within 3\" of each other, this model can self-destruct against a nearby enemy for D3 or D6 mortal wounds." }
    ],
    keywords: ["BEAST", "FLY", "GREAT DEVOURER", "SPORE MINES"],
    factionKeywords: ["TYRANIDS"],
    composition: "3-6 Spore Mines.",
    points: [{ models: 3, pts: 55 }, { models: 6, pts: 110 }],
  },
  {
    id: "tyrannocyte",
    name: "Tyrannocyte",
    faction: "Tyranids",
    base: "100mm",
    stats: { M: "8\"", T: "9", Sv: "3+", W: "10", Ld: "8+", OC: "2" },
    rangedWeapons: [
      { name: "Tyrannocyte bio-weapons", tags: "", range: "24\"", a: "5", skill: "4+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Flensing whips", tags: "", a: "6", skill: "4+", s: "7", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Aerial Seeding", text: "This model starts in Reserves without counting against normal Reserves limits, and can arrive in the first, second, or third Movement phase regardless of mission rules." }
    ],
    keywords: ["FRAME", "TRANSPORT", "DEDICATED TRANSPORT", "GREAT DEVOURER", "VANGUARD INVADER", "TYRANNOCYTE", "MONSTER", "FLY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Tyrannocyte.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "carnifexes",
    name: "Carnifexes",
    faction: "Tyranids",
    base: "105 x 70mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "8", Ld: "8+", OC: "3" },
    rangedWeapons: [
      { name: "Bio-plasma", tags: "assault, blast", range: "12\"", a: "D3", skill: "4+", s: "7", ap: "-2", d: "1" },
      { name: "Deathspitters with slimer maggots", tags: "", range: "24\"", a: "6", skill: "4+", s: "7", ap: "-2", d: "1" },
      { name: "Devourers with brainleech worms", tags: "", range: "18\"", a: "12", skill: "4+", s: "6", ap: "0", d: "1" },
      { name: "Heavy venom cannon", tags: "blast", range: "36\"", a: "D3", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Spine banks", tags: "assault", range: "6\"", a: "5", skill: "4+", s: "5", ap: "0", d: "1" },
      { name: "Stranglethorn cannon", tags: "blast", range: "36\"", a: "D6+1", skill: "4+", s: "7", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Carnifex crushing claws", tags: "", a: "4", skill: "4+", s: "12", ap: "-3", d: "D6+1" },
      { name: "Carnifex extra scything talons", tags: "extra attacks", a: "2", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Carnifex scything talons", tags: "", a: "6", skill: "4+", s: "9", ap: "-2", d: "3" },
      { name: "Chitinous claws and teeth", tags: "", a: "4", skill: "4+", s: "6", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Blistering Assault", text: "If this model loses a wound to enemy shooting, this unit can make a surge move of up to D6+2\"." }
    ],
    keywords: ["CARNIFEXES", "GREAT DEVOURER", "MONSTER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1-2 Carnifexes.",
    points: [{ models: 1, pts: 90 }, { models: 2, pts: 180 }],
  },
  {
    id: "biovores",
    name: "Biovores",
    faction: "Tyranids",
    base: "80mm",
    stats: { M: "5\"", T: "6", Sv: "3+", W: "5", Ld: "8+", OC: "1" },
    rangedWeapons: [
      { name: "Spore Mine launcher", tags: "blast, devastating wounds, heavy, indirect fire", range: "48\"", a: "D3", skill: "4+", s: "6", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Chitin-barbed limbs", tags: "", a: "2", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Seed Spore Mines", text: "Once per turn, instead of shooting, this unit can spawn a new Spore Mines unit within 48\" and more than 8\" from all enemies." }
    ],
    keywords: ["GREAT DEVOURER", "BIOVORES", "INFANTRY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1-3 Biovores.",
    points: [{ models: 1, pts: 60 }, { models: 2, pts: 100 }, { models: 3, pts: 140 }],
  },
  {
    id: "trygon",
    name: "Trygon",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "14", Ld: "8+", OC: "4" },
    rangedWeapons: [
      { name: "Bio-electric pulse", tags: "sustained hits 2", range: "12\"", a: "6", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Trygon scything talons", tags: "", a: "12", skill: "3+", s: "9", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Subterranean Tunnels", text: "When arriving via Deep Strike, this model can instead set up more than 6\" from all enemies, but can't charge this turn if it does." }
    ],
    keywords: ["TRYGON", "BURROWER", "VANGUARD INVADER", "GREAT DEVOURER", "MONSTER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Trygon.",
    points: [{ models: 1, pts: 140 }],
  },
  {
    id: "mawloc",
    name: "Mawloc",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "10\"", T: "10", Sv: "3+", W: "14", Ld: "8+", OC: "4" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Distensible jaw", tags: "anti-infantry 4+, devastating wounds, extra attacks", a: "1", skill: "3+", s: "5", ap: "0", d: "3" },
      { name: "Mawloc scything talons", tags: "", a: "16", skill: "3+", s: "8", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Terror From The Deep", text: "When this model arrives via Deep Strike, roll a D6 per nearby enemy within 12\" — 2-4 deals D3 mortal wounds, 5+ deals 3 mortal wounds and forces a Battle-shock test." }
    ],
    keywords: ["GREAT DEVOURER", "VANGUARD INVADER", "BURROWER", "MAWLOC", "MONSTER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Mawloc.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "exocrine",
    name: "Exocrine",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "8\"", T: "10", Sv: "3+", W: "14", Ld: "8+", OC: "4" },
    rangedWeapons: [
      { name: "Bio-plasmic cannon", tags: "blast, heavy", range: "36\"", a: "D6+3", skill: "3+", s: "9", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Powerful limbs", tags: "", a: "3", skill: "3+", s: "7", ap: "0", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Symbiotic Targeting", text: "After this model shoots, pick an enemy it hit — friendly Tyranids attacks against it re-roll a Hit roll of 1 for the rest of the phase." }
    ],
    keywords: ["MONSTER", "GREAT DEVOURER", "EXOCRINE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Exocrine.",
    points: [{ models: 1, pts: 135 }],
  },
  {
    id: "tyrannofex",
    name: "Tyrannofex",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "9\"", T: "12", Sv: "2+", W: "16", Ld: "8+", OC: "5" },
    rangedWeapons: [
      { name: "Acid spray", tags: "torrent", range: "18\"", a: "D6+6", skill: "N/A", s: "6", ap: "-2", d: "2" },
      { name: "Fleshborer hive", tags: "heavy, sustained hits 1, twin-linked", range: "24\"", a: "20", skill: "3+", s: "5", ap: "0", d: "1" },
      { name: "Rupture cannon", tags: "heavy", range: "48\"", a: "2", skill: "3+", s: "18", ap: "-4", d: "D6+6" },
      { name: "Stinger salvoes", tags: "", range: "24\"", a: "8", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Powerful limbs", tags: "", a: "4", skill: "3+", s: "8", ap: "0", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Resilient Organism", text: "Once per battle, reduce an attack's Damage against this model to 0." }
    ],
    keywords: ["MONSTER", "FRAME", "TYRANNOFEX", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Tyrannofex.",
    points: [{ models: 1, pts: 170 }],
  },
  {
    id: "toxicrene",
    name: "Toxicrene",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "8\"", T: "11", Sv: "3+", W: "14", Ld: "8+", OC: "4" },
    rangedWeapons: [
      { name: "Massive toxic lashes", tags: "anti-infantry 2+", range: "9\"", a: "2D6", skill: "3+", s: "6", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Massive toxic lashes", tags: "anti-infantry 2+", a: "12", skill: "3+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Grasping Tendrils", text: "When a non-Titanic enemy within Engagement Range tries to Fall Back, roll a D6 — on a 3+, it must Remain Stationary instead." },
      { name: "Hypertoxic Miasma (Aura)", text: "At the end of your Movement phase, roll a D6 per nearby enemy within 6\" — 2-3 deals 1 mortal wound, 4-5 deals D3, 6 deals D6." }
    ],
    keywords: ["TOXICRENE", "MONSTER", "GREAT DEVOURER", "FRAME"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Toxicrene.",
    points: [{ models: 1, pts: 120 }],
  },
  {
    id: "sporocyst",
    name: "Sporocyst",
    faction: "Tyranids",
    base: "100mm",
    stats: { M: "-", T: "10", Sv: "3+", W: "10", Ld: "8+", OC: "0" },
    rangedWeapons: [
      { name: "Sporocyst bio-weapons", tags: "", range: "24\"", a: "10", skill: "4+", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Flensing whips", tags: "", a: "6", skill: "4+", s: "7", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Seed Mucolids", text: "Once per turn, instead of shooting, this unit can spawn a new 1-model Mucolid Spores unit within 18\" and more than 8\" from all enemies." },
      { name: "Hive Defences", text: "This model can use Fire Overwatch for 0CP, even after another unit already used it this turn — but only once per turn for this model." }
    ],
    keywords: ["MONSTER", "SPOROCYST", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Sporocyst.",
    points: [{ models: 1, pts: 145 }],
  },
  {
    id: "malanthrope",
    name: "Malanthrope",
    faction: "Tyranids",
    base: "60mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "10", Ld: "7+", OC: "3" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Grasping tail", tags: "", a: "4", skill: "4+", s: "5", ap: "0", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Enhanced Toxic Miasma", text: "While this model is leading a unit, that unit's Foul Spores Aura range increases to 9\"." },
      { name: "Prey Adaptation", text: "When this unit fights, pick Sustained Hits 1, Lance, or Lethal Hits for its melee weapons until the end of the phase." }
    ],
    keywords: ["MALANTHROPE", "SYNAPSE", "GREAT DEVOURER", "FLY", "CHARACTER", "INFANTRY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Malanthrope.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "dimachaeron",
    name: "Dimachaeron",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "12\"", T: "10", Sv: "3+", W: "16", Ld: "7+", OC: "5", InvSv: "5+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Massive scything sickle-talons", tags: "twin-linked", a: "10", skill: "3+", s: "9", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Digestion Spine", text: "If this model destroys an enemy (non-Vehicle) in melee, it heals up to D3 wounds." }
    ],
    keywords: ["DIMACHAERON", "GREAT DEVOURER", "FRAME", "MONSTER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Dimachaeron.",
    points: [{ models: 1, pts: 200 }],
  },
  {
    id: "barbed-hierodule",
    name: "Barbed Hierodule",
    faction: "Tyranids",
    base: "127mm",
    stats: { M: "8\"", T: "12", Sv: "2+", W: "18", Ld: "8+", OC: "5" },
    rangedWeapons: [
      { name: "Bio-cannon", tags: "blast", range: "48\"", a: "D6+3", skill: "3+", s: "9", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Hierodule scything talons", tags: "", a: "8", skill: "3+", s: "14", ap: "-2", d: "D3+3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Overgrown Barbs", text: "After this model shoots, a non-Titanic enemy it hit is suppressed until your next turn, taking -1 to hit while this model remains on the battlefield." }
    ],
    keywords: ["MONSTER", "FRAME", "GREAT DEVOURER", "BARBED HIERODULE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Barbed Hierodule.",
    points: [{ models: 1, pts: 340 }],
  },
  {
    id: "harridan",
    name: "Harridan",
    faction: "Tyranids",
    base: "120 x 92mm flying base",
    stats: { M: "14\"", T: "10", Sv: "3+", W: "30", Ld: "8+", OC: "0" },
    rangedWeapons: [
      { name: "Dire bio-cannon", tags: "blast", range: "48\"", a: "D6+6", skill: "3+", s: "10", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Gargantuan scything talons", tags: "", a: "6", skill: "3+", s: "14", ap: "-2", d: "D6" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Hover", text: "This unit doesn't subtract 2\" from its move distance when Falling Back or otherwise taking to the skies." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Frenzied Metabolism", text: "When this model shoots, its attacks get +1 to wound for the phase, but afterward it risks D3 mortal wounds to itself (on a 2+)." }
    ],
    keywords: ["MONSTER", "TITANIC", "TRANSPORT", "HARRIDAN", "GREAT DEVOURER", "FLY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Harridan.",
    points: [{ models: 1, pts: 610 }],
  },
  {
    id: "hierophant",
    name: "Hierophant",
    faction: "Tyranids",
    base: "Use model",
    stats: { M: "12\"", T: "14", Sv: "2+", W: "30", Ld: "8+", OC: "12", InvSv: "5+" },
    rangedWeapons: [
      { name: "Bio-plasma torrent", tags: "assault, torrent", range: "12\"", a: "3D6", skill: "N/A", s: "7", ap: "-2", d: "1" },
      { name: "Dire bio-cannon", tags: "blast", range: "48\"", a: "D6+6", skill: "3+", s: "10", ap: "-3", d: "3" }
    ],
    meleeWeapons: [
      { name: "Lashwhip pods", tags: "extra attacks", a: "10", skill: "3+", s: "5", ap: "-1", d: "1" },
      { name: "Titanic scything talons", tags: "", a: "8", skill: "3+", s: "20", ap: "-2", d: "D6+1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Apex-beast", text: "When this model attacks a Battle-shocked unit, add 1 to the Hit roll." },
      { name: "Stalking Forward", text: "This model can move through other models and terrain 4\" or less in height (excluding Titanic) as if they weren't there." }
    ],
    keywords: ["HIEROPHANT", "GREAT DEVOURER", "TRANSPORT", "TOWERING", "TITANIC", "MONSTER", "FRAME"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Hierophant.",
    points: [{ models: 1, pts: 810 }],
  },
  {
    id: "scythed-hierodule",
    name: "Scythed Hierodule",
    faction: "Tyranids",
    base: "127mm",
    stats: { M: "12\"", T: "12", Sv: "2+", W: "18", Ld: "8+", OC: "5" },
    rangedWeapons: [
      { name: "Bio-acid spray", tags: "torrent", range: "18\"", a: "3D6", skill: "N/A", s: "6", ap: "-2", d: "1" }
    ],
    meleeWeapons: [
      { name: "Hierodule scything talons", tags: "", a: "10", skill: "3+", s: "14", ap: "-2", d: "D3+3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Irresistible Force", text: "This model can charge even after Falling Back." }
    ],
    keywords: ["GREAT DEVOURER", "MONSTER", "FRAME", "SCYTHED HIERODULE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Scythed Hierodule.",
    points: [{ models: 1, pts: 330 }],
  },
  {
    id: "winged-hive-tyrant",
    name: "Winged Hive Tyrant",
    faction: "Tyranids",
    base: "60mm",
    stats: { M: "12\"", T: "9", Sv: "2+", W: "10", Ld: "7+", OC: "3", InvSv: "4+" },
    rangedWeapons: [
      { name: "Heavy venom cannon", tags: "blast", range: "36\"", a: "D3", skill: "2+", s: "9", ap: "-2", d: "3" },
      { name: "Stranglethorn cannon", tags: "blast", range: "36\"", a: "D6+1", skill: "2+", s: "7", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Monstrous bonesword and lash whip", tags: "twin-linked", a: "6", skill: "2+", s: "9", ap: "-2", d: "3" },
      { name: "Monstrous scything talons", tags: "extra attacks", a: "4", skill: "2+", s: "7", ap: "-2", d: "2" },
      { name: "Tyrant talons", tags: "", a: "5", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Will of the Hive Mind", text: "Once per battle round, when a friendly Tyranids unit within 12\" is targeted by a Stratagem, reduce its CP cost by 1." },
      { name: "Paroxysm (Psychic)", text: "At the start of the Fight phase, target a visible enemy within 12\" and roll a D6 — on a 1 this Psyker takes D3 mortal wounds, otherwise that enemy's Attacks drop by 1 for the phase." }
    ],
    keywords: ["FLY", "PSYKER", "CHARACTER", "GREAT DEVOURER", "WINGED HIVE TYRANT", "HIVE TYRANT", "VANGUARD INVADER", "SYNAPSE", "MONSTER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Winged Hive Tyrant.",
    points: [{ models: 1, pts: 185 }],
  },
  {
    id: "parasite-of-mortrex",
    name: "Parasite Of Mortrex",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "12\"", T: "5", Sv: "4+", W: "5", Ld: "8+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Barbed ovipositor", tags: "anti-infantry 3+, extra attacks", a: "1", skill: "2+", s: "3", ap: "-2", d: "3" },
      { name: "Clawed limbs", tags: "", a: "6", skill: "2+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Parasitic Infection", text: "If this model's barbed ovipositor destroys an Infantry model, spawn a new D3-model Ripper Swarms unit nearby, even within Engagement Range of the kill." },
      { name: "It Itches!", text: "At the start of the Fight phase, an engaged enemy must take a Battle-shock test." }
    ],
    keywords: ["GREAT DEVOURER", "PARASITE OF MORTREX", "VANGUARD INVADER", "SYNAPSE", "FLY", "CHARACTER", "INFANTRY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Parasite of Mortrex.",
    points: [{ models: 1, pts: 70 }],
  },
  {
    id: "barbgaunts",
    name: "Barbgaunts",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "6\"", T: "4", Sv: "4+", W: "2", Ld: "8+", OC: "1" },
    rangedWeapons: [
      { name: "Barblauncher", tags: "blast, heavy", range: "24\"", a: "D6", skill: "4+", s: "5", ap: "0", d: "1" }
    ],
    meleeWeapons: [
      { name: "Chitinous claws and teeth", tags: "", a: "1", skill: "4+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Disruption Bombardment", text: "After this unit shoots, an Infantry unit it hit is disrupted until your opponent's next turn, cutting its Move by 2 and Advance/Charge rolls by 2." }
    ],
    keywords: ["INFANTRY", "GREAT DEVOURER", "BARBGAUNTS"],
    factionKeywords: ["TYRANIDS"],
    composition: "5-10 Barbgaunts.",
    points: [{ models: 5, pts: 55 }, { models: 10, pts: 110 }],
  },
  {
    id: "neurogaunts",
    name: "Neurogaunts",
    faction: "Tyranids",
    base: "25mm",
    stats: { M: "6\"", T: "3", Sv: "6+", W: "1", Ld: "8+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Chitinous claws and teeth", tags: "", a: "1", skill: "4+", s: "3", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Neurocytes", text: "While within Synapse Range of a friendly Tyranids unit (excluding Neurogaunts), this unit gains the Synapse keyword." }
    ],
    keywords: ["ENDLESS MULTITUDE", "NEUROGAUNTS", "INFANTRY", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1-2 Neurogaunt Nodebeasts*; 10-20 Neurogaunts.",
    points: [{ models: 11, pts: 45 }, { models: 22, pts: 90 }],
  },
  {
    id: "neurotyrant",
    name: "Neurotyrant",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "6\"", T: "8", Sv: "4+", W: "9", Ld: "7+", OC: "3", InvSv: "4+" },
    rangedWeapons: [
      { name: "Psychic scream", tags: "ignores cover, psychic, torrent", range: "18\"", a: "2D6", skill: "N/A", s: "5", ap: "-1", d: "2" }
    ],
    meleeWeapons: [
      { name: "Neurotyrant claws and lashes", tags: "", a: "6", skill: "3+", s: "5", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Node Lash (Psychic)", text: "While this model is leading a unit, that unit's attacks get +1 to hit, and +1 to wound too against Battle-shocked targets." },
      { name: "Psychic Terror (Psychic)", text: "If this model is on the battlefield when Shadow in the Warp is unleashed, the resulting Battle-shock tests get an extra -1." },
      { name: "Neuroloids", text: "In your Command phase, pick up to two nearby Tyranids units within 18\" — they count as within Synapse Range until your next Command phase." }
    ],
    keywords: ["MONSTER", "CHARACTER", "FLY", "PSYKER", "NEUROTYRANT", "GREAT DEVOURER", "SYNAPSE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Neurotyrant.",
    points: [{ models: 1, pts: 130 }],
  },
  {
    id: "psychophage",
    name: "Psychophage",
    faction: "Tyranids",
    base: "120 x 92mm",
    stats: { M: "12\"", T: "9", Sv: "3+", W: "10", Ld: "8+", OC: "3" },
    rangedWeapons: [
      { name: "Psychoclastic torrent", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Talons and betentacled maw", tags: "anti-psyker 4+, devastating wounds", a: "6", skill: "3+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Feel No Pain", text: "Feel No Pain X+ means each time a model with this ability would lose a wound, roll a D6 — on an X+, that wound isn't lost." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Bio-stimulus", text: "After this model shoots, pick an enemy it hit — friendly Tyranids melee attacks against it get +1 Armour Penetration for the turn (once per target)." },
      { name: "Feeding Frenzy", text: "When this model attacks a below-strength enemy, add 1 to the Hit roll, and 1 to the Wound roll too if Below Half-strength." }
    ],
    keywords: ["PSYCHOPHAGE", "GREAT DEVOURER", "MONSTER", "SMOKE", "HARVESTER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Psychophage.",
    points: [{ models: 1, pts: 110 }],
  },
  {
    id: "screamer-killer",
    name: "Screamer-killer",
    faction: "Tyranids",
    base: "90mm",
    stats: { M: "8\"", T: "9", Sv: "2+", W: "10", Ld: "8+", OC: "3" },
    rangedWeapons: [
      { name: "Bio-plasmic scream", tags: "assault, blast", range: "18\"", a: "D6+3", skill: "4+", s: "8", ap: "-2", d: "1" }
    ],
    meleeWeapons: [
      { name: "Screamer-killer talons", tags: "", a: "10", skill: "3+", s: "10", ap: "-2", d: "3" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Death Scream", text: "After this model shoots, an enemy it hit must take a Battle-shock test at -1." }
    ],
    keywords: ["SCREAMER-KILLER", "GREAT DEVOURER", "MONSTER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Screamer-Killer.",
    points: [{ models: 1, pts: 125 }],
  },
  {
    id: "tyranid-warriors-with-melee-bio-weapons",
    name: "Tyranid Warriors With Melee Bio-weapons",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "3", Ld: "7+", OC: "2" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Tyranid Warrior claws and talons", tags: "twin-linked", a: "6", skill: "3+", s: "5", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Adaptive Instincts (Once per turn, per unit)", text: "When this unit fights or is targeted, pick +1 Strength on its melee attacks, or +1 Toughness." }
    ],
    keywords: ["GREAT DEVOURER", "INFANTRY", "TYRANID WARRIORS WITH MELEE BIO-WEAPONS", "SYNAPSE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Tyranid Prime; 2-5 Tyranid Warriors.",
    points: [{ models: 3, pts: 75 }, { models: 6, pts: 150 }],
  },
  {
    id: "tyranid-warriors-with-ranged-bio-weapons",
    name: "Tyranid Warriors With Ranged Bio-weapons",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "6\"", T: "5", Sv: "4+", W: "3", Ld: "7+", OC: "2" },
    rangedWeapons: [
      { name: "Barbed strangler", tags: "blast", range: "36\"", a: "D6+1", skill: "4+", s: "6", ap: "-1", d: "1" },
      { name: "Deathspitter", tags: "", range: "24\"", a: "3", skill: "4+", s: "5", ap: "-1", d: "1" },
      { name: "Devourer", tags: "", range: "18\"", a: "5", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Spinefists", tags: "assault, pistol, twin-linked", range: "12\"", a: "2", skill: "4+", s: "4", ap: "0", d: "1" },
      { name: "Venom cannon", tags: "blast", range: "36\"", a: "D3", skill: "4+", s: "9", ap: "-2", d: "2" }
    ],
    meleeWeapons: [
      { name: "Tyranid Warrior claws and talons", tags: "", a: "5", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Adaptable Predators", text: "This unit can shoot and charge even after Falling Back." }
    ],
    keywords: ["INFANTRY", "GREAT DEVOURER", "SYNAPSE", "TYRANID WARRIORS WITH RANGED BIO-WEAPONS"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Tyranid Prime; 2-5 Tyranid Warriors.",
    points: [{ models: 3, pts: 60 }, { models: 6, pts: 120 }],
  },
  {
    id: "von-ryans-leapers",
    name: "Von Ryan’s Leapers",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "10\"", T: "5", Sv: "4+", W: "3", Ld: "8+", OC: "1", InvSv: "6+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Leaper’s talons", tags: "", a: "6", skill: "3+", s: "5", ap: "-1", d: "1" }
    ],
    abilities: [
      { name: "Fights First", text: "A unit where every model has Fights First fights before non-Fights-First units in the Fight phase." },
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Pouncing Leap", text: "This unit can be targeted by Heroic Intervention even if already used elsewhere this phase, for 1 extra CP, without blocking other uses." }
    ],
    keywords: ["VON RYAN’S LEAPERS", "INFANTRY", "VANGUARD INVADER", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "3-6 Von Ryan’s Leapers.",
    points: [{ models: 3, pts: 55 }, { models: 6, pts: 105 }],
  },
  {
    id: "winged-tyranid-prime",
    name: "Winged Tyranid Prime",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "12\"", T: "5", Sv: "4+", W: "6", Ld: "7+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Prime talons", tags: "", a: "6", skill: "2+", s: "6", ap: "-1", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Alpha Warrior", text: "While this model is leading a unit, that unit's weapons gain Sustained Hits 1." },
      { name: "Death Blow", text: "If this model is destroyed in melee before fighting, on a 4+ it fights anyway before being removed." }
    ],
    keywords: ["INFANTRY", "CHARACTER", "FLY", "GREAT DEVOURER", "SYNAPSE", "VANGUARD INVADER", "WINGED TYRANID PRIME"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Winged Tyranid Prime.",
    points: [{ models: 1, pts: 65 }],
  },
  {
    id: "norn-emissary",
    name: "Norn Emissary",
    faction: "Tyranids",
    base: "100mm",
    stats: { M: "10\"", T: "11", Sv: "2+", W: "16", Ld: "7+", OC: "5", InvSv: "4+" },
    rangedWeapons: [
      { name: "Psychic Tendril – neuroparasite", tags: "precision, psychic", range: "18\"", a: "2", skill: "2+", s: "8", ap: "-2", d: "D3" },
      { name: "Psychic Tendril – neuroblast", tags: "blast, psychic", range: "18\"", a: "2D6", skill: "2+", s: "6", ap: "-2", d: "1" },
      { name: "Psychic Tendril – neurolance", tags: "melta 2, psychic", range: "18\"", a: "2", skill: "2+", s: "12", ap: "-3", d: "D6" }
    ],
    meleeWeapons: [
      { name: "Monstrous scything talons", tags: "", a: "6", skill: "2+", s: "9", ap: "-2", d: "3" },
      { name: "Monstrous rending claws", tags: "extra attacks", a: "4", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Singular Purpose", text: "At the start of the battle, pick either a rival enemy unit (re-roll Hit and Wound rolls against it for the battle) or an objective (bonus while defending it)." },
      { name: "Unnatural Resilience", text: "This model has Feel No Pain 4+ against mortal wounds." }
    ],
    keywords: ["MONSTER", "PSYKER", "SYNAPSE", "NORN EMISSARY", "GREAT DEVOURER"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Norn Emissary.",
    points: [{ models: 1, pts: 250 }],
  },
  {
    id: "norn-assimilator",
    name: "Norn Assimilator",
    faction: "Tyranids",
    base: "100mm",
    stats: { M: "10\"", T: "11", Sv: "2+", W: "16", Ld: "7+", OC: "5" },
    rangedWeapons: [
      { name: "Toxinjector Harpoon", tags: "harpooned", range: "12\"", a: "2", skill: "2+", s: "12", ap: "-3", d: "D6+1" }
    ],
    meleeWeapons: [
      { name: "Monstrous scything talons", tags: "", a: "6", skill: "2+", s: "9", ap: "-2", d: "3" },
      { name: "Toxinjector harpoon", tags: "extra attacks", a: "4", skill: "2+", s: "12", ap: "-3", d: "D6+1" }
    ],
    abilities: [
      { name: "Deadly Demise", text: "Deadly Demise X: when a model with this ability is destroyed, roll a D6 — on a 6, every unit within 6\" suffers X mortal wounds." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Singular Purpose", text: "At the start of the battle, pick either a rival enemy unit (re-roll Hit and Wound rolls against it for the battle) or an objective (bonus while defending it)." },
      { name: "Harpoon Barbs", text: "Once per turn, when an engaged enemy tries to Fall Back, roll a D6 — on a 2+, it suffers D6 mortal wounds." },
      { name: "Harpooned", text: "When charging a Monster/Vehicle this weapon hit this turn, this unit gets +2 to the Charge roll and must end engaged with it." }
    ],
    keywords: ["HARVESTER", "NORN ASSIMILATOR", "MONSTER", "GREAT DEVOURER", "SYNAPSE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Norn Assimilator.",
    points: [{ models: 1, pts: 250 }],
  },
  {
    id: "neurolictor",
    name: "Neurolictor",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "8\"", T: "5", Sv: "4+", W: "7", Ld: "7+", OC: "1", InvSv: "4+" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Piercing claws and talons", tags: "precision", a: "6", skill: "2+", s: "6", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Infiltrators", text: "During deployment, a unit where every model has this ability can be set up anywhere more than 8\" from the enemy deployment zone and all enemy units." },
      { name: "Lone Operative", text: "Unless part of an Attached unit, this model can only be targeted by ranged attacks from within the stated distance (12\" by default)." },
      { name: "Stealth", text: "If every model in this unit has Stealth, the unit gets the Benefit of Cover against ranged attacks even without terrain." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Feeder Tendrils", text: "Each time this model destroys an enemy Character, gain 1 Command Point." },
      { name: "Neural Disruption", text: "In your Command phase, force an enemy within 12\" to take a Battle-shock test." },
      { name: "Psychological Saboteur (Aura)", text: "Battle-shocked enemies within 12\" take -1 to hit with their own attacks, while friendly Tyranids attacks against them get +1 to wound." }
    ],
    keywords: ["GREAT DEVOURER", "VANGUARD INVADER", "SYNAPSE", "NEUROLICTOR", "INFANTRY"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Neurolictor.",
    points: [{ models: 1, pts: 80 }],
  },
  {
    id: "hyperadapted-raveners",
    name: "Hyperadapted Raveners",
    faction: "Tyranids",
    base: "40mm",
    stats: { M: "10\"", T: "5", Sv: "4+", W: "6", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Venom bolt", tags: "assault, ignores cover, torrent", range: "12\"", a: "D6+3", skill: "N/A", s: "6", ap: "-1", d: "1" }
    ],
    meleeWeapons: [
      { name: "Prime claws and talons", tags: "anti-monster 5+, anti-vehicle 5+, twin-linked", a: "6", skill: "3+", s: "5", ap: "-2", d: "2" },
      { name: "Ravener heavy claws and talons", tags: "anti-monster 5+, anti-vehicle 5+, twin-linked", a: "3", skill: "3+", s: "5", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Alpha Invader", text: "This unit's weapons gain Sustained Hits 1." },
      { name: "Hypersensory Array", text: "Once per battle round, this unit can be targeted by Rapid Ingress or Heroic Intervention even if already used elsewhere this phase, for 1 extra CP, without blocking other uses." }
    ],
    keywords: ["CHARACTER", "HYPERADAPTED RAVENERS", "BURROWERS", "VANGUARD INVADER", "GREAT DEVOURER", "INFANTRY", "SYNAPSE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Ravener Prime; 4 Raveners.",
    points: [{ models: 5, pts: 165 }],
  },
  {
    id: "tyranid-prime-with-lash-whip",
    name: "Tyranid Prime with Lash Whip",
    faction: "Tyranids",
    base: "50mm",
    stats: { M: "10\"", T: "5", Sv: "3+", W: "6", Ld: "7+", OC: "1" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Rending claw", tags: "", a: "4", skill: "2+", s: "8", ap: "-2", d: "3" },
      { name: "Lash whip", tags: "extra attacks", a: "8", skill: "2+", s: "4", ap: "-2", d: "1" },
      { name: "Scything talons", tags: "", a: "6", skill: "2+", s: "6", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Leader", text: "This model can attach to a matching Bodyguard unit chosen before the battle, forming a single Attached unit with it for the game." },
      { name: "Shadow in the Warp", text: "Once per battle, in either Command phase, if a unit with this ability is on the battlefield, every enemy unit must take a Battle-shock test — with an extra -1 penalty if they are within 6\\\" of a friendly Synapse unit." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Alpha Warrior", text: "While this model is leading a unit, that unit's weapons gain Sustained Hits 1." },
      { name: "Aggressive Leader-beast", text: "If this unit loses a model to enemy shooting, it can make a surge move of up to D6\"." }
    ],
    keywords: ["INFANTRY", "TYRANID PRIME WITH LASH WHIP", "GREAT DEVOURER", "CHARACTER", "SYNAPSE"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 Tyranid Prime with Lash Whip.",
    points: [{ models: 1, pts: 75 }],
  },
  {
    id: "the-red-terror",
    name: "The Red Terror",
    faction: "Tyranids",
    base: "100mm",
    stats: { M: "10\"", T: "8", Sv: "3+", W: "9", Ld: "8+", OC: "3" },
    rangedWeapons: [
      
    ],
    meleeWeapons: [
      { name: "Gaping maw", tags: "extra attacks, devastating wounds, precision", a: "1", skill: "2+", s: "5", ap: "-", d: "D3+2" },
      { name: "Scything talons", tags: "", a: "12", skill: "2+", s: "7", ap: "-2", d: "2" }
    ],
    abilities: [
      { name: "Deep Strike", text: "When this unit makes an Ingress Move, if every model has Deep Strike, it can be set up anywhere more than 8\" from all enemy units — even inside the opponent's deployment zone." },
      { name: "Synapse", text: "Friendly Tyranids units within 6\\\" of a Synapse model are within Synapse Range — while in range, they take Battle-shock tests on 3D6 instead of 2D6, and their melee attacks get +1 Strength." },
      { name: "Swallow Whole", text: "This model's gaping maw scores Critical Wounds on any successful unmodified roll against Infantry/Mounted/Beasts, healing up to D3+2 wounds whenever it destroys one." },
      { name: "Subterranean Hunter", text: "At the end of the Fight phase, if unengaged, this unit can return to Strategic Reserves." }
    ],
    keywords: ["CHARACTER", "EPIC HERO", "GREAT DEVOURER", "MONSTER", "MOBILE", "BURROWER", "VANGUARD INVADER", "THE RED TERROR"],
    factionKeywords: ["TYRANIDS"],
    composition: "1 The Red Terror – <span class=\"kwb\">EPIC</span> <span class=\"kwb\">HERO</span>.",
    points: [{ models: 1, pts: 130 }],
  },
];
