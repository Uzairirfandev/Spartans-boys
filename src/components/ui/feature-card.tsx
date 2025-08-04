import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      className="relative overflow-hidden bg-white/5 dark:bg-black/5 p-6 rounded-2xl border border-white/10 dark:border-black/10 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 group"
    >
      {/* Gradient highlight on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border effect */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
      />
      
      {/* Icon container with shine effect */}
      <motion.div
        whileHover={{ rotate: 5 }}
        className="bg-gradient-to-br from-primary/10 to-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          {icon}
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileHover={{ x: 100, opacity: 0.4 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
        />
      </motion.div>

      <h3 className="font-semibold text-xl mb-3 font-poppins bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
      
    </motion.div>
  );
}