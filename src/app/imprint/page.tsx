import LegalPage from "@/components/LegalPage";

export default function ImprintPage() {
  return (
    <LegalPage title="Imprint">
      <div>
        <h2 className="mb-4 text-[20px] font-medium text-white">
          Company Information
        </h2>
        <p>Legal company information will be added before launch.</p>
      </div>

      <div>
        <h2 className="mb-4 text-[20px] font-medium text-white">Contact</h2>
        <p>contact@noirgroup.eu</p>
      </div>
    </LegalPage>
  );
}