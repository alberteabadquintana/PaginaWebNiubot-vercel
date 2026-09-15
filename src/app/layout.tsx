import { Navbar } from "@/components/layout/navbar/Navbar";
import { Footer } from "@/components/layout/footer/Footer";
import type { Metadata } from "next";
import "@fontsource/comfortaa/400.css";
import "@fontsource/comfortaa/500.css";
import "@fontsource/comfortaa/600.css";
import "@fontsource/comfortaa/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/shared/OrganizationJsonLd";
import { PromoModal } from "@/components/shared/PromoModal";
import { WhatsAppPeek } from "@/components/shared/WhatsAppPeek";


const siteUrl = "https://niubot.pe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "niubot — Tecnología que conecta",
    template: "%s · niubot",
  },
  description:
    "niubot desarrolla software a la medida e inteligencia artificial para pequeñas y medianas empresas: sitios web, aplicaciones y chatbots que conectan tu negocio con tus clientes.",
  keywords: [
    "niubot",
    "desarrollo de software",
    "desarrollo web",
    "inteligencia artificial",
    "chatbots",
    "automatización",
    "PyMEs",
    "Perú",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "niubot — Tecnología que conecta",
    description:
      "Software a la medida e inteligencia artificial para que tu empresa crezca. Sitios web, apps y chatbots, hechos por un equipo cercano.",
    url: siteUrl,
    siteName: "niubot",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "niubot — Tecnología que conecta",
    description:
      "Software a la medida e inteligencia artificial para que tu empresa crezca.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <OrganizationJsonLd />
        <Navbar />
        {children}
        <Footer />
        <PromoModal />
        <WhatsAppPeek />
      </body>
    </html>
  );
}