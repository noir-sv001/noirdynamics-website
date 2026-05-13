export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-t border-white/10">
      <div className="grid grid-cols-1 gap-10 px-8 py-14 text-[13px] text-white/40 md:grid-cols-3 md:px-16">
        <p className="font-medium uppercase tracking-[0.14em]">
          NOIR DYNAMICS
        </p>

        <p>Research • Engineering • Industrial Systems</p>

        <nav className="flex flex-wrap gap-5 md:justify-end">
          <a href="/">NOIRGROUP</a>
          <a href="#contact">Contact</a>
          <a href="/imprint">Imprint</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}