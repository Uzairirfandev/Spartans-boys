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
  Target,
  CricketGround,
  Bat,
  Ball,
  Award,
  Star
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const careerStats = [
    { icon: <Trophy className="w-5 h-5" />, value: "15,000+", label: "International Runs" },
    { icon: <Target className="w-5 h-5" />, value: "50+", label: "International Centuries" },
    { icon: <Award className="w-5 h-5" />, value: "350+", label: "International Wickets" },
    { icon: <Star className="w-5 h-5" />, value: "250+", label: "Matches Played" }
  ];

  const quickLinks = [
    { name: "Batting Stats", href: "#batting" },
    { name: "Bowling Figures", href: "#bowling" },
    { name: "Match History", href: "#history" },
    { name: "Team Gallery", href: "#gallery" },
    { name: "Contact Management", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/pcb", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/TheRealPCB", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/pcb", label: "YouTube" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/pcb", label: "Facebook" }
  ];

  return (
    <footer className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-background via-black/50 to-background text-white overflow-hidden">
      {/* Background Effects - Cricket themed */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        {/* Cricket ball pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full border-4 border-primary/30" />
          <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full border-4 border-primary/20" />
          <div className="absolute top-60 right-1/4 w-16 h-16 rounded-full border-2 border-primary/20" />
        </div>
      </div>

      {/* Animated cricket lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 15 }).map((_: any, i: number) => (
          <motion.div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: 100 + Math.random() * 200,
            }}
            animate={{
              y: [0, 1000],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Team Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                <span className="text-primary">PAKISTAN</span>
                <br />
                <span className="text-white">CRICKET</span>
              </h3>
              <div className="flex items-center gap-2 mb-4">
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Home of champions. Producing world-class cricketers and 
                unforgettable moments since 2016. Passion, pride, and 
                performance in the gentlemen's game.
              </p>
              
              {/* Social Media */}
              <div className="flex gap-3">
                {socialLinks.map((link: any, i: number) => (
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
              Team Highlights
            </motion.h4>
            <div className="space-y-4">
              {careerStats.map((stat: any, i: number) => (
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
              {quickLinks.map((link: any, i: number) => (
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
              Team Management
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
                <span className="text-gray-400">spartanboys@gmail.com</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+924459400370</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-400">Nadirabad bedian road lahore cantt</span>
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
              {new Date().getFullYear()} Pakistan Cricket Board. All Rights Reserved. 
              Official Website of Pakistan Cricket Team.
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
              
              {/* Cricket-specific back to top with ball animation */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  rotate: 360 
                }}
                className="p-3 bg-primary/20 border border-primary/50 rounded-full hover:bg-primary/30 hover:border-primary transition-all duration-300 relative overflow-hidden group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-primary relative z-10" />
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
          
          {/* Cricket Stats Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-6 pt-6 border-t border-white/5 text-center"
          >
            <p className="text-xs text-gray-500">
              🏏 Pakistan Cricket • Test Champions 2021 • 1992 World Cup Winners • 2009 T20 World Cup Winners • 2017 Champions Trophy Winners 🏏
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}