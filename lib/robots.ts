export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com';
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/admin/', '/private/'] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
