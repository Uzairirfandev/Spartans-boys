import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 sm:mb-16"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 font-poppins"
      >
        <span className="text-primary bg-clip-text">
          Next.js Starter
        </span>{" "}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Template
        </motion.span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto text-grayTextLight dark:text-grayTextDark"
      >
        Everything you need to start building modern web applications with Next.js 14, 
        TypeScript, and Tailwind CSS.
      </motion.p>
    </motion.section>
  );
}