# Phase 01: Foundation + Database - Research

**Researched:** 2026-05-10
**Phase:** 01 - Foundation + Database
**Status:** Ready for planning

## Research Complete

Phase 1 should establish a boring, conventional full-stack foundation that future phases can extend quickly: React + Vite frontend, Express + TypeScript backend, Prisma migrations, local PostgreSQL, Zod validation, structured error handling, demo seed data, and a visual shell constrained to the supplied Traveloop inputs.

## Phase Boundary

Build the foundation, not the full product workflows. This phase should create the project skeleton, database schema, migrations, seed data, API conventions, health/status endpoints, route inventory, and global brand styling primitives. Full auth flows, trip CRUD, itinerary builder behavior, budget interactions, packing interactions, sharing, notes, and admin analytics belong to later phases.

Because Phase 1 is marked `mvp` and is the first phase with no prior summaries, planning should use a walking skeleton mindset: create the thinnest real end-to-end slice that proves the repo can run a frontend, backend, and local PostgreSQL read/write path.

## Source Synthesis

### Required stack decisions

- Use local PostgreSQL. Do not use Firebase, Supabase, MongoDB Atlas, or any backend-as-a-service.
- Use Prisma for schema modeling, migrations, and deterministic local seeding.
- Use React with Vite for the frontend foundation.
- Use Express with TypeScript for the backend API foundation.
- Use Zod for request validation and shared validation patterns.
- Keep frontend and backend separated inside one repository.

### Required product entities

The schema must anticipate the complete v1 traveler domain, even when later phases implement behavior incrementally:

- `User`
- `UserProfile`
- `Trip`
- `TripStop`
- `City`
- `Activity`
- `StopActivity`
- `Expense`
- `PackingItem`
- `TripNote`
- `PublicShare`
- `SavedDestination`

Optional admin analytics should stay deferred. If any admin support is added during Phase 1, keep it isolated and non-blocking for traveler flows.

### Supplied route/page inventory

The frontend route inventory should map only to supplied screens and problem statement features:

- Login/signup
- Registration
- Dashboard/home
- Create trip
- My trips
- Itinerary builder
- Itinerary view
- City search
- Activity search
- Trip budget/cost breakdown
- Packing checklist
- Shared/public itinerary
- User profile/settings
- Trip notes/journal
- Optional admin analytics

Phase 1 should create placeholders or route registration for these routes only when useful for future implementation. It should not design alternate pages or add unrelated routes.

## Recommended Architecture

### Repository shape

Use a simple workspace layout:

```text
apps/
  api/
    src/
      app.ts
      server.ts
      config/
      db/
      modules/
      middleware/
      shared/
  web/
    src/
      app/
      routes/
      components/
      styles/
      lib/
packages/
  shared/
prisma/
  schema.prisma
  seed.ts
```

Exact names may vary, but the plan should preserve clear frontend/backend separation, shared types or constants only where helpful, and module boundaries that future phases can extend.

### Backend modules

Create module directories for:

- `auth`
- `users`
- `trips`
- `destinations`
- `activities`
- `itinerary`
- `budget`
- `packing`
- `sharing`
- `notes`
- `health`

Phase 1 endpoints should be limited to health/status and lightweight route placeholders or inventories. Avoid implementing complete feature behavior before the relevant phase.

### API conventions

Define these foundations before feature work starts:

- JSON responses shaped as `{ "data": ... }` for success and `{ "error": { "code": "...", "message": "...", "details": ... } }` for errors.
- Zod validation middleware that returns a stable validation error code such as `VALIDATION_ERROR`.
- Not-found and generic error middleware with stable status codes.
- Request ownership and auth helpers may be stubbed structurally, but real authorization behavior is deferred to feature phases.
- Environment validation for `DATABASE_URL`, API port, CORS origin, and Node environment.

### Database schema guidance

Use Prisma models with explicit relations and indexes for expected access patterns:

- Unique user email.
- Trips indexed by `ownerId`, `startDate`, and status/date fields useful for dashboard and my-trips filters.
- Trip stops indexed by `tripId` and ordered by `position`.
- Cities indexed by `country`, `region`, and searchable name fields.
- Activities indexed by `cityId`, `category`, estimated cost, and duration.
- Stop activities indexed by `stopId`, `activityId`, planned date/time, and position.
- Expenses indexed by `tripId`, category, and date.
- Packing items indexed by `tripId`, category, and packed state.
- Trip notes indexed by `tripId`, optional `stopId`, optional note date, and created timestamp.
- Public shares indexed by unique token and `tripId`; include revocation/active state.
- Saved destinations uniquely constrained by `userId` and `cityId`.

