export default function SecurityPage() {
  return (
    <div className="panel">
      <h2 className="font-display text-3xl font-bold text-brand-slate">Segurança</h2>
      <p className="mt-3 text-brand-slate/70">
        Gestão de acesso, permissões por role, troca de senha, e proteção das rotas privadas do painel.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          "Admin: acesso total",
          "Editor: conteúdo público",
          "Marketing: dashboard e UTMs",
          "Atendente: inbox e WhatsApp",
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-brand-cream p-5 text-sm text-brand-slate/75">{item}</div>
        ))}
      </div>
    </div>
  );
}
