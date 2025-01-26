import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  ExternalLink,
  Code,
  Terminal,
  MessageCircle,
  Box,
  Cpu,
  Globe,
  Cloud,
  Database,
  Command,
  CheckCircle,
  XCircle,
  Loader,
} from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlogPage from "./BlogPage";

const CyberLines = () => (
  <div className="fixed inset-0 z-0 opacity-20">
    {Array.from({ length: 50 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px w-full bg-indigo-500"
        style={{ top: `${i * 2}%` }}
        animate={{
          opacity: [0.5, 0, 0.5],
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

export const FloatingCubes = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 opacity-20">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 border border-indigo-500"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            rotate: 0,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const ParallaxText = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.span ref={ref} style={{ y }} className={className}>
      {children}
    </motion.span>
  );
};

export const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: 1,
      scale: [1, 1.2, 1.6, 1],
      rotate: [0, 180, 360, 540],
      borderRadius: ["50%", "20%", "50%", "10%"],
      borderColor: [
        "rgba(99, 102, 241, 1)",
        "rgba(167, 139, 250, 1)",
        "rgba(192, 132, 252, 1)",
        "rgba(99, 102, 241, 1)",
      ],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1],
    }}
    className="w-20 h-20 border-4 border-indigo-500 rounded-full border-t-transparent 
               shadow-lg shadow-indigo-500/50 
               bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
  />
);

