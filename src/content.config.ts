import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(180),
    role: z.string(),
    category: z.enum(['apparel', '3d-visualisation', 'technical-design', 'motion']).default('3d-visualisation'),
    client: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverUrl: z.url().optional(),
    gallery: z.array(z.string()).default([]),
    galleryUrls: z.array(z.url()).default([]),
    sketchfabModel: z.string().optional(),
    deliverables: z.array(z.string()).default([]),
    url: z.url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
  }),
});
export const collections = { work };
