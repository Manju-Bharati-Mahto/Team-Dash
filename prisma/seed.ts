import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const demoUserId = "demo-user-maya-rao";
const demoTripId = "demo-trip-spring-cities";

const cities = [
  {
    id: "city-kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Kansai",
    costIndex: 68,
    popularityScore: 95,
    imageUrl: "kyoto-temple.jpg",
    imageAlt: "Temple street in Kyoto at golden hour"
  },
  {
    id: "city-barcelona",
    name: "Barcelona",
    country: "Spain",
    region: "Catalonia",
    costIndex: 72,
    popularityScore: 92,
    imageUrl: "barcelona-tiles.jpg",
    imageAlt: "Colorful Barcelona tilework"
  },
  {
    id: "city-reykjavik",
    name: "Reykjavik",
    country: "Iceland",
    region: "Capital Region",
    costIndex: 88,
    popularityScore: 84,
    imageUrl: "reykjavik-harbor.jpg",
    imageAlt: "Reykjavik harbor and mountains"
  },
  {
    id: "city-lisbon",
    name: "Lisbon",
    country: "Portugal",
    region: "Lisbon",
    costIndex: 61,
    popularityScore: 89,
    imageUrl: "lisbon-tram.jpg",
    imageAlt: "Historic Lisbon tram on a hillside street"
  },
  {
    id: "city-singapore",
    name: "Singapore",
    country: "Singapore",
    region: "Central",
    costIndex: 82,
    popularityScore: 90,
    imageUrl: "singapore-gardens.jpg",
    imageAlt: "Singapore garden skyline"
  }
] as const;

const activities = [
  ["activity-kyoto-fushimi", "city-kyoto", "Fushimi Inari sunrise walk", "CULTURE", "18.00", 150, "Walk the vermilion torii trail before the crowds arrive."],
  ["activity-kyoto-tea", "city-kyoto", "Gion tea tasting", "FOOD", "42.00", 90, "Guided tasting focused on matcha and seasonal sweets."],
  ["activity-kyoto-arashiyama", "city-kyoto", "Arashiyama bamboo grove", "NATURE", "12.00", 120, "Morning route through bamboo paths and riverside lanes."],
  ["activity-barcelona-sagrada", "city-barcelona", "Sagrada Familia audio tour", "CULTURE", "34.00", 120, "Reserved-entry architecture visit."],
  ["activity-barcelona-tapas", "city-barcelona", "El Born tapas crawl", "FOOD", "58.00", 180, "Small plates across three neighborhood spots."],
  ["activity-reykjavik-lagoon", "city-reykjavik", "Sky Lagoon evening soak", "WELLNESS", "79.00", 150, "Thermal spa slot with sunset views."],
  ["activity-reykjavik-northern", "city-reykjavik", "Northern lights chase", "ADVENTURE", "115.00", 240, "Small-group aurora hunt outside the city."],
  ["activity-lisbon-alfama", "city-lisbon", "Alfama photo walk", "CULTURE", "24.00", 120, "Guided walk through tiled lanes and viewpoints."],
  ["activity-lisbon-pastry", "city-lisbon", "Pasteis workshop", "FOOD", "46.00", 120, "Hands-on custard tart class."],
  ["activity-singapore-gardens", "city-singapore", "Gardens by the Bay domes", "NATURE", "32.00", 150, "Cloud Forest and Flower Dome visit."],
  ["activity-singapore-hawker", "city-singapore", "Maxwell hawker dinner", "FOOD", "22.00", 90, "Self-guided hawker favorites plan."],
  ["activity-singapore-river", "city-singapore", "Singapore River night walk", "NIGHTLIFE", "10.00", 75, "Low-cost evening route along the riverfront."]
] as const;

