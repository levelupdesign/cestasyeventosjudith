import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const homeTitle = `${SITE_NAME} | Cestas personalizadas y decoración de eventos en Málaga`;
const homeDescription =
  "Cestas de bebé personalizadas, decoración de cumpleaños y eventos, regalos únicos en Málaga. Asesoramiento y presupuestos sin coste. Envíos a toda España.";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: homeTitle },
      { name: "description", content: homeDescription },
      {
        name: "keywords",
        content:
          "cestas personalizadas Málaga, decoración eventos Málaga, regalos personalizados Málaga, cestas bebé Málaga",
      },
      { property: "og:title", content: "Cestas & Eventos Judith — Momentos únicos en Málaga" },
      { property: "og:description", content: "Creamos experiencias y momentos únicos con cestas y eventos personalizados." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
});
