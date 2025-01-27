import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Palette, Keyboard } from "lucide-react";

const InteractiveGames = () => {
  const navigate = useNavigate();

  const games = [
    {
      title: "Color Match Challenge",
      description: [
        "Test your color perception skills",
        "Match RGB values in real-time",
        "Track your high scores and progress",
      ],
      icon: Palette,
      path: "/color-match",
      tech: ["RGB", "Color Theory", "Reaction Time"],
    },
    {
      title: "Typing Speed Test",
      description: [
        "Improve your typing accuracy and speed",
        "Practice with random text passages",
        "View detailed performance metrics",
      ],
      icon: Keyboard,
      path: "/typing-test",
      tech: ["WPM", "Accuracy", "Statistics"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {games.map((game) => (
            <motion.div
              key={game.title}
              variants={cardVariants}
              className="relative group cursor-pointer"
              onClick={() => navigate(game.path)}
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 
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
                </div>

                <ul className="space-y-2 mb-6">
                  {game.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-300 flex items-start"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="mr-2 text-indigo-400 text-lg"
                      >
                        •
                      </motion.span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

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

                <motion.div className="mt-6 relative group/button">
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 
                             rounded-xl blur opacity-30 group-hover/button:opacity-50 transition duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full py-3 bg-black rounded-xl
                             border border-indigo-500/30 text-indigo-400
                             group-hover/button:border-indigo-400 
                             transition-all duration-300
                             flex items-center justify-center gap-2"
                  >
                    <span className="font-medium">Play Now</span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      <motion.div
                        className="absolute -inset-1 bg-indigo-500 rounded-full blur opacity-30"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="relative">→</span>
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveGames;
