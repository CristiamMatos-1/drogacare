export default function MediaPage() {
  const items = [
    { name: "Logo principal", type: "image" },
    { name: "Favicon", type: "icon" },
    { name: "Hero", type: "image" },
    { name: "Equipe", type: "gallery" },
    { name: "Unidades", type: "gallery" },
    { name: "Produtos", type: "image" },
  ];

  return (
    <div className="panel">
      <h2 className="font-display text-3xl font-bold text-brand-slate">Mídia</h2>
      <p className="mt-3 text-brand-slate/70">
        Biblioteca centralizada para logo, favicon, imagens de produtos, galeria, equipe e ativos da marca.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.name} className="rounded-3xl border border-dashed border-slate-200 bg-brand-2253 p-5 text-center">
            <div className="text-lg font-bold text-brand-slate">{item.name}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-brand-slate/55">{item.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
