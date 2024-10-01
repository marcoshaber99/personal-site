"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Create Context",
    code: "const ThemeContext = React.createContext('light');",
  },
  {
    title: "Provide Context",
    code: `function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}`,
  },
  {
    title: "Consume Context",
    code: `function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>I'm {theme} themed!</button>;
}`,
  },
];

export function InteractiveCodeBlock() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="my-8 p-6 border rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">
        Interactive Context Example
      </h3>
      <div className="mb-4">
        <h4 className="font-medium">{steps[currentStep].title}</h4>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{steps[currentStep].code}</code>
        </pre>
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
          }
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
