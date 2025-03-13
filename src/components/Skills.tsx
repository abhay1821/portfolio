'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 92 },
  { name: 'React', level: 88 },
  { name: 'Angular', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Python', level: 85 },
  { name: 'C++', level: 82 },
  { name: 'WebRTC', level: 78 },
];

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { 
    name: 'WebRTC', 
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDI4OGQxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTEyIDJhMTAgMTAgMCAwIDEgMTAgMTBjMCA1LjUyLTQuNDggMTAtMTAgMTBzLTEwLTQuNDgtMTAtMTBjMC01LjUyIDQuNDgtMTAgMTAtMTB6Ij48L3BhdGg+PHBhdGggZD0iTTggMTJoOCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMiA4djgiPjwvcGF0aD48cGF0aCBkPSJNOCA4bDggOCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNiA4bC04IDgiPjwvcGF0aD48L3N2Zz4=' 
  },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Next.js', icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
  { name: 'Notion', icon: '/images/Notion_icon.png' },
];

// Simple array for the grid display
const techNames = technologies.map(tech => tech.name);

// 3D Card component for technology cards
const TechCard = ({ tech, index }: { tech: { name: string; icon: string }; index: number }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    // Calculate rotation based on mouse position
    // We divide by 10 to reduce the effect for subtlety
    const rotateY = ((x - rect.width / 2) / rect.width) * 20;
    const rotateX = ((rect.height / 2 - y) / rect.height) * 20;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
    setScale(1.05);
  };
  
  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };
  
  return (
    <motion.div
      key={index}
      className="flex-shrink-0 px-6 py-4 mx-2 bg-gradient-to-br from-secondary/40 to-secondary/10 backdrop-blur-md rounded-xl text-text-primary font-medium hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer shadow-md group perspective-[1000px]"
      style={{ 
        minWidth: '180px',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out, box-shadow 0.3s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="flex items-center justify-center flex-col"
        style={{ 
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{ transform: 'translateZ(30px)' }}
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </div>
        <span 
          className="text-center group-hover:text-blue-400 transition-colors duration-300"
          style={{ transform: 'translateZ(25px)' }}
        >
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section relative overflow-hidden py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background z-0"></div>
      
      <div className="container mx-auto relative z-10 px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            className="text-lg md:text-xl text-primary font-medium mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-blue-500">Technical Skills</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Skills with progress bars */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <div className="flex justify-between mb-2 md:mb-3">
                  <span className="font-medium text-base md:text-lg">{skill.name}</span>
                  <span className="text-primary font-medium text-base md:text-lg">{skill.level}%</span>
                </div>
                <div className="h-2.5 md:h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technologies */}
          <div className="flex flex-col justify-center">
            <motion.h4 
              className="text-xl md:text-2xl font-bold mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Technologies I work with
            </motion.h4>
            
            <motion.div 
              className="flex flex-wrap gap-3 md:gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techNames.map((tech) => (
                  <motion.div
                    key={tech}
                    variants={itemVariants}
                    className="bg-secondary/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
                  >
                    <span className="text-text-secondary">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Marquee Section with 3D Effects */}
        <div className="mt-28 relative">
          {/* Gradient fades on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* First marquee - left to right */}
          <div className="overflow-hidden py-8 relative">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [-3000, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <TechCard key={index} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>
          
          {/* Second marquee - right to left */}
          <div className="overflow-hidden py-8 relative mt-4">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -3000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <TechCard key={index} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 