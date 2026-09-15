"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { BrandButton } from "@/components/shared/BrandButton";
import { navLinks, socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  InstagramIcon,
  FacebookIcon,
  TiktokIcon,
} from "@/components/shared/SocialIcons";

export function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const socialIcons: Record<string, React.ElementType> = {
    Instagram: InstagramIcon,
    Facebook: FacebookIcon,
    TikTok: TiktokIcon,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-navy/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-navy"
                    : "text-ink/75 hover:text-navy"
                )}
              >
                {link.label}

                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-navy" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop social links */}
        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.name] ?? InstagramIcon;
            return (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-ink/70 transition-colors hover:border-navy/30 hover:text-navy"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-ink lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </Container>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-navy/10 bg-paper px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-navy/5 text-navy font-semibold"
                      : "text-ink/80 hover:bg-paper-dim hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <BrandButton
            href="/contacto"
            variant="primary"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Contáctanos
          </BrandButton>
        </div>
      )}
    </header>
  );
}