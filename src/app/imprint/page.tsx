import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import LegalTextContent from "@/legal/LegalTextContent";
import { formatLegalTextDate, getLegalText } from "@/legal/legal-texts";

export const revalidate = 300;
export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal notice for NOIR DYNAMICS.",
  alternates: { canonical: "/imprint", languages: { de: "/de/impressum", en: "/imprint" } },
};

export default async function ImprintPage() {
  const text = await getLegalText("impressum", "en");
  if (text) {
    return <LegalPage title={text.title} updated={formatLegalTextDate(text.receivedAt, "en")}><LegalTextContent html={text.html} /></LegalPage>;
  }

  return <LegalPage title="Imprint"><p>The current legal notice is temporarily unavailable. Please contact <a href="mailto:contact@noirgroup.eu">contact@noirgroup.eu</a>.</p></LegalPage>;
}
