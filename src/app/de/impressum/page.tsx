import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalTextContent from "@/legal/LegalTextContent";
import { formatLegalTextDate, getLegalText } from "@/legal/legal-texts";

export const revalidate = 300;
export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von NOIR DYNAMICS.",
  alternates: { canonical: "/de/impressum", languages: { de: "/de/impressum", en: "/imprint" } },
};

export default async function ImprintPage() {
  const text = await getLegalText("impressum", "de");
  if (text) {
    return <LegalPage title={text.title} updated={formatLegalTextDate(text.receivedAt, "de")} backLabel="← Zurück zu NOIR DYNAMICS"><LegalTextContent html={text.html} /></LegalPage>;
  }

  return <LegalPage title="Impressum" backLabel="← Zurück zu NOIR DYNAMICS"><p>Das aktuelle Impressum ist vorübergehend nicht verfügbar. Kontakt: <a href="mailto:contact@noirgroup.eu">contact@noirgroup.eu</a>.</p></LegalPage>;
}
