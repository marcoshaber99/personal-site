"use client";

import React, { Suspense } from "react";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";

const slots = {
  dashboard: ["Overview", "Analytics", "Settings"],
  feed: ["Latest", "Trending", "Following"],
} as const;

type SlotKey = keyof typeof slots;
type SlotState = Record<SlotKey, string>;

const initialState: SlotState = {
  dashboard: "Overview",
  feed: "Latest",
};

function ParallelRoutesDemoContent() {
  const searchParams = useSearchParams();
  const activeSlot: SlotState = Object.fromEntries(
    Object.keys(slots).map((slot) => [
      slot,
      searchParams.get(slot) || initialState[slot as SlotKey],
    ])
  ) as SlotState;

  const setActiveSlot = (slot: SlotKey, page: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(slot, page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="my-8 p-6 border rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Parallel Routes Demo</h3>
      <div className="flex space-x-6 mb-6">
        {Object.entries(slots).map(([slot, pages]) => (
          <SlotSelector
            key={slot}
            slot={slot as SlotKey}
            pages={pages}
            activePage={activeSlot[slot as SlotKey]}
            onSelect={(page) => setActiveSlot(slot as SlotKey, page)}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 h-48">
        {Object.entries(activeSlot).map(([slot, page]) => (
          <ContentPanel key={`${slot}-${page}`} slot={slot} page={page} />
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        URL: /{activeSlot.dashboard.toLowerCase()}/
        {activeSlot.feed.toLowerCase()}
      </p>
    </div>
  );
}

export function ParallelRoutesDemo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ParallelRoutesDemoContent />
    </Suspense>
  );
}

function SlotSelector({
  slot,
  pages,
  activePage,
  onSelect,
}: {
  slot: SlotKey;
  pages: readonly string[];
  activePage: string;
  onSelect: (page: string) => void;
}) {
  return (
    <div className="flex-1">
      <h4 className="text-sm font-medium mb-3 capitalize">{slot}</h4>
      <div className="flex flex-col space-y-2">
        {pages.map((page) => (
          <button
            key={page}
            className={`px-3 py-1.5 text-sm rounded transition-colors ${
              activePage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => onSelect(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

function ContentPanel({ slot, page }: { slot: string; page: string }) {
  return (
    <motion.div
      key={`${slot}-${page}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm"
    >
      <h4 className="text-lg font-medium mb-2 capitalize">{slot}</h4>
      <p>Content for {page}</p>
    </motion.div>
  );
}
