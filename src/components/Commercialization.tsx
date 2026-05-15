const areas = [
  {
    title: "Digital Commerce",
    text: "Development of digital sales structures, online commerce systems and product-oriented distribution channels.",
  },
  {
    title: "Market Positioning",
    text: "Structured positioning of technical products for industrial, professional and consumer markets.",
  },
  {
    title: "Product Scaling",
    text: "Operational scaling strategies for product ecosystems, digital platforms and long-term commercial growth.",
  },
  {
    title: "Integrated Deployment",
    text: "Connection of engineering, production and commercialization into one coherent market-ready system.",
  },
];

export default function Commercialization() {
  return (
    <section
      id="industrialization"
      className="mx-auto w-[calc(100%-24px)] max-w-[1440px] border-x border-t border-white/10 md:w-[calc(100%-40px)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.42fr_0.58fr]">
        <div className="border-b border-white/10 p-6 py-12 md:border-b-0 md:border-r md:p-16">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:text-[12px]">
            Market Deployment
          </p>

          <h2 className="mt-8 text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            From production
            <br />
            to market
            <br />
            systems.
          </h2>

          <p className="mt-8 max-w-[440px] text-[15px] leading-[1.8] text-white/55 md:mt-10 md:text-[16px]">
            NOIR DYNAMICS supports the transition from industrialized product
            systems to digital sales structures, market positioning and scalable
            commercial deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {areas.map((item) => (
            <article
              key={item.title}
              className="group border-b border-white/10 p-6 transition-all duration-500 hover:bg-white/[0.02] md:border-r md:p-14"
            >
              <div className="mb-8 flex items-center gap-4 md:mb-10">
                <div className="h-[14px] w-[14px] rounded-full border border-white/20 bg-white/[0.04] transition-all duration-500 group-hover:scale-[1.4] group-hover:bg-white/[0.14]" />
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <h3 className="text-[25px] font-medium tracking-[-0.03em] md:text-[28px]">
                {item.title}
              </h3>

              <p className="mt-5 text-[15px] leading-[1.75] text-white/55 md:mt-6 md:text-[16px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}