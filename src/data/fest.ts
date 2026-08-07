import { club } from "./club";

export const fest = {
  name: "Viveka 6.0",
  edition: "2027 · Sixth Edition",
  tagline: "The University's Flagship Annual Technical Festival.",
  /** Set to a future ISO datetime to show the live countdown. */
  startsAt: "2027-03-20T09:00:00+05:30",
  endsAt: "2027-03-22T18:00:00+05:30",
  dateLabel: "20 – 22 March 2027",
  venue: "Central Auditorium & Engineering Block, " + club.university,
  eventSlug: "viveka-6-0",
  registerUrl: club.registrationFormUrl,
  intro:
    "Viveka 6.0 is the university's premier flagship annual technical fest organized by Tech Fusion Club. Featuring a 36-hour hackathon at its core, competitive coding arenas, Smart India Hackathon internal screening, robotics gauntlets, and industrial tech expos open to all departments and external colleges.",
  stats: [
    { label: "Registrations (Viveka 5.0)", value: "500+" },
    { label: "Prize pool", value: "₹1.5L+" },
    { label: "Sub-events", value: "08" },
    { label: "Sponsors & Partners", value: "06" },
  ],
  tracks: [
    {
      name: "The 36-Hour Viveka Hackathon",
      kind: "Flagship",
      body: "Teams of up to four build from themed problem statements released at hour zero. Mentorship rotations every six hours, judged on production-ready software.",
      prize: "₹60,000",
    },
    {
      name: "Smart India Hackathon (SIH) Internal Prep",
      kind: "National Track",
      body: "Official university internal evaluation and incubation for Smart India Hackathon problem statements with guidance from past SIH winners.",
      prize: "SIH Nomination + ₹15,000",
    },
    {
      name: "Viveka Code Arena",
      kind: "Competition",
      body: "Three-round competitive programming contest, from warm-up algorithmic sets to a timed on-stage final for top coders.",
      prize: "₹25,000",
    },
    {
      name: "Cyber Breach Protocol (CTF)",
      kind: "Competition",
      body: "Capture-the-flag challenge across web, forensics, and cryptography with parallel beginner tracks for first-year students.",
      prize: "₹15,000",
    },
    {
      name: "Harmony Tech & Culture Showcase",
      kind: "Inter-Department",
      body: "Collaborative event bringing together technology, creative media, interactive UI/UX installations, and digital art.",
      prize: "₹15,000",
    },
    {
      name: "Project Expo & Startup Pitch",
      kind: "Showcase",
      body: "Open exhibition floor for student hardware, web, and AI projects, judged by industry executives and department heads.",
      prize: "₹15,000",
    },
  ],
  schedule: [
    {
      day: "Day 01",
      date: "Sat, 20 March",
      items: [
        { time: "09:00", title: "Registration & badge distribution", note: "Auditorium Foyer" },
        { time: "10:30", title: "Grand opening ceremony & Chief Guest address", note: "Main Auditorium" },
        { time: "12:00", title: "Viveka 36-Hour Hackathon Hour Zero", note: "Engineering Block Labs" },
        { time: "15:00", title: "Smart India Hackathon (SIH) round 1 pitch", note: "Seminar Hall A" },
        { time: "19:00", title: "Industry Tech Talk: AI & Distributed Cloud", note: "Seminar Hall B" },
        { time: "23:00", title: "Midnight mentor review & energy refuel", note: "CS Block" },
      ],
    },
    {
      day: "Day 02",
      date: "Sun, 21 March",
      items: [
        { time: "09:00", title: "Breach Protocol CTF launch", note: "Networking Lab" },
        { time: "11:00", title: "Harmony Tech-Culture Expo opens", note: "Central Lawn" },
        { time: "14:00", title: "Viveka Code Arena prelims", note: "Computer Labs 1–3" },
        { time: "17:00", title: "Keynote Talk: Building Startups in College", note: "Main Auditorium" },
        { time: "21:00", title: "Hackathon 24-hour check-in & prototype demo", note: "Engineering Block" },
      ],
    },
    {
      day: "Day 03",
      date: "Mon, 22 March",
      items: [
        { time: "00:00", title: "Hackathon final hour sprint & code freeze", note: "CS Block" },
        { time: "10:00", title: "Top 10 Hackathon teams stage presentation", note: "Main Auditorium" },
        { time: "13:00", title: "Code Arena live final round", note: "Main Auditorium" },
        { time: "15:30", title: "Sponsor desks & recruitment drive", note: "Central Foyer" },
        { time: "17:00", title: "Award ceremony & Viveka 6.0 valedictory", note: "Main Auditorium" },
      ],
    },
  ],
  sponsors: [
    { name: "Northwind Cloud", tier: "Title sponsor" },
    { name: "Verity Labs", tier: "Powered by" },
    { name: "Kestrel Security", tier: "Security partner" },
    { name: "Loomstack", tier: "Cloud partner" },
    { name: "Cadence Devtools", tier: "Community partner" },
  ],
  recapYear: 2025,
  recapName: "Viveka 5.0",
  recap: [
    "/images/events/2025/fusionx-2025/01.jpg",
    "/images/events/2025/fusionx-2025/02.jpg",
    "/images/events/2025/fusionx-2025/03.jpg",
    "/images/events/2025/fusionx-2025/04.jpg",
  ],
};

