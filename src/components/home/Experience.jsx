import { motion } from "framer-motion";
import { experiences } from "../../constants/experienceData";
import { containerVariants, cardVariants } from "../../animations/variants";
import { Calendar, ArrowRight } from "lucide-react";
import { useTheme } from "../ThemeToggle";

export const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 relative ${isDark ? "bg-black" : "bg-white"}`}>
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
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold text-center ${
            isDark ? "text-white" : "text-gray-900"
          } mb-16`}
        >
          Experience
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />

              <div
                className={`relative p-6 rounded-lg border h-full backdrop-blur-sm transition-colors duration-300 ${
                  isDark
                    ? "bg-black border-indigo-500/30 group-hover:border-indigo-400"
                    : "bg-white border-indigo-300/50 group-hover:border-indigo-500"
                }`}
              >
                <div className="relative mb-4 flex items-center">
                  <div
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      isDark
                        ? "bg-indigo-500/10 group-hover:bg-indigo-500/20"
                        : "bg-indigo-100/50 group-hover:bg-indigo-200/70"
                    }`}
                  >
                    <exp.icon
                      className={`w-8 h-8 transition-colors duration-300 ${
                        isDark
                          ? "text-indigo-400 group-hover:text-indigo-300"
                          : "text-indigo-600 group-hover:text-indigo-500"
                      }`}
                    />
                  </div>
                  <div className="ml-4">
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 ${
                        isDark
                          ? "text-white group-hover:text-indigo-400"
                          : "text-gray-900 group-hover:text-indigo-600"
                      }`}
                    >
                      {exp.company.split("@")[0]}
                      {exp.company.includes("@") && (
                        <span
                          className={
                            isDark ? "text-indigo-400" : "text-indigo-600"
                          }
                        >
                          @{exp.company.split("@")[1]}
                        </span>
                      )}
                    </h3>
                    <div
                      className={`flex items-center mt-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
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
                        {item.split(" ").map((word, wordIndex) => {
                          if (
                            word.match(
                              /(managed|developed|improved|conducted|organized|enhanced|contributed|maintained|successfully|implemented)/i
                            )
                          ) {
                            return (
                              <span
                                key={wordIndex}
                                className={`font-semibold ${
                                  isDark ? "text-indigo-400" : "text-indigo-600"
                                }`}
                              >
                                {word}{" "}
                              </span>
                            );
                          } else if (
                            word.match(
                              /(technical|community|documentation|frontend|GitHub|codebase|PR|UI|communication)/i
                            )
                          ) {
                            return (
                              <span
                                key={wordIndex}
                                className={`font-medium ${
                                  isDark ? "text-blue-400" : "text-blue-600"
                                }`}
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
