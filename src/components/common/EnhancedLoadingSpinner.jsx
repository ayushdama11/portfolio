import { motion } from "framer-motion";

const FirstLoading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: [1, 1.2, 1.6, 1],
        rotate: [0, 180, 360, 540],
        borderRadius: ["50%", "20%", "50%", "10%"],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(167, 139, 250, 1)",
          "rgba(192, 132, 252, 1)",
          "rgba(99, 102, 241, 1)",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.4, 0.7, 1],
      }}
      className="w-20 h-20 border-4 border-indigo-500 rounded-full border-t-transparent 
                 shadow-lg shadow-indigo-500/50 
                 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
    />
  </div>
);

export default FirstLoading;