"use client";

import { projects } from "@/data/content";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative">
      {/* Section Title with decorative line and gradient */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-neutral-200 via-green-500/20 to-neutral-200 dark:from-neutral-800 dark:via-green-400/20 dark:to-neutral-800" />
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Subtle hover effect background */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-100 dark:from-neutral-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex flex-col sm:flex-row gap-6 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700">
              {/* Project Logo */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 p-2.5 flex items-center justify-center">
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={30}
                    height={30}
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src={project.logoDark || project.logo}
                    alt={`${project.title} logo`}
                    width={30}
                    height={30}
                    className="object-contain hidden dark:block"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-grow space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <div className="flex gap-3 text-neutral-600 dark:text-neutral-400">
                    {project.isPrivate ? (
                      <span title="Private Project">
                        <FaLock className="h-4 w-4" />
                      </span>
                    ) : (
                      project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
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
                        className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.description}
                </p>

                <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-500">
                  <span>{project.category}</span>
                  <span className="mx-2">•</span>
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
