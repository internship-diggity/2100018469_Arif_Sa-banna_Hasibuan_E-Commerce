/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lojyqxclyualelovhnsz.supabase.co'
            }
        ]
    }
};

export default nextConfig;
