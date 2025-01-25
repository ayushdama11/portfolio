import React from 'react';
import { motion } from 'framer-motion';

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
          backgroundColor: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#22c55e' : '#3b82f6',
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

export const ColorRings = () => (
  <div className="fixed inset-0 z-0 opacity-10">
    {Array.from({ length: 3 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border-4"
        style={{
          width: `${(i + 1) * 200}px`,
          height: `${(i + 1) * 200}px`,
          borderColor: i === 0 ? '#ef4444' : i === 1 ? '#22c55e' : '#3b82f6',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);