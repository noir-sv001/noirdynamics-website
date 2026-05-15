export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NOIR DYNAMICS",
    url: "https://noirdynamics.vercel.app",
    description:
      "Research-driven product development, engineering and industrial systems for plastic, metal and electronic assemblies.",
    industry: "Industrial Engineering",
    areaServed: [
      "Europe",
      "North America",
      "Asia",
    ],
    knowsAbout: [
      "Product Development",
      "Industrial Engineering",
      "Tooling Design",
      "Injection Molding",
      "Plastic Assemblies",
      "Electronic Assemblies",
      "Industrial Manufacturing",
      "Automation",
      "Robotics",
      "Industrial Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}