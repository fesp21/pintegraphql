import Vue from 'vue'
import Vuex from 'vuex'
import home from './Home/store'
import detail from './Detail/store'
import root from './Root/store'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    root,
    home,
    detail
  },
  strict: debug
})
