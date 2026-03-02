"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Target, Award, TrendingUp, Shield, Zap, Users, Trophy, Star, ChevronRight } from "lucide-react";

// Team member data (same as in AboutSection)
const teamMembers = [
  {
    id: 1,
    name: "Barry",
    role: "Batsman",
    number: "96",
    image: "/images/barry.jpeg",
    country: "Team A",
    age: 25,
    matches: 120,
    runs: 4500,
    wickets: 15,
    highestScore: 145,
    average: 37.5,
    strikeRate: 89.2,
    centuries: 8,
    halfCenturies: 32,
    catches: 45,
    bestBowling: "2/15",
    economy: 4.8
  },
  {
    id: 2,
    name: "Batsman",
    role: "Batsman",
    number: "10",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team B",
    age: 24,
    matches: 100,
    runs: 3800,
    wickets: 8,
    highestScore: 132,
    average: 38.0,
    strikeRate: 91.5,
    centuries: 6,
    halfCenturies: 28,
    catches: 38,
    bestBowling: "1/12",
    economy: 5.2
  },
  {
    id: 3,
    name: "Berry",
    role: "Bat/Spin",
    number: "11",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team C",
    age: 26,
    matches: 90,
    runs: 2800,
    wickets: 45,
    highestScore: 98,
    average: 31.1,
    strikeRate: 76.8,
    centuries: 0,
    halfCenturies: 18,
    catches: 52,
    bestBowling: "5/28",
    economy: 3.9
  },
  {
    id: 4,
    name: "Hammad",
    role: "Batsman",
    number: "9",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team D",
    age: 23,
    matches: 80,
    runs: 3200,
    wickets: 5,
    highestScore: 125,
    average: 40.0,
    strikeRate: 94.2,
    centuries: 5,
    halfCenturies: 22,
    catches: 35,
    bestBowling: "1/8",
    economy: 6.1
  },
  {
    id: 5,
    name: "Uzair",
    role: "Allrounder",
    number: "17",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team E",
    age: 27,
    matches: 110,
    runs: 3500,
    wickets: 85,
    highestScore: 112,
    average: 31.8,
    strikeRate: 82.5,
    centuries: 3,
    halfCenturies: 20,
    catches: 48,
    bestBowling: "4/32",
    economy: 4.2
  },
  {
    id: 6,
    name: "Husanain",
    role: "Batsman",
    number: "4",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team F",
    age: 22,
    matches: 70,
    runs: 2900,
    wickets: 2,
    highestScore: 118,
    average: 41.4,
    strikeRate: 96.8,
    centuries: 4,
    halfCenturies: 19,
    catches: 28,
    bestBowling: "1/25",
    economy: 7.5
  },
  {
    id: 7,
    name: "Nouman",
    role: "Batsman",
    number: "9",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team G",
    age: 28,
    matches: 130,
    runs: 5200,
    wickets: 12,
    highestScore: 156,
    average: 40.0,
    strikeRate: 87.3,
    centuries: 10,
    halfCenturies: 35,
    catches: 58,
    bestBowling: "2/18",
    economy: 5.5
  },
  {
    id: 8,
    name: "Saeed",
    role: "Bowler",
    number: "5",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team H",
    age: 26,
    matches: 95,
    runs: 450,
    wickets: 142,
    highestScore: 35,
    average: 12.8,
    strikeRate: 65.4,
    centuries: 0,
    halfCenturies: 0,
    catches: 32,
    bestBowling: "6/22",
    economy: 3.6
  },
  {
    id: 9,
    name: "Saif",
    role: "Allrounder",
    number: "11",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team I",
    age: 25,
    matches: 85,
    runs: 2100,
    wickets: 68,
    highestScore: 88,
    average: 24.7,
    strikeRate: 78.9,
    centuries: 0,
    halfCenturies: 12,
    catches: 41,
    bestBowling: "4/35",
    economy: 4.5
  },
  {
    id: 10,
    name: "Umar",
    role: "Bowler",
    number: "8",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team J",
    age: 24,
    matches: 75,
    runs: 320,
    wickets: 98,
    highestScore: 28,
    average: 8.5,
    strikeRate: 58.2,
    centuries: 0,
    halfCenturies: 0,
    catches: 25,
    bestBowling: "5/28",
    economy: 4.1
  },
  {
    id: 11,
    name: "Ahmed",
    role: "Allrounder",
    number: "6",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team K",
    age: 27,
    matches: 105,
    runs: 2900,
    wickets: 76,
    highestScore: 95,
    average: 27.6,
    strikeRate: 81.2,
    centuries: 1,
    halfCenturies: 15,
    catches: 44,
    bestBowling: "4/38",
    economy: 4.8
  },
  {
    id: 12,
    name: "Player 12",
    role: "Batsman",
    number: "12",
    image: "https://media.craiyon.com/2025-08-20/brGLvX9aQaOpNjSJ6XWRUg.webp",
    country: "Team L",
    age: 26,
    matches: 88,
    runs: 3400,
    wickets: 10,
    highestScore: 108,
    average: 38.6,
    strikeRate: 85.9,
    centuries: 3,
    halfCenturies: 21,
    catches: 36,
    bestBowling: "2/22",
    economy: 5.8
  }
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
  const [member, setMember] = useState(null);

  useEffect(() => {
    const memberId = parseInt(params.id);
    const foundMember = teamMembers.find(m => m.id === memberId);
    setMember(foundMember);
  }, [params.id]);

  const getRoleColor = (role) => {
    if (role.includes("Batsman")) return "from-blue-600 to-blue-800";
    if (role.includes("Bowler")) return "from-red-600 to-red-800";
    if (role.includes("Allrounder")) return "from-purple-600 to-purple-800";
    if (role.includes("Bat/Spin")) return "from-green-600 to-green-800";
    return "from-primary to-secondary";
  };

  const getRoleIcon = (role) => {
    if (role.includes("Batsman")) return <TrendingUp className="w-5 h-5" />;
    if (role.includes("Bowler")) return <Zap className="w-5 h-5" />;
    if (role.includes("Allrounder")) return <Shield className="w-5 h-5" />;
    if (role.includes("Bat/Spin")) return <Target className="w-5 h-5" />;
    return <Award className="w-5 h-5" />;
  };

  if (!member) {
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

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 from-black via-gray-950 to-black opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Team</span>
        </motion.button>

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
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{member.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Age: {member.age}</span>
                    </div>
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
                    <span className="font-bold text-xl">{member.matches}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Total Runs</span>
                    <span className="font-bold text-xl">{member.runs.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Wickets</span>
                    <span className="font-bold text-xl">{member.wickets}</span>
                  </div>
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
                  <div className="text-3xl font-bold text-blue-400 mb-1">{member.highestScore}</div>
                  <div className="text-white/70 text-sm">Highest Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{member.average}</div>
                  <div className="text-white/70 text-sm">Average</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{member.strikeRate}</div>
                  <div className="text-white/70 text-sm">Strike Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{member.centuries + member.halfCenturies}</div>
                  <div className="text-white/70 text-sm">50+ Scores</div>
                </div>
              </div>
              
              {/* Centuries and Half-Centuries */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg p-4 border border-yellow-600/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">Centuries</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">{member.centuries}</div>
                </div>
                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4 border border-blue-600/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">Half Centuries</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{member.halfCenturies}</div>
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
                  <div className="text-3xl font-bold text-red-400 mb-1">{member.bestBowling}</div>
                  <div className="text-white/70 text-sm">Best Bowling</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-1">{member.economy}</div>
                  <div className="text-white/70 text-sm">Economy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{member.wickets}</div>
                  <div className="text-white/70 text-sm">Total Wickets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{member.catches}</div>
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
                    <span className="font-semibold">{Math.min(100, (member.average / 50) * 100)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (member.average / 50) * 100)}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Bowling Performance</span>
                    <span className="font-semibold">{Math.min(100, (member.wickets / member.matches) * 20)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (member.wickets / member.matches) * 20)}%` }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-red-600 to-orange-600 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Fielding Performance</span>
                    <span className="font-semibold">{Math.min(100, (member.catches / member.matches) * 25)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (member.catches / member.matches) * 25)}%` }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="h-full bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                Recent Achievements
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-lg border border-yellow-600/20">
                  <ChevronRight className="w-5 h-5 text-yellow-500" />
                  <span>Man of the Match vs Team Rival</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg border border-blue-600/20">
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                  <span>Century in Championship Final</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg border border-purple-600/20">
                  <ChevronRight className="w-5 h-5 text-purple-500" />
                  <span>Best Bowling Figures of the Season</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
