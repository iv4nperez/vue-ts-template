import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

//screen
import HomeScreen from '../screens/HomeScreen.vue'
import AboutScreen from '../screens/AboutScreen.vue'
import LoginScreen from '../screens/LoginScreen.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeScreen
    },
    {
        path: '/about',
        name: 'About',
        component: AboutScreen
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginScreen
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router;

