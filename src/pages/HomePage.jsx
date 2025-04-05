import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import Certifications from "../components/home/Certifications";
import Achievements from "../components/home/Achievements";
import Contact from "../components/home/Contact";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import { useTheme } from "../components/ThemeToggle";

const HomePage = () => {
  const { isDark } = useTheme();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Define the section backgrounds
  const sectionBg1 = isDark ? "bg-slate-950" : "bg-white";
  const sectionBg2 = isDark ? "bg-slate-900/50" : "bg-slate-50";

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 via-transparent to-transparent dark:from-primary-900/10 dark:via-transparent dark:to-transparent pointer-events-none" />
        
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className={`${sectionBg2} relative`}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className={`${sectionBg1} relative`}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Skills />
            </motion.div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section id="certifications" className={`${sectionBg2} relative`}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Certifications />
            </motion.div>
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className={`${sectionBg1} relative`}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Education />
            </motion.div>
          </div>
        </section>
        
        {/* Achievements Section */}
        <section id="achievements" className={`${sectionBg2} relative`}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Achievements />
            </motion.div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className={`${sectionBg1} relative`}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomePage;