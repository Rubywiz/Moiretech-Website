"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Shield, Terminal, BookOpen, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      name: "CyberDash",
      icon: Shield,
      badge: "Security SaaS",
      description: "Real-time security monitoring and threat intelligence platform",
      features: ["Real-time monitoring", "Threat intelligence", "Automated alerts", "Compliance reporting"],
      gradient: "from-blue-500/20 to-cyan-500/10",
      color: "text-blue-400",
    },
    {
      name: "DevKit Pro",
      icon: Terminal,
      badge: "Developer Toolkit",
      description: "Comprehensive development environment with built-in security tools",
      features: ["Code security scanner", "API testing suite", "DevOps automation", "Team collaboration"],
      gradient: "from-green-500/20 to-emerald-500/10",
      color: "text-green-400",
    },
    {
      name: "TrainSec LMS",
      icon: BookOpen,
      badge: "Learning Platform",
      description: "Interactive cybersecurity training and certification platform",
      features: ["Interactive labs", "Progress tracking", "Certification paths", "Enterprise dashboard"],
      gradient: "from-violet-500/20 to-purple-500/10",
      color: "text-violet-400",
    },
    {
      name: "More Coming Soon",
      icon: Sparkles,
      badge: "In Development",
      description: "Exciting new products launching soon. Stay tuned!",
      features: ["AI security tools", "Blockchain solutions", "IoT security", "Cloud native platforms"],
      gradient: "from-brand-blue/20 to-brand-violet/10",
      color: "text-brand-glow",
      isComingSoon: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-black to-brand-dark"></div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-r from-brand-blue/10 via-brand-violet/10 to-brand-blue/10 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-violet/10 text-brand-blue font-medium text-sm mb-4">
              Our Products
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Built In-House,
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-clip-text text-transparent">
                Ready to Deploy
              </span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proprietary SaaS solutions and digital products designed to solve real-world 
              technology challenges across industries.
            </p>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className={`h-full p-6 rounded-xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                  product.isComingSoon ? "holographic-shimmer" : ""
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Product Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg ${product.gradient.replace('/20', '/30').replace('/10', '/20')} flex items-center justify-center`}>
                          <product.icon size={24} className={product.color} />
                        </div>
                        
                        <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${product.gradient.replace('/20', '').replace('/10', '')} text-white font-medium text-xs`}>
                          {product.badge}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm">
                        {product.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="mb-6 flex-1">
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      {product.isComingSoon ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet animate-pulse"></div>
                            <span className="text-xs text-gray-400">Launching Soon</span>
                          </div>
                          <Sparkles size={16} className="text-brand-glow animate-pulse" />
                        </div>
                      ) : (
                        <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors duration-300 group/btn flex items-center justify-center space-x-2">
                          <Eye size={16} />
                          <span>Learn More</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  {!product.isComingSoon && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-2xl glass-effect border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Interested in our products?
              </h3>
              <p className="text-gray-400">
                Schedule a demo or request a trial license for any of our products.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-lg glass-effect border border-white/10 hover:border-brand-blue/50 text-white font-medium transition-colors duration-300">
                Request Demo
              </button>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet text-white font-medium hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
                Get Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-32 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-brand-blue/5 to-brand-violet/5 blur-3xl"></div>
      <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-brand-violet/5 to-brand-blue/5 blur-3xl"></div>
    </section>
  );
};

export default Products;