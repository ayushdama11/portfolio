import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Hero,
  Experience,
  Projects,
  Skills,
  Contact,
  BlogPage,
  LoadingSpinner,
  ScrollToTop,
  FloatingCubes,
} from "./components/components";
import InteractiveGames from "./games/InteractiveGames";
import ColorMatchGame from "./games/ColorMatchGame";
import TypingSpeedTest from "./games/TypingSpeedTest";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AnimatePresence>
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                  >
                    <LoadingSpinner />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-black min-h-screen"
                  >
                    <Hero />
                    <ScrollToTop />
                    <InteractiveGames />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />
                    <FloatingCubes />
                    <footer className="py-8 text-center text-gray-500 border-t border-indigo-500/20">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        © {new Date().getFullYear()} Ashparsh Pandey
                      </motion.p>
                    </footer>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/color-match" element={<ColorMatchGame />} />
        <Route path="/typing-test" element={<TypingSpeedTest />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
