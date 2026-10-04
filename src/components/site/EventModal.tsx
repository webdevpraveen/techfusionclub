import { useState } from "react";
import {
  X,
  CalendarDays,
  MapPin,
  Users,
  Award,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  AlertCircle,
} from "lucide-react";
import type { ClubEvent } from "@/data/events";
import { formatEventDate } from "@/data/events";

interface EventModalProps {
  event: (ClubEvent & { id?: string }) | null;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  const [mode, setMode] = useState<"details" | "register">("details");

  if (!event) return null;

  const handleClose = () => {
    onClose();
    // Reset state slightly after close animation
    setTimeout(() => {
      setMode("details");
    }, 300);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Event details: ${event.title}`}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-strong border-t sm:border border-border/50 rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl animate-in slide-in-from-bottom sm:zoom-in-95 duration-300 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] sm:pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Grab handle for mobile */}
        <div className="mx-auto -mt-2 mb-4 h-1.5 w-12 rounded-full bg-muted-foreground/30 sm:hidden" />
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 p-2 rounded-full bg-background/50 backdrop-blur border border-border/50 hover:bg-surface-strong text-muted-foreground hover:text-foreground transition-all z-10"
          title="Close"
        >
          <X className="size-5" />
        </button>

        {mode === "details" && (
          <div className="animate-in slide-in-from-left-4 fade-in duration-300">
            {/* Cover Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl mb-6">
              <img
                src={event.cover}
                alt={event.title}
                className="size-full object-cover opacity-90"
              />
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
              {(event.description || []).map((p, idx) => (
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

            {/* Footer actions */}
            <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {(event.domains || []).map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {event.status === "upcoming" ? (
                event.googleFormUrl ? (
                  <button
                    onClick={() => setMode("register")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    Register Now <ArrowRight className="size-4" />
                  </button>
                ) : event.registerUrl ? (
                  <a
                    href={event.registerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    Register Now <ExternalLink className="size-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="rounded-full bg-surface border border-border px-6 py-2.5 text-sm font-semibold text-muted-foreground cursor-not-allowed"
                  >
                    Opening Soon
                  </button>
                )
              ) : (
                <button
                  disabled
                  className="rounded-full bg-surface border border-border px-6 py-2.5 text-sm font-semibold text-muted-foreground cursor-not-allowed"
                >
                  Registration Closed
                </button>
              )}
            </div>
          </div>
        )}

        {mode === "register" &&
          event.googleFormUrl &&
          event.googleFormUrl.startsWith("https://") && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-300">
              <div className="flex items-center mb-6">
                <button
                  onClick={() => setMode("details")}
                  className="inline-flex items-center text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors bg-surface-strong px-3 py-1.5 rounded-full"
                >
                  <ArrowLeft className="mr-2 size-3.5" /> Back to details
                </button>
              </div>
              <div
                className="w-full rounded-xl overflow-hidden bg-white shadow-inner relative"
                style={{ height: "70vh", minHeight: "500px" }}
              >
                <iframe
                  src={
                    event.googleFormUrl.includes("?")
                      ? event.googleFormUrl + "&embedded=true"
                      : event.googleFormUrl + "?embedded=true"
                  }
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Registration Form"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  className="absolute inset-0 w-full h-full border-none"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
