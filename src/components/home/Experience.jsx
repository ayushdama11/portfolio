import { motion } from "framer-motion";
import { experiences } from "../../constants/experienceData";
import { containerVariants, cardVariants } from "../../animations/variants";

export const Experience = () => {
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
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 
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
