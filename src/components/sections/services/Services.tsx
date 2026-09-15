import {
  ArrowUpRight,
  Bot,
  Code2,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { services } from "@/data/services";

const pillarMeta = {
  software: {
    icon: Code2,
    number: "01",
    label: "DESARROLLO DE SOFTWARE",
  },

  ia: {
    icon: Bot,
    number: "02",
    label: "INTELIGENCIA ARTIFICIAL",
  },

  consultoria: {
    icon: Lightbulb,
    number: "03",
    label: "CONSULTORÍA TECNOLÓGICA",
  },
};

function createSolutionId(
  serviceId: string,
  solutionIndex: number
) {
  return `solution-${serviceId}-${solutionIndex}`;
}

export function Services() {
  return (
    <section
      id="servicios"
      className="bg-white py-24 sm:py-32"
    >
      <Container>
        {/* HEADER */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#000475]">
                Servicios
              </span>
            </div>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Tecnología que conecta
              <span className="block text-[#797979]">
                con tu negocio.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#797979] sm:text-lg">
              Diseñamos y desarrollamos soluciones digitales que se
              adaptan a tus procesos, mejoran tu operación y preparan
              tu empresa para crecer.
            </p>
          </div>
        </Reveal>

        {/* SERVICES */}
        <div className="relative mt-20">
          <div className="absolute bottom-12 left-[19px] top-12 hidden w-px bg-[#000475]/15 lg:block" />

          <div>
            {services.map((service, index) => {
              const meta =
                pillarMeta[
                  service.id as keyof typeof pillarMeta
                ];

              const ServiceIcon = meta.icon;

              return (
                <Reveal
                  key={service.id}
                  delay={index * 100}
                >
                  <article className="group relative border-t border-black/10 py-10 sm:py-14">
                    <div className="grid gap-8 lg:grid-cols-[40px_minmax(0,1fr)_minmax(320px,460px)] lg:gap-10">

                      {/* NUMERO */}
                      <div className="relative z-10 hidden lg:block">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#000475]/20 bg-white">
                          <span className="font-mono text-xs font-semibold text-[#000475]">
                            {meta.number}
                          </span>
                        </div>
                      </div>

                      {/* CONTENIDO */}
                      <div>
                        <div className="mb-5 flex items-center gap-3 lg:hidden">
                          <span className="font-mono text-xs font-semibold text-[#000475]">
                            {meta.number}
                          </span>

                          <span className="h-px w-6 bg-[#000475]/30" />
                        </div>

                        <div className="flex items-center gap-3">
                          <ServiceIcon className="h-5 w-5 text-[#000475]" />

                          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#797979]">
                            {meta.label}
                          </span>
                        </div>

                        <h3 className="mt-5 max-w-2xl font-display text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                          {service.title}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#797979] sm:text-base">
                          {service.description}
                        </p>

                        {service.highlight && (
                          <div className="mt-6 inline-flex items-center border-l-2 border-[#000475] pl-3">
                            <span className="text-xs font-medium text-black/70">
                              {service.highlight}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* SOLUCIONES */}
                      <div className="lg:pt-1">
                        <div className="mb-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#797979]">
                            Soluciones
                          </span>
                        </div>

                        <div className="border-y border-black/10">
                          {service.bullets.map(
                            (solution, solutionIndex) => {
                              const targetId = createSolutionId(
                                service.id,
                                solutionIndex
                              );

                              return (
                                <a
                                  key={solution.title}
                                  href={`#${targetId}`}
                                  className="group/solution flex items-center justify-between border-b border-black/10 py-4 last:border-b-0"
                                >
                                  <span className="text-sm font-medium text-black/75 transition-colors duration-200 group-hover/solution:text-[#000475]">
                                    {solution.title}
                                  </span>

                                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#000475] opacity-40 transition-all duration-200 group-hover/solution:-translate-y-0.5 group-hover/solution:translate-x-0.5 group-hover/solution:opacity-100" />
                                </a>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>

                    
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* SOLUTION DETAILS */}
        <div className="mt-24 sm:mt-32">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#000475]">
              Nuestras soluciones
            </p>

            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Conoce lo que podemos construir para tu empresa.
            </h3>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {services.map((service) =>
              service.bullets.map(
                (solution, solutionIndex) => {
                  const targetId = createSolutionId(
                    service.id,
                    solutionIndex
                  );

                  const isReversed = solutionIndex % 2 !== 0;

                  return (
                    <Reveal
                      key={targetId}
                    >
                      <article
                        id={targetId}
                        className="scroll-mt-24"
                      >
                        <div
                          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                            isReversed
                              ? "lg:[&>div:first-child]:order-2"
                              : ""
                          }`}
                        >
                          {/* IMAGEN */}
                          <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#f7f7f7]">
                            <div className="relative aspect-[16/10]">
                              <Image
                                src={solution.image}
                                alt={solution.title}
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                              />
                            </div>
                          </div>

                          {/* TEXTO */}
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#000475]">
                              {service.title}
                            </p>

                            <h4 className="mt-4 font-display text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                              {solution.title}
                            </h4>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#797979] sm:text-base">
                              {solution.description}
                            </p>

                            <div className="mt-7 h-px w-16 bg-[#000475]" />

                            <a
                              href="#servicios"
                              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#000475]"
                            >
                              Volver a servicios
                              <ArrowUpRight className="h-3.5 w-3.5 rotate-[-45deg]" />
                            </a>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                }
              )
            )}
          </div>
        </div>

        {/* CIERRE */}
        <Reveal delay={350}>
          <div className="mt-24 border-t border-black/10 pt-8 sm:mt-32">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-semibold text-black">
                  Una solución. Un equipo. Una visión tecnológica.
                </p>

                <p className="mt-2 text-sm text-[#797979]">
                  Trabajamos contigo desde la idea hasta la implementación.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-medium text-[#797979]">
                <span>Software</span>

                <span className="h-1 w-1 rounded-full bg-[#000475]" />

                <span>IA</span>

                <span className="h-1 w-1 rounded-full bg-[#000475]" />

                <span>Consultoría</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}