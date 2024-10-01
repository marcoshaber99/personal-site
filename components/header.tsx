"use client";

import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { socialLinks } from "@/data/social-links";
import { motion } from "framer-motion";

export function Header() {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const id = React.useId();

  return (
    <div className="flex items-center justify-between mb-8">
      <header>
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-pp-italic relative group"
        >
          Marco Haber
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </header>
      <nav className="flex items-center">
        <ul
          className="flex space-x-1 sm:space-x-2 mr-2 sm:mr-4 md:mr-10"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {socialLinks.map((link) => (
            <li
              key={link.name}
              className="relative"
              style={{
                zIndex: hoveredLink === link.name ? 1 : 2,
              }}
            >
              {hoveredLink === link.name && (
                <motion.div
                  layoutId={id}
                  className="absolute inset-0 border border-orange-400 dark:border-orange-400 bg-orange-400/20 rounded-md"
                  initial={{
                    borderRadius: 8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                />
              )}
              <Link
                href={link.href}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "link",
                  size: "icon",
                  className: "relative p-0",
                })}
                onMouseEnter={() => setHoveredLink(link.name)}
              >
                <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </div>
  );
}
