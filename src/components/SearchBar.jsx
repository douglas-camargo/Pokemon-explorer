"use client";
import useSearchBar from "@/hook/useSearchBar";
import Input from "./common/Input";

// Constantes de clases para estilos reutilizables
const searchContainer = "relative max-w-md mx-auto mb-8 animate-fade-in-up";

const SearchBar = () => {
  const { searchParams, handleSearch } = useSearchBar();

  return (
    <div className={searchContainer}>
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
