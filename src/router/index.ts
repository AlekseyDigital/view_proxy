import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import { ViewFactory, viewOptions, ViewOptions } from './viewFactory';

const viewFactory = new ViewFactory({
} as RouteRecordRaw);

const routes: Array<RouteRecordRaw> = [
  viewFactory.create({//'@/views/About',
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  }),
  viewFactory.create({
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/About.vue')
  })
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