async function main() {
  await prisma.publicShare.deleteMany({ where: { token: "demo-spring-cities" } });
  await prisma.trip.deleteMany({ where: { id: demoTripId } });
  await prisma.savedDestination.deleteMany({ where: { userId: demoUserId } });

  const user = await prisma.user.upsert({
    where: { id: demoUserId },
    update: {
      email: "demo@traveloop.local",
      displayName: "Maya Rao",
      passwordHash: "phase-2-will-hash-passwords"
    },
    create: {
      id: demoUserId,
      email: "demo@traveloop.local",
      displayName: "Maya Rao",
      passwordHash: "phase-2-will-hash-passwords",
      profile: {
        create: {
          homeCity: "Bengaluru",
          travelStyle: "Food, design, and slow mornings",
          bio: "Planning a spring route through walkable cities and memorable meals."
        }
      }
    }
  });

  for (const city of cities) {
    await prisma.city.upsert({
      where: { name_country: { name: city.name, country: city.country } },
      update: city,
      create: city
    });
  }

  for (const [id, cityId, name, category, estimatedCost, durationMinutes, description] of activities) {
    await prisma.activity.upsert({
      where: { cityId_name: { cityId, name } },
      update: {
        category,
        estimatedCost,
        durationMinutes,
        description
      },
      create: {
        id,
        cityId,
        name,
        category,
        estimatedCost,
        durationMinutes,
        description
      }
    });
  }

  const trip = await prisma.trip.create({
    data: {
      id: demoTripId,
      ownerId: user.id,
      name: "Spring Cities Circuit",
      status: "PLANNED",
      startDate: new Date("2026-04-05T00:00:00.000Z"),
      endDate: new Date("2026-04-18T00:00:00.000Z"),
      budgetAmount: "4200.00",
      coverImage: "spring-cities-circuit.jpg",
      stops: {
        create: [
          {
            id: "stop-spring-kyoto",
            cityId: "city-kyoto",
            position: 1,
            arrivalDate: new Date("2026-04-05T00:00:00.000Z"),
            departureDate: new Date("2026-04-09T00:00:00.000Z"),
            lodgingName: "Machiya garden stay"
          },
          {
            id: "stop-spring-barcelona",
            cityId: "city-barcelona",
            position: 2,
            arrivalDate: new Date("2026-04-09T00:00:00.000Z"),
            departureDate: new Date("2026-04-13T00:00:00.000Z"),
            lodgingName: "El Born apartment"
          },
          {
            id: "stop-spring-lisbon",
            cityId: "city-lisbon",
            position: 3,
            arrivalDate: new Date("2026-04-13T00:00:00.000Z"),
            departureDate: new Date("2026-04-18T00:00:00.000Z"),
            lodgingName: "Alfama guesthouse"
          }
        ]
      }
    },
    include: { stops: true }
  });

  const stopByCity = new Map(trip.stops.map((stop) => [stop.cityId, stop.id]));

  await prisma.stopActivity.createMany({
    data: [
      {
        stopId: stopByCity.get("city-kyoto")!,
        activityId: "activity-kyoto-fushimi",
        plannedDate: new Date("2026-04-06T07:00:00.000Z"),
        startTime: "07:00",
        position: 1,
        notes: "Start early and take the side trail back."
      },
      {
        stopId: stopByCity.get("city-kyoto")!,
        activityId: "activity-kyoto-tea",
        plannedDate: new Date("2026-04-07T15:00:00.000Z"),
        startTime: "15:00",
        position: 2
      },
      {
        stopId: stopByCity.get("city-barcelona")!,
        activityId: "activity-barcelona-sagrada",
        plannedDate: new Date("2026-04-10T10:00:00.000Z"),
        startTime: "10:00",
        position: 1
      },
      {
        stopId: stopByCity.get("city-lisbon")!,
        activityId: "activity-lisbon-alfama",
        plannedDate: new Date("2026-04-14T09:00:00.000Z"),
        startTime: "09:00",
        position: 1
      }
    ]
  });

  await prisma.expense.createMany({
    data: [
      { tripId: trip.id, category: "TRANSPORT", title: "Regional flights", quantity: 1, unitCost: "980.00", amount: "980.00" },
      { tripId: trip.id, category: "STAY", title: "Boutique lodging", quantity: 13, unitCost: "142.00", amount: "1846.00" },
      { tripId: trip.id, category: "ACTIVITIES", title: "Booked activities", quantity: 1, unitCost: "210.00", amount: "210.00" },
      { tripId: trip.id, category: "MEALS", title: "Daily food estimate", quantity: 14, unitCost: "48.00", amount: "672.00" },
      { tripId: trip.id, category: "OTHER", title: "Transit cards and buffers", quantity: 1, unitCost: "180.00", amount: "180.00" }
    ]
  });

  await prisma.packingItem.createMany({
    data: [
      { tripId: trip.id, category: "CLOTHING", label: "Light rain jacket", packed: false },
      { tripId: trip.id, category: "CLOTHING", label: "Comfortable walking shoes", packed: true },
      { tripId: trip.id, category: "DOCUMENTS", label: "Passport and printed reservations", packed: true },
      { tripId: trip.id, category: "ELECTRONICS", label: "Universal adapter", packed: false },
      { tripId: trip.id, category: "ESSENTIALS", label: "Reusable water bottle", packed: true },
      { tripId: trip.id, category: "TOILETRIES", label: "Travel-size sunscreen", packed: false }
    ]
  });

  await prisma.tripNote.createMany({
    data: [
      {
        tripId: trip.id,
        scope: "TRIP",
        title: "Trip rhythm",
        body: "Keep mornings light, book one anchor activity per city, and leave room for wandering."
      },
      {
        tripId: trip.id,
        stopId: stopByCity.get("city-kyoto"),
        scope: "STOP",
        title: "Kyoto food list",
        body: "Try yudofu near Nanzen-ji and save one evening for Gion."
      },
      {
        tripId: trip.id,
        scope: "DAY",
        title: "Barcelona arrival",
        body: "Check in, walk to the Gothic Quarter, and keep dinner flexible.",
        noteDate: new Date("2026-04-09T00:00:00.000Z")
      }
    ]
  });

  await prisma.publicShare.upsert({
    where: { token: "demo-spring-cities" },
    update: {
      tripId: trip.id,
      state: "ACTIVE"
    },
    create: {
      tripId: trip.id,
      token: "demo-spring-cities",
      state: "ACTIVE"
    }
  });

  await prisma.savedDestination.createMany({
    data: [
      { userId: user.id, cityId: "city-reykjavik" },
      { userId: user.id, cityId: "city-singapore" }
    ],
    skipDuplicates: true
  });

  console.log("Seed complete: Traveloop demo data ready");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
