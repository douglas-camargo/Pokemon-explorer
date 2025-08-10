import { Suspense } from "react";
import PokemonList from "@/components/PokemonList";
import SearchBar from "@/components/SearchBar";
import ClientWrapper from "@/components/ClientWrapper";

// Componente de fallback para el skeleton
const LoadingFallback = () => (
  <div className="space-y-6">
    <div className="relative max-w-md mx-auto mb-8">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
    </div>
    <div className="text-center">
      <div className="inline-block w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Cargando Pokémon...</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6 h-[300px] animate-pulse"></div>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          Pokémon Explorer
        </h1>
        <ClientWrapper fallback={<LoadingFallback />}>
          <Suspense fallback={<LoadingFallback />}>
            <SearchBar />
            <PokemonList />
          </Suspense>
        </ClientWrapper>
      </div>
    </main>
  );
}
