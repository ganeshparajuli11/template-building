import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CallbackForm() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <Card>
        <h2 className="text-2xl font-bold text-[var(--secondary)]">Request a callback in 10 minutes</h2>
        <p className="mt-2 text-sm text-gray-600">
          No database yet. This is the first UI shell for lead intake and operations flow.
        </p>
        <form className="mt-5 grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-[var(--border)] px-3 py-2" placeholder="Full name" />
          <input className="rounded-xl border border-[var(--border)] px-3 py-2" placeholder="Phone number" />
          <input className="rounded-xl border border-[var(--border)] px-3 py-2" placeholder="Area / location" />
          <input className="rounded-xl border border-[var(--border)] px-3 py-2" placeholder="Service needed" />
          <textarea className="rounded-xl border border-[var(--border)] px-3 py-2 md:col-span-2" rows={4} placeholder="Brief issue details" />
          <div className="md:col-span-2">
            <Button type="button">Submit Callback Request</Button>
          </div>
        </form>
      </Card>
    </section>
  );
}