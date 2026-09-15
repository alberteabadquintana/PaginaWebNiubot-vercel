export type TechGroup = {
  category: string;
  icon: string;
  
  items: { name: string; level?: "core" | "secondary" }[];
};

export const techGroups: TechGroup[] = [
  {
    category: "Frontend",
    icon: "monitor",
    
    items: [
      { name: "React", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "Framer Motion", level: "secondary" },
      { name: "shadcn/ui", level: "secondary" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    
    items: [
      { name: "Node.js", level: "core" },
      { name: "Python", level: "core" },
      { name: "PostgreSQL", level: "core" },
      { name: "REST / GraphQL", level: "core" },
      { name: "Prisma ORM", level: "secondary" },
      { name: "Redis", level: "secondary" },
    ],
  },
  {
    category: "Inteligencia artificial",
    icon: "brain",
   
    items: [
      { name: "OpenAI / GPT-4", level: "core" },
      { name: "LangChain", level: "core" },
      { name: "WhatsApp Business API", level: "core" },
      { name: "Automatización con n8n", level: "core" },
      { name: "RAG (Retrieval-Augmented)", level: "secondary" },
      { name: "Embeddings vectoriales", level: "secondary" },
    ],
  },
  {
    category: "Infraestructura",
    icon: "cloud",
   
    items: [
      { name: "Vercel", level: "core" },
      { name: "AWS (EC2 / S3 / RDS)", level: "core" },
      { name: "Docker", level: "core" },
      { name: "CI / CD con GitHub Actions", level: "core" },
      { name: "Cloudflare", level: "secondary" },
      { name: "Supabase", level: "secondary" },
    ],
  },
];