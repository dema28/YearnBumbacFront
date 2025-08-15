// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import {fileURLToPath} from 'node:url';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint',
        '@nuxtjs/i18n',
        '@nuxt/test-utils/module'
    ],

    i18n: {
        defaultLocale: 'en',
        locales: [
            {code: 'en', name: 'English', file: 'en.json'},
            {code: 'ru', name: 'Russian', file: 'ru.json'},
            {code: 'ro', name: 'Romanian', file: 'ro.json'},
        ]
    },

    css: ['~/assets/css/main.css'],
    srcDir: 'src',
    vite: {
    	server: {
      	  allowedHosts: ['qscfgrt657.duckdns.org', 'localhost']
    	},
        plugins: [
            tailwindcss(),
        ],
    },
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
        '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
        '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
        '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
    }
});
