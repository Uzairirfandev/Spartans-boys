"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Award, Crown } from "lucide-react";

const groundItems = [
  {
    title: "Paragon Stadium",
    location: "lahore",
    image: "https://content-cdn.zameen.com/Paragon_City_Zameen_com_7f2bf9822a.jpg",
    capacity: "25,000",
    established: "2010",
    stats: {
      mostRuns: {
        name: "Barry",
        value: "1,245 runs",
        matches: "18 innings"
      },
      mostWickets: {
        name: "Berry",
        value: "52 wickets",
        matches: "14 matches"
      },
      mostManOfMatch: {
        name: "Hussnain",
        value: "5 awards",
        matches: "22 matches"
      }
    }
  },
  {
    title: "Ashiyana Stadium",
    location: "Lahore",
    image: "https://www.skymarketing.com.pk/wp-content/uploads/2022/05/aashiana-housing-scaled.jpg",
    capacity: "20,000",
    established: "2012",
    stats: {
      mostRuns: {
        name: "Husnain",
        value: "1,890 runs",
        matches: "24 innings"
      },
      mostWickets: {
        name: "Hammad",
        value: "48 wickets",
        matches: "16 matches"
      },
      mostManOfMatch: {
        name: "Ahmed",
        value: "4 awards",
        matches: "28 matches"
      }
    }
  },
  {
    title: "Chachu Wali Stadium",
    location: "lahore",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/13/21/28/84/bedian-spins-cricket.jpg",
    capacity: "15,000",
    established: "2015",
    stats: {
      mostRuns: {
        name: "Ahmed",
        value: "1,567 runs",
        matches: "20 innings"
      },
      mostWickets: {
        name: "Berry",
        value: "45 wickets",
        matches: "12 matches"
      },
      mostManOfMatch: {
        name: "Saeed",
        value: "3 awards",
        matches: "19 matches"
      }
    }
  },
  {
    title: "Askari 11 Stadium",
    location: "lahore",
    image: "https://i.ytimg.com/vi/BMma6mkqDn8/sddefault.jpg",
    capacity: "18,000",
    established: "2013",
    stats: {
      mostRuns: {
        name: "UZAIR",
        value: "1,234 runs",
        matches: "16 innings"
      },
      mostWickets: {
        name: "BILAL",
        value: "38 wickets",
        matches: "11 matches"
      },
      mostManOfMatch: {
        name: "AMIR",
        value: "3 awards",
        matches: "15 matches"
      }
    }
  },
  {
    title: "Phase 8 Stadium",
    location: "Peshawar, Pakistan",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    capacity: "22,000",
    established: "2018",
    stats: {
      mostRuns: {
        name: "NOUMAN",
        value: "890 runs",
        matches: "14 innings"
      },
      mostWickets: {
        name: "Saif",
        value: "42 wickets",
        matches: "13 matches"
      },
      mostManOfMatch: {
        name: "HAMZA",
        value: "4 awards",
        matches: "25 matches"
      }
    }
  }
];

export default function HistorySection() {
  const [activeIndex, setActiveIndex] = useState(0); // Default first item active

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      {/* Animated lines background (similar to other sections) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {Array.from({ length: 20 }).map((_: any, i: number) => (
          <motion.div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: 100 + Math.random() * 200,
            }}
            animate={{
              y: [0, 1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="text-primary">Our</span>{" "}
            <span className="text-white">Grounds</span>
          </h2>
          <div className="h-1 w-32 bg-primary mt-4 rounded-full" />
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            Explore our prestigious cricket stadiums and their legendary records
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar - Ground Names */}
          <div className="lg:col-span-4 space-y-3 md:space-y-4">
            {groundItems.map((item: any, index: number) => (
              <motion.button
                key={index}
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
                src={groundItems[activeIndex].image}
                alt={groundItems[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Ground Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {groundItems[activeIndex].title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span>📍 {groundItems[activeIndex].location}</span>
                  <span>🏟️ Capacity: {groundItems[activeIndex].capacity}</span>
                  <span>📅 Est. {groundItems[activeIndex].established}</span>
                </div>
              </div>
            </div>

            {/* Statistics Boxes - 3 boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* Most Runs Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-800/50 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-blue-400" />
                  <h4 className="text-blue-400 font-semibold">Most Runs</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-white font-bold text-lg">
                    {groundItems[activeIndex].stats.mostRuns.name}
                  </p>
                  <p className="text-2xl font-black text-primary">
                    {groundItems[activeIndex].stats.mostRuns.value}
                  </p>
                  <p className="text-xs text-gray-400">
                    {groundItems[activeIndex].stats.mostRuns.matches}
                  </p>
                </div>
              </motion.div>

              {/* Most Wickets Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-900/40 to-green-950/40 border border-green-800/50 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-5 h-5 text-green-400" />
                  <h4 className="text-green-400 font-semibold">Most Wickets</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-white font-bold text-lg">
                    {groundItems[activeIndex].stats.mostWickets.name}
                  </p>
                  <p className="text-2xl font-black text-primary">
                    {groundItems[activeIndex].stats.mostWickets.value}
                  </p>
                  <p className="text-xs text-gray-400">
                    {groundItems[activeIndex].stats.mostWickets.matches}
                  </p>
                </div>
              </motion.div>

              {/* Most Man of the Match Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border border-purple-800/50 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-purple-400" />
                  <h4 className="text-purple-400 font-semibold">Most M.O.M</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-white font-bold text-lg">
                    {groundItems[activeIndex].stats.mostManOfMatch.name}
                  </p>
                  <p className="text-2xl font-black text-primary">
                    {groundItems[activeIndex].stats.mostManOfMatch.value}
                  </p>
                  <p className="text-xs text-gray-400">
                    {groundItems[activeIndex].stats.mostManOfMatch.matches}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Additional Ground Info */}
            <div className="mt-6 p-4 bg-black/30 rounded-lg border border-gray-800">
              <p className="text-gray-300 text-sm">
                This stadium has been home to numerous historic matches and continues to be a fortress for our cricket team. Known for its passionate crowds and challenging pitch conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}