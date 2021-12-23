
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import CreatePost from './pages/post/Create.vue';
import ListPost from './pages/post/Index.vue';
import EditPost from './pages/post/Edit.vue';
import store from './store';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guest: true,
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            guest: true,
        }
    },
    {
        path: '/post/create',
        component: CreatePost,
        name: 'create-post',
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/post',
        component: ListPost,
        name: 'list-post',
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/post/edit/:id',
        component: EditPost,
        name: 'edit-post',
        meta: {
            requiresAuth: true,
        }
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters['auth/isAuthenticated']) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters['auth/isAuthenticated']) {
            next("/");
            return;
        }
        next();
    } else {
        next();
    }
});

export default router;
