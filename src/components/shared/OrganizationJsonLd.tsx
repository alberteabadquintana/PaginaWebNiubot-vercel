import { site } from "@/data/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "niubot",
    alternateName: "niubot — Tecnología que conecta",
    url: "https://niubot.pe",
    logo: "https://niubot.pe/images/logo/niubot-logo-transparent.png",
    description: site.description,
    email: site.email,
    areaServed: "PE",
    knowsAbout: [
      "Desarrollo de software",
      "Desarrollo web",
      "Inteligencia artificial",
      "Chatbots",
      "Automatización de procesos",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}