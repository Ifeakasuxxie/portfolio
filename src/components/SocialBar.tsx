type SocialLink = {
  label: string;
  href: string;
};

const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Ifeakasuxxie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ifeakachukwu-suceess-dt" },
  { label: "WhatsApp", href: "https://wa.me/2348061777336" },
  { label: "Email", href: "mailto:ifeakachukwusuccess30@gmail.com" },
];

export default function SocialBar() {
  return (
    <div className="bg-ink px-6 md:px-16 pb-8 flex gap-5 border-b border-border-dark">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-muted text-xs font-mono hover:text-lime transition"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
