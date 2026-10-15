import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth";

export default async function UsersPage() {
  const session = await getAuthSession();
  if (!session) return <div>Não autorizado</div>;

  const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-brand-slate">Usuários</h2>
        <Link href="/admin/users/create" className="rounded-full bg-brand-blue px-4 py-2 text-white">Novo usuário</Link>
      </div>

      <div className="grid gap-3">
        {users.map((u) => (
          <div key={u.id} className="flex items-center justify-between rounded-xl border border-slate-100 p-3">
            <div>
              <div className="font-semibold text-brand-slate">{u.name}</div>
              <div className="text-sm text-brand-slate/70">{u.email} • {u.role}</div>
            </div>
            <div className="text-sm text-brand-slate/60">{new Date(u.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
