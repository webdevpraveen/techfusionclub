export type EventCategory = "Workshop" | "Hackathon" | "Seminar" | "Competition";

export type ClubEvent = {
  slug: string;
  title: string;
  category: EventCategory;
  year: number;
  date: string; // ISO date
  endDate?: string;
  venue: string;
  summary: string;
  description: string[];
  attendees?: number;
  domains: string[];
  cover: string;
  gallery: string[];
  highlights?: string[];
  winners?: { position: string; name: string; project: string }[];
  registerUrl?: string;
  status: "past" | "upcoming";
};

const rawEvents: ClubEvent[] = [
  {
    slug: "viveka-6-0",
    title: "Viveka 6.0 — Annual Tech Fest 2027",
    category: "Hackathon",
    year: 2027,
    date: "2027-03-20",
    endDate: "2027-03-22",
    venue: "Central Auditorium & Engineering Block",
    summary:
      "The university's flagship annual tech fest: a 36-hour hackathon, Smart India Hackathon internal prep, coding arena, tech talks, and project expo.",
    description: [
      "Viveka 6.0 is the university's premier flagship annual technical festival organized by Tech Fusion Club. The sixth edition features a 36-hour national hackathon, SIH internal preparation rounds, competitive programming arenas, robotics gauntlets, and industrial keynotes.",
      "Open to students from all departments and teams from external universities across the country. Over ₹1.5 Lakhs in prizes and direct mentorship from industry partners.",
    ],
    domains: ["Web Development", "AI / ML", "Cybersecurity", "Design", "Cloud & DevOps"],
    cover: "/images/events/2026/fusionx-2026/cover.jpg",
    gallery: [
      "/images/events/2026/fusionx-2026/01.jpg",
      "/images/events/2026/fusionx-2026/02.jpg",
      "/images/events/2026/fusionx-2026/03.jpg",
    ],
    highlights: [
      "36-hour flagship hackathon with mentor rotations every six hours",
      "Official Smart India Hackathon (SIH) internal university screening",
      "₹1.5L+ prize pool with direct recruitment desks by sponsor partners",
    ],
    registerUrl: "https://viveka.techfusion.club",
    status: "upcoming",
  },
  {
    slug: "smart-india-hackathon-prep",
    title: "Smart India Hackathon (SIH) Internal Campus Hackathon",
    category: "Hackathon",
    year: 2026,
    date: "2026-09-18",
    endDate: "2026-09-19",
    venue: "Main Auditorium & CS Labs",
    summary:
      "Official university-wide screening & mentorship hackathon for Smart India Hackathon (SIH) problem statements.",
    description: [
      "Tech Fusion Club hosts the internal evaluation hackathon for Smart India Hackathon (SIH). Teams present software and hardware solutions to real-world government and ministry problem statements.",
      "The top selected teams receive official university nomination, cloud credits, and intensive mentoring from past SIH grand final winners.",
    ],
    attendees: 180,
    domains: ["Web Development", "AI / ML", "Cybersecurity", "Cloud & DevOps"],
    cover: "/images/events/2026/ship-it-weekend/cover.jpg",
    gallery: [
      "/images/events/2026/ship-it-weekend/01.jpg",
      "/images/events/2026/ship-it-weekend/02.jpg",
    ],
    highlights: [
      "Official SIH University Screening",
      "Mentorship by past SIH Winners",
      "15 Teams nominated",
    ],
    status: "upcoming",
  },
  {
    slug: "harmony-tech-culture",
    title: "Harmony 2026 — Tech x Culture Fusion Fest",
    category: "Competition",
    year: 2026,
    date: "2026-11-12",
    endDate: "2026-11-14",
    venue: "University Open Air Theatre & Lawns",
    summary:
      "Where technology meets creative arts: UI/UX design sprints, generative AI art battles, and interactive tech installations.",
    description: [
      "Harmony is the university's mega intra-college fest where Tech Fusion Club manages the technology and digital innovation track.",
      "Events include live AI music synthesis, interactive projection mapping, UI/UX design sprints, and gaming tournament arenas.",
    ],
    attendees: 350,
    domains: ["Design", "AI / ML", "Web Development"],
    cover: "/images/events/2026/intro-to-llm-apps/cover.jpg",
    gallery: [
      "/images/events/2026/intro-to-llm-apps/01.jpg",
      "/images/events/2026/intro-to-llm-apps/02.jpg",
    ],
    highlights: [
      "Interactive digital installations",
      "Generative AI Art Competition",
      "Design Sprint Finals",
    ],
    status: "upcoming",
  },
  {
    slug: "intro-to-llm-apps",
    title: "Building With LLMs: From Prompt to Product",
    category: "Workshop",
    year: 2026,
    date: "2026-03-14",
    venue: "Seminar Hall B",
    summary:
      "A hands-on session on retrieval, evaluation, and shipping an LLM feature that does not embarrass you in production.",
    description: [
      "Participants built a small retrieval-augmented assistant end to end: chunking and embedding a document set, wiring a chat interface, then writing an evaluation harness to catch regressions.",
      "The second half focused on cost control, latency budgets, prompt versioning, and evaluation metrics.",
    ],
    attendees: 128,
    domains: ["AI / ML", "Web Development"],
    cover: "/images/events/2026/intro-to-llm-apps/cover.jpg",
    gallery: [
      "/images/events/2026/intro-to-llm-apps/01.jpg",
      "/images/events/2026/intro-to-llm-apps/02.jpg",
      "/images/events/2026/intro-to-llm-apps/03.jpg",
    ],
    highlights: [
      "128 attendees across four departments",
      "Every participant left with a deployed repo",
    ],
    status: "past",
  },
  {
    slug: "capture-the-flag-spring",
    title: "Spring CTF: Breach Protocol",
    category: "Competition",
    year: 2026,
    date: "2026-02-08",
    venue: "Networking Lab",
    summary:
      "An eight-hour jeopardy-style capture-the-flag across web, forensics and crypto tracks.",
    description: [
      "Eighteen challenges spanning web exploitation, digital forensics, reverse engineering and classical cryptography, written entirely by the Cybersecurity domain.",
      "A beginner track ran in parallel with guided hints so first-year students could score without being flattened by the open board.",
    ],
    attendees: 74,
    domains: ["Cybersecurity"],
    cover: "/images/events/2026/capture-the-flag-spring/cover.jpg",
    gallery: [
      "/images/events/2026/capture-the-flag-spring/01.jpg",
      "/images/events/2026/capture-the-flag-spring/02.jpg",
    ],
    winners: [
      { position: "1st", name: "Team Null Terminator", project: "17 / 18 flags" },
      { position: "2nd", name: "Team Segfault", project: "15 / 18 flags" },
      { position: "3rd", name: "Team Rootkit", project: "13 / 18 flags" },
    ],
    status: "past",
  },
  {
    slug: "viveka-5-0",
    title: "Viveka 5.0 — Annual Tech Fest 2025",
    category: "Hackathon",
    year: 2025,
    date: "2025-10-17",
    endDate: "2025-10-19",
    venue: "Central Auditorium & CS Block",
    summary:
      "The fifth edition of the university's flagship fest: 500+ registrations, 62 hackathon teams, 5 sponsors.",
    description: [
      "The 5th edition of Viveka scaled to over 500 registrations across three days, with 62 teams surviving to final judging in the flagship 36-hour hackathon.",
      "Keynote sessions featured industry alumni working in distributed systems, AI infrastructure, and cloud security.",
    ],
    attendees: 512,
    domains: ["Web Development", "AI / ML", "Cybersecurity", "Design", "Cloud & DevOps"],
    cover: "/images/events/2025/fusionx-2025/cover.jpg",
    gallery: [
      "/images/events/2025/fusionx-2025/01.jpg",
      "/images/events/2025/fusionx-2025/02.jpg",
      "/images/events/2025/fusionx-2025/03.jpg",
      "/images/events/2025/fusionx-2025/04.jpg",
    ],
    highlights: [
      "500+ registrations, 62 finalist hackathon teams",
      "₹1.2L prize pool with five corporate sponsors",
      "Project expo visited by University Vice Chancellor & Faculty",
    ],
    winners: [
      { position: "1st", name: "Team Overclock", project: "Campus accessibility mapper" },
      { position: "2nd", name: "Team Latency", project: "Real-time lab equipment tracker" },
      {
        position: "3rd",
        name: "Team Ctrl+Alt+Repeat",
        project: "Offline-first notes for field work",
      },
    ],
    status: "past",
  },
];

