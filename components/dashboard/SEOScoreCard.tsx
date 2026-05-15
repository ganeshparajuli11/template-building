import Card from "@/components/ui/Card";

const checks = [
  { name: "Meta title coverage", score: 92 },
  { name: "Location page indexing", score: 88 },
  { name: "Page speed readiness", score: 81 },
];

export default function SEOScoreCard() {
  return (
    <Card>
      <h3 className="text-lg font-bold text-[var(--secondary)]">SEO health score</h3>
      <p className="mt-1 text-sm text-gray-600">Overall score: 86/100</p>
      <div className="mt-4 space-y-3">
        {checks.map((check) => (
          <div key={check.name}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-gray-600">{check.name}</span>
              <span className="font-semibold text-[var(--secondary)]">{check.score}%</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--muted)]">
              <div className="h-full rounded-full bg-[var(--primary)]" style={{ width: `${check.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}