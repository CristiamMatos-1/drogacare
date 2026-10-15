import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { token, password } = await request.json();
    if (!token || !password) return NextResponse.json({ error: "Token e nova senha são obrigatórios" }, { status: 400 });

    const record = await prisma.passwordResetToken.findUnique({ where: { token } });
    if (!record) return NextResponse.json({ error: "Token inválido" }, { status: 400 });
    if (record.used) return NextResponse.json({ error: "Token já utilizado" }, { status: 400 });
    if (record.expiresAt < new Date()) return NextResponse.json({ error: "Token expirado" }, { status: 400 });

    const passwordHash = await hash(password, 10);

    await prisma.user.update({ where: { id: record.userId }, data: { passwordHash, mustChangePwd: false } });

    await prisma.passwordResetToken.update({ where: { id: record.id }, data: { used: true } });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
