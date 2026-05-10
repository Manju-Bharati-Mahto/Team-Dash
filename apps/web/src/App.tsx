import { FoundationProbe } from "./app/FoundationProbe";

export function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel" aria-labelledby="traveloop-title">
        <p className="eyebrow">Traveloop foundation</p>
        <h1 id="traveloop-title">Plan multi-city trips with a real stack.</h1>
        <p>
          This walking skeleton proves the React app can call Express and persist data in local PostgreSQL.
        </p>
        <FoundationProbe />
      </section>
    </main>
  );
}
