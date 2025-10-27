import {defineConfig} from 'vite';
import {resolve} from 'path';
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';

const FRONT_PATH = 'src';

export default defineConfig ({
  root: 'src',
  plugins: [
    createSvgSpritePlugin ({
      svgFolder: resolve (__dirname, FRONT_PATH, 'assets/images/svg/'),
    }),
    ViteImageOptimizer ({
      jpeg: {
        quality: 75,
      },
      jpg: {
        quality: 75,
      },
      png: {
        quality: 75,
      },
    }),
  ],
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve (__dirname, FRONT_PATH, 'index.html'),
        about: resolve (__dirname, FRONT_PATH, 'pages/about/index.html'),
        news: resolve (__dirname, FRONT_PATH, 'pages/news/index.html'),
      },
    },
  },
});
