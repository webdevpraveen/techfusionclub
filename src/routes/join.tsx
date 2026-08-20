import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { club } from "@/data/club";
import { domainOptions, faqs, joinBenefits, recruitmentSteps } from "@/data/fest";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Tech Fusion Club (TFC) SRMU | Tech Community" },
      {
        name: "description",
        content:
          "Apply to join Tech Fusion Club (TFC) at SRMU. Get mentored, participate in Viveka hackathons, and learn web development with Praveen Singh (webdevpraveen).",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, join tech club, srmu coding community",
      },
      { property: "og:title", content: "Join Tech Fusion Club (TFC) SRMU" },
      {
        property: "og:description",
        content: "Apply to join Tech Fusion Club (TFC) at SRMU. Participate in Viveka hackathons.",
      },
      { property: "og:url", content: "https://techfusionclub.vercel.app/join" },
      { name: "twitter:title", content: "Join Tech Fusion Club SRMU" },
      {
        name: "twitter:description",
        content: "Apply to join Tech Fusion Club (TFC) at SRMU. Participate in Viveka hackathons.",
      },
    ],
    links: [{ rel: "canonical", href: "https://techfusionclub.vercel.app/join" }],
  }),
  component: Join,
});

function Join() {
  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <p className="eyebrow">Join us</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            No prior experience. Just consistency.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Pick a domain, get matched with a mentor, and ship something real in your first
            semester.
          </p>
        </Reveal>
      </Section>

      <Section className="pt-10">
        <SectionHeading eyebrow="Why join" title="What membership actually gets you" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {joinBenefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 50}>
              <div className="glass lift h-full rounded-2xl p-7">
                <h3 className="font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="Four steps, two weeks" />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recruitmentSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 60}>
              <div className="glass h-full rounded-2xl p-7">
                <span className="font-mono text-xs text-primary-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="apply">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="glass-strong rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Location</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Find us on Campus</h2>

            <div className="mt-8 rounded-2xl border border-primary/40 bg-primary/10 p-6">
              <p className="font-display text-lg font-bold">Directions to the Club</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                SRMU me pahuchne ke baad <strong>B1 Block</strong> me fir <strong>3rd Floor</strong>{" "}
                fir <strong>310-A room number</strong>.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.486870729398!2d81.0978324!3d26.952407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995f0b269e340f%3A0x3202aba43761750e!2sTech%20Fusion%20Club%20-%20Only%20Technical%20Club%20of%20SRMU!5e1!3m2!1sen!2sin!4v1787226040908!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Tech Fusion Club Location"
              ></iframe>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">FAQ</p>
            <ul className="mt-6 space-y-3">
              {faqs.map((f) => (
                <li key={f.q} className="glass rounded-2xl p-6">
                  <h3 className="font-display text-base font-bold">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </li>
              ))}
            </ul>
            <div className="glass mt-6 rounded-2xl p-6">
              <p className="eyebrow">Prefer email?</p>
              <a
                href={`mailto:${club.email}`}
                className="mt-3 inline-block font-mono text-sm text-primary-glow"
              >
                {club.email}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
