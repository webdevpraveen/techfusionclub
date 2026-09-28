import { useEffect, useRef } from "react";
import { EventsSection } from "@/components/site/EventsSection";
import { TeamsSection } from "@/components/site/TeamsSection";
import { createFileRoute, Link } from "@tanstack/react-router";
import { RecentEventsSection } from "@/components/site/RecentEventsSection";
import { SRMUSection } from "@/components/site/SRMUSection";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Zap,
  Shield,
  Cpu,
  Code2,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { club, domains, stats } from "@/data/club";
import { featuredEvent, formatEventDate } from "@/data/events";
import { galleryPhotos } from "@/data/gallery";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { StatCounter } from "@/components/site/StatCounter";
import { CTABanner } from "@/components/site/CTABanner";
import { GlowCard } from "@/components/site/GlowCard";
import { ProjectsShowcase } from "@/components/site/ProjectsShowcase";
import { ClubRoadmap } from "@/components/site/ClubRoadmap";
import { PillarsSection } from "@/components/site/PillarsSection";
import { PartnersSection } from "@/components/site/PartnersSection";
import { HeroBackground } from "@/components/site/HeroBackground";

type Particle = {
  x: number;
  y: number;
  z: number;
  orange: boolean;
};

function MissionParticleGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    if (!canvas || !wrapper) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let animationFrame = 0;
    let resizeObserver: ResizeObserver | null = null;

    let width = 1;
    let height = 1;
    let dpr = 1;

    let rotation = 0;
    let rotationX = 0;

    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    let scrollScale = 0.25;
    let currentScale = 0.25;

    let particles: Particle[] = [];

    const createParticles = () => {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 360 : 720;

      particles = [];

      const goldenAngle = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < count; i += 1) {
        const t = i / Math.max(1, count - 1);

        const y = 1 - t * 2;
        const radius = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = goldenAngle * i;

        particles.push({
          x: Math.cos(theta) * radius,
          y,
          z: Math.sin(theta) * radius,

          // Mostly black dots, with a small number of orange dots.
          orange:
            i % 23 === 0 ||
            i % 61 === 0 ||
            i % 97 === 0,
        });
      }
    };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const clamp = (
      value: number,
      min: number,
      max: number,
    ) => Math.min(max, Math.max(min, value));

    const smoothStep = (value: number) => {
      const t = clamp(value, 0, 1);
      return t * t * (3 - 2 * t);
    };

    const handlePointerMove = (
      event: PointerEvent,
    ) => {
      const rect =
        wrapper.getBoundingClientRect();

      targetMouseX = clamp(
        (event.clientX - rect.left) /
            rect.width -
          0.5,
        -0.5,
        0.5,
      );

      targetMouseY = clamp(
        (event.clientY - rect.top) /
            rect.height -
          0.5,
        -0.5,
        0.5,
      );
    };

    const handlePointerLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    const updateScrollScale = () => {
      const rect =
        wrapper.getBoundingClientRect();

      const viewportHeight =
        window.innerHeight;

      const start =
        viewportHeight * 0.92;

      const end =
        viewportHeight * 0.25;

      const progress = clamp(
        (start - rect.top) /
          Math.max(1, start - end),
        0,
        1,
      );

      const eased =
        smoothStep(progress);

      scrollScale =
        0.22 + eased * 0.78;
    };

    const draw = (time: number) => {
      updateScrollScale();

      const motionMultiplier =
        reducedMotion.matches ? 0 : 1;

      mouseX +=
        (targetMouseX - mouseX) *
        0.075;

      mouseY +=
        (targetMouseY - mouseY) *
        0.075;

      currentScale +=
        (scrollScale - currentScale) *
        0.055;

      rotation +=
        0.0024 * motionMultiplier;

      rotationX +=
        ((mouseY * -0.32) -
          rotationX) *
        0.045 *
        motionMultiplier;

      const centerX =
        width * 0.5;

      const centerY =
        height * 0.5;

      const sphereRadius =
        Math.min(width, height) *
        0.34 *
        currentScale;

      context.clearRect(
        0,
        0,
        width,
        height,
      );

      const projected: {
        x: number;
        y: number;
        z: number;
        size: number;
        alpha: number;
        orange: boolean;
      }[] = [];

      const cosY = Math.cos(
        rotation +
          mouseX * 0.38,
      );

      const sinY = Math.sin(
        rotation +
          mouseX * 0.38,
      );

      const cosX =
        Math.cos(rotationX);

      const sinX =
        Math.sin(rotationX);

      for (const particle of particles) {
        let x = particle.x;
        let y = particle.y;
        let z = particle.z;

        const rotatedX =
          x * cosY -
          z * sinY;

        const rotatedZ =
          x * sinY +
          z * cosY;

        x = rotatedX;
        z = rotatedZ;

        const rotatedY =
          y * cosX -
          z * sinX;

        const rotatedZ2 =
          y * sinX +
          z * cosX;

        y = rotatedY;
        z = rotatedZ2;

        const perspective =
          1.55 /
          (1.8 - z * 0.65);

        const px =
          centerX +
          x *
            sphereRadius *
            perspective;

        const py =
          centerY +
          y *
            sphereRadius *
            perspective +
          mouseY * 18;

        const depth =
          (z + 1) / 2;

        const particleSize =
          (0.65 +
            depth * 1.35) *
          (0.65 +
            currentScale * 0.4);

        const alpha =
          (0.14 +
            depth * 0.78) *
          Math.min(
            1,
            currentScale * 1.45,
          );

        projected.push({
          x: px,
          y: py,
          z,
          size: particleSize,
          alpha,
          orange: particle.orange,
        });
      }

      projected.sort(
        (a, b) => a.z - b.z,
      );

      for (const particle of projected) {
        context.beginPath();

        const isDark =
  document.documentElement.classList.contains("dark");

context.fillStyle = particle.orange
  ? `rgba(227, 59, 36, ${particle.alpha})`
  : isDark
    ? `rgba(245, 245, 245, ${particle.alpha})`
    : `rgba(20, 20, 20, ${particle.alpha})`;

        context.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2,
        );

        context.fill();
      }

      /*
       * Orange orbit.
       */
      if (currentScale > 0.55) {
        const orbitOpacity =
          Math.min(
            0.22,
            (currentScale - 0.55) *
              0.45,
          );

        context.save();

        context.translate(
          centerX,
          centerY,
        );

        context.rotate(
          rotation * 0.4,
        );

        context.beginPath();

        context.ellipse(
          0,
          0,
          sphereRadius * 1.18,
          sphereRadius * 0.32,
          0,
          0,
          Math.PI * 2,
        );

        context.strokeStyle =
          `rgba(227, 59, 36, ${orbitOpacity})`;

        context.lineWidth = 1;

        context.stroke();

        context.restore();

        context.save();

        context.translate(
          centerX,
          centerY,
        );

        context.rotate(
          -rotation * 0.28,
        );

        context.beginPath();

        context.ellipse(
          0,
          0,
          sphereRadius * 0.98,
          sphereRadius * 0.26,
          Math.PI / 2.8,
          0,
          Math.PI * 2,
        );

        context.strokeStyle =
          `rgba(20, 20, 20, ${
            orbitOpacity * 0.65
          })`;

        context.lineWidth = 1;

        context.stroke();

        context.restore();
      }

      /*
       * Moving orange highlight particle.
       */
      if (currentScale > 0.72) {
        const redIndex =
          Math.floor(
            (time * 0.035) %
              Math.max(
                1,
                projected.length,
              ),
          );

        const accentParticle =
          projected[redIndex];

        if (accentParticle) {
          context.beginPath();

          context.fillStyle =
            `rgba(227, 59, 36, ${
              Math.min(
                0.95,
                accentParticle.alpha +
                  0.25,
              )
            })`;

          context.arc(
            accentParticle.x,
            accentParticle.y,
            Math.max(
              1.5,
              accentParticle.size *
                1.45,
            ),
            0,
            Math.PI * 2,
          );

          context.fill();
        }
      }

      animationFrame =
        requestAnimationFrame(draw);
    };

    resize();

    resizeObserver =
      new ResizeObserver(resize);

    resizeObserver.observe(
      wrapper,
    );

    window.addEventListener(
      "resize",
      resize,
    );

    wrapper.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    wrapper.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    window.addEventListener(
      "scroll",
      updateScrollScale,
      {
        passive: true,
      },
    );

    animationFrame =
      requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(
        animationFrame,
      );

      resizeObserver?.disconnect();

      window.removeEventListener(
        "resize",
        resize,
      );

      window.removeEventListener(
        "scroll",
        updateScrollScale,
      );

      wrapper.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      wrapper.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      <div className="pointer-events-none absolute right-3 top-8 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
        TFC / PARTICLE SYSTEM
      </div>

      <div className="pointer-events-none absolute bottom-12 left-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/45">
        ● SYSTEM ACTIVE
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
    </div>
  );
}

