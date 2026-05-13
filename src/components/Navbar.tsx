const navItems = [
  { label: "Development", href: "#development" },
  { label: "Tooling", href: "#tooling" },
  { label: "Systems", href: "#systems" },
  { label: "Industrialization", href: "#industrialization" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="mx-auto mt-10 flex h-[72px] w-[calc(100%-40px)] max-w-[1440px] items-center justify-between border border-white/10 bg-white/[0.02] px-8 backdrop-blur-xl">
      <a
        href="/"
        className="text-[18px] font-semibold tracking-[0.14em]"
      >
        NOIR DYNAMICS
      </a>

      <nav className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[13px] uppercase tracking-[0.12em] text-white/45 transition-all duration-300 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="h-[12px] w-[12px] rounded-full border border-white/20 bg-white/[0.06]" />
    </header>
  );
}