import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image,
  ArrowRight,
  ScanLine,
  Zap,
  Info,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../ThemeToggle";

// Modal component for tool details
const ToolDetailsModal = ({ tool, isOpen, onClose, onLaunch }) => {
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`w-full max-w-md p-6 rounded-2xl shadow-2xl border-2
        ${
          isDark
            ? "bg-gray-800 text-white border-indigo-900/50"
            : "bg-white text-gray-900 border-indigo-200/50"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center mb-6">
          <div
            className={`p-3 rounded-xl mr-4
            ${isDark ? "bg-indigo-900/50" : "bg-indigo-100"}`}
          >
            <tool.icon
              className={`w-8 h-8 
              ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
            />
          </div>
          <h2 className="text-2xl font-bold">{tool.title}</h2>
        </div>

        <p
          className={`mb-6 text-lg leading-relaxed
          ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          {tool.description}
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center">
            <Zap
              className={`w-6 h-6 mr-3 
              ${isDark ? "text-green-400" : "text-green-600"}`}
            />
            <span className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
              Quick and efficient processing
            </span>
          </div>
          <div className="flex items-center">
            <Download
              className={`w-6 h-6 mr-3 
              ${isDark ? "text-blue-400" : "text-blue-600"}`}
            />
            <span className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
              Easy download and export options
            </span>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className={`flex-1 px-4 py-3 rounded-xl transition-colors border
              ${
                isDark
                  ? "border-gray-700 text-gray-300 hover:bg-gray-700"
                  : "border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
          >
            Close
          </button>
          <button
            onClick={onLaunch}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center group
              ${
                isDark
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
          >
            Launch Tool
            <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ToolCard = ({ icon: Icon, title, description, path }) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleLaunch = useCallback(
    (e) => {
      e.stopPropagation();
      navigate(path);
    },
    [navigate, path]
  );

  const handleDetails = useCallback((e) => {
    e.stopPropagation();
    setIsDetailsOpen(true);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setIsDetailsOpen(false);
  }, []);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer"
      >
        {/* Gradient background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur opacity-30 transition duration-300" />

        {/* Card content */}
        <div
          className={`relative p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 h-full
          ${
            isDark
              ? "bg-black/80 border-indigo-500/30 group-hover:border-indigo-400"
              : "bg-white/90 border-indigo-300/50 group-hover:border-indigo-500"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Icon container */}
            <div
              className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4
              ${isDark ? "bg-indigo-500/20" : "bg-indigo-100"}`}
            >
              <Icon
                className={`w-6 h-6 ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
            </div>

            {/* Title */}
            <h3
              className={`text-lg font-semibold mb-2 
              ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className={`text-sm mb-4 flex-grow
              ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              {description}
            </p>

            {/* Tool Actions */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleDetails}
                className={`text-sm font-medium flex items-center 
                ${
                  isDark
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                }`}
              >
                <Info className="w-4 h-4 mr-1" />
                Details
              </button>

              <button
                onClick={handleLaunch}
                aria-label={`Launch ${title} tool`}
                className={`
    flex items-center text-sm font-medium group 
    transition-all duration-300 ease-in-out
    py-2 px-4 -mx-3 
    rounded-lg shadow-sm
    ${
      isDark
        ? "text-indigo-400 bg-gray-800 hover:bg-indigo-500/20 active:bg-indigo-500/30"
        : "text-indigo-600 bg-gray-100 hover:bg-indigo-600/10 active:bg-indigo-600/20"
    }
    focus:outline-none focus:ring-2 
    ${isDark ? "focus:ring-indigo-500/50" : "focus:ring-indigo-500/30"}
  `}
              >
                <span className="transition-transform group-hover:translate-x-1">
                  Launch tool
                </span>
                <ArrowRight
                  className="w-4 h-4 ml-2 transition-transform duration-300 
    group-hover:translate-x-1.5 group-hover:-translate-y-0.5 
    group-active:translate-x-2"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Details Modal */}
      <AnimatePresence>
        {isDetailsOpen && (
          <ToolDetailsModal
            tool={{ icon: Icon, title, description }}
            isOpen={isDetailsOpen}
            onClose={handleCloseDetails}
            onLaunch={handleLaunch}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const ToolsShowcase = () => {
  const { isDark } = useTheme();

  const tools = [
    {
      icon: Image,
      title: "Image Compressor",
      description:
        "Compress and optimize your images while maintaining quality. Supports JPG, PNG, and WebP formats.",
      path: "/tools/image-compressor",
    },
    {
      icon: ScanLine,
      title: "QR Code Generator",
      description:
        "Generate QR codes for URLs, text, contact information, and more with customizable styles.",
      path: "/tools/qr-generator",
    },
  ];

  return (
    <section className={`py-20 relative ${isDark ? "bg-black" : "bg-white"}`}>
      {/* Background effects */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          isDark
            ? "from-indigo-900/1 via-black to-black"
            : "from-indigo-100/50 via-white to-white"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"
        }`}
      />

      <div className=" mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Tools
            </h2>
          </div>

          <div
            className={`w-24 h-1 bg-gradient-to-r 
            ${
              isDark
                ? "from-white to-gray-500"
                : "from-indigo-600 to-indigo-300"
            } 
            mx-auto mt-4 rounded-full`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              path={tool.path}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
