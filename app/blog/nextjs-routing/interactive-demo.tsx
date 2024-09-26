"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Home", "Dashboard", "Settings"];

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="my-8 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-4">Parallel Routes Demo</h3>
      <div className="flex mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative h-40 bg-white dark:bg-gray-900 rounded p-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 p-4"
        >
          <h4 className="text-lg font-medium mb-2">{activeTab}</h4>
          <p>This is the content for the {activeTab} tab.</p>
        </motion.div>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        URL: /dashboard/{activeTab.toLowerCase()}
      </p>
    </div>
  );
}
