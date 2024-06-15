import { createRouter, createWebHistory } from 'vue-router'
import Widget from '../components/Widget.vue'
import Portfolio from '../components/Portfolio.vue'
import Tp2_3 from '../components/Tp2_3.vue'
import Tp4 from '../components/Tp4.vue'
import Tp5 from '../components/Tp5.vue'
import Tp6 from '../components/Tp6.vue'

const routes = [
  { path: '/', redirect: '/widget' },
  { path: '/widget', component: Widget },
  { path: '/portfolio', component: Portfolio },
  { path: '/tp2-3', component: Tp2_3 },
  { path: '/tp4', component: Tp4 },
  { path: '/tp5', component: Tp5 },
  { path: '/tp6', component: Tp6 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
