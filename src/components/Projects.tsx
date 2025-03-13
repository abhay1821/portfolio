'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 3,
    title: 'VoiceNote',
    description: 'Voice-to-Text Note-Taking Application. Implemented the Web Speech API to create a seamless voice-to-text experience with efficient state management for real-time note creation, editing, and organization without relying on external libraries.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    image: '/images/Voice-Note.png',
    link: 'https://voice-note-hemantaryapanwars-projects.vercel.app/',
    github: 'https://github.com/hemantaryapanwar/VoiceNote',
    period: 'Feb. 2025 - Mar. 2025'
  },
  {
    id: 2,
    title: 'Stock Market Price Prediction',
    description: 'Web app hosted on Streamlit to predict stocks future up to 80% accurate using RNN (LSTM) model trained on Yahoo finance data.',
    tags: ['Python', 'Pandas', 'Streamlit', 'Yahoo Finance'],
    image: '/placeholder.jpg',
    link: '#',
    github: '#',
    period: 'Mar. 2021 - Dec. 2021'
  },
  {
    id: 1,
    title: 'Confrenz',
    description: 'Creative Web Application for online meets with features like screen sharing and content sharing for better productivity.',
    tags: ['React', 'Node.js','Socket.io', 'WebRTC'],
    image: '/placeholder.jpg',
    link: 'https://video-chat-app-ebon.vercel.app/',
    github: 'https://github.com/hemantaryapanwar/CONFRENZ',
    period: 'Aug. 2020 - Dec. 2020'
  }
];

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  period: string;
}

// Project Card component with 3D effect
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [voiceNoteImageError, setVoiceNoteImageError] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    // Calculate rotation based on mouse position
    const rotateY = ((x - rect.width / 2) / rect.width) * 10; // Reduced for subtlety
    const rotateX = ((rect.height / 2 - y) / rect.height) * 10; // Reduced for subtlety
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="group perspective-[1000px] px-4 py-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="relative overflow-hidden rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isHovered ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)` : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Project Image with enhanced styling */}
        <div className="relative h-56 md:h-64 overflow-hidden">
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
                className="mix-blend-normal transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary/80 via-background/90 to-secondary/80 flex items-center justify-center ">
              {project.id === 3 ? (
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="text-text-secondary text-sm ">VoiceNote App</span>
                </div>
              ) : project.id === 2 ? (
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-text-secondary text-sm">Stock Prediction</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span className="text-text-secondary text-sm">Confrenz</span>
                </div>
              )}
            </div>
          )}
          
          {/* Time period badge with improved styling */}
          <div 
            className="absolute top-6 right-6 z-20 bg-secondary/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full shadow-lg"
            style={{ transform: 'translateZ(30px)' }}
          >
            {project.period}
          </div>
        </div>
        
        {/* Project Content with improved padding and spacing */}
        <div 
          className="p-7 md:p-10 pt-10 pb-10 pl-10 pr-10 flex-grow flex flex-col padd-left padd-right"
          style={{ transform: 'translateZ(20px)' }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 group-hover:text-blue-500 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-secondary mb-8 text-sm md:text-base leading-relaxed flex-grow px-1">
            {project.description}
          </p>
          
          {/* Tags with improved styling */}
          <div className="flex flex-wrap gap-2.5 mb-8 pt-3 px-1 padd-bottom padd-top">
            {project.tags.map((tag: string, idx: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                className="px-5 py-1.5 bg-background/50 rounded-full text-xs font-medium border border-border/50 text-text-secondary/80 hover:border-primary/30 hover:text-primary transition-colors duration-300 padd-left padd-right"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          {/* Links with improved styling */}
          <div className="flex space-x-6 mt-auto pt-4 px-1 padd-bottom">
            <a
              href={project.link}
              className="flex-1 w-20 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-xs md:text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group overflow-hidden relative"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transform: 'translateZ(25px)' }}

            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3 mr-2 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </span>
            </a>
            <a
              href={project.github}
              className="flex-1 px-4 py-3 rounded-lg bg-secondary/80 border border-border/50 text-text-primary font-medium text-xs md:text-sm hover:border-blue-500/30 hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transform: 'translateZ(25px)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
        
        {/* Enhanced hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
      );

  return (
    <section id="projects" className="section relative overflow-hidden py-20 md:py-32 pt-24 pb-24">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-secondary/10 to-background z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl opacity-30 z-0"></div>
      
      <div className="container mx-auto relative z-10 px-6 pl-8 pr-8">
        {/* Section Header with enhanced styling */}
        <div className="text-center mb-16 md:mb-24 pt-8 pb-8 padd-bottom">
          <motion.div 
            className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Notable <span className="text-blue-500">Projects</span>
          </motion.h2>
          <motion.p
            className="max-3xl mx-auto text-text-secondary text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Here are some of my featured projects that showcase my skills and experience in software development.
          </motion.p>
        </div>

        {/* Projects Grid with improved card design */}
        <div ref={ref} className="relative min-h-[400px] pt-4 pb-8 pl-4 pr-4">
          <AnimatePresence>
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))
              ) : (
                <motion.div 
                  className="col-span-3 text-center py-20 pt-16 pb-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-text-secondary/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl text-text-secondary/70">No projects found with this filter</h3>
                  <button 
                    onClick={() => setActiveFilter('all')}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors duration-300"
                  >
                    Show all projects
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* View more projects button */}
        <motion.div 
          className="text-center mt-16 pt-8 pb-8 padd-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://github.com/hemantaryapanwar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-secondary/50 hover:bg-secondary/80 text-text-primary rounded-full transition-all duration-300 group"
          >
            <span>View More on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 