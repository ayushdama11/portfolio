import { motion } from "framer-motion";

export const FloatingCubes = () => {
  const cubes = Array.from({ length: 12 }).map(() => ({
    duration: Math.random() * 15 + 10,
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
  }));

  return (
    <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
      {cubes.map((cube, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 border border-indigo-500"
          initial={{
            x: cube.initialX,
            y: cube.initialY,
            rotate: 0,
          }}
          animate={{
            x: [cube.initialX, Math.random() * window.innerWidth, cube.initialX],
            y: [cube.initialY, Math.random() * window.innerHeight, cube.initialY],
            rotate: 360,
          }}
          transition={{
            duration: cube.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