const BlogNavLink = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.button
        onClick={() => navigate("/blog")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center gap-2 px-4 py-2 rounded-lg
                   bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm
                   hover:bg-indigo-500/20 hover:border-indigo-400
                   transition-all duration-300 text-white"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0
                      transition-all duration-300"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <MessageCircle className="w-5 h-5" />
        </motion.div>
        <span className="relative font-medium group-hover:text-white transition-colors">
          Read Blog
        </span>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-indigo-400 group-hover:bg-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.button>
    </motion.div>
  );
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <ChevronUp className="w-6 h-6 relative z-10" />
            <motion.div
              className="absolute inset-0 border-2 border-indigo-500/50 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "< Full Stack Developer />";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-indigo-900/20 overflow-hidden pt-20 pb-9">
      <BlogNavLink />
      <CyberLines />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.5, rotate: -20 }}
          animate={{
            scale: 1,
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          className="mb-12"
        >
          <div className="w-32 h-32 mx-auto mb-8 relative group">
            <motion.div
              className="absolute inset-0 border-4 border-indigo-500 rounded-2xl 
                         group-hover:border-purple-500 transition-all duration-300"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
                borderColor: [
                  "rgba(99, 102, 241, 1)",
                  "rgba(124, 58, 237, 1)",
                  "rgba(99, 102, 241, 1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <Terminal
              className="w-full h-full text-indigo-400 relative z-10 
                         group-hover:text-purple-400 transition-colors"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-7xl font-bold text-white mb-6 tracking-tight md:pt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ashparsh Pandey
        </motion.h1>

        <div className="text-2xl text-indigo-400 font-mono mb-8 h-10 flex justify-center items-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {typedText}
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </div>

        <div className="flex justify-center space-x-6">
          {[
            {
              Icon: GithubIcon,
              href: "https://github.com/Ashparshp",
              color: "hover:text-white hover:bg-gray-800",
            },
            {
              Icon: LinkedinIcon,
              href: "https://www.linkedin.com/in/ashparsh",
              color: "hover:text-white hover:bg-blue-600",
            },
            {
              Icon: Mail,
              href: "mailto:ashparsh.connects@gmail.com",
              color: "hover:text-white hover:bg-red-500",
            },
          ].map(({ Icon, href, color }, i) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 30px rgba(129, 140, 248, 0.5)",
              }}
              className={`p-4 bg-indigo-900/30 rounded-xl text-indigo-400 
                         border border-indigo-500/30 
                         transition-all duration-300 ${color}`}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Community Manager @Layer5",
      icon: Globe,
      description: [
        "Led community engagement initiatives",
        "Managed communication channels",
        "Conducted PR reviews",
      ],
    },
    {
      company: "Open Source Contributor",
      icon: Code,
      description: [
        // Experience Component (continued)
        "Enhanced frontend development",
        "Contributed to GitHub PRs",
        "Improved documentation",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Experience
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              className="relative group"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 
                             group-hover:opacity-50 transition duration-300"
              />
              <div
                className="relative p-6 bg-black rounded-lg border border-indigo-500/30 h-full 
                            backdrop-blur-sm group-hover:border-indigo-400 transition-colors duration-300"
              >
                <div className="relative mb-4 flex items-center">
                  <exp.icon className="w-12 h-12 text-indigo-400 p-2" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {exp.company}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-300 flex items-start"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="mr-2 text-indigo-400 text-lg"
                      >
                        •
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "ChronoSpace",
      description: [
        "Built a blogging platform with JWT and Google OAuth authentication",
        "Integrated AWS S3 for scalable image storage",
        "Implemented nested comments and real-time notifications",
      ],
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "JWT"],
      github: "https://github.com/yourusername/chronospace",
      demo: "https://chronospace.netlify.app",
      icon: Globe,
    },
    {
      title: "MediaFlow",
      description: [
        "Created a YouTube-inspired backend system",
        "Implemented authentication with JWT and bcrypt",
        "Utilized MongoDB with Mongoose for data management",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/Ashparshp/MediaFlow",
      icon: Box,
    },
    {
      title: "Library Management",
      description: [
        "Built a full-stack library system with Golang and React",
        "Designed RESTful APIs with Gin framework",
        "Integrated PostgreSQL and MongoDB databases",
      ],
      tech: ["Go", "React", "PostgreSQL", "MongoDB"],
      github: "https://github.com/Ashparshp/LibraryReactGo",
      icon: Cpu,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const LinkButton = ({ href, children }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 text-indigo-400 hover:text-white transition-colors
                 bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20"
    >
      {children}
    </motion.a>
  );

  return (
    <section className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Projects
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="relative group"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 
                             group-hover:opacity-50 transition duration-300"
              />

              <div
                className="relative p-6 bg-black rounded-lg border border-indigo-500/30 h-full 
                            backdrop-blur-sm group-hover:border-indigo-400 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <project.icon className="w-12 h-12 text-indigo-400 p-2" />
                    <h3
                      className="ml-4 text-xl font-bold text-indigo-400 
                                 group-hover:text-indigo-300 transition-colors duration-300"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex space-x-3">
                    <LinkButton href={project.github}>
                      <GithubIcon size={20} />
                    </LinkButton>
                    {project.demo && (
                      <LinkButton href={project.demo}>
                        <ExternalLink size={20} />
                      </LinkButton>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {project.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-300 flex items-start"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="mr-2 text-indigo-400 text-lg"
                      >
                        •
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-indigo-400 border border-indigo-500/30 rounded-full
                               bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Development",
      icon: Command,
      skills: ["Python", "Node.js", "Go"],
      description: "Building robust backend services and APIs",
    },
    {
      title: "Frontend & Cloud",
      icon: Cloud,
      skills: ["React", "Docker", "AWS"],
      description: "Creating responsive UIs and cloud solutions",
    },
    {
      title: "Database & DevOps",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Kubernetes"],
      description: "Managing data and infrastructure",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const Skill = ({ name }) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative group"
      role="listitem"
    >
      <div
        className="relative p-4 bg-black/80 rounded-2xl border border-indigo-500/20
                    text-center font-mono text-indigo-400 backdrop-blur-sm"
      >
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 
                      rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-all duration-300"
        />
        <div className="relative z-10 flex items-center justify-center space-x-2">
          <span className="text-base lg:text-lg">{name}</span>
          <motion.div
            className="w-1 h-1 bg-indigo-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_30%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Skills & Technologies
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="relative group"
              variants={containerVariants}
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 
                             group-hover:opacity-50 transition duration-300"
              />

              <div
                className="relative bg-black border border-indigo-500/30 rounded-2xl p-6
                             group-hover:border-indigo-400 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-indigo-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-center text-sm mb-6">
                  {category.description}
                </p>

                <div role="list" className="space-y-3">
                  {category.skills.map((skill) => (
                    <Skill key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleEmailClick = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoUrl = encodeURI(
        "mailto:ashparsh.connects@gmail.com" +
          "?subject=Project Collaboration Interest" +
          "&body=Hi Ashparsh,%0D%0A%0D%0AI came across your portfolio and would love to discuss potential collaboration opportunities.%0D%0A%0D%0ABest regards"
      );

      window.location.href = mailtoUrl;
      showNotification("Opening your email client...", "success");
    } catch (error) {
      showNotification(
        "Could not open email client. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const NotificationToast = ({ message, type }) => {
    const toastVariants = {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -100, opacity: 0 },
    };

    const styles = {
      success: {
        background: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
        border: "border-green-500/30",
        text: "text-green-400",
        icon: CheckCircle,
      },
      error: {
        background: "bg-gradient-to-r from-red-500/20 to-rose-500/20",
        border: "border-red-500/30",
        text: "text-red-400",
        icon: XCircle,
      },
    };

    const { background, border, text, icon: Icon } = styles[type];

    return (
      <motion.div
        variants={toastVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
                    px-6 py-3 rounded-lg backdrop-blur-sm
                    border ${border} ${background}
                    flex items-center gap-2 shadow-lg`}
      >
        <Icon className={`w-5 h-5 ${text}`} />
        <span className={`text-sm font-medium ${text}`}>{message}</span>
      </motion.div>
    );
  };

  return (
    <section className="py-20 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Let's Connect
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <div
            className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 
                         group-hover:opacity-50 transition duration-300"
          />

          <div
            className="relative bg-black/80 border border-indigo-500/30 rounded-xl p-8 backdrop-blur-sm 
                         group-hover:border-indigo-400 transition-colors duration-300"
          >
            <MessageCircle className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300">
              Ready to collaborate or chat about tech? Let's create something
              amazing together!
            </p>
          </div>
        </motion.div>

        <motion.button
          onClick={handleEmailClick}
          disabled={isSubmitting}
          whileHover={{
            boxShadow:
              "2px 2px 8px rgba(0,0,0,0.1), -1px -1px 6px rgba(255,255,255,0.2)",
          }}
          className="px-6 py-3 bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 
           hover:to-indigo-200 text-indigo-700 rounded-lg font-semibold disabled:opacity-50 
           transition-all duration-300 disabled:cursor-not-allowed flex items-center gap-2
           mx-auto border border-indigo-100 hover:border-indigo-200 hover:scale-105
           hover:text-indigo-800 shadow-md hover:shadow-indigo-100/20 mb-6 mt-6"
        >
          {isSubmitting ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <Mail className="w-5 h-5" />
          )}
          Get in Touch
        </motion.button>

        <div className="p-1.5 bg-black/80 border border-indigo-500/10 rounded-lg backdrop-blur-sm inline-block">
          <div className="flex justify-center gap-4">
            {[
              { icon: GithubIcon, href: "https://github.com/Ashparshp" },
              {
                icon: LinkedinIcon,
                href: "https://www.linkedin.com/in/ashparsh",
              },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-indigo-500/10 rounded-md text-indigo-400 
                         hover:text-white hover:bg-indigo-500/20 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {notification && (
          <NotificationToast
            message={notification.message}
            type={notification.type}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

<BlogPage />;

export { Hero, Experience, Projects, Skills, Contact, BlogPage };
