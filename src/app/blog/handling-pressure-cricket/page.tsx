"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

export default function HandlingPressureCricketPost() {
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
              Nov 10, 2025
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              7 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Dealing with Pressure in Big <span className="text-primary">Cricket Matches</span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">By Professional Cricketer</span>
            </div>
            <div className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full">
              <span className="text-primary font-semibold text-sm">Mindset</span>
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
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Cricket pressure"
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
              How I handle high-stakes cricket games, crowd pressure, and expectations – mindset tips that work under real match pressure.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Understanding Match Pressure</h2>
            <p>
              Pressure in cricket isn't just about the scoreboard – it's about expectations, crowd noise, media scrutiny, and the weight of representing your nation. I've learned that pressure is a privilege; it means people care about your performance.
            </p>

            <p>
              The first time I walked out to bat in a crucial international match, the noise was overwhelming. Thousands of spectators, millions watching on TV, and the fate of the game resting on my shoulders. That's when I realized pressure management isn't optional – it's essential.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Pre-Match Mental Preparation</h2>
            <p>
              My pre-match routine starts 24 hours before the game. I study the opposition, analyze pitch conditions, and visualize different match scenarios. But more importantly, I prepare mentally for both success and failure.
            </p>

            <p>
              I create a pressure playlist – music that helps me focus and calm my nerves. I practice breathing exercises that lower my heart rate. I establish triggers that bring me back to the present moment when anxiety starts building.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">During the Match Techniques</h2>
            <p>
              When I'm batting under pressure, I focus on one ball at a time. The crowd disappears, the scoreboard becomes irrelevant, and I'm just facing a bowler with a ball in his hand. This simplification reduces mental clutter.
            </p>

            <p>
              Between overs, I have specific reset routines. A sip of water, a deep breath, a quick glance at the scoreboard to reassess the situation. These micro-breaks prevent pressure from accumulating and affecting decision-making.
            </p>

            <p>
              When bowling under pressure, I trust my training. I don't try hero deliveries; I focus on hitting my areas and letting the batter make mistakes. Control over variation – that's my mantra when the game is on the line.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Handling Crowd Expectations</h2>
            <p>
              Home crowds can be both motivating and intimidating. I've learned to channel their energy positively. When they cheer, it fuels my performance. When they're silent after a mistake, I use it as motivation to prove them wrong.
            </p>

            <p>
              For away matches, I embrace the hostility. The booing, the chants, the pressure – I see it as respect. They wouldn't make noise if they didn't fear what I can do. That mindset transforms pressure into power.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">The Role of Team Support</h2>
            <p>
              Cricket is a team sport, and pressure management is a collective effort. I rely on my teammates to keep me grounded. A word from the captain, a pat on the back from a senior player – these small interactions make huge differences.
            </p>

            <p>
              We have team signals for when someone is feeling pressure. A specific phrase, a gesture, a look – these non-verbal cues help us support each other without drawing attention from opponents or media.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Post-Match Reflection</h2>
            <p>
              How I handle pressure after the match is as important as during it. Whether we win or lose, I take time to reflect on my mental state. What triggered anxiety? When did I feel most confident? How did I respond to setbacks?
            </p>

            <p>
              I keep a pressure journal. I rate my mental performance on a scale of 1-10, note specific situations that caused stress, and document coping mechanisms that worked. This self-awareness helps me improve for the next high-pressure situation.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Long-Term Pressure Management</h2>
            <p>
              Consistency under pressure comes from experience and deliberate practice. I simulate pressure situations in training – practicing with crowd noise, setting up high-stakes scenarios, creating consequences for failure in practice sessions.
            </p>

            <p>
              I also work with sports psychologists who specialize in cricket. They've taught me techniques like cognitive restructuring, mindfulness, and emotional regulation. These tools aren't just for match days – they're life skills that serve me well beyond cricket.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Key Takeaways</h2>
            <p>
              Pressure doesn't disappear – you learn to dance with it. The best cricketers aren't those who never feel pressure; they're those who perform well despite it.
            </p>

            <p>
              My biggest lesson: pressure is external, but response is internal. I can't control the crowd, the media, or the match situation, but I can control my breathing, my focus, and my reaction to every challenge that comes my way.
            </p>

            <p>
              Remember: the same pressure that can break you can also make you. It's all about perspective and preparation. When you've done the work and trust your process, pressure becomes just another variable in the game – one you can handle with the right mindset.
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
            
            <Link href="/blog/cricket-training-secrets">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:border-primary/40 transition-all"
              >
                <h4 className="text-lg font-bold text-primary mb-2">Training Secrets That Changed My Cricket Game</h4>
                <p className="text-gray-400 text-sm">Daily routines and drills for elite performance</p>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
