import { useEffect, useId, useState } from "react";
import { Github, Instagram, Linkedin, Link2, RotateCcw } from "lucide-react";
import type { Member } from "@/data/members";
import { club } from "@/data/club";
import { cn } from "@/lib/utils";
import { useCursorGlow } from "@/lib/motion";


const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  portfolio: Link2,
} as const;

const socialLabels = {
  linkedin: "LinkedIn",
  github: "GitHub",
  instagram: "Instagram",
  portfolio: "Portfolio",
} as const;

/**
 * Flip-card member badge. Front shows the photo, name and designation;
 * activating the card flips it to a futuristic access-badge back face.
 * Works with click, tap, Enter and Space — never hover-only.
 */
export function MemberCard({
  member,
  size = "md",
  index = 0,
}: {
  member: Member;
  size?: "lg" | "md" | "sm";
  index?: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const backId = useId();

  useEffect(() => {
    if (!flipped) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFlipped(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipped]);

  const heights = {
    lg: "h-[30rem] sm:h-[34rem]",
    md: "h-[26rem] sm:h-[28rem]",
    sm: "h-[22rem]",
  } as const;

  const glowRef = useCursorGlow<HTMLDivElement>();

  return (
    <div
      ref={glowRef}
      className={cn("group cursor-glow rounded-3xl", heights[size])}
      style={{ perspective: "1400px" }}
    >

      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-pressed={flipped}
        aria-expanded={flipped}
        aria-controls={backId}
        aria-label={`${member.name}, ${member.designation}. ${flipped ? "Hide" : "Show"} member ID details`}
        className="relative block size-full rounded-3xl text-left outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div
          className="relative size-full transition-transform duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : undefined,
          }}
        >
          {/* ---------- Front ---------- */}
          <div className="flip-face glass overflow-hidden rounded-3xl">
            <img
              src={member.photo}
              alt={`${member.name}, ${member.designation}`}
              loading={index < 3 ? "eager" : "lazy"}
              decoding="async"
              className="size-full object-cover opacity-90 saturate-[0.7] transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="eyebrow">{member.designation}</p>
              <h3 className="mt-2 font-display text-xl font-bold leading-tight sm:text-2xl">
                {member.name}
              </h3>
              <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse-dot" />
                Tap to reveal ID
              </p>
            </div>
          </div>

          {/* ---------- Back: access badge ---------- */}
          <div
            id={backId}
            className="flip-face glass-strong overflow-hidden rounded-3xl border-primary/40 p-5 sm:p-6"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
              <div className="h-16 w-full bg-gradient-to-b from-transparent via-primary/25 to-transparent blur-md animate-scan" />
            </div>

            <div className="relative flex size-full flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-glow">
                    {club.name}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Member access badge
                  </p>
                </div>
                <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10">
                  <span className="font-display text-xs font-bold text-primary-glow">
                    {club.initials}
                  </span>
                </div>
              </div>

              <div className="divider-glow my-4" />

              <h3 className="font-display text-lg font-bold leading-tight sm:text-xl">
                {member.fullName}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-glow">{member.designation}</p>

              <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    Domain
                  </dt>
                  <dd className="mt-1 font-medium">{member.domain}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    Branch
                  </dt>
                  <dd className="mt-1 font-medium">{member.branch}</dd>
                </div>
              </dl>

              <p className="mt-4 border-l-2 border-primary/40 pl-3 text-xs leading-relaxed text-muted-foreground">
                {member.bio}
              </p>

              <div className="mt-auto pt-5">
                <div className="flex flex-wrap items-center gap-2">
                  {Object.entries(member.socials).map(([key, href]) => {
                    const Icon = socialIcons[key as keyof typeof socialIcons];
                    if (!Icon || !href) return null;
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        tabIndex={flipped ? 0 : -1}
                        aria-label={`${member.name} on ${socialLabels[key as keyof typeof socialLabels]}`}
                        onClick={(e) => e.stopPropagation()}
                        className="grid size-9 place-items-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary-glow"
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}
                  <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    <RotateCcw className="size-3" /> Flip back
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="h-6 flex-1 rounded-sm bg-[repeating-linear-gradient(90deg,currentColor_0_2px,transparent_2px_5px)] text-primary-glow/35"
                  />
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
                    {member.accessCode}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
