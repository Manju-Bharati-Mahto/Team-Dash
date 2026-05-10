# Architecture Research: Traveloop

**Scope:** Source-only synthesis from supplied project materials.

## System Shape

Traveloop should be a modular web application with a responsive frontend, backend API, and local PostgreSQL database. The core domain is user-owned travel planning data:

Users -> Trips -> Stops -> Activities / Expenses / Notes / Packing Items -> Public Shares

## Suggested Backend Modules

- `auth`: signup, login, logout/session, password hashing, current user.
- `users`: profile, preferences, saved destinations, account deletion.
- `trips`: create/update/list/delete trips and trip cover metadata.
- `destinations`: seeded cities, country/region filters, cost index, popularity.
- `activities`: seeded activities, type/cost/duration filters, add/remove from trip stops.
- `itinerary`: stops, date ranges, ordering, day-wise activity placement.
- `budget`: expenses, category breakdowns, totals, per-day average, over-budget alerts.
- `packing`: checklist categories/items and packed state.
- `sharing`: public itinerary tokens, read-only views, copy-trip action.
- `notes`: trip/stop/day notes with timestamps.
- `admin`: optional aggregate analytics and user/trip tables.

## Core Tables

- `users`
- `user_profiles`
- `trips`
- `trip_stops`
- `cities`
- `activities`
- `trip_activities`
- `expenses`
- `packing_items`
- `trip_notes`
- `public_shares`
- `saved_destinations`
- optional `admin_audit_events`

## Data Flow

1. User authenticates.
2. Dashboard queries user trips, recommended/seeded destinations, and budget summaries.
3. User creates a trip.
4. Itinerary builder adds stops and activities using city/activity search.
5. Budget view aggregates expenses and planned activity costs.
6. Packing and notes attach operational planning details to the trip.
7. Public share creates a tokenized read-only view.
8. Optional admin analytics aggregates usage without exposing private data unnecessarily.

## Build Order

The user-provided phase order is sound:

1. Foundation + database.
2. Auth and basic trip management.
3. Itinerary/search core.
4. Budget and packing.
5. Sharing/profile/notes.
6. Polish/security/performance/demo.
7. Optional admin analytics.
