"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { BrandButton } from "@/components/shared/BrandButton";
import { site } from "@/data/site";

const initialForm = { name: "", email: "", company: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hola niubot, soy ${form.name || "—"}.`,
      form.company && `Represento a: ${form.company}.`,
      `Mi correo: ${form.email || "—"}.`,
      "",
      form.message || "Quiero conversar sobre un proyecto.",
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-paper pt-16 pb-24 sm:pt-20 sm:pb-32">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-signal/10 blur-[110px]" />
      <Container className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos de tu proyecto"
            description="Cuéntanos qué necesitas y te respondemos con los siguientes pasos, sin compromiso."
          />

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-steel">
                  Correo
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-medium text-ink hover:text-navy"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-steel">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-ink hover:text-navy"
                >
                  {site.whatsappDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-steel">
                  Ubicación
                </p>
                <p className="text-sm font-medium text-ink">{site.location}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="arch-card space-y-5 border border-navy/10 bg-white p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-xl border border-navy/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-steel/70 focus:border-navy/40 focus:ring-2 focus:ring-signal/30"
                />
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-medium text-ink">
                  Empresa <span className="text-steel">(opcional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu negocio"
                  className="mt-2 w-full rounded-xl border border-navy/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-steel/70 focus:border-navy/40 focus:ring-2 focus:ring-signal/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tucorreo@empresa.com"
                className="mt-2 w-full rounded-xl border border-navy/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-steel/70 focus:border-navy/40 focus:ring-2 focus:ring-signal/30"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Cuéntanos tu proyecto
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="¿Qué te gustaría construir?"
                className="mt-2 w-full resize-none rounded-xl border border-navy/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-steel/70 focus:border-navy/40 focus:ring-2 focus:ring-signal/30"
              />
            </div>

            <BrandButton as="button" type="submit" variant="primary" className="w-full">
              Enviar por WhatsApp
              <Send className="h-4 w-4" />
            </BrandButton>
            <p className="text-center text-xs text-steel">
              Al enviar, se abrirá WhatsApp con tu mensaje ya redactado.
            </p>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}