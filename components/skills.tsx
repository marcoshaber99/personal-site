import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section className="mt-8 w-full">
      <h2 className="heading dark:text-green-400 mb-4">skills</h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="group">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-secondary text-secondary-foreground px-2 py-1 rounded-md cursor-pointer border hover:border-green-400 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
