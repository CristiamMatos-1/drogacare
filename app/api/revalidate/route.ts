import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { path } = body as { path?: string };

    if (!path) {
      return NextResponse.json({ error: "Caminho obrigatório" }, { status: 400 });
    }

    revalidatePath(path);

    return NextResponse.json({ ok: true, message: `Revalidado: ${path}` });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao revalidar rota" }, { status: 500 });
  }
}
