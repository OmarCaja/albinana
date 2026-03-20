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
        content: z.string().optional(),
        priority: z.number().optional(),
    }),
});

const offers = defineCollection({
    loader: file('./src/content/offers/offers.json'),
    schema: z.object({
        id: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        brand: z.string(),
        products: z.string(),
        discount: z.string(),
    }),
});

export const collections = { blogs, brands, services, offers };
