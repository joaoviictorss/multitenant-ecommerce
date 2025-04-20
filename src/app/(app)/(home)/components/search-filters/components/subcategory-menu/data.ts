import { Category } from "@/payload-types";

export interface SubcategoryMenuProps {
  category: Category;
  isOpen: boolean;
  position: {top: number, left: number};
}