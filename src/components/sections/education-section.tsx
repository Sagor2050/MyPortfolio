import type { Education, SkillGroup } from "@/types/portfolio";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { TimelineCard } from "@/components/ui/timeline-card";

type EducationSectionProps = {
  education: Education[];
  skillGroups: SkillGroup[];
};

const skillTones = ["teal", "amber", "plum"] as const;

export function EducationSection({ education, skillGroups }: EducationSectionProps) {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="A computer science foundation connected to product engineering."
      intro="Brooklyn College coursework spans systems, databases, software engineering, and core CS foundations."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
        <div className="grid gap-4">
          {education.map((item, index) => (
            <Reveal key={item.institution} delay={index * 0.04}>
              <TimelineCard
                title={item.degree}
                meta={`${item.start} - ${item.end}`}
                context={`${item.institution} | ${item.location}${item.gpa ? ` | GPA: ${item.gpa}` : ""}`}
                points={item.details}
                tone="amber"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm shadow-black/[0.03]">
            <h3 className="text-lg font-semibold">Technical Skills</h3>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group, index) => (
                <div key={group.label}>
                  <p className="text-sm font-semibold text-[color:var(--muted)]">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} tone={skillTones[index % skillTones.length]}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
