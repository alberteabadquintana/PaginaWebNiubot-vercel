export type ProjectConcept = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  result?: string;
  industry?: string;
};

// El cliente aún no tiene casos reales publicables — estos son ejemplos
// ilustrativos del tipo de proyecto que niubot desarrolla, no clientes reales.
export const projectConcepts: ProjectConcept[] = [
  {
    title: "Tienda en línea para retail local",
    category: "Desarrollo web",
    description:
      "Catálogo de productos, carrito de compras y pasarela de pago integrada con Culqi, para que un negocio físico empiece a vender por internet desde el día uno.",
    tags: ["E-commerce", "Next.js", "Culqi / Pagos"],
    result: "Ventas 24/7 sin intervención manual",
    industry: "Retail",
  },
  {
    title: "Asistente virtual por WhatsApp",
    category: "IA y chatbots",
    description:
      "Chatbot entrenado con el catálogo y las preguntas frecuentes del negocio, capaz de cotizar, agendar y escalar a un agente humano cuando es necesario.",
    tags: ["WhatsApp API", "IA conversacional", "Atención al cliente"],
    result: "80% de consultas resueltas automáticamente",
    industry: "Servicios",
  },
  {
    title: "Panel interno con reportes automáticos",
    category: "Software a medida",
    description:
      "Sistema interno que ordena la información del negocio y genera reportes automáticos, reemplazando hojas de cálculo dispersas y errores humanos.",
    tags: ["Dashboard", "Automatización", "Base de datos"],
    result: "Ahorro de 10+ horas semanales",
    industry: "Operaciones",
  },
  {
    title: "Sistema de reservas y agenda",
    category: "Aplicación web",
    description:
      "Plataforma de reservas en línea con calendario en tiempo real, recordatorios automáticos por WhatsApp y panel de administración para el equipo.",
    tags: ["Reservas", "Notificaciones", "Panel admin"],
    result: "Cero citas perdidas por olvido",
    industry: "Salud / Educación",
  },
  {
    title: "Landing page de alta conversión",
    category: "Desarrollo web",
    description:
      "Página optimizada para SEO y velocidad, con formulario de captación de leads, integración con CRM y pruebas A/B para maximizar la tasa de conversión.",
    tags: ["SEO", "Leads", "CRM"],
    result: "+35% tasa de conversión estimada",
    industry: "Marketing",
  },
  {
    title: "Asistente IA para soporte interno",
    category: "IA y chatbots",
    description:
      "Asistente entrenado con los procedimientos, políticas y manuales de la empresa, accesible por el equipo para resolver dudas operativas al instante.",
    tags: ["LLM", "Base de conocimiento", "Productividad"],
    result: "Respuestas instantáneas al equipo",
    industry: "Recursos Humanos",
  },
];