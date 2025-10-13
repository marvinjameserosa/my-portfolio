import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Leadership from "@/components/leadership";
import Contact from "@/components/contact";
import NavigationHeader from "@/components/navigation-header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationHeader />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Leadership />
      <Contact />
    </main>
  );
}
