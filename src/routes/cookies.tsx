import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { legalPages } from "@/lib/legal-content";
import { SITE_NAME } from "@/lib/site";

const page = legalPages.cookies;

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => ({
    meta: [
      { title: `Política de cookies | ${SITE_NAME}` },
      { name: "description", content: page.description },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});

function CookiesPage() {
  return <LegalPageLayout title={page.title} description={page.description} sections={page.sections} />;
}
