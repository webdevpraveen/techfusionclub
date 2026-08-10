export type Achievement = {
  title: string;
  event: string;
  date: string;
  year: number;
  description: string;
  team?: string;
  category: "Hackathon" | "Award" | "Recognition" | "Competition";
};

export const achievements: Achievement[] = [
  {
    title: "Winners — Smart India Hackathon (Software Edition)",
    event: "Smart India Hackathon 2026",
    date: "2026-04-18",
    year: 2026,
    team: "Team Overclock (SRMU)",
    description:
      "A six-member club team won the software edition track for a low-bandwidth accessibility mapping tool for public campuses.",
    category: "Hackathon",
  },
  {
    title: "Best Student Technical Club — University Awards",
    event: "Annual University Awards 2026",
    date: "2026-02-27",
    year: 2026,
    description:
      "Recognised across all departments for event volume, member growth, and documented community impact.",
    category: "Award",
  },
  {
    title: "2nd place — National Inter-College CTF",
    event: "CyberQuest National 2025",
    date: "2025-11-09",
    year: 2025,
    team: "Team Null Terminator (SRMU)",
    description:
      "Finished second among 180 registered teams, topping the web exploitation category outright.",
    category: "Competition",
  },
  {
    title: "Top 10 Finalists — Google Solution Challenge",
    event: "Google Solution Challenge 2025",
    date: "2025-07-22",
    year: 2025,
    team: "Team Latency (SRMU)",
    description:
      "Selected as a regional top-ten finalist for a real-time lab equipment availability tracker used by two departments.",
    category: "Hackathon",
  },
  {
    title: "Open Source Contribution Recognition",
    event: "Hacktoberfest 2024",
    date: "2024-10-31",
    year: 2024,
    description:
      "Members landed 61 merged pull requests across public repositories, placing the club among the most active student groups in the region.",
    category: "Recognition",
  },
  {
    title: "Winners — Inter-University Product Design Sprint",
    event: "DesignJam 2024",
    date: "2024-03-16",
    year: 2024,
    team: "Team Kerning (SRMU)",
    description:
      "Won a 48-hour product design sprint for an onboarding redesign of a public transit ticketing app.",
    category: "Competition",
  },
  {
    title: "Best Emerging Club — Department Recognition",
    event: "Dept. of Computer Engineering 2023",
    date: "2023-12-08",
    year: 2023,
    description:
      "Awarded within three years of founding for building a sustainable mentorship structure across batches.",
    category: "Award",
  },
];
