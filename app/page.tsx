import About from "@/components/about";
import Blog from "@/components/blog";
import Photography from "@/components/photography";
import Projects from "@/components/projects";
import WorkExp from "@/components/work-exp";

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <WorkExp />
      <Photography />
      <Blog />
    </main>
  );
}
