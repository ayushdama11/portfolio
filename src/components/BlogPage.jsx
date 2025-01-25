import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Loader,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FloatingCubes = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const cubes = Array.from({ length: 12 }).map((_,i) => ({
    duration: Math.random() * 15 + 10,
    initialX: Math.random() * width,
    initialY: Math.random() * height,
  }));

  return (
    <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
      {cubes.map((cube, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 border border-indigo-500"
          initial={{
            x: cube.initialX,
            y: cube.initialY,
            rotate: 0,
          }}
          animate={{
            x: [cube.initialX, Math.random() * width, cube.initialX],
            y: [cube.initialY, Math.random() * height, cube.initialY],
            rotate: 360,
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const AnimatedSearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="relative max-w-xl w-full justify-center mx-auto mb-12">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      >
        <Search className="w-5 h-5 text-indigo-400" />
      </motion.div>
    </div>
    <input
      type="text"
      placeholder="Search articles..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full pl-12 pr-4 py-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
    />
  </div>
);

const BlogDetail = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl bg-black border border-indigo-500/30 rounded-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-indigo-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[400px] flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader className="w-8 h-8 text-indigo-400" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Writing</h2>
              <p className="text-gray-400">
                This blog post will be available soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const BlogCard = ({ onClick }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    whileHover={{ scale: 1.02 }}
    className="relative group h-full cursor-pointer"
    onClick={onClick}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
    <div className="relative h-full p-6 bg-black rounded-lg border border-indigo-500/30 backdrop-blur-sm group-hover:border-indigo-400 transition-all">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          Writing
        </h2>
        <span className="text-sm text-indigo-400">-- min</span>
      </div>
      <p className="text-gray-400 mb-4">
        This blog post will be available soon.
      </p>
      <div className="flex justify-between items-center mt-auto">
        <div className="flex gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            coming-soon
          </span>
        </div>
        <span className="text-sm text-gray-500">--/--/----</span>
      </div>
    </div>
  </motion.article>
);

const BackButton = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        navigate("/");
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      disabled={isLoading}
      className={`fixed top-6 left-6 z-50 flex items-center gap-2 
          ${
            isLoading
              ? "text-indigo-600 cursor-not-allowed"
              : "text-indigo-400 hover:text-white"
          } transition-colors`}
      whileHover={!isLoading ? { x: -5 } : {}}
      whileTap={
        !isLoading
          ? {
              scale: 0.95,
              rotate: 360,
              transition: { duration: 0.3 },
            }
          : {}
      }
    >
      {isLoading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        >
          <Loader className="w-5 h-5" />
        </motion.div>
      ) : (
        <ArrowLeft className="w-5 h-5" />
      )}
      <span>{isLoading ? "Loading..." : "Back"}</span>
    </motion.button>
  );
};

const FullPageLoader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
    >
      <Loader className="w-12 h-12 text-indigo-400" />
    </motion.div>
  </motion.div>
);

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500); // Reduced loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <AnimatePresence>{isPageLoading && <FullPageLoader />}</AnimatePresence>

      {!isPageLoading && (
        <>
          <BackButton />

          <header className="relative pt-20 pb-16 px-4">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black" />

            <FloatingCubes />
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex justify-between items-center mb-12"></div>
              <AnimatedSearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </header>

          <main className="max-w-6xl mx-auto px-4 pb-20">
            <motion.div
              className="grid gap-8 md:grid-cols-2 auto-rows-fr"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {/* <AnimatePresence>
                {[1, 2, 3, 4].map((id) => (
                  <BlogCard key={id} onClick={() => setSelectedPost(true)} />
                ))}
              </AnimatePresence> */}
            </motion.div>

            <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-yellow-500 my-12 pb-10 animate-pulse">
              Coming Soon...
            </h1>
          </main>

          <AnimatePresence>
            {selectedPost && (
              <BlogDetail onClose={() => setSelectedPost(false)} />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default BlogPage;
