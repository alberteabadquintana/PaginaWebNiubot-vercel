import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { BrandButton } from "@/components/shared/BrandButton";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-deep pt-20 pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-signal/5 blur-[100px]" />
      <Image
        src="/images/logo/niubot-icon-transparent-white.png"
        alt=""
        width={420}
        height={500}
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-auto opacity-[0.04]"
      />

      <Container className="relative">
        {/* pre-footer CTA */}
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-soft to-navy-deep px-6 py-10 text-center sm:px-14 sm:py-12 lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
              ¿Tienes un proyecto en mente?
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
              Cuéntanos qué necesitas y te respondemos con los siguientes
              pasos, sin compromiso.
            </p>
          </div>
          <BrandButton href="/contacto" variant="primary" className="shrink-0">
            Cuéntanos tu proyecto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </BrandButton>
        </div>

        {/* main columns */}
        <div className="mt-14 grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-signal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Servicios
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/servicios"
                    className="text-sm text-white/70 transition-colors hover:text-signal"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Contacto
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-signal"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {site.email}
                </Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-signal"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  {site.whatsappDisplay}
                </Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} niubot. Todos los derechos reservados.
          </p>

          <Link
            href="#top"
            aria-label="Volver arriba"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-signal/40 hover:text-signal"
          >
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}