import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, X } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
};

type Team = {
  number: string;
  name: string;
  description: string;
  details: string;
  responsibilities: string[];
  members: TeamMember[];
};

const teams: Team[] = [
  {
    number: "01",
    name: "Management Team",
    description:
      "Leads the club's operations, coordinates teams, manages planning, and keeps every TFC initiative moving in the right direction.",
    details:
      "The Management Team keeps Tech Fusion Club organized and connected. From planning initiatives to coordinating different teams, they make sure ideas move from discussion to execution.",
    responsibilities: [
      "Club operations and coordination",
      "Event planning and execution",
      "Team coordination",
      "Internal communication",
    ],
    members: [
      { name: "Member Name", role: "Team Lead" },
      { name: "Member Name", role: "Management Member" },
      { name: "Member Name", role: "Management Member" },
    ],
  },

  {
    number: "02",
    name: "Documentation Team",
    description:
      "Captures and organizes TFC's events, achievements, reports, resources, and important technical documentation.",
    details:
      "The Documentation Team preserves the journey of TFC. They maintain records, event reports, technical resources, and important information so that every achievement becomes part of the club's history.",
    responsibilities: [
      "Event documentation",
      "Reports and records",
      "Technical documentation",
      "Club archives",
    ],
    members: [
      { name: "Member Name", role: "Team Lead" },
      { name: "Member Name", role: "Documentation Member" },
      { name: "Member Name", role: "Documentation Member" },
    ],
  },

  {
    number: "03",
    name: "Media Team",
    description:
      "Builds TFC's digital presence through photography, videography, social media, event coverage, and visual storytelling.",
    details:
      "The Media Team tells the story of TFC through visuals. They cover events, create digital content, manage media assets, and help the club communicate its work to the wider student community.",
    responsibilities: [
      "Photography and videography",
      "Social media content",
      "Event coverage",
      "Digital storytelling",
    ],
    members: [
      { name: "Member Name", role: "Team Lead" },
      { name: "Member Name", role: "Media Member" },
      { name: "Member Name", role: "Media Member" },
    ],
  },

  {
    number: "04",
    name: "WebOps Team",
    description:
      "Builds, maintains, and manages TFC's web platforms, digital systems, deployments, and online technical infrastructure.",
    details:
      "The WebOps Team powers TFC's digital presence. From websites and deployments to maintaining online platforms, the team works behind the scenes to keep TFC's digital systems reliable and up to date.",
    responsibilities: [
      "Website development",
      "Deployment and hosting",
      "Web platform maintenance",
      "Digital infrastructure",
    ],
    members: [
      { name: "Member Name", role: "Team Lead" },
      { name: "Member Name", role: "WebOps Member" },
      { name: "Member Name", role: "WebOps Member" },
    ],
  },

  {
    number: "05",
    name: "Creative Team",
    description:
      "Turns ideas into visuals through posters, graphics, branding, UI concepts, and creative content for TFC initiatives.",
    details:
      "The Creative Team gives TFC its visual identity. They transform concepts into posters, graphics, branding materials, interfaces, and other creative experiences used across club initiatives.",
    responsibilities: [
      "Graphic design",
      "Poster and branding design",
      "UI and visual concepts",
      "Creative campaigns",
    ],
    members: [
      { name: "Member Name", role: "Team Lead" },
      { name: "Member Name", role: "Creative Member" },
      { name: "Member Name", role: "Creative Member" },
    ],
  },

  {
    number: "06",
    name: "Robotics Team",
    description:
      "Explores robotics, automation, embedded systems, and hardware-based projects through hands-on experimentation and teamwork.",
    details:
      "The Robotics Team explores the intersection of hardware and software. Members work on robotics, automation, embedded systems, and practical hardware projects through experimentation and collaboration.",
    responsibilities: [
      "Robotics projects",
      "Embedded systems",
      "Automation",
      "Hardware experimentation",
    ],
    members: [
      { name: "Member Name", role: "Team Lead" },
      { name: "Member Name", role: "Robotics Member" },
      { name: "Member Name", role: "Robotics Member" },
    ],
  },
];

