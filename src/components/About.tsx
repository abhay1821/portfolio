'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [experience, setExperience] = useState({
    startYear: 2021,
    currentYear: 2022, // Default value for server rendering
    yearsOfExperience: 2.5 // Default value for server rendering
  });

  useEffect(() => {
    // Update experience data on the client side
    setExperience({
      startYear: 2022,
      currentYear: new Date().getFullYear(),
      yearsOfExperience: new Date().getFullYear() - 2022
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

  // Work experience data
  const workExperiences = [
    {
      company: "Infinitybox",
      position: "Software Developer",
      period: `June 2023 - Present`,
      description: "Developing and maintaining user-facing features for web and mobile applications. Collaborating closely with UI/UX designers and backend developers to implement front-end solutions that meet business requirements and design specifications."
    }
  ];

  // Internship data
  const internships = [
    {
      company: "Infinitybox",
      position: "Software Engineering Intern",
      period: "Jan 2023 - May 2023",
      description: "Delivery partner app for drivers using Flutter, Firebase, Node.js, used geolocation for Accurate and  optimised routes"
    },
    {
      company: "AI-Bharata",
      position: "Frontend Development Intern",
      period: "Jan 2022 - August 2022",
      description: "Crypto exchange app for buying and selling crypto using Flutter, Firebase, Node.js, Deeplinking"
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
                  src="/images/proPic.jpeg" 
                  alt="Abhay Chaudhary in a snowy setting"
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
                <h3 className="text-xl padd-bottom font-bold mb-4">Work Experience</h3>
                <div className="space-y-12 mb-8">
                  {workExperiences.map((work, index) => (
                    <div 
                      key={index}
                      style={{
                        padding: '16px',
                        borderRadius: '16px',
                        background: 'rgba(30, 64, 175, 0.15)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(59, 130, 246, 0.3)',
                        backdropFilter: 'blur(10px)',
                        border: 'none'
                      }}
                      className="transition-all duration-500 hover:translate-y-[-5px]"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
                        <h4 className="font-bold text-2xl mb-4 md:mb-0">
                          <span className="font-bold text-2xl text-blue-500 mb-4 md:mb-0 ">{work.company}</span>
                        </h4>
                        <span className="inline-block text-white px-4 py-2 rounded-full text-sm font-medium">{work.period}</span>
                      </div>
                      <div className="bg-black/20 p-6 rounded-lg mb-6">
                        <p className="text-lg font-semibold text-white mb-4">
                          <span className="relative inline-block">
                            {work.position}
              
                          </span>
                        </p>
                        <p className="text-gray-300">
                          {work.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Internship Experience Section */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-bold padd-top">Internship Experience</h3>
              <div className="space-y-12 ">
                {internships.map((internship, index) => (
                  <div 
                    key={index} 
                    style={{
                      padding: '16px',
                      borderRadius: '16px',
                      background: 'rgba(30, 64, 175, 0.15)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(59, 130, 246, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      marginTop: '10px'
                    }}
                    className="transition-all duration-500 hover:translate-y-[-5px]"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
                      <h4 className="font-bold text-2xl text-blue-500 mb-4 md:mb-0">{internship.company}</h4>
                      <span className="inline-block text-white px-4 py-2 rounded-full text-sm font-medium">{internship.period}</span>
                    </div>
                    <div className="bg-black/20 p-6 rounded-lg mb-6">
                      <p className="text-lg font-semibold text-white mb-4">{internship.position}</p>
                      <p className="text-gray-300">{internship.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 