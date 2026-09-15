"use client";

import { useEffect, useState } from "react";
import {
  MessageCircle,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  Check,
  Clock,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { BrandButton } from "@/components/shared/BrandButton";
import { processSteps } from "@/data/process";

const icons = [MessageCircle, PenTool, Code2, Rocket];

export function Process() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % processSteps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active]);

  const step = processSteps[active];
  const Icon = icons[active];

  return (
    <section id="proceso" className="bg-navy-deep py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Un proceso claro, de principio a fin"
            description="Sin sorpresas a mitad de camino: sabes qué esperar en cada etapa de tu proyecto y cuánto tiempo tomará."
            tone="dark"
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-16 max-w-4xl">
            {/* Step selector with progress line */}
            <div className="relative px-2">
              <div className="absolute left-2 right-2 top-6 h-px bg-white/10" />
              <div
                className="absolute left-2 top-6 h-px bg-white transition-all duration-700 ease-out"
                style={{
                  width: `calc((100% - 1rem) * ${active / (processSteps.length - 1)})`,
                }}
              />
              <div className="relative flex justify-between">
                {processSteps.map((s, i) => (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={i === active}
                    className="group flex flex-col items-center gap-3 outline-none"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-300 ${
                        i === active
                          ? "border-navy bg-navy text-white shadow-[0_0_0_6px_rgba(0,4,117,0.2)]"
                          : i < active
                            ? "border-white/50 bg-navy-deep text-white"
                            : "border-white/15 bg-navy-deep text-white/40 group-hover:border-white/30 group-hover:text-white/70"
                      }`}
                    >
                      {i < active ? <Check className="h-4 w-4" /> : s.number}
                    </span>
                    <span
                      className={`hidden text-center text-xs font-medium transition-colors sm:block ${
                        i === active ? "text-white" : "text-white/40"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active step content */}
            <div
              key={active}
              className="animate-step-fade mt-14 grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:grid-cols-[auto_1fr]"
            >
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-soft text-white shadow-[0_8px_20px_-6px_rgba(0,4,117,0.4)]">                  
                  <Icon className="h-7 w-7" />
                </div>
                
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Paso {step.number}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">
                  {step.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-6 sm:flex-row">
            <div>
              <p className="font-display text-lg font-medium text-white">
                Así de simple es empezar tu proyecto con nosotros
              </p>
              <p className="mt-1 text-sm text-white/50">
                Primera reunión gratuita · Sin compromisos · Propuesta en 48 h
              </p>
            </div>
            <BrandButton href="/contacto" variant="primary" className="shrink-0">
              Cuéntanos tu proyecto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </BrandButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}