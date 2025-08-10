// Constantes de estilos para el badge
const badgeBaseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: '9999px',
  padding: '0.125rem 0.625rem',
  fontSize: '0.75rem',
  fontWeight: '600',
  color: '#ffffff',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  textTransform: 'capitalize'
};

// Mapeo completo de colores para todos los tipos de Pokémon
const colorMap = {
  'bg-red-500': '#ef4444',
  'bg-blue-500': '#3b82f6',
  'bg-green-500': '#22c55e',
  'bg-yellow-400': '#facc15',
  'bg-purple-500': '#a855f7',
  'bg-pink-500': '#ec4899',
  'bg-indigo-400': '#818cf8',
  'bg-lime-500': '#84cc16',
  'bg-gray-400': '#9ca3af',
  'bg-gray-500': '#6b7280',
  'bg-gray-800': '#1f2937',
  'bg-red-700': '#b91c1c',
  'bg-blue-300': '#93c5fd',
  'bg-yellow-600': '#ca8a04',
  'bg-yellow-800': '#92400e',
  'bg-purple-700': '#7c3aed',
  'bg-indigo-700': '#4338ca',
  'bg-pink-400': '#f472b6'
};

const Badge = ({css, children, ...props}) => {
  // Obtener el color de fallback
  const fallbackColor = colorMap[css] || '#6b7280';

  return (
    <span 
      style={{ 
        ...badgeBaseStyles,
        backgroundColor: fallbackColor
      }}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
