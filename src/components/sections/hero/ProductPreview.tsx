import { Bell, Lock, Moon, Plus, Search, Send } from "lucide-react";

const bars = [8, 16, 11, 22, 14, 26, 12, 19, 9, 24, 15, 20, 10, 17, 13];

function GaugeArc({ value, label, sublabel }: { value: number; label: string; sublabel: string }) {
  const radius = 42;
  const circumference = Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 100 55" className="w-28">
        <path
          d="M 8 50 A 42 42 0 0 1 92 50"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 8 50 A 42 42 0 0 1 92 50"
          fill="none"
          stroke="#00C2A8"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <p className="-mt-3 font-display text-xl font-semibold text-white">{label}</p>
      <p className="text-[11px] text-white/50">{sublabel}</p>
    </div>
  );
}

export function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-signal/10 blur-3xl" aria-hidden />
      <div className="absolute -inset-px -z-10 rounded-[2rem] bg-gradient-to-b from-signal/40 via-white/10 to-transparent" aria-hidden />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-navy-soft to-navy-deep shadow-[0_60px_120px_-40px_rgba(0,0,0,0.75)]">
        {/* browser chrome */}
        <div className="flex items-center gap-4 border-b border-white/10 px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          </div>
          <div className="hidden flex-1 items-center justify-center sm:flex">
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-xs text-white/45">
              <Lock className="h-3 w-3" />
              panel.niubot.pe
            </span>
          </div>
          <div className="ml-auto flex items-center gap-3 text-white/40">
            <Search className="h-4 w-4" />
            <Plus className="h-4 w-4" />
            <Moon className="h-4 w-4" />
            <Bell className="h-4 w-4" />
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-signal to-navy" />
          </div>
        </div>

        {/* sub nav */}
        <div className="flex items-center justify-between px-5 pt-5 sm:px-8">
          <div className="flex gap-2">
            <span className="rounded-full bg-navy px-3.5 py-1.5 text-xs font-semibold text-white">
              Resumen
            </span>
            <span className="rounded-full px-3.5 py-1.5 text-xs font-medium text-white/45">
              Automatización
            </span>
            <span className="hidden rounded-full px-3.5 py-1.5 text-xs font-medium text-white/45 sm:inline-block">
              Conversaciones
            </span>
          </div>
          <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/35 sm:inline-block">
            Vista conceptual
          </span>
        </div>

        {/* content */}
        <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
          <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
            Bienvenido a tu panel niubot
          </h3>
          <p className="mt-1 text-sm text-white/50">
            Así se ve la IA trabajando todos los días para tu negocio.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.85fr_0.85fr]">
            {/* AI assistant card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold text-white">Asistente IA</p>
              <div className="mt-5 flex h-14 items-end justify-center gap-[3px]">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-signal/70"
                    style={{ height: `${h * 2}px`, opacity: 0.5 + (i % 3) * 0.15 }}
                  />
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
                <span className="flex-1 truncate text-xs text-white/40">
                  Analiza las ventas del último mes…
                </span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal text-navy-deep">
                  <Send className="h-3 w-3" />
                </span>
              </div>
            </div>

            {/* gauge card */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <GaugeArc value={82} label="82%" sublabel="Automatización activa" />
            </div>

            {/* stat card */}
            <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-medium text-white/45">Tiempo de respuesta</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white">2.4s</p>
              <p className="mt-1 text-[11px] text-signal">↓ promedio con IA activa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}