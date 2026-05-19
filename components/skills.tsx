import { skills } from "@/data/content";
import { SectionTitle } from "./section-title";

export default function Skills() {
  return (
    <section className="relative">
      <SectionTitle title="Toolkit" />
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 bg-background/40">
        <dl className="divide-y divide-neutral-200/70 dark:divide-neutral-800/70">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-y-1 sm:gap-x-6 items-baseline py-3 first:pt-0 last:pb-0"
            >
              <dt className="text-base font-medium text-foreground">
                {category}
              </dt>
              <dd className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {skillList.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
