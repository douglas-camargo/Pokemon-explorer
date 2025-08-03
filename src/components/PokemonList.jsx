"use client";
import { memo } from 'react';
import PokemonCard from './PokemonCard';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import usePokemonList from '@/hook/usePokemonList';

const PokemonList = memo(() => {
  const { loading, error, filteredPokemon, totalPokemon, refetch } = usePokemonList();

  if (error) {
    return (
      <ErrorMessage
        title="Error al cargar Pokémon"
        message={error}
        onRetry={refetch}
      />
    );
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            Cargando Pokémon...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6 h-[300px] animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center text-gray-600 dark:text-gray-400">
        {filteredPokemon.length === totalPokemon ? (
          `Mostrando todos los ${totalPokemon} Pokémon`
        ) : (
          `Mostrando ${filteredPokemon.length} de ${totalPokemon} Pokémon`
        )}
      </div>
      
      {filteredPokemon.length === 0 ? (
        <div className="text-center py-8">
          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              No se encontraron Pokémon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Intenta con otro término de búsqueda
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      )}
    </div>
  );
});

PokemonList.displayName = 'PokemonList';

export default PokemonList;
