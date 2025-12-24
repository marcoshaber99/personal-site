export function Background() {
  return (
    <>
      {/* Base background with gradient */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div
          className="absolute inset-0 m-auto w-[25rem] h-[25rem] max-w-full max-h-full bg-green-300/[0.03] rounded-full blur-[60px] animate-float-slower will-change-transform"
          style={{ transform: "translateZ(0)" }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05] -z-10" />
    </>
  );
}
