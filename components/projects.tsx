import { projects } from "@/data/content";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="mt-8 w-full">
      <h2 className="heading dark:text-green-400 mb-4">projects</h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 border hover:border-green-200/50 bg-background"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-3xl p-3">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={30}
                  height={30}
                  className="rounded-full object-contain dark:hidden"
                />
                <Image
                  src={project.logoDark || project.logo}
                  alt={`${project.title} logo`}
                  width={30}
                  height={30}
                  className="rounded-full object-contain hidden dark:block"
                />
              </div>
              <div className="flex-grow w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h3 className="text-lg font-semibold mb-2 sm:mb-0">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2 mb-2 sm:mb-0">
                    {project.isPrivate ? (
                      <span
                        title="Private Project"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <FaLock className="h-4 w-4" />
                      </span>
                    ) : (
                      project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <FaGithub className="h-4 w-4" />
                        </Link>
                      )
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
                <p className="text-sm text-muted-foreground mb-2">
                  {project.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="whitespace-nowrap">{project.category}</span>
                  <div className="flex-grow h-px bg-border mx-2"></div>
                  <span className="whitespace-nowrap">{project.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
