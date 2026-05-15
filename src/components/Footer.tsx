export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-[calc(100%-24px)] max-w-[1440px] border-x border-t border-white/10 md:w-[calc(100%-40px)]">
      <div className="grid grid-cols-1 gap-10 px-6 py-14 text-[13px] text-white/40 md:grid-cols-3 md:px-16">
        <div>
          <p className="font-medium uppercase tracking-[0.14em] text-white/70">
            NOIR DYNAMICS
          </p>

          <p className="mt-4 max-w-[260px] leading-[1.7]">
            Research-driven product development, engineering and industrial
            systems.
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.14em] text-white/30">
            Development System
          </p>

          <div className="mt-4 space-y-2 leading-[1.7]">
            <p>01–04 / Product Development</p>
            <p>05–06 / Engineering & Manufacturing</p>
            <p>07–08 / Market Deployment</p>
          </div>
        </div>

        <div className="md:text-right">
          <p className="uppercase tracking-[0.14em] text-white/30">
            Navigation
          </p>

          <nav className="mt-4 flex flex-wrap gap-5 md:justify-end">
            <a href="#process" className="transition-colors duration-300 hover:text-white">
              Process
            </a>
            <a href="#contact" className="transition-colors duration-300 hover:text-white">
              Contact
            </a>
            <a href="/imprint" className="transition-colors duration-300 hover:text-white">
              Imprint
            </a>
            <a href="/privacy" className="transition-colors duration-300 hover:text-white">
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}