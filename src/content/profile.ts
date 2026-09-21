/**
 * Single source of truth for every word on the site.
 * Components read from here — edit this file, not the components.
 *
 * Anything marked TODO is a placeholder waiting on the CV.
 */

export type Social = { label: string; href: string; icon: "github" | "linkedin" | "mail" | "x" };

export type Skill = {
  name: string;
  /** File in /public/logos, without the .svg */
  icon?: string;
  /** Near-black logo that needs inverting in dark mode. */
  mono?: boolean;
};

export type SkillGroup = {
  name: string;
  blurb: string;
  items: Skill[];
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
  name: "Suh Blane Sanyang",
  shortName: "Suh Blane",
  role: "Software Engineering Student",
  eyebrow: "I am a",
  /** Headline renders as: plain — accented — plain. */
  headline: {
    lead: "Building software that",
    accent: "solves real problems",
    trail: "for real people.",
  },
  bio:
    "Final-year Software Engineering student at the University of Buea, " +
    "building full-stack web applications for problems I can see around me — " +
    "a hospital records system, a municipal waste platform, a serverless " +
    "expense tracker on AWS. I work mostly in TypeScript and JavaScript with " +
    "Next.js, React and Node, and I am looking for an internship or graduate " +
    "role where I can keep shipping real systems.",
  location: "Buea, South West, Cameroon",
  email: "suhblane@gmail.com",
  resumeUrl: "/resume.pdf", // TODO: drop your real CV at public/resume.pdf
  avatar: "/suh-blane.jpg",
  available: true,
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Blane47", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/suh-blane-639090284/", icon: "linkedin" },
  { label: "Email", href: "mailto:suhblane@gmail.com", icon: "mail" },
];

/** Small, honest numbers beat inflated ones on a student portfolio. */
export const stats: { value: string; label: string }[] = [
  { value: "6", label: "Projects built" },
  { value: "2", label: "Live in production" },
];

