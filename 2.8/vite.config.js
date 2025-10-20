import {defineConfig} from 'vite';
import {resolve} from 'path';
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';

export default defineConfig ({
  plugins: [
    createSvgSpritePlugin ({
      svgFolder: './assets/images/svg/',
    }),
    ViteImageOptimizer ({
      jpeg: {
        quality: 75,
      },
      png: {
        quality: 75,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve (__dirname, 'index.html'),
        about: resolve (__dirname, 'pages/about/index.html'),
        news: resolve (__dirname, 'pages/news/index.html'),
      },
    },
  },
});
