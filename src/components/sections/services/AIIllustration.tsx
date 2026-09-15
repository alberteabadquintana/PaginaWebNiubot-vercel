import { Bot } from "lucide-react";

export function AIIllustration() {
  return (
    <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-xl bg-navy-deep">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute h-20 w-20 rounded-full bg-signal/20 blur-2xl" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-signal to-navy shadow-[0_0_0_6px_rgba(0,194,168,0.12)]">
        <Bot className="h-6 w-6 text-white" />
      </div>
      <div className="absolute bottom-4 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
        <span className="text-[10px] font-medium text-white/60">En línea</span>
      </div>
      <div className="absolute left-6 top-5 h-5 w-9 rounded-full rounded-bl-none bg-white/[0.08]" />
    </div>
  );
}