"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Youtube, Play, Upload } from "lucide-react";
import Link from "next/link";
import { dataManager } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  hover: {
    y: -10,
    scale: 1.04,
    boxShadow: "0 20px 40px -10px rgba(232, 248, 7, 0.2)",
    transition: { duration: 0.3 },
  },
};

export default function BlogSection() {
  const [showVideoUpload, setShowVideoUpload] = useState(false);
  const [videos, setVideos] = useState(dataManager.getVideos());

  // Refresh data when component mounts and set up interval for auto-refresh
  useEffect(() => {
    // Initial data load
    setVideos(dataManager.getVideos());
    
    // Set up interval to check for data changes every 2 seconds
    const interval = setInterval(() => {
      setVideos(dataManager.getVideos());
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

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
          transition={{ duration: 0.9 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Cricket <span className="text-primary">Insights</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Training tips, match strategies, and life as a professional cricketer.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* YouTube Video Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-black/40 backdrop-blur-md border border-primary/30 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cricket Video Hub</h3>
                  <p className="text-gray-400 text-sm">Upload your cricket training videos</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideoUpload(!showVideoUpload)}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/80 transition-colors"
              >
                <Upload className="w-4 h-4" />
                {showVideoUpload ? 'Close Upload' : 'Upload Video'}
              </motion.button>
            </div>

            {/* Video Upload Form */}
            {showVideoUpload && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-4 bg-black/30 rounded-lg border border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Video Title</label>
                    <input
                      type="text"
                      placeholder="Enter video title..."
                      className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-primary focus:outline-none">
                      <option>Batting Practice</option>
                      <option>Bowling Practice</option>
                      <option>Fielding Drills</option>
                      <option>Match Highlights</option>
                      <option>Training Tips</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Video File</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        accept="video/*"
                        className="flex-1 px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-black"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Upload to YouTube
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {videos.map((video, index) => (
            <Link key={video.id} href={`/video/${video.slug}`}>
              <motion.article
                variants={cardVariants}
                whileHover="hover"
                className="group cursor-pointer bg-gray-950/70 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-lg shadow-black/40 transition-all duration-400 hover:border-primary/40 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 md:h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent/30" />
                  <div className="absolute top-3 left-3 px-3 py-1.5 bg-primary/90 text-black text-xs font-bold rounded-full">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col bg-background flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {video.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {video.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                    {video.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors mt-auto">
                    Watch Video
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2 duration-300" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link href="/blog/cricket-journey">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border-2 border-primary/50 rounded-xl text-primary font-bold uppercase tracking-wider text-base hover:bg-primary/20 hover:border-primary/70 transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
              View All Cricket Posts
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


