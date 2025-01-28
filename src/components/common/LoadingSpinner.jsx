import { motion } from "framer-motion";
import { Loader } from "lucide-react";

export const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
    >
      <Loader className="w-12 h-12 text-indigo-400" />
    </motion.div>
  </motion.div>
);