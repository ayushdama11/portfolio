import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  RefreshCcw,
  Home,
  ArrowLeft,
  Palette,
  Loader,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  GradientBackground,
  AnimatedCard,
  NotificationToast,
} from "./ReusableComponents";

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

const ColorBox = ({ color, label }) => (
  <div className="flex flex-col items-center gap-2">
    <motion.div
      className="w-32 h-32 rounded-lg shadow-lg border-2 border-indigo-500/30"
      style={{
        backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    />
    <span className="text-gray-300 text-sm font-mono">{label}</span>
  </div>
);

const Slider = ({ color, value, onChange }) => (
  <div className="flex items-center gap-4">
    <span className="text-gray-300 uppercase w-8 font-mono">{color}</span>
    <input
      type="range"
      min="0"
      max="255"
      value={value}
      onChange={(e) => onChange(color, e.target.value)}
      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer
               [&::-webkit-slider-thumb]:appearance-none
               [&::-webkit-slider-thumb]:w-4
               [&::-webkit-slider-thumb]:h-4
               [&::-webkit-slider-thumb]:rounded-full
               [&::-webkit-slider-thumb]:bg-indigo-500
               [&::-webkit-slider-thumb]:cursor-pointer
               focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
    />
    <span className="text-gray-300 w-12 font-mono text-right">{value}</span>
  </div>
);

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-6 left-6 z-50 flex space-x-4">
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative group flex items-center gap-2 px-4 py-2 rounded-lg
                   bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm
                   hover:bg-indigo-500/20 hover:border-indigo-400
                   transition-all duration-300 text-white"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </motion.button>
    </div>
  );
};

const ColorMatchGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [targetColor, setTargetColor] = useState({ r: 0, g: 0, b: 0 });
  const [playerColor, setPlayerColor] = useState({ r: 128, g: 128, b: 128 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const generateRandomColor = () => ({
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  });

  const startNewRound = () => {
    setTargetColor(generateRandomColor());
    setPlayerColor({ r: 128, g: 128, b: 128 });
  };

  useEffect(() => {
    setTimeout(() => {
      startNewRound();
      setIsLoading(false);
    }, 500);
  }, []);

  const calculateScore = () => {
    const diffR = Math.abs(targetColor.r - playerColor.r);
    const diffG = Math.abs(targetColor.g - playerColor.g);
    const diffB = Math.abs(targetColor.b - playerColor.b);
    const totalDiff = diffR + diffG + diffB;

    const matchPercentage = Math.max(0, 100 - totalDiff / 7.65);
    return Math.round(matchPercentage);
  };

  const handleSubmit = () => {
    const roundScore = calculateScore();
    const newTotalScore = score + roundScore;
    setScore(newTotalScore);

    if (roundScore > 90) {
      setToastMessage(`Perfect! ${roundScore}% match! 🎯`);
    } else if (roundScore > 70) {
      setToastMessage(`Great job! ${roundScore}% match! 🎉`);
    } else {
      setToastMessage(`Keep trying! ${roundScore}% match! 💪`);
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);

    if (newTotalScore > highScore) {
      setHighScore(newTotalScore);
    }

    setTimeout(startNewRound, 1500);
  };

  const handleSliderChange = (color, value) => {
    setPlayerColor((prev) => ({
      ...prev,
      [color]: parseInt(value),
    }));
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <AnimatePresence>{isLoading && <FullPageLoader />}</AnimatePresence>

      <Navigation />

      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-900/20 via-black to-black" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]" />

      {/* Cyber Lines */}
      <div className="fixed inset-0 z-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-indigo-500"
            style={{ top: `${i * 5}%` }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scaleX: [1, 1.5, 1],
              transition: {
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      {/* Game Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedCard className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Palette className="w-8 h-8 text-indigo-400" />
              <motion.h2
                className="text-3xl font-bold text-white"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(99,102,241,0.5)",
                    "0 0 16px rgba(99,102,241,0.3)",
                    "0 0 8px rgba(99,102,241,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Color Match Challenge
              </motion.h2>
            </div>

            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="text-yellow-500" />
                <span className="text-white font-mono text-xl">
                  {highScore}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: score > 0 ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-indigo-400 font-mono text-xl"
                >
                  {score}
                </motion.div>
                <span className="text-white">Points</span>
              </div>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <AnimatedCard className="backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <ColorBox color={targetColor} label="Target Color" />
              </div>
            </AnimatedCard>

            <AnimatedCard className="backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <ColorBox color={playerColor} label="Your Color" />
              </div>
            </AnimatedCard>
          </div>

          <AnimatedCard className="space-y-6 backdrop-blur-sm">
            <Slider
              color="r"
              value={playerColor.r}
              onChange={handleSliderChange}
            />
            <Slider
              color="g"
              value={playerColor.g}
              onChange={handleSliderChange}
            />
            <Slider
              color="b"
              value={playerColor.b}
              onChange={handleSliderChange}
            />

            <div className="flex justify-center gap-4 pt-4">
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg
                         hover:bg-indigo-700 transition-colors
                         flex items-center gap-2 font-medium"
              >
                Submit Match
              </motion.button>

              <motion.button
                onClick={startNewRound}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg
                         hover:bg-gray-600 transition-colors
                         flex items-center gap-2"
              >
                <RefreshCcw size={18} />
                New Color
              </motion.button>
            </div>
          </AnimatedCard>
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
          <NotificationToast type="success" message={toastMessage} />
        )}
      </AnimatePresence>

      {/* Score Particles Effect */}
      <AnimatePresence>
        {showToast && (
          <div className="fixed inset-0 pointer-events-none z-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 1,
                  scale: 0,
                  x: window.innerWidth / 2,
                  y: window.innerHeight / 2,
                }}
                animate={{
                  opacity: 0,
                  scale: Math.random() * 2 + 1,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    i % 3 === 0
                      ? "#ef4444"
                      : i % 3 === 1
                      ? "#22c55e"
                      : "#3b82f6",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorMatchGame;
