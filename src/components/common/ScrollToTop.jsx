import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
    hover: {
      y: -5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-indigo-500/20 
                   border border-indigo-500/30 text-indigo-400 backdrop-blur-sm 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-30"
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
            <ChevronUp className="w-6 h-6 relative z-10" />
            <motion.div
              className="absolute inset-0 border-2 border-indigo-500/50 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};