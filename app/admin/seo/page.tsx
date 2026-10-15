export default function SeoPage() {
  return (
    <div className="panel">
      <h2 className="font-display text-3xl font-bold text-brand-slate">SEO</h2>
      <p className="mt-3 text-brand-slate/70">
        Metadados globais e por página, Open Graph, schema LocalBusiness, FAQPage e integração com GA4/GTM/Meta Pixel.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-brand-cream p-5">
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">SEO global</div>
          <div className="space-y-2 text-sm text-brand-slate/70">
            <p>Title: Drogacare | Farmácia de Manipulação</p>
            <p>Description: Fórmulas personalizadas...</p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-brand-cream p-5">
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">Integrações</div>
          <div className="space-y-2 text-sm text-brand-slate/70">
            <p>GA4: configurável</p>
            <p>GTM: configurável</p>
            <p>Meta Pixel: configurável</p>
          </div>
        </div>
      </div>
    </div>
  );
}
