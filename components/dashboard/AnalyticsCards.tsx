import { Activity, MessageSquare, Phone, ScrollText } from "lucide-react";

import Card from "@/components/ui/Card";

const cards = [
  { label: "Leads this week", value: "124", trend: "+12%", icon: MessageSquare },
  { label: "Quote requests", value: "48", trend: "+9%", icon: ScrollText },
  { label: "Call clicks", value: "203", trend: "+17%", icon: Phone },
  { label: "Website sessions", value: "3,480", trend: "+6%", icon: Activity },
];

export default function AnalyticsCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.label}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-gray-500">{card.label}</p>
              <Icon className="h-4 w-4 text-[var(--primary)]" />
            </div>
            <p className="text-2xl font-bold text-[var(--secondary)]">{card.value}</p>
            <p className="mt-1 text-sm font-semibold text-green-600">{card.trend}</p>
          </Card>
        );
      })}
    </section>
  );
}