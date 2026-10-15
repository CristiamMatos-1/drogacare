import Link from "next/link";

const sectionCatalog = [
  { id: "hero", title: "Hero", status: "Publicado" },
  { id: "diferenciais", title: "Diferenciais", status: "Publicado" },
  { id: "formula", title: "Fórmulas e Serviços", status: "Rascunho" },
  { id: "faq", title: "FAQ", status: "Publicado" },
];

export default function SectionsPage() {
  return (
    <div className="space-y-6">
      <div className="panel">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">CMS</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-slate">Editor de Seções</h2>
          </div>
          <Link href="/admin/sections/new" className="button-primary">Nova seção</Link>
        </div>
      </div>

      <div className="grid gap-4">
        {sectionCatalog.map((section) => (
          <div key={section.id} className="panel flex items-center justify-between gap-4">
            <div>
              <div className="text-xl font-bold text-brand-slate">{section.title}</div>
              <div className="mt-1 text-sm text-brand-slate/60">{section.id}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-greenDeep">
                {section.status}
              </span>
              <button className="button-secondary">Editar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
