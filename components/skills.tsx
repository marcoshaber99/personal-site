"use client";

import React from "react";
import { skills } from "@/data/content";
import { motion } from "framer-motion";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);
  const id = React.useId();

  return (
    <section className="relative">
      {/* Section Title with decorative line and gradient */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-medium tracking-tight">Skills</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-neutral-200 via-green-500/20 to-neutral-200 dark:from-neutral-800 dark:via-green-400/20 dark:to-neutral-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Subtle hover effect background */}

            <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 bg-background/40">
              <h3 className="text-lg font-medium mb-4">{category}</h3>

              <div
                className="flex flex-wrap gap-2"
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="relative"
                  >
                    {hoveredSkill === skill && (
                      <motion.div
                        layoutId={id}
                        className="absolute inset-0 rounded-md bg-green-500/10 dark:bg-green-400/10 border border-green-500/20 dark:border-green-400/20"
                        transition={{ duration: 0.15 }}
                      />
                    )}
                    <span
                      className="relative px-2.5 py-1 text-sm text-neutral-600 dark:text-neutral-400 cursor-default rounded-md"
                      onMouseEnter={() => setHoveredSkill(skill)}
                    >
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
