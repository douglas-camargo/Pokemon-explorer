import { useRouter, useSearchParams } from 'next/navigation';

const useSearchBar = () => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.replace(`/?${params.toString()}`);
  };

  
  return {
    handleSearch,
    searchParams
  };
};

export default useSearchBar;