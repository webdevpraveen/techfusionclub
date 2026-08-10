import { cn } from "@/lib/utils";
import { useCountUp } from "@/lib/motion";

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  className?: string;
}) {
  const { ref, value: current, settled } = useCountUp(value);
  const formattedVal = prefix && current < 10 ? `${prefix}${current}` : current;

  return (
    <div className={cn("text-center sm:text-left", className)}>
      <div
        className={cn(
          "font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
          settled && "animate-flicker",
        )}
      >
        <span ref={ref}>{formattedVal}</span>
        <span className="text-primary-glow">{suffix}</span>
      </div>

      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
