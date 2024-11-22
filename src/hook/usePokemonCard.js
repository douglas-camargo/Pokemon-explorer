import { useState, useEffect } from "react";

const usePokemonCard = (url) => {

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [url]);
  
  return {
    pokemon,
    loading,
  };
};

export default usePokemonCard;
