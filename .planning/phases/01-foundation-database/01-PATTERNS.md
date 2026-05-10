# Phase 01 - Pattern Map

**Generated:** 2026-05-10
**Status:** No existing application source found

## Codebase Baseline

The repository currently contains planning artifacts, `AGENTS.md`, and supplied hackathon inputs. There are no existing app source files to reuse as direct code analogs, so Phase 1 must establish the first implementation patterns.

## Planned Pattern Anchors

| Target Area | Planned Files | Closest Existing Analog | Pattern To Establish |
|---|---|---|---|
| Workspace scaffold | `package.json`, `apps/api/package.json`, `apps/web/package.json`, `packages/shared/package.json` | `.planning/research/STACK.md` | npm workspaces with clear frontend/backend/shared separation from D-01 through D-04 |
| Prisma schema | `prisma/schema.prisma`, `prisma/migrations/**`, `prisma/seed.ts` | `.planning/phases/01-foundation-database/01-RESEARCH.md` | PostgreSQL + Prisma models and deterministic seeds from D-05 through D-11 |
| API foundation | `apps/api/src/app.ts`, `apps/api/src/modules/**`, `apps/api/src/middleware/**`, `apps/api/src/shared/**` | `.planning/phases/01-foundation-database/01-CONTEXT.md` | Express modules, Zod validation, and structured errors from D-12 through D-15 |
| Frontend foundation | `apps/web/src/App.tsx`, `apps/web/src/routes/routeInventory.ts`, `apps/web/src/styles/tokens.css` | `01-UI-SPEC.md` | React + Vite shell, supplied-only route inventory, Traveloop tokens from D-16 through D-18 |
| Walking skeleton | `apps/api/src/modules/health/**`, `apps/web/src/app/FoundationProbe.tsx` | `01-RESEARCH.md` validation architecture | One UI interaction that calls the API and performs a real PostgreSQL read/write |

## Constraints For Executors

- Read `01-CONTEXT.md`, `01-RESEARCH.md`, `01-UI-SPEC.md`, and this file before creating new structure.
- Do not import patterns from unrelated repositories.
- Keep all new implementation paths inside `apps/`, `packages/`, `prisma/`, and root config files unless a plan names an additional file explicitly.
- Treat the supplied hackathon input paths as references, not bundled production assets, unless a later phase explicitly requires bundling.
