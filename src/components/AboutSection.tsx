"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Eye, Calendar, Target, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import { dataManager } from "@/lib/data";

export default function AboutSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [teamMembers, setTeamMembers] = useState(dataManager.getTeamMembers());
  const router = useRouter();

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
      slider.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      return () => {
        slider.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8; // Scroll 80% of visible width
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

  const handleViewDetails = (memberId) => {
    router.push(`/team/${memberId}`);
  };

  // Function to get role color (keeping gradient but with white text)
  const getRoleColor = (role) => {
    if (role.includes("Batsman")) return "from-red-600 to-red-800";
    if (role.includes("Bowler")) return "from-red-600 to-red-800";
    if (role.includes("Allrounder")) return "from-red-600 to-red-800";
    if (role.includes("Bat/Spin")) return "from-red-600 to-red-800";
    return "from-primary to-secondary";
  };

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-x-hidden">
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

      {/* Minimal dark gradient for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 from-black via-gray-950 to-black opacity-80" />
        <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-background blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="text-primary">About</span>{" "}
              <span className="text-white">Team</span>
            </h2>
            <div className="h-1 w-24 bg-primary mt-4 rounded-full mx-auto" />
          </div>
          
          {/* Team Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6"
          >
            Meet our talented squad of 12 cricket stars who bring their unique skills
            and passion to the game.
          </motion.p>
        </motion.div>

        {/* Slider with Player Cards */}
        <div className="relative mt-12 group/slider">
          {/* Slider Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 hidden md:block">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 -ml-6 ${
                canScrollLeft 
                  ? 'hover:bg-primary/80 hover:scale-110 cursor-pointer opacity-100' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 hidden md:block">
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 -mr-6 ${
                canScrollRight 
                  ? 'hover:bg-primary/80 hover:scale-110 cursor-pointer opacity-100' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slider Container - Fixed smooth scrolling */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory px-4 py-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-none w-[240px] md:w-[260px] snap-start py-2"
              >
                <div className="group relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-2xl overflow-visible hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 h-[420px] flex flex-col">
                  {/* Hover effect without scale transform */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/0 via-primary/0 to-transparent group-hover:from-primary/10 group-hover:via-transparent transition-all duration-500 rounded-2xl pointer-events-none" />
                  
                  {/* Player Image Container */}
                  <div className="relative h-[260px] overflow-hidden rounded-t-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80" />
                    
                    {/* Player Number */}
                    <div className="absolute top-4 right-4 bg-primary/90 text-white text-lg font-black w-10 h-10 rounded-full flex items-center justify-center border-2 border-white/30 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      {member.number}
                    </div>
                    
                    {/* Country/Team Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300">
                      <span className="text-xs font-semibold text-white">{member.country}</span>
                    </div>
                  </div>

                  {/* Player Info */}
                  <div className="p-3 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg text-center group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    {/* Role Badge with dynamic color and white text */}
                    <div className={`inline-block mx-auto px-3 py-1 rounded-full bg-gradient-to-r ${getRoleColor(member.role)} mb-2 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <p className="text-white font-semibold text-xs">
                        {member.role}
                      </p>
                    </div>
                    
                    {/* View Details Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleViewDetails(member.id)}
                      className="mt-auto py-2 bg-primary/20 border border-primary/50 rounded-lg text-white font-semibold text-xs hover:bg-primary/40 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <Eye className="w-3 h-3 group-hover/btn:animate-pulse" />
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {teamMembers.map((_, index) => (
              <button
                key={index}
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
              </button>
            ))}
          </div>
        </div>

        {/* View All Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-primary/15 border-2 border-primary/50 rounded-xl text-white font-bold uppercase tracking-widest text-lg    transition-all shadow-2xl shadow-primary/30 group">
            View Full Squad
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
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
    </section>
  );
}