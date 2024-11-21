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

};

export default nextConfig