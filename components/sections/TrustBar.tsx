const trustItems = ["24/7 Emergency Team", "Licensed Technicians", "Transparent Quotes", "Local Area Coverage"];

export default function TrustBar() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--muted)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-4 text-sm font-semibold text-gray-700 md:grid-cols-4">
        {trustItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}