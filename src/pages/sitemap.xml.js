export const prerender = true;

export async function GET() {
  const siteURL = 'https://localaifinance.com';
  const pages = [
    {
      url: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/#features',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/#how-it-works',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${siteURL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}