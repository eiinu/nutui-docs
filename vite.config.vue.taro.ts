import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import path from 'path';
import config from './src/docs_vue_taro/config.json';
const hljs = require('highlight.js'); // https://highlightjs.org/
const refRandom = Math.random().toString(36).slice(-8);
const resolve = path.resolve;
import { renameIndexPlugin } from './src/assets/util/renameIndexPlugin';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue_taro/',
  server: {
    port: 2021,
    host: '0.0.0.0',
    open: '/vue_taro/index.vue.taro.html',
    proxy: {
      '/devServer': {
        target: 'https://nutui.jd.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      markdownItOptions: {
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ''; // 使用额外的默认转义
        }
      }
    }),
    renameIndexPlugin('index.vue.taro.html', 'index.html')
  ],
  build: {
    target: 'es2015',
    outDir: './dist/vue_taro/',
    assetsDir: `${config.version}-${refRandom}`,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        vueTaro: resolve(__dirname, 'index.vue.taro.html')
      },
      output: {
        entryFileNames: `${config.version}-${refRandom}/[name].js`,
        chunkFileNames: `${config.version}-${refRandom}/[name].js`,
        assetFileNames: `${config.version}-${refRandom}/[name].[ext]`
      }
    }
  }
});
