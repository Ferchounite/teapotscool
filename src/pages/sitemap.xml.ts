import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

interface StaticRouteConfig {
  path: string;
  changefreq: SitemapEntry['changefreq'];
  priority: string;
}

const STATIC_ROUTES: readonly StaticRouteConfig[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/gallery/', changefreq: 'weekly', priority: '0.9' },
  { path: '/guides/', changefreq: 'weekly', priority: '0.9' },
  { path: '/guides/buying-guides/', changefreq: 'weekly', priority: '0.8' },
  { path: '/guides/care-maintenance/', changefreq: 'weekly', priority: '0.8' },
  { path: '/guides/materials/', changefreq: 'weekly', priority: '0.8' },
  { path: '/tools/tea-steeping-timer/', changefreq: 'monthly', priority: '0.8' },
  { path: '/tools/tea-ratio-calculator/', changefreq: 'monthly', priority: '0.8' },
  { path: '/tools/teapot-quiz/', changefreq: 'monthly', priority: '0.8' },
  { path: '/about/', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy-policy/', changefreq: 'yearly', priority: '0.3' },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizePath(path: string): string {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

function formatDateIsoDay(date: Date | undefined, fallback: string): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return fallback;
  }
  return date.toISOString().slice(0, 10);
}

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site?.toString() ?? 'https://teapotscool.com').replace(/\/+$/, '');
  const buildDate = new Date().toISOString().slice(0, 10);

  const [guides, teapots] = await Promise.all([
    getCollection('guides'),
    getCollection('teapots'),
  ]);

  const urlMap = new Map<string, SitemapEntry>();

  for (const route of STATIC_ROUTES) {
    const loc = `${baseUrl}${normalizePath(route.path)}`;
    urlMap.set(loc, {
      loc,
      lastmod: buildDate,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  }

  for (const guide of guides) {
    const cluster = guide.data.cluster;
    const cleanSlug = guide.slug.startsWith(`${cluster}/`)
      ? guide.slug.slice(cluster.length + 1)
      : guide.slug;
    const loc = `${baseUrl}${normalizePath(`/guides/${cluster}/${cleanSlug}`)}`;
    urlMap.set(loc, {
      loc,
      lastmod: formatDateIsoDay(guide.data.updatedDate ?? guide.data.pubDate, buildDate),
      changefreq: guide.data.isPillar ? 'weekly' : 'monthly',
      priority: guide.data.isPillar ? '0.9' : '0.8',
    });
  }

  for (const teapot of teapots) {
    const loc = `${baseUrl}${normalizePath(`/gallery/${teapot.slug}`)}`;
    urlMap.set(loc, {
      loc,
      lastmod: buildDate,
      changefreq: 'monthly',
      priority: teapot.data.featured ? '0.8' : '0.7',
    });
  }

  const urlsXml = Array.from(urlMap.values())
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
