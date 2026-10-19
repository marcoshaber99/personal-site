import { skills } from "@/data/content";
import { Section } from "./section";

export default function Skills() {
  return (
    <Section id="toolkit" label="Toolkit">
      <dl className="-mt-4 divide-y divide-border">
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="grid gap-y-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-x-6"
          >
            <dt className="text-sm font-medium text-foreground">{category}</dt>
            <dd className="text-sm leading-6 text-muted-foreground">
              {list.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
