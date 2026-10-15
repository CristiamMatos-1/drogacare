import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash("admin", 10);

  await prisma.user.upsert({
    where: { email: "admin@drogacare.com" },
    update: {},
    create: {
      name: "Administrador",
      email: "admin@drogacare.com",
      passwordHash: adminPassword,
      role: "ADMIN",
      mustChangePwd: false,
      active: true,
    },
  });

  await prisma.unit.createMany({
    data: [
      {
        name: "Unidade Centro",
        address: "Rua das Flores, 120, Centro, São Paulo/SP",
        phone: "(11) 3333-2121",
        openingHours: "Seg-Sex: 08:00 às 18:00 / Sáb: 08:00 às 13:00",
        mapEmbedUrl: "https://maps.google.com/?q=Rua+das+Flores+120+São+Paulo",
        whatsapp: "5511999999999",
        active: true,
      },
      {
        name: "Unidade Vila Mariana",
        address: "Avenida Afonso Pena, 520, Vila Mariana, São Paulo/SP",
        phone: "(11) 3456-2000",
        openingHours: "Seg-Sex: 09:00 às 19:00 / Sáb: 09:00 às 15:00",
        mapEmbedUrl: "https://maps.google.com/?q=Avenida+Afonso+Pena+520",
        whatsapp: "5511888888888",
        active: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.pharmacist.createMany({
    data: [
      {
        name: "Dr. Marcelo Costa",
        specialty: "Farmacêutico Responsável",
        crf: "SP-123456",
        bio: "Especialista em manipulação e protocolos de qualidade farmacêutica.",
        photoUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Dra. Fernanda Reis",
        specialty: "Terapia personalizada",
        crf: "SP-654321",
        bio: "Atua em protocolos de terapia hormonal e apoio clínico para prescrição.",
        photoUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Dr. Pedro Lima",
        specialty: "Dermocosméticos e saúde estética",
        crf: "SP-111222",
        bio: "Acompanha protocolos de dermatologia e prescrição individualizada.",
        photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      },
    ],
    skipDuplicates: true,
  });

  await prisma.step.createMany({
    data: [
      {
        title: "Solicite a prescrição",
        description: "Você nos envia a receita ou solicita orientação inicial.",
        stepNumber: 1,
        active: true,
      },
      {
        title: "Avaliação técnica",
        description: "Nossa equipe valida a prescrição e indica a melhor formulação.",
        stepNumber: 2,
        active: true,
      },
      {
        title: "Produção sob medida",
        description: "Preparação em laboratório com segurança e controle farmacêutico.",
        stepNumber: 3,
        active: true,
      },
      {
        title: "Entrega e acompanhamento",
        description: "Receba em casa ou em unidade, com suporte pós-entrega.",
        stepNumber: 4,
        active: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.formula.createMany({
    data: [
      { title: "Terapia hormonal", description: "Fórmulas personalizadas sob prescrição médica.", category: "Endócrino" },
      { title: "Hidroxiureia", description: "Uso terapêutico prescrito por especialistas.", category: "Oncologia" },
      { title: "Nutrição clínica", description: "Suplementação individualizada para metabólicos.", category: "Nutrição" },
      { title: "Dermocosméticos", description: "Preparações específicas para pele e cabelo.", category: "Dermatologia" },
      { title: "Infantojuvenil", description: "Fórmulas ajustadas para a rotina de crianças e adolescentes.", category: "Pediatria" },
      { title: "Gestação e cuidados específicos", description: "Atendimento com atenção profissional e individualizada.", category: "Saúde feminina" },
    ],
    skipDuplicates: true,
  });

  await prisma.review.createMany({
    data: [
      { author: "Ana M.", text: "Atendimento muito humano e fórmula excelente.", rating: 5 },
      { author: "Carlos T.", text: "Entregue rápido e com orientação clara.", rating: 5 },
      { author: "Fernanda L.", text: "Ótima qualidade e segurança no processo.", rating: 5 },
      { author: "Renato P.", text: "Excelente equipe e boa comunicação.", rating: 4 },
    ],
    skipDuplicates: true,
  });

  await prisma.faqItem.createMany({
    data: [
      { question: "Quais receitas vocês atendem?", answer: "Atendemos prescrição médica, incluindo terapias individualizadas para diversas necessidades clínicas." },
      { question: "A formulação é segura?", answer: "Sim. Nossas formulas passam por processo farmacêutico rigoroso com controle de qualidade." },
      { question: "Posso solicitar atendimento por WhatsApp?", answer: "Sim. Basta entrar em contato para receber orientação do time de atendimento." },
      { question: "Qual o prazo para entrega?", answer: "A média costuma ficar em até 48 horas úteis, variando conforme a fórmula." },
      { question: "Vocês entregam em outras cidades?", answer: "Sim, atendemos presencialmente e também por entrega em diferentes regiões." },
    ],
    skipDuplicates: true,
  });

  await prisma.setting.upsert({
    where: { key: "brand.name" },
    update: { value: "Drogacare" },
    create: { key: "brand.name", value: "Drogacare" },
  });

  await prisma.setting.upsert({
    where: { key: "brand.primaryColor" },
    update: { value: "#1C6AAE" },
    create: { key: "brand.primaryColor", value: "#1C6AAE" },
  });

  await prisma.setting.upsert({
    where: { key: "brand.secondaryColor" },
    update: { value: "#1E9D72" },
    create: { key: "brand.secondaryColor", value: "#1E9D72" },
  });

  await prisma.setting.upsert({
    where: { key: "brand.whatsappNumber" },
    update: { value: "5511999999999" },
    create: { key: "brand.whatsappNumber", value: "5511999999999" },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
