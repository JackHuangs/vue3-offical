import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
     // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: '/',
    component: () => import(/* webpackChunkName: "Layout" */ '@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
        name: 'home',
        meta: { title: '首页', icon: 'index' }
      },
      {
        path: '/news',
        component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue'),
        name: 'news',
        meta: { title: '资讯', icon: 'news' }
      },
      {
        path: '/recruit',
        component: () => import(/* webpackChunkName: "recruit" */ '@/views/recruit/index.vue'),
        name: 'recruit',
        meta: { title: '招聘', icon: 'recruit' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
