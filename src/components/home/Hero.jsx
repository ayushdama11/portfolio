import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  GithubIcon,
  LinkedinIcon,
  Mail,
  Calendar,
} from "lucide-react";
import ResumeDownloadButton from "../layout/ResumeDownloadButton";
import { useTheme } from "../ThemeToggle";

export const Hero = () => {
  const { isDark } = useTheme();
  const [typedText, setTypedText] = useState("");
  const fullText = "< Full Stack Developer />";
  const name = {
    first: "ASHPARSH",
    last: "PANDEY",
  };
  const gradientClass = isDark
    ? "bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-500"
    : "bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-400";

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

  const handleScheduleCall = () => {
    window.open("https://calendly.com/ashparshpandey00", "_blank");
  };

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

  const mobileNameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scheduleButtonVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const socialLinkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center ${
        isDark ? "bg-black" : "bg-white"
      } overflow-hidden pt-20 pb-9`}
    >
      <ResumeDownloadButton />
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
            className={`w-full h-full rounded-lg ${
              isDark
                ? "bg-indigo-500/5 border-indigo-500/10"
                : "bg-indigo-200/5 border-indigo-300/10"
            } border`}
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
          initial={{ scale: 0.5, rotate: -20 }}
          animate={{
            scale: 1,
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          className="mb-12"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-8 relative group">
            <motion.div
              className="absolute inset-0 border-4 rounded-2xl transition-colors duration-700"
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1],
                borderColor: isDark
                  ? [
                      "rgba(99, 102, 241, 1)",
                      "rgba(124, 58, 237, 1)",
                      "rgba(99, 102, 241, 1)",
                    ]
                  : [
                      "rgba(129, 140, 248, 1)",
                      "rgba(165, 180, 252, 1)",
                      "rgba(129, 140, 248, 1)",
                    ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                scale: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            <Terminal
              className={`w-full h-full relative z-10 p-4 transition-colors duration-700
                ${
                  isDark
                    ? "text-indigo-400 group-hover:text-purple-400"
                    : "text-indigo-600 group-hover:text-purple-600"
                }`}
            />
          </div>
        </motion.div>

        {/* Mobile Name Display */}
        <motion.div
          className="block sm:hidden relative mb-8"
          variants={mobileNameVariants}
          initial="hidden"
          animate="visible"
        >
          <h1
            className="text-5xl font-black mb-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: isDark ? "#e2e8f0" : "#1e293b",
              textShadow: isDark
                ? "2px 2px 0px rgba(99, 102, 241, 0.3)"
                : "2px 2px 0px rgba(99, 102, 241, 0.2)",
            }}
          >
            {name.first}
          </h1>
          <h1
            className="text-6xl font-black"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              background: isDark
                ? "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)"
                : "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: isDark
                ? "drop-shadow(0 4px 6px rgba(99, 102, 241, 0.3))"
                : "drop-shadow(0 4px 6px rgba(99, 102, 241, 0.2))",
            }}
          >
            {name.last}
          </h1>
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

        {/* Desktop Name Animation */}
        <motion.div
          className="hidden sm:block relative mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* First Name */}
          <motion.div
            className="text-7xl font-black mb-2 relative"
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
                  color: isDark ? "#818cf8" : "#6366f1",
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                style={{
                  color: isDark ? "#e2e8f0" : "#1e293b",
                  textShadow: isDark
                    ? "2px 2px 0px rgba(99, 102, 241, 0.3)"
                    : "2px 2px 0px rgba(99, 102, 241, 0.2)",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="text-7xl font-black relative"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "0.1em",
              "--gradient-bg": isDark
                ? "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)"
                : "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
              "--drop-shadow": isDark
                ? "drop-shadow(0 4px 6px rgba(99, 102, 241, 0.3))"
                : "drop-shadow(0 4px 6px rgba(99, 102, 241, 0.2))",
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
                  background: "var(--gradient-bg)", // Uses CSS variable
                  filter: "var(--drop-shadow)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
          className={`sm:text-2xl font-mono mb-12 h-10 flex justify-center items-center text-xl
            ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
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

        {/* Social Links and Schedule Call */}
        <div className="flex flex-col items-center space-y-6">
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
                variants={socialLinkVariants}
                custom={i}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className={`p-4 rounded-xl transition-colors duration-300 
                  ${
                    isDark
                      ? "bg-indigo-900/30 text-indigo-400 border-indigo-500/30"
                      : "bg-indigo-100/30 text-indigo-600 border-indigo-300/30"
                  } 
                  border ${color}`}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={handleScheduleCall}
            variants={scheduleButtonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className={`flex items-center gap-2 px-6 py-3 rounded-xl 
                     transition-colors duration-300
                     ${
                       isDark
                         ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400"
                         : "bg-indigo-100/30 text-indigo-600 border-indigo-300/30 hover:bg-indigo-200/30 hover:border-indigo-500"
                     } border`}
          >
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Schedule a Call</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
