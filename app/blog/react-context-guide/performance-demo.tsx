"use client";

import React, { createContext, useContext, useState, memo } from "react";
import { Button } from "@/components/ui/button";

const CountContext = createContext(0);

const SlowComponent = memo(() => {
  console.log("SlowComponent render");
  useContext(CountContext); // We're consuming the context, but not using its value
  return (
    <div className="p-4 border-2 border-orange-500 rounded">
      I&apos;m a slow component that doesn&apos;t use the count, but I still
      re-render.
    </div>
  );
});

SlowComponent.displayName = "SlowComponent";

const FastComponent = memo(() => {
  console.log("FastComponent render");
  return (
    <div className="p-4 border-2 border-green-500 rounded">
      I&apos;m a fast component that doesn&apos;t use context.
    </div>
  );
});

FastComponent.displayName = "FastComponent";

export function PerformanceDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-8 p-6 border rounded-lg shadow-sm space-y-4">
      <CountContext.Provider value={count}>
        <Button onClick={() => setCount((c) => c + 1)}>
          Increment Count: {count}
        </Button>
        <SlowComponent />
        <FastComponent />
      </CountContext.Provider>
      <p className="text-sm">
        Open your browser&apos;s console to see which components re-render when
        you increment the count. Notice that SlowComponent re-renders even
        though it doesn&apos;t use the count value, while FastComponent
        doesn&apos;t re-render at all.
      </p>
    </div>
  );
}
