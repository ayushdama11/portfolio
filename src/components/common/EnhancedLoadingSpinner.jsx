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

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          rotate: 0,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.2, 1.6, 1],
          rotate: [0, 360, 720, 1080],
          borderRadius: ["50%", "20%", "50%", "10%"],
          borderColor: [
            "rgba(29, 78, 216, 0.9)",
            "rgba(30, 64, 175, 0.9)",
            "rgba(59, 130, 246, 0.9)",
            "rgba(29, 78, 216, 0.9)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 0.8, 1],
        }}
        className="w-32 h-32 border-8 border-blue-900 rounded-full border-t-transparent
          shadow-2xl shadow-blue-900/50
          bg-gradient-to-r from-blue-900/40 to-blue-950/40 
          relative z-10"
      />
    </div>
  );
};

export default FirstLoading;
