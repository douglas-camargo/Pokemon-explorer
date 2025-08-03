import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useRef } from 'react';

const useSearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const debounceRef = useRef(null);

  const handleSearch = useCallback((value) => {
    // Limpiamos el timeout anterior
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Creamos un nuevo timeout para debounce
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (value.trim()) {
        params.set('search', value.trim());
      } else {
        params.delete('search');
      }
      router.replace(`/?${params.toString()}`);
    }, 300); // 300ms de debounce
  }, [searchParams, router]);

  return {
    handleSearch,
    searchParams
  };
};

export default useSearchBar;