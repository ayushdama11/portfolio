import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";
import { Contact } from "@/components/home/Contact";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { BlogNavLink } from "@/components/layout/BlogNavLink";
import { FloatingCubes } from "@/components/common/FloatingCubes";
import { GamesShowcase } from "@/components/home/GamesShowcase";

const HomePage = () => {
  return (
    <div className="prevent-layout-shift">
      <ScrollToTop />
      <BlogNavLink />
      <Hero />
      <Experience />
      <GamesShowcase />
      <Projects />
      <Skills />
      <Contact />
      <FloatingCubes />
    </div>
  );
};

export default HomePage;