Use enums only where they help future queries and validation: trip status, activity category, expense category, packing category, note scope, and share state. Keep enum sets broad enough for the supplied screens without overfitting.

### Seed data guidance

Seed data must support a realistic demo path:

- At least one demo user with profile metadata.
- At least one multi-city trip owned by the demo user.
- Multiple cities across countries/regions with cost index and popularity metadata.
- Activities tied to seeded cities with category, duration, cost, description, and optional image metadata.
- Ordered stops for the demo trip.
- Planned activities on stops with planned dates/times and costs.
- Expenses covering transport, stay, activities, meals, and other.
- Packing items across clothing, documents, electronics, essentials, and toiletries.
- Notes tied to trip, stop, or date.
- A public share token for the demo trip.
- Saved destinations for the demo user.

Keep seeds deterministic and local. No external travel APIs are needed.

## Visual Foundation Research

Phase 1 should establish reusable global styling variables and shell primitives, not complete page layouts. The global style should prepare later visual matching against supplied images:

- Off-white page surfaces.
- Dark olive primary action color.
- Refined travel-photo-friendly card surfaces.
- Playfair Display-style headings.
- Inter-style body text.
- Rounded cards and controls.
- Subtle dividers and borders.
- Compact navigation.
- Clean line icons.

If external font fetching is avoided for local reliability, use CSS font stacks that prefer Playfair Display and Inter but fall back gracefully.

## Threat Model Planning Inputs

Every later private feature depends on Phase 1 foundations, so the plan should include a `<threat_model>` block. Minimum threats to cover:

- `T-01`: Forbidden database/BaaS drift. Mitigation: dependency/config checks prove PostgreSQL + Prisma and no forbidden services.
- `T-02`: Password/plaintext seed leakage. Mitigation: seeded users should use non-production demo credentials and later auth must hash passwords.
- `T-03`: Public share data leakage. Mitigation: schema separates private trip ownership from active share tokens and later public APIs must query safe fields.
- `T-04`: Ownership bypass in future endpoints. Mitigation: schema carries owner foreign keys and indexed lookup paths required for authorization checks.
- `T-05`: Validation inconsistency. Mitigation: shared Zod middleware and error format are established before feature endpoints are added.

## Validation Architecture

Phase 1 should install or configure test infrastructure early enough that later phases inherit it.

Recommended validation layers:

- `npm run build` at the root should build or typecheck both workspaces.
- `npm run lint` should run lint checks if lint tooling is installed.
- API tests should validate health/status endpoint shape, validation error shape, and database connectivity.
- Prisma validation should run `npx prisma validate`.
- Migration verification should run a local PostgreSQL migration command such as `npx prisma migrate dev --name init` during implementation, with `npx prisma migrate reset --force` or equivalent only when safe for local demo data.
- Seed verification should assert that demo data exists for user, trip, cities, activities, expenses, packing items, notes, and public share.
- Frontend verification should confirm the app shell renders and route inventory constants include only supplied routes.

Plan verification should avoid watch mode and long-running servers unless explicitly started for manual UI inspection.

## Planner Guidance

Recommended plan split:

1. Project skeleton and workspace scripts.
2. Prisma/PostgreSQL schema, migrations, and seed data.
3. Backend app foundation with config, database client, validation, errors, health/status, and domain module stubs.
4. Frontend app foundation with route inventory, app shell, global brand styling, and reusable layout primitives.
5. End-to-end walking skeleton verification tying web, API, and database together through one minimal real read/write path.

Schema work modifies `prisma/schema.prisma`; the plan must include a blocking database migration/push task after schema edits and before verification.

## Risks And Watchouts

- Do not build full UI pages in Phase 1; use route inventory and shell only.
- Do not add extra screens beyond supplied sources.
- Do not use BaaS dependencies or hosted database shortcuts.
- Do not seed only lookup data; the demo path needs relational seed depth.
- Do not let TypeScript compile checks stand in for live database migration/seed verification.
- Do not hardcode dashboard/search/budget data into the client; later phases must read persisted data.
- Keep admin analytics optional and isolated.

## Research Complete Marker

## RESEARCH COMPLETE

Phase 1 can now be planned with Prisma/PostgreSQL schema-first foundations, modular Express API conventions, Vite/React route and shell setup, validation/security requirements, and walking skeleton verification.
