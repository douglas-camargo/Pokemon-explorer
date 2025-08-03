"use client";
import useSearchBar from "@/hook/useSearchBar";
import Input from "./common/Input";

const SearchBar = () => {
  const { searchParams, handleSearch } = useSearchBar();

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <Input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('search') ?? ''}
      />
    </div>
  );
};

export default SearchBar;
