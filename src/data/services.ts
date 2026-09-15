export type ServiceSolution = {
  title: string;
  description: string;
  image: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: ServiceSolution[];
  highlight?: string;
};

export const services: Service[] = [
  {
    id: "software",
    title: "Desarrollo de software a medida",
    description:
      "Diseñamos y desarrollamos soluciones digitales adaptadas a la forma en que trabaja tu empresa. Desde plataformas web y sistemas internos hasta aplicaciones empresariales e integraciones con tus herramientas actuales.",
    bullets: [
      {
        title: "Sitios web y landing pages",
        description:
          "Diseñamos sitios web profesionales orientados a presentar tu empresa, comunicar tus servicios y convertir visitantes en oportunidades comerciales.",
        image: "/images/services/web-landing.jpeg",
      },
      {
        title: "Sistemas empresariales y aplicaciones web",
        description:
          "Construimos sistemas personalizados para administrar procesos, información y operaciones de tu negocio desde una sola plataforma.",
        image: "/images/services/sistemas-empresariales.jpg",
      },
      {
        title: "Tiendas en línea y soluciones de comercio electrónico",
        description:
          "Desarrollamos tiendas online pensadas para vender productos o servicios, gestionar pedidos y ofrecer una experiencia de compra profesional.",
        image: "/images/services/ecommerce.jpg",
      },
      {
        title: "Integraciones entre sistemas y servicios",
        description:
          "Conectamos las herramientas que ya utilizas para que la información pueda fluir entre sistemas y reducir tareas manuales.",
        image: "/images/services/integraciones.jpg",
      },
    ],
    highlight: "Soluciones diseñadas para tu negocio",
  },

  {
    id: "ia",
    title: "Inteligencia artificial y automatización",
    description:
      "Integramos inteligencia artificial en procesos donde realmente puede aportar valor. Automatizamos tareas, facilitamos el acceso a la información y desarrollamos asistentes capaces de interactuar con tus clientes y equipos.",
    bullets: [
      {
        title: "Asistentes inteligentes para web y canales digitales",
        description:
          "Creamos asistentes capaces de responder preguntas, orientar a usuarios y facilitar el acceso a información relevante.",
        image: "/images/services/asistentes-ia.jpg",
      },
      {
        title: "Chatbots para atención y soporte",
        description:
          "Desarrollamos experiencias conversacionales para automatizar consultas frecuentes y mejorar la atención a clientes.",
        image: "/images/services/chatbots.jpg",
      },
      {
        title: "Automatización de procesos y generación de reportes",
        description:
          "Automatizamos tareas repetitivas y procesos que consumen tiempo para que tu equipo pueda concentrarse en actividades de mayor valor.",
        image: "/images/services/automatizacion.jpg",
      },
      {
        title: "Integración de IA con tus sistemas y datos",
        description:
          "Incorporamos capacidades de inteligencia artificial directamente en las aplicaciones y procesos que ya utiliza tu empresa.",
        image: "/images/services/integracion-ia.jpg",
      },
    ],
    highlight: "IA aplicada a necesidades reales",
  },

  {
    id: "consultoria",
    title: "Consultoría y transformación digital",
    description:
      "Analizamos cómo funciona actualmente tu negocio para identificar oportunidades de mejora. Definimos una estrategia tecnológica clara, priorizamos iniciativas y te acompañamos durante su implementación.",
    bullets: [
      {
        title: "Diagnóstico y análisis de procesos",
        description:
          "Analizamos tus procesos actuales para identificar oportunidades de optimización y áreas donde la tecnología puede generar valor.",
        image: "/images/services/diagnostico.jpg",
      },
      {
        title: "Estrategia y hoja de ruta tecnológica",
        description:
          "Definimos prioridades, etapas y tecnologías para avanzar de manera ordenada hacia tus objetivos digitales.",
        image: "/images/services/roadmap.jpg",
      },
      {
        title: "Evaluación de herramientas y plataformas",
        description:
          "Evaluamos las alternativas tecnológicas disponibles para ayudarte a elegir soluciones que realmente se ajusten a tu negocio.",
        image: "/images/services/herramientas.jpg",
      },
      {
        title: "Acompañamiento y capacitación de equipos",
        description:
          "Acompañamos a tu equipo durante la adopción de nuevas herramientas y procesos para facilitar una implementación efectiva.",
        image: "/images/services/capacitacion.jpg",
      },
    ],
    highlight: "Decisiones tecnológicas con propósito",
  },
];