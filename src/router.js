import { createRouter, createWebHistory } from 'vue-router';
import TableEmissions from './components/AppTableEmissions.vue';
import AboutPage from './components/AppAbout.vue';
import LegalPage from './components/AppLegal.vue';

const routes = [
    {
        path: '/',
        name: 'TableEmissions',
        component: TableEmissions
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/legal',
        name: 'Legal',
        component: LegalPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;