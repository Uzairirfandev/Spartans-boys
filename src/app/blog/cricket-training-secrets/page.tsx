"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

export default function CricketTrainingSecretsPost() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-background via-black/50 to-background text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cricket Insights
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Dec 28, 2025
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              6 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Training Secrets That Changed My <span className="text-primary">Cricket Game</span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">By Professional Cricketer</span>
            </div>
            <div className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full">
              <span className="text-primary font-semibold text-sm">Training</span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Cricket training"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-xl text-white font-semibold mb-8">
              The daily routines, batting drills, and bowling techniques that helped me go from good to elite level performance in cricket.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">The Morning Routine</h2>
            <p>
              Every elite cricketer's day starts before sunrise. My routine begins at 5:30 AM with a 20-minute meditation session to clear the mind and focus on the day's training objectives. This mental preparation is just as crucial as the physical work that follows.
            </p>

            <p>
              Breakfast is carefully planned – high protein, complex carbs, and hydration that fuels the intense training sessions ahead. No shortcuts here. What you put into your body directly impacts what you can get out of it during those crucial hours in the nets.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Batting Practice Regimen</h2>
            <p>
              My batting practice is divided into specific segments, each targeting different aspects of the game. The first hour focuses on defensive techniques – the leave, the block, the forward defense. These are the foundations that prevent dismissals and build innings.
            </p>

            <p>
              The second hour is all about shot selection and power. I practice specific shots for different bowling types – the cover drive for pace bowlers, the sweep against spin, the pull shot for short-pitched deliveries. Repetition builds muscle memory, but intelligent repetition builds match awareness.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Bowling Precision Training</h2>
            <p>
              Bowling isn't just about speed – it's about precision, variation, and understanding the batsman's weakness. My training includes extensive video analysis of batsmen, identifying their scoring areas, and developing deliveries that exploit those vulnerabilities.
            </p>

            <p>
              I spend hours perfecting my run-up, ensuring every step is consistent and builds to the same release point. The wrist position, the seam orientation, the follow-through – every detail matters when you're trying to dismiss world-class batsmen.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Fielding and Fitness</h2>
            <p>
              Modern cricket demands exceptional fitness. My training includes explosive power exercises, agility drills, and endurance work. A cricketer needs to be able to dive for catches, sprint between wickets, and maintain focus for long periods in the field.
            </p>

            <p>
              Fielding practice is often neglected but it's what separates good players from great ones. I practice specific scenarios – catching at slip, boundary saves, direct hits from the deep. These skills win matches and save crucial runs.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Mental Preparation</h2>
            <p>
              The mental game is where matches are won and lost. I work with sports psychologists to develop techniques for handling pressure, maintaining concentration, and staying positive even when things aren't going well.
            </p>

            <p>
              Visualization is a key part of my routine. Before every match, I spend time visualizing success – seeing myself play perfect shots, take crucial wickets, and contribute to team victories. The mind believes what it sees repeatedly.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Recovery and Nutrition</h2>
            <p>
              Training breaks you down, but recovery builds you stronger. Ice baths, stretching, proper sleep, and nutrition timing are non-negotiable parts of my routine. The 24 hours after training are when actual improvement happens.
            </p>

            <p>
              I track everything – sleep patterns, heart rate variability, energy levels. This data helps optimize training intensity and prevent overtraining, which is as dangerous as undertraining in professional cricket.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">The Elite Mindset</h2>
            <p>
              What separates elite cricketers from good ones isn't just talent – it's the daily commitment to improvement when no one is watching. The extra hours in the gym, the additional bowling sessions, the detailed video analysis – that's where greatness is built.
            </p>

            <p>
              Consistency over intensity. Learning from failures. Supporting teammates. Respecting the game. These principles guide my training and my career. They're not secrets – they're the fundamental truths of cricket excellence.
            </p>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Related Cricket Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/cricket-journey">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:border-primary/40 transition-all"
              >
                <h4 className="text-lg font-bold text-primary mb-2">My Journey to Professional Cricket</h4>
                <p className="text-gray-400 text-sm">From street cricket to international stadiums</p>
              </motion.div>
            </Link>
            
            <Link href="/blog/handling-pressure-cricket">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:border-primary/40 transition-all"
              >
                <h4 className="text-lg font-bold text-primary mb-2">Dealing with Pressure in Big Cricket Matches</h4>
                <p className="text-gray-400 text-sm">Mindset tips for high-stakes games</p>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
