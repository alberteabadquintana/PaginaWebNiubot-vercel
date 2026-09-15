"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "top", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "proceso", label: "Proceso" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export function SectionRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Progreso de la página"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col items-center gap-4 rounded-full border border-navy/5 bg-white/85 px-2.5 py-4 shadow-[0_10px_35px_-15px_rgba(0,4,117,0.3)] backdrop-blur-md">
        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 top-1 h-[calc(100%-8px)] w-px -translate-x-1/2 bg-navy/10" />
          <div
            className="absolute left-1/2 top-1 w-px -translate-x-1/2 bg-signal transition-all duration-500 ease-out"
            style={{
              height: `calc(${(active / (sections.length - 1)) * 100}% - ${
                active === sections.length - 1 ? 8 : 0
              }px)`,
            }}
          />

          <ul className="relative flex flex-col gap-6">
            {sections.map((section, i) => (
              <li key={section.id} className="group relative flex items-center">
                <a
                  href={`#${section.id}`}
                  aria-label={section.label}
                  aria-current={i === active ? "true" : undefined}
                  className={cn(
                    "relative z-10 flex h-3 w-3 items-center justify-center rounded-full border-2 bg-white transition-all duration-300",
                    i <= active
                      ? "border-signal bg-signal"
                      : "border-navy/20 hover:border-signal/50"
                  )}
                >
                  {i === active && (
                    <span className="absolute inline-flex h-full w-full animate-signal-ping rounded-full bg-signal" />
                  )}
                </a>
                <span className="pointer-events-none absolute left-7 whitespace-nowrap rounded-full bg-navy px-2.5 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                  {section.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}