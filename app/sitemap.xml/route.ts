import sitemapFunc from 'lib/sitemap';

export async function GET(){
  const items = sitemapFunc();
  const urls = items.map(i => `  <url>\n    <loc>${i.url}</loc>\n    <lastmod>${new Date(i.lastModified).toISOString()}</lastmod>\n  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
