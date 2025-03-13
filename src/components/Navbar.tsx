'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { name: 'About', href: '#about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { name: 'Skills', href: '#skills', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { name: 'Projects', href: '#projects', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { name: 'Contact', href: '#contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showNav, setShowNav] = useState(false);
  const lastScrollY = useRef(0);
  
  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // This useEffect will run only once on component mount
  useEffect(() => {
    // Initial setup - safe to use browser APIs here
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      
      // Show/hide navigation based on scroll direction
      if (currentScrollY > 300) {
        setShowNav(true);
        if (currentScrollY > lastScrollY.current + 50) {
          // Scrolling down - hide floating nav
          if (showNav) setShowNav(false);
        } else if (currentScrollY < lastScrollY.current - 10) {
          // Scrolling up - show floating nav
          if (!showNav) setShowNav(true);
        }
      } else {
        // At the top
        setShowNav(false);
      }
      
      lastScrollY.current = currentScrollY;
      
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, showNav]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-secondary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-primary to-accent origin-left absolute top-0 left-0 right-0"
          style={{ scaleX }}
        />
        
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="text-2xl font-bold name-gradient">
              Hemant Arya
            </Link>
          </motion.div>

          {/* Resume Button */}
          <motion.a
            href="/documents/HemantArya_Resume.pdf"
            className="btn btn-primary px-6 py-2.5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            download="HemantArya_Resume.pdf"
          >
            Resume
          </motion.a>
        </div>
      </motion.header>

     

      {/* Section Scroll Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative"
            >
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'bg-primary border-primary scale-125'
                    : 'bg-transparent border-text-secondary/50 hover:border-primary'
                }`}
              />
              
              {/* Label */}
              <div className="absolute top-1/2 right-6 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-secondary/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap">
                  {link.name}
                </div>
              </div>
            </Link>
          ))}
          
          {/* Vertical line connecting dots */}
          <div className="absolute top-0 left-1.5 w-0.5 h-full -z-10 bg-gradient-to-b from-primary/20 via-text-secondary/20 to-accent/20 transform -translate-x-1/2" />
        </div>
      </div>

      {/* Mobile Menu Button - Only visible on very small screens */}
      <div className="fixed bottom-8 right-8 md:hidden z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-primary p-3.5 rounded-full shadow-lg text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed bottom-24 right-8 md:hidden z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-secondary/90 backdrop-blur-lg p-5 rounded-xl border border-border shadow-lg flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-3 p-2.5 rounded-lg transition-colors duration-300 ${
                    activeSection === link.href.substring(1)
                      ? 'bg-primary/20 text-primary'
                      : 'text-text-secondary hover:bg-primary/10 hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 