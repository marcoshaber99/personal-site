"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const examplePaths = [
  "/shop",
  "/shop/clothes",
  "/shop/clothes/tops",
  "/shop/clothes/tops/t-shirts",
];

export function CatchAllDemo() {
  const [selectedPath, setSelectedPath] = useState(examplePaths[0]);
  const [isOptional, setIsOptional] = useState(true);

  const filePathText = isOptional
    ? "app/shop/[[...slug]]/page.tsx"
    : "app/shop/[...slug]/page.tsx";

  return (
    <div className="my-8 p-4 border-2 rounded-lg border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
      <div className="flex flex-col space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Select a path:</h4>
          <div className="flex flex-wrap gap-2">
            {examplePaths.map((path) => (
              <button
                key={path}
                className={`px-3 py-1 text-sm rounded ${
                  selectedPath === path
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
                onClick={() => setSelectedPath(path)}
              >
                {path}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isOptional}
              onChange={() => setIsOptional(!isOptional)}
              className="form-checkbox"
            />
            <span>Optional catch-all</span>
          </label>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Matched segments:</h4>
          <motion.div
            key={`${selectedPath}-${isOptional}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded p-4"
          >
            <code>
              {isOptional && selectedPath === "/shop"
                ? "{ slug: undefined }"
                : !isOptional && selectedPath === "/shop"
                ? "No match"
                : `{ slug: [${selectedPath
                    .split("/")
                    .slice(2)
                    .map((s) => `'${s}'`)
                    .join(", ")}] }`}
            </code>
          </motion.div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        File: {filePathText}
      </p>
    </div>
  );
}
