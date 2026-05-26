"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Shield, Package, CheckCircle } from "lucide-react";
import TiltCard from "./TiltCard";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Tech Development",
      icon: Code,
      badge: "Core Service",
      badgeColor: "from-brand-blue to-brand-blue/80",
      description: "Custom software solutions tailored to your business needs",
      features: [
        "Custom software development",
        "API integrations",
        "Mobile applications",
        "Web platforms",
        "AI-powered solutions",
      ],
      gradient: "from-blue-500/20 to-blue-600/10",
      hoverGradient: "from-blue-500/30 to-blue-600/20",
    },
    {
      title: "Cybersecurity Training",
      icon: Shield,
      badge: "High Demand",
      badgeColor: "from-green-500 to-emerald-600",
      description: "Comprehensive security education and hands-on workshops",
      features: [
        "Penetration testing workshops",
        "Security awareness training",
        "CTF competitions",
        "SOC analyst bootcamps",
        "Youth cyber education",
      ],
      gradient: "from-green-500/20 to-emerald-600/10",
      hoverGradient: "from-green-500/30 to-emerald-600/20",
    },
    {
      title: "In-House Products",
      icon: Package,
      badge: "Proprietary",
      badgeColor: "from-violet-500 to-purple-600",
      description: "Ready-to-use SaaS tools and white-label solutions",
      features: [
        "SaaS tools built by Moire Tech",
        "White-label solutions",
        "Digital product licensing",
        "Enterprise toolkits",
        "Security monitoring",
      ],
      gradient: "from-violet-500/20 to-purple-600/10",
      hoverGradient: "from-violet-500/30 to-purple-600/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-dark to-brand-black"></div>
      <div className="absolute top-1/3 left-0 right-0 h-96 bg-gradient-to-r from-brand-blue/5 via-brand-violet/5 to-brand-blue/5 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={cardVariants}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-violet/10 text-brand-blue font-medium text-sm mb-4">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Three Pillars of
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions spanning development, security, and proprietary products 
              to meet every technology need.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="h-full p-8 rounded-2xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Animated Border */}
                  <div className="gradient-border rounded-2xl">
                    <div className="relative z-10 h-full">
                      {/* Badge */}
                      <div className="flex justify-between items-start mb-6">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${service.badgeColor} text-white font-medium text-sm inline-flex items-center space-x-2`}>
                          <span>{service.badge}</span>
                          <div className="w-2 h-2 rounded-full bg-white/80"></div>
                        </div>
                        
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon size={28} className="text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-3">
                            <CheckCircle size={18} className="text-brand-blue flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors duration-300 group/btn">
                          <span className="flex items-center justify-center space-x-2">
                            <span>Explore Service</span>
                            <div className="w-0 group-hover/btn:w-4 h-0.5 bg-gradient-to-r from-brand-blue to-brand-violet transition-all duration-300"></div>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-blue/5 to-brand-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={cardVariants}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet animate-pulse"></div>
            <p className="text-gray-400">
              Need a custom solution? We can build it for you.
            </p>
            <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet text-white font-medium hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
              Get a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;