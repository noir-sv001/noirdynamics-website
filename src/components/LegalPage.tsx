type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-[#F5F5F5]">
      <section className="mx-auto max-w-[900px]">
        <a
          href="/"
          className="text-[14px] font-medium text-white/45 transition hover:text-white"
        >
          ← Back to NOIR DYNAMICS
        </a>

        <h1 className="mt-16 text-[48px] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[72px]">
          {title}
        </h1>

        <div className="mt-14 space-y-10 text-[16px] leading-[1.7] text-white/60">
          {children}
        </div>
      </section>
    </main>
  );
}