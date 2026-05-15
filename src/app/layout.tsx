import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "NOIR DYNAMICS — Product Development & Industrial Systems",
  description:
    "NOIR DYNAMICS develops advanced products, tooling systems and industrial processes for plastic, metal and electronic assemblies — from research to manufacturing and market deployment.",
  keywords: [
    "NOIR DYNAMICS",
    "product development",
    "industrial engineering",
    "tooling design",
    "injection molding",
    "plastic assemblies",
    "metal assemblies",
    "electronic assemblies",
    "manufacturing systems",
    "industrialization",
    "automation",
    "robotics",
    "market deployment",
  ],
  metadataBase: new URL("https://noirdynamics.vercel.app"),
  openGraph: {
    title: "NOIR DYNAMICS — Product Development & Industrial Systems",
    description:
      "Research-driven product development, engineering and industrial systems for real-world manufacturing and market deployment.",
    url: "https://noirdynamics.vercel.app",
    siteName: "NOIR DYNAMICS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>  
        <StructuredData />
        {children}</body>
    </html>
  );
}