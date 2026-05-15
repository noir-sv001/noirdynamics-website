export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[860px] w-[calc(100%-40px)] max-w-[1440px] items-center border-x border-white/10">
      <div className="grid w-full grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
        <div className="px-8 py-24 md:px-16">
          <p className="mb-10 text-[12px] uppercase tracking-[0.18em] text-white/35">
            Research • Product Development • Industrial Systems
          </p>

          <h1 className="max-w-[920px] text-[64px] font-semibold leading-[0.9] tracking-[-0.06em] md:text-[112px]">
            From Concept
            <br />
            To Industrial
            <br />
            Reality
          </h1>

          <p className="mt-14 max-w-[740px] text-[18px] leading-[1.75] text-white/55">
            NOIR DYNAMICS develops advanced products, tooling systems and
            industrial processes for plastic, metal and electronic assemblies —
            from early research to manufacturing-ready systems and market
            deployment.
          </p>

          <div className="mt-16 flex flex-wrap gap-4">
            <a
              href="#process"
              className="flex h-[56px] items-center justify-center border border-white/15 bg-white px-8 text-[14px] font-medium uppercase tracking-[0.08em] text-black transition-all duration-300 hover:scale-[1.02]"
            >
              Explore Process
            </a>

            <a
              href="#contact"
              className="flex h-[56px] items-center justify-center border border-white/10 px-8 text-[14px] font-medium uppercase tracking-[0.08em] text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]"
            >
              Start Development
            </a>
          </div>
        </div>

        <div className="relative hidden border-l border-white/10 md:block">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]" />

          <div className="absolute left-0 top-0 h-full w-full">
            <div className="absolute left-0 top-[20%] h-px w-full bg-white/10" />
            <div className="absolute left-0 top-[40%] h-px w-full bg-white/10" />
            <div className="absolute left-0 top-[60%] h-px w-full bg-white/10" />
            <div className="absolute left-0 top-[80%] h-px w-full bg-white/10" />

            <div className="absolute left-[20%] top-0 h-full w-px bg-white/10" />
            <div className="absolute left-[40%] top-0 h-full w-px bg-white/10" />
            <div className="absolute left-[60%] top-0 h-full w-px bg-white/10" />
            <div className="absolute left-[80%] top-0 h-full w-px bg-white/10" />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[140px]" />
        </div>
      </div>
    </section>
  );
}