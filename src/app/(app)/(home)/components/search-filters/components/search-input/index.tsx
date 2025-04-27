"use client";

import { useState } from "react";
import { ListFilterIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

import { SearchInputProps } from "./data";
import { CategoriesSidebar } from "../categoriesSidebar";
import { Button } from "@/components/ui/button";

const SearchInput = ({ disabled, data }: SearchInputProps) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <CategoriesSidebar
          data={data}
          isOpen={isOpenSidebar}
          onOpenChange={setIsOpenSidebar}
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />

        <Input
          className="pl-8"
          placeholder="Pesquisar produtos"
          disabled={disabled}
        />
      </div>
      {/* TODO: adicionar categorias e ver todos */}
      <Button
        variant={"elevated"}
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsOpenSidebar(true)}
      >
        <ListFilterIcon />
      </Button>
      {/* TODO: adicionar library button */}
    </div>
  );
};

export { SearchInput };
