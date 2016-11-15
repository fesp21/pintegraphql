import Vue from 'vue'
import App from './views/App'
import router from './router'
import store from './vuex/store' // vuex store instance
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import apolloClient from './apolloconfig'
import VueApollo from 'vue-apollo'

Vue.use(VueMaterial)
Vue.use(VueApollo, {
  apolloClient
})

Vue.material.theme.register('default', {
  primary: {
    color: 'light-blue',
    hue: '700'
  },
  accent: 'blue'
})
sync(store, router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export { app, router, store }
