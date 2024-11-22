"use client";
import Image from 'next/image';
import Badge from './common/Badge';
import Card from './common/Card';
import CardContent from './common/CardContent';
import CardHeader from './common/CardHeader';
import { capitalize, formatPokemonId } from '../../utils';
import CardTitle from './common/CardTitle';
import usePokemonCard from '@/hook/usePokemonCard';
import { typeColors } from '../../utils/utils';

const PokemonCard = ({ name, url }) => {
  
  const { pokemon, loading } = usePokemonCard(url);

  if (loading || !pokemon) {
    return (
      <Card css="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm animate-pulse">
        <CardContent css="h-[300px]" />
      </Card>
    );
  }

  return (
    <Card css="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <CardHeader css="relative h-48">
        <Image
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={name}
          fill
          className="object-contain p-4"
          priority
        />
        <div className="absolute top-2 right-2 text-sm font-mono text-gray-500">
          #{formatPokemonId(pokemon.id)}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle css="text-xl mb-3">{capitalize(name)}</CardTitle>
        <div className="flex gap-2 mb-4">
          {pokemon.types.map(({ type }) => (
            <Badge
              key={type.name}
              css={`${typeColors[type.name]} text-white`}
            >
              {capitalize(type.name)}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {pokemon.stats.slice(0, 3).map((stat) => (
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
}


export default PokemonCard;
