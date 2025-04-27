import { SubcategoryMenuProps } from "./data";
import Link from "next/link";

const SubcategoryMenu = ({
  category,
  isOpen,
  position,
}: SubcategoryMenuProps) => {
  if (
    !isOpen ||
    !category.subcategories ||
    (category.subcategories).length === 0
  )
    return null;

  const defaultBackgroundColor = "#F5F5F5";

  const backgroundColor = category.color || defaultBackgroundColor;

  return (
    <div
      className="fixed z-100"
      style={{ left: position.left, top: position.top }}
    >
      {/* Parte invisivel para nao fechar o dropdown */}
      <div className="h-3 w-60" />

      <div
        style={{ backgroundColor: backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
      >
        <div>
          {(category.subcategories)?.map(
            (subcategory) => (
              <Link
                href={`/${category.slug}/${subcategory.slug}`}
                key={subcategory.slug}
                className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
              >
                {subcategory.name}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { SubcategoryMenu };
