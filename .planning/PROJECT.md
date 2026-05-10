# Traveloop Hackathon App

## What This Is

Traveloop is a responsive travel planning web app for modern explorers who want to create, organize, budget, and share personalized multi-city trips. It gives users account-based trip management, city and activity discovery, itinerary building, budget visibility, packing checklists, shared public itinerary views, profile settings, and trip notes.

The project is a hackathon build. The implementation must stay grounded in the supplied Traveloop problem statement, SVG wireframe, visual UI page images, brand DNA image, and judge expectation checklist.

## Core Value

Users can create a multi-city trip, build a day-wise itinerary with activities and budgets, and review/share that plan through a polished, database-backed Traveloop interface.

## Requirements

### Validated

(None yet - ship to validate)

### Active

- [ ] Build account signup/login with validation and protected user-specific data.
- [ ] Build a dashboard/home page with recent trips, popular/recommended destinations, budget highlights, and a plan-new-trip action.
- [ ] Build create-trip and my-trips flows backed by relational trip data.
- [ ] Build itinerary builder and itinerary view flows for cities, dates, activities, ordering, and day-wise review.
- [ ] Build city search and activity search using dynamic database-backed records and filters.
- [ ] Build trip budget and cost breakdown views using stored trip costs, totals, categories, per-day averages, and over-budget indicators.
- [ ] Build per-trip packing checklist management with categories and packed state.
- [ ] Build shared/public itinerary view, profile/settings, and trip notes/journal.
- [ ] Keep optional admin analytics dashboard separate and implement only after core phases are complete.
- [ ] Match each page to its supplied visual UI/UX image as closely as possible while preserving responsive behavior.
- [ ] Use a local relational database, clear backend APIs, validation, modular code, security controls, performance-conscious queries, and proper Git commits.

### Out of Scope

- Firebase, Supabase, MongoDB Atlas, or backend-as-a-service — judge expectations explicitly require local PostgreSQL/MySQL-style backend and database setup.
- Extra screens beyond the problem statement, SVG wireframe, and provided page images — source-of-truth order forbids invented screens/layouts.
- A separate design system or mockup rule set — visual implementation should follow the supplied brand DNA and page images directly.
- External travel booking integrations, maps APIs, payment processing, real-time chat, or AI itinerary generation — not required by the problem statement and likely to distract from judged priorities.
- Optional admin analytics before the core traveler experience is complete — explicitly marked optional and only for remaining time.

## Context

### Provided Sources

The project must use only the supplied files:

- Problem statement: `hackathon-inputs/problem-statement/Traveloop.pdf`
- Judge expectations: `hackathon-inputs/judge-expectations/pic1.jpeg`, `hackathon-inputs/judge-expectations/pic2.jpeg`
- SVG wireframe: `hackathon-inputs/wireframes/Untitled-2026-05-10-0855.svg`
- UI brand DNA: `hackathon-inputs/ui-brand-dna/brand-dna-1.png`
- Visual UI pages: files under `hackathon-inputs/visual-ui-pages/`

The filenames in the workspace differ from the prompt for several page images, but the provided visual page set covers login/signup, registration, dashboard/home, create trip, itinerary builder, my trips, profile, activity/city search, itinerary view with budget, community/shared-style view, packing checklist, admin panel, expense/budget invoice, and trip notes.

### Product Shape

The PDF defines Traveloop as a personalized, intelligent, collaborative travel planning platform that helps users dream, design, organize, budget, visualize, and share trips. For the hackathon version, the emphasis is functional and insightful planning rather than external integrations.

The SVG wireframe defines the app flow and page structure: login, registration, dashboard/landing, create trip, build itinerary, trip listing, profile, activity/city search, itinerary view with budget, community/shared itinerary, packing checklist, admin panel, trip notes, and expense/budget invoice.

The visual UI pages define the final UI direction: refined off-white surfaces, dark olive primary actions, travel photography, compact cards, rounded controls, subtle dividers, dense but calm dashboards, and consistent top navigation.

### Judge Priorities

The judge checklist emphasizes, in order: coding standards, logic, modularity, frontend design, performance, scalability, security, usability, debugging skill, and database design. It also calls out clear responsive UI, consistent color scheme/layout, intuitive navigation, scalable clear code, a real-world dynamic project, database design/setup, local PostgreSQL/MySQL-style backend APIs instead of BaaS, minimal third-party APIs, robust input validation, and proper Git usage.

## Constraints

- **Source of truth**: Problem statement decides features, SVG decides flow/page structure, visual UI images decide page layout, brand DNA decides global visual consistency.
- **Database**: Use local PostgreSQL or MySQL; PostgreSQL is selected for the plan because it supports strong relational modeling and reliable local development.
- **Backend**: Build clear backend APIs with validation, authentication/authorization checks, and modular service boundaries.
- **Frontend**: Implement responsive pages as close as possible to the supplied visual UI images; do not invent new layouts.
- **Security**: Protect user data, hash passwords, validate inputs, authorize trip ownership, restrict admin analytics, avoid leaking private trip details through public share links.
- **Performance**: Use indexed relational tables and avoid heavy client-only mock data; dashboard/search/budget views should be backed by efficient queries.
- **Timeline**: Hackathon scope favors vertical slices by phase and defers admin analytics until the traveler core is working.
- **Assets**: Use supplied visual/brand inputs as implementation references; do not create alternate brand systems.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use PostgreSQL as the local relational database | Meets judge expectation for local relational design and supports complex trip/itinerary/budget data cleanly | - Pending |
| Use the provided seven-phase roadmap exactly | User specified phase structure and it aligns with feature dependencies | - Pending |
| Treat admin analytics as optional Phase 7 | Problem statement marks it optional and core traveler flows must come first | - Pending |
| Implement UI from supplied page images, not a new design system | Prompt explicitly forbids inventing layouts or separate design rules | - Pending |
| Keep third-party APIs minimal | Judge checklist asks for real dynamic local data and minimal external dependency risk | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition**:
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone**:
1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-10 after initialization*
