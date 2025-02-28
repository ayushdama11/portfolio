import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "../../constants/projectData";
import {
  containerVariants,
  cardVariants,
  buttonVariants,
  fadeInUpVariants,
} from "../../animations/variants";
import { useTheme } from "../ThemeToggle";
import { twMerge } from "tailwind-merge";

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const LinkButton = ({ href, children, isDark, ariaLabel }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
    aria-label={ariaLabel}
    className={`p-2 transition-colors rounded-lg ${
      isDark
        ? "text-indigo-400 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/30"
        : "text-indigo-600 hover:text-indigo-900 bg-indigo-100/50 hover:bg-indigo-200/70"
    }`}
  >
    {children}
  </motion.a>
);

const ProjectCard = ({ project, isDark }) => {
  const tagColors = useMemo(() => {
    const keyTechs = {
      React: {
        dark: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        light: "bg-blue-100/80 text-blue-700 border-blue-300/70",
      },
      Node: {
        dark: "bg-green-500/20 text-green-400 border-green-500/30",
        light: "bg-green-100/80 text-green-700 border-green-300/70",
      },
      Express: {
        dark: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        light: "bg-yellow-100/80 text-yellow-700 border-yellow-300/70",
      },
      MongoDB: {
        dark: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        light: "bg-emerald-100/80 text-emerald-700 border-emerald-300/70",
      },
      JWT: {
        dark: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        light: "bg-purple-100/80 text-purple-700 border-purple-300/70",
      },
      TailwindCSS: {
        dark: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
        light: "bg-cyan-100/80 text-cyan-700 border-cyan-300/70",
      },
    };

    return project.tech.map((tech) => {
      for (const [key, colors] of Object.entries(keyTechs)) {
        if (tech.includes(key)) return colors;
      }
      return {
        dark: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
        light: "bg-indigo-100/80 text-indigo-600 border-indigo-300/70",
      };
    });
  }, [project.tech]);

  const highlightText = useCallback(
    (text) => {
      return text.split(" ").map((word, i) => {
        const key = `${text}-${i}-${word}`;

        if (
          word.match(
            /(developed|integrated|created|enhanced|built|implemented|designed|utilized)/i
          )
        ) {
          return (
            <span
              key={key}
              className={`font-semibold ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              {word}{" "}
            </span>
          );
        } else if (
          word.match(
            /(React|Node\.js|MongoDB|AWS|API|frontend|backend|authentication|database|JWT)/i
          )
        ) {
          return (
            <span
              key={key}
              className={`font-medium ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {word}{" "}
            </span>
          );
        }

        return <span key={key}>{word} </span>;
      });
    },
    [isDark]
  );

  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      whileHover={{ y: -5 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300" />

      <div
        className={`relative p-6 rounded-lg border h-full backdrop-blur-sm transition-all duration-300 ${
          isDark
            ? "bg-black/90 border-indigo-500/30 group-hover:border-indigo-400"
            : "bg-white/90 border-indigo-300/50 group-hover:border-indigo-500"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className={`p-3 rounded-lg transition-colors duration-300 ${
                isDark
                  ? "bg-indigo-500/10 group-hover:bg-indigo-500/20"
                  : "bg-indigo-100/50 group-hover:bg-indigo-200/70"
              }`}
            >
              <project.icon
                className={`w-8 h-8 transition-colors duration-300 ${
                  isDark
                    ? "text-indigo-400 group-hover:text-indigo-300"
                    : "text-indigo-600 group-hover:text-indigo-500"
                }`}
              />
            </motion.div>
            <h3
              className={`ml-4 text-xl font-bold transition-colors duration-300 ${
                isDark
                  ? "text-white group-hover:text-indigo-400"
                  : "text-gray-900 group-hover:text-indigo-600"
              }`}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex space-x-3">
            <LinkButton
              href={project.github}
              isDark={isDark}
              ariaLabel={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon size={20} />
            </LinkButton>
            {project.demo && (
              <LinkButton
                href={project.demo}
                isDark={isDark}
                ariaLabel={`View live demo for ${project.title}`}
              >
                <ExternalLink size={20} />
              </LinkButton>
            )}
          </div>
        </div>

        <ul className="space-y-2">
          {project.description.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={itemVariants}
              className={`flex items-start group/item p-2 rounded-lg transition-colors duration-300 ${
                isDark
                  ? "text-gray-300 hover:bg-indigo-500/10"
                  : "text-gray-600 hover:bg-indigo-50"
              }`}
            >
              <ArrowRight
                className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform duration-300 ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
              <span
                className={`group-hover/item:${
                  isDark ? "text-gray-200" : "text-gray-900"
                } transition-colors duration-300`}
              >
                {highlightText(item)}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              variants={fadeInUpVariants}
              transition={{ delay: i * 0.05 + 0.3 }}
              className={twMerge(
                `px-3 py-1 text-sm border rounded-full transition-all`,
                isDark ? tagColors[i].dark : tagColors[i].light
              )}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 relative ${isDark ? "bg-black" : "bg-white"}`}>
      {/* Background effects */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          isDark
            ? "from-indigo-900/1 via-black to-black"
            : "from-indigo-100/50 via-white to-white"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`text-3xl font-bold text-center ${
            isDark ? "text-white" : "text-gray-900"
          } mb-16`}
        >
          Projects
          <div
            className={`w-24 h-1 bg-gradient-to-r ${
              isDark
                ? "from-white to-gray-500"
                : "from-indigo-600 to-indigo-300"
            } mx-auto mt-4 rounded-full`}
          />
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isDark={isDark}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
