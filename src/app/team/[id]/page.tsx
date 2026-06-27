"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Target, Award, TrendingUp, Shield, Zap, Users, Trophy, Star, Plus, Trash2, Cloud, HardDrive } from "lucide-react";
import ClientOnly from "@/components/ClientOnly";
import AddScoreModal from "@/components/AddScoreModal";
import {
  getMatches,
  deleteMatch,
  aggregateMatches,
  combineStats,
  isSharedMode,
  type MatchRecord,
} from "@/lib/matchStore";

// Team roster. All match stats start at 0 and fill up ONLY from real "Add Score"
// entries on each player's page — no fake/placeholder numbers.
const CRAIYON =
  "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp";

// Shared zero-stats so every player starts clean.
const ZERO = {
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

const teamMembers = [
  { id: 1, name: "Barry", role: "Batsman", number: "96", image: "/images/barry.jpeg", ...ZERO },
  { id: 2, name: "Batsman", role: "Batsman", number: "10", image: CRAIYON, ...ZERO },
  { id: 3, name: "Berry", role: "Bat/Spin", number: "11", image: CRAIYON, ...ZERO },
  { id: 4, name: "Hammad", role: "Batsman", number: "9", image: CRAIYON, ...ZERO },
  { id: 5, name: "Uzair", role: "Allrounder", number: "17", image: CRAIYON, ...ZERO },
  { id: 6, name: "Husanain", role: "Batsman", number: "4", image: CRAIYON, ...ZERO },
  { id: 7, name: "Nouman", role: "Batsman", number: "9", image: CRAIYON, ...ZERO },
  { id: 8, name: "Saeed", role: "Bowler", number: "5", image: CRAIYON, ...ZERO },
  { id: 9, name: "Saif", role: "Allrounder", number: "11", image: CRAIYON, ...ZERO },
  { id: 10, name: "Umar", role: "Bowler", number: "8", image: CRAIYON, ...ZERO },
  { id: 11, name: "Ahmed", role: "Allrounder", number: "6", image: CRAIYON, ...ZERO },
  { id: 12, name: "Player 12", role: "Batsman", number: "12", image: CRAIYON, ...ZERO },
];

// Animated background lines
const smallLines = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  duration: 3 + Math.random() * 3,
  delay: Math.random() * 5,
  direction: Math.random() > 0.5 ? "up" : "down",
  length: 60 + Math.random() * 140,
  opacity: 0.25 + Math.random() * 0.35,
}));

