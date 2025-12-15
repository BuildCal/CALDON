import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    fullAddress: z.string(),
    status: z.enum(['completed', 'in-progress', 'da-approved']),
    statusLabel: z.string(),
    type: z.enum(['residential', 'commercial']),
    typeLabel: z.string(),
    units: z.string(),
    year: z.string(),
    council: z.string(),
    thumbnail: z.string(),
    heroImage: z.string(),
    gallery: z.array(z.object({ image: z.string() })).optional(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
    date: z.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
