import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { useTheme } from "../ThemeToggle";

const Hero = () => {
  const { isDark } = useTheme();
  const [typedText, setTypedText] = useState("");
  const fullText = "Aspiring Software Developer";

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

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ayushdama11",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayushdama/",
      label: "LinkedIn Profile",
    },
    {
      icon: Mail,
      href: "mailto:ayushdama07@gmail.com",
      label: "Email Me",
    },
  ];

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/10 transform -skew-x-12" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent dark:from-primary-900/10 transform skew-x-12" />

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
        <div className="max-w-6xl mx-auto">
          {/* Flex row with reversed order - image first on desktop (left side) */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-8">
            {/* Profile Image Section - Now on left on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:w-2/5"
            >
              <div className="relative mx-auto max-w-sm">
                {/* Decorative elements */}
                <div className="absolute -z-10 -top-4 -left-4 right-4 bottom-4 bg-primary-100 dark:bg-primary-900/30 rounded-2xl transform rotate-2" />
                
                {/* Image container with proper fitting */}
                <div className="relative overflow-hidden rounded-xl border-4 border-white dark:border-slate-800 shadow-xl">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    <img
                      src="passportsizeAyush.jpeg" 
                      alt="Ayush Dama"
                      className="w-full h-full object-cover object-center"
                      style={{ aspectRatio: "2/2" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/300/450";
                      }}
                    />
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent" />
                  </motion.div>
                </div>
                
                {/* Background accents */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-200 dark:bg-primary-800/40 rounded-full blur-lg -z-10" />
                <div className="absolute -top-2 -right-4 w-12 h-12 bg-primary-300 dark:bg-primary-700/40 rounded-full blur-md -z-10" />
              </div>
            </motion.div>

            {/* Text Content Section - Second on desktop (right side) */}
            <div className="text-center lg:text-left lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="block text-slate-800 dark:text-white">Hi, I'm </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                    Ayush Dama
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
               👋 Hi, I'm a Computer Science student passionate about coding and turning ideas into real-world solutions. I love solving complex problems, building interactive dashboards, and creating clean, responsive web apps. With 400+ DSA problems solved and hands-on projects in AI and Web dev, I'm all about learning, building, and leveling up.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
              >
                <a
                  href="/ats2.pdf"
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 text-slate-600 dark:text-slate-400 mb-8"
              >
                <div>Vadodara, Gujarat 390024</div>
                <div className="hidden sm:block">•</div>
                <div>
                  <a 
                    href="tel: +91-9877320226" 
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +91-9877320226
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex justify-center lg:justify-start gap-4"
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
        </div>
      </div>

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