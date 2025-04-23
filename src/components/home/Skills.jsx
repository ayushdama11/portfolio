import React, { useState } from 'react';
import { 
  Code, Database, Layout, Server, 
  Terminal, GitBranch, Layers, Cpu, Users
} from 'lucide-react';
import { useTheme } from '../ThemeToggle';

const SkillsGrid = () => {
  const { isDark } = useTheme();
  const skillsData = [
    {
      category: "Frontend",
      icon: <Layout />,
      skills: ["React", "Vue", "Angular", "SASS", "NextJS"]
    },
   
    {
      category: "Database & Tools",
      icon: <Database />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"]
    },
   
    {
      category: "Languages",
      icon: <Code />,
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Java"]
    },
    {
      category: "Version Control",
      icon: <GitBranch />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Cursor"]
    },
    
    {
      category: "AI & ML",
      icon: <Cpu />,
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "NLP"]
    },
    {
      category: "Soft Skills",
      icon: <Users />,
      skills: ["Communication", "Leadership", "Problem Solving", "Teamwork"]
    }
  ];

  return (
    <div className={`w-full py-16 px-4 relative overflow-hidden bg-gradient-to-br ${isDark ? 'from-slate-900 via-slate-800 to-gray-900' : 'from-slate-50 via-slate-100 to-slate-200'}`}>
      {/* Shiny minimal effects */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 ${isDark ? 'bg-blue-500' : 'bg-blue-200'} rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-blob`}></div>
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${isDark ? 'bg-purple-500' : 'bg-purple-200'} rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-blob animation-delay-2000`}></div>
      <div className={`absolute top-1/3 right-1/3 w-96 h-96 ${isDark ? 'bg-teal-500' : 'bg-teal-200'} rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-blob animation-delay-4000`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className={`text-4xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-slate-900'}`}>Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category, index, isDark }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`rounded-xl ${isDark ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90' : 'bg-gradient-to-br from-slate-100/90 to-slate-200/90'} backdrop-blur-sm p-6 border ${isDark ? 'border-slate-700/50' : 'border-slate-300/50'} shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shine effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${isDark ? 'slate-400/5' : 'slate-600/5'} to-transparent group-hover:translate-x-full transition-transform duration-1000`}></div>
      
      <div className="flex items-center mb-6">
        <div className={`p-3 ${isDark ? 'bg-gradient-to-br from-slate-700/80 to-slate-800/80' : 'bg-gradient-to-br from-slate-200/80 to-slate-300/80'} rounded-lg border ${isDark ? 'border-slate-600/30' : 'border-slate-400/30'} shadow-inner mr-4 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>
          {category.icon}
        </div>
        <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{category.category}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillButton 
            key={skillIndex} 
            skill={skill} 
            delay={skillIndex * 0.05} 
            isParentHovered={isHovered}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
};

const SkillButton = ({ skill, delay, isParentHovered, isDark }) => {
  return (
    <div 
      className="relative overflow-hidden group/skill"
      style={{ 
        animationDelay: `${delay}s`,
        transform: `perspective(800px) rotateX(5deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className={`${isDark ? 'bg-gradient-to-r from-slate-700/40 via-slate-600/40 to-slate-700/40' : 'bg-gradient-to-r from-slate-200/40 via-slate-300/40 to-slate-200/40'} backdrop-blur-md p-2 rounded-lg border ${isDark ? 'border-slate-500/30' : 'border-slate-400/30'} text-center ${isDark ? 'text-slate-300' : 'text-slate-700'} text-sm font-medium shadow-sm transition-all duration-300 relative z-10 group-hover/skill:${isDark ? 'text-white' : 'text-slate-900'} group-hover/skill:shadow-md group-hover/skill:border-cyan-500/30`}>
        {skill}
      </div>
      
      {/* Glow on hover effect */}
      <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 rounded-lg opacity-0 group-hover/skill:opacity-70 blur-md transition-opacity duration-300`}></div>
    </div>
  );
};

// CSS to be added to your global CSS file
const cssStyles = `
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
`;

export default SkillsGrid;