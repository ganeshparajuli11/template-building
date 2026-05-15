import { services } from "@/data/services";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[var(--secondary)]">Core services</h2>
          <p className="text-sm text-gray-600">Focused pages for ranking, trust, and conversions.</p>
        </div>
        <Button href="/services" variant="outline">
          View all services
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id}>
            <h3 className="text-lg font-bold text-[var(--secondary)]">{service.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{service.summary}</p>
            <p className="mt-3 text-sm font-semibold text-[var(--primary)]">Starts at ${service.priceFrom}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}