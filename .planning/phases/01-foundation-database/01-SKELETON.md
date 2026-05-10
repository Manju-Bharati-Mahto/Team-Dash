# Walking Skeleton - Traveloop Hackathon App

**Phase:** 1
**Generated:** 2026-05-10

## Capability Proven End-to-End

A developer can start the local Traveloop stack, click a frontend foundation probe, and see a value written to and read from local PostgreSQL through the Express API.

## Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | React + Vite in `apps/web` | Matches D-02 and keeps hackathon frontend iteration fast. |
| API | Express + TypeScript in `apps/api` | Matches D-03 and supports modular route/controller/service boundaries. |
| Data layer | Local PostgreSQL + Prisma in `prisma/` | Matches D-04 and D-05 while preserving relational modeling and migrations. |
| Validation | Zod in API middleware and shared package helpers | Matches D-13 and creates one validation style for later phases. |
| Auth | Deferred implementation; schema carries owner keys and user records | Phase 2 owns auth flows, but Phase 1 must preserve ownership paths from D-06 through D-08. |
| Deployment target | Local full-stack run command for hackathon development | Phase 1 must prove local database-backed execution before any hosted deployment. |
| Directory layout | `apps/api`, `apps/web`, `packages/shared`, `prisma` | Matches D-01 and keeps frontend/backend/shared boundaries explicit. |

## Stack Touched In Phase 1

- [ ] Project scaffold: npm workspaces, TypeScript, build scripts, lint hooks where lightweight.
- [ ] Routing: one real Vite app route plus route inventory constants for supplied Traveloop screens.
- [ ] Database: one real write and read through Prisma against local PostgreSQL.
- [ ] UI: a foundation probe button wired to the API, plus global Traveloop shell primitives.
- [ ] Deployment: documented local full-stack run command through root scripts.

## Out Of Scope

- Complete authentication and session flows.
- Full dashboard, trip creation, itinerary, budget, packing, sharing, profile, notes, or admin page implementations.
- External booking, payment, map, AI, Firebase, Supabase, MongoDB Atlas, or hosted BaaS integrations.
- Page layouts beyond the Phase 1 shell and route placeholders approved in `01-UI-SPEC.md`.

## Subsequent Slice Plan

- Phase 2: Authenticated login, dashboard, create trip, and my trips loop.
- Phase 3: Itinerary builder, itinerary view, city search, and activity search.
- Phase 4: Trip budget and packing checklist.
- Phase 5: Shared itinerary, profile/settings, and trip notes.
- Phase 6: Final polish, validation, security, performance, and demo readiness.
- Phase 7: Optional admin analytics only if the traveler core is complete.
