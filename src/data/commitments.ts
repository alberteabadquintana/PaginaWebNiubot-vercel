export type Commitment = {
  title: string;
  description: string;
};

export const commitments: Commitment[] = [
  {
    title: "Hablas directo con quien construye",
    description:
      "Sin intermediarios ni tickets perdidos: te comunicas con el equipo que está escribiendo el código de tu proyecto.",
  },
  {
    title: "Avances que puedes revisar",
    description:
      "Entregamos en ciclos cortos para que veas el progreso real y puedas ajustar el rumbo antes de que sea tarde.",
  },
  {
    title: "Tu código y tus datos son tuyos",
    description:
      "Todo lo que construimos para ti te pertenece: código fuente, accesos e información, sin candados ni dependencias forzadas.",
  },
  {
    title: "Soporte después del lanzamiento",
    description:
      "El trabajo no termina cuando el proyecto sale a producción; seguimos disponibles para resolver y mejorar.",
  },
];