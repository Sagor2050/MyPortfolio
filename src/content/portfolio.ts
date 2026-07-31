import type {
  Education,
  Experience,
  Honor,
  Profile,
  PortfolioContent,
  Project,
  SkillGroup
} from "@/types/portfolio";

export const profile: Profile = {
  name: "Sagor Sutra Dhor",
  displayName: "Sagor S. Dhor",
  initials: "SD",
  headline:
    "Computer Science student building AI systems, learning platforms, and full-stack products.",
  summary:
    "CUNY Brooklyn College computer science student with experience across applied AI research, teaching, FastAPI backends, Next.js products, PostgreSQL, Firebase, and AWS.",
  location: "Brooklyn, NY",
  email: "sagorsd975@gmail.com",
  phone: "+1 (718) 496-5287",
  resumeHref: "/SagorS.Dhor_Resume.pdf",
  portraitSrc: "/images/profile.jpeg",
  links: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/sdsagor"
    },
    {
      label: "GitHub",
      href: "https://github.com/Sagor2050"
    }
  ]
};

export const education: Education[] = [
  {
    institution: "City University of New York (CUNY) - Brooklyn College",
    degree: "Bachelor of Science in Computer Science",
    location: "Brooklyn, NY",
    start: "Aug. 2024",
    end: "Present",
    gpa: "3.61",
    details: [
      "Expected Graduation: May 2027",
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Architecture, Operating Systems, Software Engineering, Database Systems"
    ]
  }
];

export const experience: Experience[] = [
  {
    title: "Undergraduate Research Assistant (Software Development)",
    organization: "CUNY-MASSLAB",
    context: "Prof. H. Chen & Prof. L. Goetz, Brooklyn College",
    location: "Brooklyn, NY",
    start: "Feb. 2026",
    end: "Present",
    highlights: [
      "Built a course-grounded AI tutoring backend in Python and FastAPI, supporting session tracking, instructor review, and learner feedback workflows.",
      "Developed a retrieval-augmented generation pipeline over syllabus and course materials using PostgreSQL/pgvector to generate cited, context-aware academic responses.",
      "Integrated Gemini and Ollama LLM workflows with privacy-safe logging, conversation state handling, and review mechanisms to improve response reliability."
    ]
  },
  {
    title: "Teaching Assistant - CISC 3130: Data Structures",
    organization: "Brooklyn College - Computer Science Department",
    location: "Brooklyn, NY",
    start: "Jan. 2026",
    end: "Present",
    highlights: [
      "Support students in data structures, asymptotic analysis, memory management, and implementation tradeoffs.",
      "Lead lab sessions and provide feedback on correctness, code quality, and efficiency for 40+ students."
    ]
  },
  {
    title: "Artificial Intelligence Research Assistant",
    organization: "Software Vulnerability and Defect Detection Lab",
    context: "Prof. H. Chen",
    location: "Brooklyn, NY",
    start: "Jul. 2025",
    end: "Mar. 2026",
    highlights: [
      "Architected Python parsers to convert 200+ pages of curriculum data into structured JSON, reducing manual effort and achieving 99% output accuracy.",
      "Set up CI/CD workflows via GitHub Actions to automate testing, linting, and release steps for reliable team iteration.",
      "Mapped 500+ knowledge-CWE pairs across 19 CS2023 Knowledge Areas using zero-shot and few-shot prompting for a 2026 research submission."
    ]
  }
];

export const honors: Honor[] = [
  {
    title: "Tow Mentoring and Research Program Fellow",
    organization: "Brooklyn College",
    start: "Sep. 2026",
    end: "Dec. 2026",
    details: [
      "Selected as a mentor-mentee pair alongside Department Chair Prof. Hui Chen.",
      "Selected to conduct independent computer science research under faculty mentorship and present findings at the Tow conference."
    ]
  },
  {
    title: "Tow Summer Undergraduate Research Program (URP) Fellow",
    organization: "CUNY Brooklyn College",
    start: "Jun. 2026",
    end: "Aug. 2026",
    details: [
      "Selected for an 8-week research fellowship investigating LLM-assisted mapping of CS2023 curriculum topics to CWE software weakness categories and presented findings at the Summer Showcase."
    ]
  }
];

export const projects: Project[] = [
  {
    name: "AlgoDeck",
    description: "Adaptive learning platform",
    start: "Feb. 2026",
    end: "Present",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    highlights: [
      "Built an adaptive CS learning platform with 1,000+ questions using spaced repetition and PostgreSQL-backed progress tracking.",
      "Developed a modular Next.js frontend supporting sub-second page loads and real-time learning analytics.",
      "Deployed on AWS EC2 and S3 with automated content delivery for 1,000+ study resources."
    ]
  },
  {
    name: "BCStudentMart",
    description: "P2P Marketplace",
    start: "Feb. 2025",
    end: "Present",
    technologies: ["React.js", "Firebase", "Vite", "Tailwind"],
    highlights: [
      "Built a peer-to-peer student marketplace with support for 100+ item listings and streamlined browsing workflows.",
      "Integrated Firebase Authentication and real-time messaging to enable secure user communication.",
      "Developed responsive React interfaces optimized for mobile and desktop users."
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"]
  },
  {
    label: "Frameworks & Tools",
    items: ["Next.js", "React.js", "Node.js", "Express.js", "Git", "GitHub", "Vite", "Tailwind CSS"]
  },
  {
    label: "Databases & Cloud",
    items: ["PostgreSQL", "Firebase (Firestore)", "AWS (EC2, S3)", "GitHub Actions"]
  }
];

export const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Honors", href: "#honors" },
  { label: "Contact", href: "#contact" }
] as const;

export const fallbackPortfolioContent: PortfolioContent = {
  education,
  experience,
  honors,
  navigation,
  profile,
  projects,
  skillGroups
};
