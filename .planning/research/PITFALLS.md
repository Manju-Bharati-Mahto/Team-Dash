# Pitfalls Research: Traveloop

**Scope:** Source-only synthesis from supplied project materials and judge checklist.

## Common Risks

| Pitfall | Warning Sign | Prevention |
|---------|--------------|------------|
| Static mock UI masquerading as an app | Pages render but no persisted relational data changes | Start with schema, migrations, seed data, and CRUD APIs in Phase 1 |
| BaaS or non-local database use | Firebase/Supabase/MongoDB Atlas appears in dependencies/config | Keep local PostgreSQL or MySQL only |
| Extra screens creep in | Routes do not map to the problem statement/SVG/page images | Maintain route inventory against supplied pages |
| Weak relational modeling | Trip data stored as large blobs with no stops/activities/expenses relations | Normalize trips, stops, activities, expenses, notes, checklist, shares |
| UI drift from provided images | Pages use generic dashboards or a new design system | Use each visual page as direct implementation reference |
| Missing ownership checks | Users can access/edit other users' private trips by ID | Enforce user_id scoping in repositories/services and tests |
| Public share leaks private controls | Shared itinerary includes edit/delete/profile controls | Use read-only tokenized public route and minimal fields |
| Budget logic is shallow | Total is hardcoded or not tied to expenses/activity costs | Store categories and compute totals from database-backed entries |
| Search is fake | City/activity filters do not affect results | Seed cities/activities and filter through API queries |
| Admin analytics consumes core time | Optional dashboard delays itinerary/budget readiness | Keep admin to Phase 7 only |

## Phase Mapping

- Phase 1 prevents database/API/static-data risks.
- Phase 2 prevents auth/trip ownership risks.
- Phase 3 prevents itinerary/search logic gaps.
- Phase 4 prevents budget/checklist shallowness.
- Phase 5 prevents public sharing and notes/profile authorization issues.
- Phase 6 catches validation, security, performance, responsiveness, and demo risks.
- Phase 7 is optional and must not compromise the core app.
