import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact/Contact";
import { FAQ } from "@/components/sections/faq/FAQ";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos tu proyecto y te respondemos por WhatsApp con los siguientes pasos. Primera consulta gratuita, sin compromiso.",
};

export default function ContactoPage() {
  return (
    <main className="flex-1">
      <Contact />
      <FAQ />
    </main>
  );
}