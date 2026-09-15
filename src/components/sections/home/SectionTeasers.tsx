import Link from "next/link";
import {
  ArrowRight,
  Users,
  Wrench,
  Cpu,
  GitBranch,
  Layers,
  Mail,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { pageTeasers } from "@/data/pageTeasers";

const teaserIcons: Record<string, React.ElementType> = {
  "/nosotros": Users,
  "/servicios": Wrench,
  "/tecnologias": Cpu,
  "/proceso": GitBranch,
  "/proyectos": Layers,
  "/contacto": Mail,
};

const teaserColors: Record<string, string> = {
  "/nosotros": "from-violet-500 to-violet-600",
  "/servicios": "from-navy to-navy-soft",
  "/tecnologias": "from-emerald-500 to-emerald-600",
  "/proceso": "from-amber-500 to-amber-600",
  "/proyectos": "from-signal to-teal-600",
  "/contacto": "from-rose-500 to-rose-600",
};

export function SectionTeasers() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Explora niubot"
            title="Todo lo que necesitas saber"
            description="Desde quiénes somos hasta cómo trabajamos: cada sección está diseñada para que tomes una decisión informada."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pageTeasers.map((item, i) => {
            const Icon = teaserIcons[item.href] ?? ArrowRight;
            const gradient = teaserColors[item.href] ?? "from-navy to-navy-soft";
            return (
              <Reveal key={item.href} delay={i * 70}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_20px_50px_-20px_rgba(0,4,117,0.2)]"
                >
                  <div>
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-[0_8px_20px_-6px_rgba(0,4,117,0.4)]`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    {item.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}