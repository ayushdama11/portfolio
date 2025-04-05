import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeToggle";

const InitialLoadingScreen = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      isDark ? "bg-slate-950" : "bg-white"
    }`}>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 relative w-24 h-24 mx-auto"
        >
          {/* Animated circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute inset-0 rounded-full ${
                isDark 
                  ? "border-primary-500/60 border-t-transparent" 
                  : "border-primary-500/60 border-t-transparent"
              } border-4`}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Center element */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.5, 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          >
            <div className={`text-xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              A<span className="text-primary-500">.K</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`text-sm ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Loading portfolio...
        </motion.div>
      </div>
    </div>
  );
};

export default InitialLoadingScreen;