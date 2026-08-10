/**
 * Club-wide content. Edit these values to rebrand the site.
 * Placeholder values are marked with [PLACEHOLDER] in comments.
 */

export const club = {
  name: "Tech Fusion Club",
  shortName: "Tech Fusion",
  initials: "TF",
  tagline: "Where ideas fuse into technology.",
  university: "Shri Ramswaroop Memorial University (SRMU)",
  foundedYear: 2019,
  email: "techfusionclub@srmu.ac.in",
  coordinatorEmail: "abhishek.saxena@srmu.ac.in",
  registrationFormUrl: "https://viveka.techfusion.club",
  /**
   * Paste a Formspree form ID here (e.g. "xabcdefg") to make the Join form
   * send real email. Until then the form validates and shows a success state
   * without sending anything.
   */
  formspreeId: "",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/techfusionclub_srmu/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/techfusion-club/" },
    { label: "Facebook", href: "https://www.facebook.com/people/Techfusion-Club/100088111141332/" },
    { label: "GitHub", href: "https://github.com/webdevpraveen/techfusionclub" },
  ],
  mission:
    "Tech Fusion Club exists to turn curiosity into shipped work. We give SRMU students a platform to learn in public, build with peers across engineering domains, and graduate with a portfolio of real production projects.",
  vision:
    "To be the campus benchmark for student-led engineering at Shri Ramswaroop Memorial University — a club whose members drive university hackathons, open-source initiatives, and tech fest execution.",
} as const;

export const stats: Array<{ label: string; value: number; suffix?: string; prefix?: string }> = [
  { label: "Active members", value: 320, suffix: "+" },
  { label: "Events hosted", value: 500, suffix: "+" },
  { label: "Years active", value: 7, prefix: "0" },
  { label: "Workshops conducted", value: 800, suffix: "+" },
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
  name: "Er. Abhishek Kumar Saxena",
  designation: "Assistant Director, IQAC & Head Technical Society, SRMU",
  photo: "https://www.vivekatheintelligence.in/abhishek.jpg",
  email: "abhishek.saxena@srmu.ac.in",
  message:
    "What sets Tech Fusion apart is continuity and hands-on building. Students do not simply attend a workshop and leave — they build real products and return as mentors. My role is to empower our student leads, foster university-wide technical excellence, and ensure every batch steps into industry with production-ready skills.",
};

export const testimonial = {
  quote:
    "I joined in my first year knowing almost no code. Two years later I was leading the AI/ML domain and mentoring twenty juniors. This club moves fast, and it takes you with it.",
  author: "Riya Sharma — Lead Student Organizer, AI/ML Domain",
};
