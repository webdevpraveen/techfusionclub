import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useCursorGlow } from "@/lib/motion";

/** Spread across the pill so the sparks don't march in a single file. */
const MOTES = [
  { left: "13%", delay: "0ms", drift: "-11px" },
  { left: "29%", delay: "260ms", drift: "7px" },
  { left: "46%", delay: "120ms", drift: "-5px" },
  { left: "62%", delay: "420ms", drift: "10px" },
  { left: "78%", delay: "60ms", drift: "-8px" },
  { left: "90%", delay: "330ms", drift: "4px" },
] as const;

/**
 * Call-to-action with a cursor-tracked glow and sparks that lift off the
 * surface while the pointer is over it. Everything is CSS-driven and gated on
 * :hover, so nothing animates on touch or under reduced motion.
 */
export function FloatButton({
  children,
  href,
  onClick,
  variant = "solid",
  external = false,
  className,
}: {
  children: ReactNode;
  href?: string | undefined;
  onClick?: (() => void) | undefined;
  variant?: "solid" | "glass";
  external?: boolean;
  className?: string;
}) {
  const linkRef = useCursorGlow<HTMLAnchorElement>();
  const buttonRef = useCursorGlow<HTMLButtonElement>();

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <span aria-hidden="true" className="float-motes">
        {MOTES.map((m) => (
          <span
            key={m.left}
            className="float-mote"
            style={
              {
                "--mote-left": m.left,
                "--mote-delay": m.delay,
                "--mote-drift": m.drift,
              } as CSSProperties
            }
          />
        ))}
      </span>
    </>
  );

  const classes = cn(
    "cursor-glow group relative inline-flex items-center justify-center rounded-full font-semibold",
    variant === "solid"
      ? "pulse-glow sheen-hover bg-primary text-primary-foreground"
      : "glass text-foreground",
    className,
  );

  if (href) {
    return (
      <a
        ref={linkRef}
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" ref={buttonRef} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
