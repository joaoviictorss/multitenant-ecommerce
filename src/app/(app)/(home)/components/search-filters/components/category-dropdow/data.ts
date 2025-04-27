import { CustomCategory } from "@/app/(app)/(home)/types/data";
import { RefObject } from "react";

export interface CategoryDropDownProps {
  category: CustomCategory;
  isActive: boolean;
  isNavigationHovered: boolean;
}

export interface CategoryDropdownData extends CategoryDropDownProps {
  dropdownRef: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  dropdownPosition: {top: number, left: number};
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  // toggleDropdown: () => void;
}
