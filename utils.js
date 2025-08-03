import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const formatPokemonId = (id) => {
  return id.toString().padStart(3, '0');
};

// Función para formatear números grandes
export const formatNumber = (num) => {
  return new Intl.NumberFormat('es-ES').format(num);
};

// Función para obtener el color de tipo de pokémon
export const getTypeColor = (type) => {
  if (!type) return 'bg-gray-400';
  
  const typeName = type.toLowerCase();
  const colors = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-300',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-500',
    rock: 'bg-yellow-800',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-400',
  };
  
  return colors[typeName] || 'bg-gray-400';
};