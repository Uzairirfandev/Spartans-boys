'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { Code, Cpu, Palette, Zap, GitBranch, LayoutTemplate, FileCode, BookOpen } from "lucide-react";
import ThemeToggle from '@/components/config/theme-toggle';
import HeroSection from '@/components/ui/hero-section';
import FeatureCard from '@/components/ui/feature-card';
import FolderStructureDemo from '@/components/ui/structure-demo';

export default function Home() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark font-lato transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <header className="flex justify-between items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={25}
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
        </header>

        <main className="flex flex-col items-center">
          <HeroSection />

          {/* Features Grid */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full px-2 sm:px-0 mt-16 sm:mt-24"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 font-poppins">
              <span className="text-primary bg-clip-text">
                Key Features
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <FeatureCard 
                icon={<Zap className="w-5 h-5 text-primary" />}
                title="Next.js 14"
                description="App Router, Server Components, and optimized performance"
                delay={0.1}
              />
              <FeatureCard 
                icon={<Palette className="w-5 h-5 text-primary" />}
                title="Theme System"
                description="Beautiful dark/light mode with automatic switching"
                delay={0.2}
              />
              <FeatureCard 
                icon={<Cpu className="w-5 h-5 text-primary" />}
                title="Optimized"
                description="Pre-configured for maximum performance"
                delay={0.3}
              />
              <FeatureCard 
                icon={<GitBranch className="w-5 h-5 text-primary" />}
                title="TypeScript"
                description="Type-safe development experience"
                delay={0.4}
              />
              <FeatureCard 
                icon={<LayoutTemplate className="w-5 h-5 text-primary" />}
                title="UI Components"
                description="Pre-styled accessible components"
                delay={0.5}
              />
              <FeatureCard 
                icon={<FileCode className="w-5 h-5 text-primary" />}
                title="Developer Experience"
                description="ESLint, Prettier, and Husky configured"
                delay={0.6}
              />
            </div>
          </motion.section>

          {/* Code Example */}
          <FolderStructureDemo />
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 pt-8 border-t border-border text-center text-grayTextLight dark:text-grayTextDark text-sm"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
            <span>⚡ Next.js Starter Template</span>
            <span className="hidden sm:inline">•</span>
            <span>🎨 Custom Theme System</span>
            <span className="hidden sm:inline">•</span>
            <span>💡 Built by <strong className="text-primary">Abaid</strong></span>
          </div>
          <div className="mt-4">
            <a 
              href="https://nextjs.org/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
            >
              <BookOpen size={14} /> View Documentation
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}