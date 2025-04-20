import { Categories } from "./components/categories";
import { SearchInput } from "./components/search-input";
import { SearchFiltersProps } from "./data";

const SearchFilters = ({ data }: SearchFiltersProps) => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput />
      <Categories data={data} />
      Search Filters
    </div>
  );
};

export { SearchFilters };
