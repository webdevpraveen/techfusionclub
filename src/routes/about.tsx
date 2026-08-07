import { createFileRoute } from "@tanstack/react-router";
import { club, domains, faculty, timeline, values } from "@/data/club";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tech Fusion Club" },
      {
        name: "description",
        content:
          "Our mission, history and values: how Tech Fusion Club grew from a weekly build night in 2019 into a six-domain student technical club.",
      },
      { property: "og:title", content: "About — Tech Fusion Club" },
      {
        property: "og:description",
        content: "Mission, timeline, domains, values and the faculty coordinator behind the club.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <p className="eyebrow">About the club</p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Founded in {club.foundedYear}. Still run entirely by students.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {club.tagline} We are the technical club at {club.university} — six domains, a year-round
            calendar, and a mentorship structure designed to outlive every graduating batch.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="glass rounded-[1.75rem] p-8 sm:p-10">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-pretty text-lg leading-relaxed">{club.mission}</p>
          </Reveal>
          <Reveal delay={100} className="glass rounded-[1.75rem] p-8 sm:p-10">
            <p className="eyebrow">Vision</p>
            <p className="mt-4 text-pretty text-lg leading-relaxed">{club.vision}</p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="History" title="How we got here" />
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

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Broken down by domain"
          body="Each domain runs its own weekly session, curriculum and project track under a student lead."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={i * 50}>
              <div className="glass lift h-full rounded-2xl p-7">
                <h3 className="font-display text-lg font-bold">{d.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {d.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
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

      <Section>
        <Reveal className="glass-strong grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src={faculty.photo}
            alt={`${faculty.name}, ${faculty.designation}`}
            loading="lazy"
            className="h-full min-h-[20rem] w-full object-cover"
          />
          <div className="p-8 sm:p-12">
            <p className="eyebrow">Faculty coordinator</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{faculty.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{faculty.designation}</p>
            <blockquote className="mt-6 border-l-2 border-primary/50 pl-5 text-pretty leading-relaxed text-foreground/90">
              {faculty.message}
            </blockquote>
            <a
              href={`mailto:${faculty.email}`}
              className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-primary-glow"
            >
              {faculty.email}
            </a>
          </div>
        </Reveal>
      </Section>

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

      <CTABanner />
    </>
  );
}
