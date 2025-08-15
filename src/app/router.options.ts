import type { RouterConfig } from '@nuxt/schema';
import BasePage from '@pages/BasePage.vue';

export default <RouterConfig>{
    routes: () => [
        {
            name: 'base',
            path: '/base',
            component: BasePage,
        },
        {
            name: 'NotFound',
            path: '/:pathMatch(.*)*',
            component: () => import('@views/error.vue'),
            meta: {
                layout: 'none',
            }
        }
    ],
};
