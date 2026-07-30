import {
  education,
  experience,
  honors,
  navigation,
  profile,
  projects,
  skillGroups
} from "@/content/portfolio";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HonorsSection } from "@/components/sections/honors-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return (
    <>
      <SiteHeader profile={profile} navigation={navigation} />
      <main id="main">
        <HeroSection
          education={education}
          experience={experience}
          profile={profile}
          projects={projects}
          skillGroups={skillGroups}
        />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <EducationSection education={education} skillGroups={skillGroups} />
        <HonorsSection honors={honors} />
      </main>
      <ContactSection profile={profile} />
    </>
  );
}
