'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import {
  Code, Cpu, Palette, Zap, GitBranch,
  LayoutTemplate, FileCode, BookOpen
} from "lucide-react";

import ThemeToggle from '@/components/config/theme-toggle';
import HeroSection from '@/components/ui/hero-section';
import FeatureCard from '@/components/ui/feature-card';
import FolderStructureDemo from '@/components/ui/structure-demo';

const features = [
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Next.js 14",
    description: "App Router, Server Components, and optimized performance",
    delay: 0.1
  },
  {
    icon: <Palette className="w-5 h-5 text-primary" />,
    title: "Theme System",
    description: "Beautiful dark/light mode with automatic switching",
    delay: 0.2
  },
  {
    icon: <Cpu className="w-5 h-5 text-primary" />,
    title: "Optimized",
    description: "Pre-configured for maximum performance",
    delay: 0.3
  },
  {
    icon: <GitBranch className="w-5 h-5 text-primary" />,
    title: "TypeScript",
    description: "Type-safe development experience",
    delay: 0.4
  },
  {
    icon: <LayoutTemplate className="w-5 h-5 text-primary" />,
    title: "UI Components",
    description: "Pre-styled accessible components",
    delay: 0.5
  },
  {
    icon: <FileCode className="w-5 h-5 text-primary" />,
    title: "Developer Experience",
    description: "ESLint, Prettier, and Husky configured",
    delay: 0.6
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark font-lato transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Compact Header */}
        <header className="flex justify-between items-center mb-2 sm:mb-3 h-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={20}
              priority
            />
            <span className="ml-2 text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">
              v14
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />
          </motion.div>
        </header>

        <main className="flex flex-col items-center">
          <HeroSection />

          {/* Features Grid */}
          <motion.section
            id="features"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full px-2 sm:px-0 mt-12 sm:mt-20"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10 font-poppins">
              <span className="text-primary bg-clip-text">Key Features</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={feature.delay}
                />
              ))}
            </div>
          </motion.section>

          {/* Code Example */}
          <FolderStructureDemo />
        </main>

        {/* Sleek Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 pt-8 border-t border-white/10 dark:border-black/10"
        >
          <div className="flex flex-col items-center">
            {/* Logo and version */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={100}
                height={20}
              />
              <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                v14
              </span>
            </motion.div>
            {/* Social/tech icons */}
            <div className="flex gap-4 mb-6">
              {[
                <Zap className="w-5 h-5 text-gray-500 hover:text-primary transition-colors" />,
                <Code className="w-5 h-5 text-gray-500 hover:text-primary transition-colors" />,
                <LayoutTemplate className="w-5 h-5 text-gray-500 hover:text-primary transition-colors" />,
                <GitBranch className="w-5 h-5 text-gray-500 hover:text-primary transition-colors" />
              ].map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="cursor-pointer"
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Next.js Starter Template • Built by{' '}
              <span className="text-primary font-medium">Abaid</span>
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}