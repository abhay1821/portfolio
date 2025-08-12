"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 3,
    title: "Healthcare Dashboard",
    description:
      "Built a healthcare dashboard serving 200+ daily users with appointment management, prescription tracking, and health record access. Implemented RBAC across 15+ protected routes, debounced input handling, and code-splitting to boost performance by 30%.",
    tags: ["React", "TypeScript","MUI", "Node.js"],
    image: "/images/health.png",
    link: "https://gregarious-zabaione-7393c7.netlify.app/auth/jwt/sign-in",
    github: "#",
    period: "Jan. 2025 - Mar. 2025",
  },
  {
    id: 2,
    title: "Shopping Dashboard",
    description:
      "Developed Adventum website using React.js & Redux, boosting performance and UX through efficient state management and Vercel deployment. Migrated to Tailwind CSS for 25% faster loads, integrated REST APIs for 25% quicker data retrieval, and enhanced security with JSX auto‑escaping and DOMPurify to prevent XSS.",
    tags: ["Recharts", "React", "Tailwind", "Redux"],
    image: "/images/adventum.png",
    link: "https://adventum-showcasing-frontend-qz5p.vercel.app/",
    github: "#",
    period: "July. 2023 - Feb 2024",
  },
  {
    id: 1,
    title: "Crypto Exchange App",
    description:
      "Built a crypto exchange app with 35+ screens using Flutter and Providers for state management. Implemented deep linking, QR invitations, WebSockets for real-time data, biometric authentication, and Paytm payment gateway. Deployed on both Play Store and App Store.",
    tags: ["Flutter", "Firebase", "Node.js", "WebSocket"],
    image: "/images/ampiy.webp",
    link: "https://play.google.com/store/apps/details?id=com.ampiy.app",
    github: "#",
    period: "Jan. 2022 - Aug. 2022",
  },
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
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

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
      className="group perspective-[1000px] "
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
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
            : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
          transition: "transform 0.2s ease-out",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        {/* Project Image with enhanced styling */}
        <div className="relative h-56 md:h-64 overflow-hidden ">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
          <div className="w-full h-full bg-gradient-to-br from-secondary/80 via-background/90 to-secondary/80">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              className="mix-blend-normal transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Time period badge with improved styling */}
          <div
            className="absolute top-6 right-6 z-20 bg-secondary/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full shadow-lg"
            style={{ transform: "translateZ(30px)" }}
          >
            {project.period}
          </div>
        </div>

        {/* Project Content with improved padding and spacing */}
        <div
          className="p-10 md:p-14 flex-grow flex flex-col"
          style={{ transform: "translateZ(20px)" }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-10 group-hover:text-blue-500 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-secondary mb-10 text-sm md:text-base leading-relaxed flex-grow">
            {project.description}
          </p>

          {/* Tags with improved styling */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag: string, idx: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                className=" bg-background/50 rounded-full text-sm font-medium border border-border/50 text-text-secondary/80 hover:border-primary/30 hover:text-primary transition-colors duration-300"
                style={{ padding: "5px" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Links with improved styling */}
          <div
            className="flex gap-4 mt-auto pt-6"
            style={{ marginBottom: "5px", marginTop: "5px" }}
          >
            <a
              href={project.link}
              className="flex-1 px-6 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm md:text-base hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group overflow-hidden relative"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transform: "translateZ(25px)" }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3 mr-2 group-hover:animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </span>
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
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.tags.some(
            (tag) => tag.toLowerCase() === activeFilter.toLowerCase()
          )
        );

  return (
    <section
      id="projects"
      className="section relative overflow-hidden py-20 md:py-32 pt-24 pb-24"
    >
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
            Here are some of my featured projects that showcase my skills and
            experience in software development.
          </motion.p>
        </div>

        {/* Projects Grid with improved card design */}
        <div ref={ref} className="relative min-h-[400px] pt-8 pb-12 pl-6 pr-6">
          <AnimatePresence>
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))
              ) : (
                <motion.div
                  className="col-span-3 text-center py-20 pt-16 pb-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-text-secondary/30 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl text-text-secondary/70">
                    No projects found with this filter
                  </h3>
                  <button
                    onClick={() => setActiveFilter("all")}
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
            href="https://github.com/abhay1821"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-secondary/50 hover:bg-secondary/80 text-text-primary rounded-full transition-all duration-300 group"
          >
            <span>View More on GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
