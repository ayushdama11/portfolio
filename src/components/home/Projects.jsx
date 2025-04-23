import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Calendar, ArrowRight } from "lucide-react";

const Projects = () => {
  const [hoverProject, setHoverProject] = useState(null);

  return (
    <>
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            isHovered={hoverProject === project.id}
            onHover={() => setHoverProject(project.id)}
            onLeave={() => setHoverProject(null)}
          />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({ project, index, isHovered, onHover, onLeave }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="card card-hover overflow-hidden flex flex-col"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-80 bg-slate-200 dark:bg-slate-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600">
            <span className="text-sm">No image available</span>
          </div>
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.featured && (
            <span className="bg-primary-500/90 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
              Featured
            </span>
          )}
          <span className="bg-slate-900/70 text-white dark:bg-white/10 text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
            <Calendar size={12} />
            {project.period}
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline !px-3 !py-1.5 text-sm"
            >
              <Github size={16} className="mr-1" />
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-3 !py-1.5 text-sm"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          {project.detailLink && (
            <Link
              to={project.detailLink}
              className="btn btn-secondary !px-3 !py-1.5 text-sm ml-auto"
            >
              Details
              <ArrowRight size={16} className="ml-1" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

const projectsData = [
  {
    id: "yatrazen",
    title: "Yatrazen : AI Trip Planner",
    description:
      "YatraZen is an intelligent, AI-powered travel planning web application built with React that helps users effortlessly plan their trips. By entering details like destination, budget, number of travelers, and duration, users receive personalized itineraries, travel suggestions, and budget breakdowns—making trip planning fast, smart, and hassle-free.",
    image: "yzen.png",
    tech: ["React", "Firebase", "Tailwind CSS", "Gemini API", "Google Place API"],
    github: "https://github.com/ayushdama11/yatrazen",
    liveLink: "https://yatrazen-tawny.vercel.app/",
    featured: true,
    period: "Dec 2024 - Jan 2025",
  },
  {
    id: "trend-trove",
    title: "Trend Trove : Ecommerce Website",
    description: "Trend-Trove is a full-stack e-commerce web application built with React, Node.js, Express.js, TypeScript, and MongoDB. It offers a seamless shopping experience with categorized product listings and a dynamic admin dashboard for managing products, inventory, and orders.",
    image: "tt.png",
    tech: ["React", "Node", "Express", "MongoDB", "TypeScript"],
    github: "https://github.com/ayushdama11/trend-trove",
    featured: true,
    period: "Apr 2024 - Jun 2024",
  },
  {
    id: "burgerBliss",
    title: "Burger Bliss : Fast Food Website",
    description: "Burger Bliss is a responsive fast-food website built using HTML, CSS, JavaScript, and Tailwind CSS. Designed for an engaging user experience, it features a clean layout, mobile-first design, and optimized performance for fast loading. With visually appealing UI and smooth navigation, Burger Bliss enhances user interaction and satisfaction across all devices.",
    image: "bb.png",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ayushdama11/burger-bliss",
    liveLink: "https://burgerblisss.netlify.app/",
    featured: true,
    period: "Dec 2024 - Jan 2025",
  }
];