import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalTextContent from "@/legal/LegalTextContent";
import { formatLegalTextDate, getLegalText } from "@/legal/legal-texts";

export const revalidate = 300;
export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von NOIR DYNAMICS.",
  alternates: { canonical: "/de/datenschutz", languages: { de: "/de/datenschutz", en: "/privacy" } },
};

export default async function PrivacyPage() {
  const text = await getLegalText("datenschutz", "de");
  if (text) {
    return <LegalPage title={text.title} updated={formatLegalTextDate(text.receivedAt, "de")} backLabel="← Zurück zu NOIR DYNAMICS"><LegalTextContent html={text.html} /></LegalPage>;
  }

  return <LegalPage title="Datenschutzerklärung" backLabel="← Zurück zu NOIR DYNAMICS"><p>Die aktuelle Datenschutzerklärung ist vorübergehend nicht verfügbar. Kontakt: <a href="mailto:contact@noirgroup.eu">contact@noirgroup.eu</a>.</p></LegalPage>;
}
