
"use client";

import { motion } from "framer-motion";
import { 
  Twitter, 
  Instagram, 
  Youtube, 
  Facebook, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin,
  Trophy,
  Calendar,
  Users,
  Target
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const careerStats = [
    { icon: <Trophy className="w-5 h-5" />, value: "900+", label: "Career Goals" },
    { icon: <Calendar className="w-5 h-5" />, value: "18+", label: "Years Professional" },
    { icon: <Users className="w-5 h-5" />, value: "5", label: "Ballon d'Or" },
    { icon: <Target className="w-5 h-5" />, value: "50+", label: "Trophies Won" }
  ];

  const quickLinks = [
    { name: "Career Stats", href: "#skills" },
    { name: "Gallery", href: "#gallery" },
    { name: "Career History", href: "#history" },
    { name: "Latest News", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/cristiano", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/cristiano", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/cristiano", label: "YouTube" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/cristiano", label: "Facebook" }
  ];

  return (
    <footer className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Player Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                <span className="text-primary">CRISTIANO</span>
                <br />
                <span className="text-white">RONALDO</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional footballer, record-breaker, and inspiration to millions. 
                Living proof that discipline, dedication, and dreams can change the world.
              </p>
              
              {/* Social Media */}
              <div className="flex gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.2, y: -4 }}
                    className="p-3 bg-white/10 border border-white/20 rounded-full text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Career Stats */}
          <div className="lg:col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg font-bold text-white mb-6 uppercase tracking-wider"
            >
              Career Highlights
            </motion.h4>
            <div className="space-y-4">
              {careerStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-bold text-white mb-6 uppercase tracking-wider"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg font-bold text-white mb-6 uppercase tracking-wider"
            >
              Get In Touch
            </motion.h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">contact@ronaldo.com</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-400">Madrid, Spain</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              {new Date().getFullYear()} Cristiano Ronaldo. All Rights Reserved. 
              Official Website of the Legend.
            </motion.p>

            <div className="flex items-center gap-6">
              <motion.a
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </motion.a>
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-primary/20 border border-primary/50 rounded-full hover:bg-primary/30 hover:border-primary transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-primary" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}