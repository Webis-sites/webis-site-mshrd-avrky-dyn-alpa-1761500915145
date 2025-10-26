'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'דף הבית', href: '#home' },
    { name: 'שירותים', href: '#services' },
    { name: 'אודות', href: '#about' },
    { name: 'שאלות נפוצות', href: '#faq' },
    { name: 'צור קשר', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      id="navbar"
      dir="rtl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#9B786F]/95 shadow-lg backdrop-blur-md'
          : 'bg-[#9B786F]/80 backdrop-blur-sm'
      }`}
      style={{
        boxShadow: isScrolled
          ? '0 10px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : '0 4px 6px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand - Right Side (RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="text-right"
              aria-label="משרד עורכי דין אלפא - דף הבית"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                משרד עורכי דין אלפא
              </h1>
              <p className="text-xs md:text-sm text-white/80 mt-1 text-right">
                מומחים בתחום הטכנולוגיה
              </p>
            </a>
          </motion.div>

          {/* Desktop Navigation Links - Center */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center space-x-reverse space-x-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-white/90 hover:text-white text-base font-medium transition-all duration-300 text-right px-3 py-2 rounded-lg"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
                aria-label={link.name}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span
                  className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.1)',
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button - Left Side (RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block"
          >
            <motion.a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block px-8 py-3 text-white font-bold text-lg rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #45B7D1 0%, #3A9AB8 100%)',
                boxShadow: '0 8px 20px rgba(69, 183, 209, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              }}
              aria-label="קבע תור עכשיו"
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 text-right block">קבע תור עכשיו</span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            style={{
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            aria-label={isMobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenu className="w-7 h-7" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
            dir="rtl"
          >
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="px-4 pt-2 pb-6 space-y-3 bg-[#9B786F]/98 backdrop-blur-lg"
              style={{
                boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block px-6 py-3 text-white text-right text-lg font-medium rounded-lg transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                  aria-label={link.name}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                whileTap={{ scale: 0.95 }}
                className="block px-6 py-4 text-white text-center text-lg font-bold rounded-lg mt-4"
                style={{
                  background: 'linear-gradient(135deg, #45B7D1 0%, #3A9AB8 100%)',
                  boxShadow: '0 8px 20px rgba(69, 183, 209, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
                aria-label="קבע תור עכשיו"
              >
                קבע תור עכשיו
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;