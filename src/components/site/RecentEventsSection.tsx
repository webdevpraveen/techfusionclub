import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type EventPhoto = {
  number: string;
  title: string;
  category: string;
  date: string;
  image: string;
};

const eventPhotos: EventPhoto[] = [
  {
    number: "01",
    title: "Viveka 6.0",
    category: "ANNUAL TECH FEST",
    date: "MAR 2027",
    image: "/images/events/event-01.jpg",
  },
  {
    number: "02",
    title: "Hackathon",
    category: "BUILD / COMPETE",
    date: "2026",
    image: "/images/events/event-02.jpg",
  },
  {
    number: "03",
    title: "Tech Workshop",
    category: "LEARN / BUILD",
    date: "2026",
    image: "/images/events/event-03.jpg",
  },
  {
    number: "04",
    title: "Coding Arena",
    category: "CODE / COMPETE",
    date: "2026",
    image: "/images/events/event-04.jpg",
  },
  {
    number: "05",
    title: "Team Moments",
    category: "TFC COMMUNITY",
    date: "2026",
    image: "/images/events/event-05.jpg",
  },
  {
    number: "06",
    title: "Project Showcase",
    category: "CREATE / SHIP",
    date: "2026",
    image: "/images/events/event-06.jpg",
  },
  {
    number: "07",
    title: "Robotics",
    category: "HARDWARE / AI",
    date: "2026",
    image: "/images/events/event-07.jpg",
  },
  {
    number: "08",
    title: "Web Workshop",
    category: "WEB / DEVELOPMENT",
    date: "2026",
    image: "/images/events/event-08.jpg",
  },
  {
    number: "09",
    title: "Tech Talk",
    category: "IDEAS / INDUSTRY",
    date: "2026",
    image: "/images/events/event-09.jpg",
  },
  {
    number: "10",
    title: "TFC Community",
    category: "PEOPLE / CULTURE",
    date: "2026",
    image: "/images/events/event-10.jpg",
  },
];

