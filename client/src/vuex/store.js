import Vue from 'vue'
import Vuex from 'vuex'
import detail from './Detail/store'
import root from './Root/store'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    root,
    detail
  },
  strict: debug
})
