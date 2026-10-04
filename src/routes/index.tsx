import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Sparkles,
  ExternalLink,
  Users,
  Trophy,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { club, stats, values } from "@/data/club";
import { formatEventDate } from "@/data/events";
import type { ClubEvent } from "@/data/events";
import { getEvents } from "@/lib/db";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { StatCounter } from "@/components/site/StatCounter";
import { CTABanner } from "@/components/site/CTABanner";
import { GlowCard } from "@/components/site/GlowCard";
import { PillarsSection } from "@/components/site/PillarsSection";
import { ClubRoadmap } from "@/components/site/ClubRoadmap";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { FAQSection } from "@/components/site/FAQSection";
import { UpcomingEventsGrid } from "@/components/site/UpcomingEventsGrid";
import { VideoHero } from "@/components/site/VideoHero";
import { ProjectsShowcase } from "@/components/site/ProjectsShowcase";
import { DomainShowcase } from "@/components/site/DomainShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Fusion Club (TFC SRMU) | Coding & Viveka Fest" },
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
      { property: "og:title", content: "Tech Fusion Club (TFC SRMU) | Viveka Fest & Coding" },
      {
        name: "og:description",
        content:
          "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.",
      },
      { name: "twitter:title", content: "Tech Fusion Club (TFC SRMU)" },
      {
        name: "twitter:description",
        content:
          "Welcome to Tech Fusion Club (TFC) at SRMU! Join the most active student technical club for web development, hackathons, and Viveka fest.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [featuredEvent, setFeaturedEvent] = useState<ClubEvent | null>(null);

  useEffect(() => {
    getEvents().then((events) => {
      // Pick the first upcoming event, or the first event overall
      const upcoming = events.find((e) => e.status === "upcoming");
      setFeaturedEvent(upcoming || events[0] || null);
    });
  }, []);

  return (
    <>
      {/* ═══════════════════ 1. SRMU-STYLE VIDEO HERO ═══════════════════ */}
      <VideoHero>
        <div className="py-8 lg:py-0">
          {/* Eyebrow badge */}
          <div className="animate-rise [animation-delay:0ms]">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-glow border border-primary/30">
              <Sparkles className="size-3.5" />
              Est. {club.foundedYear} — {club.university}
            </span>
          </div>

          {/* Giant Display Title */}
          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight animate-rise [animation-delay:100ms] sm:text-5xl lg:text-6xl xl:text-7xl">
            Where ideas <span className="text-gradient">fuse</span>
            <br className="hidden sm:block" /> into technology.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:200ms] sm:text-lg">
            {club.name} is the student-run technical collective at SRMU. Six domains, one calendar
            of workshops and hackathons, and a mentorship ladder running unbroken since{" "}
            {club.foundedYear}.
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

      {/* ═══════════════════ 2. MARQUEE TICKER ═══════════════════ */}
      <div className="mt-12">
        <MarqueeStrip
          items={[
            "Viveka 6.0 — Flagship Annual Tech Fest",
            "320+ Active Members",
            "6 Technical Domains",
            "Weekly Build Nights",
            "Smart India Hackathon (SIH) Prep",
            "Open Source Contributions",
            "1-on-1 Mentorship Program",
            "Industry Guest Lectures",
          ]}
          speed={40}
        />
      </div>

      {/* ═══════════════════ 3. DOMAIN SHOWCASE ═══════════════════ */}
      <Section id="domains" className="!pt-8 !pb-2">
        <DomainShowcase />
      </Section>

      {/* ═══════════════════ 4. STATS COUNTERS ═══════════════════ */}
      <Section id="stats">
        <Reveal>
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                label={s.label}
                className="text-center"
              />
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* ═══════════════════ 4. SIX PILLARS ═══════════════════ */}
      <Section id="pillars">
        <SectionHeading
          eyebrow="The Framework"
          title="Six Pillars of Tech Fusion Club"
          body="How our technical collective operates week after week to produce industry-ready student engineers."
        />
        <div className="mt-12">
          <Reveal>
            <PillarsSection />
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════ 5. MISSION & VISION ═══════════════════ */}
      <Section id="mission">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
              A club that measures itself in things shipped.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-pretty text-lg leading-relaxed text-foreground/90">{club.mission}</p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{club.vision}</p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary-glow"
            >
              Read the full story
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════ 6. FEATURED EVENT — Viveka Highlight ═══════════════════ */}
      <Section id="featured-event">
        <SectionHeading
          eyebrow="Featured"
          title="What's next on the calendar"
          body="Our flagship fest and every workshop in between — all open to students from any department."
          action={
            <Link
              to="/events"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
            >
              All events <ArrowRight className="size-4" />
            </Link>
          }
        />

        {featuredEvent && (
          <Reveal className="glass-strong border-animated mt-12 grid overflow-hidden rounded-[2rem] lg:grid-cols-2">
            <div className="relative min-h-[18rem] overflow-hidden">
              <img
                src={featuredEvent.cover}
                alt={featuredEvent.title}
                className="size-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="p-8 sm:p-12">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {featuredEvent.status === "upcoming" ? "Upcoming" : featuredEvent.category}
              </span>
              <h3 className="mt-5 text-balance font-display text-2xl font-bold leading-snug sm:text-3xl">
                {featuredEvent.title}
              </h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {featuredEvent.summary}
              </p>
              <ul className="mt-7 space-y-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CalendarDays className="size-3.5 text-primary-glow" />{" "}
                  {formatEventDate(featuredEvent)}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="size-3.5 text-primary-glow" /> {featuredEvent.venue}
                </li>
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                >
                  Event details <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://vivekatheintelligence.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
                >
                  Viveka 6.0 Site <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </Section>

      {/* ═══════════════════ 7. UPCOMING EVENTS GRID ═══════════════════ */}
      <Section id="events">
        <SectionHeading
          eyebrow="On the Horizon"
          title="Upcoming events & competitions"
          body="Hackathons, workshops, and tech-culture fests — all organized by students, for students."
        />
        <div className="mt-12">
          <UpcomingEventsGrid />
        </div>
      </Section>

      {/* ═══════════════════ 8. PROJECTS SHOWCASE / PROOF OF WORK ═══════════════════ */}
      <Section id="projects">
        <SectionHeading
          eyebrow="Proof of Work"
          title="Shipped & built by fusion members"
          body="We don't just talk about tech — our members build open-source tools, mobile apps, and security scanners used across campus."
        />
        <div className="mt-12">
          <Reveal>
            <ProjectsShowcase />
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════ 9. CORE VALUES ═══════════════════ */}
      <Section id="values">
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

      {/* ═══════════════════ 10. MARQUEE REVERSE ═══════════════════ */}
      <MarqueeStrip
        items={[
          "Web Development",
          "AI / Machine Learning",
          "Cybersecurity & CTF",
          "App Development",
          "Cloud & DevOps",
          "UI/UX Design",
          "Hackathons",
          "Open Source",
        ]}
        speed={30}
        reverse
      />

      {/* ═══════════════════ 11. CLUB ROADMAP ═══════════════════ */}
      <Section id="roadmap">
        <SectionHeading
          eyebrow="The Lifecycle"
          title="Your 1-Year Journey in Tech Fusion"
          body="From a beginner joining day one to organizing campus hackathons and landing tech roles."
          align="center"
        />
        <div className="mt-12">
          <Reveal>
            <ClubRoadmap />
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════ 12. FAQ ═══════════════════ */}
      <Section id="faq">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently asked questions"
          body="Everything you need to know about joining and participating in Tech Fusion Club."
          align="center"
        />
        <div className="mt-12">
          <FAQSection />
        </div>
      </Section>

      {/* ═══════════════════ 13. CTA BANNER ═══════════════════ */}
      <CTABanner />
    </>
  );
}
