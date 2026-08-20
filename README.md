# 🚀 Tech Fusion Club — Official Website

> **Where ideas fuse into technology.**  
> Official student-run technical collective platform covering Web Development, AI/ML, Cybersecurity, App Development, Cloud & DevOps, and UI/UX Design.

---

## ✨ Features & Architecture

- ⚡ **High-Performance Full-Stack SSR**: Built with **TanStack Start**, **React 19**, and **Vite 8**.
- ☀️🌙 **Dynamic Dark & Light Mode**: Seamless theme switching with persistent `localStorage` memory and custom OKLCH color palettes.
- 🎯 **Centered Parallax Hero & Mouse Spotlight**: Interactive cursor-following spotlight glow, 3D floating tech badges, and multi-axis scroll parallax motion.
- 🏛️ **Structured Team Hierarchy**:
  - **Faculty Coordinators (4)**
  - **General Secretaries (3)**
  - **Joint Secretaries (3)**
  - **Department Heads (6)**: Technical, Documentation, Media, Creative, Management, and Treasurer
  - **Core Teams (20)**: Active domain developers & organizers
- 📅 **Comprehensive Event System**: Filterable events by year and category with static showcase cards and external links to the annual **Viveka 6.0 Fest** (`https://viveka.techfusion.club`).
- 💎 **Ultra-Responsive & Modern UI**: Built with Tailwind CSS, Lucide Icons, glassmorphic obsidian containers, and smooth CSS keyframe micro-animations.

---

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/router) / [React 19](https://react.dev/)
- **Routing**: TanStack Router (File-based SSR routing)
- **Styling**: Tailwind CSS v4 / Vanilla CSS OKLCH design tokens
- **Icons**: Lucide React
- **Build Tool**: Vite 8 & Nitro Cloudflare Worker engine

---

## 🚀 Quick Start

### 1. Prerequisites

Make sure you have Node.js (v18+) and `npm` installed.

### 2. Installation

```bash
git clone https://github.com/webdevpraveen/techfusionclub.git
cd techfusionclub
npm install
```

### 3. Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### 4. Build for Production

```bash
npm run build
```

---

## 📄 Project Structure

```
src/
├── components/
│   ├── site/         # Core UI components (Nav, Footer, HeroBackground, MemberCard, Pillars, Partners)
│   └── ui/           # Radix primitives & utility components
├── data/             # Structured data (club, events, members, gallery, projects)
├── lib/              # Theme provider, motion helpers, and utility functions
├── routes/           # TanStack Start SSR routes (index, about, events, team, gallery, join)
└── styles.css        # Core OKLCH color design tokens & global CSS layers
```

---

## 🤝 Leadership & Community

Built with ❤️ by the **Tech Fusion Club** team for students, mentors, and technology enthusiasts across campus.
