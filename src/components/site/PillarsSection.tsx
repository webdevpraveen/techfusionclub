import { useEffect, useRef } from "react";
import {
  Users,
  Award,
  Terminal,
  Code2,
} from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Weekly Hands-on Build Nights",
    subtitle: "Shipping Code Over Slideware",
    description:
      "Every Thursday evening, members gather in the computer labs to write code, debug real-world applications, and collaborate on cross-domain projects.",
    tags: ["Build Nights", "Peer Coding", "Live Demos"],
    icon: <Code2 className="size-6 text-primary-glow" />,
  },
  {
    number: "02",
    title: "1-on-1 Senior Mentorship Ladder",
    subtitle: "From Beginner to Domain Lead",
    description:
      "Every junior is matched with a senior mentor inside their domain for code reviews, project guidance, and technical career advice.",
    tags: ["Code Review", "Career Prep", "1-on-1 Help"],
    icon: <Users className="size-6 text-accent" />,
  },
  {
    number: "03",
    title: "Production Shipping & Open Source",
    subtitle: "Real Repositories, Real Users",
    description:
      "Members leave university with deployed web apps, open-source pull requests, and production code that interviewers actually ask about.",
    tags: ["GitHub Repos", "Open Source", "Public Deploy"],
    icon: <Terminal className="size-6 text-emerald-400" />,
  },
  {
    number: "04",
    title: "Flagship Hackathons & Competitions",
    subtitle: "Organize & Compete at Scale",
    description:
      "Lead and participate in Viveka 6.0, Smart India Hackathon campus prep, CTFs, and intra-college tech-culture expos.",
    tags: ["Viveka 6.0", "SIH Prep", "CTF Gauntlets"],
    icon: <Award className="size-6 text-cyan-400" />,
  },
];

const clamp = (
  value: number,
  min = 0,
  max = 1,
) => Math.min(max, Math.max(min, value));

const smoothStep = (value: number) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};

