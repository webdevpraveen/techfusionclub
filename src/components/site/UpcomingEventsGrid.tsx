import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { GlowCard } from "./GlowCard";
import { CalendarDays, ArrowRight, Users } from "lucide-react";
import type { ClubEvent } from "@/data/events";
import { formatEventDate } from "@/data/events";
import { getEvents } from "@/lib/db";
import { Reveal } from "./Reveal";

/**
 * Upcoming events grid — shows the next 3 events in card format.
 * Fetches from Firebase; renders nothing if no upcoming events exist.
 */
export function UpcomingEventsGrid() {
  const [upcoming, setUpcoming] = useState<ClubEvent[]>([]);

  useEffect(() => {
    getEvents().then((events) => {
      setUpcoming(events.filter((e) => e.status === "upcoming").slice(0, 3));
    });
  }, []);

  if (upcoming.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {upcoming.map((event, i) => (
        <Reveal key={event.slug} delay={i * 80}>
          <GlowCard className="glass lift group flex h-full flex-col overflow-hidden rounded-2xl">
            {/* Cover Image */}
            <div className="relative h-48 overflow-hidden bg-surface">
              <img
                src={event.cover || "/images/events/default-cover.jpg"}
                alt={event.title || "Event"}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

              {/* Category Badge */}
              <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-card/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-glow backdrop-blur-sm">
                {event.category || "Workshop"}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary-glow">
                  {event.title || "Untitled Event"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {event.summary || ""}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/50 pt-4">
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                  <CalendarDays className="size-3.5 text-primary-glow" />
                  {formatEventDate(event)}
                </div>
                {event.attendees && (
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                    <Users className="size-3.5" />
                    {event.attendees}+
                  </div>
                )}
              </div>
            </div>
          </GlowCard>
        </Reveal>
      ))}
    </div>
  );
}
