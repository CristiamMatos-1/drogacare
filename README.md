# Drogacare

Projeto inicial do site institucional e painel administrativo para uma farmácia de manipulação.

## Stack
- Next.js 14 + TypeScript
- Tailwind CSS
- shadcn/ui (estrutura preparada)
- Prisma + MySQL
- NextAuth.js (Auth.js)
- Lucide icons

## Primeira execução

1. Instale as dependências:
   npm install

2. Configure o MySQL local e o arquivo `.env` com a variável `DATABASE_URL`.

3. Gere o cliente Prisma:
   npx prisma generate

4. Rode as migrations:
   npx prisma migrate dev --name init

5. Popule dados de exemplo:
   npm run prisma:seed

6. Inicie o app:
   npm run dev

## Estrutura inicial
- `app/` — app router do Next.js
- `components/` — componentes reutilizáveis
- `lib/` — utilitários, Prisma e helpers
- `prisma/` — schema e seed

## Observação importante
O branding visual foi montado seguindo um padrão premium de saúde e cuidado farmacêutico, com paleta e tipografia prontas para ser refinadas conforme o Manual da Marca oficial do cliente.
