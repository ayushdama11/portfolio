import React from 'react';
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export const LoadingSpinner = ({ 
  text = "Loading...",
  showOverlay = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${showOverlay ? 'fixed inset-0 bg-slate-950/80 backdrop-blur-sm' : 'relative'} 
        flex items-center justify-center`}
    >
      <div className="relative w-48 h-48">
        {/* Ambient glow */}
        <motion.div
          className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl"
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
          className="absolute inset-4 rounded-full border border-indigo-500/30"
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
            <Loader2 className="w-8 h-8 text-indigo-400" />
          </motion.div>
        </div>

        {/* Loading text */}
        {text && (
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <motion.div
              className="px-4 py-2 bg-indigo-500/10 rounded-full"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-indigo-300 text-sm font-medium">
                {text}
              </span>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;