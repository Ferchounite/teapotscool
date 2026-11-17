import type { CollectionEntry } from 'astro:content';
import {
  AMAZON_TAG,
  CLUSTERS,
  CLUSTER_LIST,
  CLUSTER_SLUGS,
  getClusterMeta,
  type ClusterMeta,
  type ClusterSlug,
} from '../data/clusters';

export {
  AMAZON_TAG,
  CLUSTERS,
  CLUSTER_LIST,
  CLUSTER_SLUGS,
  getClusterMeta,
  type ClusterMeta,
  type ClusterSlug,
};

export const SITE_URL = 'https://teapotscool.com';

export const EDITORIAL_AUTHOR = {
  name: 'Clara Vance',
  role: 'Tea Enthusiast & Product Curator',
  url: `${SITE_URL}/about/`,
};

export function getClusterHubHref(cluster: ClusterSlug): string {
  return `/guides/${cluster}/`;
}

export function getClusterPillarHref(cluster: ClusterSlug): string {
  const meta = getClusterMeta(cluster);
  return `/guides/${cluster}/${meta.pillarSlug}/`;
}

export function getGuideLeafSlug(entry: CollectionEntry<'guides'>): string {
  const cluster = entry.data.cluster;
  if (entry.slug.startsWith(`${cluster}/`)) {
    return entry.slug.slice(cluster.length + 1);
  }
  const segments = entry.slug.split('/').filter(Boolean);
  return segments[segments.length - 1] ?? entry.slug;
}

export function getGuideUrl(entry: CollectionEntry<'guides'>): string {
  return `/guides/${entry.data.cluster}/${getGuideLeafSlug(entry)}/`;
}

export function getTeapotLeafSlug(entry: CollectionEntry<'teapots'>): string {
  const segments = entry.slug.split('/').filter(Boolean);
  return segments[segments.length - 1] ?? entry.slug;
}

export function getTeapotUrl(entry: CollectionEntry<'teapots'>): string {
  return `/gallery/${getTeapotLeafSlug(entry)}/`;
}

export function estimateReadingTime(body: string | undefined, explicit?: string): string {
  if (explicit && explicit.trim().length > 0) return explicit;
  if (!body) return '6 min read';
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(4, Math.round(words / 220));
  return `${mins} min read`;
}

export function formatIsoDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatScore(score: number): string {
  const clamped = Math.max(1, Math.min(10, score));
  return Number.isInteger(clamped) ? String(clamped) : clamped.toFixed(1);
}
