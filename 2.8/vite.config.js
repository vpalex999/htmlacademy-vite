import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig ({
  build: {
    rollupOptions: {
      input: {
        index: resolve (__dirname, 'index.html'),
        about: resolve (__dirname, 'pages/about/index.html'),
        news: resolve(__dirname, 'pages/news/index.html')
      },
    },
  },
});
