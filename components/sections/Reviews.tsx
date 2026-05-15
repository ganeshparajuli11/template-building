import { reviews } from "@/data/reviews";
import Card from "@/components/ui/Card";

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="mb-6 text-2xl font-bold text-[var(--secondary)]">Recent customer reviews</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id}>
            <p className="text-sm text-amber-500">{"★".repeat(review.rating)}</p>
            <p className="mt-2 text-sm text-gray-700">{review.text}</p>
            <p className="mt-3 text-sm font-semibold text-[var(--secondary)]">{review.author}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}