export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[760px] w-[calc(100%-24px)] max-w-[1440px] items-center border-x border-white/10 md:min-h-[860px] md:w-[calc(100%-40px)]">
      <div className="grid w-full grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
        <div className="px-6 py-20 md:px-16 md:py-24">
          <p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-white/35 md:mb-10 md:text-[12px]">
            Research • Product Development • Industrial Systems
          </p>

          <h1 className="max-w-[920px] text-[56px] font-semibold leading-[0.9] tracking-[-0.06em] sm:text-[72px] md:text-[112px]">
            From Concept
            <br />
            To Industrial
            <br />
            Reality
          </h1>

          <p className="mt-10 max-w-[740px] text-[16px] leading-[1.75] text-white/55 md:mt-14 md:text-[18px]">
            NOIR DYNAMICS develops advanced products, tooling systems and
            industrial processes for plastic, metal and electronic assemblies —
            from early research to manufacturing-ready systems and market
            deployment.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row md:mt-16">
            <a
              href="#process"
              className="flex h-[56px] items-center justify-center border border-white/15 bg-white px-8 text-[13px] font-medium uppercase tracking-[0.08em] text-black transition-all duration-500 ease-out hover:scale-[1.015] md:text-[14px]"
            >
              Explore Process
            </a>

            <a
              href="#contact"
              className="flex h-[56px] items-center justify-center border border-white/10 px-8 text-[13px] font-medium uppercase tracking-[0.08em] text-white/80 transition-all duration-500 ease-out hover:border-white/20 hover:bg-white/[0.03] md:text-[14px]"
            >
              Start Development
            </a>
          </div>
        </div>

        <div className="relative hidden overflow-hidden border-l border-white/10 md:block">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]" />

          <div className="absolute inset-0">
            <div className="absolute left-0 top-[20%] h-px w-full bg-white/[0.05]" />
            <div className="absolute left-0 top-[40%] h-px w-full bg-white/[0.05]" />
            <div className="absolute left-0 top-[60%] h-px w-full bg-white/[0.05]" />
            <div className="absolute left-0 top-[80%] h-px w-full bg-white/[0.05]" />

            <div className="absolute left-[20%] top-0 h-full w-px bg-white/[0.05]" />
            <div className="absolute left-[40%] top-0 h-full w-px bg-white/[0.05]" />
            <div className="absolute left-[60%] top-0 h-full w-px bg-white/[0.05]" />
            <div className="absolute left-[80%] top-0 h-full w-px bg-white/[0.05]" />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[140px]" />
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
          <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}