import { siteUrl } from "@/lib/site";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NOIR DYNAMICS",
    legalName: "Noir Dynamics UG (haftungsbeschränkt)",
    url: siteUrl,
    email: "contact@noirgroup.eu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Waldheimstraße 22",
      postalCode: "58566",
      addressLocality: "Kierspe",
      addressCountry: "DE",
    },
    description: "Research-driven product development, engineering and industrial systems for plastic, metal and electronic products and assemblies.",
    industry: "Industrial Engineering",
    areaServed: "Worldwide",
    knowsAbout: ["Research and Development", "Product Development", "Industrial Engineering", "Tooling Design", "Plastic Products", "Metal Products", "Electronic Products", "Automation", "Digitalization", "Industrial Systems"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
