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
      <div className="relative h-48 bg-slate-200 dark:bg-slate-800">
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
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A modern, responsive weather dashboard application built with React that allows users to search for any city and view its current weather information and forecasts.",
    image: "/assets/projects/weather-dashboard.jpg",
    tech: ["React", "Context API", "Tailwind CSS", "Framer Motion", "OpenWeatherMap API"],
    github: "https://github.com/aakash-kumar-singh/WeatherForecast",
    liveLink: "https://weather-dashboard-aakash.vercel.app",
    featured: true,
    period: "Mar 2024 - Present",
    detailLink: "/projects/weather-dashboard",
  },
  {
    id: "car-service",
    title: "Car Service",
    description:
      "A fully functional car rental website with a user-friendly interface and robust backend, tailored to streamline the car rental process for customers and administrators.",
    image: "/assets/projects/car-service.jpg",
    tech: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
    github: "https://github.com/aakash-kumar-singh/car-service",
    liveLink: "",
    featured: true,
    period: "Dec 2024 - Present",
  },
  {
    id: "lifeguard-solutions",
    title: "Lifeguard Solutions",
    description:
      "An innovative insurance website tailored specifically for LIC field agents, aimed at streamlining their daily operations with features like premium calculator and claim management.",
    image: "/assets/projects/lifeguard.jpg",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Express"],
    github: "https://github.com/aakash-kumar-singh/lifeguard-solutions",
    liveLink: "",
    period: "Feb 2024 - Jun 2024",
  },
];