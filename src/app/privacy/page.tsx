import LegalPage from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy">
      <div>
        <h2 className="mb-4 text-[20px] font-medium text-white">
          Data Protection
        </h2>
        <p>
          Privacy information will be added before launch. This page will
          describe how NOIR DYNAMICS handles personal data, contact requests and
          technical website data.
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-[20px] font-medium text-white">Contact</h2>
        <p>contact@noirgroup.eu</p>
      </div>
    </LegalPage>
  );
}