"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Sparkles } from "lucide-react";

const AIConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8 z-50"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet blur-md opacity-70 animate-pulse-glow"></div>
          
          {/* Main button */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 transform hover:scale-105">
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <MessageSquare size={24} className="text-white" />
            )}
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full right-0 mb-3 w-64 p-3 rounded-lg glass-effect border border-white/10"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles size={16} className="text-brand-blue" />
                  <span className="text-sm font-medium text-white">
                    Coming Soon: AI Assistant
                  </span>
                </div>
                <p className="text-xs text-gray-300">
                  Powered by Ruflo multi-agent orchestration. Get instant answers about our services, products, and training programs.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      {/* AI Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 w-96"
          >
            <div className="rounded-2xl glass-effect border border-white/10 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-brand-dark to-brand-black border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">AI Concierge</h3>
                      <p className="text-xs text-gray-400">Powered by Ruflo</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-gray-400">Online</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300">
                  Ask me about Moire Tech&apos;s services, products, training programs, or schedule a consultation.
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-6 max-h-80 overflow-y-auto">
                <div className="space-y-4">
                  {/* AI Message */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-center flex-shrink-0">
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex-1">
                      <p className="text-sm text-gray-300">
                        Hello! I&apos;m your AI assistant. I can help you explore Moire Tech&apos;s offerings. What would you like to know about?
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["Services", "Products", "Training", "Pricing", "Contact"].map((topic) => (
                          <button
                            key={topic}
                            className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Coming Soon Notice */}
                  <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-brand-blue/10 to-brand-violet/10 border border-brand-blue/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles size={16} className="text-brand-blue" />
                      <span className="text-sm font-medium text-white">Coming Soon</span>
                    </div>
                    <p className="text-xs text-gray-300">
                      Full AI concierge functionality powered by Ruflo multi-agent orchestration is currently in development. We&apos;re excited to bring you intelligent, context-aware assistance soon!
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/10">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your question..."
                    className="flex-1 px-4 py-3 rounded-lg glass-effect border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
                    disabled
                  />
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet text-white font-medium text-sm hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    Send
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  AI concierge launching Q2 2026
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConcierge;