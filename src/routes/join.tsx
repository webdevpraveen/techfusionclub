import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { club } from "@/data/club";
import { domainOptions, faqs, joinBenefits, recruitmentSteps } from "@/data/fest";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join — Tech Fusion Club" },
      {
        name: "description",
        content:
          "Apply to Tech Fusion Club: pick a domain, meet your mentor and start shipping. Recruitment process, benefits and FAQs.",
      },
      { property: "og:title", content: "Join — Tech Fusion Club" },
      {
        property: "og:description",
        content: "Recruitment process, benefits and the application form.",
      },
      { property: "og:url", content: "/join" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: Join,
});

function Join() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const endpoint = club.formspreeId ? `https://formspree.io/f/${club.formspreeId}` : null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!endpoint) {
      setError(
        "The form endpoint isn't configured yet. Email us directly and we'll pick it up from there.",
      );
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setSent(true);
    } catch {
      setError("Something went wrong sending your application. Please email us instead.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <p className="eyebrow">Join us</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            No prior experience. Just consistency.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Pick a domain, get matched with a mentor, and ship something real in your first semester.
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
            <p className="eyebrow">Application</p>
            <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Tell us about you</h2>

            {sent ? (
              <div className="mt-8 rounded-2xl border border-primary/40 bg-primary/10 p-6">
                <p className="font-display text-lg font-bold">Application received.</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A domain lead will reach out over email within a week with your task brief.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <label className="grid gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Full name
                  </span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus-visible:border-primary"
                  />
                </label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      University email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus-visible:border-primary"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Branch &amp; year
                    </span>
                    <input
                      name="branch"
                      required
                      className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus-visible:border-primary"
                    />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Preferred domain
                  </span>
                  <select
                    name="domain"
                    required
                    defaultValue=""
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus-visible:border-primary"
                  >
                    <option value="" disabled>
                      Select a domain
                    </option>
                    {domainOptions.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Why this domain?
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus-visible:border-primary"
                  />
                </label>

                {error ? (
                  <p role="alert" className="text-sm text-destructive">
                    {error}{" "}
                    <a className="underline" href={`mailto:${club.email}`}>
                      {club.email}
                    </a>
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={busy}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60"
                >
                  {busy ? "Sending…" : "Submit application"}
                </button>
              </form>
            )}
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
