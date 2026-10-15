"use client";

import { useState } from "react";

export function MediaUploader({ onUploaded }: { onUploaded?: () => void }) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);

    const form = new FormData();
    form.append("file", file);
    form.append("folder", "drogacare");

    const res = await fetch("/api/upload", { method: "POST", body: form });
    const data = await res.json();
    setLoading(false);

    if (data?.ok && data.result) {
      const url = data.result.secure_url || data.result.url;
      // Save metadata to Media API
      await fetch("/api/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: file.name, url, type: "image", size: file.size }),
      });

      setPreview(url);
      onUploaded?.();
    } else {
      alert("Erro no upload");
    }
  }

  return (
    <div className="space-y-3">
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-slate">
        <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
        {loading ? "Enviando..." : "Enviar imagem"}
      </label>

      {preview ? (
        <div className="mt-3 rounded-xl border border-slate-100 p-3">
          <img src={preview} alt="preview" className="max-h-40 w-auto rounded-md object-contain" />
        </div>
      ) : null}
    </div>
  );
}
