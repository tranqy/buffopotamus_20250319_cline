import { defineCollection, z } from 'astro:content';

const storiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    featuredImage: z.string(),
    images: z.array(z.string()).optional(),
  }),
});

const factsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(['buffalo', 'hippo', 'buffopotamus']),
    image: z.string(),
    content: z.string(),
    funActivity: z.string().optional(),
  }),
});

export const collections = {
  'stories': storiesCollection,
  'facts': factsCollection,
};
