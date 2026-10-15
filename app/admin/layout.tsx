import Link from "next/link";
import { ArrowLeft, BarChart3, Files, ImageIcon, LayoutDashboard, Lock, MessageSquareMore, Palette, UserCog } from "lucide-react";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Seções", href: "/admin/sections", icon: Files },
  { label: "Mídia", href: "/admin/media", icon: ImageIcon },
  { label: "Aparência", href: "/admin/appearance", icon: Palette },
  { label: "SEO", href: "/admin/seo", icon: BarChart3 },
  { label: "Usuários", href: "/admin/users", icon: UserCog },
  { label: "Inbox", href: "/admin/inbox", icon: MessageSquareMore },
  { label: "Segurança", href: "/admin/security", icon: Lock },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-slate">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white p-5 lg:flex lg:flex-col">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            <span className="text-sm font-medium text-brand-slate/70">Voltar ao site</span>
          </Link>
          <div className="mt-5">
            <Logo compact />
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-brand-slate/75 transition hover:bg-brand-mint hover:text-brand-greenDeep"
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">Painel administrativo</p>
              <h1 className="mt-1 font-display text-2xl font-bold">Drogacare Admin</h1>
            </div>
            <Link href="/api/auth/signout" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-brand-slate transition hover:border-brand-blue hover:text-brand-blue">
              Sair
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
