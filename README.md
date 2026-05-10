# Traveloop

Traveloop is a responsive travel planning app for creating, organizing, budgeting, and sharing multi-city trips. Phase 1 establishes the local full-stack foundation: React/Vite frontend, Express API, Prisma schema, PostgreSQL migrations, deterministic demo seed data, and a constrained Traveloop shell.

## Local setup

```bash
cp .env.example .env
npm install
```

The checked-in `.env.example` points at the local PostgreSQL service from `docker-compose.yml`.

## Database

```bash
docker compose up -d db
npm run db:migrate
npm run db:seed
```

The migration creates the relational Traveloop schema for users, profiles, trips, stops, cities, activities, itinerary activities, expenses, packing items, notes, public shares, saved destinations, and the foundation probe.

## Development

```bash
npm run dev
```

The API runs on `http://localhost:4000` and the Vite app runs on `http://localhost:5173`.

## Verification

```bash
npm run verify
npm run build
```

`npm run verify` builds every workspace and validates the Prisma schema. With the database running, `npm run db:seed` verifies that seeded demo data can be written through Prisma.

## Phase 1 scope guard

Phase 1 does not implement full auth, trip CRUD, itinerary builder, budget editing, packing editing, public sharing behavior, profile settings, notes editing, or admin analytics. Those workflows are intentionally left for later phases after the database-backed foundation is stable.
