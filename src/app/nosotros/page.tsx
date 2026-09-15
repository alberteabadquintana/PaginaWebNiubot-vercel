import type { Metadata } from "next";
import { About } from "@/components/sections/about/About";
import { Commitments } from "@/components/sections/testimonials/Commitments";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de niubot: quiénes somos, cómo trabajamos y por qué nos importa que la tecnología funcione para tu negocio, no al revés.",
};

export default function NosotrosPage() {
  return (
    <main className="flex-1">
      <About />
      <Commitments />
      
    </main>
  );
}