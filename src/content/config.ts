import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10),
    description: z.string().min(30),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    cluster: z.enum(['buying-guides', 'care-maintenance', 'materials']),
    featuredImage: z.string(),
    featuredImageAlt: z.string(),
    isPillar: z.boolean().default(false),
    author: z.string().default('Clara Vance'),
    readingTime: z.string().optional(),
    primaryKeyword: z.string().optional(),
    affiliateProducts: z
      .array(
        z.object({
          name: z.string(),
          asin: z.string(),
          affiliateUrl: z.string().url(),
          badge: z.string(),
          material: z.string(),
          capacity: z.string(),
          pourScore: z.number().min(1).max(10),
          heatScore: z.number().min(1).max(10).default(8),
          priceTier: z.enum(['$', '$$', '$$$']).default('$$'),
          bestFor: z.string().optional(),
          pros: z.array(z.string()).default([]),
          cons: z.array(z.string()).default([]),
          teapotSlug: z.string().optional(),
        })
      )
      .default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

const teapotsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    subtitle: z.string(),
    description: z.string(),
    asin: z.string(),
    affiliateUrl: z.string().url(),
    secondaryStoreName: z.string().optional(),
    secondaryAffiliateUrl: z.string().url().optional(),
    badge: z.string(),
    material: z.enum([
      'Borosilicate Glass',
      'Cast Iron',
      'Tokoname Kyusu Clay',
      'Yixing Zisha Clay',
      'Glazed Porcelain',
      'Ceramic & Stoneware',
    ]),
    style: z.enum([
      'Japanese Kyusu',
      'Traditional Tetsubin',
      'Minimalist Glass',
      'Gongfu & Clay',
      'Sculptural & Novelty',
      'English & Porcelain',
    ]),
    capacityMl: z.number().positive(),
    capacityLabel: z.string(),
    capacityTier: z.enum(['Solo (<400ml)', 'Medium (400-750ml)', 'Sharing (750ml+)']),
    priceTier: z.enum(['$', '$$', '$$$']),
    pourScore: z.number().min(1).max(10),
    heatScore: z.number().min(1).max(10),
    infuserType: z.string(),
    stovetopSafe: z.string(),
    featured: z.boolean().default(false),
    image: z.string(),
    imageAlt: z.string(),
    bestFor: z.string(),
    pros: z.array(z.string()).min(3),
    cons: z.array(z.string()).min(1),
    verdict: z.string(),
    relatedCluster: z.enum(['buying-guides', 'care-maintenance', 'materials']),
  }),
});

export const collections = {
  guides: guidesCollection,
  teapots: teapotsCollection,
};
