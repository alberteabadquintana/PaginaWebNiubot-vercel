import {
  ShoppingCart,
  MessageSquare,
  LayoutDashboard,
  CalendarDays,
  Megaphone,
  BrainCircuit,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { projectConcepts } from "@/data/projects";

const projectIcons = [
  ShoppingCart,
  MessageSquare,
  LayoutDashboard,
  CalendarDays,
  Megaphone,
  BrainCircuit,
];

export function Projects() {
  return (
    <section id="proyectos" className="bg-paper pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Proyectos"
              title="El tipo de proyecto que desarrollamos"
              description="Estamos construyendo nuestro portafolio de casos reales. Mientras tanto, así son los proyectos que solemos desarrollar para negocios como el tuyo."
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectConcepts.map((project, i) => {
            const Icon = projectIcons[i] ?? LayoutDashboard;
            return (
              <Reveal key={project.title} delay={i * 90}>
                <div className="group flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_20px_50px_-20px_rgba(0,4,117,0.2)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-soft text-white shadow-[0_8px_20px_-6px_rgba(0,4,117,0.4)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-paper-dim px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-paper-dim px-3 py-1 text-xs font-medium text-ink/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.industry && (
                    <p className="mt-4 border-t border-navy/10 pt-4 text-xs font-medium text-steel">
                      Sector: {project.industry}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={540}>
          <p className="mt-8 text-center text-sm text-steel">
            Ejemplos ilustrativos del tipo de trabajo que realizamos — no
            corresponden a clientes específicos.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}