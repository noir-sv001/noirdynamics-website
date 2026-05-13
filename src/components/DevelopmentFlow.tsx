const steps = [
  "Research",
  "Product Design",
  "Engineering",
  "Tooling",
  "Industrialization",
  "Production",
  "Digital Commerce",
];

export default function DevelopmentFlow() {
  return (
    <section
      id="development"
      className="mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.45fr_0.55fr]">
        <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-16">
          <p className="text-[12px] uppercase tracking-[0.18em] text-white/35">
            Core Development Structure
          </p>

          <h2 className="mt-8 text-[42px] font-semibold leading-[1.04] tracking-[-0.035em] md:text-[72px]">
            Structured
            <br />
            Industrial
            <br />
            Development
          </h2>
        </div>

        <div>
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center justify-between border-b border-white/10 px-8 py-8 md:px-14 md:py-10"
            >
              <div className="flex items-center gap-6">
                <span className="text-[12px] uppercase tracking-[0.18em] text-white/30">
                  0{index + 1}
                </span>

                <h3 className="text-[24px] font-medium tracking-[-0.03em] md:text-[34px]">
                  {step}
                </h3>
              </div>

              <div className="h-[10px] w-[10px] rounded-full border border-white/20 bg-white/[0.05]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}