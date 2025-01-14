"use client";

import { forwardRef, useRef } from "react";
import { Button } from "@/components/ui/button";

// A simple custom input component
const CustomInput = forwardRef<HTMLInputElement, { placeholder?: string }>(
  (props, ref) => (
    <input
      type="text"
      ref={ref}
      {...props}
      className="px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-background"
    />
  )
);

CustomInput.displayName = "CustomInput";

export function ForwardRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="not-prose flex flex-col sm:flex-row gap-4 items-center justify-center">
      <CustomInput ref={inputRef} placeholder="Custom input component" />
      <Button onClick={focusInput}>Focus Input</Button>
    </div>
  );
}
