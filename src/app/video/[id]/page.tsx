"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Eye, ThumbsUp, MessageCircle, Share2, Download, Play, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sample video data
const videoData = [
  {
    id: "cricket-training-basics",
    title: "Cricket Training Basics for Beginners",
    description: "Learn the fundamental cricket training techniques that every aspiring cricketer should master. From basic batting stance to bowling action, this comprehensive guide covers it all.",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "15:24",
    views: "125432",
    likes: "8234",
    comments: "342",
    category: "Training",
    uploadDate: "2025-12-15",
    author: "Professional Cricketer",
    tags: ["cricket", "training", "beginners", "batting", "bowling"]
  },
  {
    id: "advanced-batting-techniques",
    title: "Advanced Batting Techniques Masterclass",
    description: "Take your batting to the next level with professional techniques including cover drive, pull shot, hook shot, and advanced footwork patterns used by international cricketers.",
    thumbnail: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "22:18",
    views: "89765",
    likes: "6891",
    comments: "198",
    category: "Batting",
    uploadDate: "2025-11-28",
    author: "Professional Cricketer",
    tags: ["cricket", "batting", "advanced", "techniques", "masterclass"]
  },
  {
    id: "cricket-fielding-drills",
    title: "Essential Cricket Fielding Drills",
    description: "Improve your fielding skills with these proven drills used by professional teams. Catching practice, throwing accuracy, and ground fielding techniques covered in detail.",
    thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "18:45",
    views: "156234",
    likes: "12456",
    comments: "567",
    category: "Fielding",
    uploadDate: "2025-10-20",
    author: "Professional Cricketer",
    tags: ["cricket", "fielding", "drills", "catching", "throwing"]
  },
  {
    id: "cricket-match-highlights",
    title: "Epic Cricket Match Highlights 2025",
    description: "Watch the most exciting moments from recent cricket matches including amazing catches, huge sixes, and match-winning performances that will leave you speechless.",
    thumbnail: "https://images.unsplash.com/photo-1589802829985-817e47b9ce0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:30",
    views: "342567",
    likes: "28934",
    comments: "1234",
    category: "Highlights",
    uploadDate: "2025-12-01",
    author: "Professional Cricketer",
    tags: ["cricket", "highlights", "matches", "sixes", "amazing catches"]
  }
];

export default function VideoDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [video, setVideo] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      const foundVideo = videoData.find(v => v.id === params.id);
      setVideo(foundVideo || null);
      setIsLoading(false);
    }
  }, [params?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading video...</p>
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Video Not Found</h1>
          <Link 
            href="/#blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Videos
          </Link>
        </div>
      </div>
    );
  }

  // Format numbers for display
  const formatNumber = (num) => {
    return parseInt(num).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link 
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cricket Videos
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden bg-black shadow-2xl aspect-video"
            >
              <iframe
                src={video.videoUrl}
                title={video.title}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </motion.div>

            {/* Video Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6"
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {video.title}
              </h1>

              {/* Video Stats */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{formatNumber(video.views)} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{video.uploadDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isLiked 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  {formatNumber(video.likes)}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {formatNumber(video.comments)}
                </motion.button>
              </div>

              {/* Description */}
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-white mb-3">Description</h2>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {video.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {video.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Comments Section */}
            {showComments && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Comments ({formatNumber(video.comments)})</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">A</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-white text-sm">Ahmed Cricket Fan</span>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-gray-300 text-sm">Amazing video! Really helped improve my batting technique.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-white text-sm">Sarah Cricket</span>
                        <span className="text-xs text-gray-500">5 hours ago</span>
                      </div>
                      <p className="text-gray-300 text-sm">The fielding drills are exactly what I needed. Thank you for sharing!</p>
                    </div>
                  </div>

                  {/* Add Comment Input */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-800">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">Y</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Author Info */}
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Channel</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-white text-sm truncate">{video.author}</h4>
                    <p className="text-xs text-gray-400">Cricket Professional</p>
                  </div>
                </div>
                <button className="w-full py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/80 transition-colors text-sm">
                  Subscribe
                </button>
              </div>

              {/* Related Videos */}
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Related Videos</h3>
                <div className="space-y-3">
                  {videoData.filter(v => v.id !== video.id).slice(0, 3).map((relatedVideo, index) => (
                    <Link key={relatedVideo.id} href={`/video/${relatedVideo.id}`}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex gap-3 p-2 rounded-lg hover:bg-black/60 transition-colors cursor-pointer"
                      >
                        <div className="w-20 h-14 rounded flex-shrink-0 overflow-hidden bg-gray-800">
                          <img
                            src={relatedVideo.thumbnail}
                            alt={relatedVideo.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-medium text-white line-clamp-2 mb-1">{relatedVideo.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <span>{formatNumber(relatedVideo.views)} views</span>
                            <span>•</span>
                            <span>{relatedVideo.duration}</span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}