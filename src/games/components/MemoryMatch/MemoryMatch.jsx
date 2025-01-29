// src/games/MemoryMatch/MemoryMatch.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, RefreshCcw, Timer, Trophy, Loader } from "lucide-react";
import { BackButton } from "../../../components/common/BackButton";

const GRID_SIZE = 16;
const SYMBOLS = ["🎮", "🎲", "🎯", "🎪", "🎨", "🎭", "🎪", "🎸"];

const createInitialCards = () => {
  const symbols = [...SYMBOLS, ...SYMBOLS];
  return symbols
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => ({
      id: index,
      symbol,
      isFlipped: false,
      isMatched: false,
    }));
};

export const MemoryMatch = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      startNewGame();
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].symbol === cards[second].symbol) {
        setCards((prevCards) =>
          prevCards.map((card, index) =>
            index === first || index === second
              ? { ...card, isMatched: true }
              : card
          )
        );
        setMatches((m) => m + 1);
        setFlippedCards([]);

        if (matches + 1 === GRID_SIZE / 2) {
          setIsActive(false);
          setShowSuccess(true);
        }
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              index === first || index === second
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
      setMoves((m) => m + 1);
    }
  }, [flippedCards, cards, matches]);

  const startNewGame = () => {
    setCards(createInitialCards());
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setTimer(0);
    setIsActive(true);
    setShowSuccess(false);
  };

  const handleCardClick = (index) => {
    if (
      !isActive ||
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      cards[index].isMatched ||
      cards[index].isFlipped
    )
      return;

    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards((prev) => [...prev, index]);
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
          <Brain className="w-8 h-8" />
          Memory Match
        </h1>

        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Timer className="text-indigo-400" />
            <span className="text-white font-mono text-xl">
              {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-500" />
            <span className="text-white font-mono text-xl">{moves} moves</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
          {cards.map((card, index) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={`w-full aspect-square rounded-lg text-3xl
                        ${
                          card.isFlipped || card.isMatched
                            ? "bg-indigo-600"
                            : "bg-gray-900"
                        } transition-colors`}
              whileHover={{
                scale: !card.isMatched && !card.isFlipped ? 1.05 : 1,
              }}
              whileTap={{
                scale: !card.isMatched && !card.isFlipped ? 0.95 : 1,
              }}
            >
              {(card.isFlipped || card.isMatched) && card.symbol}
            </motion.button>
          ))}
        </div>

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

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm
                       flex items-center justify-center"
            >
              <div className="bg-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  All Matches Found!
                </h2>
                <p className="text-xl text-indigo-400 mb-2">
                  Time: {Math.floor(timer / 60)}:
                  {String(timer % 60).padStart(2, "0")}
                </p>
                <p className="text-xl text-indigo-400 mb-6">Moves: {moves}</p>
                <button
                  onClick={startNewGame}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg
                           hover:bg-indigo-700 transition-colors"
                >
                  Play Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemoryMatch;
