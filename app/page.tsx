import About from "@/components/about";
import Photography from "@/components/photography";
import Projects from "@/components/projects";
import WorkExp from "@/components/work-exp";
import Skills from "@/components/skills";
import Blog from "@/components/blog";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <>
      <Container>
        <div className="space-y-24 pt-6 sm:space-y-28 sm:pt-10">
          <About />
          <Projects />
          <WorkExp />
          <Skills />
          <Blog />
        </div>
      </Container>
      <div className="mt-24 sm:mt-28">
        <Photography />
      </div>
    </>
  );
}
