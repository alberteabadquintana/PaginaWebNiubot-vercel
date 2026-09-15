"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { BrandButton } from "@/components/shared/BrandButton";
import { faqs } from "@/data/faqs";
import { site } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Todo lo que necesitas saber antes de empezar"
            description="Si tienes alguna duda que no está aquí, escríbenos directamente por WhatsApp y te respondemos en minutos."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-navy/10">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 60}>
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="group flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
                    <span className="font-display text-base font-semibold text-ink group-hover:text-navy transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-steel transition-transform duration-300 ${
                      open === i ? "rotate-180 text-navy" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-5 pl-8 pr-4">
                    <p className="text-sm leading-relaxed text-steel">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-navy/10 bg-white px-8 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                ¿Tienes otra pregunta?
              </p>
              <p className="mt-1 text-sm text-steel">
                Escríbenos por WhatsApp y te respondemos en menos de 24 horas.
              </p>
            </div>
            <BrandButton
              href={`https://wa.me/${site.whatsapp}?text=Hola%20niubot%2C%20tengo%20una%20pregunta`}
              variant="primary"
              className="shrink-0"
            >
              Preguntar por WhatsApp
            </BrandButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
