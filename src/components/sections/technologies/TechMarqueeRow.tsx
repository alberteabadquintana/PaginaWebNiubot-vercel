import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type TechItem = { name: string; level?: "core" | "secondary" };

export function TechMarqueeRow({
  category,
  icon: Icon,
  description,
  items,
  direction = "left",
}: {
  category: string;
  icon: LucideIcon;
  description?: string;
  items: TechItem[] | string[];
  direction?: "left" | "right";
}) {
  // Normalize items to always be TechItem
  const normalized: TechItem[] = items.map((item) =>
    typeof item === "string" ? { name: item } : item
  );

  const doubled = [...normalized, ...normalized];

  return (
    <div className="group flex items-center gap-5 rounded-2xl border border-navy/5 bg-paper-dim/60 py-4 pl-5 pr-0 sm:gap-6">
      <div className="flex w-36 shrink-0 flex-col gap-0.5 sm:w-44">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-signal-soft text-navy">
            <Icon className="h-4 w-4" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-navy/80">
            {category}
          </span>
        </div>
        {description && (
          <p className="mt-1.5 text-[10px] leading-snug text-steel hidden sm:block">
            {description}
          </p>
        )}
      </div>

      <div
        className="relative flex-1 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className={cn(
            "flex w-max gap-3",
            direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
            "group-hover:[animation-play-state:paused]"
          )}
        >
          {doubled.map((item, i) => (
            <span
              key={`${item.name}-${i}`}
              className={cn(
                "shrink-0 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-[0_2px_10px_-4px_rgba(0,4,117,0.08)]",
                item.level === "core"
                  ? "border-navy/15 bg-white text-ink/90"
                  : "border-navy/8 bg-paper-dim/70 text-ink/60"
              )}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}