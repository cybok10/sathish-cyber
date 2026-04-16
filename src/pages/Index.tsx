import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-mesh text-foreground relative selection:bg-primary/20">
      <Navbar />

      <main className="flex flex-col relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Activities />
        <Contact />
      </main>
    </div>
  );
};

export default Index;