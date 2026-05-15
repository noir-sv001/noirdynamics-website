const systems = [
  {
    title: "Automation",
    text: "Automation concepts for production processes, assembly systems and operational workflows.",
  },
  {
    title: "Robotics",
    text: "Robotic handling, assembly and process structures for advanced manufacturing environments.",
  },
  {
    title: "Process Intelligence",
    text: "Intelligent process logic for monitoring, optimization and structured industrial decision-making.",
  },
  {
    title: "Advanced Manufacturing",
    text: "Continuous development of modern production technologies, material applications and industrial process innovation.",
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
          Industrial Systems
        </p>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-[0.55fr_0.45fr]">
          <h2 className="text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            Automation and
            <br />
            intelligence for
            <br />
            industrial scale.
          </h2>

          <p className="max-w-[520px] text-[16px] leading-[1.8] text-white/55">
            NOIR DYNAMICS develops automation, robotics and intelligent
            operational systems to support scalable manufacturing, process
            control and industrial growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {systems.map((item) => (
          <article
            key={item.title}
            className="group border-b border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.02] md:border-r md:p-14"
          >
            <div className="mb-12 flex items-center justify-between">
              <div className="h-[14px] w-[14px] rounded-full border border-white/20 bg-white/[0.04] transition-all duration-500 group-hover:scale-[1.4] group-hover:bg-white/[0.14]" />

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