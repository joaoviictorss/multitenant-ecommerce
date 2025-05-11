import { CategoriesGetManyOutput } from "@/modules/categories/types";
import { RefObject } from "react";

export interface CategoryDropDownProps {
  category: CategoriesGetManyOutput[1];
  isActive: boolean;
  isNavigationHovered: boolean;
}

export interface CategoryDropdownData extends CategoryDropDownProps {
  dropdownRef: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  dropdownPosition: { top: number; left: number };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  // toggleDropdown: () => void;
}
