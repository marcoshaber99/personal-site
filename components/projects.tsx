import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section className="mt-11 w-full">
      <h2 className="heading dark:text-green-400 mb-3 ">projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group mt-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-green-200/30"
          >
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {project.description}
            </p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>{project.category}</span>
              <div className="flex-grow h-px bg-border mx-2"></div>
              <span>{project.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
