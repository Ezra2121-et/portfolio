import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel({ mode: 'static' }),
  output: 'static',
  site: 'https://jossy.dev'
});
