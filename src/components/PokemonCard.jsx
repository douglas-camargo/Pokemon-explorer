"use client";
import { memo } from 'react';
import Image from 'next/image';
import Badge from './common/Badge';
import Card from './common/Card';
import CardContent from './common/CardContent';
import CardHeader from './common/CardHeader';
import { capitalize, formatPokemonId, getTypeColor } from '../../utils';
import CardTitle from './common/CardTitle';
import usePokemonCard from '@/hook/usePokemonCard';
import useImageLoader from '@/hook/useImageLoader';

// Constantes de clases para estilos reutilizables
const loadingCardBase = "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm animate-pulse";
const errorCardBase = "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800";
const errorContentBase = "h-[300px] flex items-center justify-center";
const errorText = "text-red-600 dark:text-red-300 text-sm";
const mainCardBase = "overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 animate-fade-in";
const cardHeaderBase = "relative h-48";
const imageBase = "object-contain p-4";
const pokemonIdBase = "absolute top-2 right-2 text-sm font-mono text-gray-500 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded";
const typesContainer = "flex gap-2 mb-4 flex-wrap";
const statsGrid = "grid grid-cols-2 gap-2 text-sm";
const statItem = "flex justify-between";
const statLabel = "text-gray-600 dark:text-gray-400";
const statValue = "font-semibold";

const PokemonCard = memo(({ name, url, index = 0 }) => {
  const { pokemon, loading, error } = usePokemonCard(url);
  
  // Cargar la imagen del Pokémon
  const imageUrl = pokemon?.sprites?.other?.['official-artwork']?.front_default;
  const { imageLoaded, imageError } = useImageLoader(imageUrl);

  // Animación de entrada con delay escalonado
  const animationDelay = index * 0.1; // 100ms entre cada tarjeta

  // Mostrar skeleton si está cargando o si la imagen no está lista
  if (loading || !pokemon || !imageLoaded) {
    return (
      <div 
        className="animate-fade-in"
        style={{ animationDelay: `${animationDelay}s` }}
      >
        <Card css={loadingCardBase}>
          <CardContent css="h-[300px]" />
        </Card>
      </div>
    );
  }

  if (error || imageError) {
    return (
      <div 
        className="animate-fade-in"
        style={{ animationDelay: `${animationDelay}s` }}
      >
        <Card css={errorCardBase}>
          <CardContent css={errorContentBase}>
            <div className="text-center">
              <p className={errorText}>
                Error al cargar {capitalize(name)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div 
      className="animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Card css={mainCardBase}>
        <CardHeader css={cardHeaderBase}>
          <Image
            src={imageUrl}
            alt={name}
            fill
            className={imageBase}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className={pokemonIdBase}>
            #{formatPokemonId(pokemon.id)}
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle css="text-xl mb-3">{capitalize(name)}</CardTitle>
          <div className={typesContainer}>
            {pokemon.types.map(({ type }) => (
              <Badge
                key={type.name}
                css={getTypeColor(type.name)}
              >
                {capitalize(type.name)}
              </Badge>
            ))}
          </div>
          <div className={statsGrid}>
            {pokemon.stats.slice(0, 4).map((stat) => (
              <div key={stat.stat.name} className={statItem}>
                <span className={statLabel}>
                  {capitalize(stat.stat.name)}:
                </span>
                <span className={statValue}>{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

PokemonCard.displayName = 'PokemonCard';

export default PokemonCard;
