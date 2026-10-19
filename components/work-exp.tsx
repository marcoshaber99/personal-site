import { workExperience } from "@/data/content";
import { Section } from "./section";

export default function WorkExp() {
  return (
    <Section id="experience" label="Experience">
      <ul className="-mt-5 divide-y divide-border">
        {workExperience.map((job) => (
          <li key={job.title} className="py-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-medium leading-6 text-foreground">
                {job.title}
              </h3>
              <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                {job.duration}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">{job.company}</p>
            <div className="mt-3 space-y-2 text-[15px] leading-7 text-muted-foreground">
              {job.description.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
