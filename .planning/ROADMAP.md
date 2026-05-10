# Roadmap: Traveloop Hackathon App

**Created:** 2026-05-10
**Mode:** Standard granularity, vertical MVP slices
**Core Value:** Users can create a multi-city trip, build a day-wise itinerary with activities and budgets, and review/share that plan through a polished, database-backed Traveloop interface.

## Phase Overview

| Phase | Name | Goal | Requirements | Status |
|-------|------|------|--------------|--------|
| 1 | Foundation + database | Establish app skeleton, local relational database, schema, seed data, API conventions, and visual foundations | FOUND-01..FOUND-06 | Pending |
| 2 | Login, dashboard, create trip, my trips | Deliver authenticated trip ownership and the first usable traveler loop | AUTH-01..AUTH-05, TRIP-01..TRIP-05 | Pending |
| 3 | Itinerary builder, itinerary view, city search, activity search | Deliver the core trip-planning workflow with stops, activities, search, and day-wise review | ITIN-01..ITIN-05, SRCH-01..SRCH-06 | Pending |
| 4 | Trip budget and packing checklist | Add cost visibility and packing organization to each trip | BUDG-01..BUDG-04, PACK-01..PACK-05 | Pending |
| 5 | Shared itinerary, profile/settings, trip notes/journal | Add sharing, account preferences, saved destinations, and trip notes | SHARE-01..SHARE-04, PROF-01..PROF-03, NOTE-01..NOTE-03 | Pending |
| 6 | Final polish, validation, security, performance, demo readiness | Harden the app for judging and demo confidence | QUAL-01..QUAL-09 | Pending |
| 7 | Optional admin analytics dashboard only if time remains | Add admin-only analytics after the core traveler experience is complete | ADMIN-01..ADMIN-04 | Deferred |

## Phases

### Phase 1: Foundation + Database

**Goal:** Establish the technical foundation judges expect: local PostgreSQL, relational schema, modular backend API conventions, seed data, route inventory, and global visual foundations based on the supplied Traveloop inputs.
**Mode:** mvp

**UI hint:** yes

**Requirements:** FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06

**Success Criteria**:
1. Local PostgreSQL database runs with migrations for all core Traveloop entities and relationships.
2. Seed data includes realistic users/trips/cities/activities/expenses/checklist/notes/share data for demo and development.
3. Backend project structure exposes clear module boundaries and consistent validation/error handling.
4. Frontend has route/page inventory matching only the supplied screens and a global shell/navigation foundation matching the brand DNA.
5. No forbidden BaaS or non-local database dependency is present.

**Implementation Notes**:
- Use problem statement features as scope guard.
- Use SVG flow for route structure.
- Use visual UI pages and brand DNA for layout and styling references.
- Keep admin tables optional or clearly isolated until Phase 7.

**Plan Breakdown**:

**Wave 1**
- `01-01` - Walking Skeleton workspace, local PostgreSQL config, minimal Prisma probe, Express API, and Vite frontend probe.

**Wave 2 *(blocked on Wave 1 completion)***
- `01-02` - Complete Prisma/PostgreSQL relational schema and blocking local migration.

**Wave 3 *(blocked on Wave 2 completion for schema-backed work; frontend shell also depends on Wave 1)***
- `01-03` - Deterministic demo seed data and seed verification helper.
- `01-04` - Modular Express API conventions, Zod validation, structured errors, and domain route placeholders.
- `01-05` - Supplied-only frontend route inventory and Traveloop visual shell primitives.

**Wave 4 *(blocked on Wave 3 completion)***
- `01-06` - Full-stack health/status integration, verification commands, README, and skeleton sign-off.

**Cross-cutting constraints:**
- Use only local PostgreSQL with Prisma; no Firebase, Supabase, MongoDB Atlas, or backend-as-a-service dependencies.
- Preserve TypeScript frontend/backend/shared separation under `apps/web`, `apps/api`, and `packages/shared`.
- Keep Phase 1 to foundation, schema, seed, API conventions, route inventory, and shell primitives; defer full traveler workflows to later phases.
- Every API response follows `{ data: ... }` or `{ error: { code, message, details } }`.
- Route inventory and global styling must remain grounded in the supplied SVG, visual UI images, and Traveloop brand DNA.

### Phase 2: Login, Dashboard, Create Trip, My Trips

**Goal:** Deliver authenticated user access plus the first complete trip-management loop: sign up/login, see dashboard, create a trip, and manage owned trips.
**Mode:** mvp

**UI hint:** yes

**Requirements:** AUTH-01, AUTH-02, AUTH-03, AUTH-04, AUTH-05, TRIP-01, TRIP-02, TRIP-03, TRIP-04, TRIP-05

**Success Criteria**:
1. Users can sign up, log in, remain authenticated across refresh, and log out.
2. Passwords are hashed and private routes require authentication.
3. Dashboard shows user-specific trips, recommended destinations, quick trip creation, and budget highlight placeholders backed by database data.
4. Create trip persists validated trip data and optional cover metadata.
5. My trips lists only the current user's trips and supports view/edit/delete actions with ownership checks.

