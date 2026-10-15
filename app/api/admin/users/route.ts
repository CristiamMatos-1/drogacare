import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;
    if (!name || !email || !password) return NextResponse.json({ error: "Campos obrigatórios" }, { status: 400 });

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ error: "Usuário já existe" }, { status: 400 });

    const passwordHash = await hash(password, 10);

    await prisma.user.create({ data: { name, email, passwordHash, role } });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
