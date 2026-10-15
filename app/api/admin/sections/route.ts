import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const sections = await prisma.section.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json({ sections });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pageId, type, title, order, content, active = true } = body;

    if (!pageId || !type) {
      return NextResponse.json({ error: "pageId e type são obrigatórios" }, { status: 400 });
    }

    const section = await prisma.section.create({
      data: {
        pageId,
        type,
        title,
        order: Number(order ?? 0),
        content,
        active,
      },
    });

    return NextResponse.json({ ok: true, section });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao salvar seção" }, { status: 500 });
  }
}
