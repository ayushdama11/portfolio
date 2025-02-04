import React, { createContext, useState, useContext, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
    document.body.classList.toggle("bg-white", !isDark);
    document.body.classList.toggle("bg-black", isDark);
    document.body.classList.toggle("text-black", !isDark);
    document.body.classList.toggle("text-white", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
      <ThemeToggle />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  const toggleVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    exit: {
      scale: 0,
      rotate: 180,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      variants={toggleVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      className={`fixed bottom-6 left-6 p-4 rounded-xl z-50
        backdrop-blur-sm border transition-all duration-300
        ${
          isDark
            ? "bg-black/80 border-indigo-500/30 hover:border-indigo-400"
            : "bg-white/80 border-indigo-300/50 hover:border-indigo-500"
        }
        shadow-lg hover:shadow-[0_0_30px_-5px] 
        ${
          isDark
            ? "shadow-indigo-500/20 hover:shadow-indigo-500/30"
            : "shadow-indigo-400/10 hover:shadow-indigo-400/20"
        }`}
      aria-label="Toggle theme"
    >
      {/* Animated background glow */}
      <motion.div
        className={`absolute inset-0 rounded-xl blur-md ${
          isDark ? "bg-indigo-500/20" : "bg-indigo-400/20"
        }`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Icon container */}
      <motion.div
        key={isDark ? "dark" : "light"}
        variants={iconVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-6 h-6 text-yellow-400" />
              <motion.div
                className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md"
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
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-6 h-6 text-indigo-600" />
              <motion.div
                className="absolute inset-0 bg-indigo-400/20 rounded-full blur-md"
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeProvider;
