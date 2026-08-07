/**
 * Club-wide content. Edit these values to rebrand the site.
 * Placeholder values are marked with [PLACEHOLDER] in comments.
 */

export const club = {
  name: "Tech Fusion Club",
  shortName: "Tech Fusion",
  initials: "TF",
  tagline: "Where ideas fuse into technology.",
  university: "Vishwakarma Institute of Technology", // [PLACEHOLDER]
  foundedYear: 2019,
  email: "techfusion@university.edu", // [PLACEHOLDER]
  coordinatorEmail: "coordinator.techfusion@university.edu", // [PLACEHOLDER]
  registrationFormUrl: "https://forms.gle/placeholder-tech-fusion", // [PLACEHOLDER]
  /**
   * Paste a Formspree form ID here (e.g. "xabcdefg") to make the Join form
   * send real email. Until then the form validates and shows a success state
   * without sending anything.
   */
  formspreeId: "",
  socials: [
    { label: "Instagram", href: "https://instagram.com/techfusionclub" }, // [PLACEHOLDER]
    { label: "LinkedIn", href: "https://linkedin.com/company/techfusionclub" }, // [PLACEHOLDER]
    { label: "GitHub", href: "https://github.com/techfusionclub" }, // [PLACEHOLDER]
    { label: "Discord", href: "https://discord.gg/techfusion" }, // [PLACEHOLDER]
  ],
  mission:
    "Tech Fusion Club exists to turn curiosity into shipped work. We give students a place to learn in public, build with peers across disciplines, and leave university with a portfolio instead of just a transcript.",
  vision:
    "To be the campus benchmark for student-led engineering — a club whose alumni are known for building things that actually run in production.",
} as const;

export const stats = [
  { label: "Active members", value: 320, suffix: "+" },
  { label: "Events hosted", value: 68, suffix: "" },
  { label: "Years active", value: new Date().getFullYear() - club.foundedYear, suffix: "" },
  { label: "Workshops conducted", value: 41, suffix: "" },
];

export type Domain = {
  slug: string;
  name: string;
  blurb: string;
  stack: string[];
};

export const domains: Domain[] = [
  {
    slug: "web-dev",
    name: "Web Development",
    blurb:
      "Product-grade front ends and APIs — from accessibility fundamentals to shipping to real users.",
    stack: ["React", "TypeScript", "Node", "Postgres"],
  },
  {
    slug: "ai-ml",
    name: "AI / ML",
    blurb:
      "Applied machine learning: model training, evaluation, and putting inference behind a usable interface.",
    stack: ["PyTorch", "scikit-learn", "LLM APIs", "Pandas"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    blurb:
      "CTF practice, secure-by-default engineering, and responsible disclosure culture on campus.",
    stack: ["Burp Suite", "Wireshark", "Linux", "Cryptography"],
  },
  {
    slug: "app-dev",
    name: "App Development",
    blurb: "Cross-platform mobile builds, offline-first data, and store-ready release pipelines.",
    stack: ["Flutter", "React Native", "Kotlin", "Firebase"],
  },
  {
    slug: "cloud",
    name: "Cloud & DevOps",
    blurb: "Containers, CI/CD, and infrastructure-as-code — how software actually gets deployed.",
    stack: ["Docker", "GitHub Actions", "AWS", "Terraform"],
  },
  {
    slug: "design",
    name: "Design",
    blurb:
      "Interface craft and design systems: research, prototyping, motion, and visual identity work.",
    stack: ["Figma", "Design tokens", "Prototyping", "Branding"],
  },
];

export const values = [
  {
    title: "Innovation",
    body: "We prefer an unfinished original idea to a polished copy. Experiments are budgeted for, and failure is documented rather than hidden.",
  },
  {
    title: "Collaboration",
    body: "Every project pairs juniors with seniors across domains. Nobody ships alone, and nobody carries a team alone either.",
  },
  {
    title: "Learning in public",
    body: "Notes, repos, and recordings from every session stay open so knowledge outlives the batch that created it.",
  },
  {
    title: "Craft",
    body: "Working is the baseline, not the goal. We care about performance, accessibility, and the details a user actually feels.",
  },
];

export const timeline = [
  {
    year: "2019",
    title: "Club founded",
    body: "Nine students and one faculty advisor start a weekly build night in the CS department lab.",
  },
  {
    year: "2020",
    title: "First online cohort",
    body: "Sessions move fully remote; the 6-week web development bootcamp reaches 140 students.",
  },
  {
    year: "2021",
    title: "Domain structure introduced",
    body: "The club splits into specialised domains with student leads, formalising the mentorship ladder.",
  },
  {
    year: "2022",
    title: "Viveka 1.0 fest, edition one",
    body: "First flagship 36-hour annual tech fest with 400+ registrations and four industry sponsors.",
  },
  {
    year: "2024",
    title: "Open-source initiative",
    body: "Members land 60+ merged pull requests across public repositories during Hacktoberfest.",
  },
  {
    year: "2026",
    title: "320 members strong",
    body: "Six active domains, a year-round event calendar, and an alumni network across ten companies.",
  },
];

export const faculty = {
  name: "Dr. Ananya Rao", // [PLACEHOLDER]
  designation: "Faculty Coordinator · Dept. of Computer Engineering",
  photo: "/images/members/faculty-coordinator.jpg",
  email: club.coordinatorEmail,
  message:
    "What sets Tech Fusion apart is continuity. Students do not simply attend a workshop and leave — they return as mentors. As coordinator my role is mostly to stay out of the way, open doors with the administration, and make sure the standard the seniors set is passed down intact.",
};

export const testimonial = {
  quote:
    "I joined in my first year knowing almost no code. Two years later I was leading the AI/ML domain and mentoring twenty juniors. This club moves fast, and it takes you with it.",
  author: "Riya Sharma — [Placeholder] Domain Lead, AI/ML",
};
