"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const slots = {
  dashboard: ["Overview", "Analytics", "Settings"],
  feed: ["Latest", "Trending", "Following"],
} as const;

type SlotKey = keyof typeof slots;
type SlotState = { [K in SlotKey]: (typeof slots)[K][number] };

export function ParallelRoutesDemo() {
  const [activeSlot, setActiveSlot] = useState<SlotState>({
    dashboard: "Overview",
    feed: "Latest",
  });

  return (
    <div className="my-8 p-4 border-2 rounded-lg bg-gray-50 dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-4">Parallel Routes Demo</h3>
      <div className="flex space-x-4 mb-4">
        {(Object.entries(slots) as [SlotKey, readonly string[]][]).map(
          ([slot, pages]) => (
            <div key={slot} className="flex-1">
              <h4 className="text-sm font-medium mb-2 capitalize">{slot}</h4>
              <div className="flex flex-col space-y-2">
                {pages.map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 text-sm rounded ${
                      activeSlot[slot] === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                    onClick={() =>
                      setActiveSlot({ ...activeSlot, [slot]: page })
                    }
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 h-40">
        {(Object.entries(activeSlot) as [SlotKey, string][]).map(
          ([slot, page]) => (
            <motion.div
              key={`${slot}-${page}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded p-4"
            >
              <h4 className="text-lg font-medium mb-2 capitalize">{slot}</h4>
              <p>Content for {page}</p>
            </motion.div>
          )
        )}
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        URL: /{activeSlot.dashboard.toLowerCase()}/
        {activeSlot.feed.toLowerCase()}
      </p>
    </div>
  );
}
