import { motion, AnimatePresence } from "framer-motion";
import { FileDown, CheckCircle, XCircle, Loader, Terminal, Download } from "lucide-react";
import React, { useState, useCallback, useRef } from "react";

const ResumeDownloadButton = () => {
  const [downloadStatus, setDownloadStatus] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const abortControllerRef = useRef(null);

  const handleDownload = useCallback(async () => {
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    setIsLoading(true);
    setDownloadProgress(0);

    try {
      const resumeUrl = "Ashparsh.pdf";
      const response = await fetch(resumeUrl, { signal });
      
      if (!response.ok) throw new Error('Download failed');
      
      const contentLength = response.headers.get('Content-Length');
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
      link.download = "Ashparsh_Pandey_Resume.pdf";
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      
      setDownloadStatus('success');
    } catch (error) {
      if (error.name === 'AbortError') {
        setDownloadStatus('cancelled');
      } else {
        setDownloadStatus('error');
        console.error('Download error:', error);
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => setDownloadStatus(null), 3000);
    }
  }, []);

  const handleCancelDownload = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-6 left-6 z-50"
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
          <div className="relative flex items-center gap-2 px-4 py-2.5 rounded-lg 
                          bg-black/80 backdrop-blur-sm 
                          border border-indigo-500/30 
                          shadow-lg shadow-indigo-500/20 
                          hover:border-indigo-400 
                          transition-all duration-300">
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1.1 : 1,
              }}
              className="font-mono text-indigo-400 origin-center"
            >
              $
            </motion.div>
            <div className="flex items-center gap-2 font-mono">
              <motion.span
                className="text-indigo-400 transition-colors"
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  color: isHovered ? '#6366f1' : '#6366f1',
                }}
              >
                download
              </motion.span>
              <motion.span
                className="text-purple-400 transition-colors"
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  color: isHovered ? '#a855f7' : '#a855f7',
                }}
              >
                --resume
              </motion.span>
            </div>
            <motion.div
              className="flex items-center gap-2"
              animate={{
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              {isLoading ? (
                <div className="relative">
                  <Loader className="w-4 h-4 text-indigo-400 animate-spin" />
                  {downloadProgress > 0 && (
                    <motion.div 
                      className="absolute inset-0 text-xs text-center flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <span className="text-[10px] text-indigo-300">
                        {downloadProgress}%
                      </span>
                    </motion.div>
                  )}
                </div>
              ) : (
                <FileDown className="w-4 h-4 text-indigo-400" />
              )}
            </motion.div>
            <motion.div
              className="w-2 h-4 bg-indigo-400 rounded-full"
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
          </div>
          <motion.div
            className="absolute inset-0 rounded-lg bg-indigo-500/20 blur-xl"
            animate={{
              opacity: isHovered ? 0.3 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1"
            animate={{
              opacity: isLoading ? 1 : 0,
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-indigo-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
          {isLoading && (
            <motion.button
              onClick={handleCancelDownload}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 
                         bg-red-500/20 hover:bg-red-500/30 
                         p-1.5 rounded-full 
                         text-red-400 hover:text-red-300
                         transition-all duration-300"
            >
              <XCircle className="w-4 h-4" />
            </motion.button>
          )}
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {downloadStatus && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`fixed top-20 left-6 z-50 px-4 py-2 rounded-lg font-mono
                       backdrop-blur-sm border flex items-center gap-2
                       ${downloadStatus === 'success' 
                         ? 'border-green-500/30 text-green-400 bg-green-500/10' 
                         : downloadStatus === 'error'
                         ? 'border-red-500/30 text-red-400 bg-red-500/10'
                         : 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'}`}
          >
            <span className="opacity-70">$</span>
            {downloadStatus === 'success' ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Download complete</span>
                <Download className="w-3 h-3 ml-2 opacity-50" />
              </>
            ) : downloadStatus === 'error' ? (
              <>
                <XCircle className="w-4 h-4" />
                <span>Download failed</span>
              </>
            ) : (
              <>
                <Terminal className="w-4 h-4" />
                <span>Download cancelled</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeDownloadButton;
