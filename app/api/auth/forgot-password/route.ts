import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { sendEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email as string | undefined;
    if (!email) return NextResponse.json({ error: "E-mail é obrigatório" }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Do not reveal whether the email exists
      return NextResponse.json({ ok: true });
    }

    const token = crypto.randomBytes(24).toString("hex");
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

    await prisma.passwordResetToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt,
      },
    });

    const resetUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/reset-password?token=${token}`;

    const html = `<p>Olá ${user.name},</p>
      <p>Você solicitou a recuperação de senha. Clique no link abaixo para redefinir sua senha (válido por 1 hora):</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>Se você não solicitou, ignore este e-mail.</p>`;

    await sendEmail(user.email, "Redefinir senha - Drogacare", html);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
