export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-20 bg-ink">
      <div className="max-w-2xl">
        <p className="font-mono text-xs text-lime mb-3">contact</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-mist mb-4">
          Want a site like this for your business?
        </h2>
        <p className="text-muted text-base leading-relaxed mb-8">
          Tell me what you're building and what you need it to do — I'll get
          back to you within a day.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/2348061777336?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20website"
            target="_blank"
            rel="noreferrer"
            className="bg-lime text-ink text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition"
          >
            Message on WhatsApp
          </a>
          <a
            href="mailto:ifeakachukwusuccess30@gmail.com"
            className="border border-border-dark text-mist text-sm px-5 py-2.5 rounded-md hover:bg-ink-soft transition"
          >
            Send an email
          </a>
        </div>
      </div>
    </section>
  );
}
