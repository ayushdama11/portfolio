import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { useTheme } from "../ThemeToggle";

const Hero = () => {
  const { isDark } = useTheme();
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Developer";

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

  // Social links with animated variants
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aakash-kumar-singh",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aakash82",
      label: "LinkedIn Profile",
    },
    {
      icon: Mail,
      href: "mailto:aakashkumarsingh824301@gmail.com",
      label: "Email Me",
    },
  ];

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/10 transform -skew-x-12" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent dark:from-primary-900/10 transform skew-x-12" />
        
        {/* Subtle Animated Circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-100 dark:bg-primary-900 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-100 dark:bg-primary-900 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="block text-slate-800 dark:text-white">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                Aakash Kumar Singh
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 h-10"
          >
            <span className="text-xl md:text-2xl font-mono text-slate-700 dark:text-slate-300">
              {typedText}
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-5 ml-1 bg-primary-500 dark:bg-primary-400"
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8"
          >
            Passionate computer science student at Lovely Professional University 
            with a focus on building responsive and functional web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download Resume
            </a>
            <button 
              onClick={scrollToProjects} 
              className="group inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full transition-all"
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 text-slate-600 dark:text-slate-400 mb-8"
          >
            <div>Aurangabad, Bihar 824301</div>
            <div className="hidden sm:block">•</div>
            <div>
              <a 
                href="tel:+919835381345" 
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                +91-9835381345
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-slate-600 dark:text-slate-400 mb-2">
          Scroll Down
        </span>
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }
          }}
        >
          <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;