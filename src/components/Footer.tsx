const links = [
  { label: "GitHub", href: "https://github.com/Ifeakasuxxie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ifeakachukwu-suceess-dt" },
  { label: "WhatsApp", href: "https://wa.me/2348061777336" },
  { label: "Email", href: "mailto:ifeakachukwusuccess30@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-border-dark px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-mist text-base">
            Ishioma Ifeakachukwu Success
          </p>
          <p className="text-muted text-sm mt-1">
            Frontend Developer &amp; Computer Engineering Student
          </p>
          <p className="text-muted text-xs font-mono mt-2">
            +234 806 177 7336 &middot; ifeakachukwusuccess30@gmail.com
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted text-sm hover:text-lime transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume/Ishioma-Ifeakachukwu-Success-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-muted text-sm hover:text-lime transition"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="border-t border-border-dark mt-8 pt-6 flex flex-col md:flex-row justify-between gap-2">
        <p className="text-muted text-xs font-mono">
          © 2026 Ishioma Ifeakachukwu Success. All rights reserved.
        </p>
        <a href="#top" className="text-muted text-xs font-mono hover:text-lime transition">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
