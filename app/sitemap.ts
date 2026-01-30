import type { MetadataRoute } from 'next';

const APP_URL = process.env.NEXT_PUBLIC_HOST || 'https://otu.ai';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: APP_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${APP_URL}/welcome`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 2,
        },
    ];
}
