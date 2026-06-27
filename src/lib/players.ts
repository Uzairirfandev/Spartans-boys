// Central player roster.
//
// BASE_PLAYERS = the original hardcoded squad (stats all start at 0). Newly
// added players come from Supabase / localStorage (see playerStore.ts) and are
// merged with these. Home slider, Squad page, and the player detail page all
// read players from here so everything stays consistent.

export const SPARTAN_IMG =
  "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp";

// Every player starts with zero cricket stats — real numbers come only from
// recorded matches (matchStore.ts).
export const ZERO_STATS = {
  country: "",
  age: 0,
  matches: 0,
  runs: 0,
  wickets: 0,
  highestScore: 0,
  average: 0,
  strikeRate: 0,
  centuries: 0,
  halfCenturies: 0,
  catches: 0,
  bestBowling: "0/0",
  economy: 0,
};

// The identity fields a player needs (no stats).
export type PlayerIdentity = {
  id: number;
  name: string;
  role: string;
  number: string;
  image: string;
};

// A full player = identity + zeroed base stats.
export type Player = PlayerIdentity & typeof ZERO_STATS;

// Roles offered in the Add Player form.
export const ROLES = ["Batsman", "Bowler", "Allrounder", "Bat/Spin"];

// Original squad (ids 1–12). Added players get ids 100+ so they never clash.
const ROSTER: PlayerIdentity[] = [
  { id: 1, name: "Barry", role: "Batsman", number: "96", image: "/images/barry.jpeg" },
  { id: 2, name: "Batsman", role: "Batsman", number: "10", image: SPARTAN_IMG },
  { id: 3, name: "Berry", role: "Bat/Spin", number: "11", image: SPARTAN_IMG },
  { id: 4, name: "Hammad", role: "Batsman", number: "9", image: SPARTAN_IMG },
  { id: 5, name: "Uzair", role: "Allrounder", number: "17", image: SPARTAN_IMG },
  { id: 6, name: "Husanain", role: "Batsman", number: "4", image: SPARTAN_IMG },
  { id: 7, name: "Nouman", role: "Batsman", number: "9", image: SPARTAN_IMG },
  { id: 8, name: "Saeed", role: "Bowler", number: "5", image: SPARTAN_IMG },
  { id: 9, name: "Saif", role: "Allrounder", number: "11", image: SPARTAN_IMG },
  { id: 10, name: "Umar", role: "Bowler", number: "8", image: SPARTAN_IMG },
  { id: 11, name: "Ahmed", role: "Allrounder", number: "6", image: SPARTAN_IMG },
  { id: 12, name: "Player 12", role: "Batsman", number: "12", image: SPARTAN_IMG },
];

// Attach zeroed stats to an identity to make a full Player.
export function toPlayer(identity: PlayerIdentity): Player {
  return { ...identity, ...ZERO_STATS };
}

export const BASE_PLAYERS: Player[] = ROSTER.map(toPlayer);
