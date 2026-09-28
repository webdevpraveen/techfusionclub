import type { CSSProperties } from "react";
import { useReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Body copy that rises into focus word by word, blurring out as it lifts.
 */
export function RiseText({
  text,
  className,
  wordClassName,
  step = 32,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  step?: number;
}) {
  const ref = useReveal<HTMLSpanElement>();
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <span ref={ref} className={cn("rise", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="contents">
          <span
            className={cn("rise-word", wordClassName)}
            style={{ "--rise-delay": `${i * step}ms` } as CSSProperties}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
