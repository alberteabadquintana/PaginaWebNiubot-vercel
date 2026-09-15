export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Conversamos sobre tu negocio, tus clientes y el problema que quieres resolver. Definimos alcance, tiempos y prioridades antes de escribir una sola línea de código.",
    details: [
      "Reunión gratuita de diagnóstico",
      "Análisis de procesos actuales",
      "Definición de objetivos y KPIs",
      "Propuesta económica detallada",
    ],
    duration: "1–2 días",
  },
  {
    number: "02",
    title: "Diseño y prototipo",
    description:
      "Armamos una propuesta de solución y un prototipo navegable para que veas y ajustes la idea antes de invertir en el desarrollo completo.",
    details: [
      "Wireframes y flujos de usuario",
      "Prototipo interactivo navegable",
      "Revisión y ajuste con el cliente",
      "Arquitectura técnica definida",
    ],
    duration: "3–7 días",
  },
  {
    number: "03",
    title: "Desarrollo e IA",
    description:
      "Construimos el producto en ciclos cortos, con avances que puedes revisar en el camino, y entrenamos o integramos la IA sobre tu información real.",
    details: [
      "Sprints semanales con demo en vivo",
      "Ambiente de pruebas desde el día 1",
      "Entrenamiento de IA con tus datos",
      "Integración con tus herramientas",
    ],
    duration: "2–8 semanas",
  },
  {
    number: "04",
    title: "Lanzamiento y soporte",
    description:
      "Publicamos, monitoreamos que todo funcione y quedamos disponibles para ajustes, mejoras y soporte una vez que tu proyecto está en producción.",
    details: [
      "Despliegue en producción seguro",
      "Capacitación a tu equipo",
      "Monitoreo y alertas en tiempo real",
      "Soporte post-lanzamiento incluido",
    ],
    duration: "Continuo",
  },
];