import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const maturity = z.enum(['capture', 'draft', 'review', 'verified', 'archived']);
const visibility = z.enum(['public', 'unlisted']);
const domain = z.enum(['programming-foundations', 'computer-and-hardware', 'mcu-and-bare-metal', 'interfaces-and-communication', 'real-time-systems', 'embedded-linux', 'networking-and-iot', 'engineering-testing-and-debugging', 'system-design-and-reliability']);
const source = z.object({
  id: z.string(),
  type: z.enum(['official', 'standard', 'book', 'paper', 'article', 'video', 'experiment']),
  title: z.string(),
  organization: z.string().optional(),
  url: z.url(),
  locator: z.string().optional(),
  accessedAt: z.coerce.date(),
  supports: z.array(z.string()).min(1),
});

const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: '../../content/knowledge' }),
  schema: z.object({
    id: z.string(), title: z.string(), slug: z.string(), summary: z.string(),
    type: z.literal('knowledge'), domain, tags: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default([]), maturity, visibility,
    createdAt: z.coerce.date(), updatedAt: z.coerce.date(), verifiedAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date().optional(), prerequisites: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]), authors: z.array(z.string()).min(1),
    license: z.literal('CC-BY-SA-4.0'), sources: z.array(source).min(1),
  }),
});

const course = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: '../../content/courses' }),
  schema: z.object({
    id: z.string(), title: z.string(), slug: z.string(), summary: z.string(),
    type: z.literal('course'), domain, tags: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default([]), maturity, visibility,
    createdAt: z.coerce.date(), updatedAt: z.coerce.date(), verifiedAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date().optional(), prerequisites: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]), authors: z.array(z.string()).min(1),
    license: z.literal('CC-BY-SA-4.0'), sources: z.array(source).min(1), version: z.string(),
    units: z.array(z.object({
      id: z.string(), title: z.string(), objective: z.string(),
      status: z.enum(['planned', 'in-progress', 'available']),
      knowledge: z.array(z.string()).default([]),
    })).min(1),
  }),
});

export const collections = { knowledge, course };
