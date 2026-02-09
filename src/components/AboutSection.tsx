
"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  // 40 small fast-moving lines — brighter & sharper (same as Hero)
  const smallLines = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,                     // full width spread
    duration: 3 + Math.random() * 3,            // fast: 3–6 seconds
    delay: Math.random() * 5,
    direction: Math.random() > 0.5 ? "up" : "down",
    length: 60 + Math.random() * 140,           // short segments
    opacity: 0.25 + Math.random() * 0.35,       // higher base opacity
  }));

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Full-section brighter & sharper moving lines */}
      <div className="absolute inset-0 pointer-events-none">
        {smallLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute w-0.5  from-transparent via-primary/90 to-transparent rounded-full blur-[0.5px]" // sharper blur
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
              opacity: [0, line.opacity * 3, 0], // stronger peak glow
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

      {/* Minimal dark gradient for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0  from-black via-gray-950 to-black opacity-80" />
        {/* Subtle green accent */}
        <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-background blur-3xl opacity-40" />
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
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="text-primary">About</span>{" "}
              <span className="text-white">Me</span>
            </h2>
            <div className="h-1 w-24 bg-primary mt-4 rounded-full" />
          </div>
        </motion.div>

        {/* Grid with top alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Intro Paragraph */}
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur...
            </p>

            {/* Biography */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Biography —
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Stats —
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Club football: 694 matches, 650 goals
              </p>
            </div>

            {/* Clubs */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Clubs —
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  Santos FC (1956-1974)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  New York Cosmos (1975-1977)
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right - Player Image (top aligned with heading) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-800">
              <img
                src="https://template.viserlab.com/footme/demo/assets/images/about/about.png"
                alt="Player in action"
                className="w-full h-auto object-cover brightness-90 contrast-110 max-h-[700px] lg:max-h-[800px]"
              />
              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}