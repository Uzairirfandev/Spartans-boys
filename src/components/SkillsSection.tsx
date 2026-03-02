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
  Award
} from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counters, setCounters] = useState([
    { current: 0, target: 900, suffix: "+" },
    { current: 0, target: 5, suffix: "" },
    { current: 0, target: 7, suffix: "" },
    { current: 0, target: 2, suffix: "" }
  ]);

  useEffect(() => {
    if (isInView) {
      const duration = 1000; // 1 second for faster counting
      const steps = 40; // 40 steps for smooth animation
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
      title: "Finishing",
      description: "Precision shooting with both feet",
      level: 95,
      color: "red"
    },
    {
      icon: Zap,
      title: "Speed & Agility",
      description: "Explosive acceleration and quick direction ",
      level: 92,
      color: "yellow"
    },
    {
      icon: Brain,
      title: "Game Intelligence",
      description: "Strategic positioning and decision making",
      level: 98,
      color: "purple"
    },
    {
      icon: Shield,
      title: "Physical Strength",
      description: "Powerful physique and aerial dominance",
      level: 88,
      color: "blue"
    },
    {
      icon: Heart,
      title: "Leadership",
      description: "Captain mentality and team motivation",
      level: 96,
      color: "pink"
    },
    {
      icon: Trophy,
      title: "Trophy Mentality",
      description: "Clutch performer in crucial moments",
      level: 99,
      color: "green"
    }
  ];

  const achievements = [
    { number: "900+", label: "Career Goals" },
    { number: "5", label: "Ballon d'Or" },
    { number: "7", label: "League Titles" },
    { number: "2", label: "European Cups" }
  ];

  return (
    <section ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            <span className="text-primary">Elite</span>{" "}
            <span className="text-white">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Mastering every aspect of the beautiful game with precision and passion
          </motion.p>
        </motion.div>

        {/* Achievement Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              >
                <h3 className="text-4xl md:text-5xl font-black text-primary mb-2">
                  {Math.floor(counters[i].current)}{counters[i].suffix}
                </h3>
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                  {achievement.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
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
                delay: 1 + i * 0.1,
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
                        delay: 1.5 + i * 0.1,
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
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border-2 border-primary/50 rounded-xl text-primary font-bold uppercase tracking-wider text-base hover:bg-primary/20 hover:border-primary/70 transition-all shadow-lg shadow-primary/20 cursor-pointer"
          >
            <Trophy className="w-5 h-5" />
            View Complete Career Stats
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
