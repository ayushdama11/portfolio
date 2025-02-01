import React from "react";
import { motion } from "framer-motion";
import { Timer, Notebook, Sparkles } from "lucide-react";
import { BackButton } from "./BackButton";
import { FloatingCubes } from "./FloatingCubes";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center relative px-4">
      <BackButton />
      <FloatingCubes />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Icon */}
        <motion.div
          className="mb-8 relative"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative inline-block">
            <Notebook className="w-20 h-20 text-indigo-400" />
            <motion.div
              className="absolute -right-2 -top-2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-6 h-6 text-indigo-300" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Elements */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Blog Coming Soon
          </motion.h1>

          <motion.p
            className="text-lg text-indigo-300/80 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We're crafting something amazing. Stay tuned for thought-provoking
            articles and insights.
          </motion.p>
        </div>

        {/* Progress bar */}
        <motion.div
          className="mt-12 w-64 h-1 mx-auto bg-indigo-950 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Timer icon */}
        <motion.div
          className="mt-8 text-indigo-400/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Timer className="w-6 h-6 mx-auto" />
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-indigo-500/5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
