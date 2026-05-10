import { useState } from "react";

type FoundationProbeRecord = {
  id: string;
  label: string;
  createdAt: string;
};

type HealthPayload = {
  status: string;
  database: string;
};

const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

export function FoundationProbe() {
  const [label, setLabel] = useState("Traveloop foundation");
  const [saved, setSaved] = useState<FoundationProbeRecord | null>(null);
  const [latestLabel, setLatestLabel] = useState<string | null>(null);
  const [health, setHealth] = useState<HealthPayload | null>(null);
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");

  async function saveProbe() {
    setStatus("saving");

    try {
      const response = await fetch(`${apiUrl}/api/foundation-probes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label })
      });

      if (!response.ok) {
        throw new Error("Probe request failed");
      }

      const payload = (await response.json()) as { data: FoundationProbeRecord };
      const [healthResponse, latestResponse] = await Promise.all([
        fetch(`${apiUrl}/api/health`),
        fetch(`${apiUrl}/api/foundation-probes/latest`)
      ]);

      if (!healthResponse.ok || !latestResponse.ok) {
        throw new Error("Probe verification failed");
      }

      const healthPayload = (await healthResponse.json()) as { data: HealthPayload };
      const latestPayload = (await latestResponse.json()) as { data: FoundationProbeRecord | null };

      setSaved(payload.data);
      setLatestLabel(latestPayload.data?.label ?? payload.data.label);
      setHealth(healthPayload.data);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="foundation-probe">
      <label htmlFor="foundation-label">Foundation probe label</label>
      <div className="probe-controls">
        <input
          id="foundation-label"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
        />
        <button type="button" onClick={saveProbe} disabled={status === "saving"}>
          Save foundation probe
        </button>
      </div>
      {health?.status === "ok" && saved ? (
        <p className="probe-result">
          Database-backed foundation is connected via {health.database}. Latest saved probe:{" "}
          {latestLabel ?? saved.label}
        </p>
      ) : null}
      {saved ? <p className="probe-result">Saved: {saved.label}</p> : null}
      {status === "error" ? (
        <p className="probe-error">
          We could not load your trip workspace. Check your connection and try again.
        </p>
      ) : null}
    </div>
  );
}