**Screens Covered**:
- Login/signup
- Registration
- Dashboard/home
- Create trip
- My trips

### Phase 3: Itinerary Builder, Itinerary View, City Search, Activity Search

**Goal:** Deliver Traveloop's central planning experience: users can discover cities/activities, build ordered multi-city stops, assign activities, and review a structured itinerary.
**Mode:** mvp

**UI hint:** yes

**Requirements:** ITIN-01, ITIN-02, ITIN-03, ITIN-04, ITIN-05, SRCH-01, SRCH-02, SRCH-03, SRCH-04, SRCH-05, SRCH-06

**Success Criteria**:
1. Users can add, edit, and reorder trip stops with cities and date ranges.
2. City search is database-backed and supports country/region filtering plus metadata display.
3. Activity search is database-backed and supports type, cost, and duration filtering.
4. Users can assign and remove activities from stops with planned time/cost/duration data.
5. Itinerary view renders day-wise/city-grouped activity blocks and mode toggle affordance consistent with supplied UI.

**Screens Covered**:
- Itinerary builder
- Itinerary view
- City search
- Activity search

### Phase 4: Trip Budget And Packing Checklist

**Goal:** Add cost intelligence and packing organization so each trip is practical, trackable, and demonstrably dynamic.
**Mode:** mvp

**UI hint:** yes

**Requirements:** BUDG-01, BUDG-02, BUDG-03, BUDG-04, PACK-01, PACK-02, PACK-03, PACK-04, PACK-05

**Success Criteria**:
1. Budget totals are computed from persisted expenses and planned activity costs, not hardcoded UI values.
2. Users can add/edit/delete expenses with category, description, quantity/details, unit cost, and amount.
3. Budget screen shows category breakdown, total, daily average, and over-budget state.
4. Users can manage packing checklist items with category and packed/unpacked state.
5. Packing checklist can reset packed state for reuse.

**Screens Covered**:
- Trip budget/cost breakdown
- Expense invoice/billing-style cost view from supplied visuals
- Packing checklist

### Phase 5: Shared Itinerary, Profile/Settings, Trip Notes/Journal

**Goal:** Complete the supporting traveler experience: public read-only sharing, profile/preferences, saved destinations, and trip-specific notes.
**Mode:** mvp

**UI hint:** yes

**Requirements:** SHARE-01, SHARE-02, SHARE-03, SHARE-04, PROF-01, PROF-02, PROF-03, NOTE-01, NOTE-02, NOTE-03

**Success Criteria**:
1. Users can generate a public share token/link for a trip itinerary.
2. Public itinerary route is read-only and exposes only safe public trip data.
3. Authenticated visitors can copy a shared trip into their own account.
4. Profile/settings page supports editable profile fields, language preference, saved destinations, and delete-account confirmation.
5. Trip notes can be added, edited, deleted, sorted by timestamp, and associated with trip/stop/day.

**Screens Covered**:
- Shared/public itinerary or community-style itinerary view from supplied visuals
- User profile/settings
- Trip notes/journal

### Phase 6: Final Polish, Validation, Security, Performance, Demo Readiness

**Goal:** Harden the app against the judge checklist: coding standards, logic, modularity, frontend design, performance, scalability, security, usability, debugging skill, and database design.
**Mode:** mvp

**UI hint:** yes

**Requirements:** QUAL-01, QUAL-02, QUAL-03, QUAL-04, QUAL-05, QUAL-06, QUAL-07, QUAL-08, QUAL-09

**Success Criteria**:
1. All core pages are responsive and visually close to their supplied UI images across desktop and mobile.
2. Navigation follows the SVG flow and no extra screens/routes are introduced.
3. Validation and authorization are verified for private APIs and public share APIs.
4. Search/list/dashboard/budget queries use appropriate indexes and avoid obvious performance traps.
5. Demo seed data can walk judges through login -> dashboard -> create trip -> itinerary -> budget -> packing -> sharing -> notes.
6. Project has meaningful tests or documented verification scripts and proper Git commits.

**Judge Checklist Focus**:
- Coding standards
- Logic
- Modularity
- Frontend design
- Performance
- Scalability
- Security
- Usability
- Debugging skill
- Database design

### Phase 7: Optional Admin Analytics Dashboard Only If Time Remains

**Goal:** If the core Traveloop traveler experience is complete and polished, add the optional admin analytics dashboard shown in the supplied inputs.
**Mode:** mvp

**UI hint:** yes

**Requirements:** ADMIN-01, ADMIN-02, ADMIN-03, ADMIN-04

**Success Criteria**:
1. Admin-only route is protected and unavailable to normal users.
2. Dashboard shows aggregate usage metrics such as total users, trips, cities, activities, and engagement.
3. Admin can view top cities/activities and basic user/trip tables from database-backed aggregate queries.
4. Optional analytics does not weaken privacy or delay core demo readiness.

**Screens Covered**:
- Admin analytics dashboard optional page

## Coverage Validation

- v1 requirements: 55
- v1 requirements mapped: 55
- v1 unmapped: 0
- Optional v2 admin requirements: 4

## Next Command

Run:

```bash
$gsd-plan-phase 1
```

---
*Roadmap created: 2026-05-10*
