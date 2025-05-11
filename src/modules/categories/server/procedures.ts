import configPromise from "@payload-config";
import { getPayload } from "payload";

import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.payload.find({
      collection: "categories",
      depth: 1, // populates the subcategories field
      where: {
        parent: {
          exists: false,
        },
      },
      pagination: false,
      sort: "slug",
    });

    const formattedData = data.docs.map((doc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        ...(doc as Category),
        // Se eu passar depth: 1 no find, o payload retorna o subcategories como um array de categorias, se eu passar depth: 0, o payload retorna o subcategories como um array de strings. Como o payload nao consegue diferenciar os tipos de acordo com o depth, eu preciso fazer isso manualmente
        subcategories: undefined,
      })),
    }));

    return formattedData;
  }),
});
