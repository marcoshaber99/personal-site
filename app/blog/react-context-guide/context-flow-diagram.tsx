"use client";

import React from "react";
import { motion } from "motion/react";

export function ContextFlowDiagram() {
  return (
    <div className="my-8 p-6 border rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Context Data Flow</h3>
      <div className="flex justify-center items-center h-64">
        <Provider />
        <motion.div
          className="h-1 bg-blue-500 flex-grow mx-4"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
        <Consumer />
      </div>
    </div>
  );
}

function Provider() {
  return (
    <motion.div
      className="p-4 border-2 border-blue-500 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="font-medium">Context Provider</h4>
      <p className="text-sm">Provides data</p>
    </motion.div>
  );
}

function Consumer() {
  return (
    <motion.div
      className="p-4 border-2 border-green-500 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h4 className="font-medium">Context Consumer</h4>
      <p className="text-sm">Uses data</p>
    </motion.div>
  );
}
