const toolingAreas = [
  {
    title: "Engineering Integration",
    text: "Technical development and system integration for complex plastic, metal and electronic assemblies.",
  },
  {
    title: "Tooling Design",
    text: "Production-focused tooling concepts and mold design strategies for reliable industrial manufacturing.",
  },
  {
    title: "Injection Molding Systems",
    text: "Engineering of plastic components and assemblies with deep understanding of injection molding processes and tooling constraints.",
  },
  {
    title: "Manufacturing Access",
    text: "International manufacturing access across Europe, Asia and North America for tooling, injection molding and industrial production.",
  },
];

export default function Tooling() {
  return (
    <section
      id="tooling"
      className="mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.58fr_0.42fr]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {toolingAreas.map((item) => (
            <article
              key={item.title}
              className="group border-b border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.02] md:border-r md:p-14"
            >
              <div className="mb-10 flex items-center gap-4">
                <div className="h-[14px] w-[14px] rounded-full border border-white/20 bg-white/[0.04] transition-all duration-500 group-hover:scale-[1.4] group-hover:bg-white/[0.14]" />
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <h3 className="text-[28px] font-medium tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-6 text-[16px] leading-[1.75] text-white/55">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-16">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
            Engineering & Manufacturing
          </p>

          <h2 className="mt-8 text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            Engineering
            <br />
            systems for
            <br />
            scalable production.
          </h2>

          <p className="mt-10 max-w-[440px] text-[16px] leading-[1.8] text-white/55">
            NOIR DYNAMICS connects engineering, tooling design and industrial
            manufacturing logic to transform validated product concepts into
            production-ready systems.
          </p>
        </div>
      </div>
    </section>
  );
}