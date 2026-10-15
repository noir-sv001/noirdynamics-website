import Link from "next/link";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
  updated?: string;
  backLabel?: string;
};

export default function LegalPage({ title, children, updated, backLabel = "← Back to NOIR DYNAMICS" }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-[#F5F5F5]">
      <section className="mx-auto max-w-[900px]">
        <Link
          href="/"
          className="text-[14px] font-medium text-white/45 transition hover:text-white"
        >
          {backLabel}
        </Link>

        <h1 className="mt-16 text-[48px] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[72px]">
          {title}
        </h1>

        {updated ? <p className="mt-5 text-[12px] uppercase tracking-[0.12em] text-white/30">Updated {updated}</p> : null}

        <div className="legal-page mt-14 space-y-10 text-[16px] leading-[1.7] text-white/60">
          {children}
        </div>
      </section>
    </main>
  );
}