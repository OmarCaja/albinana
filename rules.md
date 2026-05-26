# Reglas y consideraciones del proyecto

> [!IMPORTANT]
> **Regla de oro del proyecto:** La consistencia del diseño. Es imprescindible que todas las páginas y elementos de la web mantengan exactamente el mismo estilo, tipografías, bordes (`border-radius`, `glass-border`), colores (`var(--color-primary)`, `var(--glass-bg)`, etc.), tamaños de letra, espaciados (`var(--spacing-*)`) y márgenes. Antes de crear o modificar componentes o páginas, revisa `src/styles/global.css` y componentes similares existentes (como `OfferCard.astro` o `BlogCard.astro`) para garantizar esta consistencia absoluta.

Este archivo contiene las directrices principales para el mantenimiento y escalabilidad del proyecto. Se debe consultar siempre antes de realizar modificaciones.

## Gestión de Ofertas (`src/content/offers/offers.json`)

Para añadir nuevas promociones, se debe modificar el archivo `offers.json` añadiendo un nuevo objeto al array con la siguiente estructura:

```json
{
  "id": "Único (incrementar el último ID)",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "brand": "NOMBRE DE LA MARCA",
  "products": "PRODUCTO O GAMA",
  "products_en": "PRODUCT OR RANGE",
  "discount": "FORMATO_ESTANDAR_DEL_DESCUENTO"
}
```

### Formatos de Descuento Soportados

Para que los descuentos se rendericen correctamente con traducciones amigables (human-readable) en la web (gestionado en `src/pages/offers/index.astro`), se **deben** utilizar los siguientes patrones exactos en la propiedad `discount`:

1. **3x2:** `"3X2"` -> Renderiza "Llévate 3 productos y paga solo 2."
2. **Descuento en la segunda unidad:** `"2ªUD 30%"` (o cualquier porcentaje) -> Renderiza "30% en la segunda unidad."
3. **Descuento directo en porcentaje:** `"20%"` -> Renderiza "20% de descuento directo."
4. **Descuento directo en euros:** `"3€"` -> Renderiza "3€ de descuento directo."
5. **Descuento por llevar varias unidades:** `"10€ EN 2UD"` -> Renderiza "10€ de descuento al llevar 2 unidades." (con variaciones específicas si la marca es ISDIN o dependiendo del mes).
6. **Descuento mixto escalonado:** `"1UD 3€ 2UD 8€"` -> Renderiza "3€ en 1 unidad o 8€ en 2 unidades."
7. **Descuento porcentual por compra superior:** `"20% EN COMPRAS > 10€"` -> Renderiza "20% de descuento en compras superiores a 10€."

### Consideraciones al añadir nuevos tipos de promociones

Si surge la necesidad de añadir un formato de descuento que **no** se ajusta a los enumerados arriba, sigue estos pasos:

1. **NO** introduzcas el texto largo o descriptivo directamente en el `discount` de `offers.json`. Utiliza un patrón corto y predecible.
2. Ve al archivo `src/i18n/translations.ts` y añade la nueva función o clave de traducción para los idiomas soportados (`es` y `en`).
3. Ve a `src/pages/offers/index.astro` y actualiza la función `getFullOfferText()` añadiendo un nuevo `else if` que capture mediante `includes()` o expresiones regulares tu nuevo patrón, y extrayendo los datos variables (porcentajes, precios) para pasarlos a la traducción correspondiente.

Esto garantiza que la interfaz de la web ofrezca siempre textos coherentes, amigables y con un soporte multiidioma correcto.

## Gestión de Blogs (`src/content/blogs/blogs.json`)

Para crear o modificar entradas del blog, se edita directamente el array en `src/content/blogs/blogs.json`.
La estructura que debe seguir cada objeto es la siguiente:
```json
{
  "id": "slug-url-del-blog",
  "title": "Título en español",
  "title_en": "Title in english",
  "description": "Breve descripción",
  "description_en": "Short description",
  "pubDate": "YYYY-MM-DD",
  "content": "<h2>Contenido HTML en español</h2>...",
  "content_en": "<h2>HTML content in english</h2>..."
}
```
**Consideraciones:**
- El `id` se utilizará como la URL final (`/blogs/tu-slug`).
- El `content` soporta etiquetas HTML (como `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`), y estas serán parseadas y estilizadas automáticamente por la plantilla `.astro` correspondiente.
- Asegúrate siempre de limpiar datos o blogs "de prueba" (mock data) en producción.

## Correcciones y Lecciones Aprendidas (A evitar)

*(Esta sección se irá actualizando a medida que se detecten errores o se establezcan nuevas convenciones tras correcciones para evitar repetir fallos en el futuro).*

- **Textos poco legibles en JSON**: Nunca introducir textos largos y sin procesar directamente en la propiedad `discount` de las ofertas (ej. evitar `"20% (> 10€)"`). En su lugar, se debe crear un patrón y procesarlo en la lógica de front-end usando el sistema de traducciones (`src/i18n/translations.ts`).
- **Dejar menús inaccesibles o huérfanos**: Cuando se habilita una nueva funcionalidad principal en la web (como la sección de Blogs), hay que asegurarse de añadir el enlace correspondiente en el menú principal de navegación (p. ej., `src/components/HamburgerMenu.astro`).
- **Uso excesivo de mayúsculas (Title Case / All Caps)**: Nunca usar mayúsculas tipo "Title Case" en español (ej. evitar "23 de Mayo: Día Mundial contra el Melanoma"). Se debe usar "Sentence case" donde solo la primera palabra de la frase va en mayúscula (ej. "23 de mayo: Día mundial contra el melanoma"). Tampoco se deben usar bloques enteros en mayúsculas como "LAS CAUSAS" o "MELANOMA"; siempre usar minúsculas ("Las causas", "melanoma").

## Uso de Astro y MCPs

Este proyecto es un sitio web desarrollado con Astro.js, una plataforma de generación estática moderna. Para cualquier desarrollo o modificación del proyecto que requiera información técnica sobre Astro, se debe utilizar siempre el MCP `Astro_docs_search_astro_docs` para consultar la documentación oficial y mantener la implementación consistente con las mejores prácticas del framework.

- **Importante**: Antes de implementar cualquier funcionalidad en Astro, se debe buscar información en la documentación oficial usando el comando `Astro_docs_search_astro_docs`.
- **Proceso recomendado**: Si se necesita implementar una funcionalidad específica en Astro, primero consultar la documentación oficial mediante el MCP antes de cualquier cambio.
- **Mantenimiento**: Las actualizaciones del proyecto deben seguir las directrices y buenas prácticas documentadas en la documentación oficial de Astro para garantizar consistencia técnica y calidad del código.
