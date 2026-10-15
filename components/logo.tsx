import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-lg font-black text-white shadow-soft">
        D
      </div>
      <div className="leading-none">
        <div className="font-display text-lg font-black tracking-[0.08em] text-brand-slate">
          {compact ? "DROGA" : "DROGACARE"}
        </div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-slate/55">
          Farmácia de manipulação
        </div>
      </div>
    </div>
  );
}
