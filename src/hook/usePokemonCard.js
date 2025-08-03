import { useState, useEffect, useCallback } from "react";
import { useCache } from "./useCache";

const usePokemonCard = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { get, set, has } = useCache();

  const fetchPokemonDetails = useCallback(async () => {
    if (!url) return;
    
    const cacheKey = `pokemon-${url}`;
    
    // Verificamos si ya tenemos los datos en cache
    if (has(cacheKey)) {
      const cachedData = get(cacheKey);
      setPokemon(cachedData);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Guardamos en cache por 30 minutos
      set(cacheKey, data, 30 * 60 * 1000);
      setPokemon(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [url, get, set, has]);

  useEffect(() => {
    if (url) {
      fetchPokemonDetails();
    }
  }, [fetchPokemonDetails]);
  
  return {
    pokemon,
    loading,
    error,
    refetch: fetchPokemonDetails
  };
};

export default usePokemonCard;
