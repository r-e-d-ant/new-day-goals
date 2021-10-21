import { createRouter, createWebHistory } from 'vue-router'
import Goals from '../views/Goals.vue'
import NewGoal from '../views/NewGoal.vue'

const routes = [
  {
    path: '/',
    name: 'Goals',
    component: Goals
  },
  {
    path: '/new-goal',
    name: 'NewGoal',
    component: NewGoal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
