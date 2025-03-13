'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  'React', 'Angular', 'WebRTC', 'Agora', 'Jira', 
  'Notion', 'Git', 'JavaScript', 'TypeScript', 'HTML', 
  'CSS', 'Python', 'C++', 'RESTful APIs', 'Redux',
  'Bootstrap', 'Responsive Design', 'UI/UX', 'Streamlit', 'Pandas'
];

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
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="px-4 md:px-5 py-2 md:py-3 bg-secondary rounded-full text-xs md:text-sm font-medium border border-border hover:border-primary transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Sliding marquee of skills */}
        <div className="mt-28 overflow-hidden">
          <motion.div
            className="flex space-x-24 py-16"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-10 py-6 mx-2 bg-secondary/30 backdrop-blur-sm rounded-xl border border-accent/20 text-text-primary font-medium hover:bg-secondary/50 hover:border-primary/30 hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer shadow-lg"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex space-x-24 py-16"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-10 py-6 mx-2 bg-secondary/30 backdrop-blur-sm rounded-xl border border-accent/20 text-text-primary font-medium hover:bg-secondary/50 hover:border-primary/30 hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-pointer shadow-lg"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 