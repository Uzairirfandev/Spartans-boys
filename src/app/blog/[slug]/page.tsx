"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  MapPin,
  User,
  Tag,
  Share2,
  Heart,
  MessageCircle,
  Eye,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import { notFound, usePathname, useParams } from "next/navigation";
import { useState, useEffect } from "react";

// ── Blog posts data ────────────────────────────────────────────────
const blogPosts = [
  {
    slug: "my-journey-pro-footballer",
    title: "My Journey to Becoming a Pro Footballer",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Career Journey",
    location: "Madrid, Spain",
    author: "Cristiano Ronaldo",
    authorBio: "Professional Footballer, Global Icon",
    views: "15.2K",
    likes: "892",
    comments: "47",
    image:
      "https://plus.unsplash.com/premium_photo-1664301740591-72c1099d6728?w=1200&auto=format&fit=crop&q=80",
    content: `<p>My journey to becoming a professional footballer began with a simple love for the game, playing barefoot in the streets as a child and dreaming of stadium lights. Along the way, I faced countless challenges—injuries, losses, and balancing studies with relentless training—but each obstacle taught me resilience, discipline, and the importance of teamwork.</p>
    
    <p>Hours of practice on dribbling, passing, shooting, and understanding the game gradually shaped my skills, while guidance from mentors and participation in local tournaments gave me direction and confidence. The breakthrough came when I joined a professional academy, where every match and training session pushed me beyond my limits, teaching me focus, dedication, and mental strength.</p>
    
    <p>Even now, the journey continues, fueled by passion and the dream of representing my country, proving that becoming a pro footballer is not just about talent, but perseverance, hard work, and an unshakable love for the beautiful game.</p>`,
  },
  {
    slug: "another-post",
    title: "Another Football Journey",
    date: "February 20, 2026",
    readTime: "10 min read",
    category: "Personal Story",
    location: "Lisbon, Portugal",
    author: "Lionel Messi",
    authorBio: "Football Legend, 8x Ballon d'Or",
    views: "20.5K",
    likes: "1.2K",
    comments: "89",
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1200&auto=format&fit=crop&q=80",
    content: `<p>This is another sample blog post content.</p>`,
  },
];

// ── Related posts ──────────────────────────────────────────────────
const relatedPosts = [
  {
    slug: "training-secrets",
    title: "Training Secrets That Changed My Game",
    image:
      "https://images.unsplash.com/photo-1537882111161-c3379a777c8b?w=600",
    category: "Training Tips",
    date: "Dec 28, 2025",
    readTime: "6 min",
    views: "12.8K",
  },
  {
    slug: "big-match-pressure",
    title: "Dealing with Pressure in Big Matches",
    image:
      "https://images.unsplash.com/photo-1527871252447-4ce32da643c6?w=600",
    category: "Mindset",
    date: "Nov 10, 2025",
    readTime: "7 min",
    views: "18.5K",
  },
  {
    slug: "nutrition-that-fuels-athlete",
    title: "Nutrition That Fuels a Professional Athlete",
    image:
      "https://images.unsplash.com/photo-1609869496575-c9c35de76498?w=600",
    category: "Health & Fitness",
    date: "Oct 5, 2025",
    readTime: "10 min",
    views: "14.3K",
  },
];

export default function BlogPage() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}${pathname}`;
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  const socialShareUrl = isClient ? window.location.href : "";
  const shareTitle = encodeURIComponent(post.title);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white pb-12 md:pb-16 lg:pb-24">
      {/* Background glow effects - responsive sizes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 sm:-top-16 sm:-left-16 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 sm:-bottom-16 sm:-right-16 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-primary transition-colors group text-sm sm:text-base"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 group-hover:-translate-x-1 sm:group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span className="text-xs sm:text-sm md:text-base">Back to Home</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 sm:mb-8 md:mb-10"
            >
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1.5 bg-primary/20 border border-primary/30 rounded-full text-xs sm:text-sm font-medium text-primary">
                  {post.category}
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-gray-400 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{post.views} views</span>
                  </div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-4 sm:mb-5 md:mb-6">
                <span className="text-primary">{post.title.split(" ")[0]}</span>{" "}
                {post.title.split(" ").slice(1).join(" ")}
              </h1>

              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-7 text-gray-400 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{post.comments}</span>
                </div>
                <button className="flex items-center gap-1.5 sm:gap-2 hover:text-primary transition-colors duration-300">
                  <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Save</span>
                </button>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none text-gray-200 leading-relaxed sm:leading-relaxed md:leading-relaxed prose-headings:text-white prose-headings:font-bold prose-a:text-primary hover:prose-a:underline mb-8 sm:mb-10 md:mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="border-t border-white/10 pt-6 sm:pt-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                <span className="flex items-center gap-2 text-gray-300 font-medium text-sm sm:text-base">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  Share this article
                </span>

                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                  <button
                    onClick={handleCopyLink}
                    className="p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg sm:rounded-xl text-gray-300 hover:text-primary hover:border-primary transition-all duration-300"
                    title="Copy link"
                    aria-label="Copy article link"
                  >
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(socialShareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg sm:rounded-xl text-gray-300 hover:text-primary hover:border-primary transition-all duration-300"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(socialShareUrl)}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg sm:rounded-xl text-gray-300 hover:text-primary hover:border-primary transition-all duration-300"
                    title="Share on X/Twitter"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(socialShareUrl)}&title=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg sm:rounded-xl text-gray-300 hover:text-primary hover:border-primary transition-all duration-300"
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-4 sm:space-y-6 md:space-y-8 lg:sticky lg:top-6 xl:top-8"
            >
              {/* Author Card */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/30 to-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white truncate">
                      {post.author}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">
                      {post.authorBio}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-5 md:gap-6 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>

              {/* Article Details */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-2">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Article Details
                </h3>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-gray-400 uppercase text-xs">Location</p>
                      <p className="text-white font-medium truncate">{post.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 uppercase text-xs">Published</p>
                      <p className="text-white font-medium">{post.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 uppercase text-xs">Reading Time</p>
                      <p className="text-white font-medium">{post.readTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["Football", post.category, "Career", "Success", "Professional"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 sm:px-3 sm:py-1 bg-primary/20 border border-primary/30 rounded-full text-xs text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RELATED POSTS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 sm:mt-16 md:mt-20 border-t border-white/10 pt-8 sm:pt-10 md:pt-12"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 md:mb-4">
              <span className="text-primary">Related</span> Stories
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              More insights from my football journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {relatedPosts.map((item: any, index: number) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group h-full"
              >
                <Link href={`/blog/${item.slug}`} className="block h-full">
                  <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-medium text-primary backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1.5 sm:mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[2.5em] sm:min-h-[3em]">
                        {item.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-400 mt-auto pt-2 sm:pt-3">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="whitespace-nowrap">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="whitespace-nowrap">{item.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="whitespace-nowrap">{item.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 py-3 px-4">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-sm">Like</span>
          </button>
          <button className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">Comment</span>
          </button>
          <button className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
            <Bookmark className="w-5 h-5" />
            <span className="text-sm">Save</span>
          </button>
          <button 
            onClick={handleCopyLink}
            className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </section>
  );
}