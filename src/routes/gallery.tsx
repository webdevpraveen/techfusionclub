import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getGalleryPhotos } from "@/lib/db";
import type { GalleryPhoto } from "@/data/gallery";
import { Lightbox } from "@/components/site/Lightbox";
import { FilterPill } from "@/components/site/EventCard";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Event Gallery | Tech Fusion Club (TFC) SRMU" },
      {
        name: "description",
        content:
          "Photos from Tech Fusion Club (TFC) workshops, engineering hackathons, and the Viveka fest at SRMU. WebDevPraveen and the tech community in action.",
      },
      {
        name: "keywords",
        content:
          "Tech fusion club, tfc srmu, viveka, srmu, club, webdevpraveen, praveen singh srmu, tfc gallery, srmu tech events",
      },
      { property: "og:title", content: "Event Gallery | Tech Fusion Club (TFC) SRMU" },
      {
        property: "og:description",
        content: "Photos from Tech Fusion Club (TFC) workshops and the Viveka fest.",
      },
      { property: "og:url", content: "https://techfusionclub.vercel.app/gallery" },
      { name: "twitter:title", content: "Event Gallery | Tech Fusion Club SRMU" },
      {
        name: "twitter:description",
        content: "Photos from Tech Fusion Club (TFC) workshops and the Viveka fest.",
      },
    ],
    links: [{ rel: "canonical", href: "https://techfusionclub.vercel.app/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [allPhotos, setAllPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState<number | "all">("all");
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    getGalleryPhotos().then((data) => {
      setAllPhotos(data);
      setLoading(false);
    });
  }, []);

  const getPhotoYear = (p: GalleryPhoto) =>
    typeof p.year === "number" && !isNaN(p.year) ? p.year : new Date().getFullYear();

  const years = Array.from(new Set(allPhotos.map(getPhotoYear))).sort((a, b) => b - a);
  const photos = year === "all" ? allPhotos : allPhotos.filter((p) => getPhotoYear(p) === year);
  const items = photos.map((p) => ({
    src: p.src,
    alt: p.alt || "Tech Fusion Club",
    caption: `${p.event || "TFC Event"} · ${getPhotoYear(p)}`,
  }));

  return (
    <>
      <Section className="pb-8">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {loading ? "Loading gallery..." : `${allPhotos.length} frames from the floor.`}
          </h1>
        </Reveal>
        {!loading && allPhotos.length > 0 && (
          <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
            <FilterPill active={year === "all"} onClick={() => setYear("all")}>
              All years
            </FilterPill>
            {years.map((y) => (
              <FilterPill key={y} active={year === y} onClick={() => setYear(y)}>
                {y}
              </FilterPill>
            ))}
          </Reveal>
        )}
      </Section>

      <Section className="pt-0">
        {loading ? (
          <div className="flex h-[300px] items-center justify-center">
            <p className="text-muted-foreground animate-pulse">Loading photos...</p>
          </div>
        ) : photos.length > 0 ? (
          <ul className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>li]:mb-4">
            {photos.map((p, i) => (
              <li key={p.src} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {p.event} · {p.year}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal className="glass hero-gradient rounded-[2rem] p-12 text-center border border-border">
            <h2 className="font-display text-2xl font-bold mb-2">No photos yet</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Event photos will appear here once they are added by the admin team.
            </p>
          </Reveal>
        )}
      </Section>

      <Lightbox
        items={items}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
