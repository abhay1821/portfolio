'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 3,
    title: 'VoiceNote',
    description: 'Voice-to-Text Note-Taking Application. Implemented the Web Speech API to create a seamless voice-to-text experience with efficient state management for real-time note creation, editing, and organization without relying on external libraries.',
    tags: ['React', 'Next.js', 'TypeScript', 'CSS Modules', 'Node.js'],
    image: '/images/Voice-Note.png',
    link: 'https://voice-note-hemantaryapanwars-projects.vercel.app/',
    github: 'https://github.com/hemantaryapanwar/VoiceNote',
    period: 'Feb. 2025 - Mar. 2025'
  },
  {
    id: 2,
    title: 'Stock Market Price Prediction',
    description: 'Web app hosted on Streamlit to predict stocks future up to 80% accurate using RNN (LSTM) model trained on Yahoo finance data.',
    tags: ['Python', 'Pandas', 'Streamlit', 'Yahoo Finance', 'Matplotlib'],
    image: '/placeholder.jpg',
    link: '#',
    github: '#',
    period: 'Mar. 2021 - Dec. 2021'
  },
  {
    id: 1,
    title: 'Confrenz',
    description: 'Creative Web Application for online meets with features like screen sharing and content sharing for better productivity.',
    tags: ['React', 'Bootstrap', 'HTML', 'CSS', 'WebRTC'],
    image: '/placeholder.jpg',
    link: '#',
    github: 'https://github.com/hemantaryapanwar/CONFRENZ',
    period: 'Aug. 2020 - Dec. 2020'
  }
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [voiceNoteImageError, setVoiceNoteImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="section relative overflow-hidden py-20 md:py-32">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-secondary/10 to-background z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl opacity-30 z-0"></div>
      
      <div className="container mx-auto relative z-10 px-6">
        {/* Section Header with enhanced styling */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            My Work
          </div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Notable <span className="text-blue-500">Projects</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-text-secondary text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here are some of my featured projects that showcase my skills and experience in software development.
          </motion.p>
        </div>

        {/* Projects Grid with improved card design - now horizontal with 3 projects */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:translate-y-[-5px] h-full flex flex-col">
                {/* Project Image with enhanced styling */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
                  {project.id === 3 && !voiceNoteImageError ? (
                    <div className="w-full h-full bg-gradient-to-br from-secondary/80 via-background/90 to-secondary/80">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        onError={() => setVoiceNoteImageError(true)}
                        priority
                        className="mix-blend-normal"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary/80 via-background/90 to-secondary/80 flex items-center justify-center">
                      {project.id === 3 ? (
                        <div className="flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                          <span className="text-text-secondary text-sm">VoiceNote App</span>
                        </div>
                      ) : (
                        <span className="text-text-secondary text-lg opacity-60">Project Image</span>
                      )}
                    </div>
                  )}
                  
                  {/* Time period badge with improved styling */}
                  <div className="absolute top-6 right-6 z-20 bg-secondary/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full shadow-lg">
                    {project.period}
                  </div>
                </div>
                
                {/* Project Content with improved padding and spacing */}
                <div className="p-7 md:p-9 flex-grow flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags with improved styling */}
                  <div className="flex flex-wrap gap-2.5 mb-7">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 bg-background/50 rounded-full text-xs font-medium border border-border/50 text-text-secondary/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3.5 py-1.5 bg-background/50 rounded-full text-xs font-medium border border-border/50 text-text-secondary/80">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Links with improved styling */}
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.link}
                      className="flex-1 px-4 py-2.5 rounded-lg bg-blue-500 text-white font-medium text-xs md:text-sm hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 px-4 py-2.5 rounded-lg bg-secondary/80 border border-border/50 text-text-primary font-medium text-xs md:text-sm hover:border-blue-500/30 hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
                
                {/* Enhanced hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 