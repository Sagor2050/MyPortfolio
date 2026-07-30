import Image from "next/image";
import { Download, ExternalLink, Mail } from "lucide-react";
import type { Education, Profile } from "@/types/portfolio";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";

type HeroSectionProps = {
  education: Education[];
  profile: Profile;
};

export function HeroSection({ education, profile }: HeroSectionProps) {
  const expectedGraduation = education[0]?.details.find((detail) => detail.startsWith("Expected Graduation"))?.replace("Expected Graduation: ", "");
  const institution = education[0]?.institution.replace("City University of New York (CUNY) - ", "") ?? "Brooklyn College";
  const github = profile.links.find((link) => link.label === "GitHub");
  const linkedin = profile.links.find((link) => link.label === "LinkedIn");

  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--border)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <Reveal>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="teal">{profile.location}</Badge>
                {expectedGraduation ? <Badge tone="amber">Expected graduation {expectedGraduation}</Badge> : null}
              </div>

              <h1 className="mt-8 text-5xl font-semibold leading-[0.94] sm:text-6xl lg:text-7xl">
                {profile.headline}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{profile.summary}</p>

              <div className="mt-9 flex flex-wrap gap-3" aria-label="Primary actions">
                <ButtonLink href={profile.resumeHref} icon={Download} variant="primary">
                  Download resume
                </ButtonLink>
                <ButtonLink href={`mailto:${profile.email}`} icon={Mail} variant="secondary">
                  Email me
                </ButtonLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[var(--muted)]">
                <a className="inline-flex items-center gap-2 hover:text-[var(--foreground)]" href={linkedin?.href ?? "#"} rel="noreferrer" target="_blank">
                  <ExternalLink aria-hidden="true" className="size-4" />
                  LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 hover:text-[var(--foreground)]" href={github?.href ?? "#"} rel="noreferrer" target="_blank">
                  <ExternalLink aria-hidden="true" className="size-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-md lg:mr-0">
              <div className="absolute -left-4 top-8 h-48 w-2 rounded-md bg-[var(--coral)]" />
              <div className="absolute -right-4 bottom-10 h-36 w-2 rounded-md bg-[var(--plum)]" />
              <div className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={profile.portraitSrc}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 86vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-[1fr_auto] items-end gap-4 border-t border-[var(--border)] p-4">
                  <div>
                    <p className="font-semibold">{profile.name}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">Computer Science, {institution}</p>
                  </div>
                  <Badge tone="plum">AI + full-stack</Badge>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
