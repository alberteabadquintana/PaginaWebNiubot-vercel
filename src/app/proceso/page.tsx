import type { Metadata } from "next";
import { Process } from "@/components/sections/process/Process";
import { FAQ } from "@/components/sections/faq/FAQ";

export const metadata: Metadata = {
  title: "Proceso",
  description:
    "Cómo trabajamos: de la idea a producción en 4 pasos claros, con entregas semanales y sin sorpresas en el camino.",
};

export default function ProcesoPage() {
  return (
    <main className="flex-1">
      <Process />
      <FAQ />
    </main>
  );
}