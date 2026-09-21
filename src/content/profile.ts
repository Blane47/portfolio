/**
 * Single source of truth for every word on the site.
 * Components read from here — edit this file, not the components.
 *
 * Anything marked TODO is a placeholder waiting on the CV.
 */

export type Social = { label: string; href: string; icon: "github" | "linkedin" | "mail" | "x" };

export type SkillGroup = {
  name: string;
  blurb: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image?: string;  // put screenshots in /public/projects/
  href?: string;   // live site
  repo?: string;   // source
  featured?: boolean;
};

export type TimelineEntry = {
  kind: "work" | "education";
  role: string;
  org: string;
  location?: string;
  period: string;
  type?: string;            // Internship, Full-Time, Freelance…
  summary: string;
  highlights?: string[];    // revealed when the card is expanded
  impact?: string[];
};

export const profile = {
  name: "TODO: Your Name",
  shortName: "TODO",
  role: "Software Engineering Student",
  eyebrow: "I am a",
  /** Headline renders as: plain — accented — plain. */
  headline: {
    lead: "Building software that",
    accent: "solves real problems",
    trail: "for real people.",
  },
  bio:
    "TODO: two or three sentences. What you study, what you build, the stack you " +
    "reach for, and what you are looking for next (internship, graduate role, " +
    "freelance). Keep it concrete — name the technologies and the kind of systems " +
    "you have actually shipped.",
  location: "Buea, South West, Cameroon",
  email: "TODO@example.com",
  resumeUrl: "/resume.pdf", // drop the PDF at public/resume.pdf
  avatar: "/avatar.jpg",    // drop a headshot at public/avatar.jpg
  available: true,
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/TODO", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/TODO", icon: "linkedin" },
  { label: "Email", href: "mailto:TODO@example.com", icon: "mail" },
];

/** Small, honest numbers beat inflated ones on a student portfolio. */
export const stats: { value: string; label: string }[] = [
  { value: "TODO", label: "Projects shipped" },
  { value: "TODO", label: "Years writing code" },
];

export const about = {
  heading: "About",
  lead: "TODO: one punchy sentence that sums you up.",
  paragraphs: [
    "TODO: where you study and what drew you to software.",
    "TODO: the kind of work you gravitate to, and how you work with other people.",
  ],
  /** A short personal note gives the page a voice. Keep or delete. */
  note: "TODO: something true and specific — what you are learning right now.",
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    blurb: "The languages I reach for day to day.",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    name: "Frontend",
    blurb: "Building interfaces that stay fast and readable as they grow.",
    items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    name: "Backend & Data",
    blurb: "APIs, data modelling, and the layer underneath the UI.",
    items: ["Node.js", "PostgreSQL", "MySQL", "REST APIs", "Prisma"],
  },
  {
    name: "Platform & Tooling",
    blurb: "Getting work off my machine and in front of people.",
    items: ["Git", "Vercel", "Linux", "Docker", "AWS"],
  },
];

export const projects: Project[] = [
  {
    slug: "hospicare-emr",
    title: "HospiCare EMR",
    tagline: "Electronic medical records and pharmacy management for a hospital.",
    description:
      "TODO: what problem it solves, who uses it, what you built. Mention the " +
      "modules (records, pharmacy, prescriptions) and anything measurable.",
    stack: ["Next.js", "TypeScript", "Neon Postgres", "Vercel"],
    image: "/projects/hospicare.png",
    href: "https://hospicare-emr.vercel.app",
    featured: true,
  },
  {
    slug: "todo-project-two",
    title: "TODO: Project two",
    tagline: "TODO: one line on what it is.",
    description: "TODO: the problem, your role, the outcome.",
    stack: ["TODO"],
    image: "/projects/todo-two.png",
  },
  {
    slug: "todo-project-three",
    title: "TODO: Project three",
    tagline: "TODO: one line on what it is.",
    description: "TODO: the problem, your role, the outcome.",
    stack: ["TODO"],
    image: "/projects/todo-three.png",
  },
];

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    role: "TODO: Intern role title",
    org: "Zinger Systems",
    location: "Buea, Cameroon",
    period: "TODO: Month Year – Month Year",
    type: "Internship",
    summary: "TODO: one or two sentences on what the team did and your part in it.",
    highlights: [
      "TODO: a thing you built or shipped",
      "TODO: a technology you picked up on the job",
    ],
    impact: ["TODO: an outcome, ideally with a number"],
  },
  {
    kind: "education",
    role: "TODO: Degree programme",
    org: "College of Technology, University of Buea",
    location: "Buea, Cameroon",
    period: "TODO: Year – Year",
    summary: "TODO: focus areas, notable coursework, or final-year project.",
  },
  {
    kind: "education",
    role: "GCE Advanced Level",
    org: "TODO: School name",
    period: "TODO: Year",
    summary: "TODO: subjects and grades, if you want them here.",
  },
];

export const contact = {
  heading: "Get in touch",
  lead:
    "TODO: say what you are open to — internships, junior roles, freelance — " +
    "and how fast you reply.",
};

export const siteMeta = {
  title: `${profile.name} — ${profile.role}`,
  description:
    "TODO: one sentence for Google and link previews. Include your name, your " +
    "role, and your main technologies.",
  url: "https://TODO.vercel.app",
};
