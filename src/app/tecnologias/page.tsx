import type { Metadata } from "next";
import { Technologies } from "@/components/sections/technologies/Technologies";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Tecnologías",
  description:
    "El stack tecnológico de niubot: React, Next.js, Node.js, Python, OpenAI, AWS y más. Tecnología madura y bien soportada para proyectos que duran.",
};

export default function TecnologiasPage() {
  return (
    <main className="flex-1">
      <Technologies />
      
    </main>
  );
}