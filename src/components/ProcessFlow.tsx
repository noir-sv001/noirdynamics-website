const processSteps = [
  {
    number: "01",
    title: "Vision & Research",
    text: "Continuous research, technology scouting and early opportunity analysis.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Material & Feasibility",
    text: "Validation of materials, manufacturing options and industrial feasibility.",
    icon: "⌕",
  },
  {
    number: "03",
    title: "Concept Development",
    text: "Creation of functional product and system concepts for real-world use.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Product Design",
    text: "Production-oriented design balancing function, form and manufacturability.",
    icon: "□",
  },
  {
    number: "05",
    title: "Engineering",
    text: "Technical construction, system integration and assembly development.",
    icon: "⚙",
  },
  {
    number: "06",
    title: "Tooling & Manufacturing",
    text: "Tooling strategy, manufacturing preparation and production readiness.",
    icon: "⌁",
  },
  {
    number: "07",
    title: "Market Deployment",
    text: "Structured product launch, commercial systems and digital distribution.",
    icon: "→",
  },
  {
    number: "08",
    title: "Real-World Impact",
    text: "Measured performance, continuous optimization and scalable market value.",
    icon: "↗",
  },
];

export default function ProcessFlow() {
  return (
    <section id="process" className="relative z-10 mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-t border-white/10">
      <div className="grid grid-cols-1 border-b border-white/10 md:grid-cols-[0.42fr_0.58fr]">
        <div className="p-8 md:p-16">
          <p className="text-[12px] uppercase tracking-[0.22em] text-white/35">
            Integrated Development System
          </p>

          <h2 className="mt-8 max-w-[560px] text-[42px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[64px]">
            From Vision
            <br />
            to Real-World
            <br />
            Impact
          </h2>
        </div>

        <div className="flex items-end border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-16">
          <p className="max-w-[560px] text-[16px] leading-[1.8] text-white/55">
            A structured development system connecting research, product design,
            engineering, tooling, manufacturing and market deployment.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <article
            key={step.number}
            className="group relative overflow-hidden border-b border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.025] md:p-12"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute left-[-20%] top-0 h-px w-[140%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute bottom-0 left-[-20%] h-px w-[140%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative flex gap-7">
              <div className="relative flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.025] text-[28px] text-white/80 transition-all duration-500 group-hover:border-white/35 group-hover:bg-white/[0.06]">
                <div className="absolute inset-[-10px] rounded-full border border-white/[0.08] transition-all duration-700 group-hover:scale-110 group-hover:border-white/20" />

                <div className="absolute inset-[-22px] rounded-full bg-white/[0.04] opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100" />

                <div className="absolute h-[1px] w-[120px] translate-x-[74px] bg-gradient-to-r from-white/25 to-transparent opacity-40 transition-all duration-500 group-hover:opacity-80" />

                <span className="relative z-10">{step.icon}</span>
              </div>

              <div className="pt-1">
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                  {step.number}
                </span>

                <h3 className="mt-5 text-[26px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[34px]">
                  {step.title}
                </h3>

                <p className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-white/52 md:text-[16px]">
                  {step.text}
                </p>
              </div>
            </div>

            {index < processSteps.length - 1 && (
              <div className="absolute right-8 top-1/2 hidden h-px w-[80px] bg-gradient-to-r from-white/15 to-transparent md:block" />
            )}
          </article>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-8 py-8 md:px-16">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
          Innovation is structured. Impact is engineered.
        </p>

        <div className="hidden h-px w-[180px] bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
      </div>
    </section>
  );
}