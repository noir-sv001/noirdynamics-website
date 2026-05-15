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
      className="mx-auto w-[calc(100%-24px)] max-w-[1440px] border-x border-t border-white/10 md:w-[calc(100%-40px)]"
    >
      <div className="border-b border-white/10 px-6 py-12 md:px-16 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:text-[12px]">
          Industrial Systems
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[0.55fr_0.45fr] md:gap-12">
          <h2 className="text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            Automation and
            <br />
            intelligence for
            <br />
            industrial scale.
          </h2>

          <p className="max-w-[520px] text-[15px] leading-[1.8] text-white/55 md:text-[16px]">
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
            className="group border-b border-white/10 p-6 transition-all duration-500 hover:bg-white/[0.02] md:border-r md:p-14"
          >
            <div className="mb-10 flex items-center justify-between md:mb-12">
              <div className="h-[14px] w-[14px] rounded-full border border-white/20 bg-white/[0.04] transition-all duration-500 group-hover:scale-[1.4] group-hover:bg-white/[0.14]" />

              <div className="h-px w-[90px] bg-white/10 md:w-[120px]" />
            </div>

            <h3 className="text-[25px] font-medium tracking-[-0.03em] md:text-[28px]">
              {item.title}
            </h3>

            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.75] text-white/55 md:mt-6 md:text-[16px]">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}