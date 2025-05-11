import { CategoriesGetManyOutput } from "@/modules/categories/types";

export interface SubcategoryMenuProps {
  category: CategoriesGetManyOutput[1];
  isOpen: boolean;
  position: { top: number; left: number };
}
