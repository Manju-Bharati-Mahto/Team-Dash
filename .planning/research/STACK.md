# Stack Research: Traveloop

**Scope:** Source-only synthesis from the supplied Traveloop problem statement, judge checklist, wireframe, brand DNA, and visual page images.

## Recommendation

Use a conventional full-stack web application with:

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

High. These stack constraints come directly from the prompt and judge checklist.
