# Research Summary: Traveloop

**Source policy:** This summary uses only the provided Traveloop hackathon inputs.

## Key Findings

**Stack:** Build a conventional responsive web app with a modular backend API and local PostgreSQL relational database. Avoid Firebase, Supabase, MongoDB Atlas, and mock-only data.

**Table Stakes:** Account login/signup, dashboard, create trip, my trips, itinerary builder/view, city search, activity search, budget breakdown, packing checklist, public sharing, profile/settings, trip notes, and optional admin analytics.

**Architecture:** Model the domain relationally: users own trips; trips contain stops; stops contain planned activities; trips also own expenses, packing items, notes, and public share tokens. Seed city/activity data locally to make search dynamic without third-party APIs.

**Watch Outs:** The biggest judging risks are static UI, weak relational schema, invented layouts, missing authorization, shallow budget logic, and optional admin work stealing time from the core traveler journey.

## Roadmap Implication

Use the exact seven phases requested by the user. Each phase should produce an end-to-end vertical slice while preserving visual fidelity to the supplied UI images and the data-backed behavior judges expect.
