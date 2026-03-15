import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const blog = defineCollection({
    loader: file('./src/content/blog/blog.json'),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        content: z.string().optional(),
    }),
});

const ofertas = defineCollection({
    loader: file('./src/content/ofertas/ofertas.json', {
        parser: (text) => JSON.parse(text).productos,
    }),
    schema: z.object({
        title: z.string(),
        price: z.number(),
        discountPrice: z.number().optional(),
        description: z.string(),
        offerEnds: z.coerce.date().optional(),
        imagenes: z.array(z.string()).optional(),
        content: z.string().optional(),
    }),
});

export const collections = { blog, ofertas };
