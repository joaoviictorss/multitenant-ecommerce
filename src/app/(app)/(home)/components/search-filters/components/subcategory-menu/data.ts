import { CustomCategory } from "@/app/(app)/(home)/types/data";

export interface SubcategoryMenuProps {
  category: CustomCategory;
  isOpen: boolean;
  position: {top: number, left: number};
}