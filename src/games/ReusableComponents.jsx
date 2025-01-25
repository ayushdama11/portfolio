import React from "react";
import { motion } from "framer-motion";

// Gradient Background Component
export const GradientBackground = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]" />
    <div className="relative z-10">{children}</div>
  </div>
);

// Animated Card Component
export const AnimatedCard = ({ children, className = "" }) => (
  <motion.div className="relative group">
    <div
      className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 
                    group-hover:opacity-50 transition duration-300"
    />
    <div
      className={`relative p-6 bg-black rounded-lg border border-indigo-500/30 
                     backdrop-blur-sm group-hover:border-indigo-400 
                     transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  </motion.div>
);

// Notification Toast Component
export const NotificationToast = ({ message, type = "success" }) => {
  const toastVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  const styles = {
    success: {
      background: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      text: "text-green-400",
    },
    error: {
      background: "bg-gradient-to-r from-red-500/20 to-rose-500/20",
      border: "border-red-500/30",
      text: "text-red-400",
    },
  };

  const { background, border, text } = styles[type];

  return (
    <motion.div
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
                  px-6 py-3 rounded-lg backdrop-blur-sm
                  border ${border} ${background}
                  flex items-center gap-2 shadow-lg`}
    >
      <span className={`text-sm font-medium ${text}`}>{message}</span>
    </motion.div>
  );
};

// Background Effects Components
export const CyberLines = () => (
  <div className="fixed inset-0 z-0 opacity-20">
    {Array.from({ length: 50 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px w-full bg-indigo-500"
        style={{ top: `${i * 2}%` }}
        animate={{
          opacity: [0.5, 0, 0.5],
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

export const FloatingParticles = () => (
  <div className="fixed inset-0 z-0 opacity-20">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{
          backgroundColor:
            i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#22c55e" : "#3b82f6",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 30 - 15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Export all components
export default {
  GradientBackground,
  AnimatedCard,
  NotificationToast,
  CyberLines,
  FloatingParticles,
};
