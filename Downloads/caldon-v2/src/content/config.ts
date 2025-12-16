import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    fullAddress: z.string(),
    type: z.string(),
    units: z.string(),
    year: z.string(),
    date: z.date(),
    council: z.string(),
    status: z.string().optional(),
    
    thumbnail: z.string(),
    heroImage: z.string(),
    
    metrics: z.object({
      acquisitionPrice: z.string().optional(),
      totalRevenue: z.string().optional(),
      profit: z.string().optional(),
      roi: z.string().optional(),
      timeline: z.string().optional(),
      lotsSold: z.string().optional(),
      avgLotPrice: z.string().optional(),
      daysOnMarket: z.string().optional(),
      yield: z.string().optional(),
      capitalGrowth: z.string().optional(),
    }).optional(),
    
    highlights: z.array(z.string()).optional(),
    
    gallery: z.array(z.object({
      image: z.string(),
    })).optional(),
    
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  news,
};
