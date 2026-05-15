import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "service-emergency-plumbing",
    name: "Emergency Plumbing",
    slug: "emergency-plumbing",
    summary: "24/7 rapid response for leaks, burst pipes, and urgent repairs.",
    priceFrom: 89,
  },
  {
    id: "service-drain-cleaning",
    name: "Drain Cleaning",
    slug: "drain-cleaning",
    summary: "Fast clog removal with camera checks and prevention advice.",
    priceFrom: 69,
  },
  {
    id: "service-water-heaters",
    name: "Water Heater Service",
    slug: "water-heaters",
    summary: "Repair and replacement for tank and tankless systems.",
    priceFrom: 129,
  },
  {
    id: "service-bathroom-installation",
    name: "Bathroom Installation",
    slug: "bathroom-installation",
    summary: "Complete fitting, fixture upgrades, and finish support.",
    priceFrom: 299,
  },
];