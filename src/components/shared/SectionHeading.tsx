import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-4 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl",
          tone === "light" ? "text-ink" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-steel" : "text-white/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
