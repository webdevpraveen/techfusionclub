import { CalendarDays, MapPin, Users } from "lucide-react";
import type { ClubEvent } from "@/data/events";
import { formatEventDate } from "@/data/events";
import { cn } from "@/lib/utils";
import { useCursorGlow } from "@/lib/motion";

export function EventCard({
  event,
  index = 0,
}: {
  event: ClubEvent;
  index?: number;
}) {
  const glowRef = useCursorGlow<HTMLElement>();

  return (
    <article
      ref={glowRef}
      className="glass lift cursor-glow group relative overflow-hidden rounded-3xl"
    >
      <div className="relative z-10 block outline-none">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={event.cover}
            alt={event.title}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            className="size-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-primary/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-glow backdrop-blur">
              {event.category}
            </span>
            {event.status === "upcoming" ? (
              <span className="rounded-full border border-accent/40 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent backdrop-blur">
                Upcoming
              </span>
            ) : null}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-balance font-display text-xl font-bold leading-snug text-foreground">
            {event.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {event.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground pt-4 border-t border-border/50">
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
      </div>
    </article>
  );
}

export function FilterPill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
        active
          ? "border-primary/60 bg-primary/15 text-primary-glow"
          : "border-border bg-surface text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
