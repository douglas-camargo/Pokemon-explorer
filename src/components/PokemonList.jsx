"use client";
import { memo } from 'react';
import PokemonCard from './PokemonCard';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import SkeletonCard from './common/SkeletonCard';
import usePokemonList from '@/hook/usePokemonList';

// Constantes de clases para estilos reutilizables
const containerBase = "space-y-6";
const loadingContainer = "text-center";
const loadingText = "text-gray-600 dark:text-gray-400";
const skeletonGrid = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";
const infoText = "text-center text-gray-600 dark:text-gray-400";
const noResultsContainer = "text-center py-8";
const noResultsCard = "bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6";
const noResultsIconContainer = "flex items-center justify-center mb-4";
const noResultsIcon = "w-8 h-8 text-gray-400";
const noResultsTitle = "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2";
const noResultsMessage = "text-gray-600 dark:text-gray-400";
const pokemonGrid = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";

const PokemonList = memo(() => {
  const { loading, error, filteredPokemon, totalPokemon, refetch } = usePokemonList();

  if (error) {
    return (
      <div className="animate-fade-in">
        <ErrorMessage
          title="Error al cargar Pokémon"
          message={error}
          onRetry={refetch}
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div className={`${containerBase} animate-fade-in`}>
        <div className={loadingContainer}>
          <LoadingSpinner size="lg" className="mb-4" />
          <p className={loadingText}>
            Cargando Pokémon...
          </p>
        </div>
        <div className={skeletonGrid}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <SkeletonCard />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerBase} animate-fade-in`}>
      <div className={infoText}>
        {filteredPokemon.length === totalPokemon ? (
          `Mostrando todos los ${totalPokemon} Pokémon`
        ) : (
          `Mostrando ${filteredPokemon.length} de ${totalPokemon} Pokémon`
        )}
      </div>
      
      {filteredPokemon.length === 0 ? (
        <div className={`${noResultsContainer} animate-fade-in`}>
          <div className={noResultsCard}>
            <div className={noResultsIconContainer}>
              <svg className={noResultsIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className={noResultsTitle}>
              No se encontraron Pokémon
            </h3>
            <p className={noResultsMessage}>
              Intenta con otro término de búsqueda
            </p>
          </div>
        </div>
      ) : (
        <div className={pokemonGrid}>
          {filteredPokemon.map((pokemon, index) => (
            <PokemonCard 
              key={pokemon.name} 
              name={pokemon.name} 
              url={pokemon.url} 
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
});

PokemonList.displayName = 'PokemonList';

export default PokemonList;
