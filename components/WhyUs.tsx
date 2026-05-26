"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Shield, Code, Users, Heart, Globe } from "lucide-react";

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep understanding of African tech landscape and challenges",
      gradient: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Military-grade security protocols for all solutions",
      gradient: "from-green-500/20 to-emerald-600/10",
    },
    {
      icon: Code,
      title: "Custom-Built Solutions",
      description: "Tailored software designed for your specific needs",
      gradient: "from-violet-500/20 to-purple-600/10",
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "24/7 technical support and regular updates",
      gradient: "from-cyan-500/20 to-blue-600/10",
    },
    {
      icon: Heart,
      title: "Youth Development Focus",
      description: "Committed to nurturing the next generation of tech talent",
      gradient: "from-pink-500/20 to-rose-600/10",
    },
    {
      icon: Globe,
      title: "African Tech Leadership",
      description: "Pioneering digital transformation across the continent",
      gradient: "from-orange-500/20 to-amber-600/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,94,255,0.05)_0%,transparent_70%)]"></div>
      
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
              Why Choose Moire Tech
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Beyond Code,
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-clip-text text-transparent">
                Building Trust
              </span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine technical excellence with a commitment to education and community, 
              creating partnerships that drive meaningful impact.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={staggerItemVariants}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02] relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={28} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Animated Bottom Border */}
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-brand-blue transition-all duration-500"></div>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-blue/5 to-brand-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="p-8 rounded-2xl glass-effect border border-white/10 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-gray-400 text-sm">Support Response</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-gray-400 text-sm">Projects Delivered</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-400 text-sm">Schools Reached</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-violet/10 to-brand-blue/10"></div>
          
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Technology Strategy?
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted Moire Tech with their 
              digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 rounded-xl glass-effect border border-white/10 hover:border-brand-blue/50 text-white font-medium text-lg transition-all duration-300 group">
                <span className="flex items-center justify-center space-x-3">
                  <span>Schedule Consultation</span>
                  <div className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-brand-blue to-brand-violet transition-all duration-300"></div>
                </span>
              </button>
              
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet text-white font-bold text-lg hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 transform hover:-translate-y-1">
                View Case Studies
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-8">
              Free initial consultation · No obligation · Tailored proposals
            </p>
          </div>
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 -left-12 w-24 h-24 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-12 w-24 h-24 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-blue/20 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent"></div>
    </section>
  );
};

export default WhyUs;