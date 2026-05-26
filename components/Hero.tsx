"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Dev Solutions.", "Cyber Training.", "Real Impact."];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-12"
          >
            <div className="inline-block relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-2xl shadow-brand-blue/30 animate-pulse-glow">
                <span className="font-bold text-white text-5xl">M</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet blur-2xl opacity-40 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                Where Code Meets
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-clip-text text-transparent">
                Defence
              </span>
            </h1>
          </motion.div>

          {/* Typewriter Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center space-x-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <div className="relative">
                <span className="text-2xl md:text-3xl text-gray-300 font-medium">
                  {texts[textIndex]}
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-brand-blue to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Consultancy. Dev Solutions. Real Impact. Building the future of technology
              with cutting-edge development, cybersecurity training, and proprietary products.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group px-8 py-4 rounded-xl glass-effect border border-white/10 hover:border-brand-blue/50 transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center">
              <span className="text-lg font-medium text-white">Our Services</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet text-white font-medium text-lg hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300 holographic-shimmer"></div>
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-500">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border border-white/20 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-3 rounded-full bg-gradient-to-b from-brand-blue to-brand-violet"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-brand-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-black to-transparent"></div>
    </section>
  );
};

export default Hero;