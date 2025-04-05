import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificationsData = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Dec 2024",
    credential: "#NPTEL123456789",
    link: "#",
  },
  {
    title: "Server-Side JavaScript with Node.js",
    issuer: "Coursera",
    date: "Mar 2024",
    credential: "#COURSERA123456789",
    link: "#",
  },
  {
    title: "Mastering DSA with C & C++",
    issuer: "Udemy",
    date: "Nov 2023",
    credential: "#UDEMY123456789",
    link: "#",
  },
  {
    title: "Programming in C++: A hands on Introduction",
    issuer: "Coursera",
    date: "Nov 2023",
    credential: "#COURSERA987654321",
    link: "#",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Nov 2023",
    credential: "#COURSERA987654321",
    link: "#",
  },
];

const Certifications = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-50 to-transparent dark:from-primary-900/10 transform -skew-x-12" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent dark:from-primary-900/10 transform skew-x-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16 flex items-center justify-center gap-4">
            <Award className="text-primary-500 dark:text-primary-400" size={36} />
            Professional Certifications
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificationsData.map((certification, index) => (
              <CertificationCard 
                key={index} 
                certification={certification} 
                index={index} 
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const CertificationCard = ({ certification, index }) => {
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
        flex flex-col
      ">
        <div className="p-6 flex-grow">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-400">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {certification.title}
              </h3>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-slate-600 dark:text-slate-300 text-base">
              Issued by: {certification.issuer}
            </p>
            <div className="flex items-center text-slate-500 dark:text-slate-400">
              <Calendar size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{certification.date}</span>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {certification.credential}
            </span>
            {certification.link && (
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-primary-600 dark:text-primary-400 
                  hover:bg-primary-50 dark:hover:bg-primary-900/20
                  p-2 -m-2 rounded-full
                  transition-colors
                  flex items-center gap-1
                "
              >
                <ExternalLink size={14} />
                <span className="text-xs font-medium">Verify</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;