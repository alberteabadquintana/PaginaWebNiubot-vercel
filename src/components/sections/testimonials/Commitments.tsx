import { MessageCircle, RefreshCw, ShieldCheck, LifeBuoy } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { commitments } from "@/data/commitments";

const icons = [MessageCircle, RefreshCw, ShieldCheck, LifeBuoy];

export function Commitments() {
  return (
    <section className="bg-navy-deep py-24 sm:py-32">      
    <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Compromisos"
            title="Así trabajamos con cada cliente"
            description="Todavía estamos construyendo nuestra cartera de testimonios. Mientras tanto, esto es lo que puedes esperar de nosotros desde el primer día."
            align="center"
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {commitments.map((item, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex h-full gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-signal/30 hover:bg-white/[0.06]">                  
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-signal/15 text-signal">                    
                <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">                      
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">                      
                    {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}