export const about = {
  heading: "About",
  lead:
    "I build things for the place I live — hospitals, municipalities, small " +
    "businesses in Cameroon.",
  paragraphs: [
    "I am in my final year of a B.Tech in Software Engineering at the College " +
    "of Technology, University of Buea. I came to software because it is the " +
    "fastest way I know to turn a problem someone described to me into " +
    "something they can actually use.",

    "Most of what I build is full-stack and web-first: Next.js or React on the " +
    "front, Node on the server, Postgres or DynamoDB underneath. I spent 2025 " +
    "interning at Techarcgram in Buea working through a full-stack programme, " +
    "and I have been shipping my own projects since.",
  ],
  note:
    "Still a student, building school and internship projects. I am also a " +
    "Millennium Fellow — a leadership programme run by the UN Academic Impact " +
    "and the Millennium Campus Network.",
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    blurb: "What I write day to day.",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "PHP", icon: "php" },
      { name: "Dart", icon: "dart" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
    ],
  },
  {
    name: "Frontend",
    blurb: "Interfaces that hold up across screen sizes.",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs", mono: true },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    name: "Backend & data",
    blurb: "The server layer and what sits underneath it.",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express", mono: true },
      { name: "Prisma", icon: "prisma", mono: true },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "DynamoDB", icon: "dynamodb" },
    ],
  },
  {
    name: "Cloud & infrastructure",
    blurb: "Designing and deploying on AWS.",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "EC2", icon: "ec2" },
      { name: "Lambda", icon: "lambda" },
      { name: "IAM", icon: "iam" },
      { name: "CloudFront", icon: "cloudfront" },
      { name: "Cognito", icon: "cognito" },
      { name: "Terraform", icon: "terraform" },
      { name: "Vercel", icon: "vercel", mono: true },
    ],
  },
  {
    name: "Tooling",
    blurb: "How I build, test and ship.",
    items: [
      { name: "Git", icon: "git" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "hospicare-emr",
    title: "HospiCare EMR",
    tagline: "Electronic medical records and pharmacy management for a district hospital.",
    description:
      "A hospital management system built for the Cameroonian context, covering " +
      "the two daily pain points of a district hospital: electronic medical " +
      "records and pharmacy stock. One patient flows through the whole system — " +
      "reception to doctor to pharmacy — with every action persisted and linked.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Tailwind"],
    image: "/projects/hospicare-emr.png",
    href: "https://hospicare-emr.vercel.app",
    repo: "https://github.com/Blane47/hospicare-emr",
    featured: true,
  },
  {
    slug: "serverless-expense-tracker",
    title: "Serverless Expense Tracker",
    tagline: "A production serverless application on AWS.",
    description:
      "Full-stack expense tracking with authentication, CRUD and a spending " +
      "dashboard. Built serverless end to end: Cognito for auth, Lambda behind " +
      "API Gateway, DynamoDB for persistence, and the whole stack defined as " +
      "infrastructure-as-code with AWS SAM and deployed through CI/CD.",
    stack: ["React", "AWS Lambda", "Cognito", "DynamoDB", "AWS SAM", "CloudFront"],
    image: "/projects/expense-tracker.png",
    href: "https://d1140sv45cs8l5.cloudfront.net/",
    repo: "https://github.com/Blane47/serverless-expense-tracker",
    featured: true,
  },
  {
    slug: "ecopulse",
    title: "EcoPulse",
    tagline: "Smart waste management platform for Buea municipality.",
    description:
      "A four-part system for urban waste collection: a React dashboard with " +
      "live route maps and analytics, a REST API with JWT auth and image " +
      "uploads, and two React Native apps — one for collection crews on route, " +
      "one for residents reporting and tracking pickups.",
    stack: ["React", "Vite", "React Native", "Expo", "Node.js", "Express", "MongoDB", "Leaflet"],
    image: "/projects/ecopulse-app.png",
    repo: "https://github.com/Blane47/EcoPulse",
    featured: true,
  },
  {
    slug: "cultia",
    title: "CULTIA",
    tagline: "A cultural education platform for Cameroon.",
    description:
      "My B.Tech design project, built with a senior student: a platform for " +
      "teaching and preserving Cameroonian heritage across regions, tribes and " +
      "local languages, with learning paths, a contributor and review workflow, " +
      "and a community feed. I modelled the domain end to end — ER, class and " +
      "use-case diagrams — and worked on the platform design.",
    stack: ["System design", "ER modelling", "UML", "Learning paths", "Content workflow"],
    image: "/projects/cultia-platform.png",
    repo: "https://github.com/Blane47/CULTIA",
  },
  {
    slug: "dynamic-restaurant",
    title: "Saveurs du Cameroun",
    tagline: "Online ordering for a Cameroonian restaurant.",
    description:
      "A restaurant site where customers browse dishes by category, add to a " +
      "cart, register and check out with a printable receipt, backed by an " +
      "admin side for managing the menu and orders. Built server-side in PHP " +
      "with MySQL, for the CEC319 Dynamic Web Development course at UB.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML & CSS"],
    image: "/projects/restaurant-menu.png",
    repo: "https://github.com/Blane47/Dynamic_Restaurant",
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
    kind: "work",
    role: "Cloud Computing Intern",
    org: "Zinger Systems",
    location: "Buea, Cameroon",
    period: "Jun 2026 – Sep 2026",
    type: "Internship",
    summary:
      "Worked through AWS solutions-architect training and applied it by " +
      "designing and deploying a production serverless application end to end.",
    highlights: [
      "Studied the AWS Certified Solutions Architect Associate (SAA-C03) curriculum",
      "Built and deployed a serverless expense tracker on AWS — Cognito, Lambda, API Gateway, DynamoDB",
      "Defined the whole stack as infrastructure-as-code with AWS SAM / CloudFormation",
      "Set up CI/CD, monitoring, and security controls including point-in-time recovery",
    ],
    impact: [
      "Shipped a live application serving over CloudFront rather than stopping at coursework",
    ],
  },
  {
    kind: "education",
    role: "B.Tech, Software Engineering",
    org: "College of Technology, University of Buea",
    location: "Buea, Cameroon",
    period: "2024 – present",
    type: "Final year",
    summary:
      "TODO: the courses that mattered most, and your final-year project if " +
      "you have settled on one.",
  },
  {
    kind: "education",
    role: "GCE Advanced Level",
    org: "Sacred Heart College, Mankon",
    location: "Bamenda, Cameroon",
    period: "2022 – 2024",
    result: "24 / 25 points",
    summary: "Completed high school in the sciences.",
  },
  {
    kind: "education",
    role: "GCE Ordinary Level",
    org: "Sacred Heart College, Mankon",
    location: "Bamenda, Cameroon",
    period: "2017 – 2022",
    result: "30 / 33 points",
    summary: "Completed secondary school in the sciences.",
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
    "I am looking for a software engineering internship or graduate role, and " +
    "I am open to freelance work. The fastest way to reach me is email.",
};

export const siteMeta = {
  title: `${profile.name} — ${profile.role}`,
  description:
    "Suh Blane Sanyang — Software Engineering student at the University of " +
    "Buea building full-stack web applications with Next.js, React, Node and AWS.",
  url: "https://TODO.vercel.app", // TODO: set once deployed
};
