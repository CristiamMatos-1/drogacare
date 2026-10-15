"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params?.get("token") ?? "";
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!token) setStatus("Token ausente");
  }, [token]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus(null);
    const res = await fetch("/api/auth/reset-password", { method: "POST", body: JSON.stringify({ token, password }), headers: { "Content-Type": "application/json" } });
    const data = await res.json();
    if (data.ok) setStatus("Senha alterada com sucesso. Faça login.");
    else setStatus(data.error ?? "Erro");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(28,106,174,0.18),_rgba(255,255,255,0))] px-4 py-10">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Redefinir senha</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-brand-slate">Nova senha</h1>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-brand-slate">Nova senha</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-brand-cream px-4 py-3 outline-none ring-0 transition focus:border-brand-blue" />
          </div>

          {status ? <div className="rounded-xl border border-slate-200 bg-brand-cream px-3 py-2 text-sm text-brand-slate">{status}</div> : null}

          <button type="submit" className="w-full rounded-full bg-brand-blue px-4 py-3 font-semibold text-white transition hover:bg-[#145b99]">
            Alterar senha
          </button>
        </form>
      </div>
    </main>
  );
}
