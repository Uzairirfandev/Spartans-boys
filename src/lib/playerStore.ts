// Player roster data layer.
//
// Returns BASE_PLAYERS (the original squad) merged with any players added
// through the Squad page. Added players are stored in Supabase when configured
// (shared, online) and otherwise in localStorage (this browser only) — same
// pattern as matchStore.ts.

import { supabase } from "./supabaseClient";
import {
  BASE_PLAYERS,
  toPlayer,
  SPARTAN_IMG,
  type Player,
  type PlayerIdentity,
} from "./players";

const TABLE = "players";
const LS_KEY = "spartans_players";

// What the Add Player form provides.
export type NewPlayer = {
  name: string;
  role: string;
  number: string;
  image: string;
};

// ---- localStorage helpers (fallback mode) -------------------------------

function lsRead(): PlayerIdentity[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as PlayerIdentity[]) : [];
  } catch {
    return [];
  }
}

function lsWrite(rows: PlayerIdentity[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LS_KEY, JSON.stringify(rows));
}

// ---- Public API ----------------------------------------------------------

// Base squad + all added players (base first, then added by id).
export async function getPlayers(): Promise<Player[]> {
  let added: PlayerIdentity[] = [];

  if (supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      // Table missing or unreachable — fall back to base squad only.
      console.error("Could not load players from Supabase:", error.message);
    } else if (data) {
      added = data.map((d) => ({
        id: d.id,
        name: d.name,
        role: d.role,
        number: d.number,
        image: d.image || SPARTAN_IMG,
      }));
    }
  } else {
    added = lsRead();
  }

  return [...BASE_PLAYERS, ...added.map(toPlayer)];
}

// One player by id (base or added). null if not found.
export async function getPlayerById(id: number): Promise<Player | null> {
  const all = await getPlayers();
  return all.find((p) => p.id === id) ?? null;
}

// Add a new player and return the saved record (with its assigned id).
export async function addPlayer(input: NewPlayer): Promise<Player> {
  const clean = {
    name: input.name.trim() || "New Player",
    role: input.role || "Batsman",
    number: input.number.trim(),
    image: input.image.trim() || SPARTAN_IMG,
  };

  if (supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .insert(clean)
      .select()
      .single();
    if (error) throw error;
    return toPlayer({
      id: data.id,
      name: data.name,
      role: data.role,
      number: data.number,
      image: data.image || SPARTAN_IMG,
    });
  }

  // localStorage fallback — assign ids from 100 up so they never hit base 1–12.
  const list = lsRead();
  const nextId = list.reduce((m, p) => Math.max(m, p.id), 99) + 1;
  const rec: PlayerIdentity = { id: nextId, ...clean };
  list.push(rec);
  lsWrite(list);
  return toPlayer(rec);
}

// Delete an added player (base players 1–12 cannot be deleted).
export async function deletePlayer(id: number): Promise<void> {
  if (id <= 12) return; // safety: never delete the base squad
  if (supabase) {
    const { error } = await supabase.from(TABLE).delete().eq("id", id);
    if (error) throw error;
    return;
  }
  lsWrite(lsRead().filter((p) => p.id !== id));
}
