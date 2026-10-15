import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: "NOIR DYNAMICS — Product Development & Industrial Systems", template: "%s — NOIR DYNAMICS" },
  description: "NOIR DYNAMICS develops technical products, industrial systems and manufacturing solutions — from research and engineering to production readiness and market deployment.",
  keywords: ["NOIR DYNAMICS", "product development", "research and development", "industrial engineering", "tooling design", "plastic products", "metal products", "electronic products", "manufacturing systems", "industrialization", "automation", "digitalization"],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "NOIR DYNAMICS — Product Development & Industrial Systems",
    description: "Research-driven product development, engineering and industrial systems for real-world manufacturing.",
    url: siteUrl,
    siteName: "NOIR DYNAMICS",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StructuredData />{children}</body></html>;
}
