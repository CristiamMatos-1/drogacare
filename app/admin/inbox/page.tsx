export default function InboxPage() {
  return (
    <div className="panel">
      <h2 className="font-display text-3xl font-bold text-brand-slate">Inbox</h2>
      <p className="mt-3 text-brand-slate/70">
        Caixa de entrada de receitas, orçamentos e contatos com status em Kanban.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {[
          "Novo",
          "Em orçamento",
          "Aprovado",
          "Concluído",
        ].map((stage) => (
          <div key={stage} className="rounded-3xl border border-slate-200 bg-brand-cream p-5">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-blue">{stage}</div>
            <div className="rounded-2xl border border-dashed border-slate-200 p-3 text-sm text-brand-slate/60">Sem itens</div>
          </div>
        ))}
      </div>
    </div>
  );
}
