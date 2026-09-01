# Arzoo Resturant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF)](https://www.framer.com/motion/)

A modern, responsive restaurant website built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion. This project showcases local flavours and cuisine with smooth animations, an interactive map, and a clean UI. It is designed for both production use and as an educational resource for learning the App Router, client components, and modern React patterns. All content is static and client-friendly—no backend or API is required to run it.


![project23](https://github.com/user-attachments/assets/77de8404-aeba-4f67-b5fe-0438e80bda73) ![Screenshot 2024-09-13 at 03 34 24](https://github.com/user-attachments/assets/1ef89f8a-e6f8-4bfa-9c95-453e35bbf4ee) ![Screenshot 2024-09-13 at 03 35 51](https://github.com/user-attachments/assets/9f3eb9e5-5dd7-46fd-9b23-aee505fa84d1) ![Screenshot 2024-09-13 at 03 34 55](https://github.com/user-attachments/assets/bd1df324-3ba9-45d9-a530-5ebce27cfe36) ![Screenshot 2024-09-13 at 03 35 12](https://github.com/user-attachments/assets/d6f0347c-3ec7-41d1-9d64-695ee0ddfd24) ![Screenshot 2024-09-13 at 03 35 33](https://github.com/user-attachments/assets/7bff98ba-b797-4c01-962e-ec0e2156bbd6)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features & Functionality](#features--functionality)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & How to Run](#installation--how-to-run)
- [Environment Variables](#environment-variables)
- [Routes & Navigation](#routes--navigation)
- [Components Walkthrough](#components-walkthrough)
- [Libraries & Dependencies](#libraries--dependencies)
- [Reusing Components](#reusing-components)
- [Deployment](#deployment)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Overview

**W'Food** is a single-page restaurant landing site that presents a hero section, menu items, a reservation form, an about section, an interactive map, and a footer. It is built with the **Next.js 15 App Router**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. The app is fully static and frontend-only: there is no backend server, database, or API. All data (menu items, nav links, map markers) lives in the codebase under `data/` and `types/`. The project is suitable for learning Next.js App Router, client components, animations, and responsive layout patterns.

---

## Features & Functionality

**Core features:**

- **Hero section** – Full-width hero with headline, subtitle, and imagery. Uses Framer Motion for fade-in animations keyed to scroll.
- **Menu section** – Grid of featured dishes (image, title, price). Data comes from `data/menu.ts`. Hover effects and responsive columns.
- **Reservation section** – Form with first/last name, date picker (react-day-picker), and party size select (Radix Select). UI-only; no submission backend.
- **About section** – Two-column layout (text + image) with scroll-triggered animations.
- **Map section** – Interactive Leaflet map (via react-leaflet) with multiple markers and popups. Loaded only on the client via `MapDynamic` to avoid SSR issues with Leaflet.
- **Header** – Fixed nav with logo, desktop nav links (smooth scroll via react-scroll), “Book a table” CTA, and mobile menu.
- **Footer** – Logo, link columns (Blog, New Item, Socials), and copyright.

**Technical behaviour:**

- **Single route** – The only route is `/` (home). All sections are on one page; navigation uses scroll-to-section (e.g. `#home`, `#menu`, `#about`, `#contact`, `#reservation`).
- **Client components** – Interactive pieces use `"use client"` (Header, Hero, Menu, About, Footer, Map, Nav, NavMobile, Reservation, ReservationForm, UI primitives).
- **Dynamic import** – The map is wrapped in `MapDynamic`, which uses `next/dynamic` with `ssr: false` so Leaflet runs only in the browser.
- **SEO** – Metadata (title, description, keywords, Open Graph, Twitter, icons, author) is set in `app/layout.tsx` for better search and sharing.

---

## Technology Stack

| Layer         | Technology                                                                               |
| ------------- | ---------------------------------------------------------------------------------------- |
| Framework     | Next.js 15 (App Router)                                                                  |
| Language      | TypeScript 5.6                                                                           |
| UI            | React 18.3                                                                               |
| Styling       | TailwindCSS 3.4, tailwindcss-animate                                                     |
| Fonts         | Next.js Google Fonts (Lora, Poppins)                                                     |
| Animation     | Framer Motion 11                                                                         |
| Maps          | Leaflet, react-leaflet                                                                   |
| UI primitives | Radix UI (Label, Popover, Select, Slot)                                                  |
| Icons         | Lucide React, React Icons                                                                |
| Utilities     | clsx, tailwind-merge, class-variance-authority, date-fns, react-scroll, react-responsive |

---

## Project Structure

```bash
restaurant-1/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata, global styles
│   ├── page.tsx        # Home page: composes all sections
│   ├── globals.css     # Tailwind directives + base styles
│   └── favicon.ico     # Site favicon
├── components/
│   ├── Header.tsx      # Fixed header, logo, nav, CTA, mobile menu
│   ├── Hero.tsx        # Hero section with motion animations
│   ├── Menu.tsx        # Menu grid (data from data/menu.ts)
│   ├── Reservation.tsx # Reservation section wrapper
│   ├── ReservationForm.tsx # Form: name, date picker, party size
│   ├── About.tsx       # About section (text + image)
│   ├── Map.tsx         # Leaflet map with markers (client-only)
│   ├── MapDynamic.tsx  # Dynamic wrapper for Map (ssr: false)
│   ├── Footer.tsx      # Footer with links and copyright
│   ├── Nav.tsx         # Desktop nav (react-scroll links)
│   ├── NavMobile.tsx   # Mobile menu with icons
│   ├── StyleGuide.tsx  # Style guide / UI showcase
│   └── ui/             # Reusable UI primitives
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── popover.tsx
│       └── calendar.tsx
├── data/
│   ├── menu.ts         # Menu items (img, title, price)
│   ├── navLinks.ts     # Desktop nav (path, name, offset)
│   ├── navMobileLinks.tsx # Mobile nav with icons
│   └── mapMarkers.ts   # Map marker data (position, title, subtitle, image)
├── lib/
│   ├── utils.ts        # cn() – merge Tailwind classes
│   └── variants.ts    # Framer Motion fadeIn variants
├── types/
│   ├── index.ts        # MenuItem, NavLinkConfig, MapMarkerData, etc.
│   └── react-scroll.d.ts # Type declaration for react-scroll
├── public/             # Static assets (images, icons)
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── vercel.json         # Rewrites for SPA-style routing on Vercel
└── package.json
```

---

## Installation & How to Run

**Prerequisites:** Node.js 18+ and npm (or yarn/pnpm).

**Steps:**

1. Clone the repository and go into the project folder:

   ```bash
   git clone <repository-url>
   cd restaurant-1
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Other scripts:
   - **Build:** `npm run build` – production build.
   - **Start:** `npm run start` – run the production build locally.
   - **Lint:** `npm run lint` – run ESLint (Next.js config).

You do **not** need a backend or any external service to run or build this project.

---

## Environment Variables

**You do not need any environment variables to run this project.** It works out of the box with no `.env` file.

If you later add features that need configuration (e.g. analytics, a contact form backend, or a CMS), you can:

1. Create a `.env.local` in the project root (this file is gitignored).
2. Add variables such as:

   ```env
   NEXT_PUBLIC_SITE_URL=https://restaurant-wfood.vercel.app
   # Optional examples:
   # NEXT_PUBLIC_ANALYTICS_ID=...
   # CONTACT_FORM_ENDPOINT=...
   ```

3. Use them in code via `process.env.NEXT_PUBLIC_*` (client) or `process.env.*` (server). Restart the dev server after changing `.env.local`.

For the current codebase, no env vars are read; this section is for future use only.

---

## Routes & Navigation

- **Route:** There is a single route, `/`, defined by `app/page.tsx`. It renders the main layout with all sections (Header, Hero, Menu, Reservation, About, Map, Footer).

- **In-page navigation:** Links in the header and mobile menu use **react-scroll** to smooth-scroll to section IDs: `#home`, `#menu`, `#about`, `#contact`, `#reservation`. Section IDs are set on the corresponding `<section>` elements (e.g. `id="home"`, `id="menu"`).

- **Vercel rewrites:** `vercel.json` rewrites all non-asset paths to `/` so that refreshing the page on any path still serves the app (SPA-style behaviour on Vercel).

There are no API routes or server-only routes in this project.

---

## Components Walkthrough

**app/layout.tsx**  
Root layout: loads Lora and Poppins via `next/font/google`, applies `globals.css`, and exports `metadata` (title, description, keywords, Open Graph, Twitter, icons, author, etc.). Renders `<html>` and `<body>` with font variables and background styles.

**app/page.tsx**  
Server component that composes the single page: Header, Hero, Menu, Reservation, About, MapDynamic, Footer inside a `<main>` container.

**Header**  
Client component. Tracks scroll position; toggles header background after 100px. Renders logo (Next.js `Link` + `Image`), desktop `Nav`, a react-scroll “Book a table” button, and `NavMobile` for small screens.

**Nav**  
Uses `Link` from react-scroll to scroll to section IDs. Link list and offsets come from `data/navLinks.ts`.

**NavMobile**  
Mobile menu: hamburger icon toggles a full-screen overlay with logo, scroll links (with icons from `data/navMobileLinks.tsx`), and “Book a table” button.

**Hero**  
Hero block with headline, byline, and CTA. Uses Framer Motion’s `motion.*` and `fadeIn` from `lib/variants.ts` for scroll-triggered animations. Images via Next.js `Image`.

**Menu**  
Reads `menuItems` from `data/menu.ts` and renders a responsive grid. Each item shows image, title, and price with hover effects.

**Reservation & ReservationForm**  
Reservation is a wrapper with motion; the form inside uses Radix Popover + react-day-picker for the date and Radix Select for party size. No submit handler; form is UI-only.

**About**  
Two-column layout (text + image) with motion variants.

**Map & MapDynamic**  
`Map` uses react-leaflet (MapContainer, TileLayer, Marker, Popup) and `mapMarkers` from `data/mapMarkers.ts`. It is only loaded on the client; `MapDynamic` uses `dynamic(() => import('@/components/Map'), { ssr: false })` so the map does not run during SSR.

**Footer**  
Footer with logo, link groups, and copyright. All links currently point to `/`.

**components/ui/**  
Reusable primitives built on Radix (button, input, label, select, popover) and react-day-picker (calendar). Styled with Tailwind and the `cn()` helper from `lib/utils.ts`.

---

## Libraries & Dependencies

**Next.js 15** – React framework with App Router, file-based routing, and built-in optimizations (images, fonts, code splitting). This project uses the `app/` directory and a single `page.tsx`.

**React 18 & TypeScript** – UI library and typed JavaScript. Components are written in `.tsx` with explicit types (see `types/index.ts`).

**TailwindCSS** – Utility-first CSS. Classes are used in JSX; theme (colors, fonts, breakpoints) is in `tailwind.config.js`. The `cn()` helper in `lib/utils.ts` combines `clsx` and `tailwind-merge` to merge and resolve class names safely.

**Framer Motion** – Declarative animations. `lib/variants.ts` exports a `fadeIn(direction, delay)` helper that returns `hidden`/`show` variants for use with `motion.*` and `initial`/`whileInView`.

**react-scroll** – Enables smooth scrolling to in-page sections. `<Link to="reservation" smooth offset={-150}>` scrolls to the element with `id="reservation"` with an offset.

**Radix UI** – Accessible primitives (Label, Popover, Select, Slot). Used in ReservationForm and in `components/ui/` for consistent, accessible form and overlay behaviour.

**Leaflet & react-leaflet** – Map library and React bindings. The map is rendered only on the client to avoid “window is not defined” during SSR.

**date-fns & react-day-picker** – Date formatting and calendar UI for the reservation date field.

**class-variance-authority (cva)** – Used in `components/ui/button.tsx` to define button variants (default, orange, input, ghost) and sizes in a type-safe way.

---

## Reusing Components

You can copy individual components or the whole structure into another Next.js (App Router) project.

**Example – reuse Hero and Menu:**

1. Copy `components/Hero.tsx` and `components/Menu.tsx`.
2. Copy `lib/variants.ts` and `lib/utils.ts` (Hero/Menu and UI depend on them).
3. Copy `data/menu.ts` (Menu reads `menuItems`).
4. Ensure `types/index.ts` (or equivalent) defines `MenuItem` and `FadeDirection` (or adapt imports).
5. Ensure Tailwind is set up and `tailwind.config.js` includes your `content` paths and any custom theme (e.g. `colors.body`, `fontFamily`) used by these components.
6. In your page or layout, render `<Hero />` and `<Menu />`. If you use Next.js `Image`, keep assets in `public/` and paths like `/hero/plate.png`, `/menu/item-1.png` as in this project, or update them to your asset paths.

**Example – reuse only the Button:**

Copy `components/ui/button.tsx` and `lib/utils.ts`. Install `class-variance-authority`, `clsx`, and `tailwind-merge`. Use `<Button variant="orange" size="sm">Book a table</Button>` (or any variant/size). Adjust Tailwind theme if your project uses different colour names.

**General tip:** This app uses the `@/` path alias (e.g. `@/components/Header`, `@/lib/utils`). In a new project, configure the same in `tsconfig.json` (`"paths": { "@/*": ["./*"] }`) or change imports to relative paths when reusing files.

---

## Deployment

**Vercel (recommended):**

1. Push the repo to GitHub (or connect your Git provider in Vercel).
2. In Vercel, create a new project and import the repository.
3. Leave build command as `npm run build` and output as default (Next.js).
4. Deploy. The live URL will be something like `https://<project>.vercel.app`. The project is already configured with `vercel.json` for SPA-style rewrites.

**Other platforms:** Use `npm run build` and `npm run start`, or follow your host’s guide for Next.js. Ensure Node.js 18+ is available. No environment variables are required for the current feature set.

---

## Keywords

restaurant, local food, dining, W'Food, restaurant website, food menu, book table, restaurant reservation, local flavours, modern restaurant, fine dining, gourmet food, restaurant menu, online reservation, restaurant booking, Next.js, React, TypeScript, TailwindCSS, Framer Motion, Leaflet, Radix UI, App Router, static site, frontend, learning project, open source.

---

## Conclusion

This repository is a **frontend-only**, **single-page** restaurant landing site built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion. It has **no backend or API**; all data is in the repo under `data/` and `types/`. It is suitable for learning the App Router, client components, animations, and responsive layout, and can be extended with a backend, CMS, or analytics later. Use the Live Demo link above to see it in action and the Table of Contents to jump to any section of this README.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
