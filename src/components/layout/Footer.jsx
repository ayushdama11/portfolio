import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  MapPin,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../ThemeToggle";

const Footer = () => {
  const { isDark } = useTheme();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aakash-kumar-singh",
      label: "GitHub",
      hoverColor: isDark ? "hover:bg-gray-800" : "hover:bg-gray-200",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aakash82",
      label: "LinkedIn",
      hoverColor: isDark ? "hover:bg-blue-900" : "hover:bg-blue-100",
    },
    {
      icon: Mail,
      href: "mailto:aakashkumarsingh824301@gmail.com",
      label: "Email",
      hoverColor: isDark ? "hover:bg-red-900" : "hover:bg-red-100",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden border-t ${
        isDark
          ? "bg-slate-900 border-slate-800"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Logo and description */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2"
          >
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-500 dark:bg-primary-600 flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Aakash
                <span className="text-primary-500 dark:text-primary-400">
                  .dev
                </span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              Computer Science student at Lovely Professional University and
              passionate web developer creating responsive, functional web
              applications with a focus on clean design and optimal user
              experience.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg
                    ${
                      isDark
                        ? "bg-slate-800 text-slate-300"
                        : "bg-white text-slate-700 shadow-sm"
                    } ${hoverColor} hover:text-white transition-colors`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Education", href: "#education" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-slate-600 dark:text-slate-400 hover:text-primary-500 
                             dark:hover:text-primary-400 transition-colors text-sm flex items-center gap-1 group`}
                  >
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full ${
                        isDark ? "bg-slate-700" : "bg-slate-300"
                      } group-hover:bg-primary-500 dark:group-hover:bg-primary-400 transition-colors`}
                    ></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span className="text-slate-600 dark:text-slate-400 text-sm">
                  Aurangabad, Bihar 824301
                </span>
              </li>
              <li>
                <a
                  href="mailto:aakashkumarsingh824301@gmail.com"
                  className="flex items-start gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0" />
                  <span className="break-all">
                    aakashkumarsingh824301@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm group"
                >
                  <ExternalLink
                    size={16}
                    className="flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  <span>View Resume</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between">
          <motion.p
            variants={itemVariants}
            className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1 mb-4 sm:mb-0"
          >
            © {currentYear} Aakash Kumar Singh. Built with
            <Heart
              size={14}
              className="text-red-500 dark:text-red-400 animate-pulse"
            />
            using React.
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`group flex items-center gap-2 text-sm font-medium ${
              isDark
                ? "text-slate-400 hover:text-primary-400"
                : "text-slate-600 hover:text-primary-600"
            } transition-colors`}
          >
            <span>Back to top</span>
            <ArrowUp
              size={16}
              className="transition-transform group-hover:-translate-y-1"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
