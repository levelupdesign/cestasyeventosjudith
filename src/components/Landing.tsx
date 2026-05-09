import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { Gift, Cake, PartyPopper, Heart, Flower2 } from "lucide-react";
import heroImg from "@/assets/real-hero.jpg";
import g1 from "@/assets/real-cesta-bebe.jpg";
import g2 from "@/assets/real-regalo-personalizado.jpg";
import g3 from "@/assets/real-g1.jpg";
import g4 from "@/assets/real-g2.jpg";
import g5 from "@/assets/real-g3.jpg";
import g6 from "@/assets/real-g4.jpg";
import g7 from "@/assets/real-g5.jpg";
import { waLink, PHONE_DISPLAY, EMAIL, LINKEDIN, LOCATION } from "@/lib/contact";
import { Navbar } from "@/components/Navbar";
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
  { src: g4, span: "row-span-2" },
  { src: g5, span: "" },
  { src: g6, span: "" },
  { src: g7, span: "" },
];

const steps = ["Idea", "Diseño", "Preparación", "Entrega"];

function PrimaryCTA({ children = "Solicitar presupuesto", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm sm:text-base font-medium shadow-glow hover:shadow-2xl hover:-translate-y-0.5 transition-all ${className}`}
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
      <section className="relative min-h-[100svh] grid lg:grid-cols-2 items-center bg-gradient-warm pt-24 pb-16 px-5 sm:px-10">
        <div className="relative z-10 max-w-xl lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            Hecho a mano en Málaga
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-foreground"
          >
            Creamos{" "}
            <span className="italic text-gradient-gold">momentos únicos</span>{" "}
            que emocionan de verdad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 text-base sm:text-lg text-muted-foreground max-w-md"
          >
            Cestas personalizadas y decoración de eventos en Málaga. Cada detalle cuidado para sorprender de verdad.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 space-y-1.5 text-sm text-foreground/80"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-card/70 backdrop-blur px-7 py-3.5 text-sm sm:text-base font-medium text-foreground hover:bg-card transition"
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
          className="relative mt-12 lg:mt-0 h-[55vh] lg:h-[80vh] w-full"
        >
          <div className="absolute -inset-6 bg-gradient-rose rounded-[3rem] blur-3xl opacity-50" />
          <img
            src={heroImg}
            alt="Cesta personalizada elegante con flores secas y detalles dorados"
            width={1600}
            height={1200}
            className="relative w-full h-full object-cover rounded-[2rem] shadow-glow"
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 bg-card/95 backdrop-blur rounded-2xl px-5 py-3 shadow-card"
          >
            <p className="text-xs text-muted-foreground">Cada detalle</p>
            <p className="font-display text-lg italic text-foreground">cuenta una historia</p>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 sm:py-32 px-5 sm:px-10">
        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold-foreground)] mb-3">— Servicios</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground">
            Diseñado para <span className="italic text-gradient-gold">emocionar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-full bg-rose/40 flex items-center justify-center text-primary">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>
                <a
                  href={waLink(`¡Hola Judith! Me interesa: ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Solicitar presupuesto <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-24 sm:py-32 px-5 sm:px-10 bg-secondary">
        <motion.div {...fadeUp} className="max-w-3xl mb-14 text-center mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold-foreground)] mb-3">— Galería</p>
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
              className={`relative overflow-hidden rounded-2xl shadow-card group ${g.span}`}
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
      <section className="py-24 sm:py-32 px-5 sm:px-10">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold-foreground)] mb-3">— Proceso</p>
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
              <div className="relative z-10 h-14 w-14 rounded-full bg-gradient-rose flex items-center justify-center shadow-card mb-4">
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
      <section className="px-5 sm:px-10 pb-24">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-rose px-8 py-20 sm:py-28 text-center max-w-6xl mx-auto shadow-glow"
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

      {/* FOOTER */}
      <footer className="bg-foreground text-background px-5 sm:px-10 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="font-display text-3xl font-semibold mb-3">
              Cestas <span className="italic text-gradient-gold">&amp;</span> Eventos Judith
            </h3>
            <p className="text-background/70 text-sm max-w-sm">
              Judith Ponce Almansa · Diseñando momentos únicos desde Málaga.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-[var(--gold)] transition">
              <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-background/60 text-xs">Teléfono / WhatsApp</p>
                <p>{PHONE_DISPLAY}</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 hover:text-[var(--gold)] transition break-all">
              <Heart className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-background/60 text-xs">Email</p>
                <p>{EMAIL}</p>
              </div>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-background/60 text-xs">Ubicación</p>
                <p>{LOCATION}</p>
              </div>
            </div>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[var(--gold)] transition">
              <Sparkles className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-background/60 text-xs">LinkedIn</p>
                <p>Judith Ponce Almansa</p>
              </div>
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-background/10 text-xs text-background/50 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} Cestas & Eventos Judith</span>
          <span>Hecho con ♥ en Málaga</span>
        </div>
      </footer>
    </div>
  );
}
