"use client";
 
import { motion } from "framer-motion";
 
export default function HeroSection() {
  // 40 small fast-moving lines — brighter & sharper
  const smallLines = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    duration: 3 + Math.random() * 3,
    delay: Math.random() * 5,
    direction: Math.random() > 0.5 ? "up" : "down",
    length: 60 + Math.random() * 140,
    opacity: 0.25 + Math.random() * 0.35,
  }));

  // Red smoke particles
  const smokeParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    size: 150 + Math.random() * 300,
    duration: 8 + Math.random() * 10,
    delay: Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.2,
  }));
 
  return (
    <section className="relative min-h-screen w-full flex items-start justify-center overflow-hidden bg-background text-white">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://img.freepik.com/premium-photo/vibrant-abstract-spartan-soldier-throwing-spear-with-intense-force_882313-25762.jpg?semt=ais_rp_progressive&w=740&q=80"
          alt="Spartan Warrior Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Red Smoke/Fog Animation from Bottom */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {smokeParticles.map((smoke) => (
          <motion.div
            key={smoke.id}
            className="absolute bottom-0 rounded-full"
            style={{
              left: `${smoke.x}%`,
              width: smoke.size,
              height: smoke.size,
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 50%, transparent 80%)',
              filter: 'blur(40px)',
              x: '-50%',
            }}
            initial={{
              y: '100%',
              opacity: 0,
            }}
            animate={{
              y: ['100%', '-50%', '-100%'],
              opacity: [0, smoke.opacity, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: smoke.duration,
              delay: smoke.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Additional layered smoke for more depth */}
      <div className="absolute inset-0 pointer-events-none z-14">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-96"
          style={{
            background: 'linear-gradient(to top, rgba(239, 68, 68, 0.3) 0%, transparent 100%)',
            filter: 'blur(30px)',
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Moving red light streaks */}
      <div className="absolute inset-0 pointer-events-none z-16">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            className="absolute bottom-0 w-32 h-32"
            style={{
              left: `${10 + i * 20}%`,
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Full-screen brighter moving lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {smallLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-primary/90 to-transparent rounded-full blur-[0.5px]"
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
 
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-900/20" />
      </div>
 
      {/* Main Content - Positioned at top */}
      <div className="relative z-30 w-full max-w-7xl px-6 md:px-12 lg:px-20 pt-32 md:pt-40 lg:pt-48">
        <div className="flex flex-col">
          {/* Left-aligned Text Content */}
          <div className="text-left max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mb-10"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                <motion.span
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block text-primary uppercase drop-shadow-xl"
                >
                  SPARTANS
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="block text-white uppercase mt-2 drop-shadow-xl text-6xl md:text-7xl lg:text-8xl"
                >
                  BOYS
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1 }}
              className="text-2xl md:text-3xl font-light mb-16 tracking-wide drop-shadow-md text-gray-200"
            >
              Forged in Fire • Born to Win
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-start gap-8"
            >
              <div className="hidden md:block h-32 w-0.5 bg-gradient-to-b from-transparent via-primary/70 to-transparent" />
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 0 40px oklch(79.763% 0.16776 75.61 / 0.8)" }}
                whileTap={{ scale: 0.96 }}
                className="px-10 py-5 bg-primary/20 border-2 border-primary/60 rounded-xl text-primary font-bold uppercase tracking-widest text-lg hover:bg-primary/30 hover:border-primary hover:text-white transition-all shadow-2xl shadow-primary/30 backdrop-blur-sm"
              >
                My Career
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}