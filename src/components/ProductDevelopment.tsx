const capabilities = [
  {
    title: "Vision & Research",
    text: "Continuous research, trend analysis and technology evaluation to identify future-oriented industrial opportunities.",
  },
  {
    title: "Material Systems",
    text: "Validation of materials, processing technologies and manufacturing feasibility for industrial applications.",
  },
  {
    title: "Concept Development",
    text: "Creation of functional product concepts and system architectures designed for real-world implementation.",
  },
  {
    title: "Product Design",
    text: "Production-oriented product design balancing aesthetics, functionality and industrial manufacturability.",
  },
];

export default function ProductDevelopment() {
  return (
    <section className="mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr]">
        <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-16">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
            Product Development
          </p>

          <h2 className="mt-8 text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            Designing
            <br />
            products for
            <br />
            industrial reality.
          </h2>

          <p className="mt-10 max-w-[440px] text-[16px] leading-[1.8] text-white/55">
            NOIR DYNAMICS develops products, systems and industrial concepts
            with a strong focus on manufacturability, material behavior and
            scalable production logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group border-b border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.02] md:border-r md:p-14"
            >
              <div className="mb-10 h-[14px] w-[14px] rounded-full border border-white/20 bg-white/[0.04] transition-all duration-500 group-hover:scale-[1.4] group-hover:bg-white/[0.14]" />

              <h3 className="text-[28px] font-medium tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-6 text-[16px] leading-[1.75] text-white/55">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}