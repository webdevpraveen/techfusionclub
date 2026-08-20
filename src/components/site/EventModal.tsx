import { X, CalendarDays, MapPin, Users, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import type { ClubEvent } from "@/data/events";
import { formatEventDate } from "@/data/events";

interface EventModalProps {
  event: ClubEvent | null;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md animate-rise">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-strong border-animated rounded-3xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full glass hover:bg-surface-strong text-muted-foreground hover:text-foreground transition-colors"
          title="Close Modal"
        >
          <X className="size-5" />
        </button>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl mb-6">
          <img src={event.cover} alt={event.title} className="size-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-primary/40 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-glow backdrop-blur">
              {event.category}
            </span>
            {event.status === "upcoming" && (
              <span className="rounded-full border border-accent/40 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent backdrop-blur">
                Upcoming
              </span>
            )}
          </div>
        </div>

        {/* Event Header Info */}
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
          {event.title}
        </h2>

        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          <li className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-primary-glow" />
            {formatEventDate(event)}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-primary-glow" />
            {event.venue}
          </li>
          {event.attendees && (
            <li className="inline-flex items-center gap-1.5">
              <Users className="size-4 text-primary-glow" />
              {event.attendees} Attendees
            </li>
          )}
        </ul>

        {/* Description Paragraphs */}
        <div className="mt-6 space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {event.description.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Highlights */}
        {event.highlights && event.highlights.length > 0 && (
          <div className="mt-6 pt-4 border-t border-border/50">
            <h4 className="font-mono text-xs uppercase tracking-widest text-primary-glow font-bold mb-3">
              Event Highlights
            </h4>
            <ul className="space-y-2">
              {event.highlights.map((h, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90 font-mono"
                >
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Winners */}
        {event.winners && event.winners.length > 0 && (
          <div className="mt-6 pt-4 border-t border-border/50">
            <h4 className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold mb-3 flex items-center gap-1.5">
              <Award className="size-4" /> Podium Winners
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {event.winners.map((w) => (
                <div key={w.position} className="glass p-3 rounded-xl">
                  <span className="font-mono text-xs text-amber-400 font-bold">
                    {w.position} Place
                  </span>
                  <p className="font-bold text-sm text-foreground mt-0.5">{w.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{w.project}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Domains Badges */}
        <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-wrap gap-1.5">
            {event.domains.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {d}
              </span>
            ))}
          </div>

          {event.registerUrl && (
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Register Now <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
