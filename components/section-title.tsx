interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
  return (
    <div
      className={`flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 ${className}`}
    >
      <h2
        className="font-pp-regular text-2xl sm:text-[1.75rem] tracking-tight text-neutral-900 dark:text-neutral-100"
      >
        {title}
      </h2>
      <div
        className="h-px flex-grow bg-gradient-to-r from-neutral-200 via-green-500/20 to-neutral-200 dark:from-neutral-800 dark:via-green-400/20 dark:to-neutral-800"
      />
    </div>
  );
}
