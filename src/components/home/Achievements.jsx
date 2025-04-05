import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Code, CheckCircle2 } from "lucide-react";

const achievementsData = [
  {
    icon: Code,
    title: "250+ Problems Solved",
    description: "Solved over 250 data structures and algorithms problems on LeetCode.",
    color: "blue",
  },
  {
    icon: Code,
    title: "150+ Problems Solved",
    description: "Solved over 150 problems on Coding Ninja's platform.",
    color: "green",
  },
  {
    icon: Code,
    title: "100+ Problems Solved",
    description: "Solved over 100 problems on GeeksforGeeks platform.",
    color: "orange",
  },
  {
    icon: Star,
    title: "Five Star Badge",
    description: "Earned five star badge on HackerRank for problem solving.",
    color: "yellow",
  },
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12 flex items-center justify-center gap-4">
            <Trophy className="text-primary-500 dark:text-primary-400" size={36} />
            Achievements
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {achievementsData.map((achievement, index) => (
              <AchievementCard 
                key={achievement.title} 
                achievement={achievement} 
                index={index} 
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const AchievementCard = ({ achievement, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  // Color maps
  const colorMap = {
    blue: {
      bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10",
      text: "text-blue-600 dark:text-blue-400",
      glow: "group-hover:shadow-blue-300/50 dark:group-hover:shadow-blue-400/30",
      icon: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    green: {
      bg: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10",
      text: "text-green-600 dark:text-green-400",
      glow: "group-hover:shadow-green-300/50 dark:group-hover:shadow-green-400/30",
      icon: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    orange: {
      bg: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10",
      text: "text-orange-600 dark:text-orange-400",
      glow: "group-hover:shadow-orange-300/50 dark:group-hover:shadow-orange-400/30",
      icon: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    },
    yellow: {
      bg: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/10",
      text: "text-amber-600 dark:text-amber-400",
      glow: "group-hover:shadow-amber-300/50 dark:group-hover:shadow-amber-400/30",
      icon: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
    },
  };
  
  const colors = colorMap[achievement.color] || colorMap.blue;
  const Icon = achievement.icon;

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative transform transition-all duration-300 
        ${isHovered ? 'scale-[1.02]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          relative overflow-hidden rounded-2xl p-6 
          bg-gradient-to-br ${colors.bg}
          border border-transparent
          transition-all duration-300
          ${colors.glow}
          group-hover:shadow-xl
        `}
      >
        <div className="flex items-start gap-5">
          <div className={`p-3 rounded-lg ${colors.icon}`}>
            <Icon size={28} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-xl mb-2 ${colors.text}`}>
              {achievement.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-base">
              {achievement.description}
            </p>
          </div>
        </div>

        {/* Subtle animated background effect */}
        <div 
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-10 
            bg-gradient-to-r from-transparent via-white/30 to-transparent 
            animate-[shimmer_2s_infinite]
          `}
        />
      </div>
    </motion.div>
  );
};

export default Achievements;