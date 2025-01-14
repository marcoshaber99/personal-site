"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function RefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <div className="not-prose flex flex-col sm:flex-row gap-4 items-center justify-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Try focusing me"
          className="px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-background"
        />
        <Button onClick={focusInput}>Focus Input</Button>
      </div>
    </div>
  );
}
