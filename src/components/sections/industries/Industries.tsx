import {
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Utensils,
  Package,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ElementType> = {
  "shopping-bag": ShoppingBag,
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  utensils: Utensils,
  package: Package,
};

export function Industries() {
  return (
    <section className="bg-navy-deep py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industrias"
            title="Trabajamos con negocios de múltiples sectores"
            description="No importa el rubro: si tienes un proceso que mejorar o una idea digital que ejecutar, tenemos experiencia en tu industria."
            align="center"
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] ?? ShoppingBag;
            return (
              <Reveal key={industry.name} delay={i * 80}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:bg-white/[0.06]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-soft text-white shadow-[0_8px_20px_-6px_rgba(0,4,117,0.4)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold text-white">                    {industry.name}
                  </h3>

                  <ul className="mt-3 space-y-1.5">
                    {industry.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center gap-2 text-sm text-white/55">                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
