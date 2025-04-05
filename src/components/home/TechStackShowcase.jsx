import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code } from "lucide-react";
import { useTheme } from "../ThemeToggle";
import techStacks from "../../constants/techStacks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const SkillItem = ({ name, index, isDark }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative group w-full mb-2"
    >
      <div
        className={`relative p-2 rounded-lg border backdrop-blur-sm ${
          isDark
            ? "bg-black/80 border-indigo-500/30 text-indigo-200"
            : "bg-white/80 border-indigo-300/50 text-indigo-600"
        } font-mono`}
      >
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r rounded-lg blur-sm opacity-0 
          group-hover:opacity-40 transition-all duration-300 ${
            isDark
              ? "from-indigo-600/20 to-blue-600/10"
              : "from-indigo-400/30 to-blue-400/20"
          }`}
        />
        <div className="relative z-10 flex items-center justify-between px-2">
          <span
            className={`text-sm transition-colors duration-300 ${
              isDark ? "group-hover:text-white" : "group-hover:text-indigo-900"
            }`}
          >
            {name}
          </span>
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? "bg-indigo-300" : "bg-indigo-400"
            }`}
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
};

// Category dropdown specifically for mobile
const CategoryDropdown = ({ activeCategory, setActiveCategory, isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getButtonStyles = () => {
    return isDark
      ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/30"
      : "bg-indigo-100 border-indigo-300 text-indigo-600 hover:bg-indigo-200";
  };

  return (
    <div className="relative z-20 mb-6 flex justify-center align-center">
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-between gap-2 px-4 py-3 rounded-lg text-sm font-medium border
          backdrop-blur-sm transition-all duration-300 shadow-sm ${getButtonStyles()}`}
      >
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4" />
          <span>{activeCategory || "Select Tech Category"}</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-2 space-y-2"
          >
            {techStacks.map((category) => (
              <motion.button
                key={category.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveCategory(category.title);
                  setIsExpanded(false);
                }}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border
                  backdrop-blur-sm transition-all duration-300 shadow-sm ${getButtonStyles()} ${
                  activeCategory === category.title
                    ? isDark
                      ? "border-indigo-400"
                      : "border-indigo-500"
                    : ""
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TechStackShowcase = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("Backend & APIs");

  return (
    <section
      id="tech-stack"
      className={`py-20 relative ${isDark ? "bg-black" : "bg-white"}`}
    >
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" mx-auto px-4 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold text-center ${
            isDark ? "text-white" : "text-gray-900"
          } mb-16`}
        >
          Tech Stack
          <div
            className={`w-24 h-1 bg-gradient-to-r ${
              isDark
                ? "from-white to-gray-500"
                : "from-indigo-600 to-indigo-300"
            } mx-auto mt-4 rounded-full`}
          />
        </motion.h2>

        {/* Mobile View - Dropdown Style */}
        <div className="md:hidden">
          <CategoryDropdown
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            isDark={isDark}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 
                         group-hover:opacity-50 transition duration-300"
            />

            <div
              className={`relative p-5 rounded-lg border backdrop-blur-sm transition-colors duration-300 ${
                isDark
                  ? "bg-black border-indigo-500/30 group-hover:border-indigo-400"
                  : "bg-white border-indigo-300/50 group-hover:border-indigo-500"
              }`}
            >
              {techStacks
                .filter((category) => category.title === activeCategory)
                .map((category) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg ${
                          isDark ? "bg-indigo-500/10" : "bg-indigo-100"
                        }`}
                      >
                        <category.icon
                          className={`w-5 h-5 ${
                            isDark ? "text-indigo-400" : "text-indigo-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-bold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {category.title}
                        </h3>
                        <p
                          className={`text-xs ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {category.skills.map((skill, index) => (
                        <SkillItem
                          key={skill}
                          name={skill}
                          index={index}
                          isDark={isDark}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop View - Tab Style */}
        <div className="hidden md:flex md:flex-row gap-8">
          {/* Category selection */}
          <div className="md:w-1/3">
            <div className="space-y-3">
              {techStacks.map((category) => (
                <motion.div
                  key={category.title}
                  onClick={() => setActiveCategory(category.title)}
                  className="relative group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300 ${
                      activeCategory === category.title
                        ? "opacity-50"
                        : "opacity-30"
                    }`}
                  />

                  <div
                    className={`relative p-4 rounded-lg border h-full backdrop-blur-sm transition-colors duration-300 ${
                      isDark
                        ? "bg-black border-indigo-500/30 group-hover:border-indigo-400"
                        : "bg-white border-indigo-300/50 group-hover:border-indigo-500"
                    } ${
                      activeCategory === category.title
                        ? isDark
                          ? "border-indigo-400"
                          : "border-indigo-500"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isDark
                            ? "bg-indigo-500/10 group-hover:bg-indigo-500/20"
                            : "bg-indigo-100/50 group-hover:bg-indigo-200/70"
                        }`}
                      >
                        <category.icon
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isDark
                              ? "text-indigo-400 group-hover:text-indigo-300"
                              : "text-indigo-600 group-hover:text-indigo-500"
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-lg font-bold transition-colors duration-300 ${
                          isDark
                            ? "text-white group-hover:text-indigo-300"
                            : "text-gray-900 group-hover:text-indigo-600"
                        }`}
                      >
                        {category.title}
                      </h3>
                      {activeCategory === category.title && (
                        <motion.div
                          layoutId="activeCategoryIndicator"
                          className={`w-1.5 h-1.5 ml-auto rounded-full ${
                            isDark ? "bg-indigo-400" : "bg-indigo-600"
                          }`}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Active category details */}
          <div className="md:w-2/3">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 
                           group-hover:opacity-50 transition duration-300"
              />

              <div
                className={`relative p-6 rounded-lg border h-full backdrop-blur-sm transition-colors duration-300 ${
                  isDark
                    ? "bg-black border-indigo-500/30 group-hover:border-indigo-400"
                    : "bg-white border-indigo-300/50 group-hover:border-indigo-500"
                }`}
              >
                {techStacks
                  .filter((category) => category.title === activeCategory)
                  .map((category) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`p-3 rounded-lg ${
                            isDark ? "bg-indigo-500/10" : "bg-indigo-100"
                          }`}
                        >
                          <category.icon
                            className={`w-6 h-6 ${
                              isDark ? "text-indigo-400" : "text-indigo-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3
                            className={`text-xl font-bold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {category.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.skills.map((skill, index) => (
                          <SkillItem
                            key={skill}
                            name={skill}
                            index={index}
                            isDark={isDark}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackShowcase;
