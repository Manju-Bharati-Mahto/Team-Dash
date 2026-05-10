# Phase 1: Foundation + Database - Context

**Gathered:** 2026-05-10
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 establishes the technical foundation for Traveloop: project structure, TypeScript setup, frontend/backend skeletons, local PostgreSQL database setup, relational schema, migrations, seed data, API conventions, validation, error handling, and a basic responsive app shell.

This phase must not build full UI pages or complete feature workflows. It prepares the app for later phases by creating the database-backed structure and visual foundation that future pages will use.

</domain>

<decisions>
## Implementation Decisions

### Stack And Project Shape
- **D-01:** Use a TypeScript monorepo-style structure with separate frontend and backend workspaces inside one repository.
- **D-02:** Use React with Vite for the responsive frontend foundation.
- **D-03:** Use an Express-based TypeScript API for the backend foundation.
- **D-04:** Use local PostgreSQL as the required relational database. Do not use Firebase, Supabase, MongoDB Atlas, or any backend-as-a-service.

### Database And Migrations
- **D-05:** Use Prisma for relational schema modeling, migrations, and database seeding.
- **D-06:** Model the Phase 1 database around these required core entities: User, Trip, TripStop, City, Activity, StopActivity, Expense or BudgetItem, PackingItem, TripNote, and PublicShare.
- **D-07:** Include closely related support fields/entities needed by later requirements where cheap and natural, such as profile metadata, saved destinations, trip ownership, stop ordering, activity category/cost/duration, expense category, packing category and packed state, note scope, and public share token state.
- **D-08:** Add indexes and unique constraints that support expected list/search/ownership/public-share access patterns from the start.

### Seed Data
- **D-09:** Seed data should be rich enough for later demo flows, not only minimal lookup rows.
- **D-10:** Include realistic cities and activities for database-backed search, plus at least one realistic demo user and multi-city trip with stops, planned activities, expenses, packing items, notes, and a public share token.
- **D-11:** Seed data must stay local and deterministic. No external travel APIs are required for Phase 1.

### API, Validation, And Errors
- **D-12:** Create a basic modular API structure by domain, with route/controller/service or similarly clear boundaries.
- **D-13:** Use Zod for request validation and shared validation patterns.
- **D-14:** Return consistent structured errors from API routes, including validation errors and generic server errors.
- **D-15:** Add basic health/status endpoints and route placeholders only where they support later phases; avoid implementing full feature behavior in Phase 1.

### Frontend Shell And Visual Foundation
- **D-16:** Create only a basic responsive app shell, route inventory, global styling, and reusable layout primitives. Do not build the full supplied UI pages yet.
- **D-17:** Route inventory must map only to the supplied problem statement, SVG flow, and visual page images.
- **D-18:** Global styling should follow Traveloop brand DNA: refined off-white surfaces, dark olive primary actions, travel-photo-ready surfaces, Playfair Display-style headings, Inter-style body text, rounded cards/controls, subtle dividers, compact navigation, and clean line icons.

### the agent's Discretion
- The agent may choose exact folder names and module boundaries as long as frontend/backend separation, TypeScript, PostgreSQL, Prisma, Zod, and the required domain entities remain clear.
- The agent may choose whether the budget table is named `expenses`, `budget_items`, or similar, but it must support persisted trip costs, categories, quantities/details, unit cost, and amount for later budget screens.
- The agent may choose lightweight tooling for lint/build scripts if it fits the existing repository and does not introduce forbidden services.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Planning
- `.planning/PROJECT.md` — Project constraints, source-of-truth rules, core value, and high-level decisions.
- `.planning/REQUIREMENTS.md` — Phase 1 requirements FOUND-01 through FOUND-06 and later entity/flow requirements the schema must anticipate.
- `.planning/ROADMAP.md` — Phase 1 goal, success criteria, and downstream phase order.
- `.planning/research/STACK.md` — Source-synthesized stack constraints and forbidden technologies.
- `.planning/research/ARCHITECTURE.md` — Suggested backend modules, core tables, and data flow.

### Supplied Hackathon Inputs
- `hackathon-inputs/problem-statement/Traveloop.pdf` — Product mission, required features, and relational database expectation.
- `hackathon-inputs/judge-expectations/pic1.jpeg` — Judge checklist page 1. Must inform quality/security/performance expectations.
- `hackathon-inputs/judge-expectations/pic2.jpeg` — Judge checklist page 2. Must inform database/backend expectations.
- `hackathon-inputs/wireframes/Untitled-2026-05-10-0855.svg` — Actual workspace SVG wireframe file. The prompt called this `Traveloop-8-hours.svg`, but the available file is this renamed SVG.
- `hackathon-inputs/ui-brand-dna/brand-dna-1.png` — Global visual styling reference.
- `hackathon-inputs/visual-ui-pages/` — Supplied page images that define later page layouts. Phase 1 may create route inventory and shell only.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- No existing application source files were found. The repository currently contains planning docs, `AGENTS.md`, and supplied hackathon inputs.

### Established Patterns
- GSD planning files already define the phase order, source constraints, PostgreSQL preference, and no-BaaS rule.
- No code-level conventions have emerged yet; Phase 1 should establish clear, boring conventions rather than inventing an elaborate framework.

### Integration Points
- New implementation should connect to the repository root and create the first app structure.
- Planning artifacts live under `.planning/`; source inputs live under `hackathon-inputs/`.

</code_context>

<specifics>
## Specific Ideas

- User selected the recommended lock-defaults path rather than extended discussion.
- Preserve the Phase 1 boundary: build foundation, schema, migrations, seed data, API conventions, validation/errors, and shell; do not implement full UI pages or complete traveler workflows yet.
- Seed demo data should anticipate later judging and demo flows.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 1-Foundation + Database*
*Context gathered: 2026-05-10*
