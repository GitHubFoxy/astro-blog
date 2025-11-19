// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdoc', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    publishedDate: z.coerce.date(),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = { posts };
