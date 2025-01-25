import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, Palette, Keyboard, Command } from 'lucide-react';

const GameNavigation = () => {
  const navigate = useNavigate();
  
  const navItems = [
    {
      title: "Home",
      icon: Home,
      path: "/",
      position: "top-6",
      delay: 1,
    },
    {
      title: "Color Match",
      icon: Palette,
      path: "/color-match",
      position: "top-20",
      delay: 1.2,
    },
    {
      title: "Typing Test",
      icon: Keyboard,
      path: "/typing-test",
      position: "top-34",
      delay: 1.4,
    },
    {
      title: "Matrix Rain",
      icon: Command,
      path: "/matrix",
      position: "top-48",
      delay: 1.6,
    },
  ];

  const NavButton = ({ item }) => (
    <motion.div
      className={`fixed ${item.position} right-6 z-50`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: item.delay }}
    >
      <motion.button
        onClick={() => navigate(item.path)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center gap-2 px-4 py-2 rounded-lg
                   bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm
                   hover:bg-indigo-500/20 hover:border-indigo-400
                   transition-all duration-300 text-white"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 
                     rounded-lg blur opacity-0 group-hover:opacity-20 transition-all duration-300"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <item.icon className="w-5 h-5" />
        </motion.div>

        <span className="relative font-medium group-hover:text-white transition-colors">
          {item.title}
        </span>

        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-indigo-400 group-hover:bg-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.button>
    </motion.div>
  );

  return (
    <>
      {navItems.map((item) => (
        <NavButton key={item.path} item={item} />
      ))}
    </>
  );
};

export default GameNavigation;