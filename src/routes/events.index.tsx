import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import {
  CalendarClock,
  Camera,
  Compass,
  Flame,
  Grid2x2,
  Handshake,
  Layers,
  List,
  RotateCcw,
  Search,
  Timer,
  Trophy,
  Users,
  X,
} from "lucide-react";
import {
  eventCategories,
  eventStats,
  eventYears,
  events,
  nextEvent,
  upcomingEvents,
  type ClubEvent,
  type EventCategory,
} from "@/data/events";
import { EventCard, EventRow, FilterPill } from "@/components/site/EventCard";
import { EventCalendar } from "@/components/site/EventCalendar";
import { EventModal } from "@/components/site/EventModal";
import { EventSpotlight } from "@/components/site/EventSpotlight";
import { CTABanner } from "@/components/site/CTABanner";
import { FloatButton } from "@/components/site/FloatButton";
import { Reveal } from "@/components/site/Reveal";
import { RiseText } from "@/components/site/RiseText";
import { ScrollWords } from "@/components/site/ScrollWords";
import { Section, SectionHeading } from "@/components/site/Section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events & Hackathons | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Browse technical workshops, engineering hackathons, CTFs and Viveka fest editions by Tech Fusion Club (TFC) at SRMU — filters, winners, and photos for every event we run.",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tech events, hackathon srmu, coding workshops",
      },
      { property: "og:title", content: "Events & Hackathons | Tech Fusion Club SRMU" },
      {
        property: "og:description",
        content:
          "Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU.",
      },
      { property: "og:url", content: "https://techfusionclub.vercel.app/events" },
      { name: "twitter:title", content: "Tech Fusion Club (TFC) Events" },
      {
        name: "twitter:description",
        content:
          "Join technical workshops, engineering hackathons, and Viveka fest by Tech Fusion Club (TFC) at SRMU.",
      },
    ],
    links: [{ rel: "canonical", href: "https://techfusionclub.vercel.app/events" }],
  }),
  component: Events,
});

/** Years we advertise before any record exists for them. */
const futureYears = [2027];

const sortKeys = ["soon", "recent", "alpha"] as const;
type SortKey = (typeof sortKeys)[number];

const sortLabels: Record<SortKey, string> = {
  soon: "Next up",
  recent: "Newest",
  alpha: "A → Z",
};

const RUNBOOK = [
  {
    icon: <Compass className="size-5" />,
    title: "Proposed in the open",
    body: "Every session starts as a proposal the whole club argues over on Discord. If it survives that, it gets a date.",
  },
  {
    icon: <Layers className="size-5" />,
    title: "Owned by domain leads",
    body: "Web, AI/ML, security and design each write their own track, so nobody is briefing a field they don't work in.",
  },
  {
    icon: <Timer className="size-5" />,
    title: "Run on a real clock",
    body: "Published schedules, honest results, and a floor team that keeps the queue moving when a demo decides to fail.",
  },
  {
    icon: <Handshake className="size-5" />,
    title: "Written back up",
    body: "Winners, photos and a short write-up go out the same week — which is why this page has anything to show at all.",
  },
];

