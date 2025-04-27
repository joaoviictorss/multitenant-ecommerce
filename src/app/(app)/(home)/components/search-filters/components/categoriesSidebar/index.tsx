import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import { CategoriesSidebarProps } from "./data";
import { useState } from "react";
import { CustomCategory } from "@/app/(app)/(home)/types/data";
import { ChevronLeftIcon, ChevronRight } from "lucide-react";

const CategoriesSidebar = ({
  isOpen,
  onOpenChange,
  data,
}: CategoriesSidebarProps) => {
  const router = useRouter();

  const [parentCategories, setParentCategories] = useState<
    CustomCategory[] | null
  >(null);
  const [selectedCategory, setSelectedCategory] =
    useState<CustomCategory | null>(null);

  // Se a categoria selecionada tiver subcategorias, exibe as subcategorias do mesmo, se não, redireciona para a categoria selecionada

  const currentCategories = parentCategories ?? data ?? [];

  const handleOpenChange = (open: boolean) => {
    setSelectedCategory(null);
    setParentCategories(null);
    onOpenChange(open);
  };

  const handleCategoryClick = (category: CustomCategory) => {
    if (category.subcategories && category.subcategories?.length > 0) {
      setParentCategories(category.subcategories as CustomCategory[]);
      setSelectedCategory(category);
    } else {
      if (parentCategories && selectedCategory) {
        // Redirecionar para uma subcategoria - navigate to /category/subcategory
        router.push(`/${selectedCategory.slug}/${category.slug}`);
      } else {
        // Redorecionar para uma categoria - navigate to /category
        if (category.slug === "all") {
          router.push("/");
        } else {
          router.push(`/${category.slug}`);
        }
      }

      handleOpenChange(false);
    }
  };

  const handleBackClick = () => {
    if (parentCategories) {
      setParentCategories(null);
      setSelectedCategory(null);
    }
  };

  const backgroundColor = selectedCategory?.color || "white";

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        style={{ backgroundColor }}
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Categorias</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {parentCategories && (
            <button
              onClick={handleBackClick}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium cursor-pointer"
            >
              <ChevronLeftIcon className="size-4 mr-2" />
              Voltar
            </button>
          )}
          {currentCategories.map((category) => (
            <button
              onClick={() => handleCategoryClick(category)}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center justify-between text-base font-medium cursor-pointer"
              key={category.slug}
            >
              {category.name}
              {category.subcategories && category.subcategories?.length > 0 && (
                <ChevronRight className="size-4" />
              )}
            </button>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export { CategoriesSidebar };
