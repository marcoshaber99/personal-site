export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-label`}>
      <h2
        id={`${id}-label`}
        className="font-display text-2xl leading-none tracking-tight text-foreground"
      >
        {label}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
