import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
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
          {games.slice(0, 2).map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 
                             group-hover:opacity-50 transition duration-300"
              />

              <div
                className="relative p-6 bg-black rounded-lg border border-indigo-500/30 h-full 
                            backdrop-blur-sm group-hover:border-indigo-400 transition-all duration-300
                            hover:shadow-[0_0_30px_-5px] hover:shadow-indigo-500/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-xl font-bold text-white group-hover:text-indigo-400 
                               transition-colors duration-300 flex items-center"
                  >
                    {game.title}
                  </h3>

                  {/* Action Buttons */}
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

                <div className="space-y-4 mb-6">
                  {game.description.map((desc, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      {desc.split(" ").map((word, wordIndex) => {
                        if (
                          word.match(
                            /(built|created|designed|developed|implemented|featuring|using|powered)/i
                          )
                        ) {
                          return (
                            <span
                              key={wordIndex}
                              className="text-indigo-400 font-semibold"
                            >
                              {word}{" "}
                            </span>
                          );
                        } else if (
                          word.match(
                            /(React|Node\.js|WebGL|Three\.js|Socket\.IO|JavaScript|TypeScript|multiplayer)/i
                          )
                        ) {
                          return (
                            <span
                              key={wordIndex}
                              className="text-blue-400 font-medium"
                            >
                              {word}{" "}
                            </span>
                          );
                        } else {
                          return word + " ";
                        }
                      })}
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {game.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm text-indigo-400 border border-indigo-500/30 
                               rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 
                               transition-all duration-300 cursor-default
                               hover:border-indigo-400"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={() => navigate("/games")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 bg-black/40 backdrop-blur-sm 
                     border border-indigo-500/30 rounded-full
                     text-indigo-400 hover:text-white 
                     hover:border-indigo-400 hover:bg-black/60
                     transition-all duration-300
                     inline-flex items-center gap-3 group"
          >
            <span className="font-medium">Explore All Games</span>

            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GamesShowcase;
