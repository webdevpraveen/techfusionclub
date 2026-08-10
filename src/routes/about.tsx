import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { club, domains, faculty, timeline, values } from "@/data/club";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";
import { Building2, Code2, GraduationCap, ExternalLink, Award, Sparkles, BookOpen, ShieldCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tech Fusion Club & SRMU" },
      {
        name: "description",
        content:
          "Discover Tech Fusion Club and Shri Ramswaroop Memorial University (SRMU). Learn about our technical ecosystem, university legacy, core values, and faculty mentorship.",
      },
      { property: "og:title", content: "About — Tech Fusion Club & SRMU" },
      {
        property: "og:description",
        content: "Mission, history, SRMU university profile, domain ladders, and values.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const [activeTab, setActiveTab] = useState<"club" | "srmu">("club");

  return (
    <>
      {/* ---------------- Header & Tab Switcher ---------------- */}
      <Section className="pb-6">
        <Reveal>
          <div className="flex flex-col items-start gap-4">
            <span className="eyebrow">Institutional Profile</span>
            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              {activeTab === "club" ? "Where Ideas Fuse Into Technology." : "Shri Ramswaroop Memorial University"}
            </h1>
            <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {activeTab === "club"
                ? `Founded in ${club.foundedYear}, Tech Fusion Club is the flagship student-run technical collective at SRMU — bridging classroom theory with real-world engineering across six domain tracks.`
                : "Established under UP State Act 1, SRMU is a premier university dedicated to transformative education, research excellence, and holistic student development since 1999."}
            </p>
          </div>

          {/* Interactive Mode Switcher Tabs */}
          <div className="mt-8 flex flex-wrap gap-3 border-b border-border/80 pb-4">
            <button
              onClick={() => setActiveTab("club")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-bold transition-all ${
                activeTab === "club"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code2 className="size-4" />
              <span>About Tech Fusion Club</span>
            </button>
            <button
              onClick={() => setActiveTab("srmu")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-bold transition-all ${
                activeTab === "srmu"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="size-4" />
              <span>About SRMU (University Profile)</span>
            </button>
          </div>
        </Reveal>
      </Section>

      {/* ========================================================================= */}
      {/* TAB 1: TECH FUSION CLUB                                                    */}
      {/* ========================================================================= */}
      {activeTab === "club" && (
        <>
          <Section className="pt-4">
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal className="glass rounded-[1.75rem] p-8 sm:p-10 border border-primary/20 shadow-lg">
                <p className="eyebrow text-primary-glow">Our Mission</p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground">{club.mission}</p>
              </Reveal>
              <Reveal delay={100} className="glass rounded-[1.75rem] p-8 sm:p-10 border border-accent/20 shadow-lg">
                <p className="eyebrow text-accent">Our Vision</p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground">{club.vision}</p>
              </Reveal>
            </div>
          </Section>

          {/* Timeline Section */}
          <Section>
            <SectionHeading eyebrow="Club History" title="How we grew since 2019" />
            <ol className="mt-12 space-y-4">
              {timeline.map((t, i) => (
                <Reveal as="li" key={t.year} delay={i * 60}>
                  <div className="glass lift grid gap-4 rounded-2xl p-6 sm:grid-cols-[7rem_1fr] sm:p-8">
                    <span className="font-display text-2xl font-bold text-primary-glow">{t.year}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Section>

          {/* Domain Breakdown */}
          <Section>
            <SectionHeading
              eyebrow="Technical Domains"
              title="Six specialized learning ladders"
              body="Each domain runs its own weekly build session, open-source projects, and peer mentorship."
            />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {domains.map((d, i) => (
                <Reveal as="li" key={d.slug} delay={i * 50}>
                  <div className="glass lift h-full rounded-2xl p-7 border border-border/70">
                    <h3 className="font-display text-lg font-bold">{d.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {d.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground font-medium"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Section>

          {/* Faculty Advisory */}
          <Section>
            <Reveal className="glass-strong grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.8fr_1.2fr] border border-primary/30 shadow-2xl">
              <img
                src={faculty.photo}
                alt={`${faculty.name}, ${faculty.designation}`}
                loading="lazy"
                className="h-full min-h-[20rem] w-full object-cover"
              />
              <div className="p-8 sm:p-12">
                <p className="eyebrow">Faculty Mentorship</p>
                <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{faculty.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground font-semibold">{faculty.designation}</p>
                <blockquote className="mt-6 border-l-2 border-primary/50 pl-5 text-pretty leading-relaxed text-foreground/90 italic">
                  "{faculty.message}"
                </blockquote>
                <a
                  href={`mailto:${faculty.email}`}
                  className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-primary-glow font-bold"
                >
                  ✉ {faculty.email}
                </a>
              </div>
            </Reveal>
          </Section>

          {/* Core Values */}
          <Section>
            <SectionHeading eyebrow="Pillars" title="What we hold ourselves to" align="center" />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal as="li" key={v.title} delay={i * 60}>
                  <div className="glass lift h-full rounded-2xl p-7">
                    <h3 className="font-display text-lg font-bold text-primary-glow">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Section>
        </>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ABOUT SRMU (UNIVERSITY PROFILE)                                     */}
      {/* ========================================================================= */}
      {activeTab === "srmu" && (
        <>
          <Section className="pt-4">
            <Reveal className="glass-strong rounded-[2rem] p-8 sm:p-12 border border-primary/30 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-border/80 pb-8">
                <div>
                  <span className="rounded-full bg-primary/10 border border-primary/30 px-3.5 py-1 font-mono text-xs font-bold text-primary-glow">
                    Est. 2012 · UP State Act 1
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-foreground">
                    Shri Ramswaroop Memorial University
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground font-mono">
                    Lucknow-Deva Road, Barabanki, Uttar Pradesh - 225003
                  </p>
                </div>
                <a
                  href="https://srmu.ac.in/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors w-fit"
                >
                  <span>Official SRMU Website</span>
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  Our journey began in <strong className="text-foreground">1999</strong>, with just 22 students and an unwavering commitment to quality education. Conceived by two visionary IIT Kanpur alumni — <strong className="text-foreground">Er. Pankaj Agarwal</strong> and <strong className="text-foreground">Er. Pooja Agarwal</strong> — Shri Ramswaroop Memorial University (SRMU) has grown into a premier seat of learning in North India.
                </p>
                <p>
                  SRMU offers over 100+ undergraduate, postgraduate, and doctoral programs across Engineering, Computer Applications, Management, Biotechnology, Media, Law, Pharmacy, and Agricultural Sciences.
                </p>
              </div>
            </Reveal>
          </Section>

          {/* SRMU Vision & Mission */}
          <Section>
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal className="glass rounded-[1.75rem] p-8 sm:p-10 border border-primary/20">
                <div className="flex items-center gap-3">
                  <BookOpen className="size-6 text-primary-glow" />
                  <h3 className="font-display text-xl font-bold text-foreground">SRMU Vision</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To be an internationally recognized center of excellence in higher education, fostering innovation, scientific temper, ethical leadership, and holistic societal development.
                </p>
              </Reveal>

              <Reveal delay={100} className="glass rounded-[1.75rem] p-8 sm:p-10 border border-accent/20">
                <div className="flex items-center gap-3">
                  <Award className="size-6 text-accent" />
                  <h3 className="font-display text-xl font-bold text-foreground">SRMU Mission</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To provide transformative learning experiences through outcome-based education, state-of-the-art research laboratories, industry partnerships (L&T, IBM, etc.), and continuous student mentorship.
                </p>
              </Reveal>
            </div>
          </Section>

          {/* Key University Highlights Grid */}
          <Section>
            <SectionHeading
              eyebrow="Key Highlights"
              title="Why SRMU stands out"
              body="A glimpse into university accreditations, industry honors, and campus eco-system."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={50} className="glass lift rounded-2xl p-6 border border-border/80">
                <p className="font-mono text-3xl font-bold text-primary-glow">100+</p>
                <h4 className="mt-2 font-display text-base font-bold text-foreground">UG & PG Programs</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Covering cutting-edge fields like AI/ML, Cyber Security, Cloud, FinTech, and IoT.
                </p>
              </Reveal>

              <Reveal delay={100} className="glass lift rounded-2xl p-6 border border-border/80">
                <p className="font-mono text-3xl font-bold text-accent">L&T</p>
                <h4 className="mt-2 font-display text-base font-bold text-foreground">Industry Honors</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Joint degree programs with Larsen & Toubro for practical industrial mastery.
                </p>
              </Reveal>

              <Reveal delay={150} className="glass lift rounded-2xl p-6 border border-border/80">
                <p className="font-mono text-3xl font-bold text-emerald-400">100 Acre</p>
                <h4 className="mt-2 font-display text-base font-bold text-foreground">Lush Campus</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  State-of-the-art computer labs, high-speed WiFi, innovation cells, and sports arenas.
                </p>
              </Reveal>

              <Reveal delay={200} className="glass lift rounded-2xl p-6 border border-border/80">
                <p className="font-mono text-3xl font-bold text-amber-400">1999</p>
                <h4 className="mt-2 font-display text-base font-bold text-foreground">Legacy of Trust</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Over two decades of educational excellence empowering thousands of successful alumni globally.
                </p>
              </Reveal>
            </div>
          </Section>
        </>
      )}

      <CTABanner />
    </>
  );
}
