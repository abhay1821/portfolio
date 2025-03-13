'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [experience, setExperience] = useState({
    startYear: 2021,
    currentYear: 2023, // Default value for server rendering
    yearsOfExperience: 2 // Default value for server rendering
  });

  useEffect(() => {
    // Update experience data on the client side
    setExperience({
      startYear: 2023,
      currentYear: new Date().getFullYear(),
      yearsOfExperience: new Date().getFullYear() - 2023
    });
  }, []);

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

  // Internship data
  const internships = [
    {
      company: "XYZ Tech",
      position: "Software Engineering Intern",
      period: "May 2020 - Aug 2020",
      description: "Developed and maintained web applications using React.js and Node.js. Collaborated with the team to implement new features and fix bugs."
    },
    {
      company: "ABC Solutions",
      position: "Frontend Development Intern",
      period: "Dec 2019 - Feb 2020",
      description: "Assisted in designing and implementing responsive user interfaces. Worked with HTML, CSS, and JavaScript to create interactive web pages."
    }
  ];

  return (
    <section id="about" className="section relative overflow-hidden py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tl from-background via-secondary/20 to-background z-0"></div>
      
      <div className="container mx-auto relative z-10 px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Image side */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 mix-blend-overlay z-10"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 opacity-30 blur-sm z-0"></div>
              <div className="absolute inset-2 bg-secondary/80 rounded-xl z-[5] overflow-hidden p-1">
                {/* Profile image */}
                <Image 
                  src="/images/profile-image.jpeg" 
                  alt="Hemant Arya Panwar in a snowy setting"
                  width={800}
                  height={1000}
                  style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
                  priority
                  className="transition-transform duration-500 hover:scale-105 rounded-lg"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-primary/20 rounded-xl z-0 backdrop-blur-sm"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-accent/20 rounded-xl z-0 backdrop-blur-sm"></div>
          </motion.div>
          
          {/* Content side */}
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-xl text-primary font-medium mb-4">About Me</h2>
              
              {/* Experience Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Professional Experience</h3>
                  <span className="text-blue-500 font-bold">{experience.yearsOfExperience}+ Years</span>
                </div>
                <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-primary rounded-full"
                    style={{ width: `${Math.min(100, (experience.yearsOfExperience / 5) * 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-text-secondary mt-1">
                  <span>{experience.startYear}</span>
                  <span>{experience.currentYear}</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-semibold">Work Experience</h3>
                <p className="text-text-secondary">
                  Software Developer at <span className="text-blue-500 text-xl font-bold">Deloitte</span>
                </p>
              </div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-text-secondary mb-8 text-lg">
              I&apos;m a Software Developer Analyst at Deloitte with experience in developing and maintaining user-facing features for web applications. I collaborate closely with UI/UX designers and backend developers to implement front-end solutions that meet business requirements and design specifications.
            </motion.p>
            
            {/* Internship Experience Section */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Internship Experience</h3>
              <div className="p-4 md:p-6 space-y-8" >
                {internships.map((internship, index) => (
                  <div key={index} className="p-6 md:p-8 rounded-xl bg-secondary/20 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-medium text-lg text-blue-500">{internship.company}</h4>
                      <span className="text-xs bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full">{internship.period}</span>
                    </div>
                    <p className="text-sm font-medium text-text-primary mb-3">{internship.position}</p>
                    <p className="text-sm text-text-secondary">{internship.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-text-secondary mb-6 md:mb-8 text-sm md:text-base">
              I&apos;m open to opportunities, collaborations, and interesting projects. Let&apos;s create something amazing together!
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-text-secondary mb-10 text-lg">
              I graduated with a B.Tech in Computer Science from Indian Institute Of Information Technology, Sonepat (Roll No: 11911075). My experience includes integrating RESTful APIs, participating in Agile development processes, and working with various development tools and frameworks.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex items-center p-4 rounded-xl bg-secondary/30 backdrop-blur-sm hover:bg-secondary/40 transition-colors duration-300">
                <div className="w-4 h-4 rounded-full bg-primary mr-4"></div>
                <span className="text-text-secondary text-lg font-medium">React & Redux</span>
              </div>
              <div className="flex items-center p-4 rounded-xl bg-secondary/30 backdrop-blur-sm hover:bg-secondary/40 transition-colors duration-300">
                <div className="w-4 h-4 rounded-full bg-primary mr-4"></div>
                <span className="text-text-secondary text-lg font-medium">JavaScript & TypeScript</span>
              </div>
              <div className="flex items-center p-4 rounded-xl bg-secondary/30 backdrop-blur-sm hover:bg-secondary/40 transition-colors duration-300">
                <div className="w-4 h-4 rounded-full bg-primary mr-4"></div>
                <span className="text-text-secondary text-lg font-medium">HTML & CSS</span>
              </div>
              <div className="flex items-center p-4 rounded-xl bg-secondary/30 backdrop-blur-sm hover:bg-secondary/40 transition-colors duration-300">
                <div className="w-4 h-4 rounded-full bg-primary mr-4"></div>
                <span className="text-text-secondary text-lg font-medium">RESTful APIs</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn btn-primary px-8 py-3 text-lg">
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 