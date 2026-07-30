import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HonorsSection } from "@/components/sections/honors-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { getPortfolioContent } from "@/sanity/lib/portfolio";

export default async function Home() {
  const { education, experience, honors, navigation, profile, projects, skillGroups } = await getPortfolioContent();

  return (
    <>
      <SiteHeader profile={profile} navigation={navigation} />
      <main id="main">
        <HeroSection
          education={education}
          profile={profile}
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
