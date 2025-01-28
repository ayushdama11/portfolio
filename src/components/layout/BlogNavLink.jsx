import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BlogNavLink = () => {
  const navigate = useNavigate();

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
        className="relative group flex items-center gap-2 px-4 py-2 rounded-lg
                   bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm
                   hover:bg-indigo-500/20 hover:border-indigo-400
                   transition-all duration-300 text-white"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-0
                      transition-all duration-300"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <MessageCircle className="w-5 h-5" />
        </motion.div>
        <span className="relative font-medium group-hover:text-white transition-colors">
          Read Blog
        </span>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-indigo-400 group-hover:bg-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.button>
    </motion.div>
  );
};
