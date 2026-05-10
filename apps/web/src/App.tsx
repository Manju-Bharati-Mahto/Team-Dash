import { AppShell } from "./components/AppShell";
import { PageScaffold } from "./components/PageScaffold";
import { SurfaceCard } from "./components/SurfaceCard";
import { FoundationProbe } from "./app/FoundationProbe";
import { traveloopRoutes } from "./routes/routeInventory";

export function App() {
  return (
    <AppShell>
      <PageScaffold
        eyebrow="Traveloop foundation"
        title="Database-backed trip planning starts here."
        description="A constrained shell for the supplied Traveloop screens, wired to the API probe and ready for later traveler workflows."
        toolbar={<button type="button">Plan a trip</button>}
      >
        <FoundationProbe />
        <div className="route-grid" aria-label="Approved Traveloop route inventory">
          {traveloopRoutes.map((route) => (
            <SurfaceCard key={route.id} className="route-card">
              <div>
                <p className="route-phase">Phase {route.phase}</p>
                <h2>{route.label}</h2>
              </div>
              <p>{route.path}</p>
              <span>{route.source}</span>
              {route.deferred ? <strong>Deferred</strong> : null}
            </SurfaceCard>
          ))}
        </div>
      </PageScaffold>
    </AppShell>
  );
}
