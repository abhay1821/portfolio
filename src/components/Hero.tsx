'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AnimatedBackground from './AnimatedBackground';
import ParticleEffect from './ParticleEffect';
import TypedText from './TypedText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Generate particles
    const newParticles = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 10 + 5;
      newParticles.push(
        <div 
          key={i}
          className="particle absolute rounded-full bg-blue-500/20 backdrop-blur-sm"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5,
          }}
        />
      );
    }
    setParticles(newParticles);

    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        textRef.current.querySelectorAll('.gsap-text'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out' }
      );

      // Animate the particles
      if (nameRef.current) {
        const particleElements = document.querySelectorAll('.particle');
        gsap.to(particleElements, {
          x: 'random(-50, 50)',
          y: 'random(-50, 50)',
          opacity: 'random(0.3, 0.8)',
          scale: 'random(0.8, 1.5)',
          duration: 3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          stagger: 0.1,
          repeatRefresh: true
        });
      }
    }
  }, []);

  return (
    <section id="home" className="section relative overflow-hidden pt-40" ref={heroRef}>
      {/* 3D Animated background */}
      <AnimatedBackground />
      
      {/* Interactive particle effect */}
      <ParticleEffect />

      <div className="container mx-auto relative z-10 flex flex-col justify-center items-start h-screen">
        <div ref={textRef} className="max-w-3xl">
          <motion.p 
            className="text-primary mb-4 font-medium gsap-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I&apos;m
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 gsap-text relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            {/* Animated particles background */}
            <div className="absolute inset-0 -m-4 overflow-hidden rounded-xl">
              {particles}
            </div>
            
            {/* Glowing border */}
            <div className="absolute inset-0 -m-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm"></div>
            
            <span ref={nameRef} className="padd-bottom gradient-text relative z-10">Abhay Chaudhary</span>
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold mb-6 text-text-secondary gsap-text pb-4 padd-top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
          >
            <TypedText 
              strings={[
                'Software Developer',
                'Frontend Engineer',
                'Problem Solver',
                'Flutter Developer',
                'Full Stack Developer'
              ]}
              className="text-blue-400"
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg text-text-secondary padd-bottom mb-8 max-w-2xl gsap-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            B.Tech in Computer Science from Indian Institute Of Information Technology, (IIIT) Sonepat. Experienced in development and proficient in Data Structures and Algorithms.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 gsap-text padd-top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn-primary group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#contact" className="btn btn-outline group relative overflow-hidden">
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-text-secondary text-sm mb-2">Scroll Down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 