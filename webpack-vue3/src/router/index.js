import { createRouter, createWebHistory } from "vue-router";
import index from '../pages/index.vue'
import upload from '../pages/upload.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/upload',
            component: upload
        }
    ]
})

export default router;