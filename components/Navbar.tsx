"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Training", href: "#training" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-effect py-3 bg-brand-dark/80 backdrop-blur-xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center">
                <span className="font-bold text-white text-xl">M</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
                Moire Tech
              </h1>
              <p className="text-xs text-gray-400">Consultancy. Dev Solutions. Real Impact.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative group text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-violet group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet text-white font-medium hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-effect"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pt-6 border-t border-white/10"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between group py-3 px-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-gray-300 group-hover:text-white">{item.label}</span>
                  <ChevronRight size={16} className="text-gray-500 group-hover:text-brand-blue" />
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet text-white font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;