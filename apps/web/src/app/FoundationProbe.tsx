import { useState } from "react";

type FoundationProbeRecord = {
  id: string;
  label: string;
  createdAt: string;
};

const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

export function FoundationProbe() {
  const [label, setLabel] = useState("Traveloop foundation");
  const [saved, setSaved] = useState<FoundationProbeRecord | null>(null);
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
      setSaved(payload.data);
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
      {saved ? <p className="probe-result">Saved: {saved.label}</p> : null}
      {status === "error" ? <p className="probe-error">Unable to save the foundation probe.</p> : null}
    </div>
  );
}
