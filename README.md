# Pokémon Explorer 🎮

Una aplicación web moderna y optimizada para explorar el mundo Pokémon, construida con Next.js 15, React 19 y Tailwind CSS.

## ✨ Características

- **🔍 Búsqueda en tiempo real** con debounce de 300ms
- **⚡ Cache inteligente** que evita llamadas innecesarias a la API
- **🚀 Optimización de rendimiento** con memomización y lazy loading
- **📱 Interfaz moderna** con animaciones suaves
- **🔄 Manejo de errores robusto** con reintentos automáticos
- **📊 Información detallada** de cada Pokémon

## 🚀 Optimizaciones Implementadas

### Cache Inteligente
- **Cache de lista de Pokémon**: Los datos se cachean por 10 minutos
- **Cache de detalles**: Los detalles de cada Pokémon se cachean por 30 minutos
- **Evita recargas**: Cuando el buscador se vacía, no se vuelven a cargar los datos

### Búsqueda Optimizada
- **Debounce de 300ms**: Evita llamadas innecesarias mientras el usuario escribe
- **Filtrado local**: Una vez cargados los datos, la búsqueda es instantánea
- **Indicador de búsqueda**: Muestra qué término se está buscando

## 🛠️ Tecnologías

- **Next.js 15** - Framework de React
- **React 19** - Biblioteca de UI
- **Tailwind CSS** - Framework de CSS
- **JavaScript ES6+** - Sin TypeScript, código más simple
- **clsx + tailwind-merge** - Utilidades para clases CSS

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/douglas-camargo/Pokemon-explorer
cd pokemon-explorer

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🎯 Uso

1. **Explorar Pokémon**: La aplicación carga automáticamente los primeros 151 Pokémon
2. **Buscar**: Usa la barra de búsqueda para filtrar por nombre
3. **Ver detalles**: Cada tarjeta muestra información detallada del Pokémon

## 🎨 Componentes Principales

- **PokemonList**: Lista principal de Pokémon con cache
- **PokemonCard**: Tarjeta individual de Pokémon
- **SearchBar**: Barra de búsqueda con debounce
- **LoadingSpinner**: Indicador de carga atractivo
- **ErrorMessage**: Manejo de errores mejorado

## 🔄 Hooks Personalizados

- **usePokemonList**: Maneja la lista de Pokémon con cache
- **usePokemonCard**: Maneja los detalles de cada Pokémon
- **useSearchBar**: Maneja la búsqueda con debounce
- **useCache**: Sistema de cache global

## 🚀 Mejoras de Rendimiento

1. **Cache Global**: Evita llamadas repetidas a la API
2. **Debounce**: Optimiza las búsquedas en tiempo real
3. **Memorización**: Evita re-renders innecesarios
4. **Lazy Loading**: Carga optimizada de imágenes
5. **Error Boundaries**: Manejo robusto de errores

## 📱 Responsive Design

- **Mobile**: Diseño optimizado para móviles
- **Grid Adaptativo**: Se adapta a diferentes tamaños de pantalla
- **Accesibilidad**: Cumple con estándares de accesibilidad

¡Disfruta explorando el mundo Pokémon! 🎮✨
