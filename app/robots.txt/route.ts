import robotsConfig from 'lib/robots';

export async function GET(){
  const cfg = robotsConfig();
  // Build a simple robots.txt
  const lines = [];
  cfg.rules.forEach(r => {
    if(r.userAgent) lines.push(`User-agent: ${r.userAgent}`);
    if(r.allow) lines.push(`Allow: ${r.allow}`);
    if(r.disallow) lines.push(`Disallow: ${r.disallow}`);
    lines.push('');
  });
  lines.push(`Sitemap: ${cfg.sitemap}`);
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain' } });
}