export function PillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const rafRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);
  const snappingRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);

    if (cards.length !== pillars.length) return;

    /*
     * ==================================================
     * COMMIT RULE
     *
     * Less than 50%
     * -> go back
     *
     * 50% or more
     * -> complete animation to 100%
     * ==================================================
     */
    const COMMIT_POINT = 0.5;

    const CHAPTERS = pillars.length;

    const getMetrics = () => {
      const rect = section.getBoundingClientRect();

      const distance = Math.max(
        1,
        section.offsetHeight -
          window.innerHeight,
      );

      const overallProgress = clamp(
        -rect.top / distance,
      );

      const scaled =
        overallProgress * CHAPTERS;

      const chapter = Math.min(
        CHAPTERS - 1,
        Math.floor(
          Math.min(
            scaled,
            CHAPTERS - 0.000001,
          ),
        ),
      );

      const localProgress = clamp(
        scaled - chapter,
      );

      return {
        overallProgress,
        distance,
        chapter,
        localProgress,
      };
    };

    /*
     * ==================================================
     * RENDER
     * ==================================================
     */
    const render = () => {
      const {
        overallProgress,
        chapter,
        localProgress,
      } = getMetrics();

      cards.forEach((card, index) => {
        let x = 0;
        let y = 0;
        let scale = 1;
        let opacity = 0;
        let zIndex = 10 + index;

        /*
         * ==============================================
         * COMPLETED PILLARS
         * ==============================================
         */
        if (index < chapter) {
          opacity = 1;
          scale = 1;
          x = 0;
          y = 0;
          zIndex = 30 + index;
        }

        /*
         * ==============================================
         * CURRENT PILLAR
         * ==============================================
         */
        else if (index === chapter) {
          /*
           * The animation itself always follows
           * the actual scroll position.
           *
           * So:
           *
           * 0%   = start
           * 50%  = halfway
           * 100% = center
           */
          const entrance = smoothStep(
            localProgress,
          );

          /*
           * ==========================================
           * PILLAR 01
           *
           * LEFT -> CENTER
           * ==========================================
           */
          if (index === 0) {
            x =
              -110 +
              110 * entrance;

            y = 0;

            scale =
              0.74 +
              0.26 * entrance;
          }

          /*
           * ==========================================
           * PILLAR 02 / 03 / 04
           *
           * BOTTOM -> CENTER
           * ==========================================
           */
          else {
            x = 0;

            y =
              112 -
              112 * entrance;

            scale =
              0.72 +
              0.28 * entrance;
          }

          /*
           * Fade in smoothly.
           */
          opacity = clamp(
            entrance / 0.12,
          );

          zIndex = 60;
        }

        /*
         * ==============================================
         * FUTURE PILLARS
         * ==============================================
         */
        else {
          opacity = 0;

          scale =
            index === 0
              ? 0.74
              : 0.72;

          x =
            index === 0
              ? -110
              : 0;

          y =
            index === 0
              ? 0
              : 112;

          zIndex = 10 + index;
        }

        /*
         * ==============================================
         * PREVIOUS PILLAR
         *
         * Keep the completed pillar until the
         * incoming pillar is nearly complete.
         * ==============================================
         */
        if (
          index === chapter - 1 &&
          localProgress > 0.88
        ) {
          const cover = smoothStep(
            (localProgress - 0.88) /
              0.12,
          );

          opacity = 1 - cover;

          scale =
            1 -
            cover * 0.025;
        }

        card.style.transform =
          `translate3d(${x}%, ${y}%, 0) scale(${scale})`;

        card.style.opacity =
          String(opacity);

        card.style.zIndex =
          String(zIndex);
      });

      /*
       * Progress
       */
      if (progressRef.current) {
        progressRef.current.style.width =
          `${overallProgress * 100}%`;
      }

      /*
       * Counter
       */
      if (counterRef.current) {
        counterRef.current.textContent =
          `${String(chapter + 1).padStart(
            2,
            "0",
          )} / ${String(CHAPTERS).padStart(
            2,
            "0",
          )}`;
      }
    };

    /*
     * ==================================================
     * REQUEST ANIMATION FRAME
     * ==================================================
     */
    const requestRender = () => {
      if (rafRef.current !== null) {
        return;
      }

      rafRef.current =
        window.requestAnimationFrame(() => {
          rafRef.current = null;
          render();
        });
    };

    /*
     * ==================================================
     * SNAP / COMMIT
     *
     * < 50%
     * -> SNAP BACK
     *
     * >= 50%
     * -> SNAP FORWARD TO 100%
     * ==================================================
     */
    const settleScroll = () => {
  const {
    overallProgress,
    distance,
  } = getMetrics();

  const scaled =
    overallProgress * CHAPTERS;

  const chapter = Math.min(
    CHAPTERS - 1,
    Math.floor(
      Math.min(
        scaled,
        CHAPTERS - 0.000001,
      ),
    ),
  );

  const localProgress = clamp(
    scaled - chapter,
  );

  /*
   * Already at a chapter boundary.
   */
  if (
    localProgress < 0.01 ||
    localProgress > 0.99
  ) {
    return;
  }

  /*
   * ==========================================
   * 50% RULE
   *
   * < 50%
   *     -> GO BACK
   *
   * >= 50%
   *     -> COMPLETE IMMEDIATELY
   * ==========================================
   */
  const shouldComplete =
    localProgress >= COMMIT_POINT;

  const targetChapter =
    shouldComplete
      ? chapter + 1
      : chapter;

  const targetProgress =
    targetChapter / CHAPTERS;

  const sectionTop =
    window.scrollY +
    section.getBoundingClientRect().top;

  snappingRef.current = true;

  window.scrollTo({
    top:
      sectionTop +
      targetProgress * distance,
    behavior: "smooth",
  });

  window.setTimeout(() => {
    snappingRef.current = false;
    requestRender();
  }, 700);
};

    /*
     * ==================================================
     * SCROLL
     * ==================================================
     */
    const onScroll = () => {
  requestRender();

  /*
   * Don't interfere while automatic
   * completion / rollback is running.
   */
  if (snappingRef.current) {
    return;
  }

  const {
    localProgress,
  } = getMetrics();

  /*
   * ==========================================
   * 50% CROSSED
   *
   * Immediately finish the pillar.
   * No waiting for scroll to stop.
   * ==========================================
   */
  if (
    localProgress >= COMMIT_POINT &&
    localProgress < 0.99
  ) {
    if (
      settleTimerRef.current !== null
    ) {
      window.clearTimeout(
        settleTimerRef.current,
      );

      settleTimerRef.current = null;
    }

    settleScroll();

    return;
  }

  /*
   * ==========================================
   * BELOW 50%
   *
   * Give user a little time to continue
   * scrolling.
   *
   * If they stop below 50%, send the
   * pillar back.
   * ==========================================
   */
  if (
    settleTimerRef.current !== null
  ) {
    window.clearTimeout(
      settleTimerRef.current,
    );
  }

  settleTimerRef.current =
    window.setTimeout(
      settleScroll,
      120,
    );
};

    /*
     * ==================================================
     * RESIZE
     * ==================================================
     */
    const onResize = () => {
      requestRender();
    };

    render();

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      onResize,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll,
      );

      window.removeEventListener(
        "resize",
        onResize,
      );

      if (
        settleTimerRef.current !== null
      ) {
        window.clearTimeout(
          settleTimerRef.current,
        );
      }

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(
          rafRef.current,
        );
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[800vh] bg-background"
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[68%] top-[50%] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[150px]" />

        <div className="absolute left-[40%] top-[35%] h-[28rem] w-[28rem] rounded-full bg-orange-500/[0.035] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

        <div className="absolute left-[75%] top-[48%] size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.055]" />

        <div className="absolute left-[75%] top-[48%] size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.03]" />
      </div>

      {/* ==========================================
          STICKY EXPERIENCE
      ========================================== */}

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto flex h-full w-full max-w-[1500px] flex-col justify-center gap-5 px-4 py-5 sm:gap-7 sm:px-6 sm:py-8 md:flex-row md:items-center md:gap-6 md:px-8 lg:gap-10 lg:px-12 xl:px-16">

          {/* ========================================
              LEFT CONTENT
          ======================================== */}

          <div className="relative z-10 w-full shrink-0 md:w-[38%] lg:w-[34%]">

            <div className="mb-3 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-8 bg-primary sm:w-12" />

              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-primary sm:text-[9px]">
                The Framework
              </span>
            </div>

            <h2 className="font-display text-[2rem] font-black leading-[0.93] tracking-[-0.055em] text-foreground sm:text-[2.7rem] md:text-[3rem] lg:text-[4.1rem]">
              Four Pillars of{" "}
              <span className="text-gradient">
                Tech Fusion Club
              </span>
            </h2>

            <p className="mt-4 max-w-[490px] text-xs leading-5 text-muted-foreground sm:mt-6 sm:text-sm sm:leading-6 md:text-base md:leading-7 lg:mt-7 lg:text-lg lg:leading-8">
              How our technical collective operates week
              after week to produce industry-ready student
              engineers.
            </p>

            <div className="mt-5 flex items-center gap-3 sm:mt-8 md:mt-10 lg:mt-12">
              <span className="h-px w-7 bg-primary sm:w-9" />

              <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[8px] md:text-[9px]">
                Scroll to explore
              </span>

              <span className="flex h-7 w-5 items-start justify-center rounded-full border border-border/70 p-1 sm:h-8">
                <span className="h-1.5 w-1 rounded-full bg-primary" />
              </span>
            </div>

            {/* Progress */}

            <div className="mt-6 hidden max-w-[205px] sm:block md:mt-10 lg:mt-20">
              <div className="mb-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[9px]">
                <span>
                  Scroll
                </span>

                <span ref={counterRef}>
                  01 / 04
                </span>
              </div>

              <div className="h-px w-full bg-border/70">
                <div
                  ref={progressRef}
                  className="h-full origin-left bg-primary"
                  style={{
                    width: "0%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ========================================
              PILLAR STAGE
          ======================================== */}

          <div className="relative min-h-0 w-full flex-1 md:h-[480px] md:flex-none md:w-[62%] lg:h-[570px] lg:w-[53%]">

            {/* Outer frame */}

            <div className="absolute inset-0 rounded-[1.25rem] border border-primary/[0.13] sm:rounded-[1.75rem] lg:rounded-[2.2rem]" />

            {/* Inner frame */}

            <div className="absolute inset-2 rounded-[1.1rem] border border-primary/[0.07] sm:inset-3 sm:rounded-[1.5rem] lg:rounded-[2rem]" />

            {/* Stage glow */}

            <div className="pointer-events-none absolute inset-4 rounded-[1.25rem] bg-primary/[0.025] blur-2xl sm:inset-6 sm:rounded-[1.75rem] lg:inset-8 lg:rounded-[2rem]" />

            {pillars.map(
              (pillar, index) => (
                <div
                  key={pillar.number}
                  ref={(element) => {
                    if (element) {
                      cardsRef.current[index] =
                        element;
                    }
                  }}
                  className="absolute inset-2 overflow-hidden rounded-[1.1rem] border border-primary/[0.16] bg-card/[0.94] shadow-[0_25px_80px_hsl(var(--primary)/0.08)] backdrop-blur-xl will-change-transform sm:inset-3 sm:rounded-[1.5rem] sm:shadow-[0_35px_100px_hsl(var(--primary)/0.09)] lg:inset-5 lg:rounded-[2rem]"
                  style={{
                    opacity: 0,
                    transform:
                      index === 0
                        ? "translate3d(-110%, 0, 0) scale(0.74)"
                        : "translate3d(0, 112%, 0) scale(0.72)",
                  }}
                >
                  <PillarCard
                    pillar={pillar}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
}: {
  pillar: Pillar;
}) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden p-3.5 sm:p-6 md:p-7 lg:p-10 xl:p-14">

      {/* Ambient glow */}

      <div
        className="pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full bg-primary/[0.06] blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px] lg:h-80 lg:w-80"
        aria-hidden="true"
      />

      {/* Giant number */}

      <div
        className="pointer-events-none absolute right-2 top-1 select-none font-display text-[4.5rem] font-black leading-none tracking-[-0.1em] text-primary/[0.035] sm:right-5 sm:text-[7rem] md:text-[9rem] lg:right-8 lg:text-[13rem] xl:text-[15rem]"
        aria-hidden="true"
      >
        {pillar.number}
      </div>

      {/* Content */}

      <div className="relative z-10">

        <div className="mb-3 flex items-center gap-2 sm:mb-5 sm:gap-3 md:mb-6 lg:mb-8">

          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.05] sm:size-11 sm:rounded-xl md:size-12 lg:size-14 lg:rounded-2xl">
            {pillar.icon}
          </div>

          <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-primary-glow sm:text-[10px] md:text-xs md:tracking-[0.2em]">
            Pillar {pillar.number}
          </span>

        </div>

        <h3 className="max-w-3xl font-display text-[1.3rem] font-black leading-[0.98] tracking-[-0.045em] text-foreground sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
          {pillar.title}
        </h3>

        <p className="mt-2 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-primary-glow sm:mt-4 sm:text-[10px] md:text-xs md:tracking-[0.18em] lg:mt-5 lg:text-sm">
          {pillar.subtitle}
        </p>

        <p className="mt-3 max-w-2xl text-[10px] leading-4 text-muted-foreground sm:mt-5 sm:text-xs sm:leading-6 md:text-sm md:leading-7 lg:mt-6 lg:text-base lg:leading-8">
          {pillar.description}
        </p>

      </div>

      {/* Tags */}

      <div className="relative z-10 mt-3 sm:mt-6 md:mt-7 lg:mt-8">

        <div className="mb-3 h-px w-full bg-gradient-to-r from-border via-primary/30 to-transparent sm:mb-4 md:mb-5" />

        <div className="flex flex-wrap gap-1.5 sm:gap-2">

          {pillar.tags.map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 bg-surface/80 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.07em] text-muted-foreground sm:px-3 sm:py-1.5 sm:text-[9px] md:text-[10px] md:tracking-[0.12em]"
              >
                {tag}
              </span>
            ),
          )}

        </div>

      </div>
    </div>
  );
}