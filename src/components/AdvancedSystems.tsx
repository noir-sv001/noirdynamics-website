const systems = [
  {
    title: "Automation",
    text: "Development of scalable industrial automation concepts for manufacturing and operational systems.",
  },
  {
    title: "Robotics",
    text: "Integration of intelligent robotic structures for handling, assembly and industrial process optimization.",
  },
  {
    title: "Manufacturing Intelligence",
    text: "Implementation of modern process logic and intelligent production-oriented operational systems.",
  },
  {
    title: "Advanced Manufacturing",
    text: "Continuous research into modern production technologies, materials and industrial process innovation.",
  },
];

export default function AdvancedSystems() {
  return (
    <section
      id="systems"
      className="mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-t border-white/10"
    >
      <div className="border-b border-white/10 px-8 py-16 md:px-16 md:py-24">
        <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
          Advanced Systems
        </p>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_0.45fr]">
          <h2 className="text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            Industrial
            <br />
            Automation &
            <br />
            Intelligent Systems
          </h2>

          <p className="max-w-[520px] text-[16px] leading-[1.8] text-white/55">
            NOIR DYNAMICS develops integrated industrial systems combining
            automation, robotics and intelligent operational structures for
            modern manufacturing environments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {systems.map((item) => (
          <article
            key={item.title}
            className="border-b border-white/10 p-8 md:border-r md:p-14"
          >
            <div className="mb-12 flex items-center justify-between">
              <div className="h-[14px] w-[14px] rounded-full border border-white/20 bg-white/[0.04]" />

              <div className="h-px w-[120px] bg-white/10" />
            </div>

            <h3 className="text-[28px] font-medium tracking-[-0.03em]">
              {item.title}
            </h3>

            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] text-white/55">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}