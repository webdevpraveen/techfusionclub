export interface NavItem {
  to?: string;
  href?: string;
  label: string;
  description?: string;
  external?: boolean;
}

/**
 * Primary navigation items for the entire Tech Fusion Club website.
 * Single source of truth used by Desktop Navbar, Mobile Header, Mobile Bottom Nav, and Footer.
 */
export const primaryNavItems: NavItem[] = [
  { to: "/", label: "Home", description: "Overview of Tech Fusion Club" },
  { to: "/about", label: "About", description: "Our story, faculty & values" },
  { to: "/events", label: "Events", description: "Hackathons, fests & workshops" },
  { to: "/members", label: "Members", description: "Core team & student leads" },
  { to: "/alumni", label: "Alumni", description: "Past leaders & career paths" },
  { to: "/gallery", label: "Gallery", description: "Photos from campus expos" },
  { to: "/announcements", label: "Announcements", description: "Latest club updates" },
  { to: "/contact", label: "Contact", description: "Join us or get in touch" },
];

/**
 * High-value explore destinations for the mobile Explore sheet / quick discovery.
 * Uses href for in-page anchors so TanStack Router does not perform route matching on hashes.
 */
export const exploreNavItems: NavItem[] = [
  {
    href: "/#pillars",
    label: "Six Pillars",
    description: "Build nights, mentorship, open-source, hackathons, creative & volunteering",
  },
  {
    href: "/#projects",
    label: "Proof of Work",
    description: "Production software shipped by our student engineers",
  },
  {
    to: "/events",
    label: "Upcoming Events",
    description: "Workshops, CTFs, and Viveka annual tech fest",
  },
  {
    to: "/about",
    label: "Mission & History",
    description: "How our collective operates since 2019",
  },
  {
    to: "/gallery",
    label: "Photo Gallery",
    description: "Event highlights and campus memories",
  },
];

/**
 * Footer quick links.
 */
export const footerQuickLinks: NavItem[] = [
  { to: "/about", label: "About" },
  { to: "/members", label: "Members" },
  { to: "/events", label: "Events" },
  { href: "https://vivekatheintelligence.in/", label: "Viveka 6.0 Fest", external: true },
];

/**
 * Footer secondary links.
 */
export const footerSecondaryLinks: NavItem[] = [
  { to: "/gallery", label: "Gallery" },
  { to: "/alumni", label: "Alumni" },
  { to: "/contact", label: "Join Us" },
];
