import { prisma } from "./prisma.js";

export async function getSeedHealth() {
  const [
    users,
    trips,
    cities,
    activities,
    expenses,
    packingItems,
    tripNotes,
    publicShares,
    savedDestinations
  ] = await Promise.all([
    prisma.user.count(),
    prisma.trip.count(),
    prisma.city.count(),
    prisma.activity.count(),
    prisma.expense.count(),
    prisma.packingItem.count(),
    prisma.tripNote.count(),
    prisma.publicShare.count(),
    prisma.savedDestination.count()
  ]);

  return {
    users,
    trips,
    cities,
    activities,
    expenses,
    packingItems,
    tripNotes,
    publicShares,
    savedDestinations
  };
}
