"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Package, Clock } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Clock, value: 8, label: "Years in Tech", suffix: "+" },
    { icon: Users, value: 500, label: "Training Sessions", suffix: "+" },
    { icon: Package, value: 25, label: "Products Shipped", suffix: "+" },
    { icon: Target, value: 120, label: "Clients Served", suffix: "+" },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,94,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,94,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Stats */}
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-violet/10 text-brand-blue font-medium text-sm mb-4">
                About Moire Tech
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  By The Numbers
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="p-6 rounded-xl glass-effect border border-white/10 hover:border-brand-blue/30 transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 flex items-center justify-center group-hover:from-brand-blue/30 group-hover:to-brand-violet/30 transition-all duration-300">
                        <stat.icon size={24} className="text-brand-blue" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent"
                        duration={2}
                      />
                    </div>
                    <p className="text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"></div>
              <span className="text-brand-blue font-medium">Our Story</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
                African Tech
              </span>
            </h3>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                Founded in 2018, Moire Tech emerged from a vision to bridge the gap between 
                cutting-edge technology development and comprehensive cybersecurity education 
                across Africa.
              </p>
              
              <p className="text-gray-400">
                We combine deep technical expertise with a passion for mentorship, creating 
                solutions that not only solve today&apos;s challenges but empower tomorrow&apos;s 
                innovators. Our team of seasoned developers, security experts, and educators 
                work together to deliver enterprise-grade solutions while fostering the next 
                generation of tech talent.
              </p>
              
              <p className="text-gray-400">
                From custom software development to immersive cybersecurity training programs, 
                we&apos;re committed to making advanced technology accessible, secure, and 
                impactful for businesses and individuals across the continent.
              </p>
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center space-x-3 text-white font-medium group">
                <span>Learn more about our journey</span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-brand-blue to-brand-violet group-hover:w-12 transition-all duration-300"></div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-brand-blue/5 to-brand-violet/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-brand-violet/5 to-brand-blue/5 blur-3xl"></div>
    </section>
  );
};

export default About;