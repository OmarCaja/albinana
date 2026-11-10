// Content JSON stores "/brands/1.png"; the files live in src/assets/brands/ so astro:assets can optimize them.
const files = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/brands/*.{png,jpg,webp}",
    { eager: true },
);

export const brandImage = (path: string) => files[`/src/assets${path}`]?.default;
