import { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://redremingtonfab.com';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const staticPages = [
        '',
        '/payment',
        '/gallery',
        // FUTURE ROUTES
        // '/services',
        // '/contact',
        // '/about',
        // Add other static routes here
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
        .map(
            (page) => `
    <url>
      <loc>${BASE_URL}${page}</loc>
    </url>
  `
        )
        .join('')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
}
