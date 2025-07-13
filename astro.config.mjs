import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-educational-blog.pages.dev', // Replace with your actual domain
  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],
  output: 'static',
  adapter: undefined, // Static output for Cloudflare Pages
  
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  
  // Build configuration
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets'
  },
  
  // SEO and performance
  compressHTML: true,
  
  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  
  // Vite configuration for development
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    optimizeDeps: {
      exclude: ['d3']
    }
  }
});