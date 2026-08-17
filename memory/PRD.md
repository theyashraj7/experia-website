# EXPÉRIA — Product Requirements (PRD)

## Original Problem Statement
Build the definitive EXPÉRIA homepage — a premium, curiosity-driven human knowledge platform.
Core idea: "I can ask someone who has actually lived it." The homepage sells CURIOSITY (not courses).
Brand: EXPÉRIA. Tagline: "Real People. Real Experience. Real Knowledge."
Must feel like premium technology + editorial discovery + real human experience + live access + curiosity.
Frontend-first, demo mode: NO backend, auth, payments, real video, or paid infrastructure.

## User Choices
- Full homepage + fully fleshed sub-pages
- Light mode default (deliberate dark mode also built)
- Mix of real stock + AI-generated cinematic industry imagery
- Mobile bottom navigation (Home / Live / Explore / Learning)
- Frontend-only with mock data

## Architecture
- React 19 (CRA + craco), React Router 7, Tailwind, shadcn/ui.
- Motion: framer-motion (kinetic hero, scroll reveals, staggers) + Lenis smooth scroll (respects prefers-reduced-motion). react-fast-marquee for the trust strip.
- Typography: Playfair Display (headings) · Instrument Serif (display/italic) · Manrope (body) · Cabinet Grotesk (accent labels).
- Theme system: `src/context/ThemeContext.jsx` (light/dark/system, persisted).
- Data layer: `src/data/mockData.js` (experts, fields, questions, live, upcoming, learner, images).
- Mock services: `src/services/mockServices.js` — `MockSearchService` (deterministic keyword search) + `MockReservationService` (localStorage demo reservation).
- No backend used (default template server.py untouched).

## Personas
- The Casual Visitor — arrives with no intention; must be pulled into curiosity within seconds.
- The Curious Explorer — wants to understand how the world really works.
- The Reserver — convinced by a person + live access, reserves a ₹9 seat.

## Implemented (2026-06-16)
- Full Home with 17 sections in canonical order: Hero (kinetic masked line reveal + parallax + rotating curiosity search + integrated live overlay + social proof) → Trust Strip (marquee + 4 pillars) → Featured Story → Explore by Field (bento + mobile h-scroll) → Curiosity Questions → Expert Showcase → Live Now → Starting Soon (demo ₹9 reservation) → Why Live (stage viz) → Live Room Preview (chat/request stage) → How It Works (numbered chapters) → Knowledge Journey (Yashraj stats) → Recommendations → Curiosity Bridge → Final CTA → Footer.
- Sub-pages: /live, /experts, /experts/:slug, /topics, /topic/:slug, /questions, /conversations/:slug, /learning. All routes functional with mock data; unknown paths fall back to Home.
- Deterministic search (airport/chips/startup/hospital/factory/stock/space/port) with loading / results / no-results / error states; header search overlay + hero inline search.
- Demo reservation flow: idle → "Reserving…" → "Seat reserved" (localStorage), with demo toasts for live-room join/request-stage/chat.
- Light + deliberate dark mode; mobile bottom nav; accessible mobile sheet; responsive 390/430/768/1440.
- All interactive elements carry data-testid. QA: iteration_2 = 100% frontend pass.

## Backlog (not built — awaiting UI review, per STOP condition)
- P1: Real backend (experts/conversations APIs), real auth, real reservations/payments, live video infra.
- P2: Expert onboarding flow, richer topic pages, saved/followed state, notifications.

## Next Tasks
- Await UI review, then decide on backend integration scope.
