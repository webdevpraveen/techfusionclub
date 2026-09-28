import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Mic,
  Trophy,
  Users,
  WandSparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ClubEvent, EventCategory } from "@/data/events";
import { formatEventDate, relativeEventLabel } from "@/data/events";
import { cn } from "@/lib/utils";
import { useCursorGlow, useTiltGlow } from "@/lib/motion";
import { SmartImage } from "./SmartImage";

const categoryIcon: Record<EventCategory, LucideIcon> = {
  Workshop: WandSparkles,
  Hackathon: Zap,
  Seminar: Mic,
  Competition: Trophy,
};

/**
 * Poster card for the events grid. Tilts toward the cursor, breathes the cover
 * on hover, and opens the full brief when activated.
 */
export function EventCard({
  event,
  index = 0,
  onOpen,
}: {
  event: ClubEvent;
  index?: number;
  onOpen?: (event: ClubEvent) => void;
}) {
  const ref = useTiltGlow<HTMLElement>();
  const Icon = categoryIcon[event.category];

  return (
    <div className="tilt-scene h-full">
      <article
        ref={ref}
        className="tilt-card glass cursor-glow group relative flex h-full flex-col overflow-hidden rounded-3xl"
      >
        <button
          type="button"
          onClick={() => onOpen?.(event)}
          className="relative z-10 flex h-full flex-col text-left"
          aria-label={`View the full brief for ${event.title}`}
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <SmartImage
              src={event.cover}
              alt={event.title}
              eager={index < 3}
              className="size-full"
              imgClassName="opacity-85 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />

            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-glow backdrop-blur">
                <Icon className="size-3" />
                {event.category}
              </span>
              {event.status === "upcoming" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent backdrop-blur">
                  <span className="animate-pulse-dot size-1.5 rounded-full bg-accent" />
                  Upcoming
                </span>
              ) : null}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
              <span className="inline-flex items-center gap-1 rounded-full bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-glow backdrop-blur">
                Full brief <ArrowUpRight className="size-3" />
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-balance font-display text-xl font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary-glow">
              {event.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {event.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {event.domains.slice(0, 2).map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {d}
                </span>
              ))}
              {event.domains.length > 2 ? (
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                  +{event.domains.length - 2}
                </span>
              ) : null}
            </div>

            <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-border/50 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <li className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5 text-primary-glow" />
                {formatEventDate(event)}
              </li>
              <li className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary-glow" />
                {event.venue}
              </li>
              {event.attendees ? (
                <li className="inline-flex items-center gap-1.5">
                  <Users className="size-3.5 text-primary-glow" />
                  {event.attendees} attended
                </li>
              ) : null}
            </ul>
          </div>
        </button>
      </article>
    </div>
  );
}

/**
 * Compact horizontal entry for the timeline view, where events stack along a
 * glowing rail ordered by date.
 */
export function EventRow({
  event,
  onOpen,
}: {
  event: ClubEvent;
  onOpen?: (event: ClubEvent) => void;
}) {
  const glowRef = useCursorGlow<HTMLElement>();
  const Icon = categoryIcon[event.category];

  return (
    <article ref={glowRef} className="cursor-glow relative">
      <button
        type="button"
        onClick={() => onOpen?.(event)}
        aria-label={`View the full brief for ${event.title}`}
        className="glass relative z-10 flex w-full flex-col gap-4 overflow-hidden rounded-2xl p-4 text-left transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-primary/50 sm:flex-row sm:items-center"
      >
        <SmartImage
          src={event.cover}
          alt={event.title}
          className="min-h-28 w-full shrink-0 rounded-xl sm:h-20 sm:w-32"
          imgClassName="opacity-85 transition-transform duration-700 group-hover:scale-110"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-glow">
              <Icon className="size-3" /> {event.category}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {formatEventDate(event)}
            </span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]",
                event.status === "upcoming"
                  ? "border border-accent/40 bg-accent/10 text-accent"
                  : "border border-border bg-surface text-muted-foreground",
              )}
            >
              {event.status === "upcoming"
                ? relativeEventLabel(event.date)
                : `${event.year} archive`}
            </span>
          </div>
          <h3 className="mt-1.5 truncate font-display text-lg font-bold text-foreground transition-colors duration-300 hover:text-primary-glow">
            {event.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {event.summary}
          </p>
        </div>

        <ArrowUpRight className="hidden size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-glow sm:block" />
      </button>
    </article>
  );
}

export function FilterPill({
  active,
  children,
  onClick,
  count,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  count?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "sheen-hover relative inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-[background-color,border-color,color,transform] duration-300",
        active
          ? "border-primary/60 bg-primary/15 text-primary-glow"
          : "border-border bg-surface text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
      {typeof count === "number" ? (
        <span
          className={cn(
            "rounded-full px-1.5 py-px text-[9px] tabular-nums",
            active ? "bg-primary/25 text-primary-glow" : "bg-border/60 text-muted-foreground",
          )}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
}
