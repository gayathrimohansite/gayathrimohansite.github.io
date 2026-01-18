import { defineCollection, z } from "astro:content";

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    event: z.string().optional(),
    date: z.date().optional(),
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    published: z.date().optional(),
  }),
});

const press = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    outlet: z.string().optional(),
    description: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    title: z.string().optional(),
  }),
});

export const collections = { talks, writing, press, testimonials };
