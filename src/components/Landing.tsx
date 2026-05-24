import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Gift, Cake, PartyPopper, Heart, Flower2 } from "lucide-react";
import heroImg from "@/assets/judith.jpg";
import g1 from "@/assets/real-hero.jpg";
import g2 from "@/assets/real-cesta-bebe.jpg";
import g3 from "@/assets/real-regalo-personalizado.jpg";
import g4 from "@/assets/real-g1.jpg";
import g5 from "@/assets/real-g2.jpg";
import g6 from "@/assets/real-g3.jpg";
import g7 from "@/assets/real-g4.jpg";
import g8 from "@/assets/real-g5.jpg";
import g9 from "@/assets/real-g6.jpg";
import g10 from "@/assets/real-g7.jpg";
import { waLink } from "@/lib/contact";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const services = [
  { icon: Gift, title: "Cestas de bebé", desc: "Personalizadas con detalle y mimo." },
  { icon: Cake, title: "Cumpleaños", desc: "Decoraciones que emocionan." },
  { icon: PartyPopper, title: "Eventos", desc: "Diseño integral a medida." },
  { icon: Heart, title: "Regalos personalizados", desc: "Únicos como la persona." },
  { icon: Flower2, title: "Detalles especiales", desc: "Pequeños gestos, gran impacto." },
];

const gallery = [
  { src: g1, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g3, span: "" },
  { src: g9, span: "" },
  { src: g4, span: "row-span-2" },
  { src: g5, span: "" },
  { src: g6, span: "" },
  { src: g10, span: "" },
  { src: g7, span: "" },
  { src: g8, span: "" },
];

const steps = ["Idea", "Diseño", "Preparación", "Entrega"];

function PrimaryCTA({ children = "Solicitar presupuesto", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm sm:text-base font-medium tracking-wide shadow-glow hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export function Landing() {
  return (
    <div id="top" className="bg-background overflow-x-hidden">
      <Navbar />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="relative min-h-[100svh] grid lg:grid-cols-[1.1fr_1fr] items-center gap-0 bg-gradient-warm pt-28 pb-12 px-5 sm:px-10 lg:px-12 overflow-hidden">
        <div className="relative z-10 max-w-2xl lg:pr-0 lg:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/70 backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground mb-7 shadow-card"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            Hecho a mano en Málaga
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] text-foreground"
      >
            Creamos{" "}
            <span className="italic text-gradient-gold">momentos únicos</span>{" "}
            que emocionan de verdad
      
            <br />
      
            para cada ocasión especial
       
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-md"
          >
            Cestas personalizadas y decoración de eventos en Málaga. Cada detalle cuidado para sorprender de verdad.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 space-y-2 text-sm leading-relaxed text-foreground/85"
          >
            <li>✔ Asesoramiento y presupuestos sin coste</li>
            <li>✔ Diseños personalizados en 3–5 días</li>
            <li>✔ Envíos a toda España en cestas</li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <PrimaryCTA>Solicitar presupuesto por WhatsApp</PrimaryCTA>
            <a
              href={waLink("¡Hola Judith! Me gustaría contactar contigo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-card/80 backdrop-blur-md px-7 py-3.5 text-sm sm:text-base font-medium text-foreground shadow-card hover:border-foreground/25 hover:bg-card transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              Contacta conmigo
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 lg:mt-0 w-full flex justify-center lg:justify-end items-end lg:items-stretch lg:h-[calc(100svh-8rem)]"
        >
          <div className="relative h-full">
            <div className="absolute -inset-6 bg-gradient-rose rounded-[3rem] blur-3xl opacity-50" />
            <img
              src={heroImg}
              alt="Judith Ponce Almansa, creadora de Cestas & Eventos Judith en Málaga"
              width={1200}
              height={1600}
              className="relative h-[75vh] lg:h-[98vh] w-full object-cover rounded-[2.5rem] shadow-elevated ring-1 ring-foreground/5"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-5 left-5 bg-card/95 backdrop-blur-md rounded-2xl border border-border/40 px-5 py-3.5 shadow-elevated"
            >
              <p className="text-xs text-muted-foreground">Hola, soy</p>
              <p className="font-display text-lg italic text-foreground">Judith ✨</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 sm:py-24 px-5 sm:px-10 lg:px-12">
        <motion.div {...fadeUp} className="max-w-3xl mb-12 mx-auto text-center">
          <p className="section-eyebrow mb-3">— Servicios</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Diseñado para <span className="italic text-gradient-gold">emocionar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border/40 bg-card shadow-card hover:border-primary/20 hover:shadow-glow transition-all duration-300 p-5 sm:p-6 text-center"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-rose flex items-center justify-center text-primary mb-3 mx-auto">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-snug">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-24 sm:py-28 px-5 sm:px-10 lg:px-12 bg-secondary">
        <motion.div {...fadeUp} className="max-w-3xl mb-14 text-center mx-auto">
          <p className="section-eyebrow mb-3">— Galería</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground">
            Cada detalle <span className="italic text-gradient-gold">cuenta</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[240px] gap-3 sm:gap-4 max-w-7xl mx-auto">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl shadow-card ring-1 ring-foreground/5 group ${g.span}`}
            >
              <img
                src={g.src}
                alt="Trabajo realizado"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 sm:py-28 px-5 sm:px-10 lg:px-12">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-eyebrow mb-3">— Proceso</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground">
            Sencillo, <span className="italic text-gradient-gold">cuidado</span>, perfecto
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative">
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
          {steps.map((step, i) => (
            <motion.div
              key={step}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 h-14 w-14 rounded-full bg-gradient-rose flex items-center justify-center shadow-card ring-1 ring-foreground/5 mb-4">
                <span className="font-display text-xl font-semibold text-foreground">{i + 1}</span>
              </div>
              <p className="font-display text-lg font-medium text-foreground">{step}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm text-muted-foreground">
          Pedidos personalizados: 3 a 5 días · Envíos a toda España
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="px-5 sm:px-10 lg:px-12 pb-8 sm:pb-10">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-gradient-rose px-8 py-20 sm:py-28 text-center max-w-6xl mx-auto shadow-glow"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white opacity-30 blur-3xl" />

          <div className="relative">
            <Sparkles className="h-8 w-8 text-[var(--gold-foreground)] mx-auto mb-5" />
            <h2 className="text-4xl sm:text-6xl font-semibold text-foreground max-w-2xl mx-auto leading-tight">
              ¿Tienes una idea? Cuéntamela y la <span className="italic text-gradient-gold">hacemos realidad</span> ✨
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md mx-auto">
              Asesoramiento y presupuestos sin coste. Respuesta en horas.
            </p>
            <div className="mt-9">
              <PrimaryCTA>Solicitar presupuesto por WhatsApp</PrimaryCTA>
            </div>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
