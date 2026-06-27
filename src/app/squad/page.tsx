"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Plus, Trash2, Cloud, HardDrive } from "lucide-react";
import { getPlayers, deletePlayer } from "@/lib/playerStore";
import { isSharedMode } from "@/lib/matchStore";
import type { Player } from "@/lib/players";
import AddPlayerModal from "@/components/AddPlayerModal";

export default function SquadPage() {
  const router = useRouter();
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [shared, setShared] = useState(false);

  const load = useCallback(async () => {
    try {
      const rows = await getPlayers();
      setPlayers(rows);
    } catch (err) {
      console.error("Could not load players:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setShared(isSharedMode());
    load();
  }, [load]);

  const handleDelete = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // don't open the detail page
    if (!confirm("Ye player delete karna hai?")) return;
    try {
      await deletePlayer(id);
      setPlayers((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Could not delete player:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-primary/30 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Player
          </button>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-champ font-extrabold uppercase tracking-tight">
            Full <span className="bg-[#BB0903] text-black px-3 py-0.5 -rotate-2 inline-block border-[3px] border-black shadow-[4px_4px_0_rgba(0,0,0,0.45)]">Squad</span>
          </h1>
          <div className="flex items-center gap-3 mt-4 text-white/60">
            <span>{players.length} players</span>
            <span className="flex items-center gap-1.5 text-xs">
              {shared ? (
                <>
                  <Cloud className="w-4 h-4 text-green-400" /> Online
                </>
              ) : (
                <>
                  <HardDrive className="w-4 h-4 text-yellow-400" /> Sirf is browser
                </>
              )}
            </span>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <p className="text-white/50 py-20 text-center">Loading squad...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
            {players.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.04 }}
                whileHover={{ y: -8, scale: 1.03 }}
                onClick={() => router.push(`/team/${player.id}`)}
                className="group relative h-[300px] md:h-[340px] rounded-2xl bg-[#1a1a1a] border-2 border-white/70 cursor-pointer overflow-hidden shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_45px_rgba(220,38,38,0.8)] hover:border-white transition-shadow duration-500"
              >
                <img
                  src={player.image}
                  alt={player.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Jersey number */}
                {player.number ? (
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-primary/90 flex items-center justify-center text-sm font-bold shadow-lg">
                    {player.number}
                  </div>
                ) : null}

                {/* Delete (only for added players) */}
                {player.id > 12 ? (
                  <button
                    onClick={(e) => handleDelete(e, player.id)}
                    className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 hover:bg-red-600 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                    aria-label="Delete player"
                    title="Delete player"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                ) : null}

                {/* Name + role */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-bold text-lg drop-shadow-lg block truncate">
                    {player.name}
                  </span>
                  <span className="text-white/70 text-xs">{player.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AddPlayerModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onAdded={load}
      />
    </div>
  );
}
