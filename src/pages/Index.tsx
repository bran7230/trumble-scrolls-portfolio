import { Hero } from "@/components/Hero";
import { LanguageScroll } from "@/components/LanguageScroll";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LanguageScroll />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
