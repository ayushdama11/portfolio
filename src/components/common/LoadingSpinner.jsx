import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useTheme } from "../ThemeToggle";

export const LoadingSpinner = ({ text = "Loading...", showOverlay = true }) => {
  const { isDark } = useTheme();
  const bgColor = isDark ? "bg-slate-950/80" : "bg-white/80";
  const textColor = isDark ? "text-indigo-300" : "text-indigo-700";
  const borderColor = isDark ? "border-indigo-500/30" : "border-indigo-700/30";
  const spinnerColor = isDark ? "text-indigo-400" : "text-indigo-600";
  const glowColor = isDark ? "bg-indigo-500/20" : "bg-indigo-300/20";
  const textBgColor = isDark ? "bg-indigo-500/10" : "bg-indigo-300/10";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${
        showOverlay ? `fixed inset-0 ${bgColor} backdrop-blur-sm` : "relative"
      } 
        flex items-center justify-center`}
    >
      <div className="relative w-48 h-48">
        {/* Ambient glow */}
        <motion.div
          className={`absolute inset-0 ${glowColor} rounded-full blur-xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Spinning ring */}
        <motion.div
          className={`absolute inset-4 rounded-full border ${borderColor}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center spinner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Loader2 className={`w-8 h-8 ${spinnerColor}`} />
          </motion.div>
        </div>

        {/* Loading text */}
        {text && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <motion.div
              className={`px-4 py-2 ${textBgColor} rounded-full`}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className={`${textColor} text-sm font-medium`}>{text}</span>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;
