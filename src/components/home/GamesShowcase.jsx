import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Play,
  ArrowRight,
  Gamepad2,
  Palette,
  Keyboard,
  AlignRight,
} from "lucide-react";
import { games } from "../../constants/gamesData";
import { useTheme } from "../ThemeToggle";

const ICON_SIZES = {
  large: "w-6 h-6",
  medium: "w-7 h-7",
  small: "w-5 h-5",
  extrasmall: "w-4 h-4",
};

export const GamesShowcase = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const getGameIcon = (index) => {
    const iconClass = isDark ? "text-indigo-400" : "text-indigo-600";
    switch (index) {
      case 0:
        return <Palette className={`${ICON_SIZES.medium} ${iconClass}`} />;
      case 1:
        return <Keyboard className={`${ICON_SIZES.medium} ${iconClass}`} />;
      default:
        return <Gamepad2 className={`${ICON_SIZES.medium} ${iconClass}`} />;
    }
  };

  return (
    <section className={`py-20 relative ${isDark ? "bg-black" : "bg-white"}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-b ${
          isDark
            ? "from-indigo-900/1 via-black to-black"
            : "from-indigo-100/50 via-white to-white"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"
        }`}
      />

      <div className=" mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold text-center ${
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
                className={`relative p-6 rounded-lg border h-full 
                           backdrop-blur-sm transition-all duration-300
                           hover:shadow-[0_0_30px_-5px] ${
                             isDark
                               ? "bg-black border-indigo-500/30 group-hover:border-indigo-400 hover:shadow-indigo-500/20"
                               : "bg-white border-indigo-300/50 group-hover:border-indigo-500 hover:shadow-indigo-400/20"
                           }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-lg ${
                        isDark ? "bg-indigo-500/10" : "bg-indigo-100/50"
                      }`}
                    >
                      {getGameIcon(index)}
                    </div>
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 flex items-center ${
                        isDark
                          ? "text-white group-hover:text-indigo-400"
                          : "text-gray-900 group-hover:text-indigo-600"
                      }`}
                    >
                      {game.title}
                    </h3>
                  </div>

                  <motion.button
                    onClick={() => navigate(game.path)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 border rounded-lg transition-all duration-300 group/play ${
                      isDark
                        ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-400"
                        : "bg-indigo-100/50 border-indigo-300/50 text-indigo-600 hover:bg-indigo-200/70 hover:border-indigo-500"
                    }`}
                  >
                    <Play className={ICON_SIZES.small} />
                    <motion.div
                      className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                                 text-xs px-2 py-1 rounded opacity-0 group-hover/play:opacity-100
                                 border transition-opacity duration-300 ${
                                   isDark
                                     ? "bg-black/80 border-indigo-500/30 text-indigo-400"
                                     : "bg-white/80 border-indigo-300/50 text-indigo-600"
                                 }`}
                    >
                      Play Now
                    </motion.div>
                  </motion.button>
                </div>

                <div className="space-y-4 mb-6 px-3">
                  {game.description.map((desc, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="flex items-start gap-2.5"
                    >
                      <AlignRight
                        className={`${
                          ICON_SIZES.extrasmall
                        } mt-1 flex-shrink-0 ${
                          isDark ? "text-indigo-400" : "text-indigo-600"
                        }`}
                      />
                      <p
                        className={`transition-colors duration-300 ${
                          isDark
                            ? "text-gray-300 group-hover:text-gray-200"
                            : "text-gray-600 group-hover:text-gray-900"
                        }`}
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
                                className={`font-semibold ${
                                  isDark ? "text-indigo-400" : "text-indigo-600"
                                }`}
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
                                className={`font-medium ${
                                  isDark ? "text-blue-400" : "text-blue-600"
                                }`}
                              >
                                {word}{" "}
                              </span>
                            );
                          } else {
                            return word + " ";
                          }
                        })}
                      </p>
                    </motion.div>
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
                      className={`px-3 py-1 text-sm border rounded-full 
                               transition-all duration-300 cursor-default
                               flex items-center gap-1.5 ${
                                 isDark
                                   ? "text-indigo-400 border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400"
                                   : "text-indigo-600 border-indigo-300/50 bg-indigo-100/50 hover:bg-indigo-200/70 hover:border-indigo-500"
                               }`}
                    >
                      {index === 0 ? (
                        <Palette
                          className={`${ICON_SIZES.small} ${
                            isDark ? "text-indigo-400" : "text-indigo-600"
                          }`}
                        />
                      ) : (
                        <Keyboard
                          className={`${ICON_SIZES.small} ${
                            isDark ? "text-indigo-400" : "text-indigo-600"
                          }`}
                        />
                      )}
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
            className={`relative px-8 py-3 backdrop-blur-sm 
                     border rounded-full shadow-lg
                     transition-all duration-300
                     inline-flex items-center gap-3 group ${
                       isDark
                         ? "bg-gradient-to-r from-indigo-600/20 to-indigo-400/10 border-indigo-500/40 text-indigo-300 hover:text-white hover:border-indigo-400/80 hover:from-indigo-600/30 hover:to-indigo-400/20"
                         : "bg-gradient-to-r from-indigo-100 to-indigo-50 border-indigo-300/60 text-indigo-600 hover:text-indigo-900 hover:border-indigo-500 hover:from-indigo-200 hover:to-indigo-100"
                     }`}
          >
            <span className="font-semibold tracking-wide">
              Explore All Games
            </span>
            <div className="relative">
              <motion.div
                className={`absolute inset-0 rounded-full blur-md ${
                  isDark ? "bg-indigo-500/30" : "bg-indigo-400/30"
                }`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <ArrowRight
                className={`${ICON_SIZES.medium} relative z-10 group-hover:translate-x-2 transition-transform duration-300`}
              />
            </div>

            {/* Add a subtle background effect */}
            <motion.div
              className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark
                  ? "bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]"
                  : "bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)]"
              }`}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GamesShowcase;
