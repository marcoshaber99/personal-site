import { skills } from "@/data/content";
import { SectionTitle } from "./section-title";

export default function Skills() {
  return (
    <section className="relative">
      <SectionTitle title="Toolkit" />
      <dl className="space-y-4">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-y-2 sm:gap-x-6 items-baseline"
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
    </section>
  );
}
