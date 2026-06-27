"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save, TrendingUp, Zap, Hand, MapPin } from "lucide-react";
import { addMatch, type NewMatch } from "@/lib/matchStore";
import { GROUNDS } from "@/lib/grounds";

type Props = {
  playerId: number;
  playerName: string;
  open: boolean;
  onClose: () => void;
  onAdded: () => void; // called after a successful save so the page can refresh
};

// Today's date as YYYY-MM-DD for the date input default.
function todayStr(): string {
  const d = new Date();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

// A labelled number input used throughout the form.
function NumField({
  label,
  value,
  onChange,
  step = "1",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  step?: string;
}) {
  return (
    <label className="block">
      <span className="text-white/70 text-sm">{label}</span>
      <input
        type="number"
        min="0"
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white focus:border-primary focus:outline-none"
      />
    </label>
  );
}

export default function AddScoreModal({
  playerId,
  playerName,
  open,
  onClose,
  onAdded,
}: Props) {
  const [opponent, setOpponent] = useState("");
  const [ground, setGround] = useState(GROUNDS[0].title);
  const [matchDate, setMatchDate] = useState(todayStr());
  // Batting
  const [runs, setRuns] = useState("0");
  const [balls, setBalls] = useState("0");
  const [fours, setFours] = useState("0");
  const [sixes, setSixes] = useState("0");
  // Bowling
  const [overs, setOvers] = useState("0");
  const [conceded, setConceded] = useState("0");
  const [wickets, setWickets] = useState("0");
  const [maidens, setMaidens] = useState("0");
  // Fielding + notes
  const [catches, setCatches] = useState("0");
  const [notes, setNotes] = useState("");

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const num = (s: string) => {
    const n = parseFloat(s);
    return Number.isFinite(n) && n > 0 ? n : 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    const record: NewMatch = {
      player_id: playerId,
      player_name: playerName,
      ground,
      match_date: matchDate || todayStr(),
      opponent: opponent.trim() || "Unknown",
      runs: Math.round(num(runs)),
      balls: Math.round(num(balls)),
      fours: Math.round(num(fours)),
      sixes: Math.round(num(sixes)),
      overs: num(overs),
      runs_conceded: Math.round(num(conceded)),
      wickets: Math.round(num(wickets)),
      maidens: Math.round(num(maidens)),
      catches: Math.round(num(catches)),
      notes: notes.trim(),
    };
    try {
      await addMatch(record);
      onAdded();
      onClose();
    } catch (err) {
      console.error("Failed to save match:", err);
      setError(
        "Save nahi ho saka. Internet/database settings check karein (SUPABASE_SETUP.md)."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-white/15 rounded-2xl p-6 md:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Add Match Score</h2>
                <p className="text-white/60 text-sm mt-1">
                  {playerName} — naya match record karein
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Match info */}
              <div className="space-y-4">
                <label className="block">
                  <span className="flex items-center gap-1.5 text-white/70 text-sm">
                    <MapPin className="w-4 h-4" /> Ground / Avenue
                  </span>
                  <select
                    value={ground}
                    onChange={(e) => setGround(e.target.value)}
                    className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white focus:border-primary focus:outline-none"
                  >
                    {GROUNDS.map((g) => (
                      <option key={g.title} value={g.title} className="bg-gray-900">
                        {g.title} — {g.location}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-white/70 text-sm">Opponent / Team</span>
                    <input
                      type="text"
                      value={opponent}
                      onChange={(e) => setOpponent(e.target.value)}
                      placeholder="e.g. Lions XI"
                      className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:border-primary focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="text-white/70 text-sm">Match Date</span>
                    <input
                      type="date"
                      value={matchDate}
                      onChange={(e) => setMatchDate(e.target.value)}
                      className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white focus:border-primary focus:outline-none"
                    />
                  </label>
                </div>
              </div>

              {/* Batting */}
              <div>
                <h3 className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
                  <TrendingUp className="w-5 h-5" /> Batting
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <NumField label="Runs" value={runs} onChange={setRuns} />
                  <NumField label="Balls" value={balls} onChange={setBalls} />
                  <NumField label="4s" value={fours} onChange={setFours} />
                  <NumField label="6s" value={sixes} onChange={setSixes} />
                </div>
              </div>

              {/* Bowling */}
              <div>
                <h3 className="flex items-center gap-2 text-red-400 font-semibold mb-3">
                  <Zap className="w-5 h-5" /> Bowling
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <NumField
                    label="Overs"
                    value={overs}
                    onChange={setOvers}
                    step="0.1"
                  />
                  <NumField
                    label="Runs Given"
                    value={conceded}
                    onChange={setConceded}
                  />
                  <NumField label="Wickets" value={wickets} onChange={setWickets} />
                  <NumField label="Maidens" value={maidens} onChange={setMaidens} />
                </div>
              </div>

              {/* Fielding + notes */}
              <div>
                <h3 className="flex items-center gap-2 text-green-400 font-semibold mb-3">
                  <Hand className="w-5 h-5" /> Fielding & Notes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <NumField label="Catches" value={catches} onChange={setCatches} />
                  <label className="block md:col-span-2">
                    <span className="text-white/70 text-sm">Notes (optional)</span>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Man of the Match"
                      className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:border-primary focus:outline-none"
                    />
                  </label>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Save className="w-5 h-5" />
                  {saving ? "Saving..." : "Save Score"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg border border-white/15 text-white/80 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
