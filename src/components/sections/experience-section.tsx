import type { Experience } from "@/types/portfolio";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { TimelineCard } from "@/components/ui/timeline-card";

type ExperienceSectionProps = {
  experience: Experience[];
};

const tones = ["teal", "plum", "coral"] as const;

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Research, teaching, and software development with an applied AI focus."
      intro="Recent roles connect RAG backends, classroom support, curriculum data pipelines, and reliable team workflows."
    >
      <div className="grid gap-4">
        {experience.map((item, index) => (
          <Reveal key={`${item.title}-${item.start}`} delay={index * 0.04}>
            <TimelineCard
              title={item.title}
              meta={`${item.start} - ${item.end}`}
              context={`${item.organization}${item.context ? `, ${item.context}` : ""} | ${item.location}`}
              points={item.highlights}
              tone={tones[index % tones.length]}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
