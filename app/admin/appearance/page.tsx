export default function AppearancePage() {
  return (
    <div className="panel">
      <h2 className="font-display text-3xl font-bold text-brand-slate">Aparência</h2>
      <p className="mt-3 text-brand-slate/70">
        Personalização da identidade visual: logo, favicon, cores, tipografia e bordas.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-brand-cream p-5">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Paleta</div>
          <div className="flex gap-3">
            <span className="h-12 w-12 rounded-xl bg-brand-blue" />
            <span className="h-12 w-12 rounded-xl bg-brand-green" />
            <span className="h-12 w-12 rounded-xl bg-brand-sand" />
            <span className="h-12 w-12 rounded-xl bg-brand-slate" />
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-brand-cream p-5">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Fonte</div>
          <p className="font-display text-2xl font-bold text-brand-slate">Manrope / Inter</p>
        </div>
      </div>
    </div>
  );
}
