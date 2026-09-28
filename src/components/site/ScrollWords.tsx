import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Statement text that lights up word-by-word as the reader scrolls past it.
 * Classes are toggled directly on the word nodes so a scroll frame never
 * re-renders React.
 */
export function ScrollWords({
  text,
  className,
  startAt = 0.82,
  endAt = 0.3,
}: {
  text: string;
  className?: string;
  /** Viewport fraction where the first word lights up. */
  startAt?: number;
  /** Viewport fraction where the last word lights up. */
  endAt?: number;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-lit"));
      return;
    }

    let frame = 0;
    const apply = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * startAt;
      const end = vh * endAt;
      const t = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const lit = Math.round(t * nodes.length);
      nodes.forEach((node, i) => node.classList.toggle("is-lit", i < lit));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [text, startAt, endAt]);

  return (
    <p ref={ref} className={cn(className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="contents">
          <span data-word className="lit-word">
            {word}
          </span>{" "}
        </span>
      ))}
    </p>
  );
}
