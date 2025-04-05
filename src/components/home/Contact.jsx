import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useTheme } from "../ThemeToggle";

const Contact = () => {
  const { isDark } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Clear form after successful submission
      setFormState({ name: "", email: "", message: "" });
      setNotification({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear notification after 5 seconds
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Contact Information Side */}
          <div className="p-10 bg-primary-50 dark:bg-primary-900/20 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-6">
                Get In Touch
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Feel free to reach out through any of these channels. I'm always eager to discuss new projects and opportunities.
              </p>

              <div className="space-y-6">
                <ContactMethod 
                  icon={MapPin} 
                  title="Location" 
                  detail="Aurangabad, Bihar 824301" 
                />
                <ContactMethod 
                  icon={Mail} 
                  title="Email" 
                  detail="aakashkumarsingh824301@gmail.com"
                  link="mailto:aakashkumarsingh824301@gmail.com"
                />
                <ContactMethod 
                  icon={Phone} 
                  title="Phone" 
                  detail="+91-9835381345"
                  link="tel:+919835381345"
                />
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-4">
                Connect Socially
              </h4>
              <div className="flex space-x-4">
                <SocialLink 
                  href="https://github.com/aakash-kumar-singh"
                  icon={Github}
                />
                <SocialLink 
                  href="https://linkedin.com/in/aakash82"
                  icon={Linkedin}
                />
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-slate-700 dark:text-white transition-all"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-20 right-5 p-4 rounded-lg shadow-lg max-w-md z-50 ${
              notification.type === "success"
                ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800/30"
                : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800/30"
            }`}
          >
            <div className="flex items-start gap-3">
              {notification.type === "success" ? (
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
              ) : (
                <AlertCircle className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" />
              )}
              <div className="flex-1">{notification.message}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactMethod = ({ icon: Icon, title, detail, link }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
      <Icon className="text-primary-600 dark:text-primary-400" size={24} />
    </div>
    <div>
      <h4 className="font-semibold text-slate-800 dark:text-white">{title}</h4>
      {link ? (
        <a 
          href={link} 
          className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {detail}
        </a>
      ) : (
        <p className="text-slate-600 dark:text-slate-300">{detail}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all"
  >
    <Icon size={24} />
  </motion.a>
);

export default Contact;