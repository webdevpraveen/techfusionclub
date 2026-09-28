import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CalendarPlus,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Trophy,
  Users,
  X,
} from "lucide-react";
import type { ClubEvent } from "@/data/events";
import { formatEventDate, relativeEventLabel } from "@/data/events";
import { cn } from "@/lib/utils";
import { SmartImage } from "./SmartImage";

const COMPACT = "yyyyMMdd";

function toStamp(iso: string, addDays = 0) {
  const d = new Date(iso);
  d.setDate(d.getDate() + addDays);
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
}

function addToCalendarUrl(event: ClubEvent) {
  // Google treats an all-day end date as exclusive, so push it one day ahead.
  const dates = `${toStamp(event.date)}/${toStamp(event.endDate ?? event.date, 1)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates,
    location: event.venue,
    details: event.summary,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

const medalTone = [
  "border-accent/45 text-accent",
  "text-muted-foreground",
  "border-primary/35 text-primary-glow",
];

export function EventModal({
  event,
  onClose,
  onStep,
  position,
}: {
  event: ClubEvent | null;
  onClose: () => void;
  onStep?: ((delta: number) => void) | undefined;
  position?: { index: number; total: number } | undefined;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const [activeShot, setActiveShot] = useState(0);
  const isOpen = event !== null;

  // Declared above the focus effect below, so the opener is captured while
  // focus still sits on the card. Keyed on open/closed alone: the parent
  // re-renders on every countdown tick, and a re-capture would yank focus back.
  useEffect(() => {
    if (!isOpen) return;
    restoreRef.current = document.activeElement as HTMLElement | null;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      restoreRef.current?.focus?.();
      restoreRef.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveShot(0);
    panelRef.current?.scrollTo({ top: 0 });
    closeRef.current?.focus();
  }, [event?.slug]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep?.(1);
      if (e.key === "ArrowLeft") onStep?.(-1);
      if (e.key !== "Tab") return;

      // Rendered inside <main>, so the background can't be made `inert` without
      // inerting the dialog too; `aria-modal` alone leaves Tab order uncaged.
      const panel = panelRef.current;
      if (!panel) return;
      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      const active = document.activeElement;
      if (!panel.contains(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onStep]);

  if (!event) return null;

  const shots = [event.cover, ...event.gallery.filter((g) => g !== event.cover)];
  const shot = shots[activeShot % shots.length] ?? event.cover;
  const visibleHighlights = event.highlights ?? [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={event.title}
      onClick={onClose}
      className="animate-fade-in fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md sm:items-center sm:p-6"
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong border-animated animate-pop-in relative my-auto max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close event details"
          className="glass absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full text-foreground transition-[transform,color] duration-300 hover:rotate-90 hover:text-primary-glow"
        >
          <X className="size-5" />
        </button>

        <div className="relative">
          <SmartImage
            key={shot}
            src={shot}
            alt={event.title}
            eager
            className="aspect-[16/9] w-full"
            imgClassName="opacity-90"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />

          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center gap-2 sm:left-7 sm:right-7">
            <span className="rounded-full border border-primary/40 bg-background/75 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-glow backdrop-blur">
              {event.category}
            </span>
            <span className="rounded-full border border-border bg-background/75 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur">
              {event.year}
            </span>
            {event.status === "upcoming" ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-background/75 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent backdrop-blur">
                <span className="animate-pulse-dot size-1.5 rounded-full bg-accent" />
                {relativeEventLabel(event.date)}
              </span>
            ) : null}
          </div>

          {shots.length > 1 ? (
            <div className="absolute bottom-4 right-5 hidden gap-1.5 sm:right-7 sm:flex">
              {shots.map((shot, i) => (
                <button
                  key={shot}
                  type="button"
                  onClick={() => setActiveShot(i)}
                  aria-label={`Show photo ${i + 1} of ${shots.length}`}
                  aria-pressed={i === activeShot % shots.length}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === activeShot % shots.length
                      ? "w-6 bg-primary-glow"
                      : "w-1.5 bg-border hover:bg-muted-foreground",
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-balance font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            {event.title}
          </h2>

          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4 text-primary-glow" />
              {formatEventDate(event)}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-primary-glow" />
              {event.venue}
            </li>
            {event.attendees ? (
              <li className="inline-flex items-center gap-1.5">
                <Users className="size-4 text-primary-glow" />
                {event.attendees} attendees
              </li>
            ) : null}
          </ul>

          <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {event.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {visibleHighlights.length > 0 ? (
            <div className="mt-7 border-t border-border/50 pt-5">
              <h3 className="eyebrow mb-3">Highlights</h3>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {visibleHighlights.map((h, i) => (
                  <li
                    key={h}
                    className="animate-rise flex items-start gap-2 text-sm leading-relaxed text-foreground/90 [animation-delay:var(--d)]"
                    style={{ "--d": `${100 + i * 90}ms` } as React.CSSProperties}
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {event.winners?.length ? (
            <div className="mt-7 border-t border-border/50 pt-5">
              <h3 className="eyebrow mb-4 flex items-center gap-2">
                <Trophy className="size-4 text-accent" /> Podium
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {event.winners.map((w, i) => (
                  <div
                    key={w.position}
                    className={cn(
                      "animate-rise glass rounded-2xl p-4 [animation-delay:var(--d)]",
                      medalTone[i % 3],
                      i === 0 && "sm:-translate-y-1",
                    )}
                    style={{ "--d": `${160 + i * 110}ms` } as React.CSSProperties}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                      {w.position} place
                    </span>
                    <p className="mt-1 font-display text-sm font-bold text-foreground">{w.name}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                      {w.project}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap gap-1.5 border-t border-border/50 pt-5">
            {event.domains.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {event.registerUrl ? (
              <a
                href={event.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group pulse-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Register now <ExternalLink className="size-3.5" />
              </a>
            ) : null}

            <a
              href={addToCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
            >
              <CalendarPlus className="size-4" /> Add to calendar
            </a>

            {onStep && position ? (
              <div className="ml-auto flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {position.index + 1} / {position.total}
                </span>
                <button
                  type="button"
                  onClick={() => onStep(-1)}
                  aria-label="Previous event"
                  className="glass grid size-10 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onStep(1)}
                  aria-label="Next event"
                  className="glass grid size-10 place-items-center rounded-full text-foreground transition-colors hover:text-primary-glow"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
