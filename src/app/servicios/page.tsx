import type { Metadata } from "next";
import { Services } from "@/components/sections/services/Services";
import { FAQ } from "@/components/sections/faq/FAQ";
import { Process } from "@/components/sections/process/Process";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web y software, inteligencia artificial, chatbots y consultoría digital para PyMEs. Tres pilares para crecer sin depender de múltiples proveedores.",
};

export default function ServiciosPage() {
  return (
    <main className="flex-1">
      <Services />
      
      {/*<FAQ />*/}
    </main>
  );
}