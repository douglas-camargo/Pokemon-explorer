/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Permitir cualquier hostname
        pathname: '**', // Permitir cualquier ruta
      },
    ],
  },
  // Configuraciones para mejorar compatibilidad
  experimental: {
    // Configuraciones experimentales más conservadoras
  },
  // Ignorar warnings de ESLint durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;