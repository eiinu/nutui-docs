import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import config from './src/docs_vue/config.json';
const refRandom = Math.random().toString(36).slice(-8);
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 2021,
    host: '0.0.0.0',
    open: '/index.html',
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
    })
  ],
  build: {
    target: 'es2015',
    outDir: './dist/',
    assetsDir: `${config.version}-${refRandom}`,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        vue: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: `${config.version}-${refRandom}/[name].js`,
        chunkFileNames: `${config.version}-${refRandom}/[name].js`,
        assetFileNames: `${config.version}-${refRandom}/[name].[ext]`
      }
    }
  }
});
