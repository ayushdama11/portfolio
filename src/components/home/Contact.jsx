import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Mail,
  GithubIcon,
  LinkedinIcon,
  Loader,
  Calendar,
} from "lucide-react";

const NotificationToast = ({ message, type }) => {
  const styles = {
    success: {
      background: "bg-gradient-to-r from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      text: "text-green-400",
    },
    error: {
      background: "bg-gradient-to-r from-red-500/20 to-rose-500/20",
      border: "border-red-500/30",
      text: "text-red-400",
    },
  };

  const { background, border, text } = styles[type];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
                px-6 py-3 rounded-lg backdrop-blur-sm
                border ${border} ${background}
                flex items-center gap-2 shadow-lg`}
    >
      <span className={`text-sm font-medium ${text}`}>{message}</span>
    </motion.div>
  );
};

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleEmailClick = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoUrl = encodeURI(
        "mailto:ashparsh.connects@gmail.com" +
          "?subject=Project Collaboration Interest" +
          "&body=Hi Ashparsh,%0D%0A%0D%0AI came across your portfolio and would love to discuss potential collaboration opportunities.%0D%0A%0D%0ABest regards"
      );

      window.location.href = mailtoUrl;
      showNotification("Opening your email client...", "success");
    } catch (error) {
      showNotification(
        "Could not open email client. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleCall = () => {
    window.open("https://calendly.com/ashparshpandey00", "_blank");
    showNotification("Opening scheduling calendar...", "success");
  };

  return (
    <section className="py-20 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Let's Connect
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur opacity-20" />

          <div
            className="relative bg-black border border-indigo-500/30 rounded-xl p-8 backdrop-blur-sm 
                         group-hover:border-indigo-400 transition-colors duration-300"
          >
            <MessageCircle className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
            <p className="text-xl text-gray-300">
              Ready to collaborate or chat about tech? Let's create something
              amazing together!
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 mb-6">
          {/* Send Email Button */}
          <motion.button
            onClick={handleEmailClick}
            disabled={isSubmitting}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
            }}
            className="px-6 py-3 bg-gradient-to-r from-indigo-50 to-indigo-100 
                   hover:from-indigo-100 hover:to-indigo-200 text-indigo-700 
                   rounded-lg font-semibold disabled:opacity-50 transition-all 
                   duration-300 disabled:cursor-not-allowed flex items-center 
                   gap-2 justify-center border border-indigo-100 hover:border-indigo-200 
                   hover:scale-105 hover:text-indigo-800 shadow-md 
                   hover:shadow-indigo-100/20"
            aria-label="Send Email"
          >
            {isSubmitting ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <Mail className="w-5 h-5" />
            )}
            Send Email
          </motion.button>

          <div className="relative">
            <motion.button
              onClick={handleScheduleCall}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-transparent text-gray-300 rounded-lg
                 border border-gray-700 flex items-center gap-3 justify-center
                 hover:bg-gray-900 transition-colors duration-200"
              aria-label="Schedule Call"
            >
              {/* Icon & Text */}
              <Calendar className="w-5 h-5 relative z-10 transition-transform duration-300" />
              <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                Schedule Call
              </span>
            </motion.button>
          </div>
        </div>

        <div className="p-1.5 bg-black/80 border border-indigo-500/10 rounded-lg backdrop-blur-sm inline-block">
          <div className="flex justify-center gap-4">
            {[
              { icon: GithubIcon, href: "https://github.com/Ashparshp" },
              {
                icon: LinkedinIcon,
                href: "https://www.linkedin.com/in/ashparsh",
              },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-indigo-500/10 rounded-md text-indigo-400 
                         hover:text-white hover:bg-indigo-500/20 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {notification && (
          <NotificationToast
            message={notification.message}
            type={notification.type}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
