import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        exclude: ['nuxt.config.ts', 'node_modules'],
    },
})
