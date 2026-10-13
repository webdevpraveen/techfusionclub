import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Shield,
  Cpu,
  Code2,
  Terminal,
  Users,
  Trophy,
  GraduationCap,
  Lightbulb,
  Target,
  Rocket,
} from "lucide-react";
import { club, values } from "@/data/club";
import type { GalleryPhoto } from "@/data/gallery";
import { getGalleryPhotos, getSiteSettings } from "@/lib/db";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { WavyMarquee } from "@/components/site/WavyMarquee";
import { StayAheadSection } from "@/components/site/StayAheadSection";
import { CTABanner } from "@/components/site/CTABanner";
import { GlowCard } from "@/components/site/GlowCard";
import { PillarsSection } from "@/components/site/PillarsSection";
import { FAQSection, homeFaqs } from "@/components/site/FAQSection";
import { UpcomingEventsGrid } from "@/components/site/UpcomingEventsGrid";
import { VideoHero } from "@/components/site/VideoHero";
import { SEO_CONFIG, generateFaqSchema } from "@/data/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Tech Fusion Club (TFC) SRMU | Premier Tech Club, Hackathons & Viveka Fest Lucknow",
      },
      {
        name: "description",
        content:
          "Join Tech Fusion Club (TFC) at Shri Ramswaroop Memorial University (SRMU), Lucknow. Organizers of Viveka fest, engineering hackathons, web development bootcamps, and AI workshops for students.",
      },
      {
        name: "keywords",
        content: SEO_CONFIG.masterKeywords.join(", "),
      },
      {
        property: "og:title",
        content: "Tech Fusion Club (TFC) SRMU | Coding, Hackathons & Viveka Fest Lucknow",
      },
      {
        property: "og:description",
        content:
          "Official premier student-led technical club at Shri Ramswaroop Memorial University (SRMU), Lucknow. Viveka fest, hackathons, and workshops.",
      },
      { property: "og:url", content: `${SEO_CONFIG.siteUrl}/` },
      { name: "twitter:title", content: "Tech Fusion Club (TFC) SRMU | Technical Club" },
      {
        name: "twitter:description",
        content:
          "Official student-led technical club at Shri Ramswaroop Memorial University (SRMU), Lucknow. Hackathons, workshops, and Viveka fest.",
      },
    ],
    links: [{ rel: "canonical", href: `${SEO_CONFIG.siteUrl}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(generateFaqSchema(homeFaqs)),
      },
    ],
  }),
  component: Home,
});

const ROTATING_WORDS = ["fuse", "innovate", "build", "fuse"] as const;
const PREFIX = "Where ideas ";
const SUFFIX = "into technology.";

function HeroHeadline() {
  const [phase, setPhase] = useState<"intro" | "pause" | "rotating" | "done">("intro");
  const [introProgress, setIntroProgress] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [word, setWord] = useState("fuse");
  const [isDeleting, setIsDeleting] = useState(false);

  // Intro typewriter: streams full sentence immediately on load
  useEffect(() => {
    if (phase !== "intro") return undefined;

    if (introProgress < 32) {
      const delay = introProgress < 12 ? 38 : introProgress < 16 ? 55 : 38;
      const t = setTimeout(() => {
        setIntroProgress((p) => p + 1);
      }, delay);
      return () => clearTimeout(t);
    }

    setPhase("pause");
    return undefined;
  }, [phase, introProgress]);

  // Pause after intro completes before starting word rotation
  useEffect(() => {
    if (phase !== "pause") return undefined;

    const t = setTimeout(() => {
      setPhase("rotating");
      setIsDeleting(true);
    }, 1200);

    return () => clearTimeout(t);
  }, [phase]);

  // Word rotation: rotates fuse -> innovate -> build -> fuse, then stops
  useEffect(() => {
    if (phase !== "rotating") return undefined;

    const target = ROTATING_WORDS[wordIdx] ?? "fuse";
    const isLast = wordIdx === ROTATING_WORDS.length - 1;

    if (isDeleting && word === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setWordIdx((i) => i + 1);
      }, 180);
      return () => clearTimeout(t);
    }

    if (!isDeleting && word === target) {
      if (isLast) {
        setPhase("done");
        return undefined;
      }
      const t = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
      return () => clearTimeout(t);
    }

    const delay = isDeleting ? 45 : 85;
    const t = setTimeout(() => {
      setWord((current) => {
        if (isDeleting) {
          return current.slice(0, -1);
        }
        return target.slice(0, current.length + 1);
      });
    }, delay);

    return () => clearTimeout(t);
  }, [phase, wordIdx, word, isDeleting]);

  const isIntro = phase === "intro";
  const prefixText = isIntro ? PREFIX.slice(0, introProgress) : PREFIX;
  const currentWordText = isIntro
    ? introProgress > 12
      ? "fuse".slice(0, introProgress - 12)
      : ""
    : word;
  const suffixText = isIntro
    ? introProgress > 16
      ? SUFFIX.slice(0, introProgress - 16)
      : ""
    : SUFFIX;

  const showSuffix = !isIntro || introProgress > 16;

  return (
    <h1 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight animate-rise [animation-delay:100ms] sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.75rem]">
      <span className="sr-only">Where ideas fuse into technology.</span>
      <span aria-hidden="true">
        <span className="inline-block whitespace-nowrap">
          {prefixText}
          <span className="text-gradient inline-block min-w-[0.5ch]">{currentWordText}</span>
        </span>
        {showSuffix && (
          <>
            <br className="hidden sm:block" />{" "}
            <span className="inline-block whitespace-nowrap">{suffixText}</span>
          </>
        )}
      </span>
    </h1>
  );
}

function Home() {
  const [previewPhotos, setPreviewPhotos] = useState<GalleryPhoto[]>([]);
  const [showHomepageEvents, setShowHomepageEvents] = useState(true);

  useEffect(() => {
    getGalleryPhotos().then((data) => setPreviewPhotos(data.slice(0, 6)));
    getSiteSettings().then((settings) => setShowHomepageEvents(settings.showHomepageEvents));
  }, []);

  return (
    <>
      {/* ═══════════════════ 1. SRMU-STYLE VIDEO HERO ═══════════════════ */}
      <VideoHero>
        <div className="w-full min-w-0 py-8 lg:py-0">
          {/* Eyebrow badge */}
          <div className="animate-rise [animation-delay:0ms]">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-glow border border-primary/30">
              <Sparkles className="size-3.5" />
              {club.university}
            </span>
          </div>

          {/* Giant Display Title */}
          <HeroHeadline />

          {/* Subtitle */}
          <p className="speakable-summary mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:200ms] sm:text-lg">
            {club.name} is the student-run technical club at SRMU. A community of builders
            passionate about web development, software engineering, AI/ML, and cutting-edge
            technology.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 animate-rise [animation-delay:300ms] sm:flex-row sm:items-center">
            <Link
              to="/events"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] shadow-[0_0_25px_rgba(217,72,15,0.4)]"
            >
              Explore events
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </VideoHero>

      {/* ═══════════════════ 3. WAVY RIBBON MARQUEE ═══════════════════ */}
      <div className="-mt-6 sm:-mt-10 lg:-mt-14 mb-2 sm:mb-4 relative z-20">
        <WavyMarquee speed={46} />
      </div>

      {/* ═══════════════════ 4. STAY AHEAD HIGHLIGHT ═══════════════════ */}
      <StayAheadSection />

      {/* ═══════════════════ 5. EVENTS & COMPETITIONS (ADMIN TOGGLEABLE) ═══════════════════ */}
      {showHomepageEvents && (
        <Section>
          <SectionHeading
            eyebrow="On the Horizon"
            title="Upcoming events & competitions"
            body="Hackathons, workshops, and tech-culture fests — all organized by students, for students."
            action={
              <Link
                to="/events"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
              >
                All events <ArrowRight className="size-4" />
              </Link>
            }
          />
          <div className="mt-12">
            <UpcomingEventsGrid />
          </div>
        </Section>
      )}

      {/* ═══════════════════ 7. FOUR PILLARS ═══════════════════ */}
      <Section>
        <SectionHeading
          eyebrow="The Framework"
          title="Four Pillars of Tech Fusion Club"
          body="The four core teams that run, build, manage, and scale every operation across the club."
        />
        <div className="mt-12">
          <Reveal>
            <PillarsSection />
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════ MISSION & VISION (BENTO SHOWCASE) ═══════════════════ */}
      <Section>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/80 bg-surface/60 dark:bg-card/40 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.7)]">
          {/* Ambient Background Glow Elements */}
          <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-primary/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-accent/20 blur-[110px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/5 blur-[120px]" />

          {/* Circuit Texture Overlay */}
          <div className="pointer-events-none absolute inset-0 circuit-lines opacity-35 dark:opacity-20" />

          {/* Faint Giant Watermark */}
          <div className="pointer-events-none absolute -bottom-10 -right-6 select-none font-display text-[9rem] sm:text-[14rem] font-black tracking-tighter text-foreground/[0.03] dark:text-foreground/[0.02] leading-none">
            TFC
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-center">
            {/* Left Column: Heading & Key Badges */}
            <Reveal>
              <h2 className="text-balance font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-foreground">
                A club that measures itself in{" "}
                <span className="text-gradient">things shipped.</span>
              </h2>

              <p className="mt-5 text-pretty text-base text-muted-foreground leading-relaxed">
                We believe that engineering is learned by shipping real code, building alongside
                driven peers, and leading campus initiatives that create tangible impact.
              </p>

              {/* Quick Stat Pill Chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/60 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-primary-glow" />
                  Founded 2019
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/60 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  320+ Active Builders
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/60 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-cyan-400" />
                  Student-Driven
                </span>
              </div>
            </Reveal>

            {/* Right Column: Cards for Mission & Vision + Read Full Story Button */}
            <Reveal delay={100} className="space-y-5">
              {/* Mission Card */}
              <div className="rounded-2xl border border-border/70 bg-background/60 dark:bg-card/50 p-6 backdrop-blur-md border-l-4 border-l-primary shadow-sm transition-all duration-300 hover:border-border hover:bg-background/80">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-primary font-bold">
                  <Target className="size-4" />
                  <span>The Mission</span>
                </div>
                <p className="text-pretty text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
                  {club.mission}
                </p>
              </div>

              {/* Vision Card */}
              <div className="rounded-2xl border border-border/70 bg-background/60 dark:bg-card/50 p-6 backdrop-blur-md border-l-4 border-l-accent shadow-sm transition-all duration-300 hover:border-border hover:bg-background/80">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-accent font-bold">
                  <Rocket className="size-4" />
                  <span>The Vision</span>
                </div>
                <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {club.vision}
                </p>
              </div>

              {/* CTA Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-sm text-primary-foreground shadow-[0_0_20px_rgba(217,72,15,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(217,72,15,0.45)]"
                >
                  Read the full story
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/members"
                  className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
                >
                  Meet the team
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══════════════════ 10. CORE VALUES ═══════════════════ */}
      <Section>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our core values"
          body="The principles that guide every project, event, and decision inside Tech Fusion Club."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const icons = [
              <Lightbulb className="size-6 text-primary-glow" />,
              <Users className="size-6 text-accent" />,
              <GraduationCap className="size-6 text-emerald-400" />,
              <Trophy className="size-6 text-cyan-400" />,
            ];
            return (
              <Reveal key={v.title} delay={i * 80}>
                <GlowCard className="glass lift group h-full rounded-2xl p-6 text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl border border-border bg-surface-strong">
                    {icons[i]}
                  </div>
                  <h3 className="font-display text-lg font-bold transition-colors group-hover:text-primary-glow">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════ GALLERY STRIP ═══════════════════ */}
      <Section>
        <SectionHeading
          eyebrow="From the floor"
          title="Recent event photos"
          action={
            <Link
              to="/gallery"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
            >
              View Gallery <ArrowRight className="size-4" />
            </Link>
          }
        />
        {previewPhotos.length > 0 ? (
          <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {previewPhotos.map((p) => (
              <Link
                key={p.src}
                to="/gallery"
                className="group relative overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {p.event}
                </span>
              </Link>
            ))}
          </Reveal>
        ) : (
          <Reveal className="mt-10 glass rounded-2xl p-8 text-center border border-border">
            <p className="text-muted-foreground">
              Photos will appear here once added by the admin.
            </p>
          </Reveal>
        )}
      </Section>

      {/* ═══════════════════ 16. FAQ ═══════════════════ */}
      <Section>
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently asked questions"
          body="Everything you need to know about joining and participating in Tech Fusion Club."
          align="center"
        />
        <div className="mt-12 speakable-faq">
          <FAQSection />
        </div>
      </Section>

      {/* ═══════════════════ 17. CTA BANNER ═══════════════════ */}
      <CTABanner />
    </>
  );
}
