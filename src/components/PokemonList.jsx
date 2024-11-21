"use client";
import PokemonCard from './PokemonCard';
import usePokemonList from '@/hook/usePokemonList';

const PokemonList = () => {

  const { loading, filteredPokemon } = usePokemonList();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6 h-[300px] animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredPokemon.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

export default PokemonList;
