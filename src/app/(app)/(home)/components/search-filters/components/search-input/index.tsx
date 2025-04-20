import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

import { SearchInputProps } from "./data";

const SearchInput = ({ disabled }: SearchInputProps) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />

        <Input
          className="pl-8"
          placeholder="Pesquisar produtos"
          disabled={disabled}
        />
      </div>
      {/* TODO: adicionar categorias e ver todos */}
      {/* TODO: adicionar library button */}
    </div>
  );
};

export { SearchInput };
