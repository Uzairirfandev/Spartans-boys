"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CricketJourneyPost() {
  const router = useRouter();

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
              Jan 15, 2026
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            My Journey to <span className="text-primary">Professional Cricket</span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">By Professional Cricketer</span>
            </div>
            <div className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full">
              <span className="text-primary font-semibold text-sm">Career</span>
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
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Cricket journey"
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
              From street cricket in Karachi to international stadiums – the real story behind the grind, failures, and breakthroughs that shaped my cricket career.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Early Days in Karachi</h2>
            <p>
              My cricket journey began in the narrow streets of Karachi, where every evening after school, my friends and I would gather with worn-out cricket kits and makeshift stumps. The scorching sun, the dusty grounds, and the endless passion for the game – those were the foundations of what would become my professional career.
            </p>

            <p>
              I remember those early days vividly. The sound of tape ball hitting the concrete, the cheers from neighborhood kids, and the dream of one day playing at the National Stadium. Every match was a final, every wicket a celebration, and every six a moment of pure joy that fueled my ambition.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">The Turning Point</h2>
            <p>
              The real turning point came during a local tournament when a scout from the regional cricket academy noticed my technique. That single moment of recognition opened doors I never knew existed. Suddenly, the street cricket dreams had a legitimate path forward.
            </p>

            <p>
              Training at the academy was brutal. Early mornings, rigorous fitness sessions, and countless hours in the nets perfecting my batting stance and bowling action. There were days I wanted to quit, days I felt I wasn't good enough, but something kept me going – the unwavering belief that cricket was my destiny.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">First Professional Contract</h2>
            <p>
              Signing my first professional contract was surreal. The weight of that paper in my hands, the realization that cricket was now my career – it was everything I had worked for. But that was just the beginning. The real test was performing consistently at the highest level.
            </p>

            <p>
              My debut match taught me more than any training session ever could. The pressure, the crowd noise, the intensity of professional cricket – it was a completely different world. I learned quickly that talent alone wasn't enough; mental toughness and adaptability were equally crucial.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Lessons Along the Way</h2>
            <p>
              Throughout this journey, I've learned that cricket is more than just a game – it's a teacher of life. It teaches patience when form deserts you, resilience when critics doubt you, and humility when success comes your way.
            </p>

            <p>
              Every failure became a lesson, every setback a setup for a comeback. The injuries that threatened to end my career taught me the importance of fitness and recovery. The matches I lost taught me the value of preparation and strategy.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Looking Forward</h2>
            <p>
              Today, as I stand on international cricket fields, I carry those street cricket memories with me. The same passion that drove me to play in dusty Karachi streets now fuels my desire to represent Pakistan at the highest level.
            </p>

            <p>
              The journey continues, and with every match, every innings, every wicket, I'm still that kid from Karachi living his dream – just on a bigger stage, with higher stakes, and greater responsibility.
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
            <Link href="/blog/cricket-training-secrets">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:border-primary/40 transition-all"
              >
                <h4 className="text-lg font-bold text-primary mb-2">Training Secrets That Changed My Cricket Game</h4>
                <p className="text-gray-400 text-sm">Daily routines and drills for elite performance</p>
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
