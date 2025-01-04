"use client";

import React from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { socialLinks } from "@/data/social-links";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();
  const isInBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog";

  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex-1">
        {isInBlogPost && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Home</span>
            </Link>
          </motion.div>
        )}
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <nav className="flex items-center gap-3 sm:gap-5">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              whileHover={{
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon
                className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                aria-label={link.name}
              />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </nav>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <ModeToggle />
        </motion.div>
      </div>
    </header>
  );
}
