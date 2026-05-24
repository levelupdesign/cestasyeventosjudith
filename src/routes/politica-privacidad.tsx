import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { legalPages } from "@/lib/legal-content";
import { SITE_NAME } from "@/lib/site";

const page = legalPages["politica-privacidad"];

export const Route = createFileRoute("/politica-privacidad")({
  component: PoliticaPrivacidadPage,
  head: () => ({
    meta: [
      { title: `Política de privacidad | ${SITE_NAME}` },
      { name: "description", content: page.description },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});

function PoliticaPrivacidadPage() {
  return <LegalPageLayout title={page.title} description={page.description} sections={page.sections} />;
}
