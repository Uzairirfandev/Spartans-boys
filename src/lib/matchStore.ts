// Match-performance data layer.
//
// One simple API used by the UI. Under the hood it uses Supabase (shared,
// online — everyone sees the same data) when configured, and otherwise falls
// back to localStorage (saved only in the current browser). The UI does not
// need to know which one is active.

import { supabase, isSupabaseConfigured } from "./supabaseClient";

// Supabase table name. Must match the table created in SUPABASE_SETUP.md.
const TABLE = "match_performances";
// localStorage key used for the offline / no-database fallback.
const LS_KEY = "spartans_matches";

export type MatchRecord = {
  id: string;
  player_id: number;
  player_name: string; // who played (for ground leaderboards)
  ground: string; // avenue/ground title — see grounds.ts
  match_date: string; // YYYY-MM-DD
  opponent: string;
  // Batting
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  // Bowling
  overs: number;
  runs_conceded: number;
  wickets: number;
  maidens: number;
  // Fielding
  catches: number;
  notes: string;
  created_at: string;
};

// What the form passes in (no id / created_at yet).
export type NewMatch = Omit<MatchRecord, "id" | "created_at">;

// True when the shared online database is active.
export function isSharedMode(): boolean {
  return isSupabaseConfigured;
}

// Generate an id for localStorage records (avoids needing a DB).
function makeId(): string {
  return `m_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
}

// ---- localStorage helpers (fallback mode) -------------------------------

function lsReadAll(): MatchRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as MatchRecord[]) : [];
  } catch {
    return [];
  }
}

function lsWriteAll(rows: MatchRecord[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LS_KEY, JSON.stringify(rows));
}

// ---- Public API ----------------------------------------------------------

// Get all match records for one player, newest first.
export async function getMatches(playerId: number): Promise<MatchRecord[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("player_id", playerId)
      .order("match_date", { ascending: false })
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []) as MatchRecord[];
  }

  // localStorage fallback
  return lsReadAll()
    .filter((m) => m.player_id === playerId)
    .sort((a, b) => (a.match_date < b.match_date ? 1 : -1));
}

// Add a new match record and return the saved row.
export async function addMatch(input: NewMatch): Promise<MatchRecord> {
  if (supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .insert(input)
      .select()
      .single();
    if (error) throw error;
    return data as MatchRecord;
  }

  // localStorage fallback
  const record: MatchRecord = {
    ...input,
    id: makeId(),
    created_at: new Date().toISOString(),
  };
  const all = lsReadAll();
  all.push(record);
  lsWriteAll(all);
  return record;
}

// Get every match record (all players), newest first. Used by the Grounds
// section to build per-ground leaderboards.
export async function getAllMatches(): Promise<MatchRecord[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("match_date", { ascending: false });
    if (error) throw error;
    return (data ?? []) as MatchRecord[];
  }
  return lsReadAll().sort((a, b) => (a.match_date < b.match_date ? 1 : -1));
}

// Delete one match record by id.
export async function deleteMatch(id: string): Promise<void> {
  if (supabase) {
    const { error } = await supabase.from(TABLE).delete().eq("id", id);
    if (error) throw error;
    return;
  }
  lsWriteAll(lsReadAll().filter((m) => m.id !== id));
}

// ---- Stats math ----------------------------------------------------------

export type Aggregate = {
  count: number;
  battedInnings: number; // records where the player actually batted
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  overs: number;
  conceded: number;
  wickets: number;
  catches: number;
  highest: number;
  fifties: number; // scores 50–99
  hundreds: number; // scores 100+
  best: { wickets: number; runs: number }; // best bowling in a single match
};

// Sum up a player's recorded matches into one aggregate object.
export function aggregateMatches(matches: MatchRecord[]): Aggregate {
  const agg: Aggregate = {
    count: matches.length,
    battedInnings: 0,
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0,
    overs: 0,
    conceded: 0,
    wickets: 0,
    catches: 0,
    highest: 0,
    fifties: 0,
    hundreds: 0,
    best: { wickets: -1, runs: 0 },
  };

  for (const m of matches) {
    if (m.balls > 0 || m.runs > 0) agg.battedInnings += 1;
    agg.runs += m.runs;
    agg.balls += m.balls;
    agg.fours += m.fours;
    agg.sixes += m.sixes;
    agg.overs += m.overs;
    agg.conceded += m.runs_conceded;
    agg.wickets += m.wickets;
    agg.catches += m.catches;
    if (m.runs > agg.highest) agg.highest = m.runs;
    if (m.runs >= 100) agg.hundreds += 1;
    else if (m.runs >= 50) agg.fifties += 1;
    // Best bowling: most wickets wins; tie → fewer runs conceded.
    const better =
      m.wickets > agg.best.wickets ||
      (m.wickets === agg.best.wickets && m.runs_conceded < agg.best.runs);
    if (m.wickets > 0 && better) {
      agg.best = { wickets: m.wickets, runs: m.runs_conceded };
    }
  }
  return agg;
}

// Base career stats already shown on the player page (hardcoded seed values).
export type BaseStats = {
  matches: number;
  runs: number;
  wickets: number;
  catches: number;
  highestScore: number;
  average: number;
  strikeRate: number;
  centuries: number;
  halfCenturies: number;
  bestBowling: string; // e.g. "5/28"
  economy: number;
};

// Final numbers shown on the page after folding recorded matches into the base.
export type CombinedStats = {
  matches: number;
  runs: number;
  wickets: number;
  catches: number;
  highestScore: number;
  average: number;
  strikeRate: number;
  centuries: number;
  halfCenturies: number;
  bestBowling: string;
  economy: number;
  fours: number; // recorded only (base does not track these)
  sixes: number; // recorded only
};

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

function parseBowling(s: string): { wickets: number; runs: number } {
  const [w, r] = (s || "0/0").split("/").map((x) => parseInt(x, 10) || 0);
  return { wickets: w, runs: r };
}

// Fold recorded matches into the base career stats so totals "keep adding up".
export function combineStats(base: BaseStats, agg: Aggregate): CombinedStats {
  // Additive totals.
  const runs = base.runs + agg.runs;
  const matches = base.matches + agg.count;
  const wickets = base.wickets + agg.wickets;
  const catches = base.catches + agg.catches;

  // Strike rate: seed the base's implied balls so the combined rate is honest.
  const baseBalls =
    base.strikeRate > 0 ? base.runs / (base.strikeRate / 100) : 0;
  const totalBalls = baseBalls + agg.balls;
  const strikeRate =
    totalBalls > 0 ? round1((runs / totalBalls) * 100) : base.strikeRate;

  // Average: runs per innings the player actually batted (ignores bowling-only
  // matches). Base's implied innings are seeded from its own average.
  const baseInnings = base.average > 0 ? base.runs / base.average : base.matches;
  const totalInnings = baseInnings + agg.battedInnings;
  const average = totalInnings > 0 ? round1(runs / totalInnings) : base.average;

  // Economy: weight the base economy by its implied overs (proxy = base matches)
  // so that with no recorded overs it stays exactly at the base value, and with
  // recorded overs it blends toward the real recorded figures.
  const baseOvers = base.matches;
  const baseConceded = baseOvers * base.economy;
  const totalOvers = baseOvers + agg.overs;
  const economy =
    totalOvers > 0
      ? round1((baseConceded + agg.conceded) / totalOvers)
      : base.economy;

  // Best bowling: better of the base figure and the best recorded match.
  const baseBest = parseBowling(base.bestBowling);
  let best = baseBest;
  if (
    agg.best.wickets > best.wickets ||
    (agg.best.wickets === best.wickets && agg.best.runs < best.runs)
  ) {
    best = agg.best;
  }

  return {
    matches,
    runs,
    wickets,
    catches,
    highestScore: Math.max(base.highestScore, agg.highest),
    average,
    strikeRate,
    centuries: base.centuries + agg.hundreds,
    halfCenturies: base.halfCenturies + agg.fifties,
    bestBowling: `${best.wickets}/${best.runs}`,
    economy,
    fours: agg.fours,
    sixes: agg.sixes,
  };
}

// ---- Ground leaderboards -------------------------------------------------

export type GroundLeader = { name: string; value: number; detail: string } | null;

export type GroundBoard = {
  mostRuns: GroundLeader;
  mostWickets: GroundLeader;
  bestScore: GroundLeader; // highest single innings at the ground
};

// For one ground, find who has the most runs / most wickets across all recorded
// matches, plus the highest single innings. Returns nulls when there is no data.
export function groundLeaderboard(
  allMatches: MatchRecord[],
  groundTitle: string
): GroundBoard {
  const rows = allMatches.filter((m) => m.ground === groundTitle);
  const empty: GroundBoard = { mostRuns: null, mostWickets: null, bestScore: null };
  if (rows.length === 0) return empty;

  const byPlayer: Record<
    string,
    { runs: number; wickets: number; innings: number }
  > = {};
  let bestScore: GroundLeader = null;

  for (const m of rows) {
    const name = m.player_name || "Unknown";
    if (!byPlayer[name]) byPlayer[name] = { runs: 0, wickets: 0, innings: 0 };
    byPlayer[name].runs += m.runs;
    byPlayer[name].wickets += m.wickets;
    byPlayer[name].innings += 1;
    if (m.runs > 0 && (!bestScore || m.runs > bestScore.value)) {
      bestScore = { name, value: m.runs, detail: `vs ${m.opponent}` };
    }
  }

  let mostRuns: GroundLeader = null;
  let mostWickets: GroundLeader = null;
  for (const [name, s] of Object.entries(byPlayer)) {
    if (s.runs > 0 && (!mostRuns || s.runs > mostRuns.value)) {
      mostRuns = { name, value: s.runs, detail: `${s.innings} innings` };
    }
    if (s.wickets > 0 && (!mostWickets || s.wickets > mostWickets.value)) {
      mostWickets = { name, value: s.wickets, detail: `${s.innings} matches` };
    }
  }

  return { mostRuns, mostWickets, bestScore };
}
