# Feature Research: Traveloop

**Scope:** Source-only synthesis from the supplied Traveloop files.

## Table Stakes For v1

- Login/signup with email/password, forgot password link affordance, basic validation.
- Dashboard/home with welcome message, recent/upcoming trips, plan-new-trip action, destination recommendations, and budget highlights.
- Create trip form with trip name, date range, description, and optional cover photo field.
- My trips list with trip cards, date range, destination count, and view/edit/delete actions.
- Itinerary builder with stops, cities, date ranges, activities, costs, and reorder support.
- Itinerary view with day-wise structure, city headers, activity blocks, costs, and list/calendar mode affordance.
- City search with country/region filter, city metadata, cost index/popularity, and add-to-trip action.
- Activity search with filters for type/cost/duration and add/remove actions.
- Budget/cost breakdown with transport/stay/activity/meal categories, charts/summary, daily averages, and over-budget indicators.
- Packing checklist with add/remove, packed state, categories, reset/reuse support.
- Shared/public itinerary with read-only view, public URL/token, copy trip action, and share affordance.
- Profile/settings with editable name/photo/email/preferences and saved destinations.
- Trip notes/journal with add/edit/delete notes tied to trip/stop/day and timestamp sorting.

## Optional

- Admin analytics dashboard with aggregate usage, top cities/activities, trip counts, engagement stats, and user management.

## Anti-Features

- Building extra pages outside the provided flow.
- Swapping the visual direction for a custom design language.
- Depending on external APIs for core search/budget functionality.
- Implementing admin analytics before the core traveler workflow is demonstrable.

## Dependencies

- Authentication and database foundation must precede personal trip features.
- Trips must exist before itinerary stops, budgets, packing, sharing, and notes.
- City/activity seed data must exist before search and builder selection flows feel dynamic.
- Public sharing depends on complete itinerary data and authorization boundaries.
