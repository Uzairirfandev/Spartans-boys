"use client";

import { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
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
    transition: { duration: 0.7, ease: easeOut },
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
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-champ font-extrabold uppercase tracking-tight text-white">
            <span className="inline-block">Cricket</span>{" "}
            <span className="inline-block bg-[#BB0903] text-black px-3 md:px-4 py-0.5 -rotate-3 border-[3px] border-black shadow-[4px_4px_0_rgba(0,0,0,0.45)]">Insights</span>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {videos.slice(0, 3).map((video: any, index: number) => (
            <Link key={video.id} href={`/video/${video.slug}`}>
              <motion.article
                variants={cardVariants}
                whileHover="hover"
                className="group cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden rounded-2xl">
                  <img
                    src={video.image}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="pt-5 flex flex-col">
                  <h3 className="font-champ font-bold text-xl md:text-2xl text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    {video.date}
                  </div>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    {video.excerpt}
                  </p>
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
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group cursor-pointer"
            >
              View All Cricket Posts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


