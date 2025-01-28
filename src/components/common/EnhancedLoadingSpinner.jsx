import { motion } from "framer-motion";
import { Code, Terminal, Brackets, Database, Layers } from "lucide-react";

const BackgroundIcon = ({ icon: Icon, color }) => (
  <motion.div
    initial={{
      opacity: 0.1,
      scale: 0.8,
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
    }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute pointer-events-none"
  >
    <Icon color={color} size={60} />
  </motion.div>
);

const FirstLoading = () => {
  const backgroundIcons = [
    { icon: Code, color: "rgba(29, 78, 216, 0.9)" },
    { icon: Terminal, color: "rgba(30, 64, 175, 0.9)" },
    { icon: Brackets, color: "rgba(59, 130, 246, 0.9)" },
    { icon: Database, color: "rgba(37, 99, 235, 0.9)" },
    { icon: Layers, color: "rgba(14, 116, 144, 0.9)" },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-black to-gray-950 overflow-hidden">
      <div className="absolute inset-0">
        {backgroundIcons.map((iconData, index) =>
          [...Array(5)].map((_, subIndex) => (
            <BackgroundIcon
              key={`${index}-${subIndex}`}
              icon={iconData.icon}
              color={iconData.color}
            />
          ))
        )}
      </div>

      <div className="relative w-32 h-32">
        <motion.div
          className="absolute inset-0 border-8 border-blue-500/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 border-t-8 border-blue-500 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 border-8 border-blue-900/20 rounded-full"
          animate={{
            scale: [1.1, 1.3, 1.1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default FirstLoading;
