import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useCursorGlow } from "@/lib/motion";

/**
 * Card shell with a soft radial glow that follows the cursor (desktop pointers
 * only — the hook no-ops on touch devices and under prefers-reduced-motion).
 */
export function GlowCard({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const ref = useCursorGlow<HTMLDivElement>();
  return (
    <As ref={ref} className={cn("cursor-glow", className)}>
      {children}
    </As>
  );
}
