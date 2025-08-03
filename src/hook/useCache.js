import { useRef, useCallback } from 'react';

// Cache global para toda la aplicación - usando objeto simple para compatibilidad
const globalCache = {};

// Función para limpiar cache expirado
const cleanExpiredCache = (cache) => {
  const now = Date.now();
  Object.keys(cache).forEach(key => {
    const item = cache[key];
    if (item && now - item.timestamp > item.ttl) {
      delete cache[key];
    }
  });
};

export const useCache = () => {
  const cacheRef = useRef(globalCache);

  const get = useCallback((key) => {
    if (!cacheRef.current || !key) return null;
    
    const item = cacheRef.current[key];
    if (item && Date.now() - item.timestamp < item.ttl) {
      return item.data;
    }
    if (item) {
      delete cacheRef.current[key];
    }
    return null;
  }, []);

  const set = useCallback((key, data, ttl = 5 * 60 * 1000) => { // 5 minutos por defecto
    if (!cacheRef.current || !key) return;
    
    // Limpiar cache expirado antes de agregar nuevos datos
    cleanExpiredCache(cacheRef.current);
    
    cacheRef.current[key] = {
      data,
      timestamp: Date.now(),
      ttl
    };
  }, []);

  const clear = useCallback(() => {
    if (!cacheRef.current) return;
    cacheRef.current = {};
  }, []);

  const remove = useCallback((key) => {
    if (!cacheRef.current || !key) return;
    delete cacheRef.current[key];
  }, []);

  const has = useCallback((key) => {
    if (!cacheRef.current || !key) return false;
    
    const item = cacheRef.current[key];
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