<!-- GSD:project-start source:PROJECT.md -->
## Project

**Traveloop Hackathon App**

Traveloop is a responsive travel planning web app for modern explorers who want to create, organize, budget, and share personalized multi-city trips. It gives users account-based trip management, city and activity discovery, itinerary building, budget visibility, packing checklists, shared public itinerary views, profile settings, and trip notes.

The project is a hackathon build. The implementation must stay grounded in the supplied Traveloop problem statement, SVG wireframe, visual UI page images, brand DNA image, and judge expectation checklist.

**Core Value:** Users can create a multi-city trip, build a day-wise itinerary with activities and budgets, and review/share that plan through a polished, database-backed Traveloop interface.

### Constraints

- **Source of truth**: Problem statement decides features, SVG decides flow/page structure, visual UI images decide page layout, brand DNA decides global visual consistency.
- **Database**: Use local PostgreSQL or MySQL; PostgreSQL is selected for the plan because it supports strong relational modeling and reliable local development.
- **Backend**: Build clear backend APIs with validation, authentication/authorization checks, and modular service boundaries.
- **Frontend**: Implement responsive pages as close as possible to the supplied visual UI images; do not invent new layouts.
- **Security**: Protect user data, hash passwords, validate inputs, authorize trip ownership, restrict admin analytics, avoid leaking private trip details through public share links.
- **Performance**: Use indexed relational tables and avoid heavy client-only mock data; dashboard/search/budget views should be backed by efficient queries.
- **Timeline**: Hackathon scope favors vertical slices by phase and defers admin analytics until the traveler core is working.
- **Assets**: Use supplied visual/brand inputs as implementation references; do not create alternate brand systems.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommendation
- Responsive frontend application for the 14 supplied page views.
- Modular backend API layer for authentication, trips, itinerary stops, activities, budgets, packing, sharing, profile, notes, and optional admin analytics.
- Local PostgreSQL relational database.
- Server-side validation plus client-side form validation.
- Seeded local city/activity data so search and dashboards are dynamic without relying on third-party APIs.
## Required Stack Properties
| Area | Requirement From Sources | Implementation Implication |
|------|--------------------------|----------------------------|
| Database | Local PostgreSQL or MySQL; no Firebase/Supabase/MongoDB Atlas/BaaS | Use PostgreSQL with migrations and relational schema |
| Backend | Clear APIs, robust validation, scalable readable modules | Separate route/controller/service/repository or equivalent layers |
| Frontend | Responsive, clear UI, visual images are exact page references | Build page-level components matching supplied visuals |
| Data | Real-world and dynamic | Persist trips, stops, activities, expenses, checklist items, notes, users, shares |
| Security | Judge priority and account-based personal trips | Hash passwords, sessions/JWT, authorization per trip, safe public share tokens |
| Performance | Judge priority | Indexed tables, query pagination/filtering, aggregation queries for budget/admin |
## Do Not Use
- Firebase, Supabase, MongoDB Atlas, or other BaaS.
- Pure static/mock-only UI.
- External booking, payment, map, or AI APIs for core flow.
- New screens or alternate design systems.
## Confidence
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
