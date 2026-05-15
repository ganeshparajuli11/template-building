import { locations } from "@/data/locations";
import Card from "@/components/ui/Card";

export default function Locations() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="mb-6 text-2xl font-bold text-[var(--secondary)]">Service locations</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {locations.map((location) => (
          <Card key={location.id}>
            <h3 className="text-lg font-bold text-[var(--secondary)]">{location.city}</h3>
            <p className="mt-2 text-sm text-gray-600">{location.area}</p>
            <p className="mt-3 text-sm font-semibold text-[var(--primary)]">
              Typical response: {location.responseTime}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}