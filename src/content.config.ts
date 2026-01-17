import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**.md', base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const products = defineCollection({
    loader: glob({ pattern: '**.md', base: "./src/content/products" }),
    schema: z.object({
        title: z.string(),
        price: z.number(),
        discountPrice: z.number().optional(),
        description: z.string(),
        offerEnds: z.coerce.date().optional(),
    }),
});

export const collections = { blog, products };
