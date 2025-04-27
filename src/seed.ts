import { getPayload } from "payload";
import config from "@payload-config";

const categories = [
  {
    name: "Tudo",
    slug: "all",
  },
  {
    name: "Negócios & Dinheiro",
    color: "#FFB347",
    slug: "business-money",
    subcategories: [
      { name: "Contabilidade", slug: "accounting" },
      { name: "Empreendedorismo", slug: "entrepreneurship" },
      { name: "Bicos & Projetos Paralelos", slug: "gigs-side-projects" },
      { name: "Investimentos", slug: "investing" },
      { name: "Gestão & Liderança", slug: "management-leadership" },
      { name: "Marketing & Vendas", slug: "marketing-sales" },
      {
        name: "Networking, Carreiras & Empregos",
        slug: "networking-careers-jobs",
      },
      { name: "Finanças Pessoais", slug: "personal-finance" },
      { name: "Imóveis", slug: "real-estate" },
    ],
  },
  {
    name: "Desenvolvimento de Software",
    color: "#7EC8E3",
    slug: "software-development",
    subcategories: [
      { name: "Desenvolvimento Web", slug: "web-development" },
      { name: "Desenvolvimento Mobile", slug: "mobile-development" },
      { name: "Desenvolvimento de Jogos", slug: "game-development" },
      { name: "Linguagens de Programação", slug: "programming-languages" },
      { name: "DevOps", slug: "devops" },
    ],
  },
  {
    name: "Escrita & Publicação",
    color: "#D8B5FF",
    slug: "writing-publishing",
    subcategories: [
      { name: "Ficção", slug: "fiction" },
      { name: "Não Ficção", slug: "non-fiction" },
      { name: "Blog", slug: "blogging" },
      { name: "Copywriting", slug: "copywriting" },
      { name: "Auto Publicação", slug: "self-publishing" },
    ],
  },
  {
    name: "Outros",
    slug: "other",
  },
  {
    name: "Educação",
    color: "#FFE066",
    slug: "education",
    subcategories: [
      { name: "Cursos Online", slug: "online-courses" },
      { name: "Reforço Escolar", slug: "tutoring" },
      { name: "Preparação para Provas", slug: "test-preparation" },
      { name: "Aprendizado de Idiomas", slug: "language-learning" },
    ],
  },
  {
    name: "Autoaperfeiçoamento",
    color: "#96E6B3",
    slug: "self-improvement",
    subcategories: [
      { name: "Produtividade", slug: "productivity" },
      { name: "Desenvolvimento Pessoal", slug: "personal-development" },
      { name: "Mindfulness", slug: "mindfulness" },
      { name: "Crescimento na Carreira", slug: "career-growth" },
    ],
  },
  {
    name: "Fitness & Saúde",
    color: "#FF9AA2",
    slug: "fitness-health",
    subcategories: [
      { name: "Planos de Treino", slug: "workout-plans" },
      { name: "Nutrição", slug: "nutrition" },
      { name: "Saúde Mental", slug: "mental-health" },
      { name: "Yoga", slug: "yoga" },
    ],
  },
  {
    name: "Design",
    color: "#B5B9FF",
    slug: "design",
    subcategories: [
      { name: "UI/UX", slug: "ui-ux" },
      { name: "Design Gráfico", slug: "graphic-design" },
      { name: "Modelagem 3D", slug: "3d-modeling" },
      { name: "Tipografia", slug: "typography" },
    ],
  },
  {
    name: "Desenho & Pintura",
    color: "#FFCAB0",
    slug: "drawing-painting",
    subcategories: [
      { name: "Aquarela", slug: "watercolor" },
      { name: "Acrílico", slug: "acrylic" },
      { name: "Óleo", slug: "oil" },
      { name: "Pastel", slug: "pastel" },
      { name: "Carvão", slug: "charcoal" },
    ],
  },
  {
    name: "Música",
    color: "#FFD700",
    slug: "music",
    subcategories: [
      { name: "Composição", slug: "songwriting" },
      { name: "Produção Musical", slug: "music-production" },
      { name: "Teoria Musical", slug: "music-theory" },
      { name: "História da Música", slug: "music-history" },
    ],
  },
  {
    name: "Fotografia",
    color: "#FF6B6B",
    slug: "photography",
    subcategories: [
      { name: "Retrato", slug: "portrait" },
      { name: "Paisagem", slug: "landscape" },
      { name: "Fotografia de Rua", slug: "street-photography" },
      { name: "Natureza", slug: "nature" },
      { name: "Macro", slug: "macro" },
    ],
  },
];

const seed = async () => {
  console.log("Seeding categories...");

  try {
    const payload = await getPayload({ config });

    for (const category of categories) {
      const parentCategory = await payload.create({
        collection: "categories",
        data: {
          name: category.name,
          slug: category.slug,
          color: category.color,
          parent: null,
        },
      });

      for (const subCategory of category.subcategories || []) {
        await payload.create({
          collection: "categories",
          data: {
            name: subCategory.name,
            slug: subCategory.slug,
            parent: parentCategory.id,
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  process.exit(0);
};

await seed();
