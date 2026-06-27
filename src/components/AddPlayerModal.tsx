"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UserPlus, Save } from "lucide-react";
import { addPlayer } from "@/lib/playerStore";
import { ROLES } from "@/lib/players";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdded: () => void; // called after a successful save so the list can refresh
};

export default function AddPlayerModal({ open, onClose, onAdded }: Props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setName("");
    setRole(ROLES[0]);
    setNumber("");
    setImage("");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Player ka naam zaroori hai.");
      return;
    }
    setError("");
    setSaving(true);
    try {
      await addPlayer({ name, role, number, image });
      reset();
      onAdded();
      onClose();
    } catch (err) {
      console.error("Failed to add player:", err);
      setError(
        "Player save nahi ho saka. Internet/database check karein. (Players table bani hai? SUPABASE_SETUP.md dekhein.)"
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
            className="relative w-full max-w-lg bg-gradient-to-br from-gray-900 to-black border border-white/15 rounded-2xl p-6 md:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white">Add Player</h2>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-white/70 text-sm">Player Name *</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Bilal"
                  className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:border-primary focus:outline-none"
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-white/70 text-sm">Role</span>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white focus:border-primary focus:outline-none"
                  >
                    {ROLES.map((r) => (
                      <option key={r} value={r} className="bg-gray-900">
                        {r}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-white/70 text-sm">Jersey Number</span>
                  <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="e.g. 7"
                    className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:border-primary focus:outline-none"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-white/70 text-sm">
                  Image URL (optional)
                </span>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://....jpg  (khaali chhodo to default lag jayegi)"
                  className="mt-1 w-full bg-black/40 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:border-primary focus:outline-none"
                />
                <span className="text-white/40 text-xs mt-1 block">
                  Kisi photo ka link paste karein; na ho to default Spartan
                  tasveer lag jayegi.
                </span>
              </label>

              {error && (
                <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Save className="w-5 h-5" />
                  {saving ? "Saving..." : "Save Player"}
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
