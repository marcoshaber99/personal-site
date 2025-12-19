"use client";

import React, { useEffect, useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";
import { socialLinks } from "@/data/social-links";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isInBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-4 z-50 w-full flex justify-center pointer-events-none mb-12 sm:mb-16">
      <header
        className={cn(
          "flex items-center justify-between transition-all duration-500 ease-in-out pointer-events-auto",
          isScrolled
            ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 px-4 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.4)] w-full max-w-lg mx-4"
            : "w-full max-w-4xl py-2 bg-transparent border-transparent px-0"
        )}
        role="banner"
      >
        <div className="flex items-center min-w-[80px]">
          <AnimatePresence mode="wait">
            {isInBlogPost ? (
              <motion.div
                key="home-link"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <Link
                  href="/"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-200 group py-1.5 px-3 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  aria-label="Back to Home"
                >
                  <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  <span className="text-sm font-medium">Home</span>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pl-2"
              >
                <Link
                  href="/"
                  className="font-pp-ultrabold text-xl tracking-tighter hover:opacity-70 transition-opacity"
                >
                  MH<span className="text-blue-500 dark:text-green-400">.</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2">
          <nav
            className="flex items-center gap-0.5 bg-neutral-100/50 dark:bg-neutral-800/40 p-1 rounded-full border border-neutral-200/50 dark:border-neutral-700/30 shadow-inner"
            role="navigation"
            aria-label="Social links"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted-foreground hover:text-foreground transition-all duration-200 rounded-full hover:bg-white dark:hover:bg-neutral-700 hover:shadow-sm"
                aria-label={link.name}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </nav>

          <div className="h-6 w-[1px] bg-neutral-200 dark:bg-neutral-800 mx-1" />

          <ModeToggle />
        </div>
      </header>
    </div>
  );
}
