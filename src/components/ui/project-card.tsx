import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  project: Project;
  tone?: "teal" | "amber" | "plum" | "coral";
};

export function ProjectCard({ project, tone = "teal" }: ProjectCardProps) {
  return (
    <article className="group flex min-h-full flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm shadow-black/[0.03] transition hover:-translate-y-0.5 hover:border-[var(--foreground)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--muted)]">
            {project.start} - {project.end}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">{project.name}</h3>
          <p className="mt-2 text-sm font-medium text-[var(--accent-strong)]">{project.description}</p>
        </div>
        <span aria-hidden="true" className="mt-1 size-3 shrink-0 rounded-sm bg-[var(--accent)] transition group-hover:bg-[var(--coral)]" />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} tone={tone}>
            {tech}
          </Badge>
        ))}
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--muted)]">
        {project.highlights.map((highlight) => (
          <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-[var(--accent)]" key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
