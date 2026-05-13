const areas = [
  {
    title: "Digital Commerce",
    text: "Development of scalable digital sales structures and product-oriented commerce systems.",
  },
  {
    title: "Market Deployment",
    text: "Strategic product positioning and structured market integration for industrial and consumer systems.",
  },
  {
    title: "Product Scaling",
    text: "Operational scaling strategies for product ecosystems, digital platforms and commercial growth.",
  },
  {
    title: "Integrated Systems",
    text: "Connection of engineering, industrialization and commercialization into one scalable operational structure.",
  },
];

export default function Commercialization() {
  return (
    <section
      id="industrialization"
      className="mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr]">
        <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-16">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
            Market Integration
          </p>

          <h2 className="mt-8 text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            Engineering
            <br />
            Beyond
            <br />
            Production
          </h2>

          <p className="mt-10 max-w-[420px] text-[16px] leading-[1.8] text-white/55">
            NOIR DYNAMICS combines industrial engineering with digital product
            scaling, market deployment and integrated commercialization systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {areas.map((item) => (
            <article
              key={item.title}
              className="border-b border-white/10 p-8 md:border-r md:p-14"
            >
              <div className="mb-10 flex items-center gap-4">
                <div className="h-[14px] w-[14px] rounded-full border border-white/20 bg-white/[0.04]" />
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
      </div>
    </section>
  );
}