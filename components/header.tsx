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
        <Link href="/" className="text-xl font-semibold">
          Marco Haber
        </Link>
      </header>
      <nav className="flex items-center">
        <ul
          className="flex space-x-2 mr-10"
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
                <link.icon className="h-5 w-5" />
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </div>
  );
}
