"use client";

import React, { createContext, useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

const ThemeContext = createContext<
  { theme: "light" | "dark"; toggleTheme: () => void } | undefined
>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  return (
    <Button
      onClick={toggleTheme}
      className={`
        ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}
        transition-all duration-300 ease-in-out
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400
        shadow-md hover:shadow-lg
      `}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      <span className="ml-2">Toggle Theme</span>
    </Button>
  );
}

function ThemedContent() {
  const { theme } = useContext(ThemeContext)!;
  return (
    <motion.div
      className={`
        p-6 rounded-lg shadow-lg
        ${
          theme === "light"
            ? "bg-gray-100 text-black"
            : "bg-gray-700 text-white"
        }
        transition-colors duration-300
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-xl font-semibold">Welcome to {theme} mode!</h4>
    </motion.div>
  );
}

export function ContextDemo() {
  return (
    <div className="my-8 p-6 border rounded-lg shadow-sm space-y-6">
      <ThemeProvider>
        <div className="space-y-6">
          <ThemedContent />
          <div className="flex justify-center">
            <ThemedButton />
          </div>
        </div>
      </ThemeProvider>
      <div className="mt-6 space-y-2">
        <p>This illustrates the three main steps of using React Context:</p>
        <ol className="list-decimal list-inside">
          <li>Creating the Context (ThemeContext)</li>
          <li>Providing the Context (ThemeProvider)</li>
          <li>Consuming the Context (ThemedButton and ThemedContent)</li>
        </ol>
      </div>
    </div>
  );
}
