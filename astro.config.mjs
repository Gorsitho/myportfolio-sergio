// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages setup, derived from the Git remote
// (github.com/Gorsitho/myportfolio-sergio → a *project* repository).
// The site is therefore served from https://gorsitho.github.io/myportfolio-sergio/
//
// • Renamed the repository? Update `base` to '/<new-name>'.
// • Moved to a <username>.github.io repository or a custom domain? Remove `base`
//   (and point `site` at the new domain).
export default defineConfig({
  site: 'https://gorsitho.github.io',
  base: '/myportfolio-sergio',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Pixelify Sans',
      cssVariable: '--font-pixel',
      weights: [400, 600],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
    {
      provider: fontProviders.google(),
      name: 'Atkinson Hyperlegible Next',
      cssVariable: '--font-body',
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
