import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const maturity = z.enum(['capture', 'draft', 'review', 'verified', 'archived']);
const visibility = z.enum(['public', 'unlisted']);
const domain = z.enum(['programming-foundations', 'computer-and-hardware', 'mcu-and-bare-metal', 'interfaces-and-communication', 'real-time-systems', 'embedded-linux', 'networking-and-iot', 'engineering-testing-and-debugging', 'system-design-and-reliability']);
const sourceCitation = z.object({
  sourceId: z.string(),
  locator: z.string().optional(),
  relation: z.enum(['supports', 'explains', 'demonstrates', 'contrasts', 'contradicts', 'supersedes']).default('supports'),
  claims: z.array(z.string()).min(1),
  checkedAt: z.coerce.date(),
});

const sources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: '../../content/sources' }),
  schema: z.object({
    id: z.string(), title: z.string(), slug: z.string(), summary: z.string(),
    type: z.literal('source'), domain, tags: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default([]), maturity, visibility,
    createdAt: z.coerce.date(), updatedAt: z.coerce.date(), verifiedAt: z.coerce.date().optional(),
    authors: z.array(z.string()).min(1), organization: z.string().optional(),
    sourceType: z.enum(['standard', 'official-doc', 'official-code', 'book', 'paper', 'course', 'article', 'video', 'community']),
    authorityLevel: z.enum(['normative', 'official', 'educational', 'practitioner', 'community']),
    url: z.url(), version: z.string().optional(), checkedAt: z.coerce.date(),
    access: z.enum(['free', 'registration', 'mixed', 'paid']), license: z.string(),
    reuse: z.string(), localCopy: z.boolean().default(false),
    scope: z.array(z.string()).min(1), audience: z.array(z.string()).default([]),
    prerequisites: z.array(z.string()).default([]), readingGuide: z.array(z.string()).min(1),
    strengths: z.array(z.string()).min(1), limitations: z.array(z.string()).min(1),
    supports: z.array(z.string()).min(1),
  }),
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
    license: z.literal('CC-BY-SA-4.0'), sources: z.array(sourceCitation).min(1),
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
    license: z.literal('CC-BY-SA-4.0'), sources: z.array(sourceCitation).min(1), version: z.string(),
    package: z.object({
      version: z.string(), path: z.string(), status: z.enum(['draft', 'review', 'approved']),
      entry: z.string(), manifest: z.string(),
    }).optional(),
    units: z.array(z.object({
      id: z.string(), title: z.string(), objective: z.string(),
      status: z.enum(['planned', 'in-progress', 'available']),
      knowledge: z.array(z.string()).default([]),
      sources: z.array(z.string()).default([]),
      exercises: z.array(z.string()).default([]),
      acceptance: z.array(z.string()).min(1),
    })).min(1),
  }),
});

export const collections = { sources, knowledge, course };
