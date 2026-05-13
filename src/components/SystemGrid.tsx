export default function SystemGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="mx-auto h-full w-[calc(100%-40px)] max-w-[1440px] border-x border-white/[0.04]">
        <div className="relative h-full w-full">
          <div className="absolute left-1/4 top-0 h-full w-px bg-white/[0.03]" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.03]" />
          <div className="absolute left-3/4 top-0 h-full w-px bg-white/[0.03]" />
        </div>
      </div>
    </div>
  );
}