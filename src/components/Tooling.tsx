const toolingAreas = [
  {
    title: "Tooling Design",
    text: "Development of advanced tooling concepts for scalable and process-stable industrial manufacturing.",
  },
  {
    title: "Injection Molding Systems",
    text: "Engineering of production-oriented plastic systems with integrated tooling and manufacturing logic.",
  },
  {
    title: "Industrial Feasibility",
    text: "Optimization of components and assemblies for efficient production, durability and repeatability.",
  },
  {
    title: "Global Manufacturing Access",
    text: "Integrated access to international tooling and manufacturing networks across Europe, Asia and North America.",
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

        <div className="border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-16">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
            Tooling & Industrialization
          </p>

          <h2 className="mt-8 text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            Production-Oriented
            <br />
            System
            <br />
            Engineering
          </h2>

          <p className="mt-10 max-w-[420px] text-[16px] leading-[1.8] text-white/55">
            NOIR DYNAMICS combines product development, tooling systems and
            industrial manufacturing logic to create scalable and production-ready
            industrial solutions.
          </p>
        </div>
      </div>
    </section>
  );
}