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
  googleFormUrl?: string;
  status: "draft" | "upcoming" | "past";
};

export const events: ClubEvent[] = [];

export const eventCategories: EventCategory[] = ["Workshop", "Hackathon", "Seminar", "Competition"];

export const eventYears = Array.from(new Set(events.map((e) => e.year))).sort((a, b) => b - a);

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}

export const featuredEvent: ClubEvent =
  events.find((e) => e.status === "upcoming") ?? (events[0] as ClubEvent);

export function formatEventDate(event: Pick<ClubEvent, "date" | "endDate">) {
  if (!event || !event.date) return "Date TBA";
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
  const start = new Date(event.date);
  if (isNaN(start.getTime())) {
    return event.date || "Date TBA";
  }
  if (!event.endDate) return start.toLocaleDateString("en-GB", opts);
  const end = new Date(event.endDate);
  if (isNaN(end.getTime())) {
    return start.toLocaleDateString("en-GB", opts);
  }
  const sameMonth =
    start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  return sameMonth
    ? `${start.getDate()}–${end.toLocaleDateString("en-GB", opts)}`
    : `${start.toLocaleDateString("en-GB", opts)} – ${end.toLocaleDateString("en-GB", opts)}`;
}
