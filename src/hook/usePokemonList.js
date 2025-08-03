import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useCache } from "./useCache";

const usePokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const { get, set, has } = useCache();

  const fetchPokemon = useCallback(async () => {
    const cacheKey = 'pokemon-list';
    
    // Verificamos si ya tenemos datos en cache
    if (has(cacheKey)) {
      const cachedData = get(cacheKey);
      setPokemon(cachedData);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151' // Aumentamos el límite a 151
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Guardamos en cache por 10 minutos
      set(cacheKey, data.results, 10 * 60 * 1000);
      setPokemon(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [get, set, has]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  // Memoizamos el filtrado para evitar recálculos innecesarios
  const filteredPokemon = useMemo(() => {
    if (!searchQuery) {
      return pokemon; // Si no hay búsqueda, devolvemos todos los pokémon
    }
    return pokemon.filter((p) =>
      p.name.toLowerCase().includes(searchQuery)
    );
  }, [pokemon, searchQuery]);

  return {
    loading,
    error,
    filteredPokemon,
    totalPokemon: pokemon.length,
    refetch: fetchPokemon
  };
};

export default usePokemonList;
