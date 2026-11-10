// Every image dropped into src/assets/gallery/ shows up automatically (optimized by astro:assets).
const files = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/gallery/*.{jpg,jpeg,JPG,png,webp}",
    { eager: true },
);

export const galleryImages = Object.keys(files)
    .sort()
    .map((k) => files[k].default);
