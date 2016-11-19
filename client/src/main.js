import Vue from 'vue'
import App from './views/App'
import router from './router'
import store from './store/index' // vuex store instance
import { sync } from 'vuex-router-sync'
import './vuematerial'

sync(store, router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export { app, router, store }
