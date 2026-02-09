"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
       slug: "my-journey-pro-footballer",
    title: "My Journey to Become a Pro Footballer",
    excerpt: "From street football in Lahore to international pitches – the real story behind the grind, failures, and breakthroughs that shaped my career.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://plus.unsplash.com/premium_photo-1664301740591-72c1099d6728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Career",
  },
  {
    slug: "training-secrets",
    title: "Training Secrets That Changed My Game",
    excerpt: "The daily routines, diet hacks, and mental preparation techniques that helped me go from good to elite level performance.",
    date: "Dec 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1537882111161-c3379a777c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY3fHxmb290YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Training",
  },
  {
    slug: "big-match-pressure",
    title: "Dealing with Pressure in Big Matches",
    excerpt: "How I handle high-stakes games, crowd noise, and expectations – mindset tips that actually work under real pressure.",
    date: "Nov 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1527871252447-4ce32da643c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk5fHxmb290YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Mindset",
  },
  {
    slug: "nutrition-that-fuels-athlete",
    title: "Nutrition That Fuels a Professional Athlete",
    excerpt: "My current meal plan, supplements, and timing strategy that keeps energy high and recovery fast during intense seasons.",
    date: "Oct 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1609869496575-c9c35de76498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA2fHxmb290YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Nutrition",
  },
];

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
            Latest <span className="text-primary">Blog</span> Posts
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Insights from training, mindset, recovery, and life as a professional footballer.
          </p>
          <div className="h-1 w-20 bg-background mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {blogPosts.map((post, index) => (
         <Link key={post.slug} href={`/blog/${post.slug}`}>
    <motion.article
      variants={cardVariants}
      whileHover="hover"
      className="group cursor-pointer bg-gray-950/70 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-lg shadow-black/40 transition-all duration-400 hover:border-primary/40 flex flex-col"
    >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent/30" />
                <div className="absolute top-3 left-3 px-3 py-1.5 bg-primary/90 text-black text-xs font-bold rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col bg-background flex-grow">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary/80 transition-colors mt-auto">
                  Read More
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
          <Link href="/blog/my-journey-pro-footballer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border-2 border-primary/50 rounded-xl text-primary font-bold uppercase tracking-wider text-base hover:bg-primary/20 hover:border-primary/70 transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


