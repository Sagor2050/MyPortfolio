import Image from "next/image";
import {
  education,
  experience,
  honors,
  navigation,
  profile,
  projects,
  skillGroups
} from "@/content/portfolio";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
      <header className="sticky top-0 z-10 -mx-6 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] px-6 py-4 backdrop-blur sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 font-semibold">
            <span className="grid size-10 place-items-center rounded-full bg-[var(--surface-strong)] text-sm text-[var(--background)]">
              {profile.initials}
            </span>
            <span>{profile.displayName}</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 text-sm text-[var(--muted)] md:flex">
            {navigation.map((item) => (
              <a key={item.href} className="transition hover:text-[var(--foreground)]" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            {profile.location}
          </p>
          <h1 className="text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{profile.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-[var(--surface-strong)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-85"
              href={profile.resumeHref}
            >
              Resume
            </a>
            <a
              className="rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--foreground)]"
              href={`mailto:${profile.email}`}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/10">
          <Image
            src={profile.portraitSrc}
            alt={profile.name}
            fill
            priority
            sizes="(min-width: 768px) 380px, 85vw"
            className="object-cover"
          />
        </div>
      </section>

      <Section id="experience" eyebrow="Experience" title="Research, teaching, and software development">
        <div className="grid gap-4">
          {experience.map((item) => (
            <TimelineItem
              key={`${item.title}-${item.start}`}
              title={item.title}
              meta={`${item.organization} | ${item.location} | ${item.start} - ${item.end}`}
              context={item.context}
              points={item.highlights}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Selected work from the resume">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[var(--muted)]">
                  {project.start} - {project.end}
                </p>
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-[var(--muted)]">{project.description}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Academic foundation">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          {education.map((item) => (
            <TimelineItem
              key={item.institution}
              title={item.degree}
              meta={`${item.institution} | ${item.location} | ${item.start} - ${item.end}`}
              context={item.gpa ? `GPA: ${item.gpa}` : undefined}
              points={item.details}
            />
          ))}
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <div className="mt-5 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-sm font-medium text-[var(--muted)]">{group.label}</p>
                  <p className="mt-2 leading-7">{group.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="honors" eyebrow="Honors" title="Research fellowships">
        <div className="grid gap-4 md:grid-cols-2">
          {honors.map((honor) => (
            <TimelineItem
              key={honor.title}
              title={honor.title}
              meta={`${honor.organization} | ${honor.start} - ${honor.end}`}
              points={honor.details}
            />
          ))}
        </div>
      </Section>

      <footer id="contact" className="mt-16 border-t border-[var(--border)] py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">{profile.email}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <a href={`mailto:${profile.email}`} className="hover:text-[var(--foreground)]">
              Email
            </a>
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} className="hover:text-[var(--foreground)]">
              Phone
            </a>
            {profile.links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[var(--foreground)]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: Readonly<{
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[var(--border)] py-14">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function TimelineItem({
  title,
  meta,
  context,
  points
}: Readonly<{
  title: string;
  meta: string;
  context?: string;
  points: string[];
}>) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <p className="text-sm text-[var(--muted)]">{meta}</p>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      {context ? <p className="mt-2 text-sm text-[var(--muted)]">{context}</p> : null}
      <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
