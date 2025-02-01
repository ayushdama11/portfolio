import { motion } from "framer-motion";
import { GithubIcon, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "../../constants/projectData";
import { containerVariants, cardVariants } from "../../animations/variants";

const LinkButton = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-2 text-indigo-400 hover:text-white transition-colors bg-indigo-500/10 rounded-lg hover:bg-indigo-500/20"
  >
    {children}
  </motion.a>
);

export const Projects = () => {
  return (
    <section className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />

              <div className="relative p-6 bg-black rounded-lg border border-indigo-500/30 h-full backdrop-blur-sm group-hover:border-indigo-400 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors duration-300">
                      <project.icon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
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

                <ul className="space-y-2">
                  {project.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-300 flex items-start group/item p-2 rounded-lg hover:bg-indigo-500/10 transition-colors duration-300"
                    >
                      <ArrowRight className="w-5 h-5 mr-2 text-indigo-400 flex-shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover/item:text-gray-200 transition-colors duration-300">
                        {item.split(" ").map((word, wordIndex) => {
                          if (
                            word.match(
                              /(developed|integrated|created|enhanced|built|implemented|designed|utilized)/i
                            )
                          ) {
                            return (
                              <span
                                key={wordIndex}
                                className="text-indigo-400 font-semibold"
                              >
                                {word}{" "}
                              </span>
                            );
                          } else if (
                            word.match(
                              /(React|Node\.js|MongoDB|AWS|API|frontend|backend|authentication|database)/i
                            )
                          ) {
                            return (
                              <span
                                key={wordIndex}
                                className="text-blue-400 font-medium"
                              >
                                {word}{" "}
                              </span>
                            );
                          } else {
                            return word + " ";
                          }
                        })}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
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

export default Projects;
