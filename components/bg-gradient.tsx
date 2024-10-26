"use client";

export function Background() {
  return (
    <>
      {/* Base background with gradient */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 m-auto w-[35rem] h-[35rem] max-w-full max-h-full bg-green-300/[0.03] rounded-full blur-[100px] animate-float-slower" />
      </div>

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05] -z-10" />
    </>
  );
}
