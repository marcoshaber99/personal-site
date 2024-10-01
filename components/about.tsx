"use client";

import { about } from "@/data/content";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <h2 className="heading dark:text-green-400">about</h2>
      <div className="group mt-2">
        <p className="text-base dark:text-neutral-400">{about}</p>
        <Link
          href="/marco-haber-resume.pdf"
          download
          className="mt-4 inline-flex items-center gap-2 font-pp-italic text-lg text-primary transition-colors tracking-wide hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-300 pb-1"
        >
          Resume{" "}
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <DownloadIcon className="h-4 w-4" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
