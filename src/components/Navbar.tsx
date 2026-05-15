const navItems = [
  { label: "Process", href: "#process" },
  { label: "Product Development", href: "#development" },
  { label: "Engineering", href: "#tooling" },
  { label: "Deployment", href: "#industrialization" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 mx-auto mt-10 flex h-[72px] w-[calc(100%-40px)] max-w-[1440px] items-center justify-between border border-white/10 bg-white/[0.02] px-8 backdrop-blur-xl">
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
            className="text-[12px] uppercase tracking-[0.16em] text-white/45 transition-all duration-300 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <div className="h-[8px] w-[8px] rounded-full bg-white/70" />
        <div className="h-[8px] w-[8px] rounded-full border border-white/20 bg-white/[0.04]" />
      </div>
    </header>
  );
}