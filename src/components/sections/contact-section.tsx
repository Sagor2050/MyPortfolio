import { ExternalLink, Mail, Phone } from "lucide-react";
import type { Profile } from "@/types/portfolio";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";

type ContactSectionProps = {
  profile: Profile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  const github = profile.links.find((link) => link.label === "GitHub");
  const linkedin = profile.links.find((link) => link.label === "LinkedIn");

  return (
    <footer id="contact" className="border-t border-[var(--border)] py-16">
      <Container>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[color:var(--accent-strong)]">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{profile.name}</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--muted)]">{profile.summary}</p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <ButtonLink href={`mailto:${profile.email}`} icon={Mail}>
                Email
              </ButtonLink>
              <ButtonLink href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} icon={Phone} variant="secondary">
                Phone
              </ButtonLink>
              <ButtonLink href={linkedin?.href ?? "#"} icon={ExternalLink} external variant="ghost">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={github?.href ?? "#"} icon={ExternalLink} external variant="ghost">
                GitHub
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
