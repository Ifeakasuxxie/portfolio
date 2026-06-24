import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-16 py-20">
      <p className="font-mono text-xs text-green mb-3">selected work</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-10 max-w-xl">
        Four client builds, four different problems to solve.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
