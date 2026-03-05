import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  Code, Cpu, Zap, GitBranch,
  LayoutTemplate, FileCode,
  ArrowRight, Sparkles, Github
} from 'lucide-react';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const techStack = [
    { icon: <Zap className="w-5 h-5" />, name: "Next.js 14" },
    { icon: <Code className="w-5 h-5" />, name: "TypeScript" },
    { icon: <LayoutTemplate className="w-5 h-5" />, name: "Tailwind" },
    { icon: <Cpu className="w-5 h-5" />, name: "Performance" },
    { icon: <FileCode className="w-5 h-5" />, name: "Components" }
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[80vh] flex items-center justify-center px-4 sm:px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>

        {/* Animated grid pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] dark:opacity-20"
        />
      </div>

      {/* Floating tech icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        {techStack.map((tech: any, i: number) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100
            }}
            animate={isInView ? {
              opacity: 0.4,
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200
            } : {}}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2
            }}
            className="absolute text-primary/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-5xl w-full"
      >
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">STARTER TEMPLATE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-30 mb-6 font-poppins"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
          >
            Next.js
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-block"
          >
            Accelerator
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-300"
        >
          Production-ready starter with TypeScript, Tailwind CSS, and all the modern tools you need to build exceptional web applications.
        </motion.p>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {techStack.map((tech: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://github.com/Abaidullah77/next-tailwind-setup"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium transition-all hover:opacity-90"
          >
            <Github className="w-5 h-5" />
            View on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}

    </section>
  );
}