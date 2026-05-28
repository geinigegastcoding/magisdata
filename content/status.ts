export type OperationalStatus = "available" | "working" | "unavailable";

export const currentStatus = {
  state: "available" as OperationalStatus,
  label: "Beschikbaar voor gesprek",
  description:
    "Je kunt bellen of een aanvraag sturen. Op werkdagen reageren we binnen een werkdag.",
  updatedAt: "2026-05-27",
  note:
    "Deze status beschrijft de bereikbaarheid van MagisData en is geen geautomatiseerde uptime-monitor."
};
