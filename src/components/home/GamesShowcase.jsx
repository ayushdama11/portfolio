// src/components/home/GamesShowcase.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play, Info } from "lucide-react";
import { games } from "../../constants/gamesData";

export const GamesShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/1 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-16"
        >
          Interactive Games
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {games.slice(0, 2).map((game) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 
                             group-hover:opacity-50 transition duration-300"
              />

              <div
                className="relative p-6 bg-black rounded-lg border border-indigo-500/30 h-full 
                            backdrop-blur-sm group-hover:border-indigo-400 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <game.icon className="w-12 h-12 text-indigo-400 p-2" />
                    <h3
                      className="ml-4 text-xl font-bold text-indigo-400 
                                 group-hover:text-indigo-300 transition-colors duration-300"
                    >
                      {game.title}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => navigate(game.path)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg
                               text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-400
                               transition-all duration-300 group/play"
                    >
                      <Play className="w-5 h-5" />
                      <motion.div
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                                 bg-black/80 text-xs px-2 py-1 rounded opacity-0 group-hover/play:opacity-100
                                 border border-indigo-500/30 transition-opacity duration-300"
                      >
                        Play Now
                      </motion.div>
                    </motion.button>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{game.description[0]}</p>

                <div className="flex flex-wrap gap-2">
                  {game.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-indigo-400 border border-indigo-500/30 rounded-full
                               bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            onClick={() => navigate("/games")}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 bg-black/40 backdrop-blur-sm 
                     border border-indigo-500/30 rounded-full
                     text-indigo-400 hover:text-white 
                     hover:border-indigo-400 hover:bg-black/60
                     transition-all duration-300
                     inline-flex items-center gap-3 group"
          >
            {/* Text Content */}
            <span className="font-medium relative">Explore All Games</span>

            {/* Arrow with glow effect */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-indigo-500/20 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative text-lg"
              >
                →
              </motion.span>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
