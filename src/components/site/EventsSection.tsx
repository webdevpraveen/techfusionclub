import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { featuredEvent } from "@/data/events";

type EventItem = {
  id: string;
  number: string;
  date: string;
  title: string;
  category: string;
  description: string;
  venue: string;
  cover?: string;
  externalLink?: string;
};

const visibleEvents: EventItem[] = [
  {
    id: "viveka-6",
    number: "01",
    date: "20–22 MAR 2027",
    title: "Viveka 6.0 — Annual Tech Fest 2027",
    category: "ANNUAL TECH FEST",
    description: featuredEvent.summary,
    venue: featuredEvent.venue,
    cover: featuredEvent.cover,
    externalLink: "https://viveka.techfusion.club",
  },
];

export function EventsSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("event-card-visible");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Featured</p>

            <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              What's next{" "}
              <span className="text-primary-glow">on the calendar.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Our flagship fest and upcoming technical experiences for
              students across every department.
            </p>
          </div>

          <Link
            to="/events"
            className="glass inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
          >
            All events
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[1.15rem] top-0 hidden h-full w-px bg-gradient-to-b from-primary-glow via-primary-glow/40 to-transparent md:block" />

          <div className="space-y-12">
            {visibleEvents.map((event, index) => (
              <div
                key={event.id}
                ref={(element) => {
                  if (element) {
                    cardsRef.current[index] = element;
                  }
                }}
                className="event-timeline-card relative pl-0 opacity-0 md:pl-16"
                style={
                  {
                    "--event-delay": `${index * 120}ms`,
                  } as React.CSSProperties
                }
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-8 hidden size-10 items-center justify-center rounded-full border border-primary-glow/50 bg-background font-mono text-xs font-bold text-primary-glow shadow-[0_0_25px_rgba(227,59,36,0.2)] md:flex">
                  {event.number}
                </div>

                {/* EVENT CARD */}
                <article className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary-glow/40 hover:shadow-[0_20px_70px_rgba(227,59,36,0.12)]">
                  <div className="grid lg:grid-cols-[1.05fr_1fr]">
                    {/* VISUAL */}
                    <div className="relative min-h-[20rem] overflow-hidden lg:min-h-[30rem]">
                      {event.cover ? (
                        <img
                          src={event.cover}
                          alt={event.title}
                          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="size-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                      <div className="absolute bottom-6 left-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary-glow">
                          NEXT EVENT
                        </p>

                        <p className="mt-2 font-mono text-xs tracking-[0.15em] text-white/70">
                          {event.date}
                        </p>
                      </div>

                      {/* Decorative number */}
                      <div className="absolute right-6 top-6 font-display text-7xl font-bold text-white/10">
                        {event.number}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                      <div>
                        <span className="inline-flex rounded-full border border-primary-glow/30 bg-primary-glow/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-glow">
                          {event.category}
                        </span>

                        <h3 className="mt-6 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
                          {event.title}
                        </h3>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                          {event.description}
                        </p>

                        <div className="mt-8 space-y-4">
                          <div className="flex items-start gap-3 text-sm">
                            <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                            <span>{event.date}</span>
                          </div>

                          <div className="flex items-start gap-3 text-sm">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                            <span>{event.venue}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-10 flex flex-wrap gap-3">
                        <Link
                          to="/events"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                        >
                          Event details
                          <ArrowRight className="size-4" />
                        </Link>

                        {event.externalLink && (
                          <a
                            href={event.externalLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary-glow/50 hover:text-primary-glow"
                          >
                            Viveka 6.0 Site
                            <ArrowUpRight className="size-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .event-timeline-card {
          transform: translateY(45px);
          transition:
            opacity 800ms cubic-bezier(.16, 1, .3, 1) var(--event-delay),
            transform 800ms cubic-bezier(.16, 1, .3, 1) var(--event-delay);
        }

        .event-timeline-card.event-card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .event-timeline-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}