import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { useTheme } from "../ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll events for styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Determine which section is currently in view
      const sections = [
        "home",
        "projects",
        "skills",
        "education",
        "certifications",
        "achievements",
        "contact",
      ];

      // Find the section that is currently most visible in the viewport
      let currentSection = "home"; // Default to home
      let maxVisibility = 0;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate how much of the section is visible in the viewport
          const visibility =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          // If this section has more visibility than previous sections and is at least partially visible
          if (visibility > maxVisibility && visibility > 0) {
            maxVisibility = visibility;
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = useCallback((href) => {
    setIsOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: offsetTop - 80, behavior: "smooth" }); // Offset for navbar height
      }
    }
  }, []);

  // Variants for navbar animations
  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? "bg-slate-900/90 border-b border-slate-800 backdrop-blur-lg shadow-lg shadow-slate-900/10"
              : "bg-white/90 border-b border-slate-200 backdrop-blur-lg shadow-lg shadow-slate-200/10"
            : "bg-transparent"
        }`}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center space-x-2"
              onClick={() => scrollToSection("#home")}
            >
              <div className="flex items-center">
                {/* Logo circle with animation */}
                <div className="relative w-8 h-8 mr-2">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-500 dark:bg-primary-400 opacity-80 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  Aakash
                  <span className="text-primary-500 dark:text-primary-400">
                    .dev
                  </span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300
                      ${
                        isActive
                          ? isDark
                            ? "text-primary-400 bg-primary-500/10"
                            : "text-primary-600 bg-primary-50"
                          : isDark
                          ? "text-slate-300 hover:text-white hover:bg-slate-800/50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isDark ? "bg-primary-400" : "bg-primary-500"
                        }`}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                );
              })}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 ml-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${
                    isDark
                      ? "bg-primary-500 hover:bg-primary-600 text-white"
                      : "bg-primary-500 hover:bg-primary-600 text-white"
                  }`}
              >
                Resume
                <ExternalLink size={14} />
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden menu-button p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mobile-menu fixed right-0 top-0 h-full w-72 bg-white dark:bg-slate-900 shadow-xl overflow-y-auto"
            >
              <div className="p-6 space-y-8">
                <div className="flex justify-between items-center">
                  <Link
                    to="/"
                    className="flex items-center"
                    onClick={() => {
                      scrollToSection("#home");
                      setIsOpen(false);
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center text-white font-bold mr-2">
                      A
                    </div>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      Aakash
                      <span className="text-primary-500 dark:text-primary-400">
                        .dev
                      </span>
                    </span>
                  </Link>

                  <button
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-1">
                  {navigationLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className={`block py-3 px-4 rounded-lg transition-colors ${
                          isActive
                            ? isDark
                              ? "bg-primary-500/10 text-primary-400"
                              : "bg-primary-50 text-primary-600"
                            : isDark
                            ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className={`w-2 h-2 rounded-full ${
                                isDark ? "bg-primary-400" : "bg-primary-500"
                              }`}
                            />
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>View Resume</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
