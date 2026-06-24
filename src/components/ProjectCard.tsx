import { motion } from "framer-motion";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-green-light bg-white rounded-lg overflow-hidden flex flex-col hover:border-green transition"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} — ${project.category}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display font-semibold text-lg text-ink">
            {project.name}
          </h3>
          <span className="text-xs text-muted font-mono">{project.category}</span>
        </div>

        <p className="text-sm text-ink/70 leading-relaxed">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] bg-green-light text-green px-2 py-1 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-2 pt-3 border-t border-green-light/60">
          <span className="text-[11px] font-mono text-green">
            {project.statusLine}
          </span>
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-ink hover:text-green transition"
              >
                Code ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-ink hover:text-green transition"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
