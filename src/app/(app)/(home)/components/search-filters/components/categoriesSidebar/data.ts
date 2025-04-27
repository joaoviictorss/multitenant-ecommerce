import { CustomCategory } from "@/app/(app)/(home)/types/data";

export interface CategoriesSidebarProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  data: CustomCategory[]
}