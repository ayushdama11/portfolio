import { motion } from "framer-motion";
import { 
  Code, Database, Layout, Server, 
  Terminal, GitBranch, Layers, Cpu
} from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Technologies & Frameworks",
    icon: Layers,
    skills: ["React", "NodeJS", "Express JS", "MongoDB", "Git", "GitHub"],
  },
  {
    category: "Core Competencies",
    icon: Cpu,
    skills: [
      "Data Structures and Algorithms",
      "Problem-Solving",
      "Responsive Web Design",
      "Backend Development",
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category, categoryIndex) => (
          <SkillCategory
            key={category.category}
            category={category}
            index={categoryIndex}
          />
        ))}
      </div>
    </>
  );
};

const SkillCategory = ({ category, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const Icon = category.icon;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="card p-6"
    >
      <div className="flex items-center mb-6 gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-400">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {category.category}
        </h3>
      </div>
      <div className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            variants={childVariants}
            className="flex items-center gap-2"
            custom={skillIndex}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: skillIndex * 0.2,
              }}
            />
            <span className="text-slate-700 dark:text-slate-300">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;