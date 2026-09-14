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
// SCOPE NOTE: 13 of Space Marines' 292 units so far, and Space Marines is
// only one of ~25 factions in the game. Still a seed dataset, not a
// comprehensive library — but the pipeline now exists to grow it much
// faster than before.

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
    points: [{ models: 1, pts: 160 }],
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
    points: [{ models: 3, pts: 100 }, { models: 6, pts: 190 }],
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
    points: [{ models: 1, pts: 150 }],
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
    points: [{ models: 1, pts: 115 }],
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
    points: [{ models: 3, pts: 140 }, { models: 6, pts: 265 }],
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
    points: [{ models: 1, pts: 160 }],
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
    points: [{ models: 1, pts: 140 }],
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
    points: [{ models: 5, pts: 75 }, { models: 10, pts: 130 }],
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
    points: [{ models: 1, pts: 300 }],
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
    points: [{ models: 3, pts: 175 }, { models: 6, pts: 365 }, { models: 1, pts: 5 }],
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
    points: [{ models: 1, pts: 145 }],
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
    points: [{ models: 1, pts: 170 }],
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
    points: [{ models: 1, pts: 160 }],
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
    points: [{ models: 5, pts: 210 }],
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
    points: [{ models: 1, pts: 575 }],
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
    points: [{ models: 1, pts: 170 }],
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
    points: [{ models: 3, pts: 70 }, { models: 6, pts: 140 }, { models: 1, pts: 60 }],
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
    points: [{ models: 1, pts: 210 }, { models: 1, pts: 10 }],
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
    points: [{ models: 1, pts: 275 }, { models: 1, pts: 10 }],
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
    points: [{ models: 5, pts: 95 }, { models: 10, pts: 170 }],
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
    id: "burna-boyz",
    name: "Burna Boyz",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "1", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Big shoota", tags: "rapid fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Burna", tags: "ignores cover, torrent", range: "12\"", a: "D6", skill: "N/A", s: "4", ap: "0", d: "1" },
      { name: "Kustom mega-blasta", tags: "hazardous", range: "24\"", a: "3", skill: "5+", s: "9", ap: "-2", d: "D6" },
      { name: "Rokkit launcha", tags: "blast", range: "24\"", a: "D3", skill: "5+", s: "9", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "3", skill: "3+", s: "4", ap: "0", d: "1" },
      { name: "Cuttin’ flames", tags: "", a: "2", skill: "4+", s: "4", ap: "-2", d: "1" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Pyromaniaks", text: "When a model in this unit attacks with a burna against a target within 6\", re-roll a Wound roll of 1 — or re-roll any Wound roll if that target is also within range of an objective marker." }
    ],
    keywords: ["BURNA BOYZ", "INFANTRY"],
    factionKeywords: ["ORKS"],
    composition: "1-2 Spanners; 4-8 Burna Boyz.",
    points: [{ models: 5, pts: 60 }, { models: 10, pts: 120 }],
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
    points: [{ models: 1, pts: 70 }],
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
    points: [{ models: 1, pts: 65 }, { models: 2, pts: 120 }, { models: 3, pts: 175 }],
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
    points: [{ models: 1, pts: 160 }],
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
    points: [{ models: 1, pts: 140 }],
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
    points: [{ models: 3, pts: 150 }, { models: 6, pts: 280 }],
  },
  {
    id: "lootas",
    name: "Lootas",
    faction: "Orks",
    base: "32mm",
    stats: { M: "6\"", T: "5", Sv: "5+", W: "1", Ld: "7+", OC: "1" },
    rangedWeapons: [
      { name: "Big shoota", tags: "rapid fire 2", range: "36\"", a: "3", skill: "5+", s: "5", ap: "0", d: "1" },
      { name: "Deffgun", tags: "heavy, rapid fire 1", range: "48\"", a: "2", skill: "6+", s: "8", ap: "-1", d: "2" },
      { name: "Kustom mega-blasta", tags: "hazardous", range: "24\"", a: "3", skill: "5+", s: "9", ap: "-2", d: "D6" },
      { name: "Rokkit launcha", tags: "blast", range: "24\"", a: "D3", skill: "5+", s: "9", ap: "-2", d: "3" }
    ],
    meleeWeapons: [
      { name: "Close combat weapon", tags: "", a: "2", skill: "3+", s: "4", ap: "0", d: "1" }
    ],
    abilities: [
      { name: "Waaagh!", text: "Friendly Orks units with this ability can re-roll Advance rolls and become Riled Up — gaining a 5+ invulnerable save, the Assault ability on ranged weapons, and the ability to still charge after Advancing. Once per battle, War Cry lets you trigger this at the start of the Command phase." },
      { name: "Dat’s Our Loot!", text: "When a model in this unit makes a ranged attack, re-roll a Hit roll of 1 — or re-roll any Hit roll if the target is within range of an objective marker." }
    ],
    keywords: ["LOOTAS", "INFANTRY"],
    factionKeywords: ["ORKS"],
    composition: "1-2 Spanners; 4-8 Lootas.",
    points: [{ models: 5, pts: 60 }, { models: 10, pts: 110 }],
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
    points: [{ models: 5, pts: 135 }, { models: 10, pts: 240 }],
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
    points: [{ models: 10, pts: 95 }, { models: 20, pts: 180 }],
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
    points: [{ models: 1, pts: 160 }, { models: 1, pts: 10 }],
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
];
