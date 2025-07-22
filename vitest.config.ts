import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        globals: true,
        environment: 'nuxt',
        exclude: ['nuxt.config.ts', 'node_modules'],
    },
});
