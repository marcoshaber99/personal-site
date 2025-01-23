"use client";

import React from "react";
import { motion } from "framer-motion";

interface WobblyProps {
  children: React.ReactNode;
}

const wobbleAnimation = {
  animate: {
    transform: [
      "translate3d(0, 0px, 0) rotate(0deg) scale(1)",
      "translate3d(0, -1px, 0) rotate(-1deg) scale(1.01)",
      "translate3d(0, 1px, 0) rotate(1deg) scale(0.99)",
      "translate3d(0, -1px, 0) rotate(-1deg) scale(1.01)",
      "translate3d(0, 0px, 0) rotate(0deg) scale(1)",
    ],
  },
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const hoverAnimation = {
  scale: 1.05,
  color: ["#ff6b6b", "#4ecdc4", "#ff6b6b"],
  transition: {
    duration: 0.5,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export function Wobbly({ children }: WobblyProps) {
  return (
    <motion.span
      className="inline-block font-semibold cursor-help relative will-change-transform"
      {...wobbleAnimation}
      whileHover={hoverAnimation}
      title="Totally not sarcastic at all"
    >
      {children}
    </motion.span>
  );
}
