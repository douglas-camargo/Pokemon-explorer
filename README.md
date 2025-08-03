# Pokémon Explorer 🎮

Una aplicación web moderna y optimizada para explorar el mundo Pokémon, construida con Next.js 15, React 19 y Tailwind CSS. **Proyecto 100% JavaScript sin TypeScript**.

## ✨ Características

- **🔍 Búsqueda en tiempo real** con debounce de 300ms
- **⚡ Cache inteligente** que evita llamadas innecesarias a la API
- **🎨 Diseño responsive** con soporte para modo oscuro
- **🚀 Optimización de rendimiento** con memoización y lazy loading
- **📱 Interfaz moderna** con animaciones suaves
- **🔄 Manejo de errores robusto** con reintentos automáticos
- **📊 Información detallada** de cada Pokémon
- **🟨 JavaScript puro** - Sin TypeScript, más simple y directo

## 🚀 Optimizaciones Implementadas

### Cache Inteligente
- **Cache de lista de Pokémon**: Los datos se cachean por 10 minutos
- **Cache de detalles**: Los detalles de cada Pokémon se cachean por 30 minutos
- **Evita recargas**: Cuando el buscador se vacía, no se vuelven a cargar los datos

### Búsqueda Optimizada
- **Debounce de 300ms**: Evita llamadas innecesarias mientras el usuario escribe
- **Filtrado local**: Una vez cargados los datos, la búsqueda es instantánea
- **Indicador de búsqueda**: Muestra qué término se está buscando

### Rendimiento
- **Memoización**: Componentes optimizados con React.memo
- **Lazy loading**: Imágenes optimizadas con Next.js Image
- **Virtualización**: Solo se renderizan los elementos visibles

## 🛠️ Tecnologías

- **Next.js 15** - Framework de React
- **React 19** - Biblioteca de UI
- **Tailwind CSS** - Framework de CSS
- **JavaScript ES6+** - Sin TypeScript, código más simple
- **clsx + tailwind-merge** - Utilidades para clases CSS

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
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

## 🚀 Deploy en Vercel

Este proyecto está optimizado para deploy en Vercel:

1. **Conectar repositorio**: Conecta tu repositorio de GitHub a Vercel
2. **Configuración automática**: Vercel detectará automáticamente que es un proyecto Next.js
3. **Build optimizado**: El proyecto incluye configuraciones específicas para Vercel
4. **Cache inteligente**: Funciona perfectamente en el entorno serverless de Vercel

### Configuraciones Específicas para Vercel

- **next.config.mjs**: Configurado para compatibilidad con Vercel
- **.vercelignore**: Archivos excluidos del deploy
- **Cache compatible**: Sistema de cache que funciona en entorno serverless
- **JavaScript puro**: Sin dependencias de TypeScript que puedan causar problemas

## 🎯 Uso

1. **Explorar Pokémon**: La aplicación carga automáticamente los primeros 151 Pokémon
2. **Buscar**: Usa la barra de búsqueda para filtrar por nombre
3. **Ver detalles**: Cada tarjeta muestra información detallada del Pokémon
4. **Modo oscuro**: La aplicación se adapta automáticamente al tema del sistema

## 🔧 Estructura del Proyecto

```
src/
├── app/                 # Páginas de Next.js
├── components/          # Componentes React
│   ├── common/         # Componentes reutilizables
│   └── ...            # Componentes específicos
├── hook/               # Hooks personalizados
└── utils.js           # Utilidades generales
```

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
3. **Memoización**: Evita re-renders innecesarios
4. **Lazy Loading**: Carga optimizada de imágenes
5. **Error Boundaries**: Manejo robusto de errores

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Grid Adaptativo**: Se adapta a diferentes tamaños de pantalla
- **Modo Oscuro**: Soporte completo para temas oscuros
- **Accesibilidad**: Cumple con estándares de accesibilidad

## 🔮 Próximas Mejoras

- [ ] Paginación infinita
- [ ] Filtros por tipo de Pokémon
- [ ] Comparador de Pokémon
- [ ] Favoritos locales
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

---

¡Disfruta explorando el mundo Pokémon! 🎮✨
