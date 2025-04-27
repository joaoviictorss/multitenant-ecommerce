"use client";

import { useRef, useState } from "react";

import { useDropdownPosition } from "@/hooks/use-dropdown-position";

import { CategoryDropdown as Layout } from "./layout";
import { CategoryDropDownProps } from "./data";

const CategoryDropDown = ({
  category,
  isActive,
  isNavigationHovered,
  ...rest
}: CategoryDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getDropdownPosition } = useDropdownPosition(dropdownRef);

  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  // const toggleDropdown = () => {
  //   if (category.subcategories?.docs?.length) {
  //     setIsOpen(!isOpen);
  //   }
  // }

  const dropdownPosition = getDropdownPosition();

  const layoutProps = {
    category,
    isActive,
    isNavigationHovered,
    dropdownRef,
    onMouseEnter,
    onMouseLeave,
    dropdownPosition,
    isOpen,
    // toggleDropdown,
    ...rest,
  };

  return <Layout {...layoutProps} />;
};

export { CategoryDropDown };
