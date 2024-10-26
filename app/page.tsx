import About from "@/components/about";
import Photography from "@/components/photography";
import Projects from "@/components/projects";
import WorkExp from "@/components/work-exp";
import Skills from "@/components/skills";
import Blog from "@/components/blog";

export default function Home() {
  return (
    <div className="space-y-20">
      <About />
      <Projects />
      <WorkExp />
      <Skills />
      <Blog />
      <Photography />
    </div>
  );
}
