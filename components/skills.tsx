"use client";

import React from "react";
import { skills } from "@/data/content";
import { motion } from "framer-motion";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);
  const id = React.useId();

  return (
    <section className="mt-8 w-full">
      <h2 className="heading dark:text-green-400 mb-6">skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="group rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-3 border hover:border-green-200/50 bg-background"
          >
            <h4 className="text-base font-medium mb-3 text-primary dark:text-orange-400">
              {category}
            </h4>
            <div
              className="flex flex-wrap gap-1"
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skillList.map((skill) => (
                <motion.div
                  key={skill}
                  className="relative"
                  transition={{ duration: 0.2 }}
                >
                  {hoveredSkill === skill && (
                    <motion.div
                      layoutId={id}
                      className="absolute inset-0 border border-green-400 dark:border-green-400 bg-green-400/20 rounded-md"
                      initial={{ borderRadius: 6 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <span
                    className="text-sm text-secondary-foreground px-2 py-1 rounded-md cursor-pointer relative inline-block"
                    onMouseEnter={() => setHoveredSkill(skill)}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
