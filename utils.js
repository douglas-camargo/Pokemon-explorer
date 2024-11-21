// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const formatPokemonId = (id) => {
  return id.toString().padStart(3, '0');
};