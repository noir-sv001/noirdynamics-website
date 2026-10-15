type Props = { html: string };

export default function LegalTextContent({ html }: Props) {
  // HTML is sanitised by the local Noir Dynamics legal store before rendering.
  return <div className="legal-synced-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
