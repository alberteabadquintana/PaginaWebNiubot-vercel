import { Layout, Server, BrainCircuit, Cloud } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { techGroups } from "@/data/technologies";
import { TechMarqueeRow } from "./TechMarqueeRow";

const categoryIcons: Record<string, typeof Layout> = {
  Frontend: Layout,
  Backend: Server,
  "Inteligencia artificial": BrainCircuit,
  Infraestructura: Cloud,
};

export function Technologies() {
  return (
    <section id="tecnologias" className="overflow-hidden bg-paper pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Tecnologías"
            title="Herramientas probadas, sin complicar lo simple"
            description="Elegimos tecnología madura y bien soportada, para que tu proyecto sea fácil de mantener, escalar y de seguir construyendo con el tiempo."
          />
        </Reveal>

        <div className="mt-14 space-y-4">
          {techGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 90}>
              <TechMarqueeRow
                category={group.category}
                icon={categoryIcons[group.category] ?? Layout}
                
                items={group.items}
                direction={i % 2 === 0 ? "left" : "right"}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-6">
            <p className="text-center text-sm text-steel">
              <span className="font-semibold text-ink">¿Usas otra herramienta?</span>{" "}
              En la mayoría de los casos podemos integrarnos con los sistemas que ya tienes.{" "}
              <a href="/contacto" className="font-medium text-navy hover:text-signal transition-colors">
                Cuéntanos tu caso →
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}