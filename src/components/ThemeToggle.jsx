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
    document.documentElement.classList.toggle("dark", isDark);
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
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const iconVariants = {
    initial: { 
      opacity: 0,
      scale: 0.5,
      rotate: isDark ? -180 : 180
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotate: isDark ? 180 : -180,
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
      className={`fixed bottom-6 left-6 p-3 rounded-full z-50 group
        transition-all duration-300 
        ${
          isDark
            ? "bg-neutral-900/80 hover:bg-neutral-900/90"
            : "bg-white/90 hover:bg-white"
        }
        shadow-2xl hover:shadow-[0_0_30px_-5px] 
        border border-opacity-20
        backdrop-blur-xl
        ${
          isDark
            ? "border-white/10 hover:border-white/20"
            : "border-neutral-200/30 hover:border-neutral-300/50"
        }
        ${
          isDark
            ? "shadow-indigo-500/20 hover:shadow-indigo-500/30"
            : "shadow-indigo-400/10 hover:shadow-indigo-400/20"
        }`}
      aria-label="Toggle theme"
    >
      {/* Glossy overlay */}
      <div 
        className={`absolute inset-0 rounded-full opacity-30 group-hover:opacity-50 transition-opacity 
          ${isDark 
            ? "bg-gradient-to-br from-white/20 to-white/5" 
            : "bg-gradient-to-br from-white/50 to-white/10"
          }`}
      />

      {/* Animated background glow */}
      <motion.div
        className={`absolute inset-0 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity 
          ${isDark ? "bg-indigo-500/20" : "bg-indigo-400/20"}`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
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
        className="relative flex items-center justify-center w-8 h-8"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              className="absolute flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Sun className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]" />
              <motion.div
                className="absolute inset-0 bg-yellow-400/40 rounded-full blur-md"
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
              className="absolute flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0, rotate: 180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: -180 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Moon className="w-6 h-6 text-indigo-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.5)]" />
              <motion.div
                className="absolute inset-0 bg-indigo-400/40 rounded-full blur-md"
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