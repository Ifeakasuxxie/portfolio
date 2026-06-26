import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-border-dark" : "bg-transparent"
      }`}
    >
      <nav className="px-6 md:px-16 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-mist text-sm tracking-wide">
          ifeaka<span className="text-lime">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted text-sm hover:text-lime transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume/Ishioma-Ifeakachukwu-Success-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-border-dark text-mist text-sm px-4 py-2 rounded-md hover:bg-ink-soft transition"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="bg-lime text-ink text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Hire me
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden text-mist p-2 -mr-2"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-border-dark px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted text-sm hover:text-lime transition"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href="/resume/Ishioma-Ifeakachukwu-Success-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-border-dark text-mist text-sm px-4 py-2 rounded-md flex-1 text-center"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-lime text-ink text-sm font-medium px-4 py-2 rounded-md flex-1 text-center"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
