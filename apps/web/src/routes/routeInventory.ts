export type TraveloopRoute = {
  id: string;
  path: string;
  label: string;
  phase: number;
  source: string;
  deferred: boolean;
};

export const traveloopRoutes: TraveloopRoute[] = [
  {
    id: "login-signup",
    path: "/login",
    label: "Login / signup",
    phase: 2,
    source: "01-login-signup.png",
    deferred: false
  },
  {
    id: "registration",
    path: "/register",
    label: "Registration",
    phase: 2,
    source: "02-registration.png",
    deferred: false
  },
  {
    id: "dashboard",
    path: "/dashboard",
    label: "Dashboard",
    phase: 2,
    source: "03-Main-Landing-Page.png",
    deferred: false
  },
  {
    id: "create-trip",
    path: "/trips/new",
    label: "Create trip",
    phase: 2,
    source: "04-Create-a-new-Trip.png",
    deferred: false
  },
  {
    id: "my-trips",
    path: "/trips",
    label: "My trips",
    phase: 2,
    source: "06-User-Trip-Listing.png",
    deferred: false
  },
  {
    id: "itinerary-builder",
    path: "/trips/:tripId/build",
    label: "Itinerary builder",
    phase: 3,
    source: "05-Build-Itenary-Screen.png",
    deferred: false
  },
  {
    id: "itinerary-view",
    path: "/trips/:tripId/itinerary",
    label: "Itinerary view",
    phase: 3,
    source: "09-Itenary View Screenn with budget section.png",
    deferred: false
  },
  {
    id: "search",
    path: "/search",
    label: "City and activity search",
    phase: 3,
    source: "08-Activity-Search-Pages-City-Search-Page.png",
    deferred: false
  },
  {
    id: "shared-itinerary",
    path: "/share/:token",
    label: "Shared itinerary",
    phase: 5,
    source: "10-Community tab Screen.png",
    deferred: false
  },
  {
    id: "packing",
    path: "/trips/:tripId/packing",
    label: "Packing checklist",
    phase: 4,
    source: "11-Packing Checklist.png",
    deferred: false
  },
  {
    id: "budget",
    path: "/trips/:tripId/budget",
    label: "Expense and budget detail",
    phase: 4,
    source: "13-Expense Invoice-billing screen.png",
    deferred: false
  },
  {
    id: "trip-notes",
    path: "/trips/:tripId/notes",
    label: "Trip notes",
    phase: 5,
    source: "14-Trip notes or journal screen .png",
    deferred: false
  },
  {
    id: "profile",
    path: "/profile",
    label: "Profile and settings",
    phase: 5,
    source: "07-User-Profile-Pages.png",
    deferred: false
  },
  {
    id: "admin",
    path: "/admin",
    label: "Admin analytics",
    phase: 7,
    source: "12-Admin Panel Screen.png",
    deferred: true
  }
];
