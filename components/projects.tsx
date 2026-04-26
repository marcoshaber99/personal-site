import React from "react";
import { projects } from "@/data/content";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { SectionTitle } from "./section-title";

export default function Projects() {
  return (
    <section className="relative" aria-labelledby="projects-title">
      <SectionTitle title="Selected Work" />

      <div className="grid gap-4 sm:gap-6" role="list">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative"
            role="listitem"
          >
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-100 dark:from-neutral-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-3 sm:gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 bg-background/40">
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                <h3 className="text-base sm:text-lg font-medium">
                  {project.title}
                </h3>
                <div
                  className="flex gap-2 sm:gap-3 text-neutral-600 dark:text-neutral-400"
                  aria-label="Project links"
                >
                  {project.isPrivate ? (
                    <span title="Private Project" aria-label="Private Project">
                      <FaLock
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        aria-hidden="true"
                      />
                    </span>
                  ) : (
                    project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <FaGithub
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                          aria-hidden="true"
                        />
                      </Link>
                    )
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <FaExternalLinkAlt
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div
                className="flex items-center text-xs text-neutral-500 dark:text-neutral-500"
                aria-label="Project details"
              >
                <span>{project.category}</span>
                <span className="mx-2" aria-hidden="true">
                  •
                </span>
                <span>{project.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
