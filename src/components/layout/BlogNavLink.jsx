import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const BlogNavLink = () => {
  const navigate = useNavigate();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsCompact(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.button
        onClick={() => navigate("/blog")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative group flex items-center gap-3
          bg-black/95 border border-indigo-950 backdrop-blur-md
          shadow-lg shadow-indigo-950/20
          hover:shadow-indigo-900/30 hover:border-indigo-900/60
          transition-all duration-300 overflow-hidden
          ${
            isCompact ? "p-2.5 rounded-[1.2rem]" : "px-5 py-3 rounded-[1.2rem]"
          }`}
      >
        {/* Decorative shapes background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Hexagon grid pattern */}
          <motion.div
            className="absolute inset-0 grid grid-cols-3 gap-2"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-indigo-600/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Diamond shapes on hover */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300
            ${isCompact ? "rounded-[1.2rem]" : "rounded-[1.2rem]"}`}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: [45, 405],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 border border-indigo-500/40"
                style={{
                  top: `${25 * Math.sin((i * Math.PI) / 2)}%`,
                  left: `${25 * Math.cos((i * Math.PI) / 2)}%`,
                  transform: "rotate(45deg)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Icon with pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <MessageCircle className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        </motion.div>

        {!isCompact && (
          <>
            {/* Text */}
            <span
              className="relative font-medium text-indigo-300 group-hover:text-indigo-200
                transition-colors duration-300"
            >
              Read Blog
            </span>

            {/* Animated dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="relative w-1.5 h-1.5 hidden sm:inline"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-indigo-700 group-hover:bg-indigo-500
                    transition-colors duration-300 shadow-lg shadow-indigo-900/50 rounded-full"
                  />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

export default BlogNavLink;
