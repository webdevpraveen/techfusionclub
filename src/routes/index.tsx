import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin, Quote, Sparkles, Zap, Shield, Cpu, Code2, Terminal, ExternalLink } from "lucide-react";
import { club, domains, stats, testimonial } from "@/data/club";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Fusion Club — Where ideas fuse into technology" },
      {
        name: "description",
        content:
          "Tech Fusion Club is a student-led technical club across six domains — web, AI/ML, security, mobile, cloud and design. Explore our events, team and the Viveka 6.0 annual fest.",
      },
      { property: "og:title", content: "Tech Fusion Club — Where ideas fuse into technology" },
      {
        property: "og:description",
        content:
          "Workshops, hackathons and the Viveka 6.0 fest, run by students across six technical domains.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const previewPhotos = galleryPhotos.slice(0, 5);

  return (
    <>
      {/* ---------------- Centered Ultra-Wide Minimalist Hero ---------------- */}
      <section className="hero-gradient relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 text-center">
        {/* Dynamic Parallax Tech Elements & Mouse Spotlight Glow */}
        <HeroBackground />
        <div className="circuit-lines pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center">
          {/* Giant Display Title */}
          <h1 className="mt-8 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight animate-rise [animation-delay:80ms] sm:text-6xl lg:text-7xl">
            Where ideas <span className="text-gradient">fuse</span> into technology.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms] sm:text-xl">
            {club.name} is the student-run technical collective at {club.university}. Six domains,
            one calendar of workshops and hackathons, and a mentorship ladder running unbroken since {club.foundedYear}.
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-col gap-4 animate-rise [animation-delay:240ms] sm:flex-row sm:items-center">
            <Link
              to="/events"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] shadow-[0_0_25px_rgba(217,72,15,0.4)]"
            >
              Explore events
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/join"
              className="glass pulse-glow inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-foreground transition-colors hover:text-primary-glow"
            >
              Join the club
            </Link>
          </div>

          {/* Domain Badges Strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 animate-rise [animation-delay:300ms]">
            {[
              { name: "Web Dev", icon: <Code2 className="size-3.5 text-primary-glow" /> },
              { name: "AI / ML", icon: <Cpu className="size-3.5 text-accent" /> },
              { name: "Cybersecurity", icon: <Shield className="size-3.5 text-emerald-400" /> },
              { name: "App Dev", icon: <Sparkles className="size-3.5 text-cyan-400" /> },
              { name: "Cloud & DevOps", icon: <Terminal className="size-3.5 text-amber-400" /> },
              { name: "UI/UX Design", icon: <Zap className="size-3.5 text-purple-400" /> },
            ].map((d) => (
              <span
                key={d.name}
                className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs text-foreground/90 border border-border/80"
              >
                {d.icon}
                {d.name}
              </span>
            ))}
          </div>

          {/* Centered Stat Counters */}
          <dl className="mt-16 grid w-full grid-cols-2 gap-8 border-t border-border/70 pt-12 sm:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} prefix={s.prefix} suffix={s.suffix} label={s.label} />
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- NEW SECTION: The 4 Core Pillars of Tech Fusion ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="The Framework"
          title="Four Pillars of Tech Fusion Club"
          body="How our technical collective operates week after week to produce industry-ready student engineers."
        />
        <div className="mt-12">
          <Reveal>
            <PillarsSection />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Mission ---------------- */}
      <Section>
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

      {/* ---------------- Featured Event ---------------- */}
      <Section>
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
                <CalendarDays className="size-3.5 text-primary-glow" /> {formatEventDate(featuredEvent)}
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
                href="https://viveka.techfusion.club"
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
              >
                Viveka 6.0 Site <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Domains ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="What we work on"
          title="Six domains, one shared standard of craft"
          body="Every member picks a domain on day one and gets a mentor inside it. Cross-domain project teams are the norm, not the exception."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={i * 60}>
              <GlowCard className="glass lift group h-full rounded-2xl p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold transition-colors group-hover:text-primary-glow">
                    {d.name}
                  </h3>
                  <span className="font-mono text-[11px] text-primary-glow/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {d.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------------- Member Projects Showcase ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="Proof of Work"
          title="Shipped & Built by Fusion Members"
          body="We don't just talk about tech — our members build open-source tools, mobile apps, and security scanners used across campus."
        />
        <div className="mt-12">
          <Reveal>
            <ProjectsShowcase />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Club Roadmap / Member Journey ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="The Lifecycle"
          title="Your 1-Year Journey in Tech Fusion"
          body="From a beginner joining day one to organizing campus hackathons and landing tech roles."
        />
        <div className="mt-12">
          <Reveal>
            <ClubRoadmap />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- NEW SECTION: Global Tech Partners & Sponsors Matrix ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="Ecosystem"
          title="Supported by Industry Leaders"
          body="Our events, cloud infrastructure, and dev tools are backed by global technology sponsors."
          align="center"
        />
        <div className="mt-12">
          <Reveal>
            <PartnersSection />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Gallery strip ---------------- */}
      <Section>
        <SectionHeading
          eyebrow="From the floor"
          title="Recent event photos"
          action={
            <Link
              to="/gallery"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow"
            >
              Full gallery <ArrowRight className="size-4" />
            </Link>
          }
        />
        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {previewPhotos.map((p, i) => (
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
                className={`aspect-square w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 ${
                  i === 0 ? "sm:aspect-square" : ""
                }`}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {p.event}
              </span>
            </Link>
          ))}
        </Reveal>
      </Section>

      {/* ---------------- Testimonial ---------------- */}
      <Section>
        <Reveal className="glass-strong relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] p-8 text-center sm:p-14">
          <Quote className="mx-auto size-8 text-primary-glow/60" />
          <blockquote className="mt-6 text-balance font-display text-xl font-medium leading-relaxed sm:text-2xl">
            “{testimonial.quote}”
          </blockquote>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {testimonial.author}
          </p>
        </Reveal>
      </Section>

      <CTABanner />
    </>
  );
}
