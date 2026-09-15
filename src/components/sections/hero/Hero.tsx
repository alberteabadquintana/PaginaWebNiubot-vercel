import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { BrandButton } from "@/components/shared/BrandButton";
import { ProductPreview } from "./ProductPreview";

const stats = [
  { value: "100%", label: "Comunicación directa con el equipo" },
  { value: "Semanas", label: "Para tener un primer MVP funcionando" },
  { value: "PyMEs", label: "Enfoque en negocios como el tuyo" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-deep pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      {/* ambient grid + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-signal/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[26rem] w-[26rem] rounded-full bg-navy/50 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[26rem] w-[26rem] rounded-full bg-navy/50 blur-[120px]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          

          <h1 className="mx-auto mt-5 text-balance font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Software e IA que hacen crecer tu negocio
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70">
            Diseñamos y desarrollamos sitios web, sistemas y chatbots con
            inteligencia artificial para pequeñas y medianas empresas que
            quieren dar el salto digital sin perder el trato cercano.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BrandButton href="/contacto" variant="primary">
              Cuéntanos tu proyecto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </BrandButton>
            <BrandButton href="/servicios" variant="ghost-dark">
              Ver servicios
            </BrandButton>
          </div>

          <dl className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-semibold text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-white/55">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <ProductPreview />
        </div>
      </Container>
    </section>
  );
}