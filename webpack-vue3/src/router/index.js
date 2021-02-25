import { createRouter, createWebHistory } from "vue-router";
import index from '../pages/index.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: index
        }
    ]
})

export default router;