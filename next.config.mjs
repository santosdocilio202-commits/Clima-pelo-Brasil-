/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso aqui adiciona cabeçalhos de segurança em todas as páginas
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' }, // Impede que usem seu site dentro de um frame
          { key: 'X-Content-Type-Options', value: 'nosniff' }, // Impede sniffing de arquivos
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
};

export default nextConfig;

