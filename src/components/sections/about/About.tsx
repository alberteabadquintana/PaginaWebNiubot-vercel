import {
  BrainCircuit,
  Database,
  Sparkles,
  Users,
  Workflow,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import Image from "next/image";

const values = [
  {
    icon: Users,
    title: "Cercanía",
    description:
      "Tratamos tu proyecto como propio, con comunicación directa y sin letra pequeña. Hablas con quien construye, no con un intermediario.",
  },
  {
    icon: Workflow,
    title: "Agilidad",
    description:
      "Entregamos en ciclos cortos para que veas resultados desde las primeras semanas. Sin promesas vacías ni proyectos eternos.",
  },
  {
    icon: Sparkles,
    title: "Tecnología con propósito",
    description:
      "Usamos IA y software donde realmente resuelven un problema, no por moda. Primero entendemos el problema, luego elegimos la herramienta.",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Tu código, tu propiedad",
    description: "Todo lo que construimos te pertenece al 100%. Sin candados ni dependencias forzadas.",
  },
  {
    icon: Clock,
    title: "Entregas rápidas",
    description: "Primer entregable funcional en menos de 2 semanas. Ciclos cortos, feedback constante.",
  },
  {
    icon: TrendingUp,
    title: "Escalamos contigo",
    description: "Construimos pensando en el futuro: la solución de hoy carga el crecimiento de mañana.",
  },
];

const stats = [
  { value: "3+", label: "Sectores especializados" },
  { value: "< 2 sem.", label: "Entrega de avance rapido de tu sistema" },
  { value: "100%", label: "Satisfaccion del cliente" },
  { value: "PERÚ", label: "Cobertura regional" },
];

export function About() {
  return (
    <>
      <section
        id="nosotros"
        className="bg-grid relative overflow-hidden bg-paper pt-16 pb-24 sm:pt-20 sm:pb-32"
      >
        <div className="pointer-events-none absolute -right-16 top-0 h-96 w-96 rounded-full bg-signal/20 blur-[110px]" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-96 w-96 rounded-full bg-navy/15 blur-[110px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper via-transparent to-paper" />

        <Container className="relative grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <Reveal>
            <SectionHeading
              eyebrow="Quiénes somos"
              title="Nacimos para acercar la tecnología a las empresas que la necesitan"
              description="El nombre lo dice todo: 'niu' de nuevo, 'bot' de la tecnología y la inteligencia artificial que ponemos a trabajar para ti. Somos un equipo que desarrolla software e IA con la cercanía de un aliado, no de un proveedor más."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className={`rounded-2xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_15px_35px_-20px_rgba(0,4,117,0.3)] ${
                    i === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-signal-soft text-navy">
                    <value.icon className="h-5 w-5" />
                  </div>

                  <p className="mt-4 font-display text-base font-semibold text-ink">
                    {value.title}
                  </p>

                  <p className="mt-1.5 text-sm leading-relaxed text-steel">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — NIU BOT ECOSYSTEM */}
          <Reveal delay={120}>
            <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2.75rem] border border-navy/10 bg-white p-6 shadow-[0_35px_90px_-45px_rgba(0,4,117,0.35)] sm:p-8">
              {/* Soft background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/10 blur-[90px]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-navy/5 blur-[90px]" />

              {/* Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.045]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #000475 1px, transparent 1px), linear-gradient(to bottom, #000475 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />

              {/* Header */}
              <div className="relative z-20 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-navy/45">
                    NIU BOT / SYSTEM
                  </p>

                  <p className="mt-1 text-xs text-steel">
                    Tecnología que conecta
                  </p>
                </div>
              </div>

              {/* Connections */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 560 560"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M280 280 L125 145" stroke="rgba(0,4,117,0.13)" strokeWidth="1" />
                <path d="M280 280 L435 145" stroke="rgba(0,4,117,0.13)" strokeWidth="1" />
                <path d="M280 280 L125 415" stroke="rgba(0,4,117,0.13)" strokeWidth="1" />
                <path d="M280 280 L435 415" stroke="rgba(0,4,117,0.13)" strokeWidth="1" />
                <path d="M125 145 L435 145" stroke="rgba(0,194,168,0.18)" strokeWidth="1" strokeDasharray="4 8" />
                <path d="M125 415 L435 415" stroke="rgba(0,194,168,0.18)" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="125" cy="145" r="3" fill="#00c2a8" opacity="0.8" />
                <circle cx="435" cy="145" r="3" fill="#00c2a8" opacity="0.8" />
                <circle cx="125" cy="415" r="3" fill="#00c2a8" opacity="0.8" />
                <circle cx="435" cy="415" r="3" fill="#00c2a8" opacity="0.8" />
              </svg>

              {/* Central NIU BOT */}
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute -inset-9 rounded-full border border-navy/5" />
                <div className="absolute -inset-6 rounded-full border border-signal/20" />
                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-navy/10 bg-navy shadow-[0_20px_60px_-15px_rgba(0,4,117,0.5)] sm:h-36 sm:w-36">
                  <div className="absolute inset-3 rounded-full border border-white/10" />
                  <div className="relative flex items-center justify-center">
                    <Image
                      src="/images/logo/niubot-logo-transparent-white.png"
                      alt="NIU BOT"
                      width={90}
                      height={90}
                      className="h-auto w-20 object-contain sm:w-24"
                    />
                  </div>
                </div>
              </div>

              {/* SOFTWARE */}
              <div className="absolute left-[5%] top-[20%] z-20">
                <div className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white/90 px-3.5 py-3 shadow-[0_10px_30px_-20px_rgba(0,4,117,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_15px_35px_-18px_rgba(0,4,117,0.35)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">Software</p>
                    <p className="text-[10px] text-steel">Soluciones digitales</p>
                  </div>
                </div>
              </div>

              {/* IA */}
              <div className="absolute right-[5%] top-[20%] z-20">
                <div className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white/90 px-3.5 py-3 shadow-[0_10px_30px_-20px_rgba(0,4,117,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_15px_35px_-18px_rgba(0,4,117,0.35)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-signal-soft text-navy">
                    <BrainCircuit className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">Inteligencia IA</p>
                    <p className="text-[10px] text-steel">Tecnología aplicada</p>
                  </div>
                </div>
              </div>

              {/* AUTOMATIZACIÓN */}
              <div className="absolute bottom-[20%] left-[5%] z-20">
                <div className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white/90 px-3.5 py-3 shadow-[0_10px_30px_-20px_rgba(0,4,117,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_15px_35px_-18px_rgba(0,4,117,0.35)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Workflow className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">Automatización</p>
                    <p className="text-[10px] text-steel">Procesos inteligentes</p>
                  </div>
                </div>
              </div>

              {/* DATOS */}
              <div className="absolute bottom-[20%] right-[5%] z-20">
                <div className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white/90 px-3.5 py-3 shadow-[0_10px_30px_-20px_rgba(0,4,117,0.4)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_15px_35px_-18px_rgba(0,4,117,0.35)]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">Datos</p>
                    <p className="text-[10px] text-steel">Información útil</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between border-t border-navy/10 pt-4 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-navy/35">
                  Software · IA · Automatización
                </p>
                <div className="flex gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-navy/15" />
                  <span className="h-1 w-1 rounded-full bg-navy/25" />
                  <span className="h-1 w-1 rounded-full bg-signal" />
                </div>
              </div>
            </div>

            {/* Párrafo reubicado debajo del cuadrado */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-steel">
              Trabajamos con pequeñas y medianas empresas que quieren dar el
              salto digital sin perderse en la jerga técnica: entendemos tu
              negocio primero, y construimos la solución después.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="border-y border-navy/10 bg-white py-12">
        <Container>
          <Reveal>
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="font-display text-3xl font-bold text-navy sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-steel">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Differentiators */}
      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <Reveal>
            <h2 className="text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
              Por qué elegirnos
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-base text-steel">
              Somos la opcion que mas se acomoda a su presupuesto y la opcion que mas le da valor a su empresa, mejorando su rendimiento, liquidez y cuidando sus activos
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex h-full flex-col items-start gap-4 rounded-3xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,4,117,0.2)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-soft text-white shadow-[0_8px_20px_-6px_rgba(0,4,117,0.4)]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-steel">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}