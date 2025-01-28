import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const TypeWriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;

    // Clear any existing interval
    if (typingRef.current) clearInterval(typingRef.current);

    typingRef.current = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;

        if (currentIndex > text.length) {
          clearInterval(typingRef.current);
          setIsTypingComplete(true);
        }
      }
    }, speed);

    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, [text, speed]);

  return (
    <div className="h-10 flex justify-center items-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayText}
      </motion.span>
      <motion.span
        animate={{ opacity: isTypingComplete ? [0, 1] : 0 }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </div>
  );
};

const SocialLink = ({ Icon, href, color, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay,
      ease: [0.23, 1, 0.32, 1],
    }}
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.2 },
    }}
    className={`p-4 bg-indigo-900/30 rounded-xl text-indigo-400 
                border border-indigo-500/30 transition-colors duration-300 
                ${color} transform-gpu`}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

export const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const socialLinks = [
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
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-black via-black to-indigo-900/20 
                 overflow-hidden pt-20 pb-9"
    >
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 
                     tracking-tight md:pt-5 select-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          Ashparsh Pandey
        </motion.h1>

        <div className="text-xl md:text-2xl text-indigo-400 font-mono mb-8">
          <TypeWriter text="< Full Stack Developer />" speed={80} />
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ Icon, href, color }, i) => (
            <SocialLink
              key={href}
              Icon={Icon}
              href={href}
              color={color}
              delay={0.5 + i * 0.15}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
