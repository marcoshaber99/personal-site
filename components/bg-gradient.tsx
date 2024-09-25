export function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1] -z-10" />
      <div className="fixed inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
    </>
  );
}
