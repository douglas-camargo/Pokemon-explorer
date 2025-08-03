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

const PokemonCard = memo(({ name, url }) => {
  const { pokemon, loading, error } = usePokemonCard(url);

  if (loading || !pokemon) {
    return (
      <Card css="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm animate-pulse">
        <CardContent css="h-[300px]" />
      </Card>
    );
  }

  if (error) {
    return (
      <Card css="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
        <CardContent css="h-[300px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-300 text-sm">
              Error al cargar {capitalize(name)}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card css="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105">
      <CardHeader css="relative h-48">
        <Image
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={name}
          fill
          className="object-contain p-4"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-2 right-2 text-sm font-mono text-gray-500 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded">
          #{formatPokemonId(pokemon.id)}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle css="text-xl mb-3">{capitalize(name)}</CardTitle>
        <div className="flex gap-2 mb-4 flex-wrap">
          {pokemon.types.map(({ type }) => (
            <Badge
              key={type.name}
              css={getTypeColor(type.name)}
            >
              {capitalize(type.name)}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {pokemon.stats.slice(0, 4).map((stat) => (
            <div key={stat.stat.name} className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                {capitalize(stat.stat.name)}:
              </span>
              <span className="font-semibold">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});

PokemonCard.displayName = 'PokemonCard';

export default PokemonCard;
