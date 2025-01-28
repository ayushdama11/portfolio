import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timer,
  Award,
  RefreshCcw,
  ArrowLeft,
  Keyboard,
  Loader,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../../components/common/BackButton";

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold; often have you heard that told.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
];

export const TypingSpeedTest = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [showResults, setShowResults] = useState(false);

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
    setShowResults(false);
  };

  const calculateResults = () => {
    const words = input.trim().split(" ").length;
    const minutes = (30 - timer) / 60;
    const calculatedWPM = Math.round(words / minutes);
    setWpm(calculatedWPM);

    const correctChars = input
      .split("")
      .filter((char, index) => char === text[index]).length;
    const calculatedAccuracy = Math.round((correctChars / input.length) * 100);
    setAccuracy(calculatedAccuracy);

    setShowResults(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (!isActive && value.length === 1) {
      setIsActive(true);
    }
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
        <h1 className="text-4xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3">
          <Keyboard className="w-8 h-8" />
          Typing Speed Test
        </h1>

        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Timer className="text-indigo-400" />
            <span className="text-white font-mono text-xl">{timer}s</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="text-yellow-500" />
            <span className="text-white font-mono text-xl">{wpm} WPM</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-${
                accuracy >= 90 ? "green" : "red"
              }-500 font-mono text-xl`}
            >
              {accuracy}%
            </span>
            <span className="text-white">Accuracy</span>
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <p className="text-gray-300 font-mono text-lg leading-relaxed">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={
                  input[index] === undefined
                    ? ""
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

        <div className="space-y-6">
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

          <div className="flex justify-center">
            <button
              onClick={startNewGame}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg
                       hover:bg-indigo-700 transition-colors
                       flex items-center gap-2"
            >
              <RefreshCcw size={18} />
              New Game
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm
                       flex items-center justify-center"
            >
              <div className="bg-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
                <p className="text-xl text-indigo-400 mb-2">
                  Words per minute: {wpm}
                </p>
                <p className="text-xl text-indigo-400 mb-6">
                  Accuracy: {accuracy}%
                </p>
                <button
                  onClick={startNewGame}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg
                           hover:bg-indigo-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TypingSpeedTest;
