export default function SectionBreak({ label }: { label: string }) {
  return (
    <div className="relative z-10 mx-auto w-[calc(100%-40px)] max-w-[1440px] py-14 md:py-24">
      <div className="flex h-[120px] items-center border-y border-white/[0.04] px-8 md:px-16">
        <div className="flex w-full items-center gap-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/30">
            {label}
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-transparent" />

          <span className="hidden text-[11px] uppercase tracking-[0.22em] text-white/20 md:block">
            NOIR DYNAMICS
          </span>
        </div>
      </div>
    </div>
  );
}