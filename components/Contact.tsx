"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@moire.tech",
      description: "For general inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-8900",
      description: "Mon-Fri, 9AM-5PM",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Accra, Ghana",
      description: "Headquarters",
    },
  ];

  const serviceOptions = [
    "Tech Development",
    "Cybersecurity Training",
    "Product Licensing",
    "Consultation",
    "Partnership",
    "Other",
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-blue/5"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-violet/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-brand-violet/10 to-brand-blue/10 blur-3xl animate-pulse"></div>

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
              Get In Touch
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let&apos;s Build
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to discuss your project? Get in touch for a free consultation 
              and discover how Moire Tech can help achieve your goals.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl glass-effect border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={22} className="text-brand-blue" />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-white mb-1">{info.title}</h4>
                      <p className="text-lg text-gray-300 mb-1">{info.value}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-8 rounded-2xl glass-effect border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Why Clients Choose Us</h3>
              
              <div className="space-y-4">
                {[
                  "48-hour response time",
                  "Free initial consultation",
                  "Transparent pricing",
                  "Dedicated project manager",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle size={18} className="text-brand-blue flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-2xl glass-effect border border-white/10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-600/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-green-500" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Thank you for contacting Moire Tech. Our team will get back to you within 48 hours.
                  </p>
                  
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-lg glass-effect border border-white/10 text-white font-medium hover:border-brand-blue/50 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                  <p className="text-gray-400 mb-8">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-all duration-300 appearance-none bg-brand-dark"
                      >
                        <option value="" className="bg-brand-dark">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option.toLowerCase()} className="bg-brand-dark">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, requirements, or questions..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet text-white font-bold text-lg hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                      
                      <div className="text-sm text-gray-500">
                        We respect your privacy and will never share your information.
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Bottom CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-brand-blue/10 via-brand-violet/10 to-brand-blue/10 border border-white/10 text-center"
            >
              <h4 className="text-xl font-bold text-white mb-4">
                Need immediate assistance?
              </h4>
              
              <p className="text-gray-400 mb-6">
                For urgent inquiries, call us directly or schedule a same-day consultation.
              </p>
              
              <button className="px-8 py-3 rounded-lg glass-effect border border-white/10 hover:border-brand-blue/50 text-white font-medium transition-colors duration-300 group">
                <span className="flex items-center justify-center space-x-3">
                  <Phone size={18} />
                  <span>Book a Free Consultation</span>
                  <div className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-brand-blue to-brand-violet transition-all duration-300"></div>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent"></div>
    </section>
  );
};

export default Contact;