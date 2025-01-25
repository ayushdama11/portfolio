import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Timer,
  Award,
  RefreshCcw,
  Home,
  ArrowLeft,
  Keyboard,
  Loader,
} from "lucide-react";
import { AnimatedCard, NotificationToast } from "./ReusableComponents";
import { CyberLines, FloatingParticles } from "./BackgroundEffects";

const FullPageLoader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
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

const TypingSpeedTest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [showToast, setShowToast] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const navigate = useNavigate();

  const sampleTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold; often have you heard that told.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  ];

  useEffect(() => {
    setTimeout(() => {
      startNewGame();
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      calculateResults();
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const startNewGame = () => {
    const randomText =
      sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);
    setInput("");
    setTimer(30);
    setIsActive(false);
    setWpm(0);
    setAccuracy(100);
  };

  const calculateResults = () => {
    const words = input.trim().split(" ").length;
    const minutes = (30 - timer) / 60;
    const calculatedWPM = Math.round(words / minutes);
    setWpm(calculatedWPM);

    // Calculate accuracy
    const correctChars = input
      .split("")
      .filter((char, index) => char === text[index]).length;
    const calculatedAccuracy = Math.round((correctChars / input.length) * 100);
    setAccuracy(calculatedAccuracy);

    if (calculatedWPM > highScore) {
      setHighScore(calculatedWPM);
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (!isActive && value.length === 1) {
      setIsActive(true);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <AnimatePresence>{isLoading && <FullPageLoader />}</AnimatePresence>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50 flex space-x-4">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm
                     hover:bg-indigo-500/20 hover:border-indigo-400
                     transition-all duration-300 text-white"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-900/20 via-black to-black" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]" />
      <CyberLines />
      <FloatingParticles />

      {/* Game Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 pt-24">
        <AnimatedCard className="text-center mb-8">
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            animate={{
              textShadow: [
                "0 0 8px rgba(99,102,241,0.5)",
                "0 0 16px rgba(99,102,241,0.3)",
                "0 0 8px rgba(99,102,241,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Keyboard className="inline-block mr-2 mb-1" />
            Typing Speed Test
          </motion.h2>

          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Timer className="text-indigo-400" />
              <span className="text-white font-mono text-xl">{timer}s</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-yellow-500" />
              <span className="text-white font-mono text-xl">{wpm} WPM</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: accuracy >= 90 ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className={`text-${
                  accuracy >= 90 ? "green" : accuracy >= 70 ? "yellow" : "red"
                }-500`}
              >
                {accuracy}%
              </motion.div>
              <span className="text-white">Accuracy</span>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard className="mb-8">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <p className="text-gray-300 font-mono text-lg leading-relaxed">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  className={
                    input[index] === undefined
                      ? "text-gray-500"
                      : input[index] === char
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {char}
                </span>
              ))}
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <textarea
            value={input}
            onChange={handleInputChange}
            disabled={timer === 0}
            className="w-full h-32 bg-gray-900 text-white p-4 rounded-lg
                       border border-indigo-500/30 focus:border-indigo-500
                       focus:ring-1 focus:ring-indigo-500 outline-none
                       font-mono resize-none"
            placeholder="Start typing here..."
          />

          <div className="flex justify-center mt-6">
            <motion.button
              onClick={startNewGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg
                         hover:bg-indigo-700 transition-colors
                         flex items-center gap-2"
            >
              <RefreshCcw size={18} />
              New Game
            </motion.button>
          </div>
        </AnimatedCard>

        <AnimatePresence>
          {showToast && (
            <NotificationToast
              type="success"
              message={`Test complete! ${wpm} WPM with ${accuracy}% accuracy`}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TypingSpeedTest;
