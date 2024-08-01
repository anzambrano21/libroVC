import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
export default defineConfig({
    plugins: [
        reactRefresh(),
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
});