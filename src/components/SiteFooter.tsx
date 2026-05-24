import { Link } from "@tanstack/react-router";
import { Clock, Mail, MessageCircle, Sparkles } from "lucide-react";
import { EMAIL, LINKEDIN, PHONE_DISPLAY, waLink } from "@/lib/contact";
import { BUSINESS_HOURS } from "@/lib/site";

const legalLinks = [
  { to: "/aviso-legal" as const, label: "Aviso legal" },
  { to: "/politica-privacidad" as const, label: "Política de privacidad" },
  { to: "/cookies" as const, label: "Política de cookies" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-background/10 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-10 sm:py-16">
        <div className="mb-12 border-b border-background/10 pb-12">
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">
            Cestas <span className="text-gradient-gold italic">&amp;</span> Eventos Judith
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-background/65">
            Judith Ponce Almansa · Diseñando momentos únicos desde Málaga.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-background/50">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm transition-colors hover:text-[var(--gold)]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background/10 transition-colors group-hover:bg-background/15">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-background/50">WhatsApp</span>
                    <span className="font-medium">{PHONE_DISPLAY}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-start gap-3 text-sm transition-colors hover:text-[var(--gold)]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background/10 transition-colors group-hover:bg-background/15">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-background/50">Correo electrónico</span>
                    <span className="break-all font-medium">{EMAIL}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm transition-colors hover:text-[var(--gold)]"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background/10 transition-colors group-hover:bg-background/15">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-background/50">LinkedIn</span>
                    <span className="font-medium">Judith Ponce Almansa</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-background/50">
              Horario
            </h4>
            <ul className="space-y-3">
              {BUSINESS_HOURS.map((slot) => (
                <li key={slot.days} className="flex gap-3 text-sm">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-background/40" />
                  <span>
                    <span className="block font-medium text-background/90">{slot.days}</span>
                    <span className="text-background/60">{slot.hours}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-background/50">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/75 underline-offset-4 transition-colors hover:text-[var(--gold)] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/45">
          <span>© {new Date().getFullYear()} Cestas & Eventos Judith</span>
          <span>Hecho con ♥ en Málaga</span>
        </div>
      </div>
    </footer>
  );
}
