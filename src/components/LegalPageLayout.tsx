import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_NAME } from "@/lib/site";

type LegalSection = {
  title: string;
  content: string;
};

type LegalPageLayoutProps = {
  title: string;
  description: string;
  sections: readonly LegalSection[];
};

export function LegalPageLayout({ title, description, sections }: LegalPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/60 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <span className="font-display text-sm font-semibold text-foreground sm:text-base">
            {SITE_NAME}
          </span>
        </div>
      </header>

      <main className="flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-foreground)]">Legal</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-border/50 bg-card/60 p-6 shadow-card sm:p-8">
                <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
