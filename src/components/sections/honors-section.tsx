import type { Honor } from "@/types/portfolio";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { TimelineCard } from "@/components/ui/timeline-card";

type HonorsSectionProps = {
  honors: Honor[];
};

export function HonorsSection({ honors }: HonorsSectionProps) {
  return (
    <Section
      id="honors"
      eyebrow="Honors"
      title="Faculty-supported research momentum."
      intro="Fellowships support independent computer science research under faculty mentorship."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {honors.map((honor, index) => (
          <Reveal key={honor.title} delay={index * 0.05}>
            <TimelineCard
              title={honor.title}
              meta={`${honor.start} - ${honor.end}`}
              context={honor.organization}
              points={honor.details}
              tone={index % 2 === 0 ? "plum" : "coral"}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
