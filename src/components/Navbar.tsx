const navItems = [
  { label: "Process", href: "#process" },
  { label: "Product Development", href: "#development" },
  { label: "Engineering", href: "#tooling" },
  { label: "Deployment", href: "#industrialization" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 mx-auto mt-6 flex h-[72px] w-[calc(100%-24px)] max-w-[1440px] items-center justify-between border border-white/10 bg-white/[0.02] px-5 backdrop-blur-xl md:mt-10 md:w-[calc(100%-40px)] md:px-8">
      <a
        href="/"
        className="text-[15px] font-semibold tracking-[0.14em] md:text-[18px]"
      >
        NOIR DYNAMICS
      </a>

      <nav className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[12px] uppercase tracking-[0.16em] text-white/45 transition-all duration-500 ease-out hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="h-[7px] w-[7px] rounded-full bg-white/70 md:h-[8px] md:w-[8px]" />

        <div className="h-[7px] w-[7px] rounded-full border border-white/20 bg-white/[0.04] md:h-[8px] md:w-[8px]" />
      </div>
    </header>
  );
}