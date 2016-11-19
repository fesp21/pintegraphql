import Vue from 'vue'
import Vuex from 'vuex'
import detail from './modules/Detail/store'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
Vue.config.debug = true
const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  users: []
}

// export the store with a root state, actions, getters and mutations and a submodule detail
export default new Vuex.Store({
  modules: {
    detail
  },
  state,
  actions,
  getters,
  mutations,
  strict: debug
})
