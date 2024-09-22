import About from "@/components/about";
import Photography from "@/components/photography";
import Projects from "@/components/projects";
import WorkExp from "@/components/work-exp";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <WorkExp />
      <Skills />
      <Photography />
    </main>
  );
}
