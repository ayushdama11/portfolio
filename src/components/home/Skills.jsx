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
      whileHover={{ scale: 1.03 }}
      className="relative group w-full"
      role="listitem"
    >
      <div
        className="relative p-3 bg-black/80 rounded-xl border border-indigo-500/20 
                    text-center font-mono text-indigo-400 backdrop-blur-sm"
      >
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 
                      rounded-xl blur-sm opacity-0 group-hover:opacity-30 transition-all duration-300"
        />
        <div className="relative z-10 flex items-center justify-center space-x-2">
          <span className="text-sm lg:text-base">{name}</span>
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

  const SkillsList = ({ skills, categoryTitle }) => {
    const isExpanded = expandedSkills.has(categoryTitle);
    const displaySkills = isExpanded ? skills : skills.slice(0, 4);
    const hasMoreSkills = skills.length > 4;

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-2 auto-rows-max">
          {displaySkills.map((skill) => (
            <Skill key={skill} name={skill} />
          ))}
        </div>

        {hasMoreSkills && (
          <motion.button
            onClick={() => toggleExpandSkills(categoryTitle)}
            className="w-full flex items-center justify-center p-2 text-indigo-400 hover:text-indigo-300 
                     border border-indigo-500/20 rounded-xl transition-colors group"
          >
            <span className="mr-2">
              {isExpanded ? "Show Less" : `Show ${skills.length - 4} More`}
            </span>
            {isExpanded ? (
              <Minus className="w-4 h-4 group-hover:scale-110 transition-transform" />
            ) : (
              <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
            )}
          </motion.button>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 relative bg-black min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_30%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="relative group h-fit"
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <category.icon className="w-6 h-6 text-indigo-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    aria-label={
                      minimizedCategories.has(category.title)
                        ? "Expand"
                        : "Minimize"
                    }
                  >
                    {minimizedCategories.has(category.title) ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronUp className="w-5 h-5" />
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
                      <p className="text-gray-400 text-center text-sm mb-6">
                        {category.description}
                      </p>

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
