import HomePage from './views/HomePage'
import DetailPage from './views/DetailPage'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/user/:username', name: 'detail', component: DetailPage }
]

var router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
