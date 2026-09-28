import { useCountdown } from "@/lib/motion";
import { cn } from "@/lib/utils";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Live countdown to an event start. Renders a reserved-height placeholder on the
 * server pass so the layout doesn't shift when the timer hydrates.
 */
export function Countdown({ to, className }: { to: string; className?: string }) {
  const countdown = useCountdown(to);

  if (!countdown) {
    return <div className={cn("h-[4.5rem] w-full max-w-80", className)} aria-hidden="true" />;
  }

  if (!countdown.isLive) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2",
          className,
        )}
      >
        <span className="animate-pulse-dot size-2 rounded-full bg-accent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Live now
        </span>
      </div>
    );
  }

  const parts = [
    { value: countdown.days, label: "Days" },
    { value: countdown.hours, label: "Hrs" },
    { value: countdown.minutes, label: "Min" },
    { value: countdown.seconds, label: "Sec" },
  ];

  return (
    <div className={cn("flex items-center gap-1.5 sm:gap-2.5", className)} role="timer">
      {parts.map((part, i) => (
        <div key={part.label} className="contents">
          <div className="glass flex min-w-[3.6rem] flex-col items-center rounded-2xl px-2.5 py-2 sm:min-w-[4.25rem] sm:px-3">
            <span className="font-display text-2xl font-bold tabular-nums leading-tight text-foreground sm:text-3xl">
              <span key={part.value} className="animate-tick inline-block">
                {pad(part.value)}
              </span>
            </span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              {part.label}
            </span>
          </div>
          {i < parts.length - 1 ? (
            <span className="font-display text-lg text-primary-glow/50 sm:text-xl">:</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
