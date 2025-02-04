import { motion } from "framer-motion";
import { ArrowLeft, Loader } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { useTheme } from "../ThemeToggle";

export const BackButton = ({
  text = "Back",
  path = "/",
  className = "",
  loadingDuration = 200,
  showOnlyOnNonRootPath = true,
  onBeforeNavigate = () => Promise.resolve(),
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    if (showOnlyOnNonRootPath) {
      setIsVisible(location.pathname !== "/");
    }
  }, [location.pathname, showOnlyOnNonRootPath]);

  useEffect(() => {
    const handlePopState = () => {
      if (!isLoading) {
        handleBack();
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isLoading]);

  const handleBack = useCallback(async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      await onBeforeNavigate();
      await new Promise((resolve) => setTimeout(resolve, loadingDuration));
      navigate(path);
    } catch (error) {
      console.error("Navigation failed:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, navigate, path, loadingDuration, onBeforeNavigate]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Backspace" && (e.metaKey || e.altKey)) {
        handleBack();
      }
    },
    [handleBack]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={handleBack}
      disabled={isLoading}
      aria-label={isLoading ? "Loading..." : `Navigate ${text}`}
      title={`Go ${text}`}
      className={`
        fixed top-6 left-6 z-50 
        flex items-center gap-3 px-6 py-2
        backdrop-blur-sm rounded-full border
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
        transition-all duration-300
        ${
          isDark
            ? "bg-black/40 border-indigo-500/30 focus:ring-indigo-500"
            : "bg-white/40 border-indigo-300/50 focus:ring-indigo-400"
        }
        ${
          isLoading
            ? isDark
              ? "text-indigo-600"
              : "text-indigo-700"
            : isDark
            ? "text-indigo-400 hover:text-white hover:border-indigo-400 hover:bg-black/60"
            : "text-indigo-600 hover:text-indigo-900 hover:border-indigo-500 hover:bg-white/60"
        }
        cursor-${isLoading ? "not-allowed" : "pointer"}
        ${className}
      `}
      whileHover={{ x: -3 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
    >
      <div className="relative">
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="relative"
          >
            <Loader className="w-5 h-5" />
          </motion.div>
        ) : (
          <ArrowLeft className="w-5 h-5 relative" />
        )}
      </div>

      <span className="font-medium relative pr-1">
        {isLoading ? "Loading..." : text}
      </span>
    </motion.button>
  );
};
