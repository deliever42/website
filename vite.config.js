import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        Vue(),
        Pages({
            dirs: [{ dir: resolve(__dirname, 'src', 'pages'), baseRoute: '/' }],
            extensions: ['vue']
        })
    ],
    build: {
        assetsDir: '_deliever42',
        outDir: resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@/': './src/'
        }
    }
});
