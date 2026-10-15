export type LegalTextType = "impressum" | "datenschutz";
export type LegalTextLanguage = "de" | "en";

export type StoredLegalText = {
  type: LegalTextType;
  title: string;
  language: LegalTextLanguage;
  country: "DE";
  html: string;
  text: string;
  pdfUrl?: string;
  receivedAt: string;
  revision: string;
  checksum: string;
};
