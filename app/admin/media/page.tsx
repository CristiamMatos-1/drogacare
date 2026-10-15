import { prisma } from "@/lib/prisma";
import { MediaUploader } from "@/components/media-uploader";

export default async function MediaPage() {
  const media = await prisma.mediaAsset.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="space-y-6">
      <div className="panel">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Mídia</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-brand-slate">Biblioteca de Mídia</h2>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <MediaUploader onUploaded={() => window.location.reload()} />
          </div>

          <div>
            <div className="space-y-3">
              {media.map((m) => (
                <div key={m.id} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                  <div className="h-14 w-14 overflow-hidden rounded-md bg-slate-50">
                    {m.type.startsWith("image") ? <img src={m.url} alt={m.name} className="h-full w-full object-cover" /> : <div className="p-3 text-sm">{m.type}</div>}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-slate">{m.name}</div>
                    <div className="text-xs text-brand-slate/60">{m.type} • {m.size ?? "-"} bytes</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
