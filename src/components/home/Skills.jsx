import { motion } from "framer-motion";
import { skillCategories } from "../../constants/skillsData";
import { containerVariants } from "../../animations/variants";

export const Skills = () => {
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
          className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 
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
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-30 
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
