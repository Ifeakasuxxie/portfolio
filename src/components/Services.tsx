const services = [
  {
    title: "Landing page",
    detail: "A clean, fast, mobile-first site that explains what you do and how to reach you.",
  },
  {
    title: "Google Business Profile",
    detail: "Set up and optimized so customers find you when they search nearby.",
  },
  {
    title: "WhatsApp integration",
    detail: "Direct WhatsApp CTAs throughout — no contact form friction, just a real conversation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-20 bg-green-light/40">
      <p className="font-mono text-xs text-green mb-3">services</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-10 max-w-xl">
        For businesses that don't have a website yet.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-lg p-5 border border-green-light"
          >
            <h3 className="font-medium text-ink mb-2">{service.title}</h3>
            <p className="text-sm text-ink/70 leading-relaxed">{service.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-ink rounded-lg px-6 py-5 flex-wrap gap-4">
        <p className="text-mist text-sm">₦50,000 – ₦150,000 depending on scope</p>
        <a
          href="https://wa.me/2348061777336?text=Hi%2C%20I%27d%20like%20a%20website%20for%20my%20business"
          target="_blank"
          rel="noreferrer"
          className="bg-lime text-ink text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}
