"use client";

import React from "react";
import { motion } from "motion/react";
import { projects } from "@/data/content";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { SectionTitle } from "./section-title";

export default function Projects() {
  return (
    <section className="relative" aria-labelledby="projects-title">
      <SectionTitle title="Projects" />

      <div className="grid gap-4 sm:gap-6" role="list">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative"
            role="listitem"
          >
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-100 dark:from-neutral-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              aria-hidden="true"
            />

            <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 bg-background/40">
              <div className="flex flex-col flex-grow">
                <div className="flex flex-row gap-4 sm:gap-6 items-center">
                  <div
                    className="flex-shrink-0 logo-container"
                    aria-hidden="true"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 p-2 sm:p-2.5 flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={30}
                        height={30}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain dark:hidden"
                        loading="lazy"
                        quality={90}
                      />
                      <Image
                        src={project.logoDark || project.logo}
                        alt={`${project.title} dark mode logo`}
                        width={30}
                        height={30}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain hidden dark:block"
                        loading="lazy"
                        quality={90}
                      />
                    </div>
                  </div>

                  <div className="flex flex-grow items-center justify-between gap-3 sm:gap-4">
                    <h3 className="text-base sm:text-lg font-medium">
                      {project.title}
                    </h3>
                    <div
                      className="flex gap-2 sm:gap-3 text-neutral-600 dark:text-neutral-400"
                      aria-label="Project links"
                    >
                      {project.isPrivate ? (
                        <span
                          title="Private Project"
                          aria-label="Private Project"
                        >
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
                </div>

                <div className="space-y-2 sm:space-y-3 mt-2 sm:mt-3">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 sm:line-clamp-none">
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
