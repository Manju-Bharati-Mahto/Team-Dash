# Requirements: Traveloop Hackathon App

**Defined:** 2026-05-10
**Core Value:** Users can create a multi-city trip, build a day-wise itinerary with activities and budgets, and review/share that plan through a polished, database-backed Traveloop interface.

## v1 Requirements

### Foundation

- [ ] **FOUND-01**: Application uses a local PostgreSQL relational database with migrations and seed data.
- [ ] **FOUND-02**: Database schema models users, trips, stops, cities, activities, trip activities, expenses, packing items, public shares, saved destinations, profiles, and trip notes with proper relationships.
- [ ] **FOUND-03**: Backend exposes clear modular APIs for each core domain area.
- [ ] **FOUND-04**: Backend validates request inputs and returns consistent error responses.
- [ ] **FOUND-05**: Frontend route inventory maps only to the supplied problem statement, SVG flow, and visual page images.
- [ ] **FOUND-06**: Global UI styling follows the supplied Traveloop brand DNA: off-white surfaces, dark olive primary actions, refined travel photography, Playfair Display-style headings, Inter-style body text, rounded cards/controls, and clean line icons.

### Authentication

- [ ] **AUTH-01**: User can sign up with required profile/account fields and password validation.
- [ ] **AUTH-02**: User can log in with email/password and receives useful validation errors.
- [ ] **AUTH-03**: User session persists across refresh and protects authenticated routes.
- [ ] **AUTH-04**: User can log out.
- [ ] **AUTH-05**: Passwords are securely hashed and never stored in plaintext.

### Dashboard And Trips

- [ ] **TRIP-01**: User can view a dashboard/home page with recent trips, recommended destinations, quick planning action, and budget highlights.
- [ ] **TRIP-02**: User can create a trip with name, start date, end date, description, destination/place field, and optional cover photo metadata.
- [ ] **TRIP-03**: User can view all owned trips in a my-trips list grouped or filterable by ongoing, upcoming, and completed states.
- [ ] **TRIP-04**: User can view trip cards showing name, date range, destination count, summary, and cover image.
- [ ] **TRIP-05**: User can edit, view, and delete only trips they own.

### Itinerary And Search

- [ ] **ITIN-01**: User can add itinerary stops with city, date range, order, and notes/description.
- [ ] **ITIN-02**: User can reorder itinerary stops.
- [ ] **ITIN-03**: User can assign activities to a stop with planned date/time, cost, duration, and category.
- [ ] **ITIN-04**: User can view itinerary by day/city with city headers and activity blocks.
- [ ] **ITIN-05**: User can toggle itinerary view modes such as list/calendar where represented by the supplied UI.
- [ ] **SRCH-01**: User can search cities from database-backed city records.
- [ ] **SRCH-02**: User can filter cities by country/region and view metadata such as cost index and popularity.
- [ ] **SRCH-03**: User can add a city from search to a trip.
- [ ] **SRCH-04**: User can search activities from database-backed activity records.
- [ ] **SRCH-05**: User can filter activities by type, cost, and duration.
- [ ] **SRCH-06**: User can add/remove activities for a trip stop.

### Budget And Packing

- [ ] **BUDG-01**: User can view estimated total trip cost calculated from persisted expense/activity data.
- [ ] **BUDG-02**: User can view cost breakdown by transport, stay, activities, meals, and other relevant categories.
- [ ] **BUDG-03**: User can view daily average cost and over-budget indicators.
- [ ] **BUDG-04**: User can add/edit/delete trip expense items with category, description, quantity/details, unit cost, and amount.
- [ ] **PACK-01**: User can view a packing checklist for a trip.
- [ ] **PACK-02**: User can add and remove packing checklist items.
- [ ] **PACK-03**: User can mark packing items as packed/unpacked.
- [ ] **PACK-04**: User can categorize packing items by type such as clothing, documents, electronics, essentials, and toiletries.
- [ ] **PACK-05**: User can reset checklist state for reuse.

### Sharing Profile Notes

- [ ] **SHARE-01**: User can create a public share link/token for an itinerary.
- [ ] **SHARE-02**: Public itinerary view is read-only and does not expose private edit controls.
- [ ] **SHARE-03**: Visitor can view itinerary summary and day/city/activity structure from the public link.
- [ ] **SHARE-04**: Visitor can copy a shared trip into their own account when authenticated.
- [ ] **PROF-01**: User can view profile/settings with editable name, photo metadata, email, language preference, and privacy-related controls.
- [ ] **PROF-02**: User can manage saved destinations.
- [ ] **PROF-03**: User can delete their account with confirmation.
- [ ] **NOTE-01**: User can add trip notes tied to a trip, stop, or day.
- [ ] **NOTE-02**: User can edit and delete their own notes.
- [ ] **NOTE-03**: User can view notes sorted by timestamp and filtered by all/day/stop where represented by the supplied UI.

### Quality And Demo