export function RecentEventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Detect which card is closest to the
   * horizontal center of the gallery.
   */
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let ticking = false;

    const updateActiveCard = () => {
      if (!container) return;

      const cards = Array.from(
        container.querySelectorAll<HTMLElement>(
          ".recent-event-card",
        ),
      );

      const containerRect =
        container.getBoundingClientRect();

      const containerCenter =
        containerRect.left +
        containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        const cardCenter =
          rect.left + rect.width / 2;

        const distance = Math.abs(
          containerCenter - cardCenter,
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveCard);
        ticking = true;
      }
    };

    container.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      updateActiveCard,
    );

    updateActiveCard();

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        updateActiveCard,
      );
    };
  }, []);

  /*
   * Scroll to a particular card and make it
   * the center/featured card.
   */
  const scrollToCard = (index: number) => {
    const container = scrollRef.current;

    if (!container) return;

    const cards =
      container.querySelectorAll<HTMLElement>(
        ".recent-event-card",
      );

    const card = cards[index];

    if (!card) return;

    const containerRect =
      container.getBoundingClientRect();

    const cardRect =
      card.getBoundingClientRect();

    const currentScroll =
      container.scrollLeft;

    const cardCenter =
      cardRect.left -
      containerRect.left +
      cardRect.width / 2;

    const targetScroll =
      currentScroll +
      cardCenter -
      containerRect.width / 2;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const goLeft = () => {
    const nextIndex =
      activeIndex <= 0
        ? eventPhotos.length - 1
        : activeIndex - 1;

    scrollToCard(nextIndex);
  };

  const goRight = () => {
    const nextIndex =
      activeIndex >= eventPhotos.length - 1
        ? 0
        : activeIndex + 1;

    scrollToCard(nextIndex);
  };

  return (
    <section className="recent-events-section">
      {/* BACKGROUND */}
      <div className="recent-events-grid" />

      <div className="recent-events-orb recent-events-orb-one" />
      <div className="recent-events-orb recent-events-orb-two" />

      {/* LEFT EDGE ARROW */}
      <button
        type="button"
        className="gallery-side-arrow gallery-side-arrow-left"
        onClick={goLeft}
        aria-label="Previous event photo"
      >
        <ArrowLeft size={21} />
      </button>

      {/* RIGHT EDGE ARROW */}
      <button
        type="button"
        className="gallery-side-arrow gallery-side-arrow-right"
        onClick={goRight}
        aria-label="Next event photo"
      >
        <ArrowRight size={21} />
      </button>

      <div className="recent-events-inner">
        {/* HEADER */}
        <div className="recent-events-header">
          <div>
            <div className="recent-events-eyebrow">
              <span className="eyebrow-line" />
              FROM THE FLOOR
            </div>

            <h2 className="recent-events-title">
              Recent event
              <span>photos</span>
            </h2>

            <p className="recent-events-description">
              Stories from the people, projects and
              moments behind Tech Fusion Club.
            </p>
          </div>

          <Link
            to="/gallery"
            className="recent-events-gallery-link"
          >
            <span>Full gallery</span>
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* COUNTER */}
        <div className="recent-events-controls">
          <div className="recent-events-count">
            <span className="count-current">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="count-divider">
              /
            </span>

            <span>
              {String(eventPhotos.length).padStart(
                2,
                "0",
              )}
            </span>
          </div>
        </div>

        {/* GALLERY */}
        <div
          ref={scrollRef}
          className="recent-events-stage"
        >
          {eventPhotos.map((event, index) => (
            <article
              key={event.number}
              className={`recent-event-card ${
                index === activeIndex
                  ? "recent-event-card-active"
                  : ""
              }`}
            >
              <div className="recent-event-image-wrapper">
                <img
                  src={event.image}
                  alt={event.title}
                  className="recent-event-image"
                  loading={
                    index < 3
                      ? "eager"
                      : "lazy"
                  }
                />

                <div className="recent-event-image-overlay" />

                {/* TOP */}
                <div className="recent-event-top">
                  <span>
                    {event.number} /{" "}
                    {String(eventPhotos.length).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <button
                    type="button"
                    className="recent-event-expand"
                    aria-label={`View ${event.title}`}
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>

                {/* CENTER HOVER */}
                <div className="recent-event-hover">
                  <span>VIEW EVENT</span>
                  <ArrowRight size={16} />
                </div>

                {/* BOTTOM */}
                <div className="recent-event-bottom">
                  <div>
                    <p className="recent-event-category">
                      {event.category}
                    </p>

                    <h3>{event.title}</h3>
                  </div>

                  <span className="recent-event-date">
                    {event.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="recent-events-footer">
          <span>
            TFC / STORIES IN MOTION
          </span>

          <div className="recent-events-progress">
            {eventPhotos.map((_, index) => (
              <span
                key={index}
                className={
                  index === activeIndex
                    ? "active"
                    : ""
                }
              />
            ))}
          </div>

          <span>
            {String(activeIndex + 1).padStart(
              2,
              "0",
            )}{" "}
            /{" "}
            {String(eventPhotos.length).padStart(
              2,
              "0",
            )}
          </span>
        </div>
      </div>

      <style>{`
        .recent-events-section {
          position: relative;
          overflow: hidden;

          padding: 8rem 0 7rem;

          background:
            radial-gradient(
              circle at 10% 30%,
              rgba(227, 59, 36, 0.07),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 70%,
              rgba(227, 59, 36, 0.05),
              transparent 30%
            ),
            hsl(var(--background));
        }

        .recent-events-inner {
          position: relative;
          z-index: 3;

          width: min(
            1280px,
            calc(100% - 8rem)
          );

          margin: 0 auto;
        }

        /* --------------------------------
           BACKGROUND GRID
        -------------------------------- */

        .recent-events-grid {
          position: absolute;
          inset: 0;

          pointer-events: none;

          opacity: 0.35;

          background-image:
            linear-gradient(
              rgba(127, 127, 127, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(127, 127, 127, 0.08) 1px,
              transparent 1px
            );

          background-size: 52px 52px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 15%,
            black 80%,
            transparent
          );
        }

        .recent-events-orb {
          position: absolute;

          border: 1px solid
            rgba(227, 59, 36, 0.08);

          border-radius: 50%;

          pointer-events: none;
        }

        .recent-events-orb-one {
          width: 520px;
          height: 520px;

          right: -270px;
          top: 160px;
        }

        .recent-events-orb-two {
          width: 300px;
          height: 300px;

          left: -150px;
          bottom: 100px;
        }

        /* --------------------------------
           SIDE ARROWS
        -------------------------------- */

        .gallery-side-arrow {
          position: absolute;

          top: 50%;
          z-index: 20;

          display: grid;

          width: 54px;
          height: 54px;

          place-items: center;

          border: 1px solid
            rgba(227, 59, 36, 0.3);

          border-radius: 50%;

          color: hsl(var(--foreground));

          background:
            hsl(var(--background));

          cursor: pointer;

          box-shadow:
            0 12px 30px
            rgba(0, 0, 0, 0.08);

          transform: translateY(-50%);

          transition:
            transform 250ms ease,
            background 250ms ease,
            color 250ms ease,
            border-color 250ms ease;
        }

        .gallery-side-arrow-left {
          left: 22px;
        }

        .gallery-side-arrow-right {
          right: 22px;
        }

        .gallery-side-arrow:hover {
          color: white;

          border-color: #e33b24;

          background: #e33b24;

          transform:
            translateY(-50%)
            scale(1.08);
        }

        /* --------------------------------
           HEADER
        -------------------------------- */

        .recent-events-header {
          display: flex;

          align-items: flex-end;
          justify-content: space-between;

          gap: 3rem;

          margin-bottom: 2.5rem;
        }

        .recent-events-eyebrow {
          display: flex;
          align-items: center;

          gap: 0.7rem;

          margin-bottom: 1.2rem;

          color: #e33b24;

          font-size: 0.68rem;
          font-weight: 700;

          letter-spacing: 0.3em;
        }

        .eyebrow-line {
          width: 30px;
          height: 1px;

          background: #e33b24;
        }

        .recent-events-title {
          margin: 0;

          color: hsl(var(--foreground));

          font-size: clamp(
            3rem,
            6vw,
            6.2rem
          );

          font-weight: 700;

          line-height: 0.9;

          letter-spacing: -0.065em;
        }

        .recent-events-title span {
          display: block;

          color: #e33b24;
        }

        .recent-events-description {
          max-width: 570px;

          margin: 1.6rem 0 0;

          color: hsl(var(--muted-foreground));

          font-size: 1rem;

          line-height: 1.7;
        }

        .recent-events-gallery-link {
          display: inline-flex;

          align-items: center;

          gap: 0.7rem;

          flex-shrink: 0;

          padding: 0.9rem 1.25rem;

          border: 1px solid
            hsl(var(--border));

          border-radius: 999px;

          color: hsl(var(--foreground));

          font-size: 0.82rem;
          font-weight: 600;

          text-decoration: none;

          transition:
            transform 300ms ease,
            border-color 300ms ease,
            background 300ms ease;
        }

        .recent-events-gallery-link:hover {
          transform: translateY(-3px);

          border-color:
            rgba(227, 59, 36, 0.5);

          background:
            rgba(227, 59, 36, 0.06);
        }

        .recent-events-gallery-link svg {
          transition:
            transform 300ms ease;
        }

        .recent-events-gallery-link:hover svg {
          transform:
            translateX(4px);
        }

        /* --------------------------------
           COUNTER
        -------------------------------- */

        .recent-events-controls {
          display: flex;

          align-items: center;
          justify-content: flex-end;

          margin-bottom: 0.8rem;
        }

        .recent-events-count {
          display: flex;

          align-items: center;

          gap: 0.35rem;

          font-family: monospace;

          font-size: 0.65rem;

          letter-spacing: 0.14em;

          color:
            hsl(var(--muted-foreground));
        }

        .count-current {
          color: #e33b24;
        }

        .count-divider {
          opacity: 0.35;
        }

        /* --------------------------------
           GALLERY
        -------------------------------- */

        .recent-events-stage {
          display: flex;

          align-items: center;

          gap: 1rem;

          width: 100%;

          overflow-x: auto;
          overflow-y: visible;

          padding: 1.5rem 0 2rem;

          scroll-behavior: smooth;

          scroll-snap-type: x mandatory;

          scrollbar-width: none;

          overscroll-behavior-x: contain;
        }

        .recent-events-stage::-webkit-scrollbar {
          display: none;
        }

        .recent-event-card {
          flex: 0 0 255px;

          scroll-snap-align: center;

          transition:
            flex-basis 650ms
              cubic-bezier(
                0.2,
                0.75,
                0.2,
                1
              );
        }

        /*
         * THE CENTER CARD
         * automatically becomes BIG.
         */

        .recent-event-card-active {
          flex-basis: 390px;
        }

        /* --------------------------------
           CARD
        -------------------------------- */

        .recent-event-image-wrapper {
          position: relative;

          height: 430px;

          overflow: hidden;

          border: 1px solid
            rgba(127, 127, 127, 0.25);

          border-radius: 1.3rem;

          background: #101214;

          isolation: isolate;

          transition:
            height 650ms
              cubic-bezier(
                0.2,
                0.75,
                0.2,
                1
              ),
            border-color 500ms ease,
            box-shadow 500ms ease;
        }

        .recent-event-card-active
          .recent-event-image-wrapper {
          height: 520px;

          border-color:
            rgba(227, 59, 36, 0.5);

          box-shadow:
            0 30px 70px
            rgba(0, 0, 0, 0.12);
        }

        /* --------------------------------
           IMAGE
        -------------------------------- */

        .recent-event-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          object-position: center;

          filter:
            saturate(0.65)
            contrast(1.06);

          transform: scale(1.03);

          transition:
            transform 900ms
              cubic-bezier(
                0.2,
                0.65,
                0.2,
                1
              ),
            filter 700ms ease;
        }

        .recent-event-card-active
          .recent-event-image {
          filter:
            saturate(0.9)
            contrast(1.08);

          transform: scale(1.04);
        }

        .recent-event-image-overlay {
          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.05),
              transparent 35%,
              rgba(0, 0, 0, 0.92) 100%
            );
        }

        /* --------------------------------
           TOP
        -------------------------------- */

        .recent-event-top {
          position: absolute;

          z-index: 5;

          top: 1rem;
          left: 1rem;
          right: 1rem;

          display: flex;

          align-items: center;
          justify-content: space-between;

          color: white;

          font-family: monospace;

          font-size: 0.63rem;

          letter-spacing: 0.12em;
        }

        .recent-event-expand {
          display: grid;

          width: 34px;
          height: 34px;

          place-items: center;

          border: 1px solid
            rgba(255, 255, 255, 0.3);

          border-radius: 50%;

          color: white;

          background:
            rgba(0, 0, 0, 0.22);

          cursor: pointer;

          backdrop-filter: blur(8px);

          transition:
            transform 300ms ease,
            background 300ms ease,
            border-color 300ms ease;
        }

        .recent-event-expand:hover {
          transform: rotate(8deg);

          border-color: #e33b24;

          background: #e33b24;
        }

        /* --------------------------------
           HOVER BUTTON
        -------------------------------- */

        .recent-event-hover {
          position: absolute;

          z-index: 6;

          top: 50%;
          left: 50%;

          display: flex;

          align-items: center;

          gap: 0.6rem;

          padding: 0.7rem 1rem;

          border: 1px solid
            rgba(255, 255, 255, 0.35);

          border-radius: 999px;

          color: white;

          background:
            rgba(0, 0, 0, 0.35);

          font-size: 0.62rem;
          font-weight: 700;

          letter-spacing: 0.15em;

          opacity: 0;

          transform:
            translate(-50%, -35%)
            scale(0.96);

          backdrop-filter: blur(12px);

          transition:
            opacity 400ms ease,
            transform 500ms ease;
        }

        .recent-event-card:hover
          .recent-event-hover {
          opacity: 1;

          transform:
            translate(-50%, -50%)
            scale(1);
        }

        .recent-event-card:hover
          .recent-event-image {
          filter:
            saturate(1)
            contrast(1.08);

          transform: scale(1.08);
        }

        /* --------------------------------
           BOTTOM
        -------------------------------- */

        .recent-event-bottom {
          position: absolute;

          z-index: 5;

          left: 1.2rem;
          right: 1.2rem;
          bottom: 1.2rem;

          display: flex;

          align-items: flex-end;
          justify-content: space-between;

          gap: 1rem;

          color: white;
        }

        .recent-event-category {
          margin: 0 0 0.4rem;

          color: #ff755f;

          font-size: 0.57rem;

          font-weight: 700;

          letter-spacing: 0.18em;
        }

        .recent-event-bottom h3 {
          margin: 0;

          color: white;

          font-size: 1.45rem;

          font-weight: 650;

          letter-spacing: -0.035em;
        }

        .recent-event-date {
          flex-shrink: 0;

          font-family: monospace;

          font-size: 0.6rem;

          letter-spacing: 0.1em;

          opacity: 0.8;
        }

        /* --------------------------------
           FOOTER
        -------------------------------- */

        .recent-events-footer {
          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-top: 0.5rem;

          color:
            hsl(var(--muted-foreground));

          font-family: monospace;

          font-size: 0.58rem;

          letter-spacing: 0.14em;
        }

        .recent-events-progress {
          display: flex;

          align-items: center;

          gap: 0.3rem;
        }

        .recent-events-progress span {
          width: 14px;
          height: 2px;

          background:
            hsl(var(--border));

          transition:
            width 300ms ease,
            background 300ms ease;
        }

        .recent-events-progress
          span.active {
          width: 38px;

          background: #e33b24;
        }

        /* --------------------------------
           DARK
        -------------------------------- */

        .dark .recent-events-grid {
          opacity: 0.2;
        }

        .dark
          .recent-event-image-wrapper {
          border-color:
            rgba(255, 255, 255, 0.12);
        }

        /* --------------------------------
           TABLET
        -------------------------------- */

        @media (max-width: 900px) {
          .recent-events-inner {
            width: calc(100% - 6rem);
          }

          .gallery-side-arrow-left {
            left: 10px;
          }

          .gallery-side-arrow-right {
            right: 10px;
          }
        }

        /* --------------------------------
           MOBILE
        -------------------------------- */

        @media (max-width: 600px) {
          .recent-events-section {
            padding: 5.5rem 0 5rem;
          }

          .recent-events-inner {
            width: calc(100% - 5rem);
          }

          .recent-events-header {
            display: block;

            margin-bottom: 2rem;
          }

          .recent-events-title {
            font-size: 15vw;
          }

          .recent-events-gallery-link {
            margin-top: 1.4rem;
          }

          .gallery-side-arrow {
            width: 42px;
            height: 42px;
          }

          .gallery-side-arrow-left {
            left: 5px;
          }

          .gallery-side-arrow-right {
            right: 5px;
          }

          .recent-event-card {
            flex-basis: 72vw;
          }

          .recent-event-card-active {
            flex-basis: 82vw;
          }

          .recent-event-image-wrapper {
            height: 420px;
          }

          .recent-event-card-active
            .recent-event-image-wrapper {
            height: 470px;
          }

          .recent-events-footer
            > span:first-child {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .recent-events-stage {
            scroll-behavior: auto;
          }

          .recent-event-card,
          .recent-event-image-wrapper,
          .recent-event-image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}