"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

export default function CricketNutritionPost() {
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
              Oct 5, 2025
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              10 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Nutrition That Fuels a Professional <span className="text-primary">Cricketer</span>
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">By Professional Cricketer</span>
            </div>
            <div className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full">
              <span className="text-primary font-semibold text-sm">Nutrition</span>
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
            src="https://images.unsplash.com/photo-1589802829985-817e47b9ce0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Cricket nutrition"
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
              My current meal plan, supplements, and fitness strategy that keeps energy high and recovery fast during intense cricket seasons.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">The Foundation: Daily Nutrition Plan</h2>
            <p>
              Professional cricket demands a nutrition strategy that's as precise as my batting technique. My day starts with a breakfast that balances complex carbohydrates and high-quality protein – typically oatmeal with eggs and a side of Greek yogurt. This fuels morning training sessions without weighing me down.
            </p>

            <p>
              Lunch is about recovery and preparation. Grilled chicken or fish with quinoa and vegetables provides the protein needed for muscle repair while keeping me light for afternoon sessions. I avoid heavy meals that could affect my training performance.
            </p>

            <p>
              Dinner focuses on replenishment. More carbohydrates, moderate protein, and plenty of vegetables. The timing is crucial – I eat within 30 minutes of training ending when my body is most receptive to nutrient absorption.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Match Day Nutrition Strategy</h2>
            <p>
              Match days require a completely different approach. I reduce fiber intake 24 hours before the game to avoid digestive issues. The focus shifts to easily digestible energy sources – bananas, white rice, and lean proteins that won't sit heavy in my stomach.
            </p>

            <p>
              Hydration is non-negotiable. I start hydrating the day before matches, not just on game day. Electrolyte drinks are part of my routine, especially in hot conditions where I can lose up to 3 liters of sweat during a day's play.
            </p>

            <p>
              During matches, I have specific nutrition breaks. A small banana between overs, energy gels at strategic intervals, and always water with electrolytes. These aren't random – they're timed based on my body's energy expenditure patterns.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Supplements That Make a Difference</h2>
            <p>
              While food is the foundation, targeted supplements help optimize performance. I take vitamin D3 year-round – crucial for cricketers who train indoors and outdoors. Magnesium helps with muscle function and recovery.
            </p>

            <p>
              Protein supplements are strategic. A whey protein shake immediately after training sessions kickstarts muscle recovery. Before bed, casein protein provides slow-release amino acids throughout the night, reducing morning muscle soreness.
            </p>

            <p>
              I'm careful about what I take – everything is tested and approved. No shortcuts, no questionable substances. Just science-backed nutrition that supports my body's natural processes.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Recovery Nutrition</h2>
            <p>
              What I eat after a match is as important as what I eat before. The first 30 minutes post-match are crucial for recovery. I have a recovery shake with 3:1 carbohydrate to protein ratio, plus tart cherry juice for its anti-inflammatory properties.
            </p>

            <p>
              The evening after intense matches focuses on anti-inflammatory foods. Salmon, sweet potatoes, spinach, and berries help reduce muscle inflammation. I also increase my intake of omega-3 fatty acids, which aid in joint recovery and brain function.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Hydration Science</h2>
            <p>
              Proper hydration goes beyond drinking water. I monitor my urine color – pale yellow means I'm hydrated, dark yellow means I need more fluids. I also track my body weight before and after training to calculate fluid loss.
            </p>

            <p>
              In hot conditions, I add salt tablets to my water to maintain electrolyte balance. Sodium is crucial for nerve function and muscle contraction. I've learned that cramping often comes from electrolyte imbalance, not just dehydration.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Seasonal Adjustments</h2>
            <p>
              My nutrition changes with the cricket calendar. During intense tournament periods, I increase caloric intake by 15-20% to maintain energy levels. The focus shifts to more carbohydrates for sustained energy release.
            </p>

            <p>
              In off-season, the priority changes to body composition. Slightly lower calories, more protein, and increased focus on nutrient density. This helps me enter pre-season training at optimal physical condition.
            </p>

            <p>
              I also adjust for different playing conditions. In hot, humid climates, I increase sodium and potassium intake. In cooler conditions, I focus more on complex carbohydrates for sustained energy release.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">The Mental Side of Nutrition</h2>
            <p>
              Nutrition isn't just physical – it's mental too. I've noticed that when I eat well, I make better decisions on the field. There's clarity and focus that comes from proper fueling.
            </p>

            <p>
              I avoid foods that cause brain fog or energy crashes. No heavy meals before important matches. No excessive sugar that leads to energy spikes and crashes. Nutrition is as much about consistency as it is about quality.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Key Principles</h2>
            <p>
              After years of trial and error, working with nutritionists, and listening to my body, I've developed some core principles that guide my eating habits:
            </p>

            <p>
              <strong>Timing is everything.</strong> When I eat matters as much as what I eat. Pre-training, post-training, and between meals all serve different purposes.
            </p>

            <p>
              <strong>Quality over quantity.</strong> I focus on nutrient-dense foods rather than just meeting calorie targets. Every meal should serve a purpose in my performance or recovery.
            </p>

            <p>
              <strong>Individualization.</strong> What works for my teammates might not work for me. I've learned to listen to my body's signals and adjust accordingly. Blood tests, energy levels, and recovery rates all guide my choices.
            </p>

            <p>
              <strong>Consistency creates excellence.</strong> Perfect nutrition for one day doesn't matter. It's the daily commitment to fueling properly that separates good cricketers from great ones.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Looking Forward</h2>
            <p>
              Nutrition science evolves, and so does my approach. I'm constantly learning, experimenting, and refining my strategies. What works today might be improved upon tomorrow.
            </p>

            <p>
              The goal is simple: to give my body the fuel it needs to perform at the highest level, recover quickly, and maintain health throughout a long cricket career. Every meal is an investment in my performance and longevity in the game I love.
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
