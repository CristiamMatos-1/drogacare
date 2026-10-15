"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("admin@drogacare.com");
  const [password, setPassword] = useState("admin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("E-mail ou senha inválidos.");
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Acesso administrativo</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-brand-slate">Entrar no painel</h1>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-brand-slate">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-brand-cream px-4 py-3 outline-none ring-0 transition focus:border-brand-blue"
          placeholder="admin@drogacare.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-brand-slate">Senha</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-brand-cream px-4 py-3 outline-none ring-0 transition focus:border-brand-blue"
          placeholder="••••••••"
        />
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-brand-blue px-4 py-3 font-semibold text-white transition hover:bg-[#145b99] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>

      <p className="text-center text-sm text-brand-slate/60">
        Usuário padrão: <span className="font-semibold">admin@drogacare.com</span> / <span className="font-semibold">admin</span>
      </p>
    </form>
  );
}
