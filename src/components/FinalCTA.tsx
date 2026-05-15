export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto w-[calc(100%-24px)] max-w-[1440px] border-x border-t border-white/10 md:w-[calc(100%-40px)]"
    >
      <div className="px-6 py-24 md:px-16 md:py-40">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:text-[12px]">
          Industrial Development Partner
        </p>

        <h2 className="mt-8 max-w-[980px] text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Developing industrial systems
          <br />
          from idea to impact.
        </h2>

        <p className="mt-10 max-w-[680px] text-[16px] leading-[1.75] text-white/55 md:mt-12 md:text-[17px]">
          NOIR DYNAMICS partners with companies to research, develop, engineer,
          industrialize and deploy products built for real-world performance and
          scalable production.
        </p>

        <a
          href="mailto:contact@noirgroup.eu"
          className="mt-12 inline-flex h-[56px] items-center justify-center border border-white/15 bg-white px-8 text-[13px] font-medium uppercase tracking-[0.08em] text-black transition-all duration-500 ease-out hover:scale-[1.015] md:mt-14 md:text-[14px]"
        >
          Start Development
        </a>
      </div>
    </section>
  );
}