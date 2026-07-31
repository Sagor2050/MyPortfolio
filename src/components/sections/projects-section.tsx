import type { Project } from "@/types/portfolio";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";

type ProjectsSectionProps = {
  projects: Project[];
};

const tones = ["teal", "amber", "plum", "coral"] as const;

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Learning products and student-centered software from the current resume."
      intro="Current projects emphasize adaptive learning, student marketplaces, and responsive full-stack interfaces."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.05}>
            <ProjectCard project={project} tone={tones[index % tones.length]} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