function Events() {
  const [year, setYear] = useState<number | "all">("all");
  const [category, setCategory] = useState<EventCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("soon");
  const [view, setView] = useState<"grid" | "timeline">("grid");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const needle = query.trim().toLowerCase();

  const matchesQuery = useCallback(
    (e: ClubEvent) =>
      !needle ||
      e.title.toLowerCase().includes(needle) ||
      e.summary.toLowerCase().includes(needle) ||
      e.venue.toLowerCase().includes(needle) ||
      e.domains.some((d) => d.toLowerCase().includes(needle)),
    [needle],
  );

  const results = useMemo(() => {
    const list = events.filter(
      (e) =>
        (year === "all" || e.year === year) &&
        (category === "all" || e.category === category) &&
        matchesQuery(e),
    );

    return list.sort((a, b) => {
      if (sort === "alpha") return a.title.localeCompare(b.title);
      if (sort === "recent") return +new Date(b.date) - +new Date(a.date);
      // "soon": upcoming by nearest date first, then the archive most-recent first
      if (a.status !== b.status) return a.status === "upcoming" ? -1 : 1;
      const delta = +new Date(a.date) - +new Date(b.date);
      return a.status === "upcoming" ? delta : -delta;
    });
  }, [year, category, sort, matchesQuery]);

  // Facet counts ignore their own dimension so a pill never zeroes itself out.
  const perYear = useMemo(() => {
    const map = new Map<number, number>();
    for (const e of events) {
      if (category !== "all" && e.category !== category) continue;
      if (!matchesQuery(e)) continue;
      map.set(e.year, (map.get(e.year) ?? 0) + 1);
    }
    return map;
  }, [category, matchesQuery]);

  const perCategory = useMemo(() => {
    const map = new Map<EventCategory, number>();
    for (const e of events) {
      if (year !== "all" && e.year !== year) continue;
      if (!matchesQuery(e)) continue;
      map.set(e.category, (map.get(e.category) ?? 0) + 1);
    }
    return map;
  }, [year, matchesQuery]);

  const grouped = useMemo(() => {
    const map = new Map<number, ClubEvent[]>();
    for (const e of results) {
      const bucket = map.get(e.year);
      if (bucket) bucket.push(e);
      else map.set(e.year, [e]);
    }
    // Map keeps insertion order, and `results` is already sorted — re-sorting by
    // year here would fight "next up" and float a 2027 event above the nearest one.
    return [...map.entries()];
  }, [results]);

  const isFiltering = year !== "all" || category !== "all" || needle !== "";
  const isFutureYear = typeof year === "number" && futureYears.includes(year);
  const openIndex = results.findIndex((e) => e.slug === openSlug);
  const openEvent = openIndex >= 0 ? (results[openIndex] ?? null) : null;

  const step = useCallback(
    (delta: number) => {
      const current = results.findIndex((e) => e.slug === openSlug);
      if (current === -1) return;
      const next = results[(current + delta + results.length) % results.length];
      if (next) setOpenSlug(next.slug);
    },
    [openSlug, results],
  );

  const reset = () => {
    setYear("all");
    setCategory("all");
    setQuery("");
  };

  return (
    <>
      {/* ---------------- Spotlight ---------------- */}
      <Section className="pb-8">
        <EventSpotlight event={nextEvent} onOpen={() => setOpenSlug(nextEvent.slug)} />
      </Section>

      {/* ---------------- Catalogue ---------------- */}
      <Section id="catalogue" className="scroll-mt-24">
        <Reveal className="scrub-fade">
          <h1 className="text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
            <RiseText text="The full catalogue." step={55} />
          </h1>
        </Reveal>
        <Reveal delay={180} className="mt-3 max-w-2xl">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Filter by year, format or domain. Every card opens the complete brief — highlights,
            winners, and the photo set from the floor.
          </p>
        </Reveal>

        <div className="sticky top-16 z-40 -mx-5 mt-8 px-5 sm:-mx-8 sm:top-20 sm:px-8">
          <div className="glass-strong rounded-2xl p-4 shadow-lg sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <label className="relative flex-1">
                <span className="sr-only">Search events</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Search by title, venue or domain…"
                  className="w-full rounded-xl border border-border bg-background/60 py-2.5 pl-11 pr-4 text-sm outline-none transition-[border-color,box-shadow] duration-300 focus:border-primary/60 focus:shadow-[var(--shadow-glow)]"
                />
              </label>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1 rounded-xl border border-border bg-surface p-1">
                  {sortKeys.map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSort(key)}
                      aria-pressed={sort === key}
                      className={cn(
                        "rounded-lg px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-300",
                        sort === key
                          ? "bg-primary/20 text-primary-glow"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {sortLabels[key]}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1 rounded-xl border border-border bg-surface p-1">
                  <ViewButton
                    active={view === "grid"}
                    onClick={() => setView("grid")}
                    label="Grid view"
                  >
                    <Grid2x2 className="size-4" />
                  </ViewButton>
                  <ViewButton
                    active={view === "timeline"}
                    onClick={() => setView("timeline")}
                    label="Timeline view"
                  >
                    <List className="size-4" />
                  </ViewButton>
                </div>

                {isFiltering ? (
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <RotateCcw className="size-3.5" /> Reset
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/50 pt-4">
              <CalendarClock className="mr-1 size-3.5 text-primary-glow" />
              <FilterPill active={year === "all"} onClick={() => setYear("all")}>
                All years
              </FilterPill>
              {Array.from(new Set([...futureYears, ...eventYears])).map((y) => (
                <FilterPill
                  key={y}
                  active={year === y}
                  onClick={() => setYear(y)}
                  count={perYear.get(y) ?? 0}
                >
                  {y}
                </FilterPill>
              ))}

              <span className="mx-2 hidden h-4 w-px bg-border sm:block" />

              <FilterPill active={category === "all"} onClick={() => setCategory("all")}>
                All types
              </FilterPill>
              {eventCategories.map((c) => (
                <FilterPill
                  key={c}
                  active={category === c}
                  onClick={() => setCategory(c)}
                  count={perCategory.get(c) ?? 0}
                >
                  {c}
                </FilterPill>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span className="text-primary-glow">{results.length}</span> of {events.length} events
          {needle ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="ml-3 inline-flex items-center gap-1 text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary-glow"
            >
              <X className="size-3" /> clear search
            </button>
          ) : null}
        </p>

        {results.length > 0 ? (
          view === "grid" ? (
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((e, i) => (
                <Reveal as="li" key={e.slug} delay={(i % 3) * 80}>
                  <EventCard event={e} index={i} onOpen={(ev) => setOpenSlug(ev.slug)} />
                </Reveal>
              ))}
            </ul>
          ) : (
            <div className="mt-10 space-y-12">
              {grouped.map(([groupYear, list]) => (
                <div key={groupYear}>
                  <div className="scrub-rise mb-5 flex items-center gap-4">
                    <span className="font-display text-2xl font-bold text-primary-glow">
                      {groupYear}
                    </span>
                    <span className="divider-glow scrub-line h-px flex-1" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {list.length} {list.length === 1 ? "event" : "events"}
                    </span>
                  </div>
                  <ol className="relative space-y-4 pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute bottom-2 left-1 top-2 w-px bg-gradient-to-b from-primary-glow/60 via-border to-transparent"
                    />
                    {list.map((e, i) => (
                      <li key={e.slug} className="relative">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute -left-[22px] top-9 size-2.5 rounded-full border-2 bg-background",
                            e.status === "upcoming" ? "border-accent" : "border-primary-glow/70",
                          )}
                        />
                        <Reveal delay={i * 70}>
                          <EventRow event={e} onOpen={(ev) => setOpenSlug(ev.slug)} />
                        </Reveal>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          )
        ) : (
          <Reveal className="glass-strong hero-gradient mt-8 rounded-[2rem] p-10 text-center sm:p-16">
            <div className="animate-float mx-auto grid size-16 place-items-center rounded-2xl border border-primary/30 bg-primary/10">
              {isFutureYear ? (
                <CalendarClock className="size-7 text-primary-glow" />
              ) : (
                <Search className="size-7 text-primary-glow" />
              )}
            </div>
            <p className="eyebrow mt-6">{isFutureYear ? `${year} calendar` : "No matches"}</p>
            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              <RiseText
                key={isFutureYear ? "soon" : "none"}
                text={isFutureYear ? "Coming soon" : "Nothing here yet"}
                step={60}
              />
            </h3>
            <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {isFutureYear
                ? "The calendar for this year is still being planned. Announcements go out on our socials and to members first."
                : "Try a different year, format or search term — or reset the filters to see everything."}
            </p>
            {isFiltering ? (
              <FloatButton onClick={reset} variant="glass" className="mt-7 px-6 py-3 text-sm">
                <RotateCcw className="size-4" /> Reset filters
              </FloatButton>
            ) : null}
          </Reveal>
        )}
      </Section>

      {/* ---------------- Calendar ---------------- */}
      <Section id="calendar">
        <SectionHeading
          eyebrow="On the calendar"
          title="Every date we have booked a room for."
          body="The whole run of sessions in one grid, so you can see what lands when. Click a highlighted day to open its brief — days that hold more than one session list them underneath."
        />
        <Reveal delay={160} className="mt-10">
          <EventCalendar events={results} onOpen={setOpenSlug} />
        </Reveal>
      </Section>

      {/* ---------------- Runbook ---------------- */}
      <Section>
        <Reveal className="scrub-fade">
          <p className="eyebrow">What you're signing up for</p>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
            <RiseText text="Every event goes through the same four stages." step={48} />
          </h2>
        </Reveal>
        <Reveal delay={200} className="mt-3 max-w-2xl">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            No mystery invites and no vibes-based scheduling. This is the loop a session travels
            from its first proposal to the notes we publish the week it ends.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RUNBOOK.map((phase, i) => (
            <Reveal
              as="li"
              key={phase.title}
              delay={i * 90}
              className="glass hover-float relative overflow-hidden rounded-2xl p-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-glow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-5 grid size-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary-glow">
                {phase.icon}
              </div>
              <h3 className="mt-5 font-display text-base font-bold">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------------- Scroll-lit statement ---------------- */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto w-full max-w-4xl">
          <ScrollWords
            className="text-balance font-display text-2xl font-bold leading-snug sm:text-4xl lg:text-5xl"
            text="Nobody ships alone. Juniors pair with seniors, domains borrow each other's people, and every session leaves its notes behind."
          />

          <div className="divider-glow scrub-line mt-14 h-px" />

          <Reveal delay={100} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MiniFact
              icon={<Flame className="size-4" />}
              value={`${upcomingEvents.length} upcoming`}
              label="Already committed for the next term, flagship fest included."
            />
            <MiniFact
              icon={<Trophy className="size-4" />}
              value={`${eventStats.past} archived`}
              label="Every past event keeps its winners, photos and write-up."
            />
            <MiniFact
              icon={<Users className="size-4" />}
              value="Any department"
              label="Teams form across branches — our best builds are mixed."
            />
            <MiniFact
              icon={<Camera className="size-4" />}
              value="Same-week photos"
              label="The floor set goes up before the next planning call, not next term."
            />
          </Reveal>
        </div>
      </section>

      <CTABanner
        eyebrow="Stay in the loop"
        title="Members hear about events first."
        body="Applications open twice a year. Join to get event invites, mentor access, and project teams."
      />

      <EventModal
        event={openEvent}
        onClose={() => setOpenSlug(null)}
        onStep={step}
        position={openIndex >= 0 ? { index: openIndex, total: results.length } : undefined}
      />
    </>
  );
}

function ViewButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={cn(
        "grid size-9 place-items-center rounded-lg transition-colors duration-300",
        active ? "bg-primary/20 text-primary-glow" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function MiniFact({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="glass lift cursor-glow rounded-2xl p-5">
      <span className="text-primary-glow">{icon}</span>
      <p className="mt-3 font-display text-lg font-bold text-foreground">{value}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}
