import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.VietnamTradeData.com';
  const pages = [
    '',
    'Vietnam-import-data',
    'Vietnam-export-data',
    'about-us',
    'pricing',
    'contact-us',
  ];

  return pages.map((p) => {
    const pageFile = p === '' ? path.join(process.cwd(), 'app', 'page.tsx') : path.join(process.cwd(), 'app', p, 'page.tsx');
    let lastModified = new Date().toISOString();
    try {
      const stats = fs.statSync(pageFile);
      lastModified = stats.mtime.toISOString();
    } catch (err) {
      // file not found or unreadable — fall back to now
    }

    return {
      url: `${baseUrl}/${p}`.replace(/\/\/$/, '/'),
      lastModified,
    };
  });
}
