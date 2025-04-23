import { motion, AnimatePresence } from "framer-motion";
import { FileDown, CheckCircle, Loader, Download } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useTheme } from "../../components/ThemeToggle";

const ResumeDownloadButton = () => {
  const [downloadStatus, setDownloadStatus] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isCompact, setIsCompact] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsCompact(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = useCallback(async () => {
    setIsLoading(true);
    setDownloadProgress(0);

    try {
      const resumeUrl = "resume.pdf";
      const response = await fetch(resumeUrl);

      if (!response.ok) throw new Error("Download failed");

      const contentLength = response.headers.get("Content-Length");
      const totalSize = contentLength ? parseInt(contentLength, 10) : 0;
      const reader = response.body.getReader();
      const chunks = [];
      let receivedLength = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        chunks.push(value);
        receivedLength += value.length;

        if (totalSize > 0) {
          const progress = Math.round((receivedLength / totalSize) * 100);
          setDownloadProgress(progress);
        }
      }

      const blob = new Blob(chunks);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      setDownloadStatus("success");
      setTimeout(() => setDownloadStatus(null), 3000);
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.button
          onClick={handleDownload}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={isLoading}
          className="group relative"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className={`relative flex items-center gap-1 sm:gap-2 rounded-lg 
                       backdrop-blur-sm shadow-lg
                       transition-all duration-300
                       ${
                         isDark
                           ? "bg-black/80 border-indigo-500/10 shadow-indigo-500/20 hover:border-indigo-400"
                           : "bg-white/80 border-indigo-300/20 shadow-indigo-400/10 hover:border-indigo-500"
                       } border
                       ${
                         isCompact
                           ? "px-2 sm:px-3 py-1.5 sm:py-2"
                           : "px-3 sm:px-4 py-2 sm:py-2.5"
                       }`}
            animate={{
              width: isCompact ? "auto" : "100%",
            }}
          >
            {!isCompact && (
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  scale: isHovered ? 1.1 : 1,
                }}
                className={`font-mono text-sm sm:text-base origin-center ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                $
              </motion.div>
            )}

            {!isCompact && (
              <div className="flex items-center gap-1 sm:gap-2 font-mono text-sm sm:text-base">
                <motion.span
                  className={`hidden sm:block transition-colors ${
                    isDark ? "text-indigo-400" : "text-indigo-600"
                  }`}
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                  }}
                >
                  download
                </motion.span>
                <motion.span
                  className={`transition-colors ${
                    isDark ? "text-purple-400" : "text-purple-600"
                  }`}
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                  }}
                >
                  <span className="sm:hidden">resume</span>
                  <span className="hidden sm:inline">--resume</span>
                </motion.span>
              </div>
            )}

            <motion.div
              className="flex items-center gap-1 sm:gap-2"
              animate={{
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              {isLoading ? (
                <div className="relative">
                  <Loader
                    className={`w-3 sm:w-4 h-3 sm:h-4 animate-spin ${
                      isDark ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  />
                  {downloadProgress > 0 && (
                    <motion.div
                      className="absolute inset-0 text-xs text-center flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <span
                        className={`text-[8px] sm:text-[10px] ${
                          isDark ? "text-indigo-300" : "text-indigo-500"
                        }`}
                      >
                        {downloadProgress}%
                      </span>
                    </motion.div>
                  )}
                </div>
              ) : (
                <FileDown
                  className={`w-3 sm:w-4 h-3 sm:h-4 ${
                    isDark ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
              )}
            </motion.div>

            {!isCompact && (
              <motion.div
                className={`w-1.5 sm:w-2 h-3 sm:h-4 rounded-full ${
                  isDark ? "bg-indigo-400" : "bg-indigo-600"
                }`}
                animate={{
                  opacity: [1, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </motion.div>

          <motion.div
            className={`absolute inset-0 rounded-lg blur-xl ${
              isDark ? "bg-indigo-500/20" : "bg-indigo-400/20"
            }`}
            animate={{
              opacity: isHovered ? 0.3 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {downloadStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`fixed top-16 sm:top-20 left-4 sm:left-6 z-50 
                      px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg 
                      font-mono text-sm sm:text-base
                      backdrop-blur-sm border
                      ${
                        isDark
                          ? "border-green-500/30 text-green-400 bg-green-500/10"
                          : "border-green-400/30 text-green-600 bg-green-400/10"
                      }
                      flex items-center gap-1 sm:gap-2`}
          >
            <span className="opacity-70">$</span>
            <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
            <span>Download complete</span>
            <Download className="w-2.5 sm:w-3 h-2.5 sm:h-3 ml-1.5 sm:ml-2 opacity-50" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeDownloadButton;
