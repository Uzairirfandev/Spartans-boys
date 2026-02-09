"use client";
 
import { motion } from "framer-motion";
import { Calendar, MapPin, Weight, Ruler } from "lucide-react";
 
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
 
  const stats = [
    {
      icon: MapPin,
      label: "Place of Birth",
      value: "Sao Paulo, Brazil",
      color: "pink",
    },
    {
      icon: Calendar,
      label: "Date of Birth",
      value: "30th August 1992",
      color: "purple",
    },
    {
      icon: Weight,
      label: "Weight",
      value: "85kg / 85000g",
      color: "blue",
    },
    {
      icon: Ruler,
      label: "Height",
      value: "174cm / 68.5039 inch",
      color: "orange",
    },
  ];
 
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-white">
      {/* Full-screen brighter moving lines */}
      <div className="absolute inset-0 pointer-events-none">
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
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-purple-900/8" />
      </div>
 
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Text + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Text (Medium size) */}
            <div className="relative text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="mb-10"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black leading-tight tracking-tighter">
                  <motion.span
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="block text-primary uppercase drop-shadow-xl"
                  >
                    I AM
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="block text-white uppercase mt-2 drop-shadow-xl"
                  >
                   Cristiano 
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="block text-white uppercase mt-2 drop-shadow-xl"
                  >
                    Ronaldo
                  </motion.span>
                </h1>
              </motion.div>
 
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.85 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 }}
                className="text-3xl md:text-4xl font-light italic mb-16 tracking-wide drop-shadow-md"
                style={{ fontFamily: "'Brush Script MT', cursive, sans-serif" }}
              >
                900+ Goals. 5 Ballon d'Ors. One Legend.
              </motion.p>
 
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center justify-center md:justify-start gap-8"
              >
                <div className="hidden md:block h-32 w-0.5 bg-gradient-to-b from-transparent via-primary/70 to-transparent" />
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: "0 0 40px oklch(79.763% 0.16776 75.61 / 0.8)" }}
                  whileTap={{ scale: 0.96 }}
                  className="px-10 py-5 bg-primary/15 border-2 border-primary/50 rounded-xl text-primary font-bold uppercase tracking-widest text-lg hover:bg-primary/25 hover:border-primary hover:text-white transition-all shadow-2xl shadow-primary/30"
                >
                  My Career
                </motion.button>
              </motion.div>
            </div>
 
            {/* Right - Player Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 80 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.5, type: "spring", stiffness: 70 }}
              className="relative h-[500px] md:h-[700px] lg:h-[800px] flex items-center justify-center md:justify-end"
            >
              <img
                src="https://template.viserlab.com/footme/demo/assets/images/banner/banner.png"
                alt="Robobondo Kal"
                className="h-[70%] sm:h-[75%] md:h-[80%] lg:h-[85%] w-auto object-contain object-bottom drop-shadow-2xl brightness-95 contrast-110"
              />
            </motion.div>
          </div>
 
          {/* Bottom Stats Boxes - Enhanced Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 mb-4 max-w-6xl mx-auto">
            {[
              { icon: MapPin, label: "Place of Birth", value: "Sao Paulo, Brazil", color: "pink" },
              { icon: Calendar, label: "Date of Birth", value: "30th August 1992", color: "purple" },
              { icon: Weight, label: "Weight", value: "85kg", color: "blue" },
              { icon: Ruler, label: "Height", value: "174cm", color: "orange" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 1.6 + i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, type: "spring", stiffness: 400 }
                }}
                className="relative group"
              >
                <div className="relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 overflow-hidden hover:border-primary transition-all duration-300">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-white/10 border border-white/20">
                      <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xs md:text-sm font-semibold text-white/70 mb-2 uppercase tracking-wider text-center">
                    {stat.label}
                  </h3>

                  <p className="text-lg md:text-xl font-bold text-white text-center">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

