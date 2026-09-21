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

export type Certificate = {
  name: string;
  issuer: string;
  date: string;          // "Mar 2026" or "2025"
  credentialId?: string;
  url?: string;          // verification link
  image?: string;        // scan/screenshot in /public/certificates/
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
  result?: string;          // e.g. "30 / 33 points"
  certificateUrl?: string;  // link to view or download the certificate
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
    name: "Languages & markup",
    blurb: "What I write day to day.",
    items: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Frontend",
    blurb: "Building layouts that hold up across screen sizes.",
    items: ["CSS Grid", "Flexbox", "Responsive design", "Bootstrap", "DOM scripting"],
  },
  {
    name: "Backend",
    blurb: "The server layer underneath the pages.",
    items: ["Node.js", "Express", "EJS", "REST APIs", "Middleware"],
  },
  {
    name: "Tooling",
    blurb: "How I build, test and ship.",
    items: ["Git", "npm", "Postman", "Command line"],
  },
  // TODO: add anything else you have genuinely used — React, Next.js,
  // TypeScript, PostgreSQL, Python. I removed my earlier guesses rather
  // than list skills you have not confirmed.
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
    role: "Full Stack Web Development Intern",
    org: "Techarcgram",
    location: "Buea, Cameroon",
    period: "2025",
    type: "Internship",
    summary:
      "Completed a structured full-stack web development programme, working " +
      "through the front end, the server layer and REST APIs, and building a " +
      "series of small applications at each stage.",
    highlights: [
      "Built responsive layouts with CSS Grid, Flexbox, positioning and media queries",
      "Wrote server-side JavaScript with Node.js and Express, including routing and middleware",
      "Rendered dynamic pages with EJS templates and partials",
      "Consumed and tested REST APIs with Axios and Postman, including authenticated requests",
      "Built a blog application with full create, edit and delete flows",
      "Worked day to day in Git, the command line and npm",
    ],
    // TODO: if you shipped anything for a real Techarcgram client or an
    // internal tool, add it here — that carries far more weight than
    // coursework. See the note about this in our chat.
  },
  {
    kind: "education",
    role: "Bachelor of Technology",
    org: "College of Technology, University of Buea",
    location: "Buea, Cameroon",
    period: "TODO: Year – present",
    type: "In progress",
    summary:
      "TODO: your field of study and what you have focused on — key courses, " +
      "and your final-year project if you have one.",
  },
  {
    kind: "education",
    role: "GCE Advanced Level",
    org: "Sacred Heart College, Mankon",
    location: "Bamenda, Cameroon",
    period: "2022 – 2023",
    result: "24 / 25 points",
    summary: "TODO: your A Level subjects.",
    // certificateUrl: "TODO: link to the A Level certificate PDF",
  },
  {
    kind: "education",
    role: "GCE Ordinary Level",
    org: "Sacred Heart College, Mankon",
    location: "Bamenda, Cameroon",
    period: "2017 – 2021",
    result: "30 / 33 points",
    summary: "TODO: your O Level subjects, if you want them listed.",
    // certificateUrl: "TODO: link to the O Level certificate",
  },
];

/**
 * Certifications and courses. Renders only when this array has entries,
 * so it can stay empty until there is something worth listing.
 */
export const certificates: Certificate[] = [
  // {
  //   name: "AWS Certified Cloud Practitioner",
  //   issuer: "Amazon Web Services",
  //   date: "TODO: Month Year",
  //   credentialId: "TODO",
  //   url: "https://…",
  //   image: "/certificates/aws-ccp.png",
  // },
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
