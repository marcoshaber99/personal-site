"use client";

import React from "react";
import { skills } from "@/data/content";
import { motion } from "motion/react";
import { SectionTitle } from "./section-title";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);
  const id = React.useId();

  return (
    <section className="relative">
      <SectionTitle title="Toolkit" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="group relative"
          >
            <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 bg-background/40">
              <h3 className="text-lg font-medium mb-4">{category}</h3>

              <div
                className="flex flex-wrap gap-2"
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skillList.map((skill) => (
                  <div
                    key={skill}
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
