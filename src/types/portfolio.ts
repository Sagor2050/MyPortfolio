export type Link = {
  label: string;
  href: string;
};

export type Education = {
  institution: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  gpa?: string;
  details: string[];
};

export type Experience = {
  title: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  context?: string;
  highlights: string[];
};

export type Honor = {
  title: string;
  organization: string;
  start: string;
  end: string;
  details: string[];
};

export type Project = {
  name: string;
  description: string;
  start: string;
  end: string;
  technologies: string[];
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Profile = {
  name: string;
  displayName: string;
  initials: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  resumeHref: string;
  portraitSrc: string;
  links: Link[];
};