export const Route =
  createFileRoute("/")({
    head: () => ({
      meta: [
        {
          title:
            "Tech Fusion Club (TFC SRMU) | Coding & Viveka Fest",
        },
        {
          name: "description",
          content:
            "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest. Founded by Praveen Singh (webdevpraveen).",
        },
        {
          name: "keywords",
          content:
            "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, engineering club, tech community",
        },
        {
          property: "og:title",
          content:
            "Tech Fusion Club (TFC SRMU) | Viveka Fest & Coding",
        },
        {
          property: "og:description",
          content:
            "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.",
        },
        {
          name: "twitter:title",
          content:
            "Tech Fusion Club (TFC SRMU)",
        },
        {
          name: "twitter:description",
          content:
            "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.",
        },
        {
          property: "og:url",
          content: "/",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: "/",
        },
      ],
    }),
    component: Home,
  });

function Home() {
  const previewPhotos =
    galleryPhotos.slice(0, 5);

  const missionRef =
    useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = missionRef.current;

    if (!section) return;

    const observer =
  new IntersectionObserver(
    ([entry]) => {
      if (!entry) return;

      if (entry.isIntersecting) {
        section.classList.add("mission-visible");
      }
    },
    {
      threshold: 0.18,
    },
  );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ---------------- Premium Hero ---------------- */}

      <section className="hero-gradient relative isolate min-h-[92vh] overflow-hidden px-5 pb-20 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-16 lg:min-h-[94vh]">
        <HeroBackground />

        <div className="circuit-lines pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_10%,#000_35%,transparent_100%)]" />

        <div className="grid-lines pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,#000_30%,transparent_100%)]" />

        <div className="relative z-20 mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center">
          <div className="mb-8 flex items-center gap-3 animate-rise">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/70 sm:w-16" />

            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary-glow/80">
              Tech Fusion Club
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-primary/70 sm:w-16" />
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-10 top-1/2 -z-10 h-32 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]" />

            <h1 className="max-w-5xl text-balance font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] animate-rise [animation-delay:80ms] sm:text-6xl lg:text-8xl">
              Where ideas{" "}
              <span className="relative inline-block">
                <span className="text-gradient">
                  fuse
                </span>

                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-primary animate-[heroLine_1.2s_ease-out_0.7s_forwards] sm:-bottom-2" />
              </span>{" "}
              into technology.
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms] sm:text-xl">
            {club.name} is the student-run
            technical collective at{" "}
            {club.university}. Six domains,
            one calendar of workshops
            and hackathons, and a mentorship
            ladder running unbroken since{" "}
            {club.foundedYear}.
          </p>

          <div className="mt-10 flex flex-col gap-4 animate-rise [animation-delay:240ms] sm:flex-row sm:items-center">
            <Link
              to="/events"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-[0_0_35px_rgba(217,72,15,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_55px_rgba(217,72,15,0.55)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                Explore events
              </span>

              <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/join"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border/80 bg-background/20 px-8 py-4 font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary-glow"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                Join the club
              </span>

              <ArrowUpRight className="relative size-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 animate-rise [animation-delay:300ms]">
            {[
              {
                name: "Web Dev",
                icon: (
                  <Code2 className="size-3.5 text-primary-glow" />
                ),
              },
              {
                name: "AI / ML",
                icon: (
                  <Cpu className="size-3.5 text-accent" />
                ),
              },
              {
                name: "Cybersecurity",
                icon: (
                  <Shield className="size-3.5 text-emerald-400" />
                ),
              },
              {
                name: "App Dev",
                icon: (
                  <Sparkles className="size-3.5 text-cyan-400" />
                ),
              },
              {
                name: "Cloud & DevOps",
                icon: (
                  <Terminal className="size-3.5 text-amber-400" />
                ),
              },
              {
                name: "UI/UX Design",
                icon: (
                  <Zap className="size-3.5 text-purple-400" />
                ),
              },
            ].map((d, i) => (
              <span
                key={d.name}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/25 px-3.5 py-1.5 font-mono text-xs text-foreground/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
                style={{
                  animationDelay: `${350 + i * 70}ms`,
                }}
              >
                <span className="transition-transform duration-300 group-hover:scale-125">
                  {d.icon}
                </span>

                {d.name}
              </span>
            ))}
          </div>

          <dl className="mt-16 grid w-full max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border border-border/60 bg-background/15 backdrop-blur-md animate-rise [animation-delay:380ms] sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`relative px-5 py-7 transition-colors duration-300 hover:bg-primary/[0.04] ${
                  i !== 0
                    ? "border-t border-border/50 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <StatCounter
                  value={s.value}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                  label={s.label}
                />
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col items-center gap-2 opacity-50 animate-rise [animation-delay:500ms]">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Scroll
            </span>

            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-border/70 p-1">
              <span className="h-1.5 w-1 rounded-full bg-primary-glow animate-[scrollDot_1.8s_ease-in-out_infinite]" />
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ---------------- FOUR PILLARS ---------------- */}
      {/* KEEPING THIS EXACTLY AS YOUR OLD WORKING STRUCTURE */}
      <PillarsSection />

      {/* ---------------- Mission ---------------- */}

      <Section
        className="relative overflow-hidden !py-24 sm:!py-28 lg:!py-32"
      >
        <section
          ref={missionRef}
          id="mission"
          className="mission-section relative min-h-[920px] overflow-hidden"
        >
          {/* Particle globe behind the complete mission composition */}
          <MissionParticleGlobe />

          <div className="relative z-10 mx-auto flex min-h-[920px] max-w-7xl flex-col">

            {/* =====================================================
                MISSION HEADING
            ====================================================== */}

            <div className="relative pt-6 sm:pt-10 lg:pt-14">

              <div className="mission-eyebrow mb-7 flex items-center gap-4">
                <p className="eyebrow text-primary-glow">
                  Our mission
                </p>

                <span className="h-px w-16 bg-primary/70 sm:w-24" />
              </div>

              <div className="relative max-w-6xl">

                <h2 className="mission-line mission-line-1 font-display text-5xl font-bold leading-[0.9] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[6.3rem]">
                  A club that
                </h2>

                <h2 className="mission-line mission-line-2 font-display text-5xl font-bold leading-[0.9] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[6.3rem]">
                  measures itself in
                </h2>

                <h2 className="mission-line mission-line-3 font-display text-5xl font-bold leading-[0.9] tracking-[-0.055em] text-primary sm:text-6xl lg:text-[6.3rem]">
                  things shipped.
                </h2>

              </div>

              <div className="mission-after mt-8 flex items-center gap-3">
                <span className="h-px w-20 bg-primary/80" />

                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground/60">
                  From curiosity to shipping
                </span>
              </div>

            </div>

            {/* =====================================================
                CONTENT BELOW HEADING
            ====================================================== */}

            <div className="mission-content relative z-20 mt-20 lg:mt-28">

              <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

                {/* Mission + Vision */}

                <div>

                  <div className="mission-copy-block">
                    <span className="mb-5 block font-mono text-[9px] uppercase tracking-[0.24em] text-primary-glow">
                      01 / Mission
                    </span>

                    <p className="max-w-3xl text-pretty text-lg leading-[1.75] text-foreground/90 sm:text-xl">
                      {club.mission}
                    </p>
                  </div>

                  <div className="my-10 h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent" />

                  <div className="mission-copy-block">
                    <span className="mb-5 block font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground/70">
                      02 / Vision
                    </span>

                    <p className="max-w-3xl text-pretty text-base leading-[1.8] text-muted-foreground sm:text-lg">
                      {club.vision}
                    </p>
                  </div>

                </div>

                {/* System information */}

                <div className="mission-side-content flex items-end">

                  <div className="w-full">

                    <div className="mission-system-line mb-8 h-px w-full bg-border/70" />

                    <div className="grid gap-8 sm:grid-cols-2">

                      <div className="mission-meta">
                        <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
                          System
                        </span>

                        <span className="mt-2 block font-mono text-xs uppercase tracking-[0.16em] text-foreground">
                          Active
                        </span>
                      </div>

                      <div className="mission-meta">
                        <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
                          Focus
                        </span>

                        <span className="mt-2 block font-mono text-xs uppercase tracking-[0.16em] text-foreground">
                          Student Engineering
                        </span>
                      </div>

                    </div>

                    <Link
                      to="/about"
                      className="mission-link group mt-10 inline-flex items-center gap-2 text-base font-semibold text-primary-glow"
                    >
                      Read the full story

                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <style>{`

            /* =====================================================
               INITIAL STATE
            ====================================================== */

            .mission-eyebrow,
            .mission-line,
            .mission-after,
            .mission-content,
            .mission-copy-block,
            .mission-side-content,
            .mission-system-line,
            .mission-meta,
            .mission-link {
              opacity: 0;
            }

            .mission-eyebrow {
              transform: translateX(-45px);
            }

            .mission-line {
              transform: translateX(-110px);
              clip-path: inset(0 100% 0 0);
            }

            .mission-after {
              transform: translateY(20px);
            }

            .mission-content {
              transform: translateY(55px);
            }

            .mission-copy-block {
              transform: translateY(30px);
            }

            .mission-side-content {
              transform: translateX(45px);
            }

            .mission-system-line {
              transform: scaleX(0);
              transform-origin: left center;
            }

            .mission-meta {
              transform: translateY(25px);
            }

            .mission-link {
              transform: translateY(20px);
            }


            /* =====================================================
               SCROLL ENTER
            ====================================================== */

            .mission-visible .mission-eyebrow {
              animation:
                missionReveal
                700ms
                cubic-bezier(.16,1,.3,1)
                80ms
                forwards;
            }

            .mission-visible .mission-line-1 {
              animation:
                missionLineReveal
                900ms
                cubic-bezier(.16,1,.3,1)
                180ms
                forwards;
            }

            .mission-visible .mission-line-2 {
              animation:
                missionLineReveal
                900ms
                cubic-bezier(.16,1,.3,1)
                430ms
                forwards;
            }

            .mission-visible .mission-line-3 {
              animation:
                missionLineReveal
                900ms
                cubic-bezier(.16,1,.3,1)
                680ms
                forwards;
            }

            .mission-visible .mission-after {
              animation:
                missionReveal
                700ms
                cubic-bezier(.16,1,.3,1)
                980ms
                forwards;
            }


            /* =====================================================
               CONTENT AFTER HEADING
            ====================================================== */

            .mission-visible .mission-content {
              animation:
                missionReveal
                900ms
                cubic-bezier(.16,1,.3,1)
                1150ms
                forwards;
            }

            .mission-visible .mission-copy-block:first-child {
              animation:
                missionCopyReveal
                750ms
                cubic-bezier(.16,1,.3,1)
                1400ms
                forwards;
            }

            .mission-visible .mission-copy-block:nth-child(2) {
              animation:
                missionCopyReveal
                750ms
                cubic-bezier(.16,1,.3,1)
                1580ms
                forwards;
            }

            .mission-visible .mission-side-content {
              animation:
                missionReveal
                800ms
                cubic-bezier(.16,1,.3,1)
                1450ms
                forwards;
            }

            .mission-visible .mission-system-line {
              animation:
                missionLineScale
                900ms
                cubic-bezier(.16,1,.3,1)
                1500ms
                forwards;
            }

            .mission-visible .mission-meta:first-child {
              animation:
                missionCopyReveal
                650ms
                cubic-bezier(.16,1,.3,1)
                1700ms
                forwards;
            }

            .mission-visible .mission-meta:nth-child(2) {
              animation:
                missionCopyReveal
                650ms
                cubic-bezier(.16,1,.3,1)
                1800ms
                forwards;
            }

            .mission-visible .mission-link {
              animation:
                missionCopyReveal
                700ms
                cubic-bezier(.16,1,.3,1)
                1950ms
                forwards;
            }


            /* =====================================================
               KEYFRAMES
            ====================================================== */

            @keyframes missionReveal {
              to {
                opacity: 1;
                transform: translate3d(0,0,0);
              }
            }

            @keyframes missionLineReveal {
              to {
                opacity: 1;
                transform: translate3d(0,0,0);
                clip-path: inset(0 0 0 0);
              }
            }

            @keyframes missionCopyReveal {
              to {
                opacity: 1;
                transform: translate3d(0,0,0);
              }
            }

            @keyframes missionLineScale {
              to {
                opacity: 1;
                transform: scaleX(1);
              }
            }


            /* =====================================================
               MOBILE
            ====================================================== */

            @media (max-width: 767px) {

              .mission-section {
                min-height: 820px;
              }

              .mission-content {
                margin-top: 4rem;
              }

              .mission-line {
                transform: translateX(-55px);
              }

            }


            /* =====================================================
               REDUCED MOTION
            ====================================================== */

            @media (prefers-reduced-motion: reduce) {

              .mission-eyebrow,
              .mission-line,
              .mission-after,
              .mission-content,
              .mission-copy-block,
              .mission-side-content,
              .mission-system-line,
              .mission-meta,
              .mission-link {
                animation: none !important;
                opacity: 1 !important;
                transform: none !important;
                clip-path: none !important;
              }

            }

          `}</style>

        </section>
      </Section>

    {/* ---------------- Events ---------------- */}
        <EventsSection />

      {/* ---------------- Teams ---------------- */}
        <TeamsSection />

      {/* ---------------- Club Roadmap / Member Journey ---------------- */}

      

      {/* ---------------- RECENT EVENTS ---------------- */}
        <RecentEventsSection />
      
      {/* ---------------- SRMU / UNIVERSITY ---------------- */}
      <SRMUSection />

      <CTABanner />
    </>
  );
}