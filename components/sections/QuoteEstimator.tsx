import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const estimateRows = [
  { label: "Emergency callout", value: "$89" },
  { label: "Drain cleaning", value: "$69" },
  { label: "Water heater diagnosis", value: "$129" },
];

export default function QuoteEstimator() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <Card className="bg-gradient-to-br from-white to-blue-50">
        <h2 className="text-2xl font-bold text-[var(--secondary)]">Instant quote preview</h2>
        <p className="mt-2 text-sm text-gray-600">
          A simple estimator UI to improve conversion before full backend rules are connected.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {estimateRows.map((row) => (
            <div key={row.label} className="rounded-xl border border-[var(--border)] bg-white p-4">
              <p className="text-sm text-gray-500">{row.label}</p>
              <p className="mt-1 text-xl font-bold text-[var(--secondary)]">{row.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Button href="/contact">Request Detailed Quote</Button>
        </div>
      </Card>
    </section>
  );
}