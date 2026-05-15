import type { Lead } from "@/types";

export function normalizeLeadPayload(lead: Lead) {
  return {
    ...lead,
    createdAt: new Date().toISOString(),
  };
}