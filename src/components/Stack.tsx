const stackGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Tools & deployment",
    items: ["Vite", "Vercel", "GitHub", "Formspree"],
  },
  {
    label: "Currently learning",
    items: ["Node.js", "Docker", "Cloud deployment", "APIs & auth"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="px-6 md:px-16 py-20">
      <p className="font-mono text-xs text-green mb-3">stack</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-10 max-w-xl">
        What I build with, and where I'm headed.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stackGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs font-mono text-muted mb-3">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs bg-green-light text-green px-2.5 py-1.5 rounded-md font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
