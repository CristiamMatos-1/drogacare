export default function MediaPage() {
  return (
    <div className="panel">
      <h2 className="font-display text-3xl font-bold text-brand-slate">Mídia</h2>
      <p className="mt-3 text-brand-slate/70">
        Biblioteca centralizada para logo, favicon, imagens de produtos, galeria, equipe e ativos da marca.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-3xl border border-dashed border-slate-200 bg-brand-cream p-5 text-center text-sm text-brand-slate/60">
            Upload #{index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
