import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects/Projects";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Conoce el tipo de proyectos que desarrollamos para PyMEs: e-commerce, chatbots con IA, paneles internos, sistemas de reservas y más.",
};

export default function ProyectosPage() {
  return (
    <main className="flex-1">
      <Projects />
      
    </main>
  );
}