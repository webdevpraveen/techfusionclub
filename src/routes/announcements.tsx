import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getAnnouncements } from "@/lib/db";
import type { Announcement } from "@/data/announcements";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CalendarDays, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/announcements")({
  head: () => ({
    meta: [{ title: "Announcements | Tech Fusion Club (TFC) SRMU" }],
  }),
  component: Announcements,
});

function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnnouncements().then((data) => {
      setAnnouncements(data.filter((a) => a.published));
      setLoading(false);
    });
  }, []);

  return (
    <Section className="pb-20">
      <Reveal>
        <p className="eyebrow">Announcements</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
          Latest updates & news.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Stay informed about the latest happenings, results, and official notices from Tech Fusion
          Club.
        </p>
      </Reveal>

      <div className="mt-16">
        {loading ? (
          <div className="flex h-[200px] items-center justify-center">
            <p className="text-muted-foreground animate-pulse">Loading announcements...</p>
          </div>
        ) : announcements.length > 0 ? (
          <ul className="space-y-8">
            {announcements.map((a, i) => (
              <Reveal as="li" key={a.id} delay={i * 50}>
                <article className="glass rounded-[2rem] p-8 border border-border">
                  <div className="flex items-center gap-2 text-sm text-primary-glow font-mono uppercase tracking-wider mb-4 font-bold">
                    <CalendarDays className="size-4" />
                    <time dateTime={a.date}>
                      {a.date && !isNaN(new Date(a.date).getTime())
                        ? new Date(a.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : a.date || "Recent"}
                    </time>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-3">
                    {a.title || "Announcement"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{a.summary || ""}</p>

                  {a.content && (
                    <div className="text-foreground leading-relaxed space-y-4 mb-6 pt-6 border-t border-border/60">
                      {a.content}
                    </div>
                  )}

                  {a.image && (
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-auto rounded-xl object-cover mb-6 border border-border"
                    />
                  )}

                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-primary-glow hover:text-foreground transition-colors"
                    >
                      Read more <ExternalLink className="size-4" />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="glass hero-gradient rounded-[2rem] p-12 text-center border border-border">
            <h2 className="font-display text-2xl font-bold mb-2">No announcements yet</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We'll post important updates, results, and official notices here. Check back soon.
            </p>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
