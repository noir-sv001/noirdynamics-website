export default function SystemGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="mx-auto h-full w-[calc(100%-40px)] max-w-[1440px] border-x border-white/[0.03]" />
    </div>
  );
}