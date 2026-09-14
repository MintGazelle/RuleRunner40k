// RuleRunner40k games list — the single place that knows which games exist.
// This site is scoped to Games Workshop games only (kept structurally
// separate from RuleRunner's other games for exactly that reason — see
// RULES-PROCESS.md for the full rationale).
//
// To add a new game: create its data/<id>.js file (see RULES-PROCESS.md),
// then add one entry below pointing to it. index.html loads whatever's in
// this list automatically — it never needs to be edited to add a game.
//
// Each entry:
//   id          — must match the key that game's data file sets on GAMES
//   description — short one-line blurb shown on the landing page's game card
//   file        — path to that game's data file, relative to index.html
//
// The display name, example prompt, and rules-reference link live inside
// the game's own data file (as GAMES["id"].name / .example / .infoUrl) —
// not here.

const GAME_LIST = [
  { id: "warhammer-40k", description: "Tabletop miniatures combat across the grimdark 41st millennium.", file: "data/warhammer-40k.js" },
];

// The first game in the list above is used as the app's default selection.
const DEFAULT_GAME = GAME_LIST[0].id;
