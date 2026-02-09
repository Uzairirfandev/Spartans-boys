
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1715270543277-c22edef3caac?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618787114131-c033cac69dbb?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661881922562-e819632c451a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508100134119-f93388e60d95?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1529510078431-fefe4d9d8aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIzfHxmb290YmFsbHxlbnwwfHwwfHx8MA%3D%3D", 
];

export default function GallerySection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-400">
            Captured moments from training, matches, and life on and off the field.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Custom Masonry-like Grid with extra image to fill gap */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {galleryImages.map((src, index) => {
            // Random height variation for true masonry look
            const isTall = index % 3 === 0 || index % 5 === 2;
            const heightClass = isTall ? "h-[400px] md:h-[500px]" : "h-[280px] md:h-[350px]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
                className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-800 group break-inside-avoid ${heightClass}`}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 md:mt-24"
        >
          <motion.a
            href="/gallery"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary/10 border-2 border-primary/50 rounded-xl text-primary font-bold uppercase tracking-wider text-lg hover:bg-primary/20 hover:border-primary/70 transition-all shadow-lg shadow-primary/20"
          >
            View Full Gallery
            <ArrowRight className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}