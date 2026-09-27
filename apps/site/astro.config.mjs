// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://magicbude.github.io',
	base: '/embedded-learning-lab',
	integrations: [mdx()],
});