export function TeamsSection() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("team-card-visible");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedTeam) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTeam(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTeam]);

  const scrollNext = () => {
    railRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =========================================================
          TEAMS SECTION
      ========================================================= */}

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-[1600px]">
          {/* HEADER */}

          <div className="px-6 sm:px-8 lg:px-12">
            <p className="eyebrow">Our Teams</p>

            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="max-w-4xl font-display text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-7xl">
                  Six teams.
                  <br />

                  <span className="text-primary-glow">
                    One technical community.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Different responsibilities, different skills, one shared
                  mission — building, organizing, and growing Tech Fusion
                  Club.
                </p>
              </div>

              <button
                type="button"
                onClick={scrollNext}
                className="hidden shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary-glow lg:flex"
              >
                Explore teams

                <span className="flex size-10 items-center justify-center rounded-full border border-border">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* HORIZONTAL TEAM RAIL */}

          <div
            ref={railRef}
            className="team-rail mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-8 sm:px-8 lg:px-12"
          >
            {teams.map((team, index) => (
              <article
                key={team.number}
                ref={(element) => {
                  if (element) {
                    cardsRef.current[index] = element;
                  }
                }}
                className="team-card group relative min-w-[82vw] snap-start overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-7 backdrop-blur-xl sm:min-w-[440px] sm:p-9 lg:min-w-[500px]"
                style={
                  {
                    "--team-delay": `${index * 100}ms`,
                  } as CSSProperties
                }
              >
                {/* Technical background */}

                <div className="pointer-events-none absolute inset-0 opacity-40">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(127,127,127,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(127,127,127,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />

                  <div className="absolute -right-20 -top-20 size-56 rounded-full border border-primary-glow/10 transition-all duration-700 group-hover:scale-125 group-hover:border-primary-glow/30" />

                  <div className="absolute -bottom-24 -left-24 size-64 rounded-full border border-primary-glow/5 transition-all duration-700 group-hover:scale-110" />
                </div>

                {/* TOP */}

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-sm tracking-[0.2em] text-primary-glow">
                    {team.number}
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    TFC / TEAM
                  </span>
                </div>

                {/* CONTENT */}

                <div className="relative mt-20">
                  <div className="mb-5 h-px w-16 bg-primary-glow transition-all duration-500 group-hover:w-28" />

                  <h3 className="max-w-md font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl">
                    {team.name}
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                    {team.description}
                  </p>
                </div>

                {/* BOTTOM */}

                <div className="relative mt-12 flex items-center justify-between border-t border-border/60 pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    TFC {team.number}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedTeam(team)}
                    className="group/link inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-glow"
                  >
                    Know More

                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </button>
                </div>

                {/* ORANGE ACCENT */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-glow transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* MOBILE INDICATOR */}

          <div className="mt-2 flex items-center gap-3 px-6 sm:px-8 lg:px-12">
            <div className="h-px flex-1 bg-border" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Scroll horizontally
            </span>

            <div className="h-px w-10 bg-primary-glow/50" />
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM MODAL
      ========================================================= */}

      {selectedTeam && (
        <div
          className="team-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedTeam(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-modal-title"
            className="team-modal relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border"
          >
            {/* Orange top line */}

            <div className="absolute left-0 right-0 top-0 h-[2px] bg-primary-glow shadow-[0_0_18px_rgba(227,59,36,0.7)]" />

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setSelectedTeam(null)}
              aria-label="Close team details"
              className="team-modal-close absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-full border transition-all"
            >
              <X className="size-5" />
            </button>

            <div className="p-7 sm:p-10 lg:p-12">
              {/* HEADER */}

              <div className="pr-14">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow">
                  TFC / TEAM {selectedTeam.number}
                </p>

                <h3
                  id="team-modal-title"
                  className="team-modal-title mt-3 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl"
                >
                  {selectedTeam.name}
                </h3>

                <p className="team-modal-description mt-5 max-w-3xl text-base leading-7">
                  {selectedTeam.details}
                </p>
              </div>

              {/* DIVIDER */}

              <div className="team-modal-divider my-10 h-px" />

              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                {/* WHAT WE DO */}

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-glow">
                    What we do
                  </p>

                  <div className="mt-5 space-y-3">
                    {selectedTeam.responsibilities.map(
                      (responsibility, index) => (
                        <div
                          key={responsibility}
                          className="team-responsibility flex items-start gap-4 border-b pb-3"
                        >
                          <span className="font-mono text-xs text-primary-glow">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{responsibility}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* TEAM MEMBERS */}

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-glow">
                    Team members
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selectedTeam.members.map((member, index) => (
                      <div
                        key={`${member.name}-${index}`}
                        className="team-member-card rounded-xl border p-4 backdrop-blur-md transition-all"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="font-mono text-[10px] text-primary-glow">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="team-member-role text-right text-[10px] uppercase tracking-wider">
                            {member.role}
                          </span>
                        </div>

                        <p className="team-member-name mt-5 font-display text-lg font-semibold">
                          {member.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CLOSE BUTTON */}

              <div className="mt-10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedTeam(null)}
                  className="team-close-button rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           HORIZONTAL TEAM RAIL
        ===================================================== */

        .team-rail {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .team-rail::-webkit-scrollbar {
          display: none;
        }

        /* =====================================================
           TEAM CARD ANIMATION
        ===================================================== */

        .team-card {
          opacity: 0;
          transform: translateX(50px);

          transition:
            opacity 700ms cubic-bezier(.16, 1, .3, 1) var(--team-delay),
            transform 700ms cubic-bezier(.16, 1, .3, 1) var(--team-delay),
            border-color 400ms ease,
            box-shadow 400ms ease;
        }

        .team-card.team-card-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .team-card:hover {
          border-color: rgba(227, 59, 36, 0.35);

          box-shadow:
            0 25px 80px rgba(227, 59, 36, 0.1);
        }

        /* =====================================================
           OUTSIDE MODAL

           COMPLETELY TRANSPARENT.

           No background.
           No blur.
           No dark overlay.
           No white overlay.
        ===================================================== */

        .team-modal-backdrop {
          background: transparent !important;

          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;

          animation: none !important;
        }

        /* =====================================================
           MODAL / CONTENT PANEL

           ONLY THIS AREA IS BLURRED.

           Transparent glass effect allows the page behind
           the panel to remain visible.
        ===================================================== */

        .team-modal {
          background: rgba(255, 255, 255, 0.16);

          border-color:
            rgba(255, 255, 255, 0.42);

          color: #111318;

          backdrop-filter:
            blur(35px)
            saturate(125%);

          -webkit-backdrop-filter:
            blur(35px)
            saturate(125%);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.12),

            inset 0 1px 0
              rgba(255, 255, 255, 0.55),

            inset 0 -1px 0
              rgba(255, 255, 255, 0.10),

            0 0 70px
              rgba(227, 59, 36, 0.06);

          animation:
            teamModalIn
            450ms
            cubic-bezier(.16, 1, .3, 1)
            both;
        }

        /* =====================================================
           DARK MODE MODAL
        ===================================================== */

        .dark .team-modal {
          background: rgba(15, 15, 18, 0.18);

          border-color:
            rgba(255, 255, 255, 0.18);

          color: #f5f5f5;

          backdrop-filter:
            blur(35px)
            saturate(125%);

          -webkit-backdrop-filter:
            blur(35px)
            saturate(125%);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.45),

            inset 0 1px 0
              rgba(255, 255, 255, 0.12),

            inset 0 -1px 0
              rgba(255, 255, 255, 0.05),

            0 0 70px
              rgba(227, 59, 36, 0.08);
        }

        /* =====================================================
           MODAL TITLE
        ===================================================== */

        .team-modal-title {
          color: #111318;
        }

        .dark .team-modal-title {
          color: #f5f5f5;
        }

        /* =====================================================
           MODAL DESCRIPTION
        ===================================================== */

        .team-modal-description {
          color:
            rgba(17, 19, 24, 0.68);
        }

        .dark .team-modal-description {
          color:
            rgba(245, 245, 245, 0.72);
        }

        /* =====================================================
           DIVIDER
        ===================================================== */

        .team-modal-divider {
          background:
            rgba(0, 0, 0, 0.12);
        }

        .dark .team-modal-divider {
          background:
            rgba(255, 255, 255, 0.14);
        }

        /* =====================================================
           RESPONSIBILITIES
        ===================================================== */

        .team-responsibility {
          border-color:
            rgba(0, 0, 0, 0.10);

          color:
            rgba(17, 19, 24, 0.86);
        }

        .dark .team-responsibility {
          border-color:
            rgba(255, 255, 255, 0.10);

          color:
            rgba(245, 245, 245, 0.86);
        }

        /* =====================================================
           MEMBER CARDS
        ===================================================== */

        .team-member-card {
          background:
            rgba(255, 255, 255, 0.08);

          border-color:
            rgba(0, 0, 0, 0.10);
        }

        .team-member-card:hover {
          background:
            rgba(255, 255, 255, 0.16);

          border-color:
            rgba(227, 59, 36, 0.35);
        }

        .dark .team-member-card {
          background:
            rgba(255, 255, 255, 0.035);

          border-color:
            rgba(255, 255, 255, 0.12);
        }

        .dark .team-member-card:hover {
          background:
            rgba(255, 255, 255, 0.07);

          border-color:
            rgba(227, 59, 36, 0.40);
        }

        /* =====================================================
           MEMBER NAME
        ===================================================== */

        .team-member-name {
          color: #111318;
        }

        .dark .team-member-name {
          color: #f5f5f5;
        }

        /* =====================================================
           MEMBER ROLE
        ===================================================== */

        .team-member-role {
          color:
            rgba(17, 19, 24, 0.55);
        }

        .dark .team-member-role {
          color:
            rgba(245, 245, 245, 0.50);
        }

        /* =====================================================
           CLOSE ICON
        ===================================================== */

        .team-modal-close {
          background:
            rgba(255, 255, 255, 0.08);

          border-color:
            rgba(0, 0, 0, 0.12);

          color:
            rgba(17, 19, 24, 0.70);
        }

        .team-modal-close:hover {
          border-color:
            rgba(227, 59, 36, 0.50);

          color:
            rgb(227, 59, 36);

          background:
            rgba(227, 59, 36, 0.06);
        }

        .dark .team-modal-close {
          background:
            rgba(255, 255, 255, 0.04);

          border-color:
            rgba(255, 255, 255, 0.15);

          color:
            rgba(245, 245, 245, 0.80);
        }

        .dark .team-modal-close:hover {
          border-color:
            rgba(227, 59, 36, 0.60);

          color:
            rgb(227, 59, 36);

          background:
            rgba(227, 59, 36, 0.08);
        }

        /* =====================================================
           CLOSE BUTTON
        ===================================================== */

        .team-close-button {
          border-color:
            rgba(227, 59, 36, 0.55);

          color:
            rgb(227, 59, 36);

          background:
            rgba(227, 59, 36, 0.04);
        }

        .team-close-button:hover {
          background:
            rgb(227, 59, 36);

          color:
            white;
        }

        /* =====================================================
           MODAL ANIMATION
        ===================================================== */

        @keyframes teamModalIn {
          from {
            opacity: 0;
            transform:
              translateY(25px)
              scale(0.97);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .team-card,
          .team-modal {
            animation: none !important;
            transition: none !important;
          }

          .team-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}