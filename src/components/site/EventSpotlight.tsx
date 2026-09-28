import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MousePointerClick,
} from "lucide-react";
import type { ClubEvent } from "@/data/events";
import { formatEventDate } from "@/data/events";
import { useParallax, useCursorGlow } from "@/lib/motion";
import { Countdown } from "./Countdown";
import { FloatButton } from "./FloatButton";
import { Reveal } from "./Reveal";
import { SmartImage } from "./SmartImage";

const BRACKETS = [
  "-left-px -top-px rounded-tl-[1.55rem] border-l-2 border-t-2",
  "-right-px -top-px rounded-tr-[1.55rem] border-r-2 border-t-2",
  "-bottom-px -left-px rounded-bl-[1.55rem] border-b-2 border-l-2",
  "-bottom-px -right-px rounded-br-[1.55rem] border-b-2 border-r-2",
] as const;

/**
 * The flagship "what's next" block. Parallax + ken-burns on the cover, a live
 * countdown, an inner frame with a light running its perimeter, and the whole
 * box lifts on hover. Both the artwork and the brief button open the popup.
 */
export function EventSpotlight({ event, onOpen }: { event: ClubEvent; onOpen: () => void }) {
  const coverRef = useParallax<HTMLDivElement>(44);
  const glowRef = useCursorGlow<HTMLElement>();

  return (
    <Reveal>
      <article
        ref={glowRef}
        className="glass-strong border-animated hover-float cursor-glow relative overflow-hidden rounded-[2rem]"
      >
        {/* Ambient drifting glow */}
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/25 blur-3xl"
        />

        <div className="relative grid lg:grid-cols-[1.05fr_1fr]">
          <button
            type="button"
            onClick={onOpen}
            aria-label={`Open the full brief for ${event.title}`}
            className="group/media relative block w-full cursor-pointer overflow-hidden text-left"
          >
            <div ref={coverRef} className="absolute -inset-x-8 -inset-y-10 will-change-transform">
              <SmartImage
                src={event.cover}
                alt={event.title}
                eager
                kenBurns
                className="size-full"
                imgClassName="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-card/20 lg:to-card" />
            </div>

            {/* Fixed-height spacer keeps the column sized while the image parallaxes */}
            <div className="relative min-h-[16rem] sm:min-h-[22rem] lg:min-h-[30rem]" />

            <span className="glass absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] opacity-0 transition-all duration-500 group-hover/media:-bottom-1 group-hover/media:opacity-100 sm:left-auto sm:right-7 sm:translate-x-0">
              <MousePointerClick className="size-3" /> Read the brief
            </span>
          </button>

          <div className="relative flex flex-col justify-center gap-6 p-7 sm:p-10 lg:p-12">
            <div>
              <h2 className="text-balance font-display text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
                {event.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {event.summary}
              </p>
              {event.description[0] ? (
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground/85">
                  {event.description[0]}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary-glow" /> {event.venue}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5 text-primary-glow" />
                {formatEventDate(event)}
              </span>
            </div>

            {event.status === "upcoming" ? (
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Doors open in
                </p>
                <Countdown to={event.date} />
              </div>
            ) : null}

            {event.highlights?.length ? (
              <ul className="space-y-2.5 border-t border-border/60 pt-6">
                {event.highlights.map((h, i) => (
                  <Reveal as="li" key={h} delay={i * 90} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                    <span className="text-sm leading-relaxed text-foreground/90">{h}</span>
                  </Reveal>
                ))}
              </ul>
            ) : null}

            <div className="flex flex-wrap gap-3 pt-1">
              <FloatButton
                onClick={onOpen}
                className="px-6 py-3 text-sm"
                variant={event.registerUrl ? "glass" : "solid"}
              >
                View full brief
                <ArrowRight className="size-4" />
              </FloatButton>
              {event.registerUrl ? (
                <FloatButton
                  href={event.registerUrl}
                  external
                  className="px-6 py-3 text-sm"
                  variant="solid"
                >
                  Register now
                  <ExternalLink className="size-3.5" />
                </FloatButton>
              ) : null}
            </div>
          </div>
        </div>

        {/* Box-in-box: hairline frame with a light running its perimeter. */}
        <div aria-hidden="true" className="corner-frame">
          {BRACKETS.map((b) => (
            <span key={b} className={`corner-bracket border-primary-glow/70 ${b}`} />
          ))}
        </div>
      </article>
    </Reveal>
  );
}
