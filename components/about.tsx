"use client";

import { about } from "@/data/content";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(20px)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-8"
      >
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, transform: "translateX(-20px)" }}
            animate={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="inline-block font-pp-italic text-4xl sm:text-5xl hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-200"
            >
              Marco Haber
            </Link>
          </motion.div>
          <h2 className="text-lg text-muted-foreground sm:text-xl font-mono">
            Full Stack Developer
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-[60ch] leading-relaxed text-muted-foreground"
        >
          <p className="text-base sm:text-lg">{about}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Link
            href="/marco-haber-dev-resume.pdf"
            download
            className="group inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="text-base font-medium relative">
              Download Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-800 dark:bg-neutral-200 group-hover:w-full transition-all duration-300" />
            </span>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <DownloadIcon className="h-4 w-4" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
