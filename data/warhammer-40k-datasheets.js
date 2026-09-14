// RuleRunner40k unit datasheets — separate from rules content (data/warhammer-40k.js)
// since datasheets are a genuinely different kind of content: stat blocks and
// weapon profiles, not procedural rules. Same accuracy standard as the rest
// of this project — sourced from the actual 11th edition datasheet directly
// (wahapedia.ru/wh40k11ed), not a summary of it, and not carried over from an
// older edition without checking it's still current.
//
// SCOPE NOTE: this is a seed dataset (currently Intercessor Squad and Tactical
// Squad — 2 of Space Marines' 60-90+ units, and Space Marines is only one of
// many factions), not a comprehensive datasheet library. Add more units the
// same way: find the exact current edition's datasheet from an authoritative
// source, verify every number, and note explicitly if anything changed from
// a previous edition/printing.

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
];
