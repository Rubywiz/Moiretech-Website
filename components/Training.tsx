"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Shield, Users, BookOpen, Clock, Award } from "lucide-react";

const Training = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trainingPrograms = [
    {
      title: "Corporate Training Packages",
      icon: Users,
      description: "Customized security training for enterprise teams",
      duration: "4-12 weeks",
      level: "Beginner to Advanced",
      features: ["Team workshops", "Phishing simulations", "Incident response drills"],
    },
    {
      title: "School Programmes",
      icon: BookOpen,
      description: "Cybersecurity education for schools and universities",
      duration: "Semester-based",
      level: "Student Focused",
      features: ["Curriculum development", "Hands-on labs", "Career guidance"],
    },
    {
      title: "Online Certifications",
      icon: Award,
      description: "Self-paced certification courses with proctored exams",
      duration: "Self-paced",
      level: "All Levels",
      features: ["Video lessons", "Practice exams", "Industry recognition"],
    },
    {
      title: "Hands-on Labs",
      icon: Terminal,
      description: "Real-world simulation environments for practical learning",
      duration: "40+ hours",
      level: "Intermediate+",
      features: ["Virtual labs", "CTF challenges", "Real attack scenarios"],
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <section id="training" className="py-24 relative overflow-hidden">
      {/* Terminal-style Background */}
      <div className="absolute inset-0 bg-brand-black">
        {/* Terminal Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,94,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,94,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Scan Line Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Terminal Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="p-6 rounded-xl glass-effect border border-white/10 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <Terminal size={20} className="text-brand-blue" />
                  <span className="text-gray-400 font-mono">moiretech@training:~</span>
                </div>
              </div>
            </div>
            
            <motion.div
              variants={lineVariants}
              className="h-0.5 bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue mb-6"
            ></motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Cybersecurity Training
                </span>
                <br />
                <span className="text-brand-blue font-mono">$</span>
                <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-clip-text text-transparent font-mono">
                  _empower_the_next_generation
                </span>
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Training Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Programs List */}
          <motion.div variants={itemVariants}>
            <div className="p-8 rounded-2xl glass-effect border border-white/10 h-full">
              <div className="flex items-center space-x-3 mb-8">
                <Shield size={24} className="text-brand-blue" />
                <h3 className="text-2xl font-bold text-white">Training Programmes</h3>
              </div>
              
              <div className="space-y-6">
                {trainingPrograms.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="group cursor-pointer"
                  >
                    <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 flex items-center justify-center">
                            <program.icon size={20} className="text-brand-blue" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-1">{program.title}</h4>
                            <p className="text-sm text-gray-400">{program.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock size={14} className="text-gray-500" />
                            <span className="text-gray-400">{program.duration}</span>
                          </div>
                          <div className="px-2 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                            {program.level}
                          </div>
                        </div>
                        
                        <div className="text-brand-blue font-medium group-hover:underline">
                          Details →
                        </div>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {program.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Call to Action */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-blue/10 via-brand-violet/10 to-brand-blue/10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Our Training?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Industry Experts:</span> Learn from professionals with real-world security experience
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Hands-on Approach:</span> Practical labs and real attack scenarios
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Certification Ready:</span> Preparation for industry-recognized certifications
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Youth Focus:</span> Special programmes for schools and universities
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-8 rounded-2xl glass-effect border border-white/10 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-center mx-auto mb-6">
                <Shield size={28} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Level Up Your Security Skills?
              </h3>
              
              <p className="text-gray-400 mb-8">
                Book a training session today and join hundreds of professionals who have enhanced their cybersecurity capabilities with Moire Tech.
              </p>
              
              <button className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet text-white font-bold text-lg hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 transform hover:-translate-y-1">
                Book a Training Session
              </button>
              
              <p className="text-gray-500 text-sm mt-4">
                Corporate, group, and individual training options available
              </p>
            </div>
          </motion.div>
        </div>

        {/* Terminal Footer */}
        <motion.div
          variants={itemVariants}
          className="p-6 rounded-xl glass-effect border border-white/10"
        >
          <div className="font-mono text-sm">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-brand-blue">$</span>
              <span className="text-gray-300">cat training_options.txt</span>
            </div>
            <div className="text-gray-400 space-y-1 ml-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Custom corporate packages available</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Online and in-person training options</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Certification preparation included</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Post-training support and resources</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-brand-blue/5 to-brand-violet/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-gradient-to-r from-brand-violet/5 to-brand-blue/5 blur-3xl"></div>
    </section>
  );
};

export default Training;