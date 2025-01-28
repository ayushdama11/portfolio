import { motion } from "framer-motion";
import { ArrowLeft, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const BackButton = ({ text = "Back", path = "/" }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        navigate(path);
        setIsLoading(false);
      }, 200);
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      disabled={isLoading}
      className={`fixed top-6 left-6 z-50 flex items-center gap-3 px-6 py-2
        bg-black/40 backdrop-blur-sm rounded-full border border-indigo-500/30
        ${
          isLoading
            ? "text-indigo-600 cursor-not-allowed"
            : "text-indigo-400 hover:text-white hover:border-indigo-400 hover:bg-black/60"
        } transition-all duration-300`}
      whileHover={!isLoading ? { x: -5 } : {}}
      whileTap={
        !isLoading
          ? {
              scale: 0.95,
              rotate: 360,
              transition: { duration: 0.3 },
            }
          : {}
      }
    >
      <div className="relative">
        {/* Icon Background Glow */}
        <motion.div
          className="absolute inset-0 bg-indigo-500/20 rounded-full blur-sm"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Icon */}
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="relative"
          >
            <Loader className="w-5 h-5" />
          </motion.div>
        ) : (
          <ArrowLeft className="w-5 h-5 relative" />
        )}
      </div>

      <span className="font-medium relative pr-1">
        {isLoading ? "Loading..." : text}
      </span>
    </motion.button>
  );
};
