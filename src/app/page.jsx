import { Suspense } from "react";
import PokemonList from "@/components/PokemonList";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          Pokémon Explorer
        </h1>
        <SearchBar />
        <Suspense fallback={<div className="text-center">Loading Pokémon...</div>}>
          <PokemonList />
        </Suspense>
      </div>
    </main>
  );
}
