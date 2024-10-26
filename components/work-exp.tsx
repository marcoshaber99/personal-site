"use client";

import { workExperience } from "@/data/content";
import { motion } from "framer-motion";

export default function WorkExp() {
  return (
    <section className="relative">
      {/* Section Title with decorative line and gradient */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-medium tracking-tight">Work Experience</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-neutral-200 via-green-500/20 to-neutral-200 dark:from-neutral-800 dark:via-green-400/20 dark:to-neutral-800" />
      </div>

      <div className="space-y-4">
        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Subtle hover effect background */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-100 dark:from-neutral-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">{job.title}</h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400">
                    {job.company}
                  </p>
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 sm:mt-0">
                  {job.duration}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {job.description.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500/50 dark:bg-green-400/50" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
