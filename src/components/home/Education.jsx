import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "2022 – 2026",
    grade: "CGPA: 8.8",
  },
  {
    degree: "12th with Science (BSEB)",
    institution: "Sachidanand Sinha College",
    location: "Aurangabad, Bihar",
    period: "2020 – 2021",
    grade: "Percentage: 82.00%",
  },
  {
    degree: "10th (CBSE)",
    institution: "Vivekanand Mission School",
    location: "Aurangabad, Bihar",
    period: "2018 – 2019",
    grade: "Percentage: 93.40%",
  },
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/10 transform -skew-x-12" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent dark:from-primary-900/10 transform skew-x-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16 flex items-center justify-center gap-4">
            <GraduationCap className="text-primary-500 dark:text-primary-400" size={36} />
            Academic Odyssey
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-10"
          >
            {educationData.map((education, index) => (
              <EducationCard 
                key={index} 
                education={education} 
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const EducationCard = ({ education, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group"
    >
      <div className="
        bg-white dark:bg-slate-800/70 
        backdrop-blur-sm
        rounded-3xl 
        shadow-xl 
        border border-slate-200 dark:border-slate-700/50
        overflow-hidden
        transition-all duration-300
        group-hover:shadow-2xl
        group-hover:scale-[1.02]
      ">
        <div className="grid md:grid-cols-3 gap-6 p-6">
          {/* Left - Institution Details */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {education.institution}
                </p>
              </div>
            </div>
            
            <div className="space-y-3 text-slate-600 dark:text-slate-300">
              <DetailItem icon={MapPin} text={education.location} />
              <DetailItem icon={Calendar} text={education.period} />
            </div>
          </div>

          {/* Right - Grade */}
          <div className="md:col-span-1 flex items-center justify-end">
            <div className="
              bg-primary-50 dark:bg-primary-900/20 
              text-primary-600 dark:text-primary-400
              px-4 py-2 rounded-full 
              font-semibold 
              text-lg
              shadow-md
            ">
              {education.grade}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DetailItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
    <span>{text}</span>
  </div>
);

export default Education;