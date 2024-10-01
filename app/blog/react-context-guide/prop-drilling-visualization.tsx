"use client";

import React from "react";
import { motion } from "framer-motion";

export function PropDrillingVisualization() {
  return (
    <div className="my-8 p-6 border rounded-lg shadow-sm border-green-300/20 bg-grey-50">
      <div className="flex justify-around ">
        <PropDrilling />
        <ContextFlow />
      </div>
    </div>
  );
}

function PropDrilling() {
  return (
    <div className="text-center">
      <h4 className="font-medium mb-2">Prop Drilling</h4>
      <div className="flex flex-col items-center">
        <Component label="App" />
        <Arrow />
        <Component label="Header" />
        <Arrow />
        <Component label="Navigation" />
        <Arrow />
        <Component label="UserInfo" highlight />
      </div>
    </div>
  );
}

function ContextFlow() {
  return (
    <div className="text-center">
      <h4 className="font-medium mb-2">Using Context</h4>
      <div className="flex flex-col items-center">
        <Component label="App (Provider)" />
        <motion.div
          className="h-32 w-1 bg-blue-500"
          initial={{ height: 0 }}
          animate={{ height: 128 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <Component label="UserInfo (Consumer)" highlight />
      </div>
    </div>
  );
}

function Component({
  label,
  highlight = false,
}: {
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-2 border rounded ${
        highlight
          ? "bg-green-100 dark:bg-green-900 border-green-500"
          : "border-gray-300"
      }`}
    >
      {label}
    </div>
  );
}

function Arrow() {
  return <div className="h-8 w-1 bg-gray-300 my-1" />;
}
