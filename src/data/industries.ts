export type Industry = {
  name: string;
  icon: string;
  useCases: string[];
};

export const industries: Industry[] = [
  {
    name: "Retail y e-commerce",
    icon: "shopping-bag",
    useCases: ["Tiendas en línea", "Catálogos digitales", "Pasarelas de pago locales"],
  },
  {
    name: "Salud y bienestar",
    icon: "heart-pulse",
    useCases: ["Sistemas de citas", "Historiales digitales", "Recordatorios automáticos"],
  },
  {
    name: "Educación",
    icon: "graduation-cap",
    useCases: ["Plataformas de cursos", "Gestión de alumnos", "Asistentes de aprendizaje IA"],
  },
  {
    name: "Servicios profesionales",
    icon: "briefcase",
    useCases: ["CRMs a medida", "Automatización de cotizaciones", "Portales de clientes"],
  },
  {
    name: "Restaurantes y hostelería",
    icon: "utensils",
    useCases: ["Menús digitales", "Reservas en línea", "Chatbots para pedidos"],
  },
  {
    name: "Logística y operaciones",
    icon: "package",
    useCases: ["Seguimiento de envíos", "Paneles operativos", "Reportes automatizados"],
  },
];

export const stats = [
  { value: "< 2 sem.", label: "Primer entregable en producción" },
  { value: "100%", label: "Código y datos son tuyos" },
  { value: "3x", label: "Áreas de expertise combinadas" },
  { value: "LATAM", label: "Cobertura regional, trabajo remoto" },
];
