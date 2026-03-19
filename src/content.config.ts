import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const blogs = defineCollection({
    loader: file('./src/content/blogs/blogs.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        content: z.string().optional(),
    }),
});

const offers = defineCollection({
    loader: file('./src/content/offers/offers.json', {
        parser: (text) => JSON.parse(text).productos,
    }),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        price: z.number(),
        discountPrice: z.number().optional(),
        description: z.string(),
        offerEnds: z.coerce.date().optional(),
        imagenes: z.array(z.string()).optional(),
        content: z.string().optional(),
    }),
});

const brands = defineCollection({
    loader: file('./src/content/brands/brands.json', {
        parser: (text) => JSON.parse(text).marcas,
    }),
    schema: z.object({
        id: z.string(),
        imagen: z.string(),
    }),
});

const services = defineCollection({
    loader: file('./src/content/services/services.json', {
        parser: (text) => JSON.parse(text).servicios,
    }),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        icon: z.string(),
    }),
});


export const collections = { blogs, offers, brands, services };
