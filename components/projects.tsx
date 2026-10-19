import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Section } from "./section";

export default function Projects() {
  return (
    <Section id="work" label="Work">
      <ul className="-mt-5 divide-y divide-border">
        {projects.map((project) => (
          <li key={project.title} className="py-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-medium leading-6 text-foreground">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 transition-colors hover:text-muted-foreground"
                  >
                    {project.title}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-muted-foreground/70 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
                    />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                {project.date}
              </span>
            </div>
            <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-2 flex gap-3 text-sm text-muted-foreground/70">
              <span>{project.category}</span>
              {project.github && (
                <>
                  <span aria-hidden="true">·</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    Source
                  </a>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
