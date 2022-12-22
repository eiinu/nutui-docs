import { defineConfig } from 'vite';
import Markdown from 'vite-plugin-md';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './src/docs_react_taro/config.json';
const hljs = require('highlight.js'); // https://highlightjs.org/
const resolve = path.resolve;
import { renameIndexPlugin } from './src/assets/util/renameIndexPlugin';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/react_taro',
  server: {
    port: 2021,
    host: '0.0.0.0',
    open: '/react_taro/index.react.taro.html',
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
    renameIndexPlugin('index.react.taro.html', 'index.html')
  ],
  build: {
    target: 'es2015',
    outDir: './dist/react_taro/',
    assetsDir: config.version,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        react: resolve(__dirname, 'index.react.taro.html')
      },
      output: {
        entryFileNames: `${config.version}/[name].js`,
        chunkFileNames: `${config.version}/[name].js`,
        assetFileNames: `${config.version}/[name].[ext]`
      }
    }
  }
});
