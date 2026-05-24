import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { legalPages } from "@/lib/legal-content";
import { SITE_NAME } from "@/lib/site";

const page = legalPages["aviso-legal"];

export const Route = createFileRoute("/aviso-legal")({
  component: AvisoLegalPage,
  head: () => ({
    meta: [
      { title: `Aviso legal | ${SITE_NAME}` },
      { name: "description", content: page.description },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});

function AvisoLegalPage() {
  return <LegalPageLayout title={page.title} description={page.description} sections={page.sections} />;
}
