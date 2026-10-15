import Link from "next/link";
import { LayoutDashboard, Users, FileText, Palette, Settings, MessageSquareMore } from "lucide-react";

const metrics = [
  { label: "Cliques em CTA", value: "1.284", tone: "bg-brand-blue" },
  { label: "WhatsApp por unidade", value: "482", tone: "bg-brand-green" },
  { label: "Visitas totais", value: "18.420", tone: "bg-brand-sand" },
  { label: "UTMs capturadas", value: "96", tone: "bg-brand-gold" },
];

const cards = [
  { title: "Dashboard", icon: LayoutDashboard, text: "Visão geral de performance, origens e conversões." },
  { title: "Seções", icon: FileText, text: "Editor visual para conteúdo do site público e previews responsivos." },
  { title: "Mídia", icon: Palette, text: "Biblioteca centralizada para imagens, logo, favicon e ativos da marca." },
  { title: "Usuários", icon: Users, text: "Gestão de contas, permissões por role e bloqueio de acesso." },
  { title: "Configurações", icon: Settings, text: "SEO, integrações, LGPD, WhatsApp e dados da farmácia." },
  { title: "Inbox", icon: MessageSquareMore, text: "Receitas, orçamentos e comunicação para atendimento direto." },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-brand-cream p-6 text-brand-slate md:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Admin</p>
            <h1 className="mt-2 font-display text-3xl font-bold">Painel Drogacare</h1>
          </div>
          <Link href="/" className="inline-flex items-center rounded-full bg-brand-green px-4 py-2.5 text-sm font-semibold text-white">Ver site público</Link>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className={`mb-4 h-2.5 w-16 rounded-full ${metric.tone}`} />
              <div className="text-3xl font-black font-display text-brand-slate">{metric.value}</div>
              <div className="mt-2 text-sm text-brand-slate/70">{metric.label}</div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint text-brand-greenDeep">
                <card.icon size={22} />
              </div>
              <h2 className="text-xl font-bold text-brand-slate">{card.title}</h2>
              <p className="mt-3 text-brand-slate/70">{card.text}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
