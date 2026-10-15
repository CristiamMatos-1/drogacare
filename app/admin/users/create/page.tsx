"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EDITOR");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/admin/users", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, password, role }) });
    const data = await res.json();
    setLoading(false);
    if (data.ok) router.push("/admin/users");
    else alert(data.error || "Erro");
  }

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="mb-4 font-display text-2xl font-bold text-brand-slate">Criar usuário</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" className="w-full rounded-xl border border-slate-200 p-3" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className="w-full rounded-xl border border-slate-200 p-3" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="password" className="w-full rounded-xl border border-slate-200 p-3" />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-xl border border-slate-200 p-3">
          <option value="ADMIN">Administrador</option>
          <option value="EDITOR">Editor</option>
          <option value="MARKETING">Marketing</option>
          <option value="ATTENDANT">Atendente</option>
        </select>
        <div>
          <button type="submit" className="rounded-full bg-brand-blue px-4 py-2 text-white">{loading ? "Criando..." : "Criar"}</button>
        </div>
      </form>
    </div>
  );
}
