export type PageTeaser = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export const pageTeasers: PageTeaser[] = [
  {
    title: "Nosotros",
    description:
      "Quiénes somos y cómo trabajamos con negocios que quieren crecer sin perder el trato cercano.",
    href: "/nosotros",
    label: "Conócenos",
  },
  {
    title: "Servicios",
    description:
      "Desarrollo web y software, más inteligencia artificial y chatbots aplicados a tu negocio.",
    href: "/servicios",
    label: "Ver servicios",
  },
  {
    title: "Tecnologías",
    description:
      "El stack con el que construimos: frontend, backend, IA e infraestructura en la nube.",
    href: "/tecnologias",
    label: "Ver stack",
  },
  {
    title: "Proceso",
    description:
      "Cómo pasamos de una idea a un producto en producción, en cuatro pasos claros.",
    href: "/proceso",
    label: "Ver proceso",
  },
  {
    title: "Proyectos",
    description:
      "Ejemplos del tipo de soluciones que desarrollamos para negocios como el tuyo.",
    href: "/proyectos",
    label: "Ver proyectos",
  },
  {
    title: "Contacto",
    description:
      "Cuéntanos tu proyecto y te respondemos por WhatsApp con los siguientes pasos.",
    href: "/contacto",
    label: "Escríbenos",
  },
];