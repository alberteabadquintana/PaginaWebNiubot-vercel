import { ArrowRight, Zap } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { BrandButton } from "@/components/shared/BrandButton";

interface CtaBannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  title = "¿Listo para dar el salto digital?",
  description = "Agenda una llamada gratuita de 30 minutos. Sin compromiso, sin vendedores: solo conversamos sobre tu negocio y qué tecnología puede ayudarte.",
  primaryLabel = "Cuéntanos tu proyecto",
  primaryHref = "/contacto",
  secondaryLabel = "Ver servicios",
  secondaryHref = "/servicios",
}: CtaBannerProps) {
  return (
    <section className="bg-navy-deep py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-signal/30 to-transparent" />
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-soft via-navy-deep to-navy-deep px-8 py-14 text-center sm:px-14 sm:py-16">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/10 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-navy/50 blur-[80px]" />

            {/* Badge */}
            <div className="relative mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5">
              <Zap className="h-3.5 w-3.5 text-signal" />
              <span className="text-xs font-semibold uppercase tracking-wider text-signal">
                Consulta gratuita
              </span>
            </div>

            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
              {description}
            </p>

            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BrandButton href={primaryHref} variant="primary">
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </BrandButton>
              <BrandButton href={secondaryHref} variant="ghost-dark">
                {secondaryLabel}
              </BrandButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
