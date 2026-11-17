export const CLUSTER_SLUGS = [
  'buying-guides',
  'care-maintenance',
  'materials',
] as const;

export type ClusterSlug = (typeof CLUSTER_SLUGS)[number];

export interface ClusterMeta {
  slug: ClusterSlug;
  title: string;
  shortTitle: string;
  description: string;
  targetAudience: string;
  pillarSlug: string;
  pillarTitle: string;
  accentLabel: string;
  dataForSeoTopKeywords: readonly string[];
}

export const CLUSTERS: Readonly<Record<ClusterSlug, ClusterMeta>> = {
  'buying-guides': {
    slug: 'buying-guides',
    title: 'Curated Buying Guides & Unique Teapots',
    shortTitle: 'Buying Guides',
    description:
      'Hands-on testing and side-by-side reviews of borosilicate glass, Japanese kyusu, cast iron tetsubin, and sculptural teapots built for drip-free pours.',
    targetAudience: 'Gift buyers, design lovers, and tea vessel collectors',
    pillarSlug: 'coolest-unique-teapots',
    pillarTitle: '25 Coolest & Most Unique Teapots That Actually Pour Well',
    accentLabel: 'Curated Picks',
    dataForSeoTopKeywords: [
      'glass teapot',
      'teapot with infuser',
      'japanese teapot',
      'loose leaf teapot',
      'kyusu teapot',
      'unique teapots',
      'flowering teapot',
      'cool teapots',
      'novelty teapots',
    ],
  },
  'care-maintenance': {
    slug: 'care-maintenance',
    title: 'Care, Cleaning & Troubleshooting',
    shortTitle: 'Care & Maintenance',
    description:
      'Step-by-step protocols for seasoning cast iron teapots, removing tannin stains from glass and porcelain, descaling minerals, and fixing spout drips.',
    targetAudience: 'Teapot owners seeking practical maintenance and troubleshooting solutions',
    pillarSlug: 'complete-teapot-care-guide',
    pillarTitle: 'How to Clean, Descale, and Maintain Every Type of Teapot',
    accentLabel: 'Care & Physics',
    dataForSeoTopKeywords: [
      'how to clean a teapot',
      'how to remove tea stains',
      'descale teapot',
      'can you put glass teapot on stove',
      'how to clean cast iron teapot',
    ],
  },
  materials: {
    slug: 'materials',
    title: 'Materials & Brewing Comparisons',
    shortTitle: 'Materials & Craft',
    description:
      'Technical thermal and flavor comparisons across Yixing zisha clay, Tokoname clay, glazed porcelain, borosilicate glass, and cast iron teapots.',
    targetAudience: 'Tea enthusiasts comparing brewing materials and vessel physics before buying',
    pillarSlug: 'teapot-materials-comparison',
    pillarTitle: 'Cast Iron vs. Glass vs. Clay vs. Ceramic: Which Teapot Material Is Best?',
    accentLabel: 'Material Science',
    dataForSeoTopKeywords: [
      'ceramic teapot',
      'yixing clay teapot',
      'clay teapot',
      'borosilicate glass teapot',
      'cast iron teapot',
      'porcelain teapot',
      'tetsubin teapot',
      'gaiwan vs teapot',
    ],
  },
};

export const CLUSTER_LIST: readonly ClusterMeta[] = CLUSTER_SLUGS.map(
  (slug) => CLUSTERS[slug],
);

/**
 * Retrieve metadata for a topic cluster slug.
 * Returns guaranteed ClusterMeta for typed ClusterSlug inputs, or undefined for unknown strings.
 */
export function getClusterMeta(slug: ClusterSlug): ClusterMeta;
export function getClusterMeta(slug: string): ClusterMeta | undefined;
export function getClusterMeta(slug: string): ClusterMeta | undefined {
  return Object.prototype.hasOwnProperty.call(CLUSTERS, slug)
    ? CLUSTERS[slug as ClusterSlug]
    : undefined;
}
