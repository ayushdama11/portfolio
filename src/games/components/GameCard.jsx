import { motion } from "framer-motion";
import { useTheme } from "../../components/ThemeToggle";

export const GameCard = ({ game, onClick }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-30 
                   group-hover:opacity-50 transition duration-300"
      />

      <div
        className={`relative p-6 rounded-lg border h-full 
                   backdrop-blur-sm transition-colors duration-300 ${
                     isDark
                       ? "bg-black border-indigo-500/30 group-hover:border-indigo-400"
                       : "bg-white border-indigo-300/50 group-hover:border-indigo-500"
                   }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <game.icon
              className={`w-12 h-12 p-2 ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              }`}
            />
            <h3
              className={`ml-4 text-xl font-bold transition-colors duration-300 ${
                isDark
                  ? "text-white group-hover:text-indigo-300"
                  : "text-gray-900 group-hover:text-indigo-600"
              }`}
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
              className={`flex items-start ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
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
                className={isDark ? "text-indigo-400" : "text-indigo-600"}
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
              className={`px-3 py-1 text-sm border rounded-full transition-colors ${
                isDark
                  ? "text-indigo-400 border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20"
                  : "text-indigo-600 border-indigo-300/50 bg-indigo-100/50 hover:bg-indigo-200/70"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.div className="mt-6 relative group/button">
          <motion.div
            className={`absolute -inset-1 bg-gradient-to-r rounded-xl blur opacity-30 
                              group-hover/button:opacity-50 transition duration-300 ${
                                isDark
                                  ? "from-indigo-400 via-indigo-400 to-indigo-500"
                                  : "from-indigo-300 via-indigo-400 to-indigo-500"
                              }`}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative w-full py-3 rounded-xl
                     border transition-all duration-300
                     flex items-center justify-center gap-2 ${
                       isDark
                         ? "bg-black border-indigo-500/30 text-indigo-400 group-hover/button:border-indigo-400"
                         : "bg-white border-indigo-300/50 text-indigo-600 group-hover/button:border-indigo-500"
                     }`}
          >
            <span className="font-medium">Play Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <motion.div
                className={`absolute -inset-1 rounded-full blur opacity-30 ${
                  isDark ? "bg-indigo-500" : "bg-indigo-400"
                }`}
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
  );
};
