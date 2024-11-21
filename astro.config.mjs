import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress(), react()],
  vite: {
    assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg'], // Add image file extensions to be treated as assets
  },
});
