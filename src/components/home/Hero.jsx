import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "< Full Stack Developer />";
  const name = {
    first: "ASHPARSH",
    last: "PANDEY",
  };
  const gradientClass =
    "bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-500";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cellVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 pb-9">
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-4 p-8"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(48)].map((_, i) => (
          <motion.div
            key={i}
            variants={cellVariants}
            className="w-full h-full rounded-lg bg-indigo-500/5 border border-indigo-500/10"
          />
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* First Name */}
          <motion.div
            className="text-7xl sm:text-8xl font-black mb-2 relative"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            {name.first.split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block font-bold"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  color: "#818cf8",
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                style={{
                  color: "#e2e8f0",
                  textShadow: "2px 2px 0px rgba(99, 102, 241, 0.3)",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Last Name */}
          <motion.div
            className="text-6xl sm:text-7xl font-black relative"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            {name.last.split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.1 + 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 4px 6px rgba(99, 102, 241, 0.3))",
                  textShadow: "none",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/5 flex gap-1">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`${gradientClass} h-1 flex-1`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="sm:text-2xl text-indigo-400 font-mono mb-12 h-10 flex justify-center items-center text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          <span className="relative">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {typedText}
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-1 inline-block"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {[
            {
              Icon: GithubIcon,
              href: "https://github.com/Ashparshp",
              color: "hover:text-white hover:bg-gray-800",
            },
            {
              Icon: LinkedinIcon,
              href: "https://www.linkedin.com/in/ashparsh",
              color: "hover:text-white hover:bg-blue-600",
            },
            {
              Icon: Mail,
              href: "mailto:ashparsh.connects@gmail.com",
              color: "hover:text-white hover:bg-red-500",
            },
          ].map(({ Icon, href, color }, i) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.2 }}
              className={`p-4 bg-indigo-900/30 rounded-xl text-indigo-400 
                         border border-indigo-500/30 
                         transition-all duration-300 ${color}`}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
