---
phase: 01
slug: foundation-database
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-05-10
---

# Phase 01 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Vitest or Node test runner for API/shared logic; frontend test tooling may be added only if the skeleton needs component assertions |
| **Config file** | `package.json`, `apps/api/package.json`, `apps/web/package.json`, `prisma/schema.prisma` |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npx prisma validate` |
| **Estimated runtime** | ~60 seconds after dependencies are installed |

---

## Sampling Rate

- **After every task commit:** Run `npm run build` once root scripts exist.
- **After every plan wave:** Run `npm run build && npx prisma validate`.
- **Before `$gsd-verify-work`:** Full suite plus local migration and seed verification must be green.
- **Max feedback latency:** 120 seconds.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | FOUND-01 | T-01 | Root scripts and dependencies do not include forbidden BaaS services | build/static | `npm run build` | W0 | pending |
| 01-02-01 | 02 | 1 | FOUND-01, FOUND-02 | T-01/T-04/T-03 | Prisma schema uses PostgreSQL relations, owner keys, and public share token isolation | schema | `npx prisma validate` | W0 | pending |
| 01-02-02 | 02 | 1 | FOUND-01, FOUND-02 | T-01 | Local migration command applies schema to PostgreSQL before verification | migration | `npx prisma migrate dev --name init` | W0 | pending |
| 01-03-01 | 03 | 2 | FOUND-01, FOUND-02 | T-02/T-03 | Seed data includes demo user/trip/share data without production secrets | seed | `npm run db:seed` | W0 | pending |
| 01-04-01 | 04 | 2 | FOUND-03, FOUND-04 | T-05 | API errors use stable structured response shape | api | `npm run build` | W0 | pending |
| 01-05-01 | 05 | 2 | FOUND-05, FOUND-06 | T-01 | Frontend route inventory maps only supplied screens and uses brand tokens | frontend | `npm run build` | W0 | pending |
| 01-06-01 | 06 | 3 | FOUND-01..FOUND-06 | T-01/T-05 | Walking skeleton proves web, API, and database can run together | integration | `npm run build && npx prisma validate` | W0 | pending |

*Status: pending, green, red, flaky*

---

## Wave 0 Requirements

- [ ] `package.json` - root workspace scripts for build, dev, Prisma validation, migration, and seed commands.
- [ ] `prisma/schema.prisma` - Prisma PostgreSQL schema file.
- [ ] `prisma/seed.ts` - deterministic local seed entrypoint.
- [ ] `apps/api/src/app.ts` - Express app export usable by tests.
- [ ] `apps/api/src/middleware/error.ts` - structured error middleware.
- [ ] `apps/web/src/routes/routeInventory.ts` - supplied route inventory constants.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Brand foundation aligns with supplied brand DNA | FOUND-06 | Phase 1 creates tokens/shell only; visual fidelity requires human comparison against supplied images | Run the web app and compare shell colors, typography, spacing, cards, controls, and navigation against `hackathon-inputs/ui-brand-dna/brand-dna-1.png` |
| Route inventory matches supplied flow/images only | FOUND-05 | Requires checking source inputs, not only code execution | Compare `apps/web/src/routes/routeInventory.ts` against `hackathon-inputs/problem-statement/Traveloop.pdf`, `hackathon-inputs/wireframes/Untitled-2026-05-10-0855.svg`, and `hackathon-inputs/visual-ui-pages/` |

---

## Validation Sign-Off

- [x] All tasks have automated verify or Wave 0 dependencies.
- [x] Sampling continuity: no 3 consecutive tasks without automated verify.
- [x] Wave 0 covers all MISSING references.
- [x] No watch-mode flags.
- [x] Feedback latency < 120s.
- [x] `nyquist_compliant: true` set in frontmatter.

**Approval:** pending
