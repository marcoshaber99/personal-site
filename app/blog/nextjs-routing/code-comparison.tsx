"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CodeBlock from "@/components/codeblock";

export function CodeComparison({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [view, setView] = useState<"before" | "after">("before");

  return (
    <div className="my-8 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            view === "before"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setView("before")}
        >
          Before
        </button>
        <button
          className={`px-4 py-2 rounded ${
            view === "after"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setView("after")}
        >
          After
        </button>
      </div>
      <motion.div
        key={view}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CodeBlock className="language-typescript">
          {view === "before" ? before : after}
        </CodeBlock>
      </motion.div>
    </div>
  );
}
