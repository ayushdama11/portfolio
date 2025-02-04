// InteractiveGames.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FloatingCubes } from "../components/common/FloatingCubes";
import { GameCard } from "./components/GameCard";
import { games } from "../constants/gamesData";
import { BackButton } from "../components/common/BackButton";
import { useTheme } from "../components/ThemeToggle";

const InteractiveGames = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background Effects */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          isDark
            ? "from-indigo-900/20 via-black to-black"
            : "from-indigo-100/30 via-white to-white"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"
        }`}
      />
      <FloatingCubes />

      {/* Navigation */}
      <BackButton text="Back" path="/" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold text-center ${
            isDark ? "text-white" : "text-gray-900"
          } mb-16`}
        >
          Interactive Games
          <div
            className={`w-24 h-1 bg-gradient-to-r ${
              isDark
                ? "from-white to-gray-500"
                : "from-indigo-600 to-indigo-300"
            } mx-auto mt-4 rounded-full`}
          />
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {games.map((game) => (
            <GameCard
              key={game.title}
              game={game}
              onClick={() => navigate(game.path)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveGames;
