import {
  Award, Headphones, Infinity as InfinityIcon, ShieldCheck, GraduationCap,
  Scissors, Users, Sparkles, Heart, RefreshCw, Monitor, Palette,
  CheckCircle2, DollarSign, Zap, Lock, Star,
} from "lucide-react";

import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SocialSidebar } from "@/components/SocialSidebar";
import { CountdownBanner } from "@/components/CountdownBanner";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CourseGrid, courseImages } from "@/components/CourseGrid";
import { PricingPlans } from "@/components/PricingPlans";
import { OrderBump } from "@/components/OrderBump";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { SocialSection } from "@/components/SocialSection";
import { StickyMobileBar } from "@/components/StickyMobileBar";

const heroBg =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80&auto=format&fit=crop";

// Meta tags are in index.html

const galleryImgs = courseImages.slice(0, 12);

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <SocialSidebar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt="Cabeleireira profissional em salão"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.82_0.13_85_/_0.12),transparent_70%)]" />
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-gold/60 animate-float"
              style={{
                left: `${(i * 8.3) % 100}%`,
                top: `${(i * 17) % 90}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold text-gold">
            🎁 Oferta Especial — Disponível Apenas Nesta Página
          </div>
          <p className="animate-fade-up delay-100 mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Oferta Exclusiva
          </p>
          <h1 className="animate-fade-up delay-200 mt-3 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Aprenda os Cortes Mais Pedidos e <span className="text-gradient-gold">Dobre o Seu Faturamento</span>
          </h1>
          <p className="animate-fade-up delay-300 mt-4 font-display text-xl sm:text-2xl text-foreground/90">
            16 Cursos Completos de Corte Feminino — Transforme Sua Técnica e Lote Sua Agenda
          </p>
          <p className="animate-fade-up delay-400 mx-auto mt-5 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Aprenda Butterfly, Long Bob, Pixie, Degradê e mais 12 técnicas com passo a passo em vídeo. Assista no seu ritmo e comece a aplicar nas clientes.
          </p>

          <div className="animate-fade-up delay-500 mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { Icon: Zap, label: "Acesso Imediato" },
              { Icon: InfinityIcon, label: "Acesso Vitalício" },
              { Icon: Monitor, label: "100% Online" },
            ].map(({ Icon, label }) => (
              <div key={label} className="glass rounded-2xl p-5 text-left flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-charcoal">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 animate-fade-up delay-500">
            <CountdownBanner />
          </div>

          <a
            href="https://lastlink.com/p/C2F096D6F/checkout-payment/"
            target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-success px-8 py-5 text-base sm:text-lg font-bold text-success-foreground cta-glow animate-pulse-gold hover:scale-105 transition-transform"
          >
            🔥 QUERO DESTRAVAR MEU ACESSO AGORA 🔥
          </a>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            Oferta de lançamento limitada a partir de <span className="font-semibold text-foreground">R$ 29,90</span>
          </p>
          <p className="mt-2 text-sm text-gold font-semibold animate-pulse">
            ⚠️ Atenção: As vagas com esse desconto podem encerrar a qualquer momento!
          </p>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="border-y border-border bg-card/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold">
            Nossos números
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: 40000, suffix: "+", label: "Alunas inscritas" },
              { v: 98, suffix: "%", label: "Avaliações positivas" },
              { v: 16, suffix: "", label: "Cursos disponíveis" },
              { v: 24, suffix: "/7", label: "Acesso à plataforma" },
            ].map((s, i) => (
              <div key={i} className="glass-gold rounded-2xl p-6 text-center hover-lift">
                <p className="text-4xl sm:text-5xl font-bold text-gradient-gold">
                  <AnimatedCounter value={s.v} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Profissionais de todo o Brasil aprendendo e aplicando no salão
          </p>
        </div>
      </section>

      {/* 16 CURSOS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold text-gold">
              <Scissors className="h-3.5 w-3.5" /> Conteúdo Completo
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold">
              16 Cursos Completos <span className="text-gradient-gold">Online</span>
            </h2>
          </div>
          <CourseGrid />

          <div className="mt-10 mx-auto max-w-2xl rounded-3xl border border-gold/40 bg-gradient-card-premium p-8 text-center shadow-gold">
            <p className="text-sm text-muted-foreground">Valor total dos cursos avulsos</p>
            <p className="mt-1 font-mono-display text-2xl font-bold text-muted-foreground line-through">
              R$ 1.358,00
            </p>
            <p className="mt-4 text-sm text-gold uppercase tracking-widest">Plano VIP Expert</p>
            <p className="mt-1 font-mono-display text-5xl sm:text-6xl font-bold text-gradient-gold">
              R$ 59,90
            </p>
            <p className="mt-3 inline-block rounded-full bg-success/20 px-4 py-1.5 text-sm font-bold text-success">
              🔥 Economia de R$ 1.298,10
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Ou comece pelo <strong className="text-foreground">Básico por R$ 29,90</strong>
            </p>
          </div>
        </div>
      </section>

      {/* OFERTAS — 2 PLANOS */}
      <section id="ofertas" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,oklch(0.82_0.13_85_/_0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Escolha seu plano
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold">
              Não perca mais clientes por <span className="text-gradient-gold">falta de técnica</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Garanta seu acesso agora mesmo. Escolha o plano que melhor se adapta ao seu momento profissional antes que a promoção encerre!
            </p>
          </div>
          <PricingPlans />

          {/* Order Bump */}
          <div className="mt-24">
            <h3 className="text-center font-display text-2xl sm:text-3xl font-bold mb-6">
              No checkout: <span className="text-gradient-gold">Bônus especial</span>
            </h3>
            <OrderBump />
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="border-y border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold">
            Nossa Metodologia <span className="text-gradient-gold">Comprovada</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Teoria Fundamentada", d: "Base sólida com conceitos atualizados." },
              { n: "02", t: "Prática Orientada", d: "Demonstrações passo a passo." },
              { n: "03", t: "Exercícios Práticos", d: "Atividades para fixar o aprendizado." },
              { n: "04", t: "Acesso Vitalício", d: "Revise sempre que precisar em qualquer plano." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <span className="font-mono-display text-3xl font-bold text-gradient-gold">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="glass-gold rounded-2xl p-6 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-charcoal">
                <Scissors className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">Ferramentas Profissionais</h3>
                <p className="text-sm text-muted-foreground">Aprenda a escolher e usar as melhores.</p>
              </div>
            </div>
            <div className="glass-gold rounded-2xl p-6 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-charcoal">
                <InfinityIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">Acesso Vitalício</h3>
                <p className="text-sm text-muted-foreground">Estude no seu ritmo, sem prazo de validade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA MARQUEE */}
      <section id="galeria" className="py-20 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Resultados <span className="text-gradient-gold">profissionais</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Cortes femininos com técnica e acabamento</p>
        </div>

        <div className="mt-12 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-4">
            {[...galleryImgs, ...galleryImgs].map((img, i) => (
              <div key={i} className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl border border-border">
                <img src={img} alt="Resultado de corte" loading="lazy" width={400} height={400} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://lastlink.com/p/C2F096D6F/checkout-payment/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-success px-8 py-4 text-base font-bold text-success-foreground cta-glow"
          >
            🔥 QUERO APRENDER TODOS OS CORTES 🔥
          </a>
        </div>
      </section>

      {/* DEPOIMENTOS — WHATSAPP */}
      <section id="depoimentos" className="border-y border-border bg-card/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold text-gold">
              💬 Mensagens reais
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
              O que nossas alunas estão <span className="text-gradient-gold">dizendo</span>
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* COMUNIDADE BÔNUS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-card-premium p-8 sm:p-12 shadow-gold-lg">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-charcoal">
                🎁 BÔNUS EXCLUSIVO
              </span>
              <div className="mt-4 flex items-center gap-2 text-sm text-success">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                <span>👥 Comunidade ativa com milhares de alunas</span>
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
                Acesso à Comunidade Exclusiva <span className="text-gradient-gold">Beleza Dedicada</span>
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm"><Users className="h-4 w-4 text-gold" /> 🤝 Networking</li>
                <li className="flex items-center gap-2 text-sm"><Sparkles className="h-4 w-4 text-gold" /> ✨ Dicas exclusivas</li>
              </ul>
              <p className="mt-6 font-display text-xl font-semibold">
                💎 Valor de <span className="line-through text-muted-foreground">R$ 97,00</span> → <span className="text-success">GRÁTIS</span> na sua compra
              </p>
              <span className="mt-3 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                Incluso no plano VIP Expert
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER */}
      <section className="border-y border-border bg-card/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold">
            Por que escolher a <span className="text-gradient-gold">Beleza Dedicada</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: ShieldCheck, t: "Compra 100% Segura", d: "Seus dados estão totalmente protegidos." },
              { Icon: Heart, t: "Comunidade VIP", d: "Acesso exclusivo no plano VIP Expert." },
              { Icon: InfinityIcon, t: "Assista quando quiser", d: "No seu ritmo, acesso vitalício." },
              { Icon: RefreshCw, t: "Atualizações incluídas", d: "Sem custos adicionais no VIP." },
              { Icon: Monitor, t: "100% Online", d: "Acesso de qualquer dispositivo." },
              { Icon: Palette, t: "Técnicas modernas", d: "Tendências que as clientes pedem." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-charcoal">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section id="garantia" className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="relative mx-auto h-44 w-44">
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 200 200" className="h-full w-full text-gold">
                <defs>
                  <path id="circ" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fill="currentColor" fontSize="14" letterSpacing="3" className="font-display font-bold">
                  <textPath href="#circ">GARANTIA DE 7 DIAS • SEM RISCOS • REEMBOLSO TOTAL •</textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-gradient-gold text-charcoal">
              <ShieldCheck className="h-9 w-9" />
              <span className="font-display text-xs font-bold mt-1">7 DIAS</span>
            </div>
          </div>
          <h2 className="mt-8 font-display text-3xl sm:text-4xl font-bold">
            Garantia Total de <span className="text-gradient-gold">7 Dias</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { Icon: CheckCircle2, t: "Sem Riscos", d: "Teste sem compromisso." },
              { Icon: DollarSign, t: "Reembolso Total", d: "100% do valor de volta." },
              { Icon: Zap, t: "Processo Rápido", d: "Devolução simples e rápida." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="mx-auto h-7 w-7 text-success" />
                <h3 className="mt-3 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-border bg-card p-6 text-left">
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 text-gold" fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-foreground/85 italic">
              "Fiquei na dúvida no início, mas a garantia me deu segurança. Hoje, 8 meses depois, atendo o dobro de clientes."
            </p>
            <p className="mt-2 text-xs font-semibold text-gold">— Carla Mendes</p>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" /> Sua compra é 100% segura e protegida
          </p>
        </div>
      </section>

      {/* SOCIAIS — antes do FAQ */}
      <section className="border-y border-border bg-card/30 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Conecte-se com a <span className="text-gradient-gold">Beleza Dedicada</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Acompanhe nosso trabalho, transformações e dicas diárias
            </p>
          </div>
          <SocialSection />
          <p className="mt-8 text-center text-sm text-gold">
            ✨ Conteúdo exclusivo e inspirações em todas as plataformas
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full glass-gold px-4 py-1.5 text-xs font-semibold text-gold">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold">
              Perguntas <span className="text-gradient-gold">Frequentes</span>
            </h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-charcoal-light py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-charcoal">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="font-display text-xl font-bold">
                  Beleza <span className="text-gradient-gold">Dedicada</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Educação em beleza profissional para mulheres que querem viver da sua arte.
              </p>
              <p className="mt-3 text-xs text-gold">belezadedicada.com</p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#ofertas" className="hover:text-gold">Ofertas</a></li>
                <li><a href="#galeria" className="hover:text-gold">Galeria de Resultados</a></li>
                <li><a href="#depoimentos" className="hover:text-gold">Depoimentos</a></li>
                <li><a href="#garantia" className="hover:text-gold">Garantia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://instagram.com/belezadedicadaofc" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram: @belezadedicadaofc</a></li>
                <li><a href="https://youtube.com/@belezadedicada" target="_blank" rel="noopener noreferrer" className="hover:text-gold">YouTube: @belezadedicada</a></li>
                <li><a href="https://facebook.com/belezadedicada" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Facebook: /belezadedicada</a></li>
                <li><a href="https://tiktok.com/belezadedicadaoficial" target="_blank" rel="noopener noreferrer" className="hover:text-gold">TikTok: @belezadedicadaoficial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Compromissos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>⚡ Acesso Imediato</li>
                <li>🔒 Pagamentos 100% Seguros</li>
                <li>✅ Garantia de 7 Dias</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © 2026 Beleza Dedicada • Todos os direitos reservados • CNPJ: 53.586.317/0001-79 • belezadedicada.com
          </div>
        </div>
      </footer>

      <StickyMobileBar />
      <div className="h-20 lg:hidden" />
    </div>
  );
}

