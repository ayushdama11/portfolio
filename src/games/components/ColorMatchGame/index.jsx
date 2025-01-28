import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, RefreshCcw, ArrowLeft, Palette, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../../components/common/BackButton";

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
      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
    />
    <span className="text-gray-300 w-12 font-mono text-right">{value}</span>
  </div>
);

export const ColorMatchGame = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [targetColor, setTargetColor] = useState({ r: 0, g: 0, b: 0 });
  const [playerColor, setPlayerColor] = useState({ r: 128, g: 128, b: 128 });
  const [score, setScore] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      startNewGame();
      setIsLoading(false);
    }, 500);
  }, []);

  const startNewGame = () => {
    setTargetColor({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    });
    setPlayerColor({ r: 128, g: 128, b: 128 });
  };

  const handleSubmit = () => {
    const diffR = Math.abs(targetColor.r - playerColor.r);
    const diffG = Math.abs(targetColor.g - playerColor.g);
    const diffB = Math.abs(targetColor.b - playerColor.b);
    const totalDiff = diffR + diffG + diffB;
    const matchPercentage = Math.max(0, 100 - totalDiff / 7.65);
    const roundScore = Math.round(matchPercentage);

    setScore((prevScore) => prevScore + roundScore);
    setToastMessage(`Match Score: ${roundScore}%`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    setTimeout(startNewGame, 1500);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <Loader className="w-12 h-12 text-indigo-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <BackButton text="Back to games" path="/games" />

      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Color Match Challenge
        </h1>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <ColorBox color={targetColor} label="Target Color" />
          <ColorBox color={playerColor} label="Your Color" />
        </div>

        <div className="space-y-6 bg-black/50 p-8 rounded-lg border border-indigo-500/30">
          <Slider
            color="r"
            value={playerColor.r}
            onChange={(_, value) =>
              setPlayerColor((prev) => ({ ...prev, r: parseInt(value) }))
            }
          />
          <Slider
            color="g"
            value={playerColor.g}
            onChange={(_, value) =>
              setPlayerColor((prev) => ({ ...prev, g: parseInt(value) }))
            }
          />
          <Slider
            color="b"
            value={playerColor.b}
            onChange={(_, value) =>
              setPlayerColor((prev) => ({ ...prev, b: parseInt(value) }))
            }
          />

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg
                       hover:bg-indigo-700 transition-colors"
            >
              Submit
            </button>
            <button
              onClick={startNewGame}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg
                       hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              <RefreshCcw size={18} />
              New Color
            </button>
          </div>
        </div>

        <div className="fixed top-6 right-6 flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          <span className="text-white font-mono text-xl">{score}</span>
        </div>

        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-6 left-1/2 -translate-x-1/2 
                       bg-indigo-500/20 border border-indigo-500/30
                       px-6 py-3 rounded-lg text-white"
            >
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ColorMatchGame;
