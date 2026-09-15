import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-xs font-semibold tracking-[0.18em] uppercase",
        tone === "light" ? "text-navy" : "text-white/80",
        className
      )}
    >
      {children}
    </span>
  );
}