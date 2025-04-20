import configPromise from "@payload-config";
import { getPayload } from "payload";

import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { SearchFilters } from "./components/search-filters";
import { Category } from "@/payload-types";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: ILayoutProps) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, // populates the subcategories field
    where: {
      parent: {
        exists: false,
      },
    },
    pagination: false,
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Se eu passar depth: 1 no find, o payload retorna o subcategories como um array de categorias, se eu passar depth: 0, o payload retorna o subcategories como um array de strings. Como o payload nao consegue diferenciar os tipos de acordo com o depth, eu preciso fazer isso manualmente
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
