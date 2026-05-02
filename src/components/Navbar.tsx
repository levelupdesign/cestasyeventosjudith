import { motion } from "framer-motion";
import { waLink } from "@/lib/contact";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-30 px-5 sm:px-10 py-5 flex items-center justify-between"
    >
      <a href="#top" className="flex items-baseline gap-1.5">
        <span className="font-display text-xl sm:text-2xl font-semibold text-foreground">
          Cestas <span className="text-gradient-gold italic">&amp;</span> Eventos
        </span>
        <span className="font-display italic text-primary text-lg">Judith</span>
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-primary transition-colors"
      >
        Solicitar presupuesto
      </a>
    </motion.header>
  );
}
