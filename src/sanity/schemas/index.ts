import { educationType } from "@/sanity/schemas/documents/education";
import { experienceType } from "@/sanity/schemas/documents/experience";
import { honorType } from "@/sanity/schemas/documents/honor";
import { profileType } from "@/sanity/schemas/documents/profile";
import { projectType } from "@/sanity/schemas/documents/project";
import { siteSettingsType } from "@/sanity/schemas/documents/site-settings";
import { skillGroupType } from "@/sanity/schemas/documents/skill-group";
import { linkType } from "@/sanity/schemas/objects/link";

export const schemaTypes = [
  linkType,
  profileType,
  experienceType,
  educationType,
  projectType,
  honorType,
  skillGroupType,
  siteSettingsType
];
