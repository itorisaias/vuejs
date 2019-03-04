import routersDog from './dog-routes'

import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: () => import('@/components/Todo/ToDoList.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  { ...routersDog }
]
