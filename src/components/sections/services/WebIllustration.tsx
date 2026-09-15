export function WebIllustration() {
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
      <div className="relative w-40 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-1 border-b border-white/10 px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </div>
        <div className="space-y-1.5 p-2.5">
          <div className="h-2 w-3/5 rounded-full bg-signal/50" />
          <div className="h-1.5 w-full rounded-full bg-white/15" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
          <div className="mt-2 grid grid-cols-3 gap-1">
            <div className="h-5 rounded-md bg-white/10" />
            <div className="h-5 rounded-md bg-white/10" />
            <div className="h-5 rounded-md bg-signal/25" />
          </div>
        </div>
      </div>
    </div>
  );
}