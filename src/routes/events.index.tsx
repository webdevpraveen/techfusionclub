import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { eventCategories, events, eventYears, type EventCategory } from "@/data/events";
import { EventCard, FilterPill } from "@/components/site/EventCard";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events & Hackathons | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU. Web development, AI/ML coding events hosted by Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content: "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech events, hackathon srmu, coding workshops",
      },
      { property: "og:title", content: "Events & Hackathons | Tech Fusion Club SRMU" },
      {
        property: "og:description",
        content: "Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU.",
      },
      { property: "og:url", content: "https://techfusionclub.vercel.app/events" },
      { name: "twitter:title", content: "Tech Fusion Club (TFC) Events" },
      {
        name: "twitter:description",
        content: "Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU.",
      },
    ],
    links: [{ rel: "canonical", href: "https://techfusionclub.vercel.app/events" }],
  }),
  component: Events,
});

const upcomingYears = [2027];

function Events() {
  const [year, setYear] = useState<number | "all">("all");
  const [category, setCategory] = useState<EventCategory | "all">("all");

  const filtered = useMemo(
    () =>
      events
        .filter((e) => (year === "all" ? true : e.year === year))
        .filter((e) => (category === "all" ? true : e.category === category))
        .sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    [year, category],
  );

  const isFutureYear = year !== "all" && upcomingYears.includes(year);

  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <p className="eyebrow">Events</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Everything we've run, and what's next.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {events.length} events across {eventYears.length} years — all open to students from any
            department, most of them free.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-6">
        <Reveal className="glass flex flex-col gap-5 rounded-2xl p-5 sm:p-6">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Year
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterPill active={year === "all"} onClick={() => setYear("all")}>
                All years
              </FilterPill>
              {Array.from(new Set([...upcomingYears, ...eventYears])).map((y) => (
                <FilterPill key={y} active={year === y} onClick={() => setYear(y)}>
                  {y}
                </FilterPill>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterPill active={category === "all"} onClick={() => setCategory("all")}>
                All types
              </FilterPill>
              {eventCategories.map((c) => (
                <FilterPill key={c} active={category === c} onClick={() => setCategory(c)}>
                  {c}
                </FilterPill>
              ))}
            </div>
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e, i) => (
              <Reveal as="li" key={e.slug} delay={(i % 3) * 70}>
                <EventCard event={e} index={i} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="glass-strong hero-gradient mt-10 rounded-[2rem] p-10 text-center sm:p-16">
            <p className="eyebrow">{isFutureYear ? `${year} calendar` : "No matches"}</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              {isFutureYear ? "Coming soon" : "Nothing here yet"}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {isFutureYear
                ? "The calendar for this year is still being planned. Announcements go out on our socials and to members first."
                : "Try a different year or category — or clear the filters to see everything."}
            </p>
          </Reveal>
        )}
      </Section>

      <CTABanner
        eyebrow="Stay in the loop"
        title="Members hear about events first."
        body="Applications open twice a year. Join to get event invites, mentor access, and project teams."
      />
    </>
  );
}
