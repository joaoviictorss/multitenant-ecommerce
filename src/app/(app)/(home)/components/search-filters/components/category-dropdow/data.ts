import { Category } from "@/payload-types";
import { RefObject } from "react";

export interface CategoryDropDownProps {
  category: Category;
  isActive: boolean;
  isNavigationHovered: boolean;
}

export interface CategoryDropdownData extends CategoryDropDownProps {
  dropdownRef: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  dropdownPosition: {top: number, left: number};
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
