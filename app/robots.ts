import type { MetadataRoute } from 'next';

const APP_URL = process.env.NEXT_PUBLIC_HOST || 'https://otu.ai';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${APP_URL}/sitemap.xml`,
    };
}
