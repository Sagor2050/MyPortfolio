import { fallbackPortfolioContent } from "@/content/portfolio";
import type {
  Education,
  Experience,
  Honor,
  PortfolioContent,
  Profile,
  Project,
  SkillGroup
} from "@/types/portfolio";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { portfolioQuery } from "@/sanity/lib/queries";

type SanityPortfolioContent = Partial<{
  education: Education[];
  experience: Experience[];
  honors: Honor[];
  profile: Profile;
  projects: Project[];
  skillGroups: SkillGroup[];
}>;

function withFallbackArray<T>(value: T[] | undefined, fallback: T[]) {
  return Array.isArray(value) && value.length > 0 ? value : fallback;
}

function withFallbackProfile(value: Profile | undefined) {
  if (!value) {
    return fallbackPortfolioContent.profile;
  }

  return {
    ...fallbackPortfolioContent.profile,
    ...value,
    links: withFallbackArray(value.links, fallbackPortfolioContent.profile.links)
  };
}

export async function getPortfolioContent(): Promise<PortfolioContent> {
  if (!isSanityConfigured) {
    return fallbackPortfolioContent;
  }

  try {
    const content = await client.fetch<SanityPortfolioContent>(
      portfolioQuery,
      {},
      {
        next: {
          revalidate: 60
        }
      }
    );

    return {
      education: withFallbackArray(content.education, fallbackPortfolioContent.education),
      experience: withFallbackArray(content.experience, fallbackPortfolioContent.experience),
      honors: withFallbackArray(content.honors, fallbackPortfolioContent.honors),
      navigation: fallbackPortfolioContent.navigation,
      profile: withFallbackProfile(content.profile),
      projects: withFallbackArray(content.projects, fallbackPortfolioContent.projects),
      skillGroups: withFallbackArray(content.skillGroups, fallbackPortfolioContent.skillGroups)
    };
  } catch {
    return fallbackPortfolioContent;
  }
}
