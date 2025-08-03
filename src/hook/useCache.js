import { useRef, useCallback } from 'react';

// Cache global para toda la aplicación
const globalCache = new Map();

export const useCache = () => {
  const cacheRef = useRef(globalCache);

  const get = useCallback((key) => {
    const item = cacheRef.current.get(key);
    if (item && Date.now() - item.timestamp < item.ttl) {
      return item.data;
    }
    if (item) {
      cacheRef.current.delete(key);
    }
    return null;
  }, []);

  const set = useCallback((key, data, ttl = 5 * 60 * 1000) => { // 5 minutos por defecto
    cacheRef.current.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }, []);

  const clear = useCallback(() => {
    cacheRef.current.clear();
  }, []);

  const remove = useCallback((key) => {
    cacheRef.current.delete(key);
  }, []);

  const has = useCallback((key) => {
    const item = cacheRef.current.get(key);
    return item && Date.now() - item.timestamp < item.ttl;
  }, []);

  return {
    get,
    set,
    clear,
    remove,
    has
  };
}; 