import { createRouter, createWebHistory } from 'vue-router';
import SignIn from './components/SignIn.vue';
import Dashboard from './components/DashboardPage.vue';

const routes = [
    {
        path: '/',
        component: SignIn
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/create-order',
        component: () => import('./components/CreateOrder.vue')
    },
    {
        path: '/create-quotation',
        component: () => import('./components/CreateQuotation.vue')
    },
    {
        path: '/create-purchase',
        component: () => import('./components/CreatePurchase.vue')
    },
    {
        path: '/create-delivery',
        component: () => import('./components/CreateDelivery.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
