import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://niubot.pe";
  const routes = [
    "",
    "/nosotros",
    "/servicios",
    "/tecnologias",
    "/proceso",
    "/proyectos",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}