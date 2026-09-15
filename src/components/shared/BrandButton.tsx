import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandButtonProps = {
  variant?: "primary" | "ghost" | "ghost-dark";
  className?: string;
  children: React.ReactNode;
} & (
  | ({ as?: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

export function BrandButton({
  variant = "primary",
  className,
  children,
  as = "a",
  ...props
}: BrandButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 active:translate-y-px";

  const variants = {
    primary:
      "bg-navy text-white shadow-[0_10px_30px_-12px_rgba(0,4,117,0.55)] hover:bg-navy-soft hover:shadow-[0_14px_34px_-10px_rgba(0,4,117,0.6)]",
    ghost:
      "border border-navy/15 bg-white text-ink hover:border-navy/30 hover:bg-paper-dim",
    "ghost-dark":
      "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/35",
  };

  const classes = cn(base, variants[variant], className);

  if (as === "button") {
    return (
      <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }

  const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
  const { href, ...rest } = anchorProps;
  const isInternal = typeof href === "string" && href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}