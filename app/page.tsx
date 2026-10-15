import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Star, MessageCircle, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/logo";

const stats = [
  { label: "Pacientes atendidos", value: "12k+" },
  { label: "Tempo médio de entrega", value: "48h" },
  { label: "Satisfação", value: "4,9/5" },
];

const formulas = ["Hormônios", "Hidroxiureia", "Terapia hormonal", "Dermocosméticos", "Terapia do cabelo", "Suplementação individualizada"];

const faqs = [
  { q: "Quais tipos de prescrição atendemos?", a: "Atendemos prescrições médicas com orientações farmacêuticas para personalização, ajuste de dose e acompanhamento." },
  { q: "Posso solicitar atendimento sem receita?", a: "Para alguns produtos é necessário acompanhamento profissional e, em alguns casos, uma prescrição médica. Nossa equipe te orienta." },
  { q: "Qual o prazo de entrega?", a: "O prazo varia conforme a formulação e a unidade escolhida, mas nossa média de produção e envio é de 48 horas úteis." },
  { q: "Vocês entregam em todo o Brasil?", a: "Sim. Trabalhamos com entrega nacional e também com retirada em unidades próprias." },
  { q: "O que garante a qualidade da fórmula?", a: "Todos os processos seguem protocolos farmacêuticos, rastreabilidade e controle de qualidade para segurança e eficácia." },
];

const testimonials = [
  { name: "Ana M.", text: "Recebi uma fórmula personalizada com atenção incrível. O serviço foi muito seguro, rápido e claro." },
  { name: "Lucas F.", text: "Atendimento acolhedor e profissional. Consegui orientação detalhada e uma experiência muito simples." },
  { name: "Patrícia S.", text: "A equipe me ajudou desde a prescrição até a entrega. Recomendo bastante." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-slate">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-brand-slate/80 md:flex">
            <Link href="#sobre">Sobre</Link>
            <Link href="#formula">Fórmulas</Link>
            <Link href="#como-funciona">Como funciona</Link>
            <Link href="#avaliacoes">Avaliações</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/admin" className="hidden rounded-full border border-brand-blue/20 px-4 py-2 text-sm font-semibold text-brand-blue md:inline-flex">
              Admin
            </Link>
            <Link href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20da%20landing%20page%20e%20quero%20um%20atendimento%20personalizado." className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-greenDeep">
              Solicitar orçamento
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(28,106,174,0.18),_rgba(255,255,255,0))]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-mint px-3 py-2 text-sm font-medium text-brand-greenDeep">
              <ShieldCheck size={16} />
              Farmácia de manipulação com qualidade e segurança
            </div>
            <h1 className="max-w-xl font-display text-4xl font-extrabold tracking-tight text-brand-slate md:text-5xl">
              Fórmulas personalizadas para uma vida mais saudável.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-brand-slate/75">
              Com orientação farmacêutica, produção segura e atendimento acolhedor, a Drogacare cria soluções medicinais sob medida para cada necessidade.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20da%20landing%20page%20e%20quero%20atendimento%20presencial%2Fonline." className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-[#145b99]">
                Falar com a equipe
                <ArrowRight size={18} />
              </Link>
              <Link href="#sobre" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-base font-semibold text-brand-slate transition hover:border-brand-blue/30 hover:text-brand-blue">
                Conhecer mais
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-soft">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-slate">Avaliação média: 4,9 de 5</p>
                <p className="text-xs text-brand-slate/65">+3.200 atendimentos com aprovação dos pacientes</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
              <div className="overflow-hidden rounded-[1.5rem] bg-brand-sand">
                <Image
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                  alt="Farmacêutica atendendo cliente"
                  width={900}
                  height={1100}
                  className="h-[560px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-slate-200">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mint text-brand-greenDeep">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-brand-slate/50">Qualidade</p>
                    <p className="text-sm font-semibold text-brand-slate">Controle farmacêutico rigoroso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-brand-slate text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-4 text-center md:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div key={item.label} className="py-3">
              <div className="text-2xl font-black font-display">{item.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8" id="sobre">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Diferenciais</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Especialistas em saúde com atenção humana.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Segurança e qualidade", text: "Processos rigorosos, controle farmacêutico e rastreabilidade completa." },
            { icon: MapPin, title: "Atendimento próximo", text: "Unidades estratégicas para facilitar sua rotina e acesso ao cuidado." },
            { icon: MessageCircle, title: "Suporte contínuo", text: "Acompanhamento com orientação na escolha da melhor solução para você." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint text-brand-greenDeep">
                <item.icon size={22} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-brand-slate">{item.title}</h3>
              <p className="text-brand-slate/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20" id="formula">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Fórmulas e serviços</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Manipulação sob medida para cada etapa do cuidado.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {formulas.map((formula) => (
              <div key={formula} className="rounded-2xl border border-slate-200 bg-brand-cream p-5 text-center font-medium text-brand-slate/80 shadow-soft">
                {formula}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8" id="como-funciona">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Como funciona</p>
          <h2 className="font-display text-3xl font-bold md:text-4xl">A experiência simples, segura e personalizada.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { step: "01", title: "Solicite a fórmula", text: "Entre em contato e envie sua prescrição ou solicite orientação." },
            { step: "02", title: "Avaliação profissional", text: "Nossa equipe analisa sua necessidade e valida o melhor caminho." },
            { step: "03", title: "Produção sob medida", text: "Preparamos a formulação com qualidade, segurança e cuidado farmacêutico." },
            { step: "04", title: "Entrega e suporte", text: "Você recebe o produto com acompanhamento após a entrega." },
          ].map((item) => (
            <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">{item.step}</div>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-brand-slate/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-mint py-20" id="avaliacoes">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-greenDeep">Avaliações</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Paciente em primeiro lugar, resultado em destaque.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-brand-green/10 bg-white p-6 shadow-soft">
                <div className="mb-4 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mb-4 text-brand-slate/75">“{item.text}”</p>
                <div className="font-semibold text-brand-slate">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8" id="faq">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">FAQ</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Perguntas frequentes para te ajudar a decidir.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-brand-slate">{item.q}</h3>
                <p className="mt-2 text-brand-slate/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-brand-slate/70">
              Farmácia de manipulação especializada em soluções personalizadas com atenção humanizada e qualidade comprovada.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Links úteis</h3>
            <ul className="space-y-2 text-brand-slate/70">
              <li><Link href="#sobre">Sobre</Link></li>
              <li><Link href="#formula">Fórmulas</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contato</h3>
            <ul className="space-y-2 text-brand-slate/70">
              <li>CRF: 0000000</li>
              <li>CNPJ: 00.000.000/0001-00</li>
              <li>(11) 99999-9999</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