/**
 * `status` in the source data records planning intent, not fact. An event whose
 * final day has passed must not render as upcoming, so resolve it against today
 * when the module is read.
 */
function resolveStatus(event: ClubEvent): ClubEvent["status"] {
  if (event.status !== "upcoming") return "past";
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const endsAt = new Date(event.endDate ?? event.date);
  return +endsAt >= +startOfToday ? "upcoming" : "past";
}

export const events: ClubEvent[] = rawEvents.map((e) => ({
  ...e,
  status: resolveStatus(e),
}));

export const eventCategories: EventCategory[] = ["Workshop", "Hackathon", "Seminar", "Competition"];

export const eventYears = Array.from(new Set(events.map((e) => e.year))).sort((a, b) => b - a);

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export const featuredEvent: ClubEvent =
  events.find((e) => e.status === "upcoming") ?? (events[0] as ClubEvent);

export function formatEventDate(event: Pick<ClubEvent, "date" | "endDate">) {
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
  const start = new Date(event.date);
  if (!event.endDate) return start.toLocaleDateString("en-GB", opts);
  const end = new Date(event.endDate);
  const sameMonth =
    start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  return sameMonth
    ? `${start.getDate()}–${end.toLocaleDateString("en-GB", opts)}`
    : `${start.toLocaleDateString("en-GB", opts)} – ${end.toLocaleDateString("en-GB", opts)}`;
}

const byStartDate = (a: ClubEvent, b: ClubEvent) => +new Date(a.date) - +new Date(b.date);

export const upcomingEvents: ClubEvent[] = events
  .filter((e) => e.status === "upcoming")
  .sort(byStartDate);

export const pastEvents: ClubEvent[] = events
  .filter((e) => e.status === "past")
  .sort((a, b) => byStartDate(b, a));

/** The next thing on the calendar; falls back to the most recent past event. */
export const nextEvent: ClubEvent = (upcomingEvents[0] ?? events[0]) as ClubEvent;

export function daysUntil(iso: string) {
  const start = new Date(iso);
  const today = new Date();
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return Math.round((+start - +today) / 86_400_000);
}

/** Short humanised distance from now, e.g. "in 3 weeks" or "6 months ago". */
export function relativeEventLabel(iso: string) {
  const days = daysUntil(iso);
  if (days === 0) return "Happens today";
  if (days === 1) return "Tomorrow";
  if (days === -1) return "Yesterday";

  const magnitude =
    days > -14 && days < 14
      ? { size: Math.abs(days), unit: "day" }
      : days > -70 && days < 70
        ? { size: Math.round(Math.abs(days) / 7), unit: "week" }
        : days > -800 && days < 800
          ? { size: Math.round(Math.abs(days) / 30), unit: "month" }
          : { size: Math.round(Math.abs(days) / 365), unit: "year" };

  const plural = magnitude.size === 1 ? "" : "s";
  const phrase = `${magnitude.size} ${magnitude.unit}${plural}`;
  return days > 0 ? `Starts in ${phrase}` : `${phrase} ago`;
}

export const allEventDomains: string[] = Array.from(
  new Set(events.flatMap((e) => e.domains)),
).sort();

export const eventStats = {
  total: events.length,
  upcoming: upcomingEvents.length,
  past: pastEvents.length,
  years: eventYears.length,
  attendees: events.reduce((sum, e) => sum + (e.attendees ?? 0), 0),
  domains: allEventDomains.length,
} as const;
