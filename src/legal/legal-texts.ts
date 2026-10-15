import { getLegalHubDocument, type LegalDocumentType, type Locale } from "@/lib/legal-store";
import type { LegalTextLanguage, LegalTextType, StoredLegalText } from "./types";

export async function getLegalText(
  type: LegalTextType,
  language: LegalTextLanguage,
): Promise<StoredLegalText | null> {
  const document = await getLegalHubDocument(type as LegalDocumentType, language as Locale);
  if (!document) return null;

  return {
    type,
    title: document.title || (type === "impressum" ? "Imprint" : "Privacy Policy"),
    language,
    country: "DE",
    html: document.html,
    text: document.text || "",
    pdfUrl: document.pdfUrl,
    receivedAt: document.updatedAt || "",
    revision: document.revisionId || "",
    checksum: document.checksum || "",
  };
}

export function formatLegalTextDate(receivedAt: string, language: LegalTextLanguage): string {
  const date = new Date(receivedAt);
  if (Number.isNaN(date.getTime())) return receivedAt;

  return new Intl.DateTimeFormat(language === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(date);
}
