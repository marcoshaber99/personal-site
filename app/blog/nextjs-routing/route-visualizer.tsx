"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const routes = [
  { path: "/", component: "app/page.tsx" },
  { path: "/about", component: "app/about/page.tsx" },
  { path: "/blog", component: "app/blog/page.tsx" },
  { path: "/blog/[slug]", component: "app/blog/[slug]/page.tsx" },
];

export function RouteVisualizer() {
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);

  return (
    <div className="my-8 p-4 border-2 rounded-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h4 className="text-sm font-medium italic mb-2">URL Structure</h4>
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.path}>
                <button
                  className={`w-full text-left p-2 rounded ${
                    selectedRoute === route
                      ? "bg-green-200 dark:bg-green-800/50"
                      : "hover:bg-green-100 dark:hover:bg-green-700/20"
                  }`}
                  onClick={() => setSelectedRoute(route)}
                >
                  {route.path}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium italic mb-2">File Structure</h4>
          <motion.div
            key={selectedRoute.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 bg-green-100 dark:bg-green-900/30 border rounded dark:border-green-300 border-green-600"
          >
            <code>{selectedRoute.component}</code>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
