const stats = [
  { value: "4+", label: "Projects shipped" },
  { value: "₦50k–₦150k", label: "Per project range" },
  { value: "100%", label: "Deployed, not demos" },
  { value: "Open", label: "To work & clients" },
];

export default function Stats() {
  return (
    <section className="bg-ink border-t border-border-dark px-6 md:px-16 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-lime text-2xl md:text-3xl font-bold">
              {s.value}
            </p>
            <p className="text-muted text-xs md:text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
