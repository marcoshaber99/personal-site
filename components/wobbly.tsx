"use client";

import React from "react";
import { motion } from "framer-motion";

interface WobblyProps {
  children: React.ReactNode;
}

export function Wobbly({ children }: WobblyProps) {
  return (
    <motion.span
      className="inline-block font-semibold cursor-help relative"
      animate={{
        y: [0, -1, 1, -1, 0],
        rotate: [0, -1, 1, -1, 0],
        scale: [1, 1.01, 0.99, 1.01, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        color: ["#ff6b6b", "#4ecdc4", "#ff6b6b"],
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
        },
      }}
      title="Totally not sarcastic at all"
    >
      {children}
    </motion.span>
  );
}
