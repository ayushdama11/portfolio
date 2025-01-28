import { motion } from "framer-motion";

export const GameCard = ({ game, onClick }) => (
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
          className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-500 
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
            animate={{ x: [0, 5, 0] }}
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
);
