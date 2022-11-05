import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';

import { vueI18n } from '@intlify/vite-plugin-vue-i18n';
import vue from '@vitejs/plugin-vue';

import path from 'path';
// import PACKAGE from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  return {
    assetsInclude: ['/public/assets/**/*'],
    base: process.env.BASE_URL,
    build: {
      target: 'es2020',
      brotliSize: false,
      cssCodeSplit: false,
      chunkSizeWarningLimit: 60000,
      minify: process.env.NODE_ENV === 'production' ? 'terser' : 'esbuild',
      // outDir: path.resolve(
      //   __dirname,
      //   './dist/' + process.env.VITE_APP_HOST + '/' + PACKAGE.version,
      // ),
      rollupOptions: {
        output: {
          entryFileNames: `js/[name][hash].js`,
          chunkFileNames: `js/[name][hash].js`,
        },
      },
      sourcemap: process.env.NODE_ENV === 'production' ? false : 'inline',
      terserOptions: {
        ecma: 2020,
        compress: { drop_console: true, drop_debugger: true },
        output: { comments: false, beautify: false },
      },
    },
    plugins: [
      splitVendorChunkPlugin(),
      vue({ reactivityTransform: true }),
      vueI18n({ include: path.resolve(__dirname, './src/locales/**') }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~': path.resolve(__dirname, './public'),
      },
    },
  };
});
