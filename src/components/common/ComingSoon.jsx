import React, { useState } from "react";
import { motion } from "framer-motion";
import { Timer, Bell, Check } from "lucide-react";
import { BackButton } from "./BackButton";
import { FloatingCubes } from "./FloatingCubes";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center relative px-4">
      <BackButton />
      <FloatingCubes />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-8 relative w-48 h-48 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="pageShade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#6366f1", stopOpacity: 0.2 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#6366f1", stopOpacity: 0.1 }}
                />
              </linearGradient>

              <animate
                xlinkHref="#page1"
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M 40,40 C 80,40 80,120 40,120 L 40,40;M 40,40 C 120,40 120,120 40,120 L 40,40;M 40,40 C 80,40 80,120 40,120 L 40,40"
                keyTimes="0; 0.5; 1"
              />

              <animate
                xlinkHref="#page2"
                attributeName="d"
                dur="3s"
                begin="0.5s"
                repeatCount="indefinite"
                values="M 45,45 C 85,45 85,115 45,115 L 45,45;M 45,45 C 125,45 125,115 45,115 L 45,45;M 45,45 C 85,45 85,115 45,115 L 45,45"
                keyTimes="0; 0.5; 1"
              />

              <animate
                xlinkHref="#page3"
                attributeName="d"
                dur="3s"
                begin="1s"
                repeatCount="indefinite"
                values="M 50,50 C 90,50 90,110 50,110 L 50,50;M 50,50 C 130,50 130,110 50,110 L 50,50;M 50,50 C 90,50 90,110 50,110 L 50,50"
                keyTimes="0; 0.5; 1"
              />
            </defs>

            <rect
              x="35"
              y="35"
              width="130"
              height="130"
              rx="5"
              fill="#4f46e5"
            />
            <rect x="35" y="35" width="10" height="130" rx="2" fill="#4338ca" />

            <path id="page3" fill="#f8fafc" opacity="0.9">
              <animate
                attributeName="opacity"
                dur="3s"
                begin="1s"
                repeatCount="indefinite"
                values="0.9;0.3;0.9"
                keyTimes="0;0.5;1"
              />
            </path>

            <path id="page2" fill="#f1f5f9" opacity="0.9">
              <animate
                attributeName="opacity"
                dur="3s"
                begin="0.5s"
                repeatCount="indefinite"
                values="0.9;0.3;0.9"
                keyTimes="0;0.5;1"
              />
            </path>

            <path id="page1" fill="#e2e8f0" opacity="0.9">
              <animate
                attributeName="opacity"
                dur="3s"
                repeatCount="indefinite"
                values="0.9;0.3;0.9"
                keyTimes="0;0.5;1"
              />
            </path>

            <g
              id="bookLines"
              fill="none"
              stroke="#6366f1"
              strokeWidth="1.5"
              opacity="0.3"
            >
              <line x1="65" y1="60" x2="145" y2="60">
                <animate
                  attributeName="x2"
                  dur="3s"
                  repeatCount="indefinite"
                  values="145;125;145"
                  keyTimes="0;0.5;1"
                />
              </line>
              <line x1="65" y1="80" x2="135" y2="80">
                <animate
                  attributeName="x2"
                  dur="3s"
                  repeatCount="indefinite"
                  values="135;115;135"
                  keyTimes="0;0.5;1"
                />
              </line>
              <line x1="65" y1="100" x2="140" y2="100">
                <animate
                  attributeName="x2"
                  dur="3s"
                  repeatCount="indefinite"
                  values="140;120;140"
                  keyTimes="0;0.5;1"
                />
              </line>
            </g>

            <g id="sparkles">
              <circle cx="160" cy="45" r="2" fill="#a5b4fc">
                <animate
                  attributeName="opacity"
                  dur="2s"
                  repeatCount="indefinite"
                  values="0;1;0"
                  keyTimes="0;0.5;1"
                />
              </circle>
              <circle cx="150" cy="65" r="1.5" fill="#a5b4fc">
                <animate
                  attributeName="opacity"
                  dur="2s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  values="0;1;0"
                  keyTimes="0;0.5;1"
                />
              </circle>
              <circle cx="155" cy="85" r="2" fill="#a5b4fc">
                <animate
                  attributeName="opacity"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                  values="0;1;0"
                  keyTimes="0;0.5;1"
                />
              </circle>
            </g>
          </svg>
        </motion.div>

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

        <motion.div
          className="mt-12 w-64 h-1 mx-auto bg-indigo-950 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
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

        <motion.div
          className="mt-8 text-indigo-400/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Timer className="w-6 h-6 mx-auto" />
        </motion.div>

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
