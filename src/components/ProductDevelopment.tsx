const capabilities = [
  {
    title: "Product Design",
    text: "Development of functional and production-oriented product systems with integrated industrial design principles.",
  },
  {
    title: "Engineering",
    text: "Technical construction and component development for plastic, metal and electronic assemblies.",
  },
  {
    title: "Design for Manufacturing",
    text: "Systematic optimization for scalable manufacturing, tooling logic and industrial feasibility.",
  },
  {
    title: "Advanced Materials",
    text: "Continuous research into modern materials, manufacturing technologies and industrial processing systems.",
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
            Research-Driven
            <br />
            Product
            <br />
            Engineering
          </h2>

          <p className="mt-10 max-w-[420px] text-[16px] leading-[1.8] text-white/55">
            NOIR DYNAMICS develops advanced industrial products and assemblies
            with a strong focus on manufacturability, material systems and
            scalable industrial production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="border-b border-white/10 p-8 md:border-r md:p-14"
            >
              <div className="mb-10 h-[14px] w-[14px] rounded-full border border-white/20 bg-white/[0.04]" />

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