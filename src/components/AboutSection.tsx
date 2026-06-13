"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Eye, Calendar, Target, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import { dataManager } from "@/lib/data";
import { useInView } from "framer-motion";
import ClientOnly from "./ClientOnly";

export default function AboutSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [teamMembers, setTeamMembers] = useState(dataManager.getTeamMembers());
  const router = useRouter();
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Refresh data when component mounts and set up interval for auto-refresh
  useEffect(() => {
    // Initial data load
    setTeamMembers(dataManager.getTeamMembers());
    
    // Set up interval to check for data changes every 2 seconds
    const interval = setInterval(() => {
      setTeamMembers(dataManager.getTeamMembers());
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

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

  // Check scroll position to enable/disable buttons
  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      checkScroll();
      (slider as HTMLDivElement).addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      return () => {
        (slider as HTMLDivElement).removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = (sliderRef.current as HTMLDivElement).clientWidth * 0.8; // Scroll 80% of visible width
      sliderRef.current.scrollBy({ 
        left: -scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8; // Scroll 80% of visible width
      sliderRef.current.scrollBy({ 
        left: scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const handleViewDetails = (memberId: number) => {
    router.push(`/team/${memberId}`);
  };

  // Function to get role color (keeping gradient but with white text)
  const getRoleColor = (role: string) => {
    if (role.includes("Batsman")) return "from-red-600 to-red-800";
    if (role.includes("Bowler")) return "from-red-600 to-red-800";
    if (role.includes("Allrounder")) return "from-red-600 to-red-800";
    if (role.includes("Bat/Spin")) return "from-red-600 to-red-800";
    return "from-primary to-secondary";
  };

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="relative py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-x-hidden"
    >
      {/* Background Effects */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
        />
      </motion.div>

      {/* Full-section brighter & sharper moving lines */}
      <ClientOnly>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        {smallLines.map((line, index) => (
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
              opacity: isInView ? [0, line.opacity * 3, 0] : 0,
            }}
            transition={{
              duration: line.duration,
              delay: isInView ? line.delay + index * 0.05 : 0,
              repeat: isInView ? Infinity : 0,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
      </ClientOnly>

      {/* Minimal dark gradient for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 from-black via-gray-950 to-black opacity-80" />
        <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-background blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 w-full">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold uppercase tracking-tight text-white">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >About</motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.45 }}
                className="inline-block bg-[#BB0903] text-black px-3 md:px-4 py-0.5 border-[3px] border-gray-700 shadow-[4px_4px_0_rgba(0,0,0,0.45)]"
              >Team</motion.span>
            </h2>
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "6rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 w-24 bg-primary mt-4 rounded-full mx-auto" 
            />
          </motion.div>
          
          {/* Team Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6"
          >
            Meet our talented squad of 12 cricket stars who bring their unique skills
            and passion to the game.
          </motion.p>
        </motion.div>

        {/* Slider with Player Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mt-12 group/slider"
        >
          {/* Slider Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-20 hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 -ml-6 ${
                canScrollLeft 
                  ? 'hover:bg-primary/80 hover:scale-110 cursor-pointer opacity-100' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-20 hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 -mr-6 ${
                canScrollRight 
                  ? 'hover:bg-primary/80 hover:scale-110 cursor-pointer opacity-100' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Slider Container - Fixed smooth scrolling */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory px-4 py-12"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            {teamMembers.map((member: any, index: number) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -3 : 3 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -12, rotate: 0, scale: 1.03 }}
                onClick={() => handleViewDetails(member.id)}
                className="group relative flex-none w-[240px] md:w-[260px] h-[400px] snap-start rounded-[2rem] bg-[#1a1a1a] border-2 border-white/80 cursor-pointer overflow-hidden shadow-[0_0_30px_rgba(200,255,40,0.5)] hover:shadow-[0_0_50px_rgba(200,255,40,0.85)] hover:border-white transition-shadow duration-500"
              >
                {/* Subtle top sheen */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                {/* Avatar + name (bottom-left) */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/90 shrink-0 bg-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white font-bold text-lg drop-shadow-lg truncate">
                    {member.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Progress Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center gap-2 mt-6 flex-wrap"
          >
            {teamMembers.map((_: any, index: number) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.3 + index * 0.05 }}
                onClick={() => {
                  if (sliderRef.current) {
                    const cardWidth = 280;
                    sliderRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="group"
              >
                <div className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/80 transition-all duration-300 group-hover:scale-125" />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* View All Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-primary/15 border-2 border-primary/50 rounded-xl text-white font-bold uppercase tracking-widest text-lg transition-all shadow-2xl shadow-primary/30 group"
          >
            View Full Squad
            <motion.span 
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="inline-block ml-2"
            >→</motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth scrolling for all browsers */
        .snap-mandatory {
          scroll-snap-type: x mandatory;
        }
        
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </motion.section>
  );
}