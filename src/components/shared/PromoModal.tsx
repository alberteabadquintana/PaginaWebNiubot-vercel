"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { site } from "@/data/site";

export function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  const whatsappHref = `https://wa.me/51${site.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero aprovechar la promoción de S/300 por mi primera página web"
  )}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar promoción"
          className="absolute -top-4 -right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-transform hover:scale-105 z-10"
        >
          <X className="h-5 w-5" />
        </button>
        
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="block overflow-hidden rounded-2xl shadow-2xl"
        >
          <Image
            src="/images/promo/promo-300-soles.jpeg"
            alt="Promoción: tu primera página web a solo S/300"
            width={1536}
            height={1024}
            className="h-auto w-full"
            priority
          />
        </a>
      </div>
    </div>
  );
}