export const joinBenefits = [
  {
    title: "A domain, not a mailing list",
    body: "You pick a technical domain on day one and get a mentor inside it. Weekly sessions, real project work, code review from seniors.",
  },
  {
    title: "Build things that ship",
    body: "Members leave with deployed projects and public repositories — the thing interviewers actually ask about.",
  },
  {
    title: "Lead University Mega-Events",
    body: "Organize Viveka 6.0, SIH hackathons, and Harmony events with real budgets and thousands of student participants.",
  },
  {
    title: "An alumni network that answers",
    body: "Former members across top tech companies provide referral help, mock interviews, and resume reviews for members.",
  },
];

export const recruitmentSteps = [
  {
    step: "01",
    title: "Application",
    body: "Fill the join form with your branch, year, and domain of interest. Open for four weeks each semester.",
  },
  {
    step: "02",
    title: "Orientation session",
    body: "An open session covering how the club works, the domain structure, and what the time commitment actually is.",
  },
  {
    step: "03",
    title: "Domain task",
    body: "A small, beginner-friendly task in your chosen domain. Assessed on effort and reasoning, not prior experience.",
  },
  {
    step: "04",
    title: "Conversation & onboarding",
    body: "A short informal chat with the domain lead, then Git onboarding and your first team assignment.",
  },
];

export const faqs = [
  {
    q: "Do I need prior coding experience to join?",
    a: "No. Roughly half of every intake starts with no experience beyond a first-semester programming course. The domain task is designed to be solvable by beginners — we assess how you approach it, not how polished it is.",
  },
  {
    q: "Is the club only for computer science students?",
    a: "No. Current members come from mechanical, civil, electronics and design backgrounds. If you are willing to learn and show up consistently, your branch is irrelevant to us.",
  },
  {
    q: "How much time does membership take?",
    a: "Expect one weekly domain session of about two hours, plus project work at your own pace. Event weeks are heavier, and we tell you well in advance.",
  },
  {
    q: "Is there a membership fee?",
    a: "There is no fee to join. Some external competitions have their own entry costs, and the club sponsors those for members wherever the budget allows.",
  },
  {
    q: "When does recruitment open?",
    a: "Twice a year, at the start of each semester. Applications submitted outside those windows are held and reviewed in the next cycle.",
  },
  {
    q: "Can final-year students join?",
    a: "Yes, though we will usually route you towards mentoring and project leadership rather than the full first-year learning track.",
  },
];

export const domainOptions = [
  "Web Development",
  "AI / ML",
  "Cybersecurity",
  "App Development",
  "Cloud & DevOps",
  "Design",
  "Events & Operations",
  "Not sure yet",
];
