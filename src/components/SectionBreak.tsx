export default function SectionBreak({ label }: { label: string }) {
  return (
    <div className="relative z-10 mx-auto w-[calc(100%-40px)] max-w-[1440px] border-x border-white/10">
      <div className="flex h-[180px] items-center border-t border-white/10 px-8 md:px-16">
        <div className="flex w-full items-center gap-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/30">
            {label}
          </span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/20">
            NOIR DYNAMICS
          </span>
        </div>
      </div>
    </div>
  );
}