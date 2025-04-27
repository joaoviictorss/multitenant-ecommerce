import { Button } from "@/components/ui/button";
import { CategoryDropdownData } from "../data";
import { cn } from "@/lib/utils";
import { SubcategoryMenu } from "../../subcategory-menu";
import { Category } from "@/payload-types";
import Link from "next/link";

const CategoryDropdown = ({
  dropdownRef,
  category,
  isActive,
  isNavigationHovered,
  onMouseEnter,
  onMouseLeave,
  dropdownPosition,
  isOpen,
  // toggleDropdown,
}: CategoryDropdownData) => {
  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // onClick={toggleDropdown}
    >
      <div className="relative">
        <Button
          variant={"elevated"}
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
            isActive && !isNavigationHovered && "bg-white border-primary",
            isOpen &&
              "bg-white border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[4px] -translate-y-[4px]"
          )}
        >
          <Link
            prefetch
            href={`/${category.slug === "all" ? "" : category.slug}`}
          >
            {category.name}
          </Link>
        </Button>
        {category.subcategories && category.subcategories.length > 0 && (
          <div
            className={cn(
              "opacity-0 absolute -bottom-3 size-0 border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent border-b-[10px] border-b-black left-1/2 -translate-x-1/2",
              isOpen && "opacity-100"
            )}
          />
        )}
      </div>

      <SubcategoryMenu
        category={category}
        isOpen={isOpen}
        position={dropdownPosition}
      />
    </div>
  );
};

export { CategoryDropdown };
