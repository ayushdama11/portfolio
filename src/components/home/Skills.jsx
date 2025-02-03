import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import { skillCategories } from "../../constants/skillsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Skills = () => {
  const [minimizedCategories, setMinimizedCategories] = useState(new Set());
  const [expandedSkills, setExpandedSkills] = useState(new Set());

  const toggleCategory = (categoryTitle) => {
    setMinimizedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryTitle)) {
        newSet.delete(categoryTitle);
      } else {
        newSet.add(categoryTitle);
      }
      return newSet;
    });
  };

  const toggleExpandSkills = (categoryTitle) => {
    setExpandedSkills((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryTitle)) {
        newSet.delete(categoryTitle);
      } else {
        newSet.add(categoryTitle);
      }
      return newSet;
    });
  };

  const Skill = ({ name }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="relative group w-full"
      role="listitem"
    >
      <div
        className="relative p-2 bg-black/80 rounded-lg border border-indigo-500/30 
                    text-center font-mono backdrop-blur-sm"
      >
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/20 to-blue-600/10 
                      rounded-lg blur-sm opacity-0 group-hover:opacity-40 transition-all duration-300"
        />
        <div className="relative z-10 flex items-center justify-between px-2">
          <span className="text-sm text-indigo-200 group-hover:text-white transition-colors duration-300">
            {name}
          </span>
          <motion.div
            className="w-1.5 h-1.5 bg-indigo-300 rounded-full"
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

  const SkillsList = ({ skills, categoryTitle }) => {
    const isExpanded = expandedSkills.has(categoryTitle);
    const displaySkills = isExpanded ? skills : skills.slice(0, 4);
    const hasMoreSkills = skills.length > 4;

    return (
      <div className="space-y-2">
        <div className="flex flex-col gap-2">
          {displaySkills.map((skill) => (
            <Skill key={skill} name={skill} />
          ))}
        </div>

        {hasMoreSkills && (
          <motion.button
            onClick={() => toggleExpandSkills(categoryTitle)}
            className="w-full flex items-center justify-center p-1.5 text-sm text-indigo-300 hover:text-white 
                     border border-indigo-500/30 rounded-lg transition-all duration-300 hover:border-indigo-400"
          >
            <span className="mr-2">
              {isExpanded ? "Show Less" : `Show ${skills.length - 4} More`}
            </span>
            {isExpanded ? (
              <Minus className="w-3 h-3 group-hover:scale-110 transition-transform" />
            ) : (
              <Plus className="w-3 h-3 group-hover:scale-110 transition-transform" />
            )}
          </motion.button>
        )}
      </div>
    );
  };

  return (
    <section className="py-12 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-3 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center text-white mb-8"
        >
          Skills & Technologies
          <div className="w-16 h-0.5 bg-gradient-to-r from-white to-gray-500 mx-auto mt-2 rounded-full" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="relative group h-fit"
              variants={containerVariants}
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl blur opacity-30 
                           group-hover:opacity-50 transition duration-300"
              />

              <div
                className="relative bg-black border border-indigo-500/30 rounded-xl p-4
                           group-hover:border-indigo-400 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <category.icon className="w-5 h-5 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300 mr-2" />
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="text-indigo-300 hover:text-white transition-colors duration-300"
                    aria-label={
                      minimizedCategories.has(category.title)
                        ? "Expand"
                        : "Minimize"
                    }
                  >
                    {minimizedCategories.has(category.title) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronUp className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {!minimizedCategories.has(category.title) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.description && (
                        <p className="text-gray-300 text-center text-xs mb-4">
                          {category.description}
                        </p>
                      )}

                      <SkillsList
                        skills={category.skills}
                        categoryTitle={category.title}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
