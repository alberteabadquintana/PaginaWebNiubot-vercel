"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";

const CONFETTI_COLORS = [
  "#00C2A8",
  "#000475",
  "#22D3EE",
  "#FBBF24",
  "#F472B6",
  "#34D399",
];

type Particle = {
  id: string;
  color: string;
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
  delay: number;
};

function makeConfetti(): Particle[] {
  const count = 70;
  return Array.from({ length: count }, (_, i) => ({
    id: `${Date.now()}-${i}`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    left: Math.random() * 100,
    top: Math.random() * 100,
    width: 6 + Math.random() * 6,
    height: 10 + Math.random() * 8,
    rotate: Math.random() * 360,
    delay: Math.random() * 0.25,
  }));
}

export function WhatsAppPeek() {
  const [confetti, setConfetti] = useState<Particle[]>([]);

  const whatsappHref = `https://wa.me/51${site.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero más información sobre sus servicios"
  )}`;

  function handleClick() {
    setConfetti(makeConfetti());
    window.setTimeout(() => {
      window.open(whatsappHref, "_blank", "noreferrer");
    }, 1300);
    window.setTimeout(() => setConfetti([]), 1700);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Escríbenos por WhatsApp al ${site.whatsappDisplay}`}
        className="group fixed bottom-10 right-[-36px] z-40 flex items-center transition-[right] duration-500 ease-out hover:right-0 sm:right-[-44px] sm:hover:right-0"
      >
        {/* Burbuja de texto */}
        <div className="mr-[-10px] hidden max-w-[180px] rounded-2xl rounded-br-sm border border-navy/10 bg-white px-4 py-3 text-left shadow-xl sm:block">
          <p className="font-display text-sm font-semibold text-navy">
            ¡Hola! Soy niubot 👋
          </p>
          <p className="mt-0.5 text-xs leading-snug text-steel">
            Contáctanos por WhatsApp
          </p>
          <p className="mt-1 text-xs font-semibold text-navy">
            {site.whatsappDisplay}
          </p>
        </div>

        {/* Mascota asomando */}
        <div className="animate-float-slow relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
          <Image
            src="/images/logo/niubot-icon-square.png"
            alt="niubot"
            fill
            sizes="112px"
            priority
            className="object-contain [filter:drop-shadow(0_0_14px_rgba(255,255,255,0.85))_drop-shadow(0_0_6px_rgba(255,255,255,0.9))_drop-shadow(0_10px_20px_rgba(0,4,117,0.35))]"
          />
        </div>
      </button>

      {/* Chispas de confeti en toda la pantalla */}
      {confetti.length > 0 && (
        <div className="pointer-events-none fixed inset-0 z-[200] overflow-hidden">
          {confetti.map((c) => (
            <span
              key={c.id}
              className="confetti-pop absolute"
              style={
                {
                  left: `${c.left}%`,
                  top: `${c.top}%`,
                  width: c.width,
                  height: c.height,
                  backgroundColor: c.color,
                  animationDelay: `${c.delay}s`,
                  "--rot": `${c.rotate}deg`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
    </>
  );
}