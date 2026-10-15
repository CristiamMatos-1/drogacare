import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const media = await prisma.mediaAsset.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ media });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, url, type, size } = body;
    if (!name || !url || !type) return NextResponse.json({ error: "Campos obrigatórios" }, { status: 400 });

    const media = await prisma.mediaAsset.create({ data: { name, url, type, size: size ?? null } });
    return NextResponse.json({ ok: true, media });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao salvar media" }, { status: 500 });
  }
}
