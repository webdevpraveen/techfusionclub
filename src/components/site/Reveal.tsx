import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </As>
  );
}