export default function TeamMemberDetail() {
  const params = useParams();
  const router = useRouter();
  const [member, setMember] = useState<typeof teamMembers[0] | null>(null);
  const [matches, setMatches] = useState<MatchRecord[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [shared, setShared] = useState(false);

  const memberId = parseInt(params.id as string);

  useEffect(() => {
    const foundMember = teamMembers.find(m => m.id === memberId);
    setMember(foundMember || null);
  }, [memberId]);

  // Load this player's recorded matches (from Supabase or localStorage).
  const loadMatches = useCallback(async () => {
    try {
      const rows = await getMatches(memberId);
      setMatches(rows);
    } catch (err) {
      console.error("Could not load matches:", err);
    }
  }, [memberId]);

  useEffect(() => {
    setShared(isSharedMode());
    loadMatches();
  }, [loadMatches]);

  const handleDeleteMatch = async (id: string) => {
    try {
      await deleteMatch(id);
      setMatches((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error("Could not delete match:", err);
    }
  };

  // Fold recorded matches into the base career stats so totals keep adding up.
  const stats = member
    ? combineStats(member, aggregateMatches(matches))
    : null;

  const getRoleColor = (role: string) => {
    if (role.includes("Batsman")) return "from-blue-600 to-blue-800";
    if (role.includes("Bowler")) return "from-red-600 to-red-800";
    if (role.includes("Allrounder")) return "from-purple-600 to-purple-800";
    if (role.includes("Bat/Spin")) return "from-green-600 to-green-800";
    return "from-primary to-secondary";
  };

  const getRoleIcon = (role: string) => {
    if (role.includes("Batsman")) return <TrendingUp className="w-5 h-5" />;
    if (role.includes("Bowler")) return <Zap className="w-5 h-5" />;
    if (role.includes("Allrounder")) return <Shield className="w-5 h-5" />;
    if (role.includes("Bat/Spin")) return <Target className="w-5 h-5" />;
    return <Award className="w-5 h-5" />;
  };

  if (!member || !stats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Team member not found</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Animated Lines */}
      <ClientOnly>
      <div className="absolute inset-0 pointer-events-none">
        {smallLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute w-0.5 from-transparent via-primary/90 to-transparent rounded-full blur-[0.5px]"
            style={{
              left: `${line.x}%`,
              height: line.length,
            }}
            initial={{
              y: line.direction === "down" ? "-150%" : "150%",
              opacity: 0,
            }}
            animate={{
              y: line.direction === "down" ? "150%" : "-150%",
              opacity: [0, line.opacity * 3, 0],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>
      </ClientOnly>

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 from-black via-gray-950 to-black opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Top bar: Back + Add Score */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Team</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-primary/30 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Score
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-12">
              {/* Profile Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  {/* Jersey Number */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-3xl font-bold shadow-2xl">
                    {member.number}
                  </div>

                  {/* Player Image */}
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-600/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`bg-gradient-to-r ${getRoleColor(member.role)} text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 shadow-lg`}>
                        {getRoleIcon(member.role)}
                        <span className="font-semibold">{member.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Basic Info */}
                  <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {member.name}
                  </h1>
                  <div className="space-y-2 text-white/70">
                    {member.country ? (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{member.country}</span>
                      </div>
                    ) : null}
                    {member.age ? (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Age: {member.age}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Career Highlights
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Matches</span>
                    <span className="font-bold text-xl">{stats.matches}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Total Runs</span>
                    <span className="font-bold text-xl">{stats.runs.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Wickets</span>
                    <span className="font-bold text-xl">{stats.wickets}</span>
                  </div>
                </div>

                {/* Data mode badge */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/50">
                  {shared ? (
                    <>
                      <Cloud className="w-4 h-4 text-green-400" />
                      <span>Online</span>
                    </>
                  ) : (
                    <>
                      <HardDrive className="w-4 h-4 text-yellow-400" />
                      <span>Sirf is browser mein (database set nahi)</span>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Detailed Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Batting Stats */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                Batting Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">{stats.highestScore}</div>
                  <div className="text-white/70 text-sm">Highest Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{stats.average}</div>
                  <div className="text-white/70 text-sm">Average</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{stats.strikeRate}</div>
                  <div className="text-white/70 text-sm">Strike Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{stats.centuries + stats.halfCenturies}</div>
                  <div className="text-white/70 text-sm">50+ Scores</div>
                </div>
              </div>

              {/* Fours & Sixes (from recorded matches) */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4 border border-cyan-600/30 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stats.fours}</div>
                  <div className="text-white/70 text-sm mt-1">Total 4s</div>
                </div>
                <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-lg p-4 border border-pink-600/30 text-center">
                  <div className="text-2xl font-bold text-pink-400">{stats.sixes}</div>
                  <div className="text-white/70 text-sm mt-1">Total 6s</div>
                </div>
              </div>

              {/* Centuries and Half-Centuries */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg p-4 border border-yellow-600/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">Centuries</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">{stats.centuries}</div>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4 border border-blue-600/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">Half Centuries</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{stats.halfCenturies}</div>
                </div>
              </div>
            </div>

            {/* Bowling Stats */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                Bowling Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-1">{stats.bestBowling}</div>
                  <div className="text-white/70 text-sm">Best Bowling</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-1">{stats.economy}</div>
                  <div className="text-white/70 text-sm">Economy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{stats.wickets}</div>
                  <div className="text-white/70 text-sm">Total Wickets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{stats.catches}</div>
                  <div className="text-white/70 text-sm">Catches</div>
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                Performance Analysis
              </h2>
              <div className="space-y-4">
                {/* Performance Bars */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Batting Performance</span>
                    <span className="font-semibold">{Math.round(Math.min(100, (stats.average / 50) * 100))}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (stats.average / 50) * 100)}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Bowling Performance</span>
                    <span className="font-semibold">{Math.round(Math.min(100, (stats.wickets / stats.matches) * 20))}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (stats.wickets / stats.matches) * 20)}%` }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-red-600 to-orange-600 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Fielding Performance</span>
                    <span className="font-semibold">{Math.round(Math.min(100, (stats.catches / stats.matches) * 25))}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (stats.catches / stats.matches) * 25)}%` }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Match Records */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6 gap-3 flex-wrap">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-800 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  Match Records
                </h2>
                <button
                  onClick={() => setShowAdd(true)}
                  className="flex items-center gap-2 bg-primary/90 hover:bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Score
                </button>
              </div>

              {matches.length === 0 ? (
                <div className="text-center py-10 text-white/50">
                  <p className="mb-1">Abhi koi match record nahi hai.</p>
                  <p className="text-sm">
                    Upar &quot;Add Score&quot; dabakar pehla match add karein.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto -mx-2">
                  <table className="w-full text-sm min-w-[640px]">
                    <thead>
                      <tr className="text-white/50 text-left border-b border-white/10">
                        <th className="py-3 px-2 font-medium">Date</th>
                        <th className="py-3 px-2 font-medium">Opponent</th>
                        <th className="py-3 px-2 font-medium text-center">Runs (B)</th>
                        <th className="py-3 px-2 font-medium text-center">4s/6s</th>
                        <th className="py-3 px-2 font-medium text-center">Bowling</th>
                        <th className="py-3 px-2 font-medium text-center">Ct</th>
                        <th className="py-3 px-2 font-medium text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {matches.map((m) => (
                        <tr
                          key={m.id}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-3 px-2 text-white/70 whitespace-nowrap">
                            {m.match_date}
                          </td>
                          <td className="py-3 px-2 text-white/90">{m.opponent}</td>
                          <td className="py-3 px-2 text-center">
                            <span className="font-bold text-blue-400">{m.runs}</span>
                            <span className="text-white/40"> ({m.balls})</span>
                          </td>
                          <td className="py-3 px-2 text-center text-white/70">
                            {m.fours}/{m.sixes}
                          </td>
                          <td className="py-3 px-2 text-center text-white/70">
                            {m.wickets}-{m.runs_conceded}
                            <span className="text-white/40">
                              {" "}
                              ({m.overs} ov)
                            </span>
                          </td>
                          <td className="py-3 px-2 text-center text-white/70">
                            {m.catches}
                          </td>
                          <td className="py-3 px-2 text-right">
                            <button
                              onClick={() => handleDeleteMatch(m.id)}
                              className="text-white/40 hover:text-red-400 p-1 rounded transition-colors"
                              aria-label="Delete match"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add Score Modal */}
      <AddScoreModal
        playerId={member.id}
        playerName={member.name}
        open={showAdd}
        onClose={() => setShowAdd(false)}
        onAdded={loadMatches}
      />
    </div>
  );
}
