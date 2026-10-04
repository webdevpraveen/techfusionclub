export interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  iconName: "code" | "users" | "terminal" | "award" | "palette" | "heart-handshake";
}

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Weekly Hands-on Build Nights",
    subtitle: "Shipping Code Over Slideware",
    description:
      "Every Thursday evening, members gather in the computer labs to write code, debug real-world applications, and collaborate on cross-domain projects.",
    tags: ["Build Nights", "Peer Coding", "Live Demos"],
    iconName: "code",
  },
  {
    number: "02",
    title: "1-on-1 Senior Mentorship Ladder",
    subtitle: "From Beginner to Domain Lead",
    description:
      "Every junior is matched with a senior mentor inside their domain for code reviews, project guidance, and technical career advice.",
    tags: ["Code Review", "Career Prep", "1-on-1 Help"],
    iconName: "users",
  },
  {
    number: "03",
    title: "Production Shipping & Open Source",
    subtitle: "Real Repositories, Real Users",
    description:
      "Members leave university with deployed web apps, open-source pull requests, and production code that interviewers actually ask about.",
    tags: ["GitHub Repos", "Open Source", "Public Deploy"],
    iconName: "terminal",
  },
  {
    number: "04",
    title: "Flagship Hackathons & Competitions",
    subtitle: "Organize & Compete at Scale",
    description:
      "Lead and participate in Viveka 6.0, Smart India Hackathon campus prep, CTFs, and intra-college tech-culture expos.",
    tags: ["Viveka 6.0", "SIH Prep", "CTF Gauntlets"],
    iconName: "award",
  },
  {
    number: "05",
    title: "Creative",
    subtitle: "UI/UX & Visual Storytelling",
    description:
      "Bridging engineering with visual design, design thinking, product aesthetics, brand identity, and creative media for campus tech experiences.",
    tags: ["UI/UX Design", "Brand Systems", "Creative Tech"],
    iconName: "palette",
  },
  {
    number: "06",
    title: "Volunteer",
    subtitle: "Operations & Peer Stewardship",
    description:
      "Driving club impact through student volunteer squads, event logistics, peer mentorship support, and collaborative community operations.",
    tags: ["Community Ops", "Event Support", "Peer Stewards"],
    iconName: "heart-handshake",
  },
];
