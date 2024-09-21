import { projects } from "@/data/content";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="mt-8 w-full">
      <h2 className="heading dark:text-green-400 mb-4">projects</h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-3 border border-transparent hover:border-green-200/30"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex space-x-2">
                {project.isPrivate && (
                  <span
                    title="Private Project"
                    className="text-muted-foreground"
                  >
                    <FaLock className="h-4 w-4" />
                  </span>
                )}
                {project.github && !project.isPrivate && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FaGithub className="h-4 w-4" />
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-1">
              {project.description}
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>{project.category}</span>
              <div className="flex-grow h-px bg-border mx-2"></div>
              <span>{project.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
