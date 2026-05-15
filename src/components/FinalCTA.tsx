export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-t border-white/10"
    >
      <div className="px-8 py-28 md:px-16 md:py-40">
        <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
          Industrial Development Partner
        </p>

        <h2 className="mt-8 max-w-[980px] text-[48px] font-semibold leading-[1.02] tracking-[-0.04em] md:text-[88px]">
          Developing industrial systems
          <br />
          from idea to impact.
        </h2>

        <p className="mt-12 max-w-[680px] text-[17px] leading-[1.75] text-white/55">
          NOIR DYNAMICS partners with companies to research, develop,
          engineer, industrialize and deploy products built for real-world
          performance and scalable production.
        </p>

        <a
          href="mailto:contact@noirgroup.eu"
          className="mt-14 inline-flex h-[56px] items-center justify-center border border-white/15 bg-white px-8 text-[14px] font-medium uppercase tracking-[0.08em] text-black transition-all duration-300 hover:scale-[1.02]"
        >
          Start Development
        </a>
      </div>
    </section>
  );
}