import { workExperience } from "@/data/content";

export default function WorkExp() {
  return (
    <section className="mt-8 w-full">
      <h2 className="heading dark:text-green-400 mb-4">work experience</h2>
      <div className="space-y-4">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="group rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-3 border hover:border-green-200/50 bg-background"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h3 className="text-lg font-semibold mb-1 sm:mb-0">
                {job.title}
              </h3>
              <span className="text-sm text-muted-foreground">
                {job.duration}
              </span>
            </div>
            <p className="text-base font-medium mb-1">{job.company}</p>
            <ul className="list-disc pl-4 space-y-0.5">
              {job.description.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
