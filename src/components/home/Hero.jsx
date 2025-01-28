import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "< Full Stack Developer />";

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

  return (
    <div
      className="relative min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-black via-black to-indigo-900/20 
                    overflow-hidden pt-20 pb-9"
    >
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-7xl font-bold text-white mb-6 tracking-tight md:pt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ashparsh Pandey
        </motion.h1>

        <div
          className="text-2xl text-indigo-400 font-mono mb-8 h-10 
                      flex justify-center items-center"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {typedText}
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </div>

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
