"use client";

import { socialLinks } from "@/data/social-links";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-32 py-12">
      {/* Decorative line with gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl">
        <div className="h-px w-full bg-gradient-to-r from-neutral-200 via-green-500/20 to-neutral-200 dark:from-neutral-800 dark:via-green-400/20 dark:to-neutral-800" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <link.icon className="h-5 w-5" aria-label={link.name} />
              </motion.a>
            ))}
          </div>

          {/* Copyright Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-neutral-600 dark:text-neutral-400"
          >
            <span>&copy; {new Date().getFullYear()} </span>
            <span className="text-base text-neutral-800 dark:text-neutral-200">
              Marco Haber
            </span>
            <span>. All rights reserved.</span>
          </motion.div>

          {/* Back to Top Link */}
          <motion.a
            href="#"
            className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
