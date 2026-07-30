import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-[var(--border)] py-16 sm:py-20", className)}>
      <Container>
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[0.44fr_1fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-[var(--accent-strong)]">{eyebrow}</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
              {intro ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">{intro}</p> : null}
            </div>
          </div>
        </Reveal>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