- [ ] **QUAL-01**: UI is responsive across desktop and mobile breakpoints.
- [ ] **QUAL-02**: All implemented pages visually follow their matching supplied UI page images as closely as practical.
- [ ] **QUAL-03**: Navigation between core pages is intuitive and matches the SVG/user flow.
- [ ] **QUAL-04**: Private APIs enforce authentication and trip ownership authorization.
- [ ] **QUAL-05**: Public itinerary APIs expose only public share data.
- [ ] **QUAL-06**: Database queries used by list/search/dashboard/budget pages are indexed or otherwise performance-conscious.
- [ ] **QUAL-07**: Core flows have meaningful tests or verification scripts for validation, authorization, data persistence, and budget calculations.
- [ ] **QUAL-08**: Demo seed data shows a realistic multi-city trip with stops, activities, expenses, checklist items, notes, and share link.
- [ ] **QUAL-09**: Git history contains proper commits for planning and implementation work.

## v2 Requirements

### Optional Admin Analytics

- **ADMIN-01**: Admin can view aggregate counts for users, trips, cities, activities, and engagement.
- **ADMIN-02**: Admin can view top cities and top activities.
- **ADMIN-03**: Admin can view user/trip tables for monitoring.
- **ADMIN-04**: Admin analytics are protected by admin-only authorization.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Firebase, Supabase, MongoDB Atlas, or BaaS | Explicitly forbidden by technical expectations |
| Extra screens beyond supplied sources | Prompt forbids invented screens and layouts |
| Separate design system/mockup rules | Prompt says to use provided page images and brand DNA directly |
| External booking/payment integrations | Not part of problem statement and too risky for hackathon scope |
| Third-party travel APIs as core dependency | Judge checklist asks for dynamic local project with minimal third-party APIs |
| Admin analytics in core v1 | Optional only if time remains |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| FOUND-05 | Phase 1 | Pending |
| FOUND-06 | Phase 1 | Pending |
| AUTH-01 | Phase 2 | Pending |
| AUTH-02 | Phase 2 | Pending |
| AUTH-03 | Phase 2 | Pending |
| AUTH-04 | Phase 2 | Pending |
| AUTH-05 | Phase 2 | Pending |
| TRIP-01 | Phase 2 | Pending |
| TRIP-02 | Phase 2 | Pending |
| TRIP-03 | Phase 2 | Pending |
| TRIP-04 | Phase 2 | Pending |
| TRIP-05 | Phase 2 | Pending |
| ITIN-01 | Phase 3 | Pending |
| ITIN-02 | Phase 3 | Pending |
| ITIN-03 | Phase 3 | Pending |
| ITIN-04 | Phase 3 | Pending |
| ITIN-05 | Phase 3 | Pending |
| SRCH-01 | Phase 3 | Pending |
| SRCH-02 | Phase 3 | Pending |
| SRCH-03 | Phase 3 | Pending |
| SRCH-04 | Phase 3 | Pending |
| SRCH-05 | Phase 3 | Pending |
| SRCH-06 | Phase 3 | Pending |
| BUDG-01 | Phase 4 | Pending |
| BUDG-02 | Phase 4 | Pending |
| BUDG-03 | Phase 4 | Pending |
| BUDG-04 | Phase 4 | Pending |
| PACK-01 | Phase 4 | Pending |
| PACK-02 | Phase 4 | Pending |
| PACK-03 | Phase 4 | Pending |
| PACK-04 | Phase 4 | Pending |
| PACK-05 | Phase 4 | Pending |
| SHARE-01 | Phase 5 | Pending |
| SHARE-02 | Phase 5 | Pending |
| SHARE-03 | Phase 5 | Pending |
| SHARE-04 | Phase 5 | Pending |
| PROF-01 | Phase 5 | Pending |
| PROF-02 | Phase 5 | Pending |
| PROF-03 | Phase 5 | Pending |
| NOTE-01 | Phase 5 | Pending |
| NOTE-02 | Phase 5 | Pending |
| NOTE-03 | Phase 5 | Pending |
| QUAL-01 | Phase 6 | Pending |
| QUAL-02 | Phase 6 | Pending |
| QUAL-03 | Phase 6 | Pending |
| QUAL-04 | Phase 6 | Pending |
| QUAL-05 | Phase 6 | Pending |
| QUAL-06 | Phase 6 | Pending |
| QUAL-07 | Phase 6 | Pending |
| QUAL-08 | Phase 6 | Pending |
| QUAL-09 | Phase 6 | Pending |
| ADMIN-01 | Phase 7 | Deferred |
| ADMIN-02 | Phase 7 | Deferred |
| ADMIN-03 | Phase 7 | Deferred |
| ADMIN-04 | Phase 7 | Deferred |

**Coverage:**
- v1 requirements: 55 total
- Mapped to phases: 55
- Unmapped: 0
- v2 optional requirements: 4 total

---
*Requirements defined: 2026-05-10*
*Last updated: 2026-05-10 after initial definition*
