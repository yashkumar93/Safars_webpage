# Safars Webpage

A production-style marketing website for Safars, built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and HeroUI.

The project showcases Safars service offerings (security, AI, cloud, web/app, and R&D) with animated sections, dedicated service pages, and supporting brand pages such as About, Contact, Case Studies, and Careers.

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Highlights](#project-highlights)
4. [Routes](#routes)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [Available Scripts](#available-scripts)
8. [How the App is Organized](#how-the-app-is-organized)
9. [Customization Guide](#customization-guide)
10. [Styling and Theme System](#styling-and-theme-system)
11. [Assets](#assets)
12. [Deployment](#deployment)
13. [Known Limitations](#known-limitations)
14. [Troubleshooting](#troubleshooting)

## Overview

Safars Webpage is a modern, animated agency site focused on:

- Service storytelling with reusable service templates.
- Clear navigation and dedicated landing pages.
- Motion-enhanced UX with graceful page-load transitions.
- Responsive layout for desktop and mobile.

Core entry points:

- Home composition: `src/app/page.tsx`
- Global layout and metadata: `src/app/layout.tsx`
- Service data source: `src/lib/services-data.ts`

## Tech Stack

- Framework: Next.js `16.1.6` (App Router)
- Language: TypeScript
- UI/Styling: Tailwind CSS `v4`, custom CSS variables, custom fonts
- Animation: Framer Motion, GSAP (`@gsap/react` + `gsap`)
- Component utilities: HeroUI (`@heroui/system`, `@heroui/theme`, `@heroui/avatar`)
- Icons: `lucide-react`

## Project Highlights

- Apple-style navigation with dropdown/search behavior and dark mode toggle.
- Animated reveal page loader (`RevealLoader`) displayed at first load.
- Click spark overlay effect for micro-interaction feedback.
- Reusable `ServicePageTemplate` used by each service route.
- Data-driven service pages powered by a single typed source file.
- Static informational pages for trust and conversion:
	- About
	- Blog
	- Case Studies
	- Careers
	- Contact
	- Privacy / Terms
	- Waitlist
- Custom 404 page in `src/app/not-found.tsx`.

## Routes

### Main Routes

- `/` - Homepage
- `/about`
- `/blog`
- `/careers`
- `/case-studies`
- `/contact`
- `/privacy`
- `/terms`
- `/waitlist`

### Service Routes

- `/services/penetration-testing`
- `/services/ai-solutions`
- `/services/web-development`
- `/services/research-development`
- `/services/cloud-infrastructure`

## Project Structure

```text
.
|-- public/
|   |-- flex/
|   |-- fonts/
|   `-- services/
|-- src/
|   |-- app/
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- not-found.tsx
|   |   |-- (pages)/
|   |   `-- services/
|   |-- components/
|   |   |-- ui/
|   |   `-- *.tsx
|   `-- lib/
|       |-- services-data.ts
|       `-- utils.ts
|-- eslint.config.mjs
|-- next.config.ts
|-- postcss.config.mjs
|-- tsconfig.json
`-- package.json
```

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm (comes with Node)

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

From `package.json`:

- `npm run dev` - Start local development server.
- `npm run build` - Create production build.
- `npm run start` - Start production server (after build).
- `npm run lint` - Run ESLint checks.

## How the App is Organized

### 1. Layout and Providers

- `src/app/layout.tsx` sets global metadata and wraps the app with:
	- `HeroUIProvider`
	- `PageLoader`
	- `ClickSpark`

### 2. Homepage Composition

`src/app/page.tsx` composes the homepage from modular sections:

- Header
- Hero
- Value proposition
- Tech stack
- Flexibility
- Services
- Our difference
- CTA/work sections
- Contact
- FAQ
- Footer

### 3. Shared Layout for Content Pages

- `src/app/(pages)/layout.tsx` wraps informational pages with `Header` + `Footer`.
- `src/app/services/layout.tsx` does the same for service routes and includes service-specific metadata.

### 4. Service Pages (Data-Driven)

- Service definitions live in `src/lib/services-data.ts`.
- Each service route imports `ServicePageTemplate` and maps to one service object.
- `getServiceBySlug` helps resolve a service by route segment.

This pattern keeps content centralized and component logic reusable.

## Customization Guide

### Update service offerings

Edit `src/lib/services-data.ts`:

- `title`, `shortTitle`, `tagline`, `description`
- `features[]`
- `process[]`
- `stats[]`
- `whyChoose[]`
- `image`

If you add a new service, create a corresponding page in `src/app/services/<slug>/page.tsx` and ensure the slug matches.

### Update navigation

Edit `src/components/Header.tsx`:

- `navItems`
- Dropdown links
- Mobile menu links

### Update homepage sections

Edit `src/app/page.tsx` to reorder/remove sections.

Section-specific content and styles are in `src/components/*.tsx`.

### Update SEO metadata

- Global metadata: `src/app/layout.tsx`
- Services metadata: `src/app/services/layout.tsx`

For per-page metadata, define `export const metadata` in each route file.

## Styling and Theme System

Global styles are managed in `src/app/globals.css`:

- Tailwind CSS v4 import and theme tokens.
- Custom CSS variables for colors and typography.
- `@font-face` declarations for Suisse Intl in `public/fonts/`.
- Light/dark token sets (`:root` and `html.dark`).
- Utility classes for glass panels, glow, and animation helpers.

Theme toggling is handled in `src/components/Header.tsx` using:

- `document.documentElement.classList` (`dark` class)
- `localStorage` key: `safars-theme`

## Assets

- Service visuals: `public/services/`
- Flexible/section media: `public/flex/`
- Fonts: `public/fonts/`

The Next.js config allows remote image loading from:

- `https://i.pravatar.cc`

Configured in `next.config.ts`.

## Deployment

### Build locally

```bash
npm run build
```

### Run production server

```bash
npm run start
```

This project is suitable for Vercel deployment out of the box.

General deployment checklist:

1. Ensure all required static assets exist in `public/`.
2. Validate route links and service slugs.
3. Run lint and build before publishing.

## Known Limitations

- The contact form UI is present, but no backend submission handler is wired by default.
- There is no dedicated automated test suite configured yet.
- Content is static in source files (no CMS integration currently).

## Troubleshooting

### Build fails due to missing assets

- Check referenced files under `public/services/`, `public/flex/`, and `public/fonts/`.
- Confirm path names and letter casing.

### Styles look incorrect

- Ensure `src/app/globals.css` is imported in `src/app/layout.tsx`.
- Confirm Tailwind/PostCSS dependencies are installed.

### Dark mode does not persist

- Verify `localStorage` is available in the browser.
- Check that `safars-theme` is being set and read.

---

If you plan to productize this site, strong next steps are adding:

1. Form backend integration (API route or external service)
2. SEO enhancements (Open Graph/Twitter metadata per route)
3. Content management (CMS or MDX pipeline)
4. Tests (component and route smoke tests)