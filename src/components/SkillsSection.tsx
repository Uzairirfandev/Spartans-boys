"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { 
  Trophy, 
  Target, 
  Zap, 
  Shield, 
  Heart, 
  Brain,
  Star,
  Award,
  Activity,
  TrendingUp,
  Repeat
} from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counters, setCounters] = useState([
    { current: 0, target: 450, suffix: "" },    // Total Matches
    { current: 0, target: 320, suffix: "" },    // Matches Won
    { current: 0, target: 120, suffix: "" },    // Matches Lost
    { current: 0, target: 10, suffix: "" }      // Matches Drawn/Tied
  ]);

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setCounters(prev => prev.map(counter => {
          const increment = counter.target / steps;
          const newValue = Math.min(counter.current + increment, counter.target);
          return { ...counter, current: newValue };
        }));
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const skills = [
    {
      icon: Target,
      title: "Batting Technique",
      description: "Classic cover drives, pulls, and cuts with precision",
      level: 96,
      color: "red"
    },
    {
      icon: Zap,
      title: "Bowling Pace",
      description: "Consistent 140+ km/h with deadly yorkers",
      level: 94,
      color: "yellow"
    },
    {
      icon: Brain,
      title: "Game Intelligence",
      description: "Strategic field placements and match awareness",
      level: 98,
      color: "purple"
    },
    {
      icon: Shield,
      title: "Fielding Excellence",
      description: "Lightning reflexes and bullet-arm throws",
      level: 97,
      color: "blue"
    },
    {
      icon: Heart,
      title: "Leadership",
      description: "Captaincy experience and team motivation",
      level: 95,
      color: "pink"
    },
    {
      icon: Trophy,
      title: "Clutch Performance",
      description: "Rises to occasion in pressure situations",
      level: 99,
      color: "green"
    }
  ];

  // Career Statistics
  const matchStats = [
    { icon: Repeat, number: "450", label: "Total Matches", suffix: "", color: "blue" },
    { icon: Trophy, number: "320", label: "Matches Won", suffix: "", color: "green" },
    { icon: Shield, number: "120", label: "Matches Lost", suffix: "", color: "red" },
    { icon: Activity, number: "10", label: "Matches Drawn/Tied", suffix: "", color: "yellow" },
  ];

  return (
    <section ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        {/* Cricket-specific background elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 border-2 border-primary/10 rounded-full -translate-x-1/2" />
        <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-primary/20 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            <span className="text-primary">Cricket</span>{" "}
            <span className="text-white">Statistics</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Complete career statistics across all formats - Test, ODI, and T20
          </motion.p>
        </motion.div>

        {/* Match Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="text-primary">Match</span> Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {matchStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                      <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                    {Math.floor(counters[i].current)}{stat.suffix}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.2 + i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
              }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden">
                {/* Hover Background Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-white/10 border border-white/20 w-fit">
                    <skill.icon className={`w-8 h-8 md:w-10 md:h-10 text-${skill.color}-400`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm md:text-base">
                  {skill.description}
                </p>

                {/* Skill Bar */}
                <div className="relative">
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 1.7 + i * 0.1,
                        duration: 1.5,
                        ease: "easeOut"
                      }}
                      className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          x: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <span className="text-primary font-bold text-sm mt-2 block">
                    {skill.level}%
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4">
                  <Star className="w-4 h-4 text-primary/30" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Award className="w-4 h-4 text-primary/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border-2 border-primary/50 rounded-xl text-white font-bold uppercase tracking-wider text-base hover:bg-primary/20 hover:border-primary/70 transition-all shadow-lg shadow-primary/20 cursor-pointer"
          >
            <TrendingUp className="w-5 h-5" />
            View Complete Career Analysis
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}