"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Award } from "lucide-react";
import ClientOnly from "./ClientOnly";
import { GROUNDS } from "@/lib/grounds";
import {
  getAllMatches,
  groundLeaderboard,
  type MatchRecord,
  type GroundLeader,
} from "@/lib/matchStore";

// One statistics box (Most Runs / Most Wickets / Best Score). Shows a friendly
// placeholder when there is no recorded data for this ground yet.
function StatBox({
  icon: Icon,
  title,
  unit,
  color,
  leader,
}: {
  icon: typeof Target;
  title: string;
  unit: string;
  color: string;
  leader: GroundLeader;
}) {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-xl p-4 backdrop-blur-sm`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-white/80" />
        <h4 className="font-semibold text-white/80">{title}</h4>
      </div>
      {leader ? (
        <div className="space-y-2">
          <p className="text-white font-bold text-lg">{leader.name}</p>
          <p className="text-2xl font-black text-primary">
            {leader.value} {unit}
          </p>
          <p className="text-xs text-gray-400">{leader.detail}</p>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-white/40 font-medium text-sm py-2">
            Abhi koi record nahi
          </p>
          <p className="text-xs text-gray-500">
            Is ground ka score add karein
          </p>
        </div>
      )}
    </div>
  );
}

export default function HistorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allMatches, setAllMatches] = useState<MatchRecord[]>([]);

  useEffect(() => {
    let alive = true;
    getAllMatches()
      .then((rows) => {
        if (alive) setAllMatches(rows);
      })
      .catch((err) => console.error("Could not load ground stats:", err));
    return () => {
      alive = false;
    };
  }, []);

  const active = GROUNDS[activeIndex];
  const board = groundLeaderboard(allMatches, active.title);

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Animated lines background (similar to other sections) */}
      <ClientOnly>
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {Array.from({ length: 8 }).map((_: any, i: number) => (
            <motion.div
              key={i}
              className="absolute w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
              style={{
                left: `${(i * 13) % 100}%`,
                height: 100 + (i % 4) * 50,
              }}
              animate={{
                y: [0, 1000],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8 + (i % 5) * 2,
                repeat: Infinity,
                delay: (i % 5) * 1,
              }}
            />
          ))}
        </div>
      </ClientOnly>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-champ font-extrabold uppercase tracking-tight text-white">
            <span className="inline-block">Our</span>{" "}
            <span className="inline-block bg-[#BB0903] text-black px-3 md:px-4 py-0.5 -rotate-3 border-[3px] border-black shadow-[4px_4px_0_rgba(0,0,0,0.45)]">
              Grounds
            </span>
          </h2>
          <div className="h-1 w-32 bg-primary mt-4 rounded-full" />
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            Har ground ke top performers — players ke add kiye gaye scores se
            khud update hote hain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar - Ground Names */}
          <div className="lg:col-span-4 space-y-3 md:space-y-4">
            {GROUNDS.map((item, index) => (
              <motion.button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.03, x: 8 }}
                className={`w-full text-left px-6 py-4 md:py-5 rounded-r-xl transition-all duration-300 backdrop-blur-sm border-l-4 ${
                  activeIndex === index
                    ? "bg-black/60 border-primary shadow-lg shadow-primary/20"
                    : "bg-black/40 border-gray-800 hover:border-primary/70 hover:bg-black/60"
                }`}
              >
                <span className="text-lg md:text-xl font-semibold text-white">
                  {item.title}
                </span>
                <p className="text-sm text-gray-400 mt-1">{item.location}</p>
              </motion.button>
            ))}
          </div>

          {/* Right Content Area */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-black/40 backdrop-blur-md border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/70"
          >
            {/* Ground Image */}
            <div className="relative w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden mb-6">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Ground Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {active.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span>📍 {active.location}</span>
                  <span>🏟️ Capacity: {active.capacity}</span>
                  <span>📅 Est. {active.established}</span>
                </div>
              </div>
            </div>

            {/* Statistics Boxes - dynamic from recorded matches */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <StatBox
                icon={Target}
                title="Most Runs"
                unit="runs"
                color="from-blue-900/40 to-blue-950/40 border border-blue-800/50"
                leader={board.mostRuns}
              />
              <StatBox
                icon={Trophy}
                title="Most Wickets"
                unit="wkts"
                color="from-green-900/40 to-green-950/40 border border-green-800/50"
                leader={board.mostWickets}
              />
              <StatBox
                icon={Award}
                title="Best Score"
                unit="runs"
                color="from-purple-900/40 to-purple-950/40 border border-purple-800/50"
                leader={board.bestScore}
              />
            </div>

            {/* Additional Ground Info */}
            <div className="mt-6 p-4 bg-black/30 rounded-lg border border-gray-800">
              <p className="text-gray-300 text-sm">
                {active.title} par khele gaye matches ke records yahan dikhte
                hain. Kisi player ke page par jaakar &quot;Add Score&quot; mein
                ye ground select karein — top performers yahan apne aap update ho
                jayenge.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
