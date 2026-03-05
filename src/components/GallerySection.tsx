"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    src: "/images/group.jpeg",
    title: "Team Training Session",
    category: "Training",
    size: "large"
  },
  {
    src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=449&auto=format&fit=crop",
    title: "Match Day",
    category: "Match",
    size: "medium"
  },
  {
    src: "https://images.unsplash.com/photo-1618787114131-c033cac69dbb?q=80&w=435&auto=format&fit=crop",
    title: "Victory Celebration",
    category: "Celebration",
    size: "small"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661881922562-e819632c451a?q=80&w=387&auto=format&fit=crop",
    title: "Stadium View",
    category: "Venue",
    size: "medium"
  },
  {
    src: "/images/rrrrrrrrrrrr.jpeg",
    title: "Team Huddle",
    category: "Training",
    size: "large"
  },
  {
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=386&auto=format&fit=crop",
    title: "Action Shot",
    category: "Match",
    size: "small"
  },
  {
    src: "https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800&auto=format&fit=crop",
    title: "Fan Moment",
    category: "Fans",
    size: "medium"
  },
  {
    src: "https://images.unsplash.com/photo-1529510078431-fefe4d9d8aab?w=500&auto=format&fit=crop&q=60",
    title: "Training Drills",
    category: "Training",
    size: "small"
  },

  {
    src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=405&auto=format&fit=crop",
    title: "Team Photo",
    category: "Team",
    size: "medium"
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", "Training", "Match", "Celebration", "Fans", "Team"];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Get size classes based on image size
  const getSizeClass = (size: string) => {
    switch(size) {
      case "large":
        return "md:row-span-2 md:col-span-2 min-h-[400px]";
      case "medium":
        return "md:row-span-1 md:col-span-1 min-h-[250px]";
      case "small":
        return "md:row-span-1 md:col-span-1 min-h-[200px]";
      default:
        return "md:row-span-1 md:col-span-1 min-h-[250px]";
    }
  };

  return (
    <>
      <section className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          {/* Header with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold tracking-wider uppercase">Our Memories</span>
            <h2 className="text-5xl md:text-6xl font-black mt-2 mb-4">
              Photo <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Captured moments from training, matches, and life on and off the field.
            </p>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat.toLowerCase())}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.toLowerCase()
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Modern Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-6">
            {filteredImages.map((image: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => openModal(galleryImages.findIndex(img => img.src === image.src))}
                className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group cursor-pointer ${getSizeClass(image.size)}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {image.category}
                  </span>
                </div>

                {/* Image Info - Slide up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-sm">Click to enlarge</p>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group"
            >
              Explore Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-14 right-0 text-white/70 hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-primary transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2 backdrop-blur-sm"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-primary transition-colors bg-black/30 hover:bg-black/50 rounded-full p-2 backdrop-blur-sm"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto"
                />
                
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">{galleryImages[selectedImage].title}</h3>
                  <p className="text-gray-300">{galleryImages[selectedImage].category}</p>
                </div>
              </div>

              {/* Counter */